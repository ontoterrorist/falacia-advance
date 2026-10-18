"""Control de calidad: reconoce con un ASR ruso (sherpa-onnx) una muestra de los audios
generados y compara con el texto. Una similitud baja indica una frase mal pronunciada."""
import json, os, random, subprocess, sys, re, numpy as np, sherpa_onnx
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from gen_audio import key
M = os.path.join(os.environ.get('RUSO_TTS', os.path.expanduser('~/ruso-tts')), 'sherpa-onnx-small-zipformer-ru-2024-09-18') + '/'
rec = sherpa_onnx.OfflineRecognizer.from_transducer(encoder=M + 'encoder.int8.onnx', decoder=M + 'decoder.int8.onnx',
                                                    joiner=M + 'joiner.int8.onnx', tokens=M + 'tokens.txt', num_threads=2)
def norm(s):
    s = s.lower().replace("'", '').replace('ё', 'е')
    return ' '.join(re.sub(r'[^а-я ]', ' ', s).split())
def lev(a, b):
    p = list(range(len(b) + 1))
    for i, ca in enumerate(a, 1):
        c = [i]
        for j, cb in enumerate(b, 1):
            c.append(min(p[j] + 1, c[j - 1] + 1, p[j - 1] + (ca != cb)))
        p = c
    return p[-1]
items = json.load(open(sys.argv[1]))
random.seed(1)
sample = random.sample(items, int(sys.argv[3]) if len(sys.argv) > 3 else 150)
scores = []
for it in sample:
    f = sys.argv[2] + '/' + key(it['voice'], it['text']) + '.mp3'
    import os
    if not os.path.exists(f): continue
    pcm = subprocess.run(['ffmpeg', '-loglevel', 'error', '-i', f, '-ar', '16000', '-ac', '1', '-f', 's16le', '-'], capture_output=True).stdout
    a = np.frombuffer(pcm, dtype=np.int16).astype(np.float32) / 32768
    st = rec.create_stream(); st.accept_waveform(16000, a); rec.decode_stream(st)
    hyp = norm(st.result.text); ref = norm(it['text'])
    sc = 1 - lev(hyp, ref) / max(len(ref), 1)
    scores.append((sc, it['voice'], ref, hyp))
scores.sort()
print('media', round(sum(s[0] for s in scores) / len(scores), 3), 'n', len(scores))
for s in scores[:15]: print(round(s[0], 2), s[1], '|', s[2], '|', s[3])
