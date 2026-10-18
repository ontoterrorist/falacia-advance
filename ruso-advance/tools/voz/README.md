# Motor de voz

Genera un mp3 por cada frase rusa del curso con voces neuronales [Piper](https://github.com/rhasspy/piper),
pasando la pronunciación por un diccionario de acentos hecho con las marcas del curso.

Necesita Python 3 con `onnxruntime`, `numpy` y `soundfile`, además de `espeak-ng` 1.51 y `ffmpeg`.
Todo lo descargado va en `$RUSO_TTS` (por defecto `~/ruso-tts`):

- las voces `vits-piper-ru_RU-irina-medium`, `-denis-medium` y `-dmitri-medium`
  (en las versiones de sherpa-onnx: `github.com/k2-fsa/sherpa-onnx/releases/tag/tts-models`);
- `es151/dictsource`: las fuentes del diccionario ruso de espeak-ng 1.51 (`ru_list`, `ru_rules`), con
  `ru_list` copiado también como `ru_list.orig`.

Pasos, desde la raíz del repositorio:

    node tools/spoken.js /tmp/spoken.json          # todas las frases que dice la app
    python3 tools/voz/gen_audio.py /tmp/spoken.json audio

Solo genera los audios que falten. Si cambias un texto, su audio nuevo tendrá otro nombre (es un hash de
«voz|texto»): borra los que ya no se usen.

`qa_asr.py` reconoce una muestra con un modelo ruso de sherpa-onnx y lista las frases peor entendidas.
