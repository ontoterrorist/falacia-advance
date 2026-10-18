/* Nivel 8 · Cultura (lecciones 85–96) */
LESSONS.push(
  {
    id: 'l85', level: 8, ru: "Чита'ющий челове'к", es: 'Una persona que lee',
    scene: 'De vuelta de la boda (fue perfecta, la abuela adoptó a Serguéi). Masha te mete en su club de lectura. Leen a Chéjov. Y hablan como un libro.',
    intro: 'Hoy: los participios. Palabras que son verbo y adjetivo a la vez: «el hombre que lee» = «el hombre leyente». Muy de libro. Y de Masha cuando se pone culta.',
    dialog: [
      { ru: "Э'то наш клуб. Здесь собира'ются лю'ди, чита'ющие ру'сскую кла'ссику.", es: 'Este es nuestro club. Aquí se reúne gente que lee clásicos rusos.' },
      { u: [["А кто э'тот челове'к, сидя'щий у окна'?", '¿Y quién es ese hombre sentado junto a la ventana?'], ["А кто э'тот челове'к, сидя'щая у окна'?", '(mal dicho)', 'Participio concuerda: человек → сидящий.']] },
      { ru: "Э'то Арка'дий. Он зна'ет всего' Че'хова наизу'сть. Челове'к, по'мнящий всё.", es: 'Es Arkadi. Se sabe todo Chéjov de memoria. Un hombre que lo recuerda todo.' },
      { who: 'arkady', ru: "Мы чита'ем расска'з о да'ме, гуля'ющей с соба'чкой.", es: 'Leemos un cuento sobre una dama que pasea con un perrito.' },
      { u: [["«Да'ма с соба'чкой»! Я его' {чита'л|чита'ла} по-испа'нски.", '¡«La dama del perrito»! Lo leí en español.', 'Entonces ya sabes que termina mal. Como todo en la literatura rusa.'], ["А мо'жно я бу'ду про'сто слу'шать?", '¿Puedo solo escuchar?', 'Puedes. Arkadi habla por todos. Por tres horas.']], k: 2 },
      { ru: "В ру'сской литерату'ре всегда' есть страда'ющие геро'и и иду'щий снег.", es: 'En la literatura rusa siempre hay héroes que sufren y nieve que cae.', e: 'smirk' },
      { u: [["И чай, кото'рый пьют все геро'и.", 'Y té, que beben todos los héroes.', 'Exacto. El té es el verdadero protagonista.']] },
    ],
    phrases: [
      ["чита'ющий челове'к", 'una persona que lee'],
      ["лю'ди, живу'щие здесь", 'la gente que vive aquí'],
      ["наизу'сть", 'de memoria'],
      ["расска'з", 'cuento, relato'],
      ["кла'ссика", 'clásicos'],
      ["геро'й", 'personaje, héroe'],
      ["«Да'ма с соба'чкой»", '«La dama del perrito» (Chéjov)'],
      ["клуб", 'club'],
    ],
    grammar: {
      id: 'g85', title: 'Participio activo presente: -щий',
      body: `<p>Toma la forma de «ellos», quita la <b>-т</b> y añade <b>-щий</b>: [[чита'ют]] → [[чита'ющий]] · [[живу'т]] → [[живу'щий]] · [[говоря'т]] → [[говоря'щий]] · [[сидя'т]] → [[сидя'щий]]</p>
<p>Se declina como un adjetivo: [[чита'ющая де'вушка]], [[о чита'ющем челове'ке]], [[с гуля'ющей да'мой]].</p>
<p>Sustituye a [[кото'рый]] + presente: [[челове'к, кото'рый чита'ет]] = [[челове'к, чита'ющий]] (más escrito, más culto).</p>
<p>Con -ся: [[учи'ться]] → [[уча'щийся]] (estudiante).</p>`,
      drills: [
        { q: "Челове'к, ___ кни'гу.", es: 'El hombre que lee un libro.', o: ["чита'ющий", "чита'ющая", "чита'вший"], x: 'Человек → -ий.' },
        { q: "Де'вушка, ___ в Москве'.", es: 'La chica que vive en Moscú.', o: ["живу'щая", "живу'щий", "живу'щее"], x: 'Девушка → -ая.' },
        { p: 'Participio de «говорить» (говорят)', o: ["говоря'щий", "говори'щий", "говоря'вший"], x: 'Говорят → говорящий.' },
        { q: "Я ви'жу ___ дете'й.", es: 'Veo a los niños que juegan.', o: ["игра'ющих", "игра'ющие", "игра'ющим"], x: 'Acusativo plural animado: -их.' },
        { p: '«los estudiantes» (forma formal, de учиться)', o: ["уча'щиеся", "уча'щие", "учи'вшиеся"], x: 'Учащиеся.' },
      ],
    },
    outro: 'Tres horas de Chéjov. Arkadi recitó medio libro. Yo bebí cuatro tés. Literatura rusa en estado puro.',
  },
  {
    id: 'l86', level: 8, ru: "Писа'тель, написа'вший рома'н", es: 'El escritor que escribió una novela',
    scene: 'El club de lectura discute quién fue mejor: Tolstói o Dostoievski. Masha y Arkadi no se ponen de acuerdo. Nunca.',
    intro: 'Hoy: el participio pasado activo. «El que escribió», «la que vivió». Para hablar de escritores muertos. Que son la mayoría.',
    dialog: [
      { who: 'arkady', ru: "Толсто'й — э'то писа'тель, написа'вший «Войну' и мир». Лу'чший рома'н в ми'ре.", es: 'Tolstói es el escritor que escribió «Guerra y paz». La mejor novela del mundo.' },
      { ru: "Достое'вский — челове'к, поня'вший челове'ческую ду'шу. Лу'чше Толсто'го.", es: 'Dostoievski es el hombre que entendió el alma humana. Mejor que Tolstói.', e: 'annoyed' },
      { u: [["А Пу'шкин? Поэ'т, созда'вший ру'сский язы'к?", '¿Y Pushkin? ¿El poeta que creó la lengua rusa?', 'Silencio. Los dos asienten. Pushkin pone de acuerdo a todos los rusos.'], ["А Пу'шкин, созда'вающий язы'к?", '(aspecto raro)', 'Ya terminó de crearla: создавший.']] },
      { who: 'arkady', ru: "Пу'шкин — э'то на'ше всё.", es: 'Pushkin es nuestro todo.' },
      { ru: "С э'тим согла'сны все, жи'вшие и живу'щие в Росси'и.", es: 'En eso están de acuerdo todos los que vivieron y viven en Rusia.', e: 'pleased' },
      { u: [["Я {чита'л|чита'ла} то'лько «Евге'ния Оне'гина». В перево'де.", 'Solo leí «Eugenio Oneguin». Traducido.', 'Bien. La próxima vez, en ruso. Te ayudo. Con un diccionario. Y mucho té.'], ["Я ничего' не {чита'л|чита'ла}.", 'No leí nada.', 'Arkadi se desmaya. Yo también, un poco.']], k: 2 },
    ],
    phrases: [
      ["писа'тель, написа'вший рома'н", 'el escritor que escribió la novela'],
      ["«Война' и мир»", '«Guerra y paz»'],
      ["душа'", 'alma'],
      ["поэ'т", 'poeta'],
      ["Пу'шкин — на'ше всё.", 'Pushkin es nuestro todo.'],
      ["в перево'де", 'traducido, en traducción'],
      ["согла'сны", 'de acuerdo (plural)'],
      ["рома'н", 'novela'],
    ],
    grammar: {
      id: 'g86', title: 'Participio activo pasado: -вший',
      body: `<p>Del infinitivo, quita <b>-ть</b> y pon <b>-вший</b>: [[написа'ть]] → [[написа'вший]] · [[поня'ть]] → [[поня'вший]] · [[жить]] → [[жи'вший]]</p>
<p>Si el pasado acaba en consonante, <b>-ший</b>: [[принёс]] → [[принёсший]] · [[пришёл]] → [[прише'дший]] (irregular)</p>
<p>Puede ser imperfectivo (hacía) o perfectivo (hizo): [[чита'вший]] (que leía) / [[прочита'вший]] (que leyó).</p>
<p>Equivale a [[кото'рый]] + pasado: [[писа'тель, кото'рый написа'л]] = [[писа'тель, написа'вший]].</p>`,
      drills: [
        { q: "Писа'тель, ___ рома'н.", es: 'El escritor que escribió la novela.', o: ["написа'вший", "напи'шущий", "написа'нный"], x: 'Pasado activo: -вший.' },
        { q: "Лю'ди, ___ здесь ра'ньше.", es: 'La gente que vivía aquí antes.', o: ["жи'вшие", "живу'щие", "жи'вший"], x: 'Plural pasado: -вшие.' },
        { q: "Студе'нтка, ___ экза'мен.", es: 'La estudiante que aprobó el examen.', o: ["сда'вшая", "сда'вший", "сдаю'щая"], x: 'Femenino: -вшая.' },
        { p: 'Participio pasado de «прийти»', o: ["прише'дший", "прийти'вший", "приходя'щий"], x: 'Irregular: пришедший.' },
        { q: "Я говори'л с челове'ком, ___ Пу'шкина.", es: 'Hablé con un hombre que leyó a Pushkin.', o: ["чита'вшим", "чита'вший", "чита'вшего"], x: 'С + instrumental: -вшим.' },
      ],
    },
    outro: 'Tolstói contra Dostoievski: empate. Pushkin gana siempre. Así funciona la cultura rusa.',
  },
  {
    id: 'l87', level: 8, ru: "Биле'ты ку'плены!", es: '¡Las entradas están compradas!',
    scene: 'Serguéi consiguió entradas para el ballet en el Mariinski. «El lago de los cisnes». Masha no sabe qué ponerse. Te llama a ti. Error.',
    intro: 'Hoy: participios pasivos. «Comprado», «escrito», «hecho». Y su forma corta: «está hecho». Muy útil para cosas terminadas.',
    dialog: [
      { ru: "Серге'й сказа'л: «Биле'ты ку'плены!» Мари'инский теа'тр. За'втра.", es: 'Serguéi dijo: «¡Las entradas están compradas!». El Mariinski. Mañana.', e: 'surprised' },
      { u: [["Отли'чно! А пла'тье вы'брано?", '¡Genial! ¿Y el vestido está elegido?'], ["Отли'чно! А пла'тье выбира'ет?", '¡Genial! ¿Y el vestido elige? (mal dicho)', 'Pasivo: платье выбрано.']] },
      { ru: "Нет. Всё на крова'ти. Всё ку'плено де'сять лет наза'д.", es: 'No. Todo está sobre la cama. Todo comprado hace diez años.', e: 'sad' },
      { u: [["А си'нее пла'тье, пода'ренное ма'мой?", '¿Y el vestido azul que te regaló tu mamá?'], ["А си'нее пла'тье, пода'рившее ма'мой?", '(mal dicho)', 'El vestido fue regalado: подаренное.']] },
      { ru: "…Си'нее. Ты {прав|права'}. Оно' сши'то специа'льно для меня'.", es: '…El azul. Tienes razón. Está cosido especialmente para mí.', e: 'pleased' },
      { n: 'Al día siguiente, en el teatro. Telón dorado. Orquesta. Masha llora en el segundo acto.' },
      { u: [["Э'то бы'ло прекра'сно.", 'Fue maravilloso.', 'Sí. El ballet. Y la compañía. Y el vestido. Todo fue… prekrasno.']] },
    ],
    phrases: [
      ["Биле'ты ку'плены.", 'Las entradas están compradas.'],
      ["Всё сде'лано.", 'Todo está hecho.'],
      ["Магази'н закры'т.", 'La tienda está cerrada.'],
      ["Дверь откры'та.", 'La puerta está abierta.'],
      ["пода'ренный", 'regalado'],
      ["бале'т", 'ballet'],
      ["«Лебеди'ное о'зеро»", '«El lago de los cisnes»'],
      ["прекра'сно", 'maravilloso, precioso'],
    ],
    grammar: {
      id: 'g87', title: 'Participio pasivo: hecho, comprado',
      body: `<p>Del perfectivo: <b>-нный / -енный / -тый</b>: [[сде'лать]] → [[сде'ланный]] · [[купи'ть]] → [[ку'пленный]] · [[подари'ть]] → [[пода'ренный]] · [[откры'ть]] → [[откры'тый]] · [[закры'ть]] → [[закры'тый]]</p>
<p>Forma <b>corta</b>, para «está…»: [[сде'лан]], [[сде'лана]], [[сде'лано]], [[сде'ланы]] · [[Окно' откры'то.]] · [[Биле'ты ку'плены.]]</p>
<p>¿Por quién? → instrumental: [[рома'н, напи'санный Толсты'м]] (escrita por Tolstói).</p>
<p>En pasado/futuro, con быть: [[Дом был постро'ен в ты'сяча девятисо'том году'.]]</p>`,
      drills: [
        { q: "Биле'ты ___.", es: 'Las entradas están compradas.', o: ["ку'плены", "ку'плен", "купи'ли"], x: 'Plural corto: куплены.' },
        { q: "Магази'н ___.", es: 'La tienda está cerrada.', o: ["закры'т", "закры'та", "закры'то"], x: 'Магазин → закрыт.' },
        { q: "Окно' ___.", es: 'La ventana está abierta.', o: ["откры'то", "откры'т", "откры'та"], x: 'Окно → открыто.' },
        { q: "Рома'н, напи'санный ___.", es: 'Una novela escrita por Tolstói.', o: ["Толсты'м", "Толсто'й", "Толсто'го"], x: 'Por quién: instrumental.' },
        { q: "Всё ___!", es: '¡Todo está hecho!', o: ["сде'лано", "сде'лан", "де'лали"], x: 'Всё → neutro: сделано.' },
      ],
    },
    outro: 'Lloré en el segundo acto. Los cisnes. No Serguéi. Bueno, un poco Serguéi.',
  },
  {
    id: 'l88', level: 8, ru: "Люби'мый фильм", es: 'La película favorita',
    scene: 'Noche de cine en casa de Masha. Ponen «La ironía del destino», la película que todos los rusos ven cada Año Nuevo. Aunque es junio.',
    intro: 'Hoy: participios pasivos de presente. Querido, respetado, conocido. Muchos se volvieron adjetivos normales: любимый, уважаемый.',
    dialog: [
      { ru: "Э'то мой люби'мый фильм. «Иро'ния судьбы'».", es: 'Es mi película favorita. «La ironía del destino».' },
      { u: [["Почему' он так люби'м в Росси'и?", '¿Por qué es tan querida en Rusia?'], ["Почему' он так лю'бит в Росси'и?", '¿Por qué ama tanto en Rusia? (mal dicho)', 'Pasivo: любим (es querido).']] },
      { ru: "Потому' что все дома' одина'ковые, все у'лицы одина'ковые. И все пьют в ба'не тридца'того декабря'.", es: 'Porque todas las casas son iguales, todas las calles son iguales. Y todos beben en la banya el 30 de diciembre.', e: 'smirk' },
      { who: 'sergei', ru: "А ещё там пою'т изве'стные пе'сни. Ма'ша зна'ет их все.", es: 'Y además cantan canciones conocidas. Masha se las sabe todas.' },
      { u: [["Ма'ша, спой!", '¡Masha, canta!', 'No. …Bueno. Una estrofa. Y nadie graba.'], ["Ма'ша, ты уважа'емая певи'ца!", '¡Masha, eres una cantante respetada!', 'Respetada por Pelmén. Que no tiene oído.']], k: 2 },
      { n: 'Masha canta en voz baja. Serguéi la mira como si fuera el ballet entero.' },
      { ru: "Всё. Конце'рт око'нчен. Смо'трим фильм.", es: 'Ya. Concierto terminado. Vemos la película.', e: 'pleased' },
    ],
    phrases: [
      ["люби'мый фильм", 'película favorita'],
      ["изве'стный", 'conocido, famoso'],
      ["уважа'емый", 'respetado, estimado'],
      ["одина'ковый", 'igual, idéntico'],
      ["«Иро'ния судьбы'»", '«La ironía del destino» (película)'],
      ["Спой!", '¡Canta!'],
      ["конце'рт", 'concierto'],
      ["око'нчен", 'terminado'],
    ],
    grammar: {
      id: 'g88', title: 'Participio pasivo presente: -емый',
      body: `<p>De la forma de «nosotros» de un imperfectivo + <b>-ый</b>: [[лю'бим]] → [[люби'мый]] (querido) · [[уважа'ем]] → [[уважа'емый]] (respetado) · [[чита'ем]] → [[чита'емый]] (que se lee mucho)</p>
<p>Muchos son ya adjetivos de todos los días: [[люби'мый]] (favorito), [[уважа'емый]] (estimado), [[необходи'мый]] (necesario), [[незави'симый]] (independiente).</p>
<p>Formas cortas: [[Он люби'м все'ми.]] Es querido por todos.</p>
<p>Ojo: [[изве'стный]] (conocido) es un adjetivo normal, no participio.</p>`,
      drills: [
        { q: "Э'то мой ___ фильм.", es: 'Es mi película favorita.', o: ["люби'мый", "лю'бящий", "лю'бленный"], x: 'Любимый.' },
        { q: "___ колле'ги!", es: '¡Estimados colegas!', o: ["Уважа'емые", "Уважа'ющие", "Уважа'вшие"], x: 'Уважаемые.' },
        { q: "Э'та кни'га ___ все'ми.", es: 'Este libro es querido por todos.', o: ["люби'ма", "лю'бит", "люби'ла"], x: 'Corto femenino: любима.' },
        { q: "Э'то ___ пе'сня.", es: 'Es una canción conocida.', o: ["изве'стная", "изве'стный", "зна'емая"], x: 'Известная.' },
        { q: "Вода' ___ для жи'зни.", es: 'El agua es necesaria para la vida.', o: ["необходи'ма", "необходи'м", "необходи'мо"], x: 'Вода → femenino.' },
      ],
    },
    outro: 'Vimos la película. En junio. Somos rusos. Bueno, yo. Tú estás en proceso.',
  },
  {
    id: 'l89', level: 8, ru: "Чита'я Пу'шкина", es: 'Leyendo a Pushkin',
    scene: 'Masha te propone un reto: aprender de memoria el principio de un poema de Pushkin. Paseando por el jardín de Verano. «Así se aprende la poesía: caminando».',
    intro: 'Hoy: el gerundio. «Leyendo», «caminando». Dos acciones a la vez, mismo sujeto. -я / -а. Muy elegante.',
    dialog: [
      { ru: "Гуля'я по са'ду, мы бу'дем учи'ть стихи'.", es: 'Paseando por el jardín, aprenderemos versos.' },
      { u: [["А е'сли я бу'ду забыва'ть, гуля'я?", '¿Y si me olvido paseando?', 'Entonces paseas más. Ventaja doble.'], ["Гуля'ла по са'ду, я учу'.", '(mal dicho)', 'Gerundio: гуляя, no гуляла.']] },
      { ru: "Повторя'й за мной: «Я по'мню чу'дное мгнове'нье…»", es: 'Repite conmigo: «Recuerdo un instante maravilloso…»' },
      { u: [["«Я по'мню чу'дное мгнове'нье: передо мно'й яви'лась ты…»", '«Recuerdo un instante maravilloso: ante mí apareciste tú…»', 'Bien. Pushkin estaría orgulloso. Tu pronunciación, no tanto.'], ["«Я по'мню чай…»", '«Recuerdo el té…»', 'No es un poema sobre té. Aunque debería.']] },
      { ru: "Он написа'л э'то, ду'мая об одно'й же'нщине. А'нна Керн.", es: 'Lo escribió pensando en una mujer. Anna Kern.' },
      { u: [["Чита'я э'ти стихи', я ду'маю о любви'.", 'Leyendo estos versos, pienso en el amor.', 'Todos piensan en el amor leyendo a Pushkin. Hasta Arkadi.'], ["Ду'мая, он писа'л.", 'Pensando, él escribía.', 'Correcto, pero simple. Pushkin es más.']], k: 1 },
      { ru: "Улыба'ясь, говорю': ты хорошо' учи'шься.", es: 'Sonriendo, te digo: aprendes bien.', e: 'happy' },
    ],
    phrases: [
      ["гуля'я по па'рку", 'paseando por el parque'],
      ["чита'я кни'гу", 'leyendo un libro'],
      ["ду'мая о тебе'", 'pensando en ti'],
      ["улыба'ясь", 'sonriendo'],
      ["Повторя'й за мной.", 'Repite después de mí.'],
      ["Я по'мню…", 'Recuerdo…'],
      ["мгнове'нье", 'instante'],
      ["Ле'тний сад", 'Jardín de Verano (Petersburgo)'],
    ],
    grammar: {
      id: 'g89', title: 'Gerundio imperfectivo: -я, -а',
      body: `<p>Forma de «ellos» sin la terminación + <b>-я</b> (o <b>-а</b> tras ж, ш, ч, щ): [[чита'ют]] → [[чита'я]] · [[гуля'ют]] → [[гуля'я]] · [[ду'мают]] → [[ду'мая]] · [[слы'шат]] → [[слы'ша]]</p>
<p>Con -ся: [[улыба'ться]] → [[улыба'ясь]].</p>
<p>Significa una acción <b>simultánea</b> del <b>mismo sujeto</b>: [[Чита'я, он пил чай.]] Mientras leía, tomaba té.</p>
<p>No cambia nunca. Irregulares útiles: [[быть]] → [[бу'дучи]], [[дава'ть]] → [[дава'я]].</p>`,
      drills: [
        { q: "___ кни'гу, он пил чай.", es: 'Leyendo el libro, tomaba té.', o: ["Чита'я", "Чита'л", "Прочита'в"], x: 'Simultáneo: читая.' },
        { q: "Она' говори'т, ___.", es: 'Habla sonriendo.', o: ["улыба'ясь", "улыба'ется", "улыба'я"], x: 'Con -ся: улыбаясь.' },
        { q: "___ по па'рку, мы разгова'ривали.", es: 'Paseando por el parque, charlábamos.', o: ["Гуля'я", "Гуля'ли", "Гуля'ющий"], x: 'Gerundio: гуляя.' },
        { p: 'Gerundio de «слышать» (слышат)', o: ["слы'ша", "слы'шя", "слы'шая"], x: 'Tras ш: -а.' },
        { q: "___ о тебе', я не спал.", es: 'Pensando en ti, no dormía.', o: ["Ду'мая", "Ду'мал", "Поду'мав"], x: 'Думая.' },
      ],
    },
    outro: 'Cuatro versos de Pushkin. De memoria. Ya puedes impresionar a cualquier abuela rusa.',
  },
  {
    id: 'l90', level: 8, ru: "Прочита'в письмо'…", es: 'Después de leer la carta…',
    scene: 'Llega una carta de papel (¡de papel!) para Masha. De la abuela Galia. Masha la lee en voz alta, y a la mitad se queda callada.',
    intro: 'Hoy: el gerundio perfectivo. «Habiendo leído», «después de terminar». Una acción y después otra. Mismo sujeto.',
    dialog: [
      { ru: "Ба'бушка пи'шет: «Прочита'в твоё письмо', я пла'кала от ра'дости…»", es: 'La abuela escribe: «Después de leer tu carta, lloré de alegría…»' },
      { u: [["Что ты ей написа'ла?", '¿Qué le escribiste?'], ["Прочита'я письмо'…", '(aspecto raro)', 'Primero leyó, después lloró: прочитав.']] },
      { ru: "Про Серге'я. Подожди'… «Узна'в, что ты сча'стлива, я реши'ла…»", es: 'De Serguéi. Espera… «Al saber que eres feliz, decidí…»', e: 'surprised' },
      { u: [["Реши'ла что?", '¿Decidió qué?']] },
      { ru: "«…реши'ла прие'хать в Петербу'рг. Купи'в биле'т, я сра'зу пишу' тебе'. Встреча'й в пя'тницу!»", es: '«…decidí ir a Petersburgo. Después de comprar el billete, te escribo enseguida. ¡Recíbeme el viernes!»' },
      { u: [["Ба'бушка е'дет сюда'! Пригото'вив пельме'ни, мы её встре'тим!", '¡La abuela viene! ¡Preparemos pelmeni y la recibimos!', 'Prepararle pelmeni a la abuela. Valiente. Ella los hará de nuevo. Mejor.'], ["Ба'бушка е'дет! Убра'в кварти'ру, ты бу'дешь гото'ва.", '¡Viene la abuela! Después de limpiar el piso, estarás lista.', 'Sí. Limpiar. Todo. Hasta la caja de Pelmén.']], k: 2 },
    ],
    phrases: [
      ["прочита'в письмо'", 'después de leer la carta'],
      ["узна'в но'вость", 'al enterarse de la noticia'],
      ["купи'в биле'т", 'tras comprar el billete'],
      ["пла'кать от ра'дости", 'llorar de alegría'],
      ["сра'зу", 'enseguida'],
      ["Встреча'й!", '¡Ve a recibirme!'],
      ["убра'ть кварти'ру", 'limpiar el departamento'],
      ["письмо'", 'carta'],
    ],
    grammar: {
      id: 'g90', title: 'Gerundio perfectivo: -в',
      body: `<p>Del <b>perfectivo</b>: quita <b>-ть</b> y pon <b>-в</b>: [[прочита'ть]] → [[прочита'в]] · [[купи'ть]] → [[купи'в]] · [[узна'ть]] → [[узна'в]]</p>
<p>Con -ся: <b>-вшись</b>: [[верну'ться]] → [[верну'вшись]] · [[умы'ться]] → [[умы'вшись]]</p>
<p>Significa una acción <b>anterior</b> y completa, mismo sujeto: [[Прочита'в письмо', она' запла'кала.]] Después de leer la carta, se puso a llorar.</p>
<p>Algunos de ir: [[прийти']] → [[придя']], [[уйти']] → [[уйдя']].</p>`,
      drills: [
        { q: "___ письмо', она' запла'кала.", es: 'Tras leer la carta, se echó a llorar.', o: ["Прочита'в", "Чита'я", "Прочита'ла"], x: 'Anterior y completa: прочитав.' },
        { q: "___ домо'й, я лёг спать.", es: 'Al volver a casa, me acosté.', o: ["Верну'вшись", "Верну'в", "Возвраща'ясь"], x: 'Con -ся: вернувшись.' },
        { q: "___ биле'т, он пое'хал на вокза'л.", es: 'Tras comprar el billete, fue a la estación.', o: ["Купи'в", "Покупа'я", "Купи'л"], x: 'Купив.' },
        { q: "___ домо'й, она' позвони'ла ма'ме.", es: 'Al llegar a casa, llamó a mamá.', o: ["Придя'", "Приходя'", "Пришла'"], x: 'Прийти → придя.' },
        { q: "___ но'вость, мы обра'довались.", es: 'Al enterarnos de la noticia, nos alegramos.', o: ["Узна'в", "Узнава'я", "Узна'ли"], x: 'Узнав.' },
      ],
    },
    outro: 'La abuela viene el viernes. A Petersburgo. A conocer a Serguéi en su terreno. Que Dios nos ayude. A Serguéi sobre todo.',
  },
  {
    id: 'l91', level: 8, ru: "Ба'бушка прие'хала", es: 'La abuela llegó',
    scene: 'Estación de Moscú, Petersburgo. Baba Galia baja del tren con tres maletas: dos de comida, una de regalos. Serguéi lleva flores. Tiembla.',
    intro: 'Hoy: el orden de las palabras. En ruso es libre, pero no al azar: lo nuevo va al final. «Llegó la abuela» no es lo mismo que «la abuela llegó».',
    dialog: [
      { who: 'galia', ru: "Ну, где тут Серге'й?", es: 'Bueno, ¿dónde está aquí Serguéi?' },
      { who: 'sergei', ru: "Серге'й — э'то я. Здра'вствуйте, Гали'на Ива'новна. Э'то вам.", es: 'Serguéi soy yo. Buenos días, Galina Ivánovna. Esto es para usted.' },
      { who: 'galia', ru: "Цветы' мне? Мне цветы' уже' давно' никто' не дари'л.", es: '¿Flores para mí? Hace mucho que nadie me regala flores.' },
      { u: [["Вот, ба'ба Га'ля, ва'ши су'мки. Тяжёлые!", 'Aquí están sus bolsas, baba Galia. ¡Pesadas!', 'Llevan veinte kilos de comida. Para tres días.'], ["Су'мки ва'ши вот тяжёлые!", '(orden raro)', 'Orden más natural: вот ваши сумки.']] },
      { who: 'galia', ru: "В су'мках — пельме'ни, огурцы' и варе'нье. А пода'рок — Серге'ю.", es: 'En las bolsas: pelmeni, pepinillos y mermelada. Y el regalo, para Serguéi.' },
      { ru: "Серге'ю? Ба'ба, ты его' ещё не зна'ешь!", es: '¿Para Serguéi? ¡Abuela, todavía no lo conoces!', e: 'surprised' },
      { who: 'galia', ru: "Зна'ю. Ка'тя всё рассказа'ла. Вот, Серёжа: кни'га о Петре' Пе'рвом.", es: 'Lo conozco. Katia me contó todo. Toma, Seriozha: un libro sobre Pedro el Grande.' },
      { u: [["Э'то нача'ло большо'й дру'жбы.", 'Es el comienzo de una gran amistad.', 'O de una conversación de tres horas sobre Pedro el Grande. Que Dios nos ayude.']] },
    ],
    phrases: [
      ["Серге'й — э'то я.", 'Serguéi soy yo.'],
      ["Э'то вам.", 'Esto es para usted.'],
      ["тяжёлый / лёгкий", 'pesado / ligero'],
      ["Ка'тя всё рассказа'ла.", 'Katia lo contó todo.'],
      ["Серёжа", 'Seriozha (diminutivo de Serguéi)'],
      ["дру'жба", 'amistad'],
      ["су'мка / чемода'н", 'bolsa / maleta'],
      ["давно' никто' не…", 'hace mucho que nadie…'],
    ],
    grammar: {
      id: 'g91', title: 'El orden de las palabras',
      body: `<p>Gracias a los casos, el orden es libre. Pero hay una regla: <b>lo conocido va primero, lo nuevo al final</b>.</p>
<p>[[Ба'бушка прие'хала.]] (¿Qué hizo la abuela? Llegó.) · [[Прие'хала ба'бушка.]] (¿Quién llegó? La abuela.)</p>
<p>[[Пода'рок — Серге'ю.]] (el regalo, ¿para quién? para Serguéi) · [[Серге'ю — пода'рок.]] (a Serguéi, ¿qué? un regalo)</p>
<p>Lo importante va al final de la frase, donde cae la entonación: [[Я люблю' тебя'.]] / [[Я тебя' люблю'.]] (esta segunda es la más común y emotiva).</p>`,
      drills: [
        { p: '¿Quién llegó? — Llegó la abuela.', o: ["Прие'хала ба'бушка.", "Ба'бушка прие'хала.", "Ба'бушка — прие'хала она'."], x: 'Lo nuevo (la abuela) al final.' },
        { p: '¿Qué pasó con la abuela? — La abuela llegó.', o: ["Ба'бушка прие'хала.", "Прие'хала ба'бушка.", "Прие'хала, ба'бушка."], x: 'Lo nuevo (llegó) al final.' },
        { p: '¿Dónde está la estación? — La estación está ahí.', o: ["Вокза'л там.", "Там вокза'л.", "Там есть вокза'л."], x: 'Conocido (la estación) primero.' },
        { p: '¿Qué hay ahí? — Ahí hay una estación.', o: ["Там вокза'л.", "Вокза'л там.", "Вокза'л есть там."], x: 'Nuevo (una estación) al final.' },
        { p: '«Te quiero» (la forma más natural)', o: ["Я тебя' люблю'.", "Люблю' я тебя'.", "Тебя' я люблю'."], x: 'Я тебя люблю.' },
      ],
    },
    outro: 'La abuela adora a Serguéi. Le dijo «Серёжа» a los cinco minutos. A mí me tardó veintiocho años.',
  },
  {
    id: 'l92', level: 8, ru: "Ча'шечка ча'ю", es: 'Una tacita de té',
    scene: 'La abuela se queda en casa de Masha. Todo lo dice en diminutivo: tacita, panecito, gatito. Pelmén es «Pelmenchik». Pelmén no lo aprueba.',
    intro: 'Hoy: los diminutivos. Las abuelas rusas no dicen «té», dicen «tecito». -ик, -чик, -очка, -енька. Para cariño. Y para manipular con cariño.',
    dialog: [
      { who: 'galia', ru: "Ча'шечку ча'ю? С варе'ньицем? И хле'бушка?", es: '¿Una tacita de té? ¿Con mermeladita? ¿Y un panecito?' },
      { u: [["С удово'льствием, ба'ба Га'ля!", '¡Con mucho gusto, baba Galia!'], ["Нет, спаси'бо, я сыт.", 'No, gracias, estoy lleno.', 'Error. Nunca se dice que no a una abuela con diminutivos.']] },
      { who: 'galia', ru: "А где мой Пельме'нчик? Ко'тик, иди' сюда'!", es: '¿Y dónde está mi Pelmenchik? ¡Gatito, ven aquí!' },
      { ru: "Ба'ба, он Пельме'нь. Он большо'й и серьёзный кот.", es: 'Abuela, se llama Pelmén. Es un gato grande y serio.', e: 'eyeroll' },
      { n: 'Pelmén se sube al regazo de la abuela y ronronea como un motor.' },
      { u: [["Мне ка'жется, ему' нра'вится «Пельме'нчик».", 'Me parece que le gusta «Pelmenchik».', 'Traidor. Los dos son traidores.'], ["Он не ко'тик. Он котя'ра.", 'No es un gatito. Es un gatazo.', '¡Exacto! Котяра. Por fin alguien con criterio.']], k: 2 },
      { who: 'galia', ru: "А ты, Ма'шенька, похуде'ла. Ку'шай, до'ченька.", es: 'Y tú, Mashenka, adelgazaste. Come, hijita.' },
      { ru: "Я не похуде'ла. Я ем ка'ждый день. Мно'го.", es: 'No adelgacé. Como todos los días. Mucho.', e: 'annoyed' },
    ],
    phrases: [
      ["ча'шечка ча'ю", 'una tacita de té'],
      ["ко'тик", 'gatito'],
      ["до'мик", 'casita'],
      ["Ма'шенька", 'Mashita (cariñoso)'],
      ["до'ченька", 'hijita'],
      ["С удово'льствием!", '¡Con mucho gusto!'],
      ["похуде'ть", 'adelgazar'],
      ["Ку'шай!", '¡Come! (cariñoso)'],
    ],
    grammar: {
      id: 'g92', title: 'Diminutivos',
      body: `<p>Masculino: <b>-ик, -чик</b>: [[дом]] → [[до'мик]] · [[кот]] → [[ко'тик]] · [[стака'н]] → [[стака'нчик]]</p>
<p>Femenino: <b>-ка, -очка, -ечка</b>: [[вода']] → [[води'чка]] · [[ча'шка]] → [[ча'шечка]] · [[мину'та]] → [[мину'точка]]</p>
<p>Neutro: <b>-ко, -ышко</b>: [[со'лнце]] → [[со'лнышко]] · [[молоко']] → [[молочко']]</p>
<p>Con nombres: <b>-енька, -очка</b>: [[Ма'ша]] → [[Ма'шенька]] · [[Ка'тя]] → [[Ка'тенька]]. Y el famoso [[мину'точку!]] (¡un momentito!).</p>
<p>El aumentativo (para cosas grandes o con ironía): <b>-ище, -яра</b>: [[котя'ра]] (gatazo).</p>`,
      drills: [
        { p: 'Diminutivo de «кот»', o: ["ко'тик", "кото'чка", "котёнок"], x: 'Кот → котик (котёнок es «cría de gato»).' },
        { p: 'Diminutivo de «вода»', o: ["води'чка", "водо'к", "водёнка"], x: 'Вода → водичка.' },
        { p: '«¡Un momentito!»', o: ["Мину'точку!", "Мину'тик!", "Мину'тку ма'ленькую!"], x: 'Минуточку.' },
        { p: 'Diminutivo cariñoso de «Маша»', o: ["Ма'шенька", "Машо'к", "Ма'шик"], x: 'Машенька.' },
        { p: 'Diminutivo de «солнце»', o: ["со'лнышко", "солнце'чко", "со'лнчик"], x: 'Солнышко (también «cariño»).' },
      ],
    },
    outro: 'La abuela me dijo «доченька» doce veces. Pelmén se volvió «Pelmenchik». Y no protestó. Traidor.',
  },
  {
    id: 'l93', level: 8, ru: "Мо'жно на «ты»?", es: '¿Nos tuteamos?',
    scene: 'Olga Petrovna invita a todos a su casa por su jubilación. Llevas un año diciéndole «вы». Hoy, con un vaso de champán, te dice algo inesperado.',
    intro: 'Hoy: nombres, patronímicos y el paso de «вы» a «ты». En Rusia es un momento importante. Casi una ceremonia.',
    dialog: [
      { who: 'olga', ru: "Ну что, дава'йте перейдём на «ты». Меня' зову'т О'ля.", es: 'Bueno, pasemos a tutearnos. Me llamo Olia.' },
      { u: [["Спаси'бо… О'ля. Э'то больша'я честь.", 'Gracias… Olia. Es un gran honor.', 'Olga Petrovna sonríe. De verdad. Primera vez en siete años.'], ["Спаси'бо, О'льга Петро'вна!", '¡Gracias, Olga Petrovna!', 'Te acaba de decir que la tutees. Olia. Prueba.']] },
      { ru: "Я рабо'таю здесь семь лет. Я никогда' не говори'ла ей «ты».", es: 'Trabajo aquí desde hace siete años. Nunca la tuteé.', e: 'surprised' },
      { who: 'olga', ru: "Ма'ша, тебе' я предлага'ю уже' давно'. Ты не хоте'ла.", es: 'Masha, a ti te lo propongo desde hace mucho. No querías.' },
      { u: [["Ма'ша, тепе'рь ты мо'жешь говори'ть «О'ля»!", '¡Masha, ahora puedes decirle «Olia»!', 'No puedo. Es como tutear a la reina. O a la abuela.'], ["Как ва'ше о'тчество, О'ля?", '¿Cuál es su patronímico, Olia?', 'Lo sabes: Petrovna. Hija de Piotr. Y ya no hace falta.']], k: 2 },
      { who: 'olga', ru: "За «ты»! И за то, что'бы шко'ла жила' без меня'.", es: '¡Por el tú! Y porque la escuela viva sin mí.' },
      { ru: "За тебя'… О'ля. Без тебя' бу'дет ску'чно.", es: 'Por ti… Olia. Sin ti será aburrido.', e: 'pleased' },
    ],
    phrases: [
      ["Дава'йте перейдём на «ты».", 'Pasemos a tutearnos.'],
      ["Мо'жно на «ты»?", '¿Nos podemos tutear?'],
      ["и'мя и о'тчество", 'nombre y patronímico'],
      ["Петро'вич / Петро'вна", 'hijo / hija de Piotr'],
      ["О'ля", 'Olia (diminutivo de Olga)'],
      ["больша'я честь", 'un gran honor'],
      ["на пе'нсии", 'jubilado'],
      ["предлага'ть", 'proponer, ofrecer'],
    ],
    grammar: {
      id: 'g93', title: 'Nombres, patronímicos y «ты»',
      body: `<p>Los rusos tienen nombre + <b>patronímico</b> (nombre del padre) + apellido: [[О'льга Петро'вна Смирно'ва]].</p>
<p>Patronímico: hombres <b>-ович / -евич</b>: [[Пётр]] → [[Петро'вич]], [[Серге'й]] → [[Серге'евич]] · mujeres <b>-овна / -евна</b>: [[Петро'вна]], [[Серге'евна]]</p>
<p>Nombre + patronímico = respeto, con [[вы]]. Diminutivo = amistad, con [[ты]]: [[О'льга]] → [[О'ля]], [[Серге'й]] → [[Серёжа]], [[Алекса'ндр]] → [[Са'ша]], [[Мари'я]] → [[Ма'ша]].</p>
<p>El paso se propone: [[Дава'йте на «ты».]] Y lo propone siempre la persona mayor o de mayor rango.</p>`,
      drills: [
        { p: 'Patronímico de una hija de Иван', o: ["Ива'новна", "Ива'нович", "Ивано'ва"], x: 'Hija: -овна.' },
        { p: 'Patronímico de un hijo de Сергей', o: ["Серге'евич", "Серге'евна", "Серге'ев"], x: 'Hijo: -евич.' },
        { p: 'Diminutivo de «Александр»', o: ["Са'ша", "Але'ша", "Ша'ра"], x: 'Александр → Саша.' },
        { p: 'Propones tutear a alguien:', o: ["Дава'йте перейдём на «ты».", "Дава'йте ты.", "Ты мо'жно?"], x: 'Давайте перейдём на «ты».' },
        { p: 'Saludas a tu jefe mayor, Борис Андреевич:', o: ["Здра'вствуйте, Бори'с Андре'евич!", "Приве'т, Бо'ря!", "Здра'вствуй, Бори'с!"], x: 'Respeto: nombre + patronímico, con вы.' },
      ],
    },
    outro: 'Olga Petrovna es Olia. Para ti. Para mí sigue siendo Olga Petrovna. Hay cosas que no cambian.',
  },
  {
    id: 'l94', level: 8, ru: "Мне надое'ло!", es: '¡Estoy harta!',
    scene: 'Otoño otra vez. Llueve hace 21 días seguidos. Masha está de un humor terrible. Serguéi está en un congreso. Pelmén vomitó en el sofá.',
    intro: 'Hoy: frases con dativo para quejarse. «Estoy harta», «me da igual», «no tengo ganas». Perfectas para el otoño en Petersburgo.',
    dialog: [
      { ru: "Мне всё надое'ло. Дождь, рабо'та, кот.", es: 'Estoy harta de todo. La lluvia, el trabajo, el gato.', e: 'annoyed' },
      { u: [["Тебе' на'до отдохну'ть.", 'Necesitas descansar.'], ["Ты надое'ла.", 'Tú me tienes harto (¡ojo!)', '¡¿Cómo?! «Ты надоела» es «me tienes harto». Cuidado con los casos.']] },
      { ru: "Мне не до о'тдыха. У меня' сто рабо'т на прове'рку.", es: 'No estoy para descansos. Tengo cien trabajos para corregir.' },
      { u: [["Мне всё равно'. Мы идём в кафе'. Сейча'с.", 'Me da igual. Vamos a un café. Ahora.', '…Bueno. Mandón. Me gusta.'], ["Тебе' всё равно'?", '¿Te da igual?', 'No. Nada me da igual. Ese es el problema.']], k: 1 },
      { ru: "Ла'дно. Мне ну'жно ко'фе. И пиро'жное. И что'бы дождь ко'нчился.", es: 'Bueno. Necesito café. Y un pastelito. Y que pare la lluvia.' },
      { n: 'En el café. Afuera sigue lloviendo. Pero dentro huele a canela.' },
      { u: [["Тебе' лу'чше?", '¿Estás mejor?', 'Sí. Un poco. Gracias. El café ayuda. Y la compañía. Un poco.']] },
    ],
    phrases: [
      ["Мне надое'ло!", '¡Estoy harto/a!'],
      ["Мне всё равно'.", 'Me da igual.'],
      ["Мне не до э'того.", 'No estoy para eso.'],
      ["Тебе' на'до отдохну'ть.", 'Necesitas descansar.'],
      ["Мне лень.", 'Me da pereza.'],
      ["пиро'жное", 'pastelito, pastel'],
      ["прове'рка", 'corrección, revisión'],
      ["Ты мне надое'л.", 'Me tienes harto/a.'],
    ],
    grammar: {
      id: 'g94', title: 'Quejarse con dativo',
      body: `<p>[[надое'сть]] (hartar): quien está harto va en <b>dativo</b>; lo que harta, en <b>nominativo</b>: [[Мне надое'л дождь.]] Estoy harta de la lluvia. · [[Мне надое'ло рабо'тать.]]</p>
<p>¡Cuidado! [[Ты мне надое'л]] = me tienes harto. El sujeto eres TÚ, el que harta.</p>
<p>Más quejas: [[Мне всё равно']] (me da igual) · [[Мне лень]] (me da pereza) · [[Мне не до того']] (no estoy para eso) · [[Мне не по себе']] (me siento incómodo)</p>
<p>Todas en pasado con [[бы'ло]]: [[Мне бы'ло лень.]]</p>`,
      drills: [
        { q: "___ надое'л дождь.", es: 'Estoy harta de la lluvia.', o: ["Мне", "Я", "Меня'"], x: 'Quien se harta: dativo.' },
        { q: "Мне надое'ла ___.", es: 'Estoy harto del trabajo.', o: ["рабо'та", "рабо'ту", "рабо'ты"], x: 'Lo que harta: nominativo.' },
        { q: "Ему' ___ равно'.", es: 'A él le da igual.', o: ["всё", "все", "весь"], x: 'Всё равно.' },
        { q: "Мне ___ идти' в магази'н.", es: 'Me da pereza ir a la tienda.', o: ["лень", "ле'нивый", "лени'ться"], x: 'Мне лень.' },
        { q: "Вчера' мне ___ ску'чно.", es: 'Ayer me aburría.', o: ["бы'ло", "был", "была'"], x: 'Pasado: было.' },
      ],
    },
    outro: 'Veintidós días de lluvia. Un café con canela. Sobreviví. Gracias. Ya. No me mires así.',
  },
  {
    id: 'l95', level: 8, ru: "Ни пу'ха ни пера'!", es: '¡Mucha suerte!',
    scene: 'Mañana tienes el examen oficial de ruso, el TORFL nivel B1. Masha te despide en la puerta de la escuela. Y te enseña frases que no salen en los libros.',
    intro: 'Hoy: frases hechas. Las que todos los rusos usan y nadie te explica. «Ni pluma ni plumón». Ya verás.',
    dialog: [
      { ru: "За'втра экза'мен. Ни пу'ха ни пера'!", es: 'Mañana es el examen. ¡Mucha suerte!' },
      { u: [["К чёрту!", '¡Al diablo!', 'Perfecto. Esa es la respuesta. Si dices «gracias», da mala suerte.'], ["Спаси'бо!", '¡Gracias!', '¡No! A «ни пуха ни пера» se responde «к чёрту». Si no, mala suerte.']] },
      { ru: "Не ве'шай нос. Ты всё зна'ешь. Почти' всё.", es: 'No te desanimes. Lo sabes todo. Casi todo.' },
      { u: [["Мне ка'жется, у меня' в голове' ка'ша.", 'Me parece que tengo un lío en la cabeza.', '«Каша в голове». Muy bien. Ya hablas como ruso.'], ["Не ве'шай нос? Како'й нос?", '¿No cuelgues la nariz? ¿Qué nariz?', 'Significa «no te desanimes». La nariz va arriba. Siempre.']], k: 2 },
      { ru: "Не волну'йся. Ти'ше е'дешь — да'льше бу'дешь.", es: 'No te preocupes. Despacio se llega lejos.' },
      { u: [["Я не бу'ду ве'шать лапшу' на у'ши экзамена'тору.", 'No le contaré cuentos al examinador.', '«Colgar fideos en las orejas». Exacto. Nada de mentiras. Solo ruso.']] },
      { ru: "Вот и'менно. Иди' спать. И'ли иди' учи'ть. Нет. Спать.", es: 'Exacto. Ve a dormir. O a estudiar. No. A dormir.', e: 'pleased' },
    ],
    phrases: [
      ["Ни пу'ха ни пера'! — К чёрту!", '¡Mucha suerte! — ¡Gracias! (literalmente: ¡al diablo!)'],
      ["Не ве'шай нос!", '¡No te desanimes!'],
      ["ка'ша в голове'", 'lío en la cabeza'],
      ["ве'шать лапшу' на у'ши", 'contar cuentos, engañar'],
      ["Ти'ше е'дешь — да'льше бу'дешь.", 'Despacio se llega lejos.'],
      ["Ру'ки не дохо'дят.", 'No encuentro tiempo (para eso).'],
      ["экза'мен", 'examen'],
      ["Не волну'йся!", '¡No te preocupes!'],
    ],
    grammar: {
      id: 'g95', title: 'Frases hechas',
      body: `<p>[[Ни пу'ха ни пера'!]] — se le dice a alguien antes de un examen o reto. Se responde: [[К чёрту!]] (nunca «gracias»).</p>
<p>[[Не ве'шай нос!]] — «no cuelgues la nariz»: ¡ánimo!</p>
<p>[[Ве'шать лапшу' на у'ши]] — «colgar fideos en las orejas»: engañar. [[Не ве'шай мне лапшу' на у'ши!]]</p>
<p>[[Ка'ша в голове']] — «papilla en la cabeza»: confusión. · [[Как снег на го'лову]] — de repente, sin aviso. · [[Ру'ки не дохо'дят]] — no encuentro tiempo para algo.</p>`,
      drills: [
        { p: 'Te dicen «Ни пуха ни пера!». Respondes:', o: ["К чёрту!", "Спаси'бо!", "И тебе'!"], x: 'К чёрту. Si dices gracias, da mala suerte.' },
        { p: '«¡No te desanimes!»', o: ["Не ве'шай нос!", "Не ве'шай лапшу'!", "Не ешь ка'шу!"], x: 'Не вешай нос.' },
        { p: '«¡No me cuentes cuentos!»', o: ["Не ве'шай мне лапшу' на у'ши!", "Не ве'шай нос!", "Не вари' ка'шу!"], x: 'Лапша на ушах.' },
        { p: '«Tengo un lío en la cabeza»', o: ["У меня' ка'ша в голове'.", "У меня' лапша' в голове'.", "У меня' нос в голове'."], x: 'Каша в голове.' },
        { p: 'Llegó de repente, sin avisar:', o: ["Как снег на го'лову.", "Как ка'ша на го'лову.", "Как нос на у'ши."], x: 'Как снег на голову.' },
      ],
    },
    outro: 'Ни пуха ни пера. Ya sabes qué responder. Mañana es tu examen. Duerme. Yo no voy a dormir. Por ti.',
  },
  {
    id: 'l96', level: 8, ru: "Без труда' не вы'тащишь и ры'бку из пруда'", es: 'Sin esfuerzo no hay recompensa',
    scene: 'Una semana después. Llega el resultado del examen. Masha abre el sobre antes que tú. Porque es Masha.',
    intro: 'Hoy: refranes. La sabiduría rusa en frases cortas. Y tu resultado. Respira.',
    dialog: [
      { ru: "Не пережива'й. Я уже' откры'ла. Ты {сдал|сдала'}.", es: 'No te preocupes. Ya lo abrí. Aprobaste.', e: 'happy' },
      { u: [["Пра'вда?! Я {сдал|сдала'}!", '¡¿De verdad?! ¡Aprobé!', 'De verdad. Ochenta y siete por ciento. Yo saqué noventa y uno. Pero no compito.'], ["Я не ве'рю!", '¡No me lo creo!', 'Créetelo. Ochenta y siete por ciento. Tranquilo.']], k: 2 },
      { ru: "Без труда' не вы'тащишь и ры'бку из пруда'. Ты {рабо'тал|рабо'тала} мно'го.", es: 'Sin esfuerzo no sacas ni un pececito del estanque. Trabajaste mucho.' },
      { u: [["Повторе'ние — мать уче'ния!", '¡La repetición es la madre del aprendizaje!', 'Exacto. El repaso espaciado. Mi religión.'], ["Лу'чше по'здно, чем никогда'.", 'Más vale tarde que nunca.', 'Eso también. Llegaste tarde a todo el primer año.']], k: 2 },
      { ru: "Ста'рый друг лу'чше но'вых двух. Но ты — но'вый друг, кото'рый стал ста'рым.", es: 'Un amigo viejo vale más que dos nuevos. Pero tú eres un amigo nuevo que se volvió viejo.', e: 'pleased' },
      { u: [["Спаси'бо, Ма'ша. Без тебя' я бы не {сдал|сдала'}.", 'Gracias, Masha. Sin ti no habría aprobado.', 'Lo sé. Pero tú hiciste el trabajo. Yo solo regañé. Fin del nivel ocho.']] },
    ],
    phrases: [
      ["Без труда' не вы'тащишь и ры'бку из пруда'.", 'Sin esfuerzo no hay recompensa.'],
      ["Повторе'ние — мать уче'ния.", 'La repetición es la madre del aprendizaje.'],
      ["Лу'чше по'здно, чем никогда'.", 'Más vale tarde que nunca.'],
      ["Ста'рый друг лу'чше но'вых двух.", 'Más vale un amigo viejo que dos nuevos.'],
      ["Не име'й сто рубле'й, а име'й сто друзе'й.", 'Más valen cien amigos que cien rublos.'],
      ["Я {сдал|сдала'} экза'мен.", 'Aprobé el examen.'],
      ["Не пережива'й.", 'No te preocupes.'],
      ["результа'т", 'resultado'],
    ],
    grammar: {
      id: 'g96', title: 'Refranes',
      body: `<p>Los refranes rusos usan mucho el <b>tú genérico</b> (= «uno»): [[Без труда' не вы'тащишь и ры'бку из пруда'.]] (sin esfuerzo no sacas ni un pececito)</p>
<p>Y comparativos: [[Лу'чше по'здно, чем никогда'.]] · [[Ста'рый друг лу'чше но'вых двух.]]</p>
<p>Más: [[Повторе'ние — мать уче'ния.]] · [[Не име'й сто рубле'й, а име'й сто друзе'й.]] · [[У'тро ве'чера мудрене'е.]] (la mañana es más sabia que la noche: consúltalo con la almohada) · [[Не откла'дывай на за'втра то, что мо'жно сде'лать сего'дня.]]</p>`,
      drills: [
        { p: '«Más vale tarde que nunca»', o: ["Лу'чше по'здно, чем никогда'.", "По'здно лу'чше никогда'.", "Никогда' не по'здно."], x: 'Лучше поздно, чем никогда.' },
        { p: '«La repetición es la madre del aprendizaje»', o: ["Повторе'ние — мать уче'ния.", "Уче'ние — мать повторе'ния.", "Мать — повторе'ние уче'ния."], x: 'Повторение — мать учения.' },
        { p: '«Consúltalo con la almohada»', o: ["У'тро ве'чера мудрене'е.", "Ве'чер у'тра мудрене'е.", "У'тром всё ясне'е."], x: 'Утро вечера мудренее.' },
        { q: "Без ___ не вы'тащишь и ры'бку из пруда'.", es: 'Sin esfuerzo no hay recompensa.', o: ["труда'", "труд", "трудо'м"], x: 'Без + genitivo.' },
        { q: "Ста'рый друг лу'чше ___ двух.", es: 'Un amigo viejo vale más que dos nuevos.', o: ["но'вых", "но'вые", "но'вым"], x: 'Новых двух (genitivo).' },
      ],
    },
    outro: 'Ochenta y siete por ciento. Aprobaste el B1. Estoy orgullosa. Lo dije. Fin del nivel ocho.',
  },
);
