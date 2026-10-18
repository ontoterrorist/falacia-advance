"""Síntesis con voces Piper (ONNX) usando espeak-ng con un diccionario ruso propio,
para que la sílaba tónica sea la que marca el curso y no la que adivina espeak."""
import json, re, subprocess, os
import numpy as np
import onnxruntime as ort

BASE = os.environ.get('RUSO_TTS', os.path.expanduser('~/ruso-tts'))
ESDATA = os.environ.get('ESDATA', os.path.join(BASE, 'esdata'))
VOICES = {
    'irina': 'vits-piper-ru_RU-irina-medium/ru_RU-irina-medium',
    'denis': 'vits-piper-ru_RU-denis-medium/ru_RU-denis-medium',
    'dmitri': 'vits-piper-ru_RU-dmitri-medium/ru_RU-dmitri-medium',
}
_cache = {}


def voice(name):
    if name not in _cache:
        p = os.path.join(BASE, VOICES[name])
        cfg = json.load(open(p + '.onnx.json'))
        opts = ort.SessionOptions()
        opts.intra_op_num_threads = 4
        opts.intra_op_num_threads = int(os.environ.get('OMP_NUM_THREADS', '4')); sess = ort.InferenceSession(p + '.onnx', opts, providers=['CPUExecutionProvider'])
        _cache[name] = (sess, cfg)
    return _cache[name]


PUNCT = re.compile(r'([.,!?;:…—]+)')


LETRA = {'б': 'b', 'в': 'v', 'г': 'ɡ', 'д': 'd', 'ж': 'ʐ', 'з': 'z', 'к': 'k', 'л': 'ɭ', 'м': 'm', 'н': 'n',
         'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'ф': 'f', 'х': 'x', 'ц': 'ts', 'ч': 'tʃʲ', 'ш': 'ʂ', 'щ': 'ɕː'}


def phonemize(text):
    """Texto → IPA de espeak-ng, conservando la puntuación (que el modelo usa para la entonación)."""
    solo = text.strip(' .!?').lower()
    if solo in LETRA:  # una preposición suelta («с», «в», «к»): su sonido, no el nombre de la letra
        return LETRA[solo] + '.'
    # en estas palabras la г se pronuncia г (espeak la lee como в, igual que en «его»)
    text = re.sub(r'\b([Дд])орого\b', r'\1ораго', text)
    text = re.sub(r'\b([Нн])емного\b', r'\1емнога', text)
    text = re.sub(r'\s*[/()]\s*', ', ', text).replace('…', '...').replace('—', ',').replace('«', '').replace('»', '').replace('"', '')
    out = []
    for part in re.split(r'([.,!?;:]+)', text):
        if not part.strip():
            continue
        if re.fullmatch(r'[.,!?;:]+', part):
            p = part.strip()
            p = '.' if p == '...' else p[-1] if p[-1] in '?!' else p[0]
            out.append(p)
            out.append(' ')
            continue
        ipa = subprocess.run(['espeak-ng', '-v', 'ru', '-q', '--ipa', part],
                             capture_output=True, text=True, errors='replace', env={**os.environ, 'ESPEAK_DATA_PATH': ESDATA}).stdout
        ipa = ' '.join(ipa.split())
        if out and out[-1] != ' ':
            out.append(' ')
        out.append(ipa)
    s = re.sub(r'(,\s*)+(?=[.!?]|$)', '', ''.join(out)).strip(' ,')
    if not s or s[-1] not in '.!?':
        s += '.'
    return s


def synth(text, vname='irina', length_scale=1.0, noise_scale=None, noise_w=None):
    sess, cfg = voice(vname)
    idmap = cfg['phoneme_id_map']
    inf = cfg['inference']
    ph = phonemize(text)
    ids = idmap['^'] + idmap['_']
    for ch in ph:
        if ch in idmap:
            ids += idmap[ch] + idmap['_']
    ids += idmap['$']
    x = np.array([ids], dtype=np.int64)
    scales = np.array([inf['noise_scale'] if noise_scale is None else noise_scale, length_scale,
                       inf['noise_w'] if noise_w is None else noise_w], dtype=np.float32)
    feeds = {'input': x, 'input_lengths': np.array([x.shape[1]], dtype=np.int64), 'scales': scales}
    names = [i.name for i in sess.get_inputs()]
    if 'sid' in names:
        feeds['sid'] = np.array([0], dtype=np.int64)
    audio = sess.run(None, feeds)[0].squeeze()
    return audio.astype(np.float32), cfg['audio']['sample_rate'], ph


if __name__ == '__main__':
    import sys, soundfile as sf
    a, sr, ph = synth(sys.argv[1], sys.argv[2] if len(sys.argv) > 2 else 'irina')
    print(ph)
    sf.write(sys.argv[3] if len(sys.argv) > 3 else '/tmp/t.wav', a, sr)
