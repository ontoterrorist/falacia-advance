"""Genera un mp3 por cada texto ruso del curso con voces Piper.
Uso: python3 gen_audio.py spoken.json carpeta_salida [n]"""
import json, os, sys, subprocess, tempfile, time
import numpy as np, soundfile as sf
from multiprocessing import Pool
import build_dict

BASE = os.environ.get('RUSO_TTS', os.path.expanduser('~/ruso-tts'))

# voz Piper, semitonos, velocidad (length_scale: >1 más lento)
VOICE_CFG = {
    'masha': ('irina', 0, 1.05), 'olga': ('irina', -2, 1.1), 'waiter': ('dmitri', 0, 1.0),
    'seller': ('irina', 1.5, 1.0), 'doctor': ('denis', 0, 1.05), 'vadim': ('denis', 1, 0.95),
    'kassir': ('dmitri', 0, 1.0), 'artyom': ('dmitri', 1, 0.95), 'nina': ('irina', -1.5, 1.1),
    'galia': ('irina', -3, 1.15), 'katia': ('irina', 2.5, 0.95), 'woman': ('irina', -1, 1.0),
    'passer': ('denis', -1, 1.0), 'provod': ('irina', -0.5, 1.05), 'sergei': ('dmitri', -1.5, 1.05),
    'student': ('irina', -3.5, 1.1), 'arkady': ('denis', -2.5, 1.1), 'dima': ('denis', 2, 0.9),
    'user_m': ('denis', 0, 1.05), 'user_f': ('irina', 3, 1.05),
}
M32 = 0xffffffff


def imul(a, b):
    return (a * b) & M32


def cyrb53(s, seed=0):
    """El mismo hash que usa la app (app.js) para encontrar el archivo de cada frase."""
    h1 = (0xdeadbeef ^ seed) & M32
    h2 = (0x41c6ce57 ^ seed) & M32
    for ch in s:
        c = ord(ch)
        h1 = imul(h1 ^ c, 2654435761)
        h2 = imul(h2 ^ c, 1597334677)
    h1 = imul(h1 ^ (h1 >> 16), 2246822507)
    h1 ^= imul(h2 ^ (h2 >> 13), 3266489909)
    h2 = imul(h2 ^ (h2 >> 16), 2246822507)
    h2 ^= imul(h1 ^ (h1 >> 13), 3266489909)
    return format((2097151 & h2) * 4294967296 + (h1 & M32), 'x')


def key(voice, text):
    return cyrb53(voice + '|' + text)


PRIMARY = ALT = None


def init(p, a):
    global PRIMARY, ALT
    PRIMARY, ALT = p, a
    os.environ['OMP_NUM_THREADS'] = '1'


def work(it):
    import piper_synth
    out = it['out']
    if os.path.exists(out):
        return 0
    text = it['text']
    forms = build_dict.stress_forms(text)
    use_alt = any(f in ALT and n == ALT[f] for f, n in forms)
    piper_synth.ESDATA = os.path.join(BASE, 'esdata_alt') if use_alt else os.path.join(BASE, 'esdata')
    vname, semi, speed = VOICE_CFG[it['voice']]
    audio, sr, ph = piper_synth.synth(text.replace("'", ''), vname, length_scale=speed)
    peak = float(np.max(np.abs(audio))) or 1.0
    audio = audio / peak * 0.89
    pad = np.zeros(int(sr * 0.08), dtype=np.float32)
    audio = np.concatenate([pad, audio, pad])
    with tempfile.NamedTemporaryFile(suffix='.wav', delete=False) as tf:
        sf.write(tf.name, audio, sr)
        af = []
        if semi:
            r = 2 ** (semi / 12)
            af = ['-af', f'asetrate={sr}*{r:.5f},aresample={sr},atempo={1 / r:.5f}']
        subprocess.run(['ffmpeg', '-loglevel', 'error', '-y', '-i', tf.name, *af, '-ac', '1', '-ar', '22050',
                        '-c:a', 'libmp3lame', '-b:a', '32k', out], check=True)
        os.unlink(tf.name)
    return 1


if __name__ == '__main__':
    items = json.load(open(sys.argv[1]))
    outdir = sys.argv[2]
    os.makedirs(outdir, exist_ok=True)
    if len(sys.argv) > 3:
        items = items[:int(sys.argv[3])]
    primary, alt = build_dict.build(json.load(open(sys.argv[1])))
    for it in items:
        it['out'] = os.path.join(outdir, key(it['voice'], it['text']) + '.mp3')
    keys = [it['out'] for it in items]
    assert len(set(keys)) == len(keys), 'colisión de hash'
    t = time.time()
    with Pool(4, initializer=init, initargs=(primary, alt)) as pool:
        done = 0
        for i, r in enumerate(pool.imap_unordered(work, items, chunksize=8)):
            done += r
            if i % 250 == 0:
                print(i, 'de', len(items), round(time.time() - t), 's', flush=True)
    print('listo:', done, 'nuevos en', round(time.time() - t), 's')
