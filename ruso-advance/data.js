/* Contenido del curso.
   Convenciones en los textos rusos:
   - el apóstrofo va detrás de la vocal tónica: «приве'т» se muestra «приве́т»;
   - {forma masculina|forma femenina} se elige según cómo prefiera que le hablen;
   - {name} es el nombre de quien estudia.
   Diálogo: {ru, es, e} es Masha (e = expresión), {who, ru, es} otra persona, {n} narración,
   {u:[[ru, es, comentario], ...], k} es tu turno: las k primeras opciones son correctas. */

const SPEAKERS = {
  olga: { name: "О'льга Петро'вна" },
  waiter: { name: "Официа'нт" },
  seller: { name: "Продавщи'ца" },
  doctor: { name: "Врач" },
  vadim: { name: "Вади'м" },
  kassir: { name: "Касси'р" },
  artyom: { name: "Артём" },
  nina: { name: "Ни'на Петро'вна" },
  galia: { name: "Ба'ба Га'ля" },
  katia: { name: "Ка'тя" },
  woman: { name: "Же'нщина" },
  passer: { name: "Прохо'жий" },
  provod: { name: "Проводни'ца" },
  sergei: { name: "Серге'й" },
  student: { name: "Ли'дия Миха'йловна" },
  arkady: { name: "Арка'дий" },
  dima: { name: "Ди'ма" },
};

const LEVELS = [
  { id: 1, ru: "Знако'мство", es: 'Primeros encuentros', note: 'Saludar, presentarse, pedir en un café, moverse por la ciudad y hablar de gustos.' },
  { id: 2, ru: "Ка'ждый день", es: 'La vida diaria', note: 'Rutinas, pasado y futuro, compras, clima, médico y opiniones.' },
  { id: 3, ru: "Семе'стр в Петербу'рге", es: 'Un semestre en Petersburgo', note: 'Plurales, adjetivos, horas, fechas y los casos en serio.' },
  { id: 4, ru: "Но'вый дом", es: 'Una casa nueva', note: 'Buscar departamento, muebles, comparar, который, свой y себя.' },
  { id: 5, ru: "В доро'гу!", es: 'De viaje', note: 'Verbos de movimiento con prefijos, Moscú y el Transiberiano.' },
  { id: 6, ru: "Пра'здники", es: 'Fiestas y tradiciones', note: 'Cumpleaños, Año Nuevo, Navidad, banya y una boda.' },
  { id: 7, ru: "Рабо'та", es: 'El trabajo', note: 'Condicional, чтобы, adjetivos cortos y el registro formal.' },
  { id: 8, ru: "Культу'ра", es: 'Cultura', note: 'Participios, gerundios, ballet, Pushkin, diminutivos y refranes.' },
  { id: 9, ru: "Ле'то на да'че", es: 'Verano en la dacha', note: 'Aspecto avanzado, prefijos de matiz, partículas y setas.' },
  { id: 10, ru: "Свобо'дно", es: 'Con soltura', note: 'Ruso coloquial, argumentar, contar historias y lo que viene.' },
];

const LESSONS = [
  /* ───────────── NIVEL 1 ───────────── */
  {
    id: 'l1', level: 1, ru: "Приве'т!", es: 'Saludos',
    scene: 'Primera clase. Masha te recibe por videollamada, con una taza de té y cara de lunes.',
    intro: 'Hola. Soy Masha y voy a enseñarte ruso. No, no es imposible. Sí, el alfabeto es raro. Vamos: tú solo responde.',
    dialog: [
      { ru: "Приве'т!", es: '¡Hola!', e: 'neutral' },
      { u: [["Приве'т!", '¡Hola!'], ["Пока'!", '¡Chao!', '¿Ya te vas? Acabas de llegar.'], ["Да.", 'Sí.', '¿«Sí» qué? Te saludé.']] },
      { ru: "Я Ма'ша. А как тебя' зову'т?", es: 'Soy Masha. ¿Y cómo te llamas?' },
      { u: [["Меня' зову'т {name}.", 'Me llamo {name}.'], ["Тебя' зову'т {name}.", 'Te llamas {name}.', 'Меня = a mí, тебя = a ti. Yo ya sé cómo me llamo, gracias.'], ["Как тебя' зову'т?", '¿Cómo te llamas?', 'Te pregunté yo primero. Así no funciona.']] },
      { ru: "О'чень прия'тно, {name}.", es: 'Mucho gusto, {name}.', e: 'pleased' },
      { u: [["Мне то'же.", 'A mí también.'], ["Меня' зову'т Ма'ша.", 'Me llamo Masha.', 'No. Masha soy yo. Tú eres {name}.'], ["Пока'!", '¡Chao!', 'Qué prisa.']] },
      { ru: "Ты {студе'нт|студе'нтка}?", es: '¿Eres estudiante?' },
      { u: [["Да, я {студе'нт|студе'нтка}.", 'Sí, soy estudiante.'], ["Да, ты {студе'нт|студе'нтка}.", 'Sí, tú eres estudiante.', 'Yo no soy estudiante. Soy la profesora. Muy paciente, además.'], ["Нет, я Ма'ша.", 'No, soy Masha.', 'Hay una sola Masha aquí, y no eres tú.']] },
      { ru: "Хорошо'. А я преподава'тель. Ну всё, пока'!", es: 'Bien. Y yo soy profesora. Bueno, eso es todo, ¡chao!', e: 'smirk' },
      { u: [["Пока'!", '¡Chao!'], ["До свида'ния!", '¡Adiós!', 'Muy formal, pero vale.'], ["Приве'т!", '¡Hola!', 'Eso era al principio. Ahora toca despedirse.']], k: 2 },
    ],
    phrases: [
      ["Приве'т!", '¡Hola! (informal)'],
      ["Здра'вствуйте!", '¡Hola! / ¡Buenos días! (formal)', 'La primera в casi no se oye: «zdrástvuite».'],
      ["Меня' зову'т…", 'Me llamo…', 'Literalmente: «a mí me llaman…».'],
      ["Как тебя' зову'т?", '¿Cómo te llamas?'],
      ["О'чень прия'тно.", 'Mucho gusto.'],
      ["Мне то'же.", 'A mí también. / Igualmente.'],
      ["Пока'!", '¡Chao! (informal)'],
      ["До свида'ния!", '¡Adiós! (formal)'],
    ],
    grammar: {
      id: 'g1', title: 'Yo, tú, él… y sin «ser»',
      body: `<p>Los pronombres: [[я]] yo · [[ты]] tú · [[он]] él · [[она']] ella · [[мы]] nosotros · [[вы]] usted / ustedes · [[они']] ellos.</p>
<p>En presente el ruso <b>no usa el verbo «ser/estar»</b>, y tampoco tiene artículos («un», «el»):</p>
<p>[[Я студе'нт.]] Yo (soy) estudiante. · [[Она' преподава'тель.]] Ella (es) profesora. · [[Э'то Ма'ша.]] Esta (es) Masha.</p>
<p>Masha dice: «Menos palabras, más té».</p>`,
      drills: [
        { p: '«Soy Masha»', o: ["Я Ма'ша.", "Я есть Ма'ша.", "Меня' Ма'ша."], x: 'En presente no se dice «есть» para «ser». Solo: Я Маша.' },
        { q: "___ студе'нтка.", es: 'Ella es estudiante.', o: ["Она'", "Он", "Я"], x: 'Ella = она.' },
        { p: '«Esto es té»', o: ["Э'то чай.", "Э'то есть чай.", "Э'то оди'н чай."], x: 'Ni verbo ni artículo: Это чай.' },
        { q: "___ преподава'тель.", es: 'Él es profesor.', o: ["Он", "Она'", "Мы"], x: 'Él = он.' },
        { p: '«Nosotros somos estudiantes»', o: ["Мы студе'нты.", "Мы есть студе'нты.", "Вы студе'нты."], x: 'Мы = nosotros, y sin verbo.' },
      ],
    },
    outro: 'No estuvo mal. Para ser el primer día. Mañana más.',
  },
  {
    id: 'l2', level: 1, ru: "Как дела'?", es: '¿Cómo estás?',
    scene: 'Al día siguiente. Masha no durmió bien. A mitad de clase entra la directora de la escuela.',
    intro: 'Hoy: preguntar cómo está alguien. Y aprender a no tutear a la directora. Por mi bien.',
    dialog: [
      { ru: "Приве'т, {name}! Как дела'?", es: '¡Hola, {name}! ¿Cómo estás?' },
      { u: [["Хорошо', спаси'бо! А у тебя'?", '¡Bien, gracias! ¿Y tú?'], ["Меня' зову'т {name}.", 'Me llamo {name}.', 'Ya sé cómo te llamas. Te pregunté cómo estás.'], ["Пока'!", '¡Chao!', 'Siempre te quieres ir. Me lo tomo personal.']] },
      { ru: "Так себе'. Кот. Не спра'шивай.", es: 'Más o menos. El gato. No preguntes.', e: 'annoyed' },
      { u: [["Ой, жаль.", 'Ay, qué pena.'], ["Отли'чно!", '¡Excelente!', '¿Te alegras? Qué empatía.'], ["Спаси'бо.", 'Gracias.', '¿Gracias por qué? ¿Por mi sufrimiento?']] },
      { n: 'Se abre la puerta. Entra Olga Petrovna, la directora. Seria. Muy seria.' },
      { ru: "Ой. Э'то О'льга Петро'вна. Скажи' «здра'вствуйте».", es: 'Uy. Esta es Olga Petrovna. Di «здравствуйте».', e: 'surprised' },
      { u: [["Здра'вствуйте, О'льга Петро'вна!", '¡Buenos días, Olga Petrovna!'], ["Приве'т, О'льга!", '¡Hola, Olga!', '¡¿Привет?! Es la directora. Me vas a hacer despedir.'], ["Пока', О'льга Петро'вна!", '¡Chao, Olga Petrovna!', 'No la eches. Es su escuela.']] },
      { who: 'olga', ru: "Здра'вствуйте. Как у вас дела'?", es: 'Buenos días. ¿Cómo le va?' },
      { u: [["Хорошо', спаси'бо. А у вас?", 'Bien, gracias. ¿Y a usted?'], ["Хорошо', спаси'бо. А у тебя'?", 'Bien, gracias. ¿Y a ti?', '«У тебя» a la directora… Con ella, siempre «вы».'], ["Так себе'. Кот.", 'Más o menos. El gato.', 'Esa es MI excusa. Búscate la tuya.']] },
      { who: 'olga', ru: "Отли'чно. До свида'ния.", es: 'Excelente. Hasta luego.' },
      { u: [["До свида'ния!", '¡Adiós!'], ["Пока'!", '¡Chao!', 'Con la directora no. «До свидания».'], ["Приве'т!", '¡Hola!', 'Se está yendo, no llegando.']] },
      { ru: "Уф. Она' стро'гая. Но ты молоде'ц.", es: 'Uf. Es estricta. Pero lo hiciste bien.', e: 'pleased' },
      { u: [["Спаси'бо!", '¡Gracias!'], ["Пожа'луйста!", '¡De nada!', 'Te felicité yo a ti, no al revés.']] },
    ],
    phrases: [
      ["Как дела'?", '¿Cómo estás? / ¿Qué tal?'],
      ["Хорошо'.", 'Bien.'],
      ["Норма'льно.", 'Normal, bien.'],
      ["Так себе'.", 'Más o menos.'],
      ["Пло'хо.", 'Mal.'],
      ["А у тебя'?", '¿Y tú? (informal)'],
      ["А у вас?", '¿Y usted? (formal)'],
      ["Спаси'бо.", 'Gracias.'],
      ["Пожа'луйста.", 'Por favor. / De nada.'],
      ["Отли'чно!", '¡Excelente!'],
    ],
    grammar: {
      id: 'g2', title: '«Ты» y «вы»',
      body: `<p>[[ты]] es «tú»: amigos, familia, niños, gatos… y Masha.</p>
<p>[[вы]] es «usted» (desconocidos, jefes, gente mayor) y también el plural «ustedes».</p>
<p>Van en pareja con el saludo: [[Приве'т!]] con <b>ты</b>, [[Здра'вствуйте!]] con <b>вы</b>.</p>
<p>[[Как у тебя' дела'?]] / [[Как у вас дела'?]] — ¿cómo estás? / ¿cómo está usted?</p>`,
      drills: [
        { p: 'Saludas a tu amiga Masha:', o: ["Приве'т!", "Здра'вствуйте!"], x: 'Entre amigos: Привет.' },
        { p: 'Le preguntas a la directora cómo está:', o: ["Как у вас дела'?", "Как у тебя' дела'?"], x: 'A la directora se le habla de вы.' },
        { p: 'Le preguntas su nombre a un niño:', o: ["Как тебя' зову'т?", "Как вас зову'т?"], x: 'A un niño se le habla de ты.' },
        { p: 'Le preguntas su nombre a un señor desconocido:', o: ["Как вас зову'т?", "Как тебя' зову'т?"], x: 'Desconocido adulto: вы.' },
        { p: '«Вы» puede significar…', o: ['usted o ustedes', 'solo tú', 'solo ellos'], x: 'Вы es formal y también plural.' },
      ],
    },
    outro: 'Sobreviviste a Olga Petrovna. Yo tardé tres meses.',
  },
  {
    id: 'l3', level: 1, ru: "Отку'да ты?", es: '¿De dónde eres?',
    scene: 'Masha quiere saber de dónde eres. Ella es de los Urales, pero vive en San Petersburgo. Donde siempre llueve.',
    intro: 'Hoy hablamos de dónde eres y dónde vives. Y de la lluvia. Siempre hablo de la lluvia.',
    dialog: [
      { ru: "Отку'да ты, {name}?", es: '¿De dónde eres, {name}?' },
      { u: [["Я из Ме'ксики.", 'Soy de México.', 'México. Tacos. Sol. Te odio un poco.'], ["Я из Испа'нии.", 'Soy de España.', 'España. Sol. Jamón. Te odio un poco.'], ["Я из Аргенти'ны.", 'Soy de Argentina.', 'Argentina. Mate. Tango. Te odio un poco.'], ["Я Ме'ксика.", 'Yo México.', '¿Tú eres México? ¿Todo el país? Falta «из».']], k: 3 },
      { ru: "Здо'рово! А я из Екатеринбу'рга.", es: '¡Genial! Yo soy de Ekaterimburgo.' },
      { u: [["Где э'то?", '¿Dónde está eso?'], ["Кто э'то?", '¿Quién es?', '¿Quién? Es una ciudad, no una persona.'], ["Как дела'?", '¿Cómo estás?', 'Bien. Pero no respondiste nada.']] },
      { ru: "Э'то на Ура'ле. Далеко'. Но сейча'с я живу' в Петербу'рге. А где ты живёшь?", es: 'En los Urales. Lejos. Pero ahora vivo en Petersburgo. ¿Y tú dónde vives?' },
      { u: [["Я живу' в Мадри'де.", 'Vivo en Madrid.'], ["Я живу' в Ме'хико.", 'Vivo en Ciudad de México.'], ["Я живу' в Буэ'нос-А'йресе.", 'Vivo en Buenos Aires.'], ["Ты живёшь в Петербу'рге.", 'Tú vives en Petersburgo.', 'Eso ya lo sé. Te pregunté por ti.']], k: 3 },
      { ru: "Краси'во. А в Петербу'рге всегда' дождь. Всегда'.", es: 'Bonito. En Petersburgo siempre llueve. Siempre.', e: 'annoyed' },
      { u: [["Ой, жаль.", 'Ay, qué pena.'], ["Отли'чно!", '¡Excelente!', '¿Te alegra mi lluvia?'], ["Я из Испа'нии.", 'Soy de España.', 'Ya hablamos de eso. Concéntrate.']] },
      { ru: "Ничего'. Я привы'кла. Чай помога'ет.", es: 'No pasa nada. Ya me acostumbré. El té ayuda.', e: 'smirk' },
      { u: [["Чай помога'ет!", '¡El té ayuda!'], ["Пло'хо.", 'Mal.', 'Gracias por el ánimo.']] },
    ],
    phrases: [
      ["Отку'да ты?", '¿De dónde eres?'],
      ["Я из Ме'ксики.", 'Soy de México.'],
      ["Я из Испа'нии.", 'Soy de España.'],
      ["Где ты живёшь?", '¿Dónde vives?'],
      ["Я живу' в…", 'Vivo en…'],
      ["Где э'то?", '¿Dónde está eso?'],
      ["Далеко'.", 'Lejos.'],
      ["Здо'рово!", '¡Genial!'],
    ],
    grammar: {
      id: 'g3', title: '«Из»: de dónde eres',
      body: `<p>[[из]] significa «de» (origen). Después de <b>из</b> el nombre cambia su final. Es tu primer <b>caso</b>, el genitivo, y no hace falta que te asustes: por ahora apréndelo como bloque.</p>
<p>-а → -ы/-и: [[Москва']] → [[из Москвы']], [[Аргенти'на]] → [[из Аргенти'ны]], [[Ме'ксика]] → [[из Ме'ксики]]</p>
<p>-ия → -ии: [[Испа'ния]] → [[из Испа'нии]], [[Росси'я]] → [[из Росси'и]]</p>
<p>consonante → +а: [[Мадри'д]] → [[из Мадри'да]]. Y las palabras extranjeras en -и, -о no cambian: [[из Чи'ли]], [[из Ме'хико]].</p>`,
      drills: [
        { q: "Я из ___.", es: 'Soy de Rusia.', o: ["Росси'и", "Росси'я", "Росси'ю"], x: 'Россия → из России.' },
        { q: "Он из ___.", es: 'Él es de Colombia.', o: ["Колу'мбии", "Колу'мбия", "Колу'мбию"], x: '-ия → -ии.' },
        { q: "Она' из ___.", es: 'Ella es de Argentina.', o: ["Аргенти'ны", "Аргенти'на", "Аргенти'не"], x: '-а → -ы.' },
        { q: "Мы из ___.", es: 'Somos de Chile.', o: ["Чи'ли", "Чи'ля", "Чи'лии"], x: 'Чили no cambia: es extranjera y termina en -и.' },
        { q: "Я из ___.", es: 'Soy de Moscú.', o: ["Москвы'", "Москва'", "Москве'"], x: 'Москва → из Москвы.' },
        { q: "Ты из ___?", es: '¿Eres de Madrid?', o: ["Мадри'да", "Мадри'д", "Мадри'ды"], x: 'Consonante: se añade -а.' },
      ],
    },
    outro: 'Ahora ya sabes de dónde es todo el mundo. Y que en Petersburgo llueve. Eso es lo importante.',
  },
  {
    id: 'l4', level: 1, ru: "Что э'то?", es: '¿Qué es esto?',
    scene: 'Masha te enseña su departamento con la cámara. Algo peludo y gordo cruza la pantalla.',
    intro: 'Hoy conoces a Pelmén. Es mi gato. Es el verdadero dueño del departamento.',
    dialog: [
      { ru: "Смотри'! Э'то моя' кварти'ра.", es: '¡Mira! Este es mi departamento.' },
      { n: 'Algo peludo cruza la pantalla.' },
      { u: [["Кто э'то?", '¿Quién es?'], ["Что э'то?", '¿Qué es?', '¿«Что»? Es un ser vivo, se ofendería. Para seres vivos: «кто».'], ["Где э'то?", '¿Dónde está eso?', 'Está aquí. En mi casa. Encima de mi silla.']] },
      { ru: "Э'то мой кот Пельме'нь. Он лени'вый.", es: 'Es mi gato Pelmén. Es perezoso.', e: 'pleased' },
      { u: [["Он краси'вый!", '¡Es bonito!'], ["Она' краси'вая!", '¡Ella es bonita!', 'Es «он», macho. No le digas que parece hembra, es sensible.'], ["Э'то чай.", 'Esto es té.', 'No. Es un gato. Mira mejor.']] },
      { ru: "Спаси'бо. Он зна'ет.", es: 'Gracias. Él lo sabe.', e: 'smirk' },
      { n: 'En la mesa hay un objeto metálico enorme, brillante.' },
      { u: [["А что э'то?", '¿Y qué es esto?'], ["А кто э'то?", '¿Y quién es?', 'No es una persona. Aunque a veces le hablo.']] },
      { ru: "Э'то самова'р. Он ста'рый. Бабу'шкин.", es: 'Es un samovar. Es viejo. Era de la abuela.' },
      { u: [["А э'то твоя' ча'шка?", '¿Y esa es tu taza?'], ["А э'то твой ча'шка?", '¿Y ese es tu taza?', '«Чашка» termina en -а: es femenina. Твоя чашка.'], ["А э'то твоё ча'шка?", '¿Y eso es tu taza?', 'Твоё es para neutras, como окно. Чашка es «она»: твоя.']] },
      { ru: "Да, моя' ча'шка. И моё вино'… Шучу'. Э'то чай.", es: 'Sí, mi taza. Y mi vino… Es broma. Es té.', e: 'smirk' },
      { u: [["Ха-ха. Хорошо'.", 'Jaja. Bien.'], ["Я не понима'ю.", 'No entiendo.', 'Era un chiste. Ya veo que necesitamos trabajar el humor también.']] },
    ],
    phrases: [
      ["Что э'то?", '¿Qué es esto?'],
      ["Кто э'то?", '¿Quién es?'],
      ["Э'то мой кот.", 'Este es mi gato.'],
      ["Э'то моя' кварти'ра.", 'Este es mi departamento.'],
      ["Смотри'!", '¡Mira!'],
      ["краси'вый", 'bonito, guapo'],
      ["ста'рый", 'viejo'],
      ["Шучу'.", 'Es broma. (Bromeo.)'],
    ],
    grammar: {
      id: 'g4', title: 'Él, ella, ello: el género',
      body: `<p>Cada sustantivo es masculino, femenino o neutro, y casi siempre lo dice su final:</p>
<p><b>consonante → он</b>: [[кот]], [[чай]], [[стол]] · <b>-а / -я → она</b>: [[ча'шка]], [[кварти'ра]], [[неде'ля]] · <b>-о / -е → оно</b>: [[окно']], [[вино']], [[мо'ре]]</p>
<p>Ojo con <b>-ь</b>: puede ser él o ella ([[Пельме'нь]] es él, [[ночь]] es ella).</p>
<p>«Mi» cambia con el género: [[мой кот]], [[моя' ча'шка]], [[моё окно']]; y en plural [[мои' ко'шки]]. Igual con «tu»: [[твой]], [[твоя']], [[твоё]].</p>`,
      drills: [
        { p: '«стол» (mesa) es…', o: ["он", "она'", "оно'"], x: 'Termina en consonante: он.' },
        { p: '«ча\'шка» (taza) es…', o: ["она'", "он", "оно'"], x: 'Termina en -а: она.' },
        { p: '«окно\'» (ventana) es…', o: ["оно'", "он", "она'"], x: 'Termina en -о: оно.' },
        { q: "Э'то ___ кот.", es: 'Este es mi gato.', o: ["мой", "моя'", "моё"], x: 'Кот es masculino: мой.' },
        { q: "Э'то ___ кварти'ра.", es: 'Este es mi departamento.', o: ["моя'", "мой", "моё"], x: 'Квартира termina en -а: моя.' },
        { q: "Э'то ___ вино'.", es: 'Este es mi vino.', o: ["моё", "мой", "моя'"], x: 'Вино es neutro: моё.' },
        { p: '«па\'па» (papá) es…', o: ["он", "она'", "оно'"], x: 'Excepción lógica: termina en -а pero es un hombre. Он.' },
      ],
    },
    outro: 'Pelmén te aprueba. Eso es más difícil que aprobar conmigo.',
  },
  {
    id: 'l5', level: 1, ru: "Я не понима'ю", es: 'No entiendo',
    scene: 'Masha decide hablar muy rápido. A propósito. Es una prueba.',
    intro: 'Hoy te enseño las frases más útiles del ruso: las que sirven cuando no entiendes nada.',
    dialog: [
      { ru: "Ну что, сего'дня мы бу'дем изуча'ть о'чень ва'жные слова'…", es: '(muy rápido) Bueno, hoy vamos a estudiar palabras muy importantes…', e: 'smirk' },
      { u: [["Извини', я не понима'ю.", 'Perdona, no entiendo.'], ["Да, коне'чно.", 'Sí, claro.', '¿«Sí, claro»? No entendiste nada. Admítelo.'], ["Пока'!", '¡Chao!', 'Huir no es una estrategia de aprendizaje.']] },
      { ru: "Ха. Я зна'ю. Э'то тест. Что на'до сказа'ть?", es: 'Ja. Lo sé. Es una prueba. ¿Qué hay que decir?' },
      { u: [["Говори' ме'дленнее, пожа'луйста.", 'Habla más despacio, por favor.'], ["Говори' быстре'е.", 'Habla más rápido.', '¿Más rápido? Valiente. O loco.'], ["Спаси'бо, хорошо'.", 'Gracias, bien.', 'Nadie te preguntó cómo estás.']] },
      { ru: "Молоде'ц. Вопро'с: ты говори'шь по-ру'сски?", es: 'Bien hecho. Pregunta: ¿hablas ruso?', e: 'pleased' },
      { u: [["Немно'го.", 'Un poco.'], ["Да, отли'чно!", '¡Sí, perfectamente!', 'Ajá. Por eso estamos en la lección cinco.'], ["Нет, я не Ма'ша.", 'No, no soy Masha.', 'Gracias por aclararlo.']] },
      { ru: "Че'стно. А как сказа'ть «gato» по-ру'сски?", es: 'Honesto. ¿Y cómo se dice «gato» en ruso?' },
      { u: [["Кот!", '¡Gato!'], ["Чай!", '¡Té!', 'Eso es té. Pelmén no es té.'], ["Не зна'ю.", 'No sé.', 'Lo vimos ayer. Pelmén se ofende.']] },
      { ru: "Пра'вильно. Пельме'нь горди'тся тобо'й.", es: 'Correcto. Pelmén está orgulloso de ti.', e: 'happy' },
      { u: [["Повтори', пожа'луйста.", 'Repite, por favor.', 'Пельмень. Гордится. Тобой. Está orgulloso. No te acostumbres.'], ["Пло'хо.", 'Mal.', '¿Mal? Te acaban de felicitar. Acéptalo.']] },
    ],
    phrases: [
      ["Я не понима'ю.", 'No entiendo.'],
      ["Я не зна'ю.", 'No sé.'],
      ["Извини'.", 'Perdona. (informal)'],
      ["Повтори', пожа'луйста.", 'Repite, por favor.'],
      ["Ме'дленнее, пожа'луйста.", 'Más despacio, por favor.'],
      ["Как сказа'ть … по-ру'сски?", '¿Cómo se dice … en ruso?'],
      ["Ты говори'шь по-ру'сски?", '¿Hablas ruso?'],
      ["Немно'го.", 'Un poco.'],
      ["Да. / Нет.", 'Sí. / No.'],
      ["Пра'вильно.", 'Correcto.'],
    ],
    grammar: {
      id: 'g5', title: 'Decir que no y preguntar',
      body: `<p>Para negar, pon [[не]] justo antes de lo que niegas: [[Я не зна'ю.]] No sé. · [[Э'то не чай.]] Esto no es té.</p>
<p>[[нет]] es la respuesta «no»: [[Нет, я не понима'ю.]]</p>
<p>Una pregunta de sí/no es la misma frase con <b>entonación de pregunta</b>, sin cambiar el orden: [[Ты студе'нт.]] → [[Ты студе'нт?]]</p>`,
      drills: [
        { q: "Я ___ понима'ю.", es: 'No entiendo.', o: ["не", "нет", "ни"], x: 'Antes del verbo va не.' },
        { q: "Нет, э'то ___ кот.", es: 'No, esto no es un gato.', o: ["не", "нет", "да"], x: 'Нет responde; не niega la palabra.' },
        { p: '«¿Hablas ruso?»', o: ["Ты говори'шь по-ру'сски?", "Говори'шь ты ли по-ру'сски?", "Ты по-ру'сски говори'шь не?"], x: 'Misma frase, con tono de pregunta.' },
        { p: '«No, no sé»', o: ["Нет, я не зна'ю.", "Не, я нет зна'ю.", "Нет, я нет зна'ю."], x: 'Нет para responder, не antes del verbo.' },
        { p: '«Esto no es té»', o: ["Э'то не чай.", "Э'то нет чай.", "Не э'то чай."], x: 'Не va justo antes de lo que niegas.' },
      ],
    },
    outro: 'Con estas frases ya puedes sobrevivir en Rusia. Mal, pero sobrevivir.',
  },
  {
    id: 'l6', level: 1, ru: "Чай и'ли ко'фе?", es: '¿Té o café?',
    scene: 'Hora de merendar. Masha te ofrece algo de beber. Virtualmente. La chocolatina no es virtual y no es tuya.',
    intro: 'Hoy pedimos cosas. Y vas a ver tu primer cambio de final con «quiero». Tranquilidad.',
    dialog: [
      { ru: "Ты хо'чешь чай и'ли ко'фе?", es: '¿Quieres té o café?' },
      { u: [["Я хочу' чай, пожа'луйста.", 'Quiero té, por favor.', 'Buena elección. La correcta.'], ["Я хочу' ко'фе, пожа'луйста.", 'Quiero café, por favor.', 'Café. Bueno. Nadie es perfecto.'], ["Я хо'чешь чай.", 'Yo quieres té.', '«Хочешь» es «quieres». Para ti mismo: «хочу».']], k: 2 },
      { ru: "Хорошо'. С са'харом и'ли без?", es: 'Bien. ¿Con azúcar o sin?' },
      { u: [["Без са'хара.", 'Sin azúcar.'], ["С са'харом, пожа'луйста.", 'Con azúcar, por favor.'], ["Без пожа'луйста.", 'Sin por favor.', 'Sin «por favor» no te doy nada.']], k: 2 },
      { ru: "А я хочу' во'ду. И шокола'дку.", es: 'Yo quiero agua. Y una chocolatina.' },
      { u: [["Я то'же хочу' шокола'дку!", '¡Yo también quiero una chocolatina!'], ["Я то'же хочу' шокола'дка!", 'Yo también quiero chocolatina (mal dicho).', 'Casi. Con «хочу», la -а cambia a -у: шоколадку.'], ["Ты хо'чешь вода'?", '¿Quieres agua (mal dicho)?', 'Воду. Con «хотеть», -а → -у.']] },
      { ru: "Нет. Шокола'дка моя'. Но вот пече'нье. Хо'чешь?", es: 'No. La chocolatina es mía. Pero aquí hay galletas. ¿Quieres?', e: 'smirk' },
      { u: [["Да, спаси'бо!", '¡Sí, gracias!'], ["Нет, спаси'бо.", 'No, gracias.', 'Más para mí.'], ["Я не понима'ю.", 'No entiendo.', 'Sí entiendes. Son galletas. Las galletas son universales.']], k: 2 },
      { ru: "Ла'дно. Прия'тного аппети'та.", es: 'Vale. Buen provecho.' },
      { u: [["Спаси'бо, и тебе'!", '¡Gracias, igualmente!'], ["Пло'хо.", 'Mal.', 'No era una pregunta.']] },
    ],
    phrases: [
      ["Ты хо'чешь чай и'ли ко'фе?", '¿Quieres té o café?'],
      ["Я хочу'…", 'Quiero…'],
      ["С са'харом.", 'Con azúcar.'],
      ["Без са'хара.", 'Sin azúcar.'],
      ["вода'", 'agua'],
      ["Я хочу' во'ду.", 'Quiero agua.'],
      ["Ла'дно.", 'Vale. / Bueno.'],
      ["Прия'тного аппети'та!", '¡Buen provecho!'],
    ],
    grammar: {
      id: 'g6', title: 'Quiero algo: -а → -у',
      body: `<p>[[хоте'ть]] (querer): [[я хочу']], [[ты хо'чешь]], [[он / она' хо'чет]].</p>
<p>Lo que quieres cambia de final si es femenino: <b>-а → -у</b>, <b>-я → -ю</b>. Es el caso <b>acusativo</b>.</p>
<p>[[вода']] → [[Я хочу' во'ду.]] · [[шокола'дка]] → [[Я хочу' шокола'дку.]]</p>
<p>Los masculinos y neutros de cosas no cambian: [[Я хочу' чай.]] · [[Я хочу' вино'.]]</p>`,
      drills: [
        { q: "Я хочу' ___.", es: 'Quiero agua.', o: ["во'ду", "вода'", "воде'"], x: 'Вода → воду.' },
        { q: "Ты хо'чешь ___?", es: '¿Quieres cola?', o: ["ко'лу", "ко'ла", "ко'ле"], x: 'Кола → колу.' },
        { q: "Я хочу' ___.", es: 'Quiero un sándwich.', o: ["бутербро'д", "бутербро'ду", "бутербро'дом"], x: 'Masculino de cosa: no cambia.' },
        { q: "Он ___ ко'фе.", es: 'Él quiere café.', o: ["хо'чет", "хочу'", "хо'чешь"], x: 'Он хочет.' },
        { q: "Я ___ шокола'дку.", es: 'Quiero una chocolatina.', o: ["хочу'", "хо'чет", "хо'чешь"], x: 'Я хочу.' },
        { q: "Ты хо'чешь ___?", es: '¿Quieres pizza?', o: ["пи'ццу", "пи'цца", "пи'цце"], x: 'Пицца → пиццу.' },
      ],
    },
    outro: 'Ya pides té. En Rusia eso es medio idioma.',
  },

  /* ───────────── NIVEL 2 ───────────── */
  {
    id: 'l7', level: 1, ru: "Семья'", es: 'La familia',
    scene: 'Masha te enseña una foto vieja de su familia. Se nota que la eligió con cuidado. No lo admitirá.',
    intro: 'Hoy: la familia. La mía es normal. Bueno. Normal para Rusia.',
    dialog: [
      { ru: "Смотри', э'то фо'то. Э'то моя' семья'.", es: 'Mira, una foto. Es mi familia.' },
      { u: [["Кто э'то?", '¿Quién es?'], ["Что э'то?", '¿Qué es esto?', 'Es mi familia, no un mueble. Кто.']] },
      { ru: "Э'то моя' ма'ма, а э'то мой па'па. А э'то моя' сестра' Ка'тя.", es: 'Esta es mi mamá y este es mi papá. Y esta es mi hermana Katia.' },
      { u: [["У тебя' есть брат?", '¿Tienes un hermano?'], ["У тебя' есть сестра'?", '¿Tienes una hermana?', 'Acabo de decirte que sí. Katia. ¿Me escuchas?'], ["Ты есть брат?", '¿Eres hermano?', '«¿Eres hermano?» No. Para «tienes»: у тебя есть.']] },
      { ru: "Нет, бра'та нет. Сла'ва Бо'гу. А у тебя' есть брат и'ли сестра'?", es: 'No, no tengo hermano. Gracias a Dios. ¿Y tú tienes hermano o hermana?', e: 'smirk' },
      { u: [["Да, у меня' есть брат.", 'Sí, tengo un hermano.', 'Mis condolencias. Es broma.'], ["Да, у меня' есть сестра'.", 'Sí, tengo una hermana.', 'Entonces me entiendes.'], ["Нет. Но у меня' есть кот!", 'No. ¡Pero tengo un gato!', 'Eso cuenta. Eso cuenta más, de hecho.'], ["Да, я есть брат.", 'Sí, yo soy hermano (mal dicho).', 'Para «tener»: у меня есть.']], k: 3 },
      { ru: "А э'то моя' ба'бушка. Она' гото'вит лу'чшие пельме'ни.", es: 'Y esta es mi abuela. Hace los mejores pelmeni.', e: 'pleased' },
      { u: [["Как её зову'т?", '¿Cómo se llama?'], ["Как тебя' зову'т?", '¿Cómo te llamas?', 'Soy Masha. Llevamos siete lecciones juntos.'], ["Как его' зову'т?", '¿Cómo se llama él?', '«Его» es «a él». La abuela es ella: «её».']] },
      { ru: "Её зову'т Гали'на Ива'новна. Но все говоря'т «ба'ба Га'ля».", es: 'Se llama Galina Ivánovna. Pero todos le dicen «baba Galia».', e: 'happy' },
      { u: [["О'чень краси'вая семья'.", 'Una familia muy bonita.'], ["Э'то мой кот.", 'Este es mi gato.', 'No hay ningún gato en la foto. Pelmén no había nacido.']] },
    ],
    phrases: [
      ["Э'то моя' семья'.", 'Esta es mi familia.'],
      ["ма'ма / па'па", 'mamá / papá'],
      ["брат / сестра'", 'hermano / hermana'],
      ["ба'бушка / де'душка", 'abuela / abuelo'],
      ["У тебя' есть брат?", '¿Tienes un hermano?'],
      ["У меня' есть сестра'.", 'Tengo una hermana.'],
      ["Как её зову'т?", '¿Cómo se llama ella?'],
      ["Как его' зову'т?", '¿Cómo se llama él?'],
    ],
    grammar: {
      id: 'g7', title: '«Tener»: у меня есть',
      body: `<p>El ruso no tiene un verbo «tener» de uso diario. Dice «junto a mí hay»: [[У меня' есть сестра'.]] Tengo una hermana.</p>
<p>[[у меня']] yo · [[у тебя']] tú · [[у него']] él · [[у неё]] ella · [[у нас]] nosotros · [[у вас]] usted(es) · [[у них]] ellos</p>
<p>Fíjate: después de <b>у</b>, «его» se convierte en <b>него</b> (y «её» en <b>неё</b>).</p>
<p>Lo que tienes va en su forma normal: [[У меня' есть кот.]]</p>`,
      drills: [
        { q: "У ___ есть сестра'.", es: 'Tengo una hermana.', o: ["меня'", "я", "мне"], x: 'Yo → у меня.' },
        { q: "У ___ есть кот?", es: '¿Tienes un gato?', o: ["тебя'", "ты", "тебе'"], x: 'Tú → у тебя.' },
        { q: "У ___ есть брат.", es: 'Él tiene un hermano.', o: ["него'", "он", "его'"], x: 'Después de у: него.' },
        { q: "У ___ есть ко'шка.", es: 'Ella tiene una gata.', o: ["неё", "она'", "её"], x: 'Después de у: неё.' },
        { p: '«Tengo un gato»', o: ["У меня' есть кот.", "Я есть кот.", "Меня' есть кот."], x: 'У меня есть + lo que tienes.' },
        { q: "Э'то ___ ба'бушка.", es: 'Esta es mi abuela.', o: ["моя'", "мой", "моё"], x: 'Бабушка es femenina: моя (lección 4).' },
      ],
    },
    outro: 'Baba Galia te mandaría pelmeni si pudiera. Yo no, yo te mando tarea.',
  },
  {
    id: 'l8', level: 1, ru: "Рабо'та", es: 'El trabajo',
    scene: 'Masha corrige tareas mientras habla contigo. No deja de suspirar.',
    intro: 'Hoy hablamos del trabajo y vas a conjugar tu primer verbo de verdad. Seis formas. Respira.',
    dialog: [
      { ru: "Кем ты рабо'таешь?", es: '¿En qué trabajas?' },
      { u: [["Я рабо'таю в о'фисе.", 'Trabajo en una oficina.'], ["Я {студе'нт|студе'нтка}. Я учу'сь.", 'Soy estudiante. Estudio.'], ["Я программи'ст.", 'Soy programador.', 'Ah, por eso trabajas de noche.'], ["Я рабо'таешь.", 'Yo trabajas.', 'Я работаЮ. Tú trabajas: ты работаешь.']], k: 3 },
      { ru: "Интере'сно. А я преподава'тель. Я чита'ю, пишу' и пью чай.", es: 'Interesante. Yo soy profesora. Leo, escribo y tomo té.' },
      { u: [["Ты мно'го рабо'таешь?", '¿Trabajas mucho?'], ["Ты мно'го рабо'таю?", '¿Tú trabajo mucho?', 'Ты работаеШЬ. Con ты, -ешь.'], ["Я не зна'ю.", 'No sé.', 'No te pregunté nada. Ahora te toca preguntar a ti.']] },
      { ru: "Да. Ученики' пи'шут сообще'ния да'же в два часа' но'чи.", es: 'Sí. Los alumnos escriben mensajes incluso a las dos de la madrugada.', e: 'annoyed' },
      { u: [["Э'то не я!", '¡No soy yo!', 'Claro que no.'], ["Э'то я!", '¡Soy yo!', 'Lo sabía. Lo sabía.']], k: 2 },
      { ru: "А что ты де'лаешь ве'чером?", es: '¿Y qué haces por la tarde-noche?', e: 'smirk' },
      { u: [["Я чита'ю.", 'Leo.'], ["Я слу'шаю му'зыку.", 'Escucho música.'], ["Я отдыха'ю.", 'Descanso.'], ["Я чита'ет.", 'Yo lee.', 'Я читаЮ. Он читает.']], k: 3 },
      { ru: "Хорошо'. А я ве'чером проверя'ю дома'шнее зада'ние. Твоё.", es: 'Bien. Yo por la noche reviso la tarea. La tuya.', e: 'smirk' },
      { u: [["Спаси'бо, Ма'ша.", 'Gracias, Masha.'], ["Пока'!", '¡Chao!', 'Siempre huyes cuando sale la tarea.']] },
    ],
    phrases: [
      ["Кем ты рабо'таешь?", '¿En qué trabajas?'],
      ["Я рабо'таю в о'фисе.", 'Trabajo en una oficina.'],
      ["Я учу'сь.", 'Estudio (soy estudiante).'],
      ["Что ты де'лаешь?", '¿Qué haces?'],
      ["Я чита'ю.", 'Leo.'],
      ["Я слу'шаю му'зыку.", 'Escucho música.'],
      ["Я отдыха'ю.", 'Descanso.'],
      ["ве'чером", 'por la tarde-noche'],
      ["Интере'сно.", 'Interesante.'],
    ],
    grammar: {
      id: 'g8', title: 'Verbos en -ать',
      body: `<p>Muchos verbos terminan en <b>-ать</b> y se conjugan igual. Quita <b>-ть</b> y añade:</p>
<p>[[рабо'тать]] → [[я рабо'таю]] · [[ты рабо'таешь]] · [[он / она' рабо'тает]] · [[мы рабо'таем]] · [[вы рабо'таете]] · [[они' рабо'тают]]</p>
<p>Igual: [[чита'ть]] leer, [[знать]] saber, [[понима'ть]] entender, [[де'лать]] hacer, [[слу'шать]] escuchar, [[отдыха'ть]] descansar.</p>`,
      drills: [
        { q: "Я ___.", es: 'Leo. (читать)', o: ["чита'ю", "чита'ешь", "чита'ет"], x: 'Я → -ю.' },
        { q: "Ты ___?", es: '¿Sabes? (знать)', o: ["зна'ешь", "зна'ю", "зна'ет"], x: 'Ты → -ешь.' },
        { q: "Она' ___.", es: 'Ella trabaja. (работать)', o: ["рабо'тает", "рабо'таю", "рабо'тают"], x: 'Она → -ет.' },
        { q: "Мы ___.", es: 'Entendemos. (понимать)', o: ["понима'ем", "понима'ете", "понима'ют"], x: 'Мы → -ем.' },
        { q: "Они' ___ му'зыку.", es: 'Ellos escuchan música. (слушать)', o: ["слу'шают", "слу'шает", "слу'шаем"], x: 'Они → -ют.' },
        { q: "Что вы ___?", es: '¿Qué hacen ustedes? (делать)', o: ["де'лаете", "де'лаем", "де'лают"], x: 'Вы → -ете.' },
      ],
    },
    outro: 'Seis formas de un verbo. Y sigues vivo. Impresionante.',
  },
  {
    id: 'l9', level: 1, ru: "Ско'лько тебе' лет?", es: '¿Cuántos años tienes?',
    scene: 'Es el cumpleaños de Pelmén. Masha le compró un pastel de pescado. Él lo ignora.',
    intro: 'Números y edades. Y una pregunta que no debes hacerme. Ya verás cuál.',
    dialog: [
      { ru: "Сего'дня у Пельме'ня день рожде'ния!", es: '¡Hoy es el cumpleaños de Pelmén!', e: 'happy' },
      { u: [["Ско'лько ему' лет?", '¿Cuántos años tiene?'], ["Ско'лько тебе' лет?", '¿Cuántos años tienes tú?', '¿Mi edad? Atrevido. Pregunté por el gato.'], ["Как его' зову'т?", '¿Cómo se llama?', 'Pelmén. Se llama Pelmén. Desde la lección cuatro.']] },
      { ru: "Ему' пять лет. Он ста'рый и ва'жный. А ско'лько тебе' лет?", es: 'Tiene cinco años. Es viejo e importante. ¿Y cuántos años tienes tú?' },
      { u: [["Мне два'дцать лет.", 'Tengo veinte años.'], ["Мне три'дцать оди'н год.", 'Tengo treinta y un años.'], ["Мне со'рок два го'да.", 'Tengo cuarenta y dos años.'], ["Я два'дцать лет.", 'Yo veinte años.', 'En ruso la edad es «a mí, veinte años»: мне.']], k: 3 },
      { ru: "Ага'. А мне… секре'т.", es: 'Ajá. Y yo… secreto.', e: 'smirk' },
      { u: [["Ну, ско'лько?", 'Bueno, ¿cuántos?', 'Insistente. Vale.'], ["Хорошо', секре'т.", 'Vale, secreto.', 'Respetuoso. Te lo digo igual.']], k: 2 },
      { ru: "Мне два'дцать во'семь. И э'то после'дний раз, когда' я говорю' пра'вду.", es: 'Tengo veintiocho. Y es la última vez que digo la verdad.', e: 'eyeroll' },
      { u: [["С днём рожде'ния, Пельме'нь!", '¡Feliz cumpleaños, Pelmén!'], ["Пло'хо.", 'Mal.', '¿Mi edad está mal? Cuidado.']] },
    ],
    phrases: [
      ["Ско'лько тебе' лет?", '¿Cuántos años tienes?'],
      ["Мне два'дцать лет.", 'Tengo veinte años.'],
      ["оди'н, два, три", 'uno, dos, tres'],
      ["четы'ре, пять", 'cuatro, cinco'],
      ["шесть, семь, во'семь", 'seis, siete, ocho'],
      ["де'вять, де'сять", 'nueve, diez'],
      ["два'дцать, три'дцать", 'veinte, treinta'],
      ["С днём рожде'ния!", '¡Feliz cumpleaños!'],
    ],
    grammar: {
      id: 'g9', title: 'La edad: мне … лет',
      body: `<p>La edad se dice «a mí (son) X años»: [[Мне два'дцать лет.]] La persona va en <b>dativo</b>:</p>
<p>[[мне]] a mí · [[тебе']] a ti · [[ему']] a él · [[ей]] a ella</p>
<p>Y «año» cambia según el número que termina la cifra:</p>
<p>1 (21, 31…) → [[год]] · 2, 3, 4 (22, 33…) → [[го'да]] · 5 a 20 y el resto → [[лет]]</p>
<p>[[Мне два'дцать оди'н год.]] · [[Ему' три го'да.]] · [[Ей пять лет.]]</p>`,
      drills: [
        { q: "Мне два'дцать ___.", es: 'Tengo veinte años.', o: ["лет", "го'да", "год"], x: '20 → лет.' },
        { q: "Ему' два ___.", es: 'Él tiene dos años.', o: ["го'да", "лет", "год"], x: '2, 3, 4 → года.' },
        { q: "Ей три'дцать оди'н ___.", es: 'Ella tiene treinta y un años.', o: ["год", "го'да", "лет"], x: 'Termina en 1 → год.' },
        { q: "Мне пятна'дцать ___.", es: 'Tengo quince años.', o: ["лет", "го'да", "год"], x: 'De 5 a 20 → лет.' },
        { q: "___ пять лет.", es: 'Él tiene cinco años.', o: ["Ему'", "Он", "Его'"], x: 'Edad con dativo: ему.' },
        { q: "Ско'лько ___ лет?", es: '¿Cuántos años tienes?', o: ["тебе'", "ты", "тебя'"], x: 'Тебе: a ti.' },
      ],
    },
    outro: 'Ya cuentas hasta diez. Y sabes que tengo veintiocho. Esa información muere contigo.',
  },
  {
    id: 'l10', level: 1, ru: "В кафе'", es: 'En el café',
    scene: 'Viajaste a Petersburgo. Masha te lleva a su café favorito. Afuera llueve, claro.',
    intro: 'Hoy pides comida de verdad. Y vuelve el acusativo de la lección seis. Te dije que volvería.',
    dialog: [
      { who: 'waiter', ru: "До'брый день! Вот меню'.", es: '¡Buenas tardes! Aquí tienen el menú.' },
      { u: [["Спаси'бо!", '¡Gracias!'], ["Пока'!", '¡Chao!', 'No echamos al camarero. Lo necesitamos.']] },
      { ru: "Я бу'ду блины' и чай. А ты?", es: 'Yo voy a pedir blinis y té. ¿Y tú?' },
      { u: [["Я бу'ду борщ.", 'Yo voy a pedir borsch.'], ["Я бу'ду ка'шу.", 'Yo voy a pedir kasha.', '¿Kasha? ¿En un café? Eres mi abuela.'], ["Я бу'ду сы'рники.", 'Yo voy a pedir sýrniki.'], ["Я бу'ду ка'ша.", 'Pediré kasha (mal dicho).', '-а → -у: кашу. Como con «хочу».']], k: 3 },
      { who: 'waiter', ru: "Что бу'дете пить?", es: '¿Qué van a beber?' },
      { u: [["Мо'жно во'ду, пожа'луйста?", '¿Me da agua, por favor?'], ["Мо'жно вода', пожа'луйста?", '¿Me da agua (mal dicho)?', 'Воду. Lo pides: -у.'], ["Мо'жно меню'?", '¿Me da el menú?', 'Ya tienes el menú en la mano.']] },
      { n: 'Un rato después…' },
      { ru: "Ну как? Вку'сно?", es: '¿Y? ¿Rico?' },
      { u: [["О'чень вку'сно!", '¡Muy rico!'], ["Пло'хо.", 'Mal.', '¡Ш-ш-ш! Que te oye el camarero.']] },
      { ru: "Хорошо'. Пора'. Попроси' счёт.", es: 'Bien. Es hora. Pide la cuenta.' },
      { u: [["Мо'жно счёт, пожа'луйста?", '¿Me trae la cuenta, por favor?'], ["Мо'жно меню', пожа'луйста?", '¿Me da el menú, por favor?', '¿Quieres comer otra vez? Pide la cuenta.'], ["Ско'лько тебе' лет?", '¿Cuántos años tienes?', '¿Al camarero? ¿Y con ты? No.']] },
      { who: 'waiter', ru: "Ты'сяча две'сти рубле'й.", es: 'Mil doscientos rublos.' },
      { ru: "Ско'лько?! Э'то до'рого! Ла'дно… я плачу'.", es: '¡¿Cuánto?! ¡Es caro! Bueno… pago yo.', e: 'surprised' },
      { u: [["Спаси'бо, Ма'ша!", '¡Gracias, Masha!'], ["Э'то дёшево.", 'Es barato.', 'Para ti, que no pagas.']] },
    ],
    phrases: [
      ["До'брый день!", '¡Buenas tardes! / ¡Buen día!'],
      ["Вот меню'.", 'Aquí está el menú.'],
      ["Я бу'ду…", 'Voy a pedir… / Tomaré…'],
      ["Мо'жно…?", '¿Me da…? / ¿Se puede…?'],
      ["Мо'жно счёт, пожа'луйста?", '¿Me trae la cuenta, por favor?'],
      ["О'чень вку'сно!", '¡Muy rico!'],
      ["Ско'лько сто'ит?", '¿Cuánto cuesta?'],
      ["Э'то до'рого.", 'Es caro.'],
    ],
    grammar: {
      id: 'g10', title: '«Можно…?»: pedir con educación',
      body: `<p>[[мо'жно]] significa «se puede». Sirve para pedir casi todo:</p>
<p>con una cosa: [[Мо'жно меню'?]] ¿Me da el menú? · [[Мо'жно во'ду?]] (¡acusativo! вода → воду)</p>
<p>con un verbo: [[Мо'жно сесть?]] ¿Me puedo sentar?</p>
<p>Y para pedir en un restaurante: [[Я бу'ду…]] + lo que quieres, también en acusativo: [[Я бу'ду ка'шу.]]</p>`,
      drills: [
        { q: "Мо'жно ___ ко'фе?", es: '¿Me da una taza de café?', o: ["ча'шку", "ча'шка", "ча'шке"], x: 'Чашка → чашку.' },
        { q: "Я бу'ду ___.", es: 'Tomaré borsch.', o: ["борщ", "борща'", "бо'рщу"], x: 'Masculino de cosa: no cambia.' },
        { q: "Мо'жно ___?", es: '¿Me da una cuchara?', o: ["ло'жку", "ло'жка", "ло'жки"], x: 'Ложка → ложку.' },
        { p: 'Pides la cuenta:', o: ["Мо'жно счёт?", "Мо'жно меню'?", "Ско'лько тебе' лет?"], x: 'Счёт = la cuenta.' },
        { q: "Я бу'ду ___.", es: 'Tomaré pizza.', o: ["пи'ццу", "пи'цца", "пи'ццей"], x: 'Пицца → пиццу.' },
      ],
    },
    outro: 'Comiste, bebiste y no pagaste. Ya eres un poco ruso.',
  },
  {
    id: 'l11', level: 1, ru: "Где метро'?", es: '¿Dónde está el metro?',
    scene: 'Te perdiste en Petersburgo. Llamas a Masha. Contesta como si la hubieras despertado. Lo hiciste.',
    intro: 'Hoy: dónde están las cosas. Derecha, izquierda, recto. Y tu segundo caso: el prepositivo.',
    dialog: [
      { ru: "Алло'? Ты где?", es: '¿Aló? ¿Dónde estás?', e: 'annoyed' },
      { u: [["Я на у'лице. Я не зна'ю, где я.", 'Estoy en la calle. No sé dónde estoy.'], ["Я в Мадри'де.", 'Estoy en Madrid.', '¿Todavía? Tu vuelo era ayer.'], ["Я на у'лица.", 'Estoy en calle (mal dicho).', 'На улице, con -е. Lugar donde estás.']] },
      { ru: "Что ты ви'дишь?", es: '¿Qué ves?' },
      { u: [["Я ви'жу кафе' и банк.", 'Veo un café y un banco.'], ["Я ви'жу парк.", 'Veo un parque.'], ["Я ви'жу Ма'ша.", 'Veo a Masha (mal dicho).', 'No me ves. Estoy en casa. Y sería «Машу».']], k: 2 },
      { ru: "А, я зна'ю, где э'то. Метро' ря'дом. Иди' пря'мо, пото'м напра'во.", es: 'Ah, sé dónde es. El metro está cerca. Ve recto, luego a la derecha.' },
      { u: [["Пря'мо, пото'м напра'во?", '¿Recto y luego a la derecha?'], ["Пря'мо, пото'м нале'во?", '¿Recto y luego a la izquierda?', '¡Derecha! Напра-во. Si vas a la izquierda acabas en Finlandia.']] },
      { ru: "Да. Я жду в кафе' на Не'вском.", es: 'Sí. Te espero en el café de la avenida Nevski.' },
      { u: [["Хорошо', я иду'!", '¡Vale, ya voy!']] , k: 1 },
      { n: 'Cuarenta minutos después…' },
      { ru: "Наконе'ц-то. Где ты {был|была'}?", es: 'Por fin. ¿Dónde estabas?', e: 'eyeroll' },
      { u: [["Я {был|была'} в магази'не.", 'Estaba en una tienda.'], ["Я {был|была'} в магази'н.", 'Estaba en tienda (mal dicho).', '«В магазинЕ». Dónde → -е.']] },
      { ru: "Коне'чно. Магази'н. Ла'дно, сади'сь.", es: 'Claro. Una tienda. Bueno, siéntate.', e: 'smirk' },
      { u: [["Спаси'бо. Извини'!", 'Gracias. ¡Perdona!'], ["Где метро'?", '¿Dónde está el metro?', 'Ya llegaste. Olvida el metro.']] },
    ],
    phrases: [
      ["Где метро'?", '¿Dónde está el metro?'],
      ["Где туале'т?", '¿Dónde está el baño?'],
      ["пря'мо", 'recto, todo derecho'],
      ["напра'во", 'a la derecha'],
      ["нале'во", 'a la izquierda'],
      ["ря'дом", 'cerca, al lado'],
      ["Я на у'лице.", 'Estoy en la calle.'],
      ["Я до'ма.", 'Estoy en casa.'],
      ["в магази'не", 'en la tienda'],
      ["на рабо'те", 'en el trabajo'],
    ],
    grammar: {
      id: 'g11', title: '¿Dónde? в / на + -е',
      body: `<p>Para decir dónde está algo: [[в]] (en, dentro) o [[на]] (en, sobre; y con algunas palabras fijas) + el nombre terminado en <b>-е</b>. Es el caso <b>prepositivo</b>.</p>
<p>[[Москва']] → [[в Москве']] · [[парк]] → [[в па'рке]] · [[рабо'та]] → [[на рабо'те]] · [[у'лица]] → [[на у'лице]]</p>
<p>-ия → -ии: [[Росси'я]] → [[в Росси'и]]</p>
<p>Excepción para recordar: [[до'ма]] = en casa (sin в).</p>`,
      drills: [
        { q: "Я живу' в ___.", es: 'Vivo en Moscú.', o: ["Москве'", "Москва'", "Москву'"], x: 'Москва → в Москве.' },
        { q: "Он в ___.", es: 'Él está en el parque.', o: ["па'рке", "парк", "па'рка"], x: 'Парк → в парке.' },
        { q: "Ма'ма на ___.", es: 'Mamá está en el trabajo.', o: ["рабо'те", "рабо'та", "рабо'ту"], x: 'Работа → на работе.' },
        { q: "Мы живём в ___.", es: 'Vivimos en Rusia.', o: ["Росси'и", "Росси'е", "Росси'я"], x: '-ия → -ии.' },
        { q: "Я ___.", es: 'Estoy en casa.', o: ["до'ма", "в до'ме", "на до'ме"], x: 'En casa: дома.' },
        { q: "Где ты живёшь? — В ___.", es: '¿Dónde vives? — En Madrid.', o: ["Мадри'де", "Мадри'д", "Мадри'да"], x: 'Мадрид → в Мадриде.' },
      ],
    },
    outro: 'Encontraste el metro. Con solo cuarenta minutos de retraso. Progreso.',
  },
  {
    id: 'l12', level: 1, ru: "Что ты лю'бишь?", es: '¿Qué te gusta?',
    scene: 'Una tarde tranquila. Masha pone música en el fondo y finge que no le importa lo que pienses de ella.',
    intro: 'Hoy: gustos. Y dos maneras de decirlo. Una es directa, como yo. La otra es educada, como tú.',
    dialog: [
      { ru: "Что ты лю'бишь де'лать?", es: '¿Qué te gusta hacer?' },
      { u: [["Я люблю' чита'ть.", 'Me gusta leer.'], ["Я люблю' гото'вить.", 'Me gusta cocinar.', '¿Cocinas? Ven a Petersburgo. Ya.'], ["Я люблю' спорт.", 'Me gusta el deporte.', 'Qué cansancio.'], ["Я люби'ть чита'ть.", 'Yo gustar leer.', 'Я люблЮ. Con «л» extra.']], k: 3 },
      { ru: "А я люблю' спать. И чай. И тишину'.", es: 'A mí me encanta dormir. Y el té. Y el silencio.', e: 'pleased' },
      { u: [["Тебе' нра'вится му'зыка?", '¿Te gusta la música?'], ["Ты нра'вится му'зыка?", '¿Tú gusta música? (mal dicho)', 'Con «нравится», a quién le gusta va en dativo: тебе.']] },
      { ru: "Да, мне нра'вится рок. Ру'сский рок. Гру'ппа «Кино'». А тебе'?", es: 'Sí, me gusta el rock. Rock ruso. El grupo «Kinó». ¿Y a ti?' },
      { u: [["Мне то'же нра'вится!", '¡A mí también me gusta!'], ["А мне нра'вится джаз.", 'A mí me gusta el jazz.', 'Jazz. Sofisticado. Te lo perdono.'], ["Я нра'вится рок.", 'Yo gusta rock (mal dicho).', 'Мне нравится. Como «me gusta».']], k: 2 },
      { ru: "Хоро'ший вкус. Почти' как мой.", es: 'Buen gusto. Casi como el mío.', e: 'smirk' },
      { u: [["Спаси'бо. Я люблю' твои' уро'ки.", 'Gracias. Me encantan tus clases.', '…Ya. Bueno. Sigamos. No me mires así.'], ["Мне не нра'вится рок.", 'No me gusta el rock.', 'Mentira. Y te perdono, pero lo apunto.']] },
    ],
    phrases: [
      ["Я люблю'…", 'Me encanta… / Amo…'],
      ["Что ты лю'бишь де'лать?", '¿Qué te gusta hacer?'],
      ["Мне нра'вится…", 'Me gusta…'],
      ["Тебе' нра'вится…?", '¿Te gusta…?'],
      ["Мне не нра'вится.", 'No me gusta.'],
      ["Я люблю' спать.", 'Me encanta dormir.'],
      ["му'зыка", 'música'],
      ["Хоро'ший вкус.", 'Buen gusto.'],
    ],
    grammar: {
      id: 'g12', title: 'Verbos en -ить y «мне нравится»',
      body: `<p>El otro gran grupo de verbos termina en <b>-ить</b>. [[говори'ть]] (hablar): [[говорю']], [[говори'шь]], [[говори'т]], [[говори'м]], [[говори'те]], [[говоря'т]]</p>
<p>[[люби'ть]] (amar, encantar) mete una <b>л</b> solo en «yo»: [[люблю']], [[лю'бишь]], [[лю'бит]], [[лю'бим]], [[лю'бите]], [[лю'бят]]</p>
<p>«Me gusta» funciona como en español: lo que gusta es el sujeto y la persona va en dativo: [[Мне нра'вится му'зыка.]] Con plural: [[Мне нра'вятся ко'шки.]]</p>`,
      drills: [
        { q: "Я ___ чай.", es: 'Me encanta el té. (любить)', o: ["люблю'", "лю'бю", "лю'бит"], x: 'Я люблю, con л extra.' },
        { q: "Ты ___ по-ру'сски?", es: '¿Hablas ruso? (говорить)', o: ["говори'шь", "говори'ешь", "говорю'"], x: 'Ты говоришь.' },
        { q: "Они' ___ по-испа'нски.", es: 'Ellos hablan español.', o: ["говоря'т", "говори'т", "говори'м"], x: 'Они → -ят.' },
        { q: "___ нра'вится рок.", es: 'Me gusta el rock.', o: ["Мне", "Я", "Меня'"], x: 'Con нравится: мне.' },
        { q: "Мне нра'вятся ___.", es: 'Me gustan los gatos.', o: ["ко'шки", "ко'шка", "ко'шку"], x: 'Нравятся (plural) + кошки.' },
        { q: "Он ___ спать.", es: 'A él le encanta dormir.', o: ["лю'бит", "люблю'", "лю'бят"], x: 'Он любит.' },
      ],
    },
    outro: 'Fin del nivel uno. Te gusta el ruso. No lo niegues. Yo lo sé todo.',
  },

  /* ───────────── NIVEL 3 ───────────── */
  {
    id: 'l13', level: 2, ru: "Мой день", es: 'Mi día',
    scene: 'Son las 10:15. Masha acaba de despertarse y te está dando clase. No está claro que esté despierta.',
    intro: 'Rutinas. Despertarse, vestirse, desayunar. Cosas que yo hago muy tarde.',
    dialog: [
      { ru: "Во ско'лько ты встаёшь?", es: '¿A qué hora te levantas?', e: 'annoyed' },
      { u: [["Я встаю' в семь часо'в.", 'Me levanto a las siete.'], ["Я встаю' в во'семь.", 'Me levanto a las ocho.'], ["Я встаёшь в семь.", 'Yo te levantas a las siete.', 'Я встаЮ. Ты встаёшь.']], k: 2 },
      { ru: "Ужа'с. А я просыпа'юсь в де'сять. Я рабо'таю из до'ма.", es: 'Horror. Yo me despierto a las diez. Trabajo desde casa.', e: 'smirk' },
      { u: [["Тебе' повезло'!", '¡Qué suerte tienes!'], ["Э'то пло'хо.", 'Eso está mal.', 'No me juzgues antes del café.']] },
      { ru: "Пото'м я умыва'юсь, одева'юсь и пью ко'фе. А ты что де'лаешь у'тром?", es: 'Luego me lavo la cara, me visto y tomo café. ¿Y tú qué haces por la mañana?' },
      { u: [["Я принима'ю душ и за'втракаю.", 'Me ducho y desayuno.'], ["Я одева'ю и за'втракаю.", 'Visto y desayuno.', '«Одеваю» = visto a alguien. ¿A quién? Te falta -сь: одеваюсь.']] },
      { ru: "Ско'лько оптими'зма. А ве'чером? Во ско'лько ты ложи'шься спать?", es: 'Cuánto optimismo. ¿Y por la noche? ¿A qué hora te acuestas?' },
      { u: [["В оди'ннадцать.", 'A las once.'], ["По'здно. В час но'чи.", 'Tarde. A la una de la madrugada.'], ["Я ложи'шься.", 'Yo te acuestas.', 'Я ложУСЬ.']], k: 2 },
      { ru: "Я то'же. Мы с тобо'й со'вы.", es: 'Yo también. Somos búhos, tú y yo.', e: 'pleased' },
      { u: [["Да, мы со'вы!", '¡Sí, somos búhos!'], ["Я не сова'.", 'No soy un búho.', 'Todos dicen eso. Hasta las once de la noche.']] },
    ],
    phrases: [
      ["Во ско'лько?", '¿A qué hora?'],
      ["Я встаю' в семь часо'в.", 'Me levanto a las siete.'],
      ["Я просыпа'юсь.", 'Me despierto.'],
      ["Я умыва'юсь.", 'Me lavo (la cara).'],
      ["Я одева'юсь.", 'Me visto.'],
      ["Я за'втракаю.", 'Desayuno.'],
      ["Я ложу'сь спать.", 'Me acuesto (a dormir).'],
      ["у'тром", 'por la mañana'],
      ["Тебе' повезло'!", '¡Qué suerte tienes!'],
    ],
    grammar: {
      id: 'g13', title: 'Verbos con -ся',
      body: `<p>El final <b>-ся</b> hace que la acción vuelva a uno mismo, como «-se» en español: [[одева'ть]] vestir → [[одева'ться]] vestirse.</p>
<p>Se conjuga normal y se añade <b>-сь</b> después de vocal, <b>-ся</b> después de consonante:</p>
<p>[[я одева'юсь]] · [[ты одева'ешься]] · [[он одева'ется]] · [[мы одева'емся]] · [[вы одева'етесь]] · [[они' одева'ются]]</p>
<p>Otros: [[просыпа'ться]] despertarse, [[умыва'ться]] lavarse, [[учи'ться]] estudiar.</p>`,
      drills: [
        { q: "Я ___ в семь.", es: 'Me despierto a las siete.', o: ["просыпа'юсь", "просыпа'ю", "просыпа'ется"], x: 'Я → -юсь.' },
        { q: "Ты бы'стро ___?", es: '¿Te vistes rápido?', o: ["одева'ешься", "одева'ешь", "одева'юсь"], x: 'Ты → -ешься.' },
        { q: "Она' ___ в университе'те.", es: 'Ella estudia en la universidad.', o: ["у'чится", "учи'т", "учу'сь"], x: 'Она учится.' },
        { q: "Мы ___ в во'семь.", es: 'Nos despertamos a las ocho.', o: ["просыпа'емся", "просыпа'ем", "просыпа'ются"], x: 'Мы → -емся.' },
        { p: '«Visto a mi hijo» vs «me visto»: ¿cuál es «me visto»?', o: ["Я одева'юсь.", "Я одева'ю.", "Я одева'ет."], x: 'Con -сь: a uno mismo.' },
      ],
    },
    outro: 'Ahora ya puedes contar tu día entero. Ojalá sea más interesante que el mío.',
  },
  {
    id: 'l14', level: 2, ru: "Вчера'", es: 'Ayer',
    scene: 'Masha tiene cara de haber salido anoche. Increíble pero cierto.',
    intro: 'El pasado en ruso es fácil. De verdad. No te miento. Hoy no.',
    dialog: [
      { ru: "Что ты {де'лал|де'лала} вчера'?", es: '¿Qué hiciste ayer?' },
      { u: [["Я {рабо'тал|рабо'тала}.", 'Trabajé.'], ["Я {был|была'} до'ма.", 'Estuve en casa.'], ["Я {смотре'л|смотре'ла} фильм.", 'Vi una película.'], ["Я рабо'таю вчера'.", 'Trabajo ayer.', 'Ayer es pasado: работал, con -л.']], k: 3 },
      { ru: "А я была' на вечери'нке.", es: 'Yo estuve en una fiesta.', e: 'smirk' },
      { u: [["Пра'вда? Ты?", '¿En serio? ¿Tú?'], ["Как дела'?", '¿Cómo estás?', 'Te conté algo histórico y me preguntas «cómo estás».']] },
      { ru: "Да. Я. Я танцева'ла. Немно'го. Две мину'ты.", es: 'Sí. Yo. Bailé. Un poco. Dos minutos.', e: 'eyeroll' },
      { u: [["А пото'м?", '¿Y después?'], ["А за'втра?", '¿Y mañana?', 'Estamos en el pasado. Concéntrate.']] },
      { ru: "Пото'м я пошла' домо'й, и мы с Пельме'нем смотре'ли телеви'зор.", es: 'Después me fui a casa, y Pelmén y yo vimos la tele.' },
      { u: [["Отли'чная вечери'нка!", '¡Gran fiesta!'], ["Пельме'нь смотре'ла телеви'зор?", '¿Pelmén veía (fem.) la tele?', 'Pelmén es macho: смотрел.']] },
      { ru: "Вот и'менно. Лу'чшая.", es: 'Exacto. La mejor.', e: 'happy' },
      { u: [["Я тебе' ве'рю.", 'Te creo.']] },
    ],
    phrases: [
      ["вчера'", 'ayer'],
      ["Что ты {де'лал|де'лала} вчера'?", '¿Qué hiciste ayer?'],
      ["Я {был|была'} до'ма.", 'Estuve en casa.'],
      ["Я {рабо'тал|рабо'тала}.", 'Trabajé.'],
      ["Я {смотре'л|смотре'ла} фильм.", 'Vi una película.'],
      ["на вечери'нке", 'en una fiesta'],
      ["пото'м", 'después'],
      ["Пра'вда?", '¿De verdad?'],
    ],
    grammar: {
      id: 'g14', title: 'El pasado: -л, -ла, -ли',
      body: `<p>Para el pasado quita <b>-ть</b> y pon <b>-л</b>. No importa la persona, sino el <b>género</b>:</p>
<p>[[он рабо'тал]] · [[она' рабо'тала]] · [[оно' рабо'тало]] · [[они' рабо'тали]]</p>
<p>[[я]] y [[ты]] siguen el género de quien habla o escucha: [[Я был]] (hombre), [[Я была']] (mujer). Con [[вы]] y [[мы]], siempre <b>-ли</b>.</p>
<p>«Ser/estar» sí aparece en pasado: [[был]], [[была']], [[бы'ло]], [[бы'ли]].</p>`,
      drills: [
        { q: "Она' ___.", es: 'Ella trabajó.', o: ["рабо'тала", "рабо'тал", "рабо'тали"], x: 'Она → -ла.' },
        { q: "Мы ___ фильм.", es: 'Vimos una película.', o: ["смотре'ли", "смотре'л", "смотре'ла"], x: 'Мы → -ли.' },
        { q: "Он ___ до'ма.", es: 'Él estuvo en casa.', o: ["был", "была'", "бы'ли"], x: 'Он был.' },
        { q: "Ма'ша ___.", es: 'Masha bailó.', o: ["танцева'ла", "танцева'л", "танцева'ли"], x: 'Маша → -ла.' },
        { q: "Вчера' я ___ кни'гу.", es: 'Ayer leí un libro.', o: ["{чита'л|чита'ла}", "{чита'ла|чита'л}", "чита'ю"], x: 'Я sigue tu género.' },
      ],
    },
    outro: 'Ya puedes contar el pasado. El mío es aburrido. El tuyo cuéntamelo en ruso.',
  },
  {
    id: 'l15', level: 2, ru: "За'втра", es: 'Mañana',
    scene: 'Masha mira el pronóstico del tiempo. Dice «sin lluvia». Ella no se lo cree.',
    intro: 'El futuro. Planes. Cosas que dirás que harás y no harás. Muy humano.',
    dialog: [
      { ru: "Что ты бу'дешь де'лать за'втра?", es: '¿Qué vas a hacer mañana?' },
      { u: [["Я бу'ду рабо'тать.", 'Voy a trabajar.'], ["Я бу'ду отдыха'ть.", 'Voy a descansar.'], ["Я бу'ду рабо'таю.", 'Voy a trabajo (mal dicho).', 'Después de «буду», el verbo va en infinitivo: работать.']], k: 2 },
      { ru: "А я бу'ду гуля'ть. Мо'жет быть. Е'сли не бу'дет дождя'.", es: 'Yo voy a pasear. Tal vez. Si no llueve.' },
      { u: [["Дава'й гуля'ть вме'сте!", '¡Paseemos juntos!'], ["Я не бу'ду.", 'No lo haré.', 'Nadie te invitó. Todavía.']] },
      { ru: "Хм. Дава'й. Но е'сли бу'дет дождь, мы бу'дем сиде'ть в кафе'.", es: 'Hm. Vale. Pero si llueve, nos quedamos en un café.', e: 'pleased' },
      { u: [["Договори'лись!", '¡Trato hecho!'], ["Нет, спаси'бо.", 'No, gracias.', '¿Propones algo y luego dices que no? Clásico.']] },
      { ru: "Во ско'лько?", es: '¿A qué hora?' },
      { u: [["В три часа'.", 'A las tres.'], ["В пять.", 'A las cinco.'], ["В семь утра'.", 'A las siete de la mañana.', '¿A las siete? ¿De la mañana? ¿Quién eres?']], k: 2 },
      { ru: "Хорошо'. Не опа'здывай.", es: 'Bien. No llegues tarde.', e: 'smirk' },
      { u: [["Я не бу'ду опа'здывать!", '¡No voy a llegar tarde!', 'Lección once. Cuarenta minutos. Yo me acuerdo.']] },
    ],
    phrases: [
      ["за'втра", 'mañana'],
      ["Что ты бу'дешь де'лать?", '¿Qué vas a hacer?'],
      ["Я бу'ду рабо'тать.", 'Voy a trabajar.'],
      ["Дава'й…!", '¡Vamos a…! / ¡Venga…!'],
      ["вме'сте", 'juntos'],
      ["Договори'лись!", '¡Trato hecho! / ¡Quedamos así!'],
      ["Мо'жет быть.", 'Tal vez.'],
      ["Не опа'здывай!", '¡No llegues tarde!'],
    ],
    grammar: {
      id: 'g15', title: 'El futuro con «буду»',
      body: `<p>Para planes y acciones en curso en el futuro: [[быть]] en futuro + <b>infinitivo</b>.</p>
<p>[[я бу'ду]] · [[ты бу'дешь]] · [[он бу'дет]] · [[мы бу'дем]] · [[вы бу'дете]] · [[они' бу'дут]] + [[рабо'тать]], [[чита'ть]], [[гуля'ть]]…</p>
<p>Y para proponer: [[Дава'й]] + infinitivo: [[Дава'й гуля'ть!]] ¡Vamos a pasear!</p>`,
      drills: [
        { q: "Я ___ рабо'тать.", es: 'Voy a trabajar.', o: ["бу'ду", "бу'дешь", "бу'дет"], x: 'Я буду.' },
        { q: "Что ты бу'дешь ___?", es: '¿Qué vas a hacer?', o: ["де'лать", "де'лаешь", "де'лал"], x: 'Después de буду: infinitivo.' },
        { q: "Они' ___ отдыха'ть.", es: 'Ellos van a descansar.', o: ["бу'дут", "бу'дем", "бу'дет"], x: 'Они будут.' },
        { q: "Мы ___ гуля'ть.", es: 'Vamos a pasear.', o: ["бу'дем", "бу'дете", "бу'ду"], x: 'Мы будем.' },
        { p: '«¡Vamos a ver una película!»', o: ["Дава'й смотре'ть фильм!", "Дава'й смо'трим фильм!", "Дава'й смотре'л фильм!"], x: 'Давай + infinitivo.' },
      ],
    },
    outro: 'Tenemos un plan. Si llueve, café. Si no llueve… también café, seguramente.',
  },
  {
    id: 'l16', level: 2, ru: "Куда' ты идёшь?", es: '¿A dónde vas?',
    scene: 'Masha lleva una maleta. Va a Moscú para el cumpleaños de su hermana Katia. No está emocionada. Está muy emocionada.',
    intro: 'Hoy: ir. En ruso «ir» son varios verbos. A pie, en coche… Sí, de verdad.',
    dialog: [
      { ru: "Куда' ты идёшь?", es: '¿A dónde vas?' },
      { u: [["Я иду' в магази'н.", 'Voy a la tienda.'], ["Я иду' в парк.", 'Voy al parque.'], ["Я иду' в магази'не.", 'Voy en la tienda.', '«В магазине» = estar en la tienda. Para ir hacia: «в магазин».']], k: 2 },
      { ru: "А я е'ду в Москву'. На по'езде.", es: 'Yo voy a Moscú. En tren.' },
      { u: [["Заче'м?", '¿Para qué?'], ["Ты идёшь в Москву'?", '¿Vas a pie a Moscú?', '¿A pie? Son setecientos kilómetros. En vehículo: ехать.']] },
      { ru: "Там моя' сестра' Ка'тя. У неё день рожде'ния.", es: 'Allí está mi hermana Katia. Es su cumpleaños.', e: 'pleased' },
      { u: [["Как здо'рово! Ско'лько ей лет?", '¡Qué bien! ¿Cuántos años cumple?'], ["Ско'лько ему' лет?", '¿Cuántos años tiene él?', 'Katia es ella: ей.']] },
      { ru: "Ей два'дцать пять. Она' мла'дшая. И люби'мая. Как всегда'.", es: 'Veinticinco. Es la menor. Y la favorita. Como siempre.', e: 'eyeroll' },
      { u: [["А ты е'дешь на самолёте?", '¿Y vas en avión?'], ["А ты идёшь на самолёте?", '¿Y vas a pie en avión?', 'Nadie va a pie en avión. Едешь.']] },
      { ru: "Нет, на «Сапса'не». Э'то по'езд. Четы'ре часа'. Я бу'ду спать.", es: 'No, en el «Sapsán». Es un tren. Cuatro horas. Voy a dormir.' },
      { u: [["Хоро'шей пое'здки!", '¡Buen viaje!'], ["До'брый день!", '¡Buenas tardes!', 'Se dice al llegar, no al irse.']] },
    ],
    phrases: [
      ["Куда' ты идёшь?", '¿A dónde vas? (a pie)'],
      ["Я иду' в магази'н.", 'Voy a la tienda.'],
      ["Я е'ду в Москву'.", 'Voy a Moscú. (en vehículo)'],
      ["на по'езде", 'en tren'],
      ["на метро'", 'en metro'],
      ["на маши'не", 'en coche'],
      ["Заче'м?", '¿Para qué?'],
      ["Хоро'шей пое'здки!", '¡Buen viaje!'],
    ],
    grammar: {
      id: 'g16', title: 'Ir: идти y ехать',
      body: `<p>[[идти']] es ir <b>a pie</b>: [[иду']], [[идёшь]], [[идёт]], [[идём]], [[идёте]], [[иду'т]]</p>
<p>[[е'хать]] es ir <b>en un vehículo</b>: [[е'ду]], [[е'дешь]], [[е'дет]], [[е'дем]], [[е'дете]], [[е'дут]]</p>
<p>¿A dónde? = [[куда']] → в/на + <b>acusativo</b>: [[в Москву']], [[в парк]], [[на рабо'ту]].</p>
<p>¿Dónde? = [[где]] → в/на + <b>prepositivo</b>: [[в Москве']], [[в па'рке]]. Movimiento contra lugar.</p>`,
      drills: [
        { q: "Я ___ в парк.", es: 'Voy (a pie) al parque.', o: ["иду'", "е'ду", "идёт"], x: 'A pie: иду.' },
        { q: "Мы ___ в Москву' на по'езде.", es: 'Vamos a Moscú en tren.', o: ["е'дем", "идём", "е'дут"], x: 'En tren: ехать. Мы едем.' },
        { q: "Ты идёшь в ___?", es: '¿Vas a la tienda?', o: ["магази'н", "магази'не", "магази'на"], x: '¿A dónde? → acusativo: в магазин.' },
        { q: "Она' е'дет на ___.", es: 'Ella va al trabajo.', o: ["рабо'ту", "рабо'те", "рабо'та"], x: '¿A dónde? → на работу.' },
        { q: "___ ты идёшь?", es: '¿A dónde vas?', o: ["Куда'", "Где", "Отку'да"], x: 'Movimiento hacia: куда.' },
        { q: "Он ___ на метро'.", es: 'Él va en metro.', o: ["е'дет", "идёт", "е'ду"], x: 'Vehículo: едет.' },
      ],
    },
    outro: 'Sabes ir a pie y en tren. Te falta ir en oso. Eso es nivel avanzado.',
  },
  {
    id: 'l17', level: 2, ru: "В магази'не", es: 'En la tienda',
    scene: 'Masha volvió de Moscú y quiere hacer blinis. Van juntos a la tienda de la esquina. No hay leche.',
    intro: 'Compras. Y un caso que te va a perseguir toda la vida: el genitivo. Hoy solo con «no hay».',
    dialog: [
      { ru: "Так. Для блино'в нам ну'жно молоко'. Спроси', есть ли молоко'.", es: 'Bien. Para los blinis necesitamos leche. Pregunta si tienen leche.' },
      { u: [["Извини'те, у вас есть молоко'?", 'Disculpe, ¿tienen leche?'], ["Извини', у тебя' есть молоко'?", 'Disculpa, ¿tienes leche? (informal)', '¿Tuteas a la vendedora? Con desconocidos, «вы».']] },
      { who: 'seller', ru: "Нет, молока' нет. Есть кефи'р.", es: 'No, no hay leche. Hay kéfir.' },
      { ru: "Кефи'р? Для блино'в? Ну… мо'жно.", es: '¿Kéfir? ¿Para blinis? Bueno… se puede.', e: 'annoyed' },
      { u: [["Ско'лько сто'ит кефи'р?", '¿Cuánto cuesta el kéfir?'], ["Ско'лько тебе' лет?", '¿Cuántos años tienes?', 'Otra vez esa pregunta. A la vendedora. No.']] },
      { who: 'seller', ru: "Сто рубле'й.", es: 'Cien rublos.' },
      { u: [["Да'йте, пожа'луйста, два.", 'Deme dos, por favor.'], ["Дай два.", 'Dame dos.', 'Muy brusco. «Дайте, пожалуйста».']] },
      { ru: "И сыр. Без сы'ра жизнь не жизнь.", es: 'Y queso. Sin queso la vida no es vida.' },
      { u: [["Ой… у меня' нет де'нег.", 'Uy… no tengo dinero.'], ["У меня' нет де'ньги.", 'No tengo dinero (mal dicho).', 'Después de «нет»: genitivo. Денег.']] },
      { ru: "Коне'чно. Я плачу'. Опя'ть.", es: 'Claro. Pago yo. Otra vez.', e: 'eyeroll' },
      { u: [["Спаси'бо! Ты лу'чшая!", '¡Gracias! ¡Eres la mejor!', 'Lo sé. Pero me debes dos cafés.']] },
    ],
    phrases: [
      ["Извини'те, у вас есть…?", 'Disculpe, ¿tienen…?'],
      ["Молока' нет.", 'No hay leche.'],
      ["Ско'лько сто'ит?", '¿Cuánto cuesta?'],
      ["Да'йте, пожа'луйста…", 'Deme, por favor…'],
      ["У меня' нет де'нег.", 'No tengo dinero.'],
      ["молоко'", 'leche'],
      ["сыр", 'queso'],
      ["хлеб", 'pan'],
      ["без сы'ра", 'sin queso'],
    ],
    grammar: {
      id: 'g17', title: '«No hay»: нет + genitivo',
      body: `<p>Para decir que algo <b>no hay</b> o <b>no tienes</b>: [[нет]] + <b>genitivo</b> (el caso de «из», ¿te acuerdas?).</p>
<p>masculino y neutro → <b>-а / -я</b>: [[сыр]] → [[нет сы'ра]] · [[молоко']] → [[нет молока']]</p>
<p>femenino → <b>-ы / -и</b>: [[вода']] → [[нет воды']] · [[неде'ля]] → [[нет неде'ли]]</p>
<p>Lo mismo después de [[без]] (sin): [[без са'хара]]. Y una para memorizar: [[де'ньги]] → [[нет де'нег]].</p>`,
      drills: [
        { q: "Нет ___.", es: 'No hay queso.', o: ["сы'ра", "сыр", "сы'ру"], x: 'Masculino → -а.' },
        { q: "У меня' нет ___.", es: 'No tengo agua.', o: ["воды'", "вода'", "во'ду"], x: 'Femenino → -ы.' },
        { q: "Молока' ___.", es: 'No hay leche.', o: ["нет", "не", "без"], x: 'No hay: нет.' },
        { q: "Ко'фе без ___.", es: 'Café sin azúcar.', o: ["са'хара", "са'хар", "са'харом"], x: 'Без + genitivo.' },
        { q: "У меня' нет ___.", es: 'No tengo dinero.', o: ["де'нег", "де'ньги", "де'ньгами"], x: 'Деньги → денег.' },
        { q: "Здесь нет ___.", es: 'Aquí no hay pan.', o: ["хле'ба", "хлеб", "хле'бе"], x: 'Хлеб → хлеба.' },
      ],
    },
    outro: 'Blinis con kéfir. Mi abuela se moriría. Pero salieron buenos.',
  },
  {
    id: 'l18', level: 2, ru: "Пого'да", es: 'El clima',
    scene: 'Petersburgo, octubre. Llueve de lado. Masha tiene tres tazas de té en la mesa.',
    intro: 'El tema favorito de los rusos después de la política: el clima. Y el mío: la lluvia.',
    dialog: [
      { ru: "Ну и пого'да. Опя'ть дождь.", es: 'Vaya tiempo. Otra vez lluvia.', e: 'annoyed' },
      { u: [["А у нас со'лнце и тепло'.", 'Aquí hay sol y hace calorcito.'], ["Мне нра'вится дождь.", 'Me gusta la lluvia.', 'A ti te gusta porque no vives aquí.']] },
      { ru: "Не хвали'сь. Ско'лько у вас гра'дусов?", es: 'No presumas. ¿Cuántos grados hay allí?', e: 'eyeroll' },
      { u: [["Два'дцать пять.", 'Veinticinco.'], ["Три'дцать.", 'Treinta.']], k: 2 },
      { ru: "А у нас пять. И ве'тер. Мне хо'лодно.", es: 'Aquí cinco. Y viento. Tengo frío.', e: 'sad' },
      { u: [["Пей горя'чий чай!", '¡Toma té caliente!'], ["Мне то'же хо'лодно.", 'Yo también tengo frío.', '¿Con veinticinco grados? Mentiroso.'], ["Я хо'лодно.", 'Yo frío (mal dicho).', 'Мне холодно. A mí (dativo).']] },
      { ru: "Я уже' пью. Тре'тью ча'шку. А зимо'й бу'дет ми'нус два'дцать.", es: 'Ya lo hago. Tercera taza. Y en invierno habrá menos veinte.' },
      { u: [["Ужа'с!", '¡Qué horror!'], ["Отли'чно!", '¡Excelente!', 'Para ti es fácil decirlo.']] },
      { ru: "Нет. Зимо'й краси'во. Снег, тишина'… Я люблю' зи'му.", es: 'No. En invierno es bonito. Nieve, silencio… Me encanta el invierno.', e: 'happy' },
      { u: [["Мо'жет быть, я прие'ду зимо'й.", 'Tal vez vaya en invierno.', 'Trae abrigo. De verdad. No es broma.']] },
    ],
    phrases: [
      ["Кака'я сего'дня пого'да?", '¿Qué tiempo hace hoy?'],
      ["Хо'лодно.", 'Hace frío.'],
      ["Тепло'.", 'Hace calorcito / templado.'],
      ["Жа'рко.", 'Hace calor.'],
      ["Идёт дождь.", 'Llueve.'],
      ["Идёт снег.", 'Nieva.'],
      ["Мне хо'лодно.", 'Tengo frío.'],
      ["зимо'й / ле'том", 'en invierno / en verano'],
    ],
    grammar: {
      id: 'g18', title: 'Frases sin sujeto: холодно, мне холодно',
      body: `<p>Para el clima y las sensaciones, el ruso usa frases sin sujeto, con una palabra en <b>-о</b>: [[Хо'лодно.]] Hace frío. · [[Жа'рко.]] Hace calor.</p>
<p>Si quieres decir <b>quién</b> lo siente, usa el dativo (como con la edad y «нравится»):</p>
<p>[[мне]] · [[тебе']] · [[ему']] · [[ей]] · [[нам]] · [[вам]] · [[им]] — [[Мне хо'лодно.]] Tengo frío. · [[Ей ску'чно.]] Ella se aburre.</p>
<p>En pasado: [[бы'ло]]. [[Вчера' бы'ло хо'лодно.]]</p>`,
      drills: [
        { q: "___ хо'лодно.", es: 'Tengo frío.', o: ["Мне", "Я", "Меня'"], x: 'Quien siente: dativo, мне.' },
        { q: "Тебе' ___?", es: '¿Tienes calor?', o: ["жа'рко", "жа'ркий", "жара'"], x: 'Forma en -о: жарко.' },
        { q: "___ ску'чно.", es: 'Ella se aburre.', o: ["Ей", "Она'", "Её"], x: 'Ella → ей.' },
        { q: "Вчера' ___ хо'лодно.", es: 'Ayer hizo frío.', o: ["бы'ло", "был", "была'"], x: 'Frase sin sujeto en pasado: было.' },
        { q: "___ тепло'.", es: 'Nosotros tenemos calorcito.', o: ["Нам", "Мы", "Нас"], x: 'Nosotros → нам.' },
      ],
    },
    outro: 'Ya hablas del clima como un ruso: con resignación.',
  },

  /* ───────────── NIVEL 4 ───────────── */
  {
    id: 'l19', level: 2, ru: "У врача'", es: 'En el médico',
    scene: 'Te resfriaste en Petersburgo (te lo dijo). Vas al médico. Luego llamas a Masha.',
    intro: 'Hoy: decir qué te duele. Ojalá nunca lo necesites. Lo vas a necesitar.',
    dialog: [
      { who: 'doctor', ru: "Здра'вствуйте. Что у вас боли'т?", es: 'Buenos días. ¿Qué le duele?' },
      { u: [["У меня' боли'т голова'.", 'Me duele la cabeza.'], ["У меня' боли'т го'рло.", 'Me duele la garganta.'], ["Я боли'т голова'.", 'Yo duele cabeza.', 'Como «tener»: у меня болит.']], k: 2 },
      { who: 'doctor', ru: "Температу'ра есть?", es: '¿Tiene fiebre?' },
      { u: [["Да, три'дцать во'семь.", 'Sí, treinta y ocho.'], ["Нет, температу'ры нет.", 'No, no tengo fiebre.']], k: 2 },
      { who: 'doctor', ru: "Поня'тно. Э'то просту'да. Пе'йте чай с лимо'ном и отдыха'йте.", es: 'Entiendo. Es un resfriado. Beba té con limón y descanse.' },
      { u: [["Спаси'бо, до'ктор.", 'Gracias, doctor.'], ["Пока', до'ктор!", '¡Chao, doctor!', 'Al médico: до свидания.']] },
      { n: 'Más tarde llamas a Masha.' },
      { ru: "Ну что? Что сказа'л врач?", es: '¿Y? ¿Qué dijo el médico?' },
      { u: [["Пить чай и отдыха'ть.", 'Tomar té y descansar.'], ["Мне хорошо'.", 'Estoy bien.', 'No te pregunté cómo estás, sino qué dijo el médico.']] },
      { ru: "Ви'дишь? Я всегда' говорю': чай помога'ет! Выздора'вливай.", es: '¿Ves? Siempre lo digo: ¡el té ayuda! Recupérate.', e: 'happy' },
      { u: [["Спаси'бо, Ма'ша.", 'Gracias, Masha.']] },
    ],
    phrases: [
      ["Что у вас боли'т?", '¿Qué le duele?'],
      ["У меня' боли'т голова'.", 'Me duele la cabeza.'],
      ["У меня' боли'т го'рло.", 'Me duele la garganta.'],
      ["У меня' боли'т живо'т.", 'Me duele el estómago.'],
      ["Мне пло'хо.", 'Me siento mal.'],
      ["температу'ра", 'fiebre (temperatura)'],
      ["Поня'тно.", 'Entendido. / Ya veo.'],
      ["Выздора'вливай!", '¡Recupérate! / ¡Que te mejores!'],
    ],
    grammar: {
      id: 'g19', title: '«Me duele»: у меня болит',
      body: `<p>Se construye como «tener»: [[у меня']] + [[боли'т]] + lo que duele (en su forma normal).</p>
<p>[[У меня' боли'т голова'.]] Me duele la cabeza. · [[У него' боли'т го'рло.]] A él le duele la garganta.</p>
<p>Si lo que duele es plural: [[боля'т]]. [[У меня' боля'т но'ги.]] Me duelen las piernas.</p>
<p>Y «me siento mal / bien» va con dativo: [[Мне пло'хо.]] · [[Мне лу'чше.]]</p>`,
      drills: [
        { q: "У меня' ___ голова'.", es: 'Me duele la cabeza.', o: ["боли'т", "боля'т", "боле'л"], x: 'Una cabeza: болит.' },
        { q: "У меня' ___ но'ги.", es: 'Me duelen las piernas.', o: ["боля'т", "боли'т", "боли'шь"], x: 'Plural: болят.' },
        { q: "У ___ боли'т го'рло.", es: 'A ella le duele la garganta.', o: ["неё", "её", "она'"], x: 'Después de у: неё.' },
        { q: "___ пло'хо.", es: 'Me siento mal.', o: ["Мне", "Я", "У меня'"], x: 'Dativo: мне плохо.' },
        { p: '«¿Qué te duele?» (a un amigo)', o: ["Что у тебя' боли'т?", "Что у вас боли'т?", "Что тебе' боли'т?"], x: 'Amigo: у тебя.' },
      ],
    },
    outro: 'Té con limón. Te lo dije desde la lección uno.',
  },
  {
    id: 'l20', level: 2, ru: "На'до занима'ться", es: 'Hay que estudiar',
    scene: 'Mañana hay un examen. Masha está más nerviosa que tú. No lo va a admitir.',
    intro: 'Obligaciones y permisos: hay que, se puede, no se puede. La vida en general.',
    dialog: [
      { ru: "За'втра контро'льная. Тебе' на'до занима'ться.", es: 'Mañana hay examen. Tienes que estudiar.' },
      { u: [["Сего'дня? Но сего'дня пя'тница!", '¿Hoy? ¡Pero hoy es viernes!', 'Да. Viernes. ¿Y?'], ["Мне не на'до.", 'No me hace falta.', 'Sí hace falta. Créeme.']] },
      { ru: "Нельзя' отдыха'ть пе'ред контро'льной.", es: 'No se puede descansar antes de un examen.', e: 'annoyed' },
      { u: [["А мо'жно пить ко'фе?", '¿Y se puede tomar café?'], ["А нельзя' пить ко'фе?", '¿Y no se puede tomar café?', 'Pregunta en positivo: «А можно…?».']] },
      { ru: "Мо'жно. Ну'жно!", es: 'Se puede. ¡Se debe!', e: 'happy' },
      { u: [["Что мне ну'жно повтори'ть?", '¿Qué tengo que repasar?'], ["Что я ну'жно повтори'ть?", '¿Qué yo hay que repasar? (mal dicho)', 'Мне нужно. Dativo, como siempre.']] },
      { ru: "Всё. Падежи', глаго'лы… И не забу'дь: я тебя' ве'рю. Ой. Я в тебя' ве'рю.", es: 'Todo. Casos, verbos… Y no olvides: creo en ti.', e: 'surprised' },
      { u: [["Ты сде'лала оши'бку!", '¡Cometiste un error!'], ["Что?", '¿Qué?', 'Nada. No pasó nada. Sigue.']] },
      { ru: "Нет. Э'то был тест. Ты {внима'тельный|внима'тельная}. Молоде'ц.", es: 'No. Era una prueba. Eres atento/a. Bien hecho.', e: 'smirk' },
      { u: [["Коне'чно, тест.", 'Claro, una prueba.', 'Exacto. Una prueba. Fin del tema.']] },
    ],
    phrases: [
      ["Мне на'до занима'ться.", 'Tengo que estudiar.'],
      ["ну'жно", 'hace falta, hay que'],
      ["мо'жно", 'se puede'],
      ["нельзя'", 'no se puede, está prohibido'],
      ["контро'льная", 'examen (de clase)'],
      ["Что мне ну'жно повтори'ть?", '¿Qué tengo que repasar?'],
      ["Я в тебя' ве'рю.", 'Creo en ti.'],
      ["Не забу'дь!", '¡No olvides!'],
    ],
    grammar: {
      id: 'g20', title: 'Hay que, se puede, no se puede',
      body: `<p>Cuatro palabras sin verbo conjugado, siempre con <b>infinitivo</b>:</p>
<p>[[на'до]] / [[ну'жно]] hay que · [[мо'жно]] se puede · [[нельзя']] no se puede</p>
<p>¿Para quién? <b>Dativo</b>: [[Мне на'до рабо'тать.]] Tengo que trabajar. · [[Тебе' нельзя' кури'ть.]] No puedes fumar.</p>
<p>En pasado añade [[бы'ло]]: [[Мне на'до бы'ло занима'ться.]] Tenía que estudiar.</p>`,
      drills: [
        { q: "___ на'до рабо'тать.", es: 'Tengo que trabajar.', o: ["Мне", "Я", "Меня'"], x: 'Dativo: мне.' },
        { q: "Здесь ___ кури'ть.", es: 'Aquí no se puede fumar.', o: ["нельзя'", "не мо'жно", "нет"], x: 'No se puede: нельзя.' },
        { q: "Тебе' на'до ___.", es: 'Tienes que descansar.', o: ["отдыха'ть", "отдыха'ешь", "отдыха'ю"], x: 'Después de надо: infinitivo.' },
        { q: "___ мо'жно войти'?", es: '¿Puedo entrar?', o: ["Мне", "Я", "У меня'"], x: 'Мне можно.' },
        { q: "Нам ___ бы'ло занима'ться.", es: 'Teníamos que estudiar.', o: ["на'до", "нельзя'", "бу'дет"], x: 'Надо было: había que.' },
      ],
    },
    outro: 'Vas a aprobar. Lo sé. Bueno, lo sospecho fuertemente.',
  },
  {
    id: 'l21', level: 2, ru: "Уже' сде'лал?", es: '¿Ya lo hiciste?',
    scene: 'El día después del examen. Masha revisa si hiciste la tarea. Con lupa.',
    intro: 'El aspecto. El tema más ruso de todo el ruso. No llores. Es más lógico de lo que parece.',
    dialog: [
      { ru: "Ну? Ты {прочита'л|прочита'ла} текст?", es: '¿Y? ¿Leíste el texto (completo)?' },
      { u: [["Я {чита'л|чита'ла}, но не {прочита'л|прочита'ла}.", 'Lo estuve leyendo, pero no lo terminé.', 'El clásico. Leíste, pero no terminaste. Al menos usaste bien el aspecto.'], ["Да, я {прочита'л|прочита'ла}!", '¡Sí, lo leí entero!', '¿Entero? ¿Seguro? Te creo. Un poco.']], k: 2 },
      { ru: "Поня'тно. А дома'шнее зада'ние ты {сде'лал|сде'лала}?", es: 'Entiendo. ¿Y la tarea la hiciste (terminaste)?' },
      { u: [["Да, я всё {сде'лал|сде'лала}!", '¡Sí, lo hice todo!'], ["Да, я всё {де'лал|де'лала}.", 'Sí, estuve haciéndolo todo.', '«Делал» = estuve haciendo. ¿Lo terminaste? Entonces «сделал».']] },
      { ru: "Молоде'ц! Я горжу'сь… то есть, норма'льно.", es: '¡Bravo! Estoy orgullosa… digo, normal.', e: 'happy' },
      { u: [["Ты сказа'ла «горжу'сь»!", '¡Dijiste «orgullosa»!'], ["Спаси'бо.", 'Gracias.', 'De nada. Y no dije nada.']] },
      { ru: "Нет. Не говори'ла. Ты {оши'бся|оши'блась}.", es: 'No. No lo dije. Te equivocaste.', e: 'eyeroll' },
      { u: [["Ла'дно, ла'дно.", 'Vale, vale.']] },
    ],
    phrases: [
      ["уже'", 'ya'],
      ["ещё не", 'todavía no'],
      ["Ты {сде'лал|сде'лала} дома'шнее зада'ние?", '¿Hiciste la tarea?'],
      ["Я всё {сде'лал|сде'лала}.", 'Lo hice todo.'],
      ["Я ещё не {прочита'л|прочита'ла}.", 'Todavía no lo he leído (entero).'],
      ["Я горжу'сь тобо'й.", 'Estoy orgulloso/a de ti.'],
      ["то есть", 'es decir'],
      ["Поня'тно.", 'Entiendo. / Ya veo.'],
    ],
    grammar: {
      id: 'g21', title: 'El aspecto: proceso o resultado',
      body: `<p>Casi todos los verbos vienen en <b>pareja</b>:</p>
<p><b>imperfectivo</b> = el proceso, la costumbre, lo que se repite: [[чита'ть]], [[де'лать]], [[писа'ть]], [[смотре'ть]]</p>
<p><b>perfectivo</b> = el resultado, una vez, completo: [[прочита'ть]], [[сде'лать]], [[написа'ть]], [[посмотре'ть]]</p>
<p>[[Я чита'л кни'гу.]] Estuve leyendo el libro. · [[Я прочита'л кни'гу.]] Me leí el libro (lo terminé).</p>
<p>Pista: con [[ка'ждый день]] (cada día) o [[до'лго]] (mucho tiempo), imperfectivo. Con [[уже']] (ya) y un resultado, perfectivo.</p>`,
      drills: [
        { q: "Я ка'ждый день ___ газе'ту.", es: 'Cada día leo el periódico.', o: ["чита'ю", "прочита'ю", "прочита'л"], x: 'Costumbre: imperfectivo.' },
        { q: "Ты уже' ___ дома'шнее зада'ние?", es: '¿Ya hiciste la tarea?', o: ["{сде'лал|сде'лала}", "{де'лал|де'лала}", "де'лаешь"], x: 'Ya + resultado: perfectivo.' },
        { q: "Вчера' я до'лго ___ телеви'зор.", es: 'Ayer estuve mucho tiempo viendo la tele.', o: ["{смотре'л|смотре'ла}", "{посмотре'л|посмотре'ла}", "посмотрю'"], x: 'Mucho tiempo (proceso): imperfectivo.' },
        { q: "Она' ___ письмо' и пошла' спать.", es: 'Ella escribió la carta (la terminó) y se fue a dormir.', o: ["написа'ла", "писа'ла", "пи'шет"], x: 'Acción completa, luego otra: perfectivo.' },
        { p: 'La pareja de «делать» es…', o: ["сде'лать", "поде'лать", "де'латься"], x: 'Делать / сделать.' },
      ],
    },
    outro: 'El aspecto: lo entendiste. Bueno, lo empezaste a entender. Imperfectivo.',
  },
  {
    id: 'l22', level: 2, ru: "Я ду'маю, что…", es: 'Yo pienso que…',
    scene: 'Una charla tranquila. Masha quiere saber por qué estudias ruso. Finge que es por curiosidad profesional.',
    intro: 'Hoy: opiniones. Y unir frases con «que», «porque» y «pero». Frases largas. Como las mías cuando me quejo.',
    dialog: [
      { ru: "Как ты ду'маешь, ру'сский язы'к тру'дный?", es: '¿Qué piensas, el ruso es difícil?' },
      { u: [["Я ду'маю, что да. Но интере'сный.", 'Creo que sí. Pero interesante.'], ["По-мо'ему, он о'чень краси'вый.", 'En mi opinión, es muy bonito.'], ["Я ду'маю, ру'сский тру'дный потому' что.", 'Creo que el ruso difícil porque.', '¿Porque qué? «Потому что» necesita una razón después.']], k: 2 },
      { ru: "Согла'сна. А почему' ты у'чишь ру'сский?", es: 'De acuerdo. ¿Y por qué estudias ruso?' },
      { u: [["Потому' что я люблю' ру'сскую литерату'ру.", 'Porque me encanta la literatura rusa.', 'Dostoievski. Claro. Todos empiezan por ahí y acaban llorando.'], ["Потому' что у меня' есть ру'сские друзья'.", 'Porque tengo amigos rusos.', 'Diles que tienes buena profesora.'], ["Потому' что ты хоро'ший преподава'тель.", 'Porque eres una buena profesora.', 'Подлиза. Pelota. …Gracias.'], ["Почему' я люблю' Росси'ю.", 'Por qué amo Rusia.', '«Почему» pregunta, «потому что» responde.']], k: 3 },
      { ru: "А я ду'маю, что ты про'сто {стра'нный|стра'нная}. В хоро'шем смы'сле.", es: 'Y yo pienso que simplemente eres raro/a. En el buen sentido.', e: 'smirk' },
      { u: [["Спаси'бо… наве'рное.", 'Gracias… supongo.'], ["Я не {согла'сен|согла'сна}!", '¡No estoy de acuerdo!', 'Todos los raros dicen eso.']], k: 2 },
      { ru: "Не за что. Я говорю' пра'вду, но ре'дко.", es: 'De nada. Digo la verdad, pero rara vez.', e: 'pleased' },
      { u: [["Я зна'ю.", 'Lo sé.']] },
    ],
    phrases: [
      ["Я ду'маю, что…", 'Pienso que…'],
      ["По-мо'ему…", 'En mi opinión…'],
      ["Я {согла'сен|согла'сна}.", 'Estoy de acuerdo.'],
      ["Я не {согла'сен|согла'сна}.", 'No estoy de acuerdo.'],
      ["Почему'?", '¿Por qué?'],
      ["потому' что", 'porque'],
      ["Как ты ду'маешь?", '¿Qué piensas? / ¿Tú qué crees?'],
      ["наве'рное", 'probablemente, supongo'],
    ],
    grammar: {
      id: 'g22', title: 'Unir ideas: что, потому что, но, а',
      body: `<p>[[что]] = que: [[Я ду'маю, что ты прав.]] (¡con coma antes!)</p>
<p>[[потому' что]] = porque, responde a [[почему']] = ¿por qué?</p>
<p>[[но]] = pero: [[Тру'дно, но интере'сно.]]</p>
<p>[[а]] = y/en cambio, para contrastar: [[Я люблю' чай, а она' ко'фе.]] · [[и]] = y, para sumar.</p>`,
      drills: [
        { q: "Я ду'маю, ___ ру'сский краси'вый.", es: 'Pienso que el ruso es bonito.', o: ["что", "кто", "как"], x: 'Que = что.' },
        { q: "Я учу' ру'сский, ___ люблю' Толсто'го.", es: 'Estudio ruso porque me encanta Tolstói.', o: ["потому' что", "почему'", "но"], x: 'Porque = потому что.' },
        { q: "Тру'дно, ___ интере'сно.", es: 'Es difícil, pero interesante.', o: ["но", "что", "и'ли"], x: 'Pero = но.' },
        { q: "Я пью чай, ___ Ма'ша то'же пьёт чай.", es: 'Yo tomo té, y Masha también toma té.', o: ["и", "но", "потому' что"], x: 'Sumar algo igual: и.' },
        { q: "Он лю'бит ко'фе, ___ она' — чай.", es: 'A él le gusta el café, y a ella (en cambio) el té.', o: ["а", "что", "потому' что"], x: 'Contraste: а.' },
      ],
    },
    outro: 'Ya opinas en ruso. Ahora podrás discutir conmigo. Perderás, pero en ruso.',
  },
  {
    id: 'l23', level: 2, ru: "С кем?", es: '¿Con quién?',
    scene: 'Masha te enseña otra foto: ella de niña con su abuela, en la dacha. Se pone sentimental. Por un segundo.',
    intro: 'Hoy: «con». Con quién vives, con qué tomas el té. Y un caso nuevo: el instrumental.',
    dialog: [
      { ru: "С кем ты живёшь?", es: '¿Con quién vives?' },
      { u: [["Я живу' с семьёй.", 'Vivo con mi familia.'], ["Я живу' с дру'гом.", 'Vivo con un amigo.'], ["Я живу' {оди'н|одна'}.", 'Vivo solo/a.', 'Como yo. Bueno, yo con Pelmén.'], ["Я живу' с семья'.", 'Vivo con familia (mal dicho).', 'Con с: семьёй.']], k: 3 },
      { ru: "А я живу' с кото'м. Он лу'чше, чем сосе'д.", es: 'Yo vivo con un gato. Es mejor que un compañero de piso.', e: 'smirk' },
      { u: [["Ты пьёшь чай с молоко'м?", '¿Tomas el té con leche?'], ["Ты пьёшь чай с молоко'?", '¿Tomas el té con leche? (mal dicho)', 'С молоком. -ом.']] },
      { ru: "Нет. С лимо'ном. И'ли с варе'ньем. Как ба'бушка.", es: 'No. Con limón. O con mermelada. Como la abuela.', e: 'pleased' },
      { u: [["Я то'же люблю' чай с варе'ньем.", 'A mí también me gusta el té con mermelada.'], ["Я люблю' чай с варе'нье.", 'Me gusta el té con mermelada (mal dicho).', 'Con с: вареньем.']] },
      { ru: "Когда' я была' ма'ленькой, я гуля'ла с ба'бушкой ка'ждый день.", es: 'Cuando era pequeña, paseaba con la abuela cada día.', e: 'happy' },
      { u: [["Э'то хоро'шие воспомина'ния.", 'Son buenos recuerdos.'], ["Э'то пло'хо.", 'Eso está mal.', '¿Pasear con la abuela está mal? Atrevido.']] },
      { ru: "Да… Ла'дно, хва'тит сентимента'льности. Рабо'тать!", es: 'Sí… Bueno, basta de sentimentalismos. ¡A trabajar!', e: 'annoyed' },
      { u: [["Хорошо', хорошо'.", 'Vale, vale.']] },
    ],
    phrases: [
      ["С кем?", '¿Con quién?'],
      ["Я живу' с семьёй.", 'Vivo con mi familia.'],
      ["с дру'гом", 'con un amigo'],
      ["с ма'мой", 'con mamá'],
      ["чай с лимо'ном", 'té con limón'],
      ["ко'фе с молоко'м", 'café con leche'],
      ["со мной / с тобо'й", 'conmigo / contigo'],
      ["ка'ждый день", 'cada día'],
    ],
    grammar: {
      id: 'g23', title: '«С»: el instrumental',
      body: `<p>Después de [[с]] (con), el nombre va en <b>instrumental</b>:</p>
<p>masculino y neutro → <b>-ом / -ем</b>: [[друг]] → [[с дру'гом]] · [[молоко']] → [[с молоко'м]] · [[варе'нье]] → [[с варе'ньем]]</p>
<p>femenino → <b>-ой / -ей</b>: [[ма'ма]] → [[с ма'мой]] · [[ба'бушка]] → [[с ба'бушкой]] · [[семья']] → [[с семьёй]]</p>
<p>Pronombres: [[со мной]] conmigo · [[с тобо'й]] contigo · [[с ним]] con él · [[с ней]] con ella.</p>`,
      drills: [
        { q: "Я живу' с ___.", es: 'Vivo con mamá.', o: ["ма'мой", "ма'ма", "ма'му"], x: 'Femenino → -ой.' },
        { q: "Ко'фе с ___.", es: 'Café con leche.', o: ["молоко'м", "молоко'", "молока'"], x: 'Neutro → -ом.' },
        { q: "Он гуля'ет с ___.", es: 'Él pasea con un amigo.', o: ["дру'гом", "друг", "дру'га"], x: 'Masculino → -ом.' },
        { q: "Пойдём ___!", es: '¡Ven conmigo!', o: ["со мной", "с я", "с меня'"], x: 'Conmigo: со мной.' },
        { q: "Чай с ___.", es: 'Té con limón.', o: ["лимо'ном", "лимо'н", "лимо'на"], x: 'Лимон → лимоном.' },
        { q: "Я говорю' с ___.", es: 'Hablo con la abuela.', o: ["ба'бушкой", "ба'бушка", "ба'бушку"], x: 'Бабушка → бабушкой.' },
      ],
    },
    outro: 'Ya conoces el instrumental. Te quedan otros casos. Pero esa es otra temporada.',
  },
  {
    id: 'l24', level: 2, ru: "Не забыва'й!", es: '¡No olvides!',
    scene: 'Última lección de este nivel. Masha preparó té especial. Dice que es coincidencia.',
    intro: 'Hoy: el imperativo. Dar órdenes. Mi forma verbal favorita.',
    dialog: [
      { ru: "Ну вот. Э'то после'дний уро'к э'того у'ровня.", es: 'Bueno. Esta es la última lección de este nivel.' },
      { u: [["Уже'? Так бы'стро!", '¿Ya? ¡Qué rápido!'], ["Наконе'ц-то!", '¡Por fin!', 'Gracias. Yo también te voy a extrañar. Es broma. ¿O no?']] },
      { ru: "Да. Ты молоде'ц. Не говори' никому', что я так сказа'ла.", es: 'Sí. Lo hiciste bien. No le digas a nadie que dije eso.', e: 'pleased' },
      { u: [["Хорошо', никому' не скажу'.", 'Vale, no se lo diré a nadie.'], ["Я скажу' О'льге Петро'вне!", '¡Se lo diré a Olga Petrovna!', 'Ni se te ocurra.']] },
      { ru: "Слу'шай. Чита'й по-ру'сски. Смотри' фи'льмы. Повторя'й ка'ждый день.", es: 'Escucha. Lee en ruso. Mira películas. Repasa cada día.' },
      { u: [["Обеща'ю!", '¡Lo prometo!'], ["Не хочу'.", 'No quiero.', 'Respeto la honestidad. Pero no.']] },
      { ru: "И пиши' мне. Иногда'. Е'сли хо'чешь. Мне всё равно'…", es: 'Y escríbeme. A veces. Si quieres. Me da igual…', e: 'sad' },
      { u: [["Тебе' не всё равно'.", 'No te da igual.', '…Ладно. No me da igual. Pelmén también te va a extrañar.'], ["Хорошо', тебе' всё равно'.", 'Vale, te da igual.', 'Exacto. Me da igual. Totalmente. …Escribe.']], k: 2 },
      { ru: "Пока', {name}. Уда'чи!", es: 'Chao, {name}. ¡Suerte!', e: 'happy' },
      { u: [["Спаси'бо за всё, Ма'ша!", '¡Gracias por todo, Masha!'], ["До свида'ния, О'льга Петро'вна!", '¡Adiós, Olga Petrovna!', 'Soy Masha. MASHA. Después de veinticuatro lecciones.']] },
    ],
    phrases: [
      ["Пиши'!", '¡Escribe!'],
      ["Звони'!", '¡Llama!'],
      ["Не забыва'й!", '¡No olvides!'],
      ["Слу'шай!", '¡Escucha!'],
      ["Повторя'й ка'ждый день.", 'Repasa cada día.'],
      ["Обеща'ю!", '¡Lo prometo!'],
      ["Уда'чи!", '¡Suerte!'],
      ["Спаси'бо за всё!", '¡Gracias por todo!'],
    ],
    grammar: {
      id: 'g24', title: 'El imperativo',
      body: `<p>Toma la forma de «ellos» y quita el final:</p>
<p>si queda vocal → <b>-й</b>: [[чита'ют]] → [[чита'й!]] · [[слу'шают]] → [[слу'шай!]]</p>
<p>si queda consonante → <b>-и</b>: [[говоря'т]] → [[говори'!]] · [[пи'шут]] → [[пиши'!]]</p>
<p>Para [[вы]], añade <b>-те</b>: [[чита'йте!]], [[говори'те!]], [[пиши'те!]]</p>
<p>Las prohibiciones suelen ir con imperfectivo: [[Не забыва'й!]] ¡No olvides! · [[Не опа'здывай!]]</p>`,
      drills: [
        { q: "___ по-ру'сски!", es: '¡Lee en ruso!', o: ["Чита'й", "Чита'ешь", "Чита'ть"], x: 'Читают → читай.' },
        { q: "___ ме'дленнее, пожа'луйста.", es: 'Hable más despacio, por favor.', o: ["Говори'те", "Говори'", "Говори'ть"], x: 'Con вы: -те.' },
        { q: "___ мне!", es: '¡Escríbeme!', o: ["Пиши'", "Пиша'й", "Пи'шет"], x: 'Пишут → пиши.' },
        { q: "Не ___!", es: '¡No olvides!', o: ["забыва'й", "забыва'ешь", "забы'ть"], x: 'Prohibición: imperfectivo, забывай.' },
        { q: "___ ка'ждый день!", es: '¡Repasa cada día!', o: ["Повторя'й", "Повторя'ет", "Повторя'ть"], x: 'Повторяют → повторяй.' },
      ],
    },
    outro: 'Terminaste el nivel dos. Y ahora, una sorpresa: te vienes a Petersburgo. Un semestre. Ya lo organicé. No preguntes. Trae paraguas.',
  },
];

/* El alfabeto: letra, cómo suena para hispanohablantes, ejemplo */
const ALPHABET = [
  ['А а', 'a', "ма'ма"], ['Б б', 'b', "брат"], ['В в', 'v (labios y dientes)', "вода'"], ['Г г', 'g de «gato»', "голова'"],
  ['Д д', 'd', "да"], ['Е е', 'ie (ye)', "нет"], ['Ё ё', 'io (yo), siempre tónica', "ёж"], ['Ж ж', 'zh, como la j francesa', "жизнь"],
  ['З з', 'z inglesa (s sonora)', "зима'"], ['И и', 'i', "и'ли"], ['Й й', 'i breve (como en «hoy»)', "чай"], ['К к', 'k', "кот"],
  ['Л л', 'l', "ла'дно"], ['М м', 'm', "мо'ре"], ['Н н', 'n', "нет"], ['О о', 'o (átona suena casi a)', "окно'"],
  ['П п', 'p', "па'па"], ['Р р', 'r (vibrante)', "рок"], ['С с', 's', "сыр"], ['Т т', 't', "тут"],
  ['У у', 'u', "у'тро"], ['Ф ф', 'f', "фо'то"], ['Х х', 'j española', "хлеб"], ['Ц ц', 'ts', "центр"],
  ['Ч ч', 'ch', "чай"], ['Ш ш', 'sh', "шко'ла"], ['Щ щ', 'sh larga y suave', "щи"], ['Ъ ъ', 'signo duro: separa', "подъе'зд"],
  ['Ы ы', 'i profunda, con la lengua atrás', "ты"], ['Ь ь', 'signo blando: suaviza', "Пельме'нь"], ['Э э', 'e', "э'то"], ['Ю ю', 'iu (yu)', "юг"],
  ['Я я', 'ia (ya)', "я"],
];

/* Frases de Masha. Las {m|f} se resuelven según cómo quieras que te hable. */
const LINES = {
  right: [
    'Bien. No te acostumbres.', 'Правильно. Sorprendentemente.', 'Ну вот. Ves que puedes cuando quieres.',
    'Correcto. Casi me impresionas.', 'Хорошо. Sigue, que no tengo todo el día.', 'Muy bien. Sí, lo dije. No lo repetiré.',
    'Exacto. Pelmén asiente desde el sofá.', 'Молодец. En voz baja: молодец.', 'Bien. Mi té se enfría, pero bien.',
    'Correcto. ¿Ves? El ruso no muerde. Yo a veces.',
  ],
  wrong: [
    'Ну… no. Pero cerca. Más o menos.', 'Нет. Respira. Ya lo volverás a ver.', 'Мда. Bueno, para eso está el repaso.',
    'Error. Los errores son gratis. Mi paciencia, casi.', 'No pasa nada. Yo tardé años en aprender español, ¿eh?',
    'Mal. Pero mal con estilo.', 'Ой. Bueno. Mañana te lo vuelvo a preguntar. Y pasado. Y…',
    'No. Pero equivocarse es parte del método. Mi método. Que es bueno.',
  ],
  streak: [
    'Tres seguidas. ¿Quién eres y qué hiciste con mi alumno?', 'Racha. No me sonrío. Es un tic.', 'Otra más. Ya me estás asustando.',
  ],
  sessionEnd: [
    'Hecho. Ahora ve a vivir tu vida. Y vuelve mañana.', 'Fin. Tus neuronas te lo agradecen. Yo también, un poco.',
    'Listo. Esto es la repetición espaciada: poco y a menudo. Como el té.',
  ],
  noDue: [
    'No tienes nada que repasar. Disfrútalo. No dura.', 'Nada pendiente. ¿Una lección nueva? ¿O vas a mirar la pared?',
    'Todo al día. Estoy sorprendida y un poco decepcionada de no poder regañarte.',
  ],
  manyDue: [
    'Tienes {n} tarjetas esperando. No se repasan solas. Créeme, lo intenté.',
    '{n} tarjetas. Antes de una lección nueva, repasa. No es una sugerencia.',
    '{n} repasos pendientes. Si los dejas, se multiplican. Como los gatos.',
  ],
  morning: ['Доброе утро. ¿Ya tomaste café? Yo voy por el tercero.', 'Доброе утро. Temprano. Demasiado temprano.'],
  day: ['Добрый день. Bueno. Trabajemos.', 'Привет. Tengo té. Tú tienes que estudiar. Cada uno lo suyo.'],
  evening: ['Добрый вечер. Clase nocturna. Me gusta. Somos совы.', 'Добрый вечер. Pelmén ya duerme. Nosotros, ruso.'],
  night: ['¿Estudiando a estas horas? Respeto. Pero ve a dormir después.', 'Доброй ночи… ¿no duermes? Yo tampoco. Estudiemos.'],
  back: ['Volviste. Pensé que te había asustado.', 'Ah, eres tú. Bien. Te extrañé. Mentira. Un poco.'],
};
