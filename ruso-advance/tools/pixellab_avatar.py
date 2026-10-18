#!/usr/bin/env python3
"""Genera el avatar de Masha en pixel art con la API de PixelLab (https://www.pixellab.ai).

Uso:
    export PIXELLAB_API_KEY=tu_clave
    python3 tools/pixellab_avatar.py            # genera todo
    python3 tools/pixellab_avatar.py --solo-base # solo la imagen base, para elegir semilla

Qué hace:
  1. Genera una Masha base (rubia, pelo medio largo, jersey burdeos, taza de té) con
     /v1/generate-image-pixflux.
  2. Para cada expresión, repinta solo la cara de la base con /v1/inpaint, para que
     todas las versiones sean la misma Masha.
  3. Guarda avatar/masha-<expresión>.png y reescribe avatar/pixel.js; la app las usa
     en lugar del SVG en cuanto ese archivo deja de ser null.

Si la cara no cae dentro de la máscara, ajusta CARA (x0, y0, x1, y1 en píxeles de la
imagen de TAMANO x TAMANO) mirando avatar/masha-base.png. Solo usa la biblioteca estándar.
"""
import base64, json, os, sys, urllib.request, urllib.error, zlib, struct

API = 'https://api.pixellab.ai/v1'
TAMANO = 128
SEMILLA = int(os.environ.get('PIXELLAB_SEED', '2718'))
CARA = (36, 22, 92, 78)  # zona de la cara que se repinta en cada expresión
AQUI = os.path.dirname(os.path.abspath(__file__))
SALIDA = os.path.join(AQUI, '..', 'avatar')

BASE = ('pixel art bust portrait of Masha, a young Russian woman, long straight blonde hair '
        'past her shoulders, side-swept bangs, gray-blue eyes, light freckles, burgundy turtleneck '
        'sweater, holding a white tea mug with a red folk pattern, front view, centered, '
        'warm soft lighting, clean outline')
EXPRESIONES = {
    'neutral': 'calm neutral expression, mouth closed',
    'smirk': 'cynical smirk, one eyebrow raised, half-closed eyes',
    'annoyed': 'annoyed frown, eyebrows pulled down',
    'eyeroll': 'rolling her eyes upward, unimpressed',
    'happy': 'big happy smile, eyes closed with joy, blushing cheeks',
    'pleased': 'small warm smile, slight blush',
    'surprised': 'surprised, eyebrows raised, mouth open in an O',
    'sad': 'sad expression, eyebrows tilted up, small frown',
    'talk': 'talking, mouth half open, neutral eyes',
}


def llamar(ruta, cuerpo):
    clave = os.environ.get('PIXELLAB_API_KEY')
    if not clave:
        sys.exit('Falta la variable de entorno PIXELLAB_API_KEY.')
    req = urllib.request.Request(API + ruta, data=json.dumps(cuerpo).encode(), method='POST',
                                 headers={'Authorization': 'Bearer ' + clave, 'Content-Type': 'application/json'})
    try:
        with urllib.request.urlopen(req, timeout=180) as r:
            return json.load(r)
    except urllib.error.HTTPError as e:
        sys.exit('PixelLab respondió %s en %s: %s' % (e.code, ruta, e.read().decode(errors='replace')[:500]))


def png_mascara(x0, y0, x1, y1, n=TAMANO):
    """PNG en escala de grises: blanco = zona a repintar."""
    filas = b''
    for y in range(n):
        filas += b'\x00' + bytes(255 if (x0 <= x < x1 and y0 <= y < y1) else 0 for x in range(n))
    def trozo(tipo, datos):
        return struct.pack('>I', len(datos)) + tipo + datos + struct.pack('>I', zlib.crc32(tipo + datos) & 0xffffffff)
    return (b'\x89PNG\r\n\x1a\n' + trozo(b'IHDR', struct.pack('>IIBBBBB', n, n, 8, 0, 0, 0, 0))
            + trozo(b'IDAT', zlib.compress(filas)) + trozo(b'IEND', b''))


def b64img(datos):
    return {'type': 'base64', 'base64': base64.b64encode(datos).decode()}


def guardar(nombre, respuesta):
    datos = base64.b64decode(respuesta['image']['base64'])
    ruta = os.path.join(SALIDA, nombre)
    with open(ruta, 'wb') as f:
        f.write(datos)
    print('  guardado', os.path.relpath(ruta))
    return datos


def main():
    os.makedirs(SALIDA, exist_ok=True)
    print('Imagen base…')
    base = guardar('masha-base.png', llamar('/generate-image-pixflux', {
        'description': BASE + ', ' + EXPRESIONES['neutral'],
        'image_size': {'width': TAMANO, 'height': TAMANO},
        'no_background': True, 'outline': 'single color black outline', 'shading': 'medium shading',
        'detail': 'highly detailed', 'view': 'side', 'direction': 'south', 'seed': SEMILLA,
    }))
    if '--solo-base' in sys.argv:
        return
    mascara = png_mascara(*CARA)
    rutas = {}
    for expr, texto in EXPRESIONES.items():
        print('Expresión:', expr)
        if expr == 'neutral':
            datos = base
            with open(os.path.join(SALIDA, 'masha-neutral.png'), 'wb') as f:
                f.write(datos)
        else:
            guardar('masha-%s.png' % expr, llamar('/inpaint', {
                'description': BASE + ', ' + texto,
                'image_size': {'width': TAMANO, 'height': TAMANO},
                'inpainting_image': b64img(base), 'mask_image': b64img(mascara),
                'no_background': True, 'outline': 'single color black outline', 'shading': 'medium shading',
                'detail': 'highly detailed', 'seed': SEMILLA,
            }))
        rutas[expr] = 'avatar/masha-%s.png' % expr
    with open(os.path.join(SALIDA, 'pixel.js'), 'w') as f:
        f.write('/* Avatar de Masha en pixel art, generado con PixelLab por tools/pixellab_avatar.py. */\n')
        f.write('window.MASHA_PIXEL = ' + json.dumps(rutas, indent=2) + ';\n')
    print('Listo. Recuerda añadir las imágenes a SHELL en sw.js si quieres que funcionen sin conexión.')


if __name__ == '__main__':
    main()
