"""Diccionarios de acentos para espeak-ng a partir de las marcas del curso.
Genera dos: el principal (acento más frecuente de cada forma) y uno alternativo
para los homógrafos (до'ма / дома', сто'ит / стои'т…)."""
import json, re, subprocess, shutil, os, sys
from collections import Counter
VOW = 'аеёиоуыэюя'
SRC = os.path.join(os.environ.get('RUSO_TTS', os.path.expanduser('~/ruso-tts')), 'es151', 'dictsource')


def stress_forms(text):
    """[(forma sin acento, nº de sílaba tónica)] de las palabras con acento marcado."""
    out = []
    for w in re.findall(r"[а-яёА-ЯЁ']+", text):
        w = w.lower().lstrip("'")
        if "'" not in w and 'ё' not in w:
            continue
        plain = w.replace("'", '')
        if sum(c in VOW for c in plain) < 2:
            continue
        k = 0; n = None
        for i, c in enumerate(w):
            if c in VOW:
                k += 1
                if (i + 1 < len(w) and w[i + 1] == "'") or (c == 'ё' and "'" not in w):
                    n = k
        if n:
            out.append((plain, n))
    return out


def build(items):
    cnt = {}
    for it in items:
        for f, n in stress_forms(it['text']):
            cnt.setdefault(f, Counter())[n] += 1
    primary = {f: c.most_common(1)[0][0] for f, c in cnt.items()}
    alt = {f: [n for n in c if n != primary[f]][0] for f, c in cnt.items() if len(c) > 1}
    base = open(os.path.join(SRC, 'ru_list.orig')).read()
    for name, table in (('esdata', primary), ('esdata_alt', {**primary, **alt})):
        dst = os.path.join(os.environ.get('RUSO_TTS', os.path.expanduser('~/ruso-tts')), name)
        if not os.path.isdir(dst):
            shutil.copytree('/usr/lib/x86_64-linux-gnu/espeak-ng-data', dst)
        lines = [f + '\t$' + str(n) for f, n in sorted(table.items())]
        lines += ['нибудь\t$u', 'либо\t$u', 'о\t$u', 'об\t$u', 'обо\t$u', 'дораго\t$1', 'немнога\t$2']
        open(os.path.join(SRC, 'ru_list'), 'w').write(base + '\n// acentos del curso\n' + '\n'.join(lines) + '\n')
        subprocess.run(['espeak-ng', '--compile=ru'], cwd=SRC, capture_output=True, env={**os.environ, 'ESPEAK_DATA_PATH': dst}, check=True)
    return primary, alt


if __name__ == '__main__':
    items = json.load(open(sys.argv[1]))
    p, a = build(items)
    print(len(p), 'formas;', 'homógrafos:', a)
