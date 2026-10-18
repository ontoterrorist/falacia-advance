# Ruso Advance

Una app para aprender ruso en el navegador **conversando con Masha**: una profesora de San Petersburgo, medio enojona y bastante cínica, pero amable en el fondo. Vive con su gato Pelmén y toma demasiado té.

**Abrirla:** cuando esta rama se fusione con `main`, quedará en https://ontoterrorist.github.io/falacia-advance/ruso-advance/ (o en su propio repositorio, si se mueve ahí). También funciona en local con cualquier servidor estático.

![Una conversación con Masha](captura-dialogo.png)
![Las lecciones por niveles](captura-lecciones.png)

## Cómo se aprende

Cada lección tiene cinco pasos:

1. **Escena**: dónde estás y qué pasa.
2. **Diálogo**: una conversación con Masha y su gente: su hermana Katia, Vadim, la abuela Galia, la directora Olga Petrovna, Serguéi… Tú eliges qué responder; si te equivocas, Masha te lo dice a su manera.
3. **Frases clave**: lo que tienes que llevarte, con audio.
4. **Gramática**: una sola idea pequeña por lección, explicada en pocas líneas.
5. **Práctica**: ejercicios con lo nuevo, mezclados con un poco de repaso de lecciones anteriores.

Todo lo que practicas entra al **repaso con repetición espaciada** (una variante de SM-2, el algoritmo de Anki): si aciertas, la tarjeta vuelve más tarde (1 día, 3, 8, 20…); si fallas, vuelve pronto. La gramática también son tarjetas: cada vez sale con un ejemplo distinto, para entender la regla y no memorizar una frase. Los ejercicios se vuelven más difíciles a medida que la tarjeta madura: primero reconocer, después producir, luego escuchar, ordenar palabras y escribir en cirílico.

## 120 lecciones en 10 niveles

| Nivel | Historia | Gramática |
|---|---|---|
| 1 · Знакомство | Conoces a Masha por videollamada: saludos, té, la directora, el gato Pelmén, un café en Petersburgo | Sin «ser», ты/вы, género, acusativo, у меня есть, -ать/-ить, prepositivo |
| 2 · Каждый день | Rutinas, la fiesta de Masha, un viaje a Moscú, la tienda, el médico, el último día | -ся, pasado, futuro, идти/ехать, genitivo, aspecto, instrumental, imperativo |
| 3 · Семестр в Петербурге | Llegas a Petersburgo para un semestre: residencia, mercado, el Ermitage | Plural, adjetivos, acusativo animado, genitivo plural, números, horas, fechas, dativo |
| 4 · Новый дом | Buscas departamento, la mudanza, la vecina cantante de ópera | стоять/ставить, comparativo, superlativo, adjetivos declinados, который, свой, себя |
| 5 · В дорогу! | Tren a Moscú, la boda que se avecina, el Transiberiano, la abuela Galia | Movimiento con prefijos (при-, у-, в-, вы-, по-, до-, пере-, про-), нести/везти, если |
| 6 · Праздники | Cumpleaños, Año Nuevo, Navidad, Maslenitsa, banya, un anillo | Desear, fechas, instrumental, никто/ничего, -то/-нибудь, ли, estilo indirecto |
| 7 · Работа | Trabajas en la escuela de Masha; Serguéi invita a Masha al teatro | Condicional, чтобы, adjetivos cortos, учить/учиться, causas y concesiones, registro formal |
| 8 · Культура | Club de lectura, ballet, Pushkin, la abuela en Petersburgo, tu examen B1 | Participios, gerundios, orden de palabras, diminutivos, patronímicos, refranes |
| 9 · Лето на даче | Verano en la dacha: setas, mosquitos, Pelmén perdido, una gran noticia | Aspecto avanzado, prefijos de matiz, partículas, conjunciones de tiempo, numerales declinados |
| 10 · Свободно | Un bebé, Masha directora, contar tu historia, las noches blancas | Получаться, condicional pasado, coloquial, exclamaciones, argumentar, pasiva, los seis casos |

En total: 120 lecciones, 969 frases clave, 296 tarjetas de conversación y 120 nociones de gramática con 620 ejercicios. También hay una sección con el alfabeto (con audio), que se puede añadir al repaso.

## Motor de voz

Cada frase rusa del curso (unas 4.900) tiene su propio audio, generado con voces neuronales rusas [Piper](https://github.com/rhasspy/piper) (Irina, Denis y Dmitri, con tonos distintos para cada personaje). La pronunciación pasa por un diccionario de acentos construido a partir de las marcas del curso, así que la voz pone el acento donde va (до́рого, его́, сего́дня) y distingue homógrafos como до́ма / дома́. Una muestra se comprobó con un reconocedor de voz ruso (sherpa-onnx): entiende alrededor del 95 % de lo que dice.

Los audios están en `audio/` (el nombre es un hash de «voz|texto») y se guardan en el teléfono al oírlos. Si falta alguno, la app usa la voz del navegador. En Ajustes se puede elegir el motor y la velocidad.

Para regenerarlos hace falta Python con `onnxruntime`, `espeak-ng` y los modelos Piper rusos; los scripts están en `tools/` (`spoken.js` lista los textos y `validate.js` revisa el contenido).

## Masha

Masha es rubia, lleva el pelo recogido en una cola sobre el hombro, y es cínica y amable. Está dibujada en SVG con ocho expresiones, parpadea y mueve la boca cuando habla.

Para usar un avatar en pixel art hecho con [PixelLab](https://www.pixellab.ai): `PIXELLAB_API_KEY=… python3 tools/pixellab_avatar.py`. El script genera una Masha base y repinta la cara para cada expresión; la app la usa automáticamente en cuanto existe `avatar/pixel.js` con las imágenes.

## Detalles

- **Micrófono** (opcional): en los navegadores que lo permiten (Chrome, Edge), el botón «Dilo tú» escucha tu pronunciación y Masha te dice qué entendió.
- **Acentos**: el ruso aparece con la sílaba tónica marcada (приве́т) y, si quieres, con transliteración pensada para hispanohablantes (х = j, privét).
- **Masculino o femenino**: al empezar eliges cómo quieres que te hable; tus frases cambian solas (я был / я была), y también la voz que las dice.
- **Teclado ruso en pantalla** para los ejercicios de escribir.
- **Atajos**: 1–4 para elegir, Intro para seguir, Espacio para volver a oír.

## Instalarla en el celular

Abre la página en el navegador del teléfono y añádela a la pantalla de inicio:

- **Android (Chrome):** menú ⋮ → «Instalar aplicación» o «Añadir a pantalla de inicio».
- **iPhone (Safari):** botón Compartir → «Añadir a pantalla de inicio».

Después de abrirla una vez funciona sin conexión (salvo la voz, que en algunos teléfonos necesita red). El progreso se guarda en el propio navegador; en Ajustes puedes descargar una copia y cargarla en otro dispositivo.

## Qué hay en este repositorio

No hace falta compilar nada: es una página estática.

- `index.html`, `styles.css`
- `app.js`: lecciones, repaso espaciado, ejercicios, motor de voz y ajustes
- `data.js` y `lecciones/`: el contenido del curso (diálogos, frases, gramática y frases de Masha)
- `masha.js` y `avatar/`: Masha en SVG, o en pixel art si se genera con PixelLab
- `audio/`: los audios de todas las frases
- `tools/`: validador del contenido, lista de textos para la voz y script de PixelLab
- `sw.js` y `manifest.webmanifest`: para instalarla y usarla sin conexión
- `fonts/`: PT Sans y Unbounded (licencia SIL Open Font License), con cirílico

Para probarla en local: `npx http-server .` y abrir http://localhost:8080.
