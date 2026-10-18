/* Nivel 7 · El trabajo (lecciones 73–84) */
LESSONS.push(
  {
    id: 'l73', level: 7, ru: "Что бы вы сде'лали?", es: '¿Qué haría usted?',
    scene: 'Olga Petrovna te ofrece trabajo: ayudante de profesor de español en la escuela. Primero, una entrevista. Masha espera afuera, más nerviosa que tú.',
    intro: 'Hoy: el condicional. «Si fuera…, haría…». En ruso es facilísimo: pasado + бы. Lo difícil es Olga Petrovna.',
    dialog: [
      { who: 'olga', ru: "Сади'тесь. Скажи'те, что бы вы сде'лали, е'сли бы студе'нт спал на уро'ке?", es: 'Siéntese. Dígame, ¿qué haría si un estudiante se durmiera en clase?' },
      { u: [["Я бы его' {разбуди'л|разбуди'ла} и {за'дал|задала'} вопро'с.", 'Lo despertaría y le haría una pregunta.'], ["Я разбужу' его'.", 'Lo despertaré.', 'Es hipotético: я бы разбудил.']] },
      { who: 'olga', ru: "Хорошо'. А е'сли бы у вас был миллио'н рубле'й?", es: 'Bien. ¿Y si tuviera un millón de rublos?' },
      { u: [["Я бы {купи'л|купи'ла} самова'р и {пое'хал|пое'хала} на Байка'л.", 'Me compraría un samovar e iría al Baikal.', 'Olga Petrovna sonríe. Por primera vez en su vida.'], ["Я бы {рабо'тал|рабо'тала} здесь бесплатно'.", 'Trabajaría aquí gratis.', 'Olga Petrovna anota algo. Peligroso.']], k: 2 },
      { who: 'olga', ru: "Интере'сно. Ма'ша сказа'ла, что вы опа'здываете.", es: 'Interesante. Masha dijo que usted llega tarde.' },
      { u: [["Ра'ньше. Тепе'рь я бы никогда' не {опозда'л|опозда'ла}.", 'Antes. Ahora nunca llegaría tarde.'], ["Е'сли бы Ма'ша не говори'ла…", 'Si Masha no hubiera dicho…', 'Cuidado. Masha escucha detrás de la puerta.']] },
      { who: 'olga', ru: "Хорошо'. Вы при'няты. В понеде'льник в во'семь. Ро'вно.", es: 'Bien. Está contratado. El lunes a las ocho. En punto.' },
      { n: 'Sales. Masha finge que estaba leyendo una revista. Al revés.' },
      { ru: "Ну? …Я бы не волнова'лась. Я не волнова'лась. Совсе'м.", es: '¿Y? …Yo no me habría preocupado. No me preocupé. Para nada.', e: 'smirk' },
    ],
    phrases: [
      ["Что бы ты сде'лал?", '¿Qué harías?'],
      ["Е'сли бы у меня' бы'ли де'ньги…", 'Si tuviera dinero…'],
      ["Я бы купи'л…", 'Me compraría…'],
      ["Я бы хоте'л…", 'Me gustaría… / Quisiera…'],
      ["Вы при'няты.", 'Está contratado/a.'],
      ["собесе'дование", 'entrevista de trabajo'],
      ["волнова'ться", 'preocuparse, ponerse nervioso'],
      ["разбуди'ть", 'despertar (a alguien)'],
    ],
    grammar: {
      id: 'g73', title: 'El condicional: бы',
      body: `<p>Condicional = <b>pasado + бы</b>. No importa si es presente o pasado: [[Я бы купи'л]] = compraría / habría comprado.</p>
<p>Las dos partes llevan бы: [[Е'сли бы у меня' бы'ло вре'мя, я бы пое'хал на мо'ре.]] Si tuviera tiempo, iría al mar.</p>
<p>Comparar con la condición real (lección 58): [[Е'сли бу'дет вре'мя, я пое'ду.]] (si tengo tiempo, iré — posible)</p>
<p>Para pedir con cortesía: [[Я бы хоте'л ко'фе.]] Quisiera un café. · [[Не могли' бы вы…?]] ¿Podría usted…?</p>`,
      drills: [
        { q: "Е'сли бы у меня' бы'ли де'ньги, я ___ дом.", es: 'Si tuviera dinero, compraría una casa.', o: ["купи'л бы", "куплю'", "бу'ду покупа'ть"], x: 'Condicional: pasado + бы.' },
        { q: "Е'сли ___ я знал, я бы пришёл.", es: 'Si lo hubiera sabido, habría venido.', o: ["бы", "ли", "бу'ду"], x: 'Если бы.' },
        { q: "Я ___ хоте'л чай.", es: 'Quisiera un té.', o: ["бы", "ли", "же"], x: 'Cortesía: я бы хотел.' },
        { q: "Не ___ бы вы помо'чь?", es: '¿No podría ayudarme?', o: ["могли'", "мо'жете", "смо'жете"], x: 'Pasado + бы: могли бы.' },
        { q: "Е'сли за'втра ___ дождь, мы оста'немся до'ма.", es: 'Si mañana llueve, nos quedamos en casa (posible).', o: ["бу'дет", "был бы", "бы был"], x: 'Condición real: будет.' },
      ],
    },
    outro: 'Tienes trabajo. En mi escuela. Bajo las órdenes de Olga Petrovna. Te deseo… valor.',
  },
  {
    id: 'l74', level: 7, ru: "Я хочу', что'бы вы…", es: 'Quiero que usted…',
    scene: 'Tu primer día. Olga Petrovna te da instrucciones. Muchas instrucciones. En voz muy baja y muy firme.',
    intro: 'Hoy: что́бы. «Quiero que hagas», «para que». Cuando quieres que OTRO haga algo, ruso usa чтобы + pasado. Olga Petrovna lo usa todo el día.',
    dialog: [
      { who: 'olga', ru: "Я хочу', что'бы вы помога'ли Ма'ше на уро'ках.", es: 'Quiero que ayude a Masha en las clases.' },
      { u: [["Хорошо'. Что ещё?", 'Bien. ¿Qué más?'], ["Хорошо'. Я хочу', что'бы я помога'л.", 'Quiero que yo ayudara (mal dicho).', 'Si el sujeto es el mismo: я хочу помогать, sin чтобы.']] },
      { who: 'olga', ru: "Я хочу', что'бы студе'нты говори'ли то'лько по-испа'нски.", es: 'Quiero que los estudiantes hablen solo en español.' },
      { u: [["Я сде'лаю всё, что'бы они' говори'ли.", 'Haré todo para que hablen.'], ["Я сде'лаю всё, что'бы они' говоря'т.", 'Haré todo para que hablan (mal dicho).', 'Después de чтобы (otro sujeto): pasado, говорили.']] },
      { who: 'olga', ru: "И ещё. Я проси'ла Ма'шу, что'бы она' не пила' чай на уро'ках. Она' пьёт.", es: 'Y otra cosa. Le pedí a Masha que no tomara té en clase. Lo toma.' },
      { ru: "Э'то не чай. Э'то… тра'вы. Для го'лоса.", es: 'No es té. Son… hierbas. Para la voz.', e: 'smirk' },
      { u: [["Я прослежу', что'бы она' пила' то'лько тра'вы.", 'Me encargaré de que tome solo hierbas.', 'Traidor. Pero Olga Petrovna asiente.'], ["Я то'же бу'ду пить чай, что'бы поддержа'ть Ма'шу.", 'Yo también tomaré té para apoyar a Masha.', 'Lealtad. Olga Petrovna no está contenta. Yo sí.']], k: 2 },
      { who: 'olga', ru: "Рабо'тайте.", es: 'A trabajar.' },
    ],
    phrases: [
      ["Я хочу', что'бы ты пришёл.", 'Quiero que vengas.'],
      ["Я пришёл, что'бы помо'чь.", 'Vine para ayudar.'],
      ["Она' проси'ла, что'бы я позвони'л.", 'Me pidió que llamara.'],
      ["по-испа'нски", 'en español'],
      ["Что ещё?", '¿Qué más?'],
      ["тра'вы", 'hierbas'],
      ["Рабо'тайте!", '¡A trabajar!'],
      ["проследи'ть", 'encargarse, vigilar que'],
    ],
    grammar: {
      id: 'g74', title: 'Чтобы',
      body: `<p><b>Para (finalidad)</b>: [[что'бы]] + <b>infinitivo</b> si el sujeto es el mismo: [[Я пришёл, что'бы помо'чь.]] Vine para ayudar.</p>
<p><b>Para que / que (otro sujeto)</b>: [[что'бы]] + <b>pasado</b>: [[Я пришёл, что'бы ты не был оди'н.]] · [[Я хочу', что'бы ты пришёл.]] Quiero que vengas.</p>
<p>Con querer el mismo sujeto no lleva чтобы: [[Я хочу' прийти'.]] Quiero venir.</p>
<p>Verbos típicos: [[хоте'ть]], [[проси'ть]], [[сказа'ть]] (ordenar), [[ва'жно]], [[ну'жно]]: [[Ва'жно, что'бы все по'няли.]]</p>`,
      drills: [
        { q: "Я хочу', что'бы ты ___.", es: 'Quiero que vengas.', o: ["пришёл", "придёшь", "прийти'"], x: 'Otro sujeto: pasado.' },
        { q: "Я пришёл, что'бы ___.", es: 'Vine para ayudar.', o: ["помо'чь", "помо'г", "помогу'"], x: 'Mismo sujeto: infinitivo.' },
        { q: "Я хочу' ___ домо'й.", es: 'Quiero ir a casa.', o: ["пойти'", "что'бы пошёл", "что'бы я пошёл"], x: 'Mismo sujeto: sin чтобы.' },
        { q: "Ма'ма про'сит, ___ я позвони'л.", es: 'Mamá pide que llame.', o: ["что'бы", "что", "е'сли"], x: 'Pedir que: чтобы.' },
        { q: "Ва'жно, что'бы студе'нты ___.", es: 'Es importante que los estudiantes hablen.', o: ["говори'ли", "говоря'т", "бу'дут говори'ть"], x: 'Чтобы + pasado.' },
      ],
    },
    outro: 'Primer día superado. Olga Petrovna no te despidió. Eso es un éxito. En serio.',
  },
  {
    id: 'l75', level: 7, ru: "Я {за'нят|занята'}", es: 'Estoy ocupado/a',
    scene: 'En la sala de profesores. Serguéi, el profesor de historia, entra con dos cafés. Se pone rojo al ver a Masha.',
    intro: 'Hoy: los adjetivos cortos. Ocupado, libre, listo, contento. Se usan como estados. Y Serguéi, que está muy nervioso.',
    dialog: [
      { who: 'sergei', ru: "Ма'ша, приве'т. Ты свобо'дна в пя'тницу ве'чером?", es: 'Masha, hola. ¿Estás libre el viernes por la noche?' },
      { ru: "В пя'тницу? Я занята'. Я проверя'ю рабо'ты.", es: '¿El viernes? Estoy ocupada. Corrijo trabajos.', e: 'surprised' },
      { u: [["Ма'ша, ты не занята'. Я проверю' рабо'ты.", 'Masha, no estás ocupada. Yo corrijo los trabajos.', 'Traidor. Otra vez. …Gracias.'], ["Ма'ша, ты не за'нят.", 'Masha, no estás ocupado (mal dicho).', 'Ella: занята.']] },
      { who: 'sergei', ru: "Я рад! Зна'чит, ты свобо'дна? Я хоте'л пригласи'ть тебя' в теа'тр.", es: '¡Me alegro! ¿O sea que estás libre? Quería invitarte al teatro.' },
      { ru: "…В теа'тр. Хорошо'. Я гото'ва. То есть, я не про'тив.", es: '…Al teatro. Bueno. Estoy lista. Es decir, no me opongo.', e: 'pleased' },
      { who: 'sergei', ru: "Отли'чно! Я до'лжен идти' на уро'к. До пя'тницы!", es: '¡Perfecto! Tengo que ir a clase. ¡Hasta el viernes!' },
      { u: [["Ма'ша, ты ра'да?", 'Masha, ¿estás contenta?', 'No sé. Sí. No. Estoy… ocupada. Con mis pensamientos.'], ["Ма'ша, ты должна' мне чай.", 'Masha, me debes un té.', 'Te debo un té. Y quizás más.']], k: 2 },
    ],
    phrases: [
      ["Я {за'нят|занята'}.", 'Estoy ocupado/a.'],
      ["Ты {свобо'ден|свобо'дна}?", '¿Estás libre?'],
      ["Я {гото'в|гото'ва}.", 'Estoy listo/a.'],
      ["Я {рад|ра'да}.", 'Me alegro.'],
      ["Я {до'лжен|должна'}…", 'Tengo que… / Debo…'],
      ["Я не про'тив.", 'No me opongo.'],
      ["пригласи'ть в теа'тр", 'invitar al teatro'],
      ["До пя'тницы!", '¡Hasta el viernes!'],
    ],
    grammar: {
      id: 'g75', title: 'Adjetivos cortos',
      body: `<p>Algunos adjetivos tienen una forma corta para hablar de un <b>estado</b>, como predicado: él <b>—</b> · ella <b>-а</b> · ello <b>-о</b> · plural <b>-ы/-и</b>:</p>
<p>[[за'нят]], [[занята']], [[за'нято]], [[за'няты]] (ocupado) · [[свобо'ден]], [[свобо'дна]] (libre) · [[гото'в]], [[гото'ва]] (listo) · [[рад]], [[ра'да]] (contento; solo existe corto)</p>
<p>[[до'лжен]], [[должна']], [[должны']] (debe) + infinitivo: [[Я до'лжен идти'.]]</p>
<p>A veces el acento salta al final en femenino: [[занята']], [[права']], [[должна']].</p>`,
      drills: [
        { q: "Ма'ша сего'дня ___.", es: 'Masha está ocupada hoy.', o: ["занята'", "за'нят", "за'нятая"], x: 'Femenino corto: занята.' },
        { q: "Мы ___ идти'.", es: 'Tenemos que irnos.', o: ["должны'", "до'лжен", "должна'"], x: 'Plural: должны.' },
        { q: "Ты ___? Пойдём!", es: '¿Estás listo? ¡Vamos!', o: ["гото'в", "гото'вый", "гото'вы"], x: 'Masculino corto: готов.' },
        { q: "Она' о'чень ___ тебя' ви'деть.", es: 'Ella se alegra mucho de verte.', o: ["ра'да", "рад", "ра'ды"], x: 'Ella: рада.' },
        { q: "Э'то ме'сто ___?", es: '¿Este asiento está libre?', o: ["свобо'дно", "свобо'ден", "свобо'дна"], x: 'Место es neutro: свободно.' },
      ],
    },
    outro: 'Masha tiene una cita. Masha. Una cita. Con Serguéi. No hagas comentarios. Ninguno.',
  },
  {
    id: 'l76', level: 7, ru: "Учи'ть, учи'ться, изуча'ть", es: 'Estudiar, aprender, enseñar',
    scene: 'Das tu primera clase de español a adultos rusos. Hay una señora de 70 años en primera fila con un cuaderno enorme.',
    intro: 'Hoy: los verbos de estudiar. El ruso tiene cuatro. Cada uno con su caso. Sí, cuatro. Es un regalo.',
    dialog: [
      { u: [["Здра'вствуйте! Сего'дня мы бу'дем изуча'ть испа'нский алфави'т.", '¡Buenos días! Hoy vamos a estudiar el alfabeto español.'], ["Здра'вствуйте! Сего'дня мы бу'дем учи'ться испа'нский.", '(mal dicho)', 'Учиться no lleva acusativo. Изучать испанский o учить испанский.']] },
      { who: 'student', ru: "Я учу' испа'нский уже' три го'да. Сама'.", es: 'Estudio español desde hace tres años. Sola.' },
      { u: [["Где вы учи'лись?", '¿Dónde estudió?'], ["Где вы учи'ли?", '¿Dónde enseñó? (cambia el sentido)', '«Учили» es enseñar a alguien o memorizar. Dónde estudió: учились.']] },
      { who: 'student', ru: "Я учи'лась в университе'те, мно'го лет наза'д. А тепе'рь занима'юсь до'ма. По телеви'зору.", es: 'Estudié en la universidad hace muchos años. Y ahora estudio en casa. Con la tele.' },
      { u: [["По телеви'зору? Каки'е програ'ммы?", '¿Con la tele? ¿Qué programas?'], ["Вы о'чень хорошо' у'читесь!", '¡Usted aprende muy bien!', 'Ella sonríe. Masha, desde el fondo, también.']] },
      { who: 'student', ru: "Сериа'лы! «Та'йна любви'». Там все краси'вые и все пла'чут.", es: '¡Telenovelas! «El secreto del amor». Ahí todos son guapos y todos lloran.' },
      { ru: "Ли'дия Миха'йловна у'чит испа'нский по сериа'лам. И у'чит нас всех жить.", es: 'Lidia Mijáilovna aprende español con telenovelas. Y nos enseña a todos a vivir.', e: 'happy' },
    ],
    phrases: [
      ["Я учу' испа'нский.", 'Estudio español (aprendo).'],
      ["Я учу'сь в университе'те.", 'Estudio en la universidad.'],
      ["Мы изуча'ем исто'рию.", 'Estudiamos historia (en profundidad).'],
      ["Я занима'юсь до'ма.", 'Estudio en casa (hago tareas).'],
      ["Она' у'чит дете'й.", 'Ella enseña a niños.'],
      ["вы'учить стихи'", 'aprenderse unos versos de memoria'],
      ["сериа'л", 'serie, telenovela'],
      ["сама' / сам", 'sola / solo (por mí mismo)'],
    ],
    grammar: {
      id: 'g76', title: 'Учить, учиться, изучать, заниматься',
      body: `<p>[[учи'ть]] + acusativo: aprender, memorizar (un idioma, palabras): [[Я учу' ру'сский.]] [[учи'ть слова']]. También <b>enseñar</b> a alguien: [[Она' у'чит дете'й.]]</p>
<p>[[учи'ться]]: ser estudiante, estudiar en un lugar: [[Я учу'сь в университе'те.]] — sin acusativo.</p>
<p>[[изуча'ть]] + acusativo: estudiar una materia a fondo: [[изуча'ть исто'рию]].</p>
<p>[[занима'ться]]: hacer los deberes, estudiar (actividad): [[Я занима'юсь ка'ждый ве'чер.]]</p>
<p>Y aprender a hacer algo: [[научи'ться]] + infinitivo: [[Я научи'лся пла'вать.]]</p>`,
      drills: [
        { q: "Я ___ в университе'те.", es: 'Estudio en la universidad.', o: ["учу'сь", "учу'", "изуча'ю"], x: 'Ser estudiante en un lugar: учусь.' },
        { q: "Он ___ но'вые слова'.", es: 'Aprende palabras nuevas.', o: ["у'чит", "у'чится", "занима'ется"], x: 'Memorizar algo: учит.' },
        { q: "Мы ___ исто'рию Росси'и.", es: 'Estudiamos historia de Rusia.', o: ["изуча'ем", "у'чимся", "занима'емся"], x: 'Materia a fondo: изучаем.' },
        { q: "Ве'чером я ___ два часа'.", es: 'Por la noche estudio dos horas.', o: ["занима'юсь", "учу'", "изуча'ю"], x: 'Hacer deberes: занимаюсь.' },
        { q: "Я ___ пла'вать в де'тстве.", es: 'Aprendí a nadar de niño.', o: ["научи'лся", "вы'учил", "изучи'л"], x: 'Aprender a hacer: научиться.' },
      ],
    },
    outro: 'Tu primera clase. Lidia Mijáilovna te trajo pirozhkí. Eres oficialmente profesor. Sufre como todos.',
  },
  {
    id: 'l77', level: 7, ru: "Спроси' и'ли попроси'?", es: '¿Preguntar o pedir?',
    scene: 'Después de la cita en el teatro. Masha llega al trabajo con una sonrisa rara. Le preguntas. No responde. Le pides que cuente. Tampoco.',
    intro: 'Hoy: preguntar y pedir. En español son distintos, en ruso también: спрашивать y просить. Y decir, contar, hablar. Cuidado con no mezclarlos.',
    dialog: [
      { u: [["Ма'ша, мо'жно спроси'ть? Как бы'ло в теа'тре?", 'Masha, ¿puedo preguntar? ¿Qué tal en el teatro?'], ["Ма'ша, мо'жно попроси'ть? Как бы'ло?", 'Masha, ¿puedo pedir? ¿Qué tal fue?', 'Para una pregunta: спросить.']] },
      { ru: "Нельзя'.", es: 'No se puede.', e: 'smirk' },
      { u: [["Я тебя' прошу'! Расскажи'!", '¡Te lo pido! ¡Cuéntame!'], ["Я тебя' спра'шиваю! Расскажи'!", '¡Te pregunto! ¡Cuéntame!', 'Para rogar: прошу.']] },
      { ru: "Ла'дно. Он говори'л весь ве'чер. О Петре' Пе'рвом. Три часа'.", es: 'Bueno. Habló toda la noche. De Pedro el Grande. Tres horas.' },
      { u: [["И что ты сказа'ла?", '¿Y qué dijiste?'], ["И что ты говори'ла?", '¿Y qué decías?', 'Correcto, pero quiero saber qué dijiste al final: сказала.']], k: 1 },
      { ru: "Я сказа'ла, что э'то был са'мый ску'чный и са'мый ми'лый ве'чер в мое'й жи'зни.", es: 'Le dije que fue la noche más aburrida y más dulce de mi vida.', e: 'pleased' },
      { u: [["Он попроси'л тебя' о второ'м свида'нии?", '¿Te pidió una segunda cita?', 'Sí. Y le pedí que esta vez hablara de otra cosa. Le pregunté qué. Dijo: Catalina la Grande.'], ["Он спроси'л второ'е свида'ние?", '¿Preguntó segunda cita? (mal dicho)', 'Pedir algo: попросить о + prepositivo.']] },
    ],
    phrases: [
      ["Мо'жно спроси'ть?", '¿Puedo preguntar?'],
      ["Я тебя' прошу'!", '¡Te lo pido!'],
      ["Расскажи'!", '¡Cuéntame!'],
      ["Что ты сказа'л?", '¿Qué dijiste?'],
      ["попроси'ть о по'мощи", 'pedir ayuda'],
      ["свида'ние", 'cita (romántica)'],
      ["ми'лый", 'dulce, simpático'],
      ["Пётр Пе'рвый", 'Pedro I (el Grande)'],
    ],
    grammar: {
      id: 'g77', title: 'Preguntar, pedir, decir, contar',
      body: `<p>[[спра'шивать]] / [[спроси'ть]] = <b>preguntar</b>: [[Он спроси'л, где метро'.]] Se pregunta a alguien en acusativo: [[спроси' Ма'шу]].</p>
<p>[[проси'ть]] / [[попроси'ть]] = <b>pedir</b>: [[Я прошу' тебя' помо'чь.]] · [[проси'ть о по'мощи]] · [[Он попроси'л во'ду.]]</p>
<p>[[говори'ть]] (hablar, decir — proceso) / [[сказа'ть]] (decir algo concreto, una vez).</p>
<p>[[расска'зывать]] / [[рассказа'ть]] = <b>contar, narrar</b>: [[Расскажи' о себе'.]]</p>`,
      drills: [
        { q: "Он ___, кото'рый час.", es: 'Preguntó qué hora era.', o: ["спроси'л", "попроси'л", "сказа'л"], x: 'Preguntar: спросил.' },
        { q: "Я ___ тебя' помо'чь.", es: 'Te pido que ayudes.', o: ["прошу'", "спра'шиваю", "говорю'"], x: 'Pedir: прошу.' },
        { q: "___ о свое'й семье'.", es: 'Cuéntame de tu familia.', o: ["Расскажи'", "Скажи'", "Спроси'"], x: 'Contar: расскажи.' },
        { q: "Что он ___?", es: '¿Qué dijo?', o: ["сказа'л", "спроси'л", "попроси'л"], x: 'Decir algo: сказал.' },
        { q: "Она' попроси'ла ___ по'мощи.", es: 'Pidió ayuda.', o: ["о", "на", "за"], x: 'Просить о + prepositivo.' },
      ],
    },
    outro: 'La segunda cita será sobre Catalina la Grande. Masha está contenta. Disimula fatal.',
  },
  {
    id: 'l78', level: 7, ru: "Здесь не ку'рят", es: 'Aquí no se fuma',
    scene: 'Reunión de profesores. Olga Petrovna lee las nuevas reglas de la escuela. Serguéi le pasa a Masha notitas. Masha las lee en secreto.',
    intro: 'Hoy: frases sin sujeto. «Aquí no se fuma», «la escuela abre a las ocho», «dicen que…». El ruso usa -ся o la tercera persona plural. Muy de reglamento.',
    dialog: [
      { who: 'olga', ru: "Пра'вило пе'рвое: в шко'ле не ку'рят и не едя'т в кла'ссах.", es: 'Regla uno: en la escuela no se fuma ni se come en las aulas.' },
      { u: [["А чай пьют?", '¿Y el té se toma?', 'Olga Petrovna mira a Masha. Masha esconde la taza.'], ["А чай пьётся в кла'ссах?", '¿El té se bebe en las aulas? (poco natural)', 'Mejor: а чай пьют? Tercera persona plural.']] },
      { who: 'olga', ru: "Пра'вило второ'е: шко'ла открыва'ется в во'семь и закрыва'ется в де'вять.", es: 'Regla dos: la escuela abre a las ocho y cierra a las nueve.' },
      { u: [["А по суббо'там шко'ла открыва'ется?", '¿Y los sábados la escuela abre?'], ["А по суббо'там шко'ла открыва'ет?", '¿Y los sábados la escuela abre (algo)? (mal dicho)', 'La escuela se abre: открывается.']] },
      { who: 'olga', ru: "Нет. И пра'вило тре'тье: на рабо'те запи'ски не пи'шут. Серге'й.", es: 'No. Y regla tres: en el trabajo no se escriben notitas. Serguéi.' },
      { who: 'sergei', ru: "Извини'те, О'льга Петро'вна.", es: 'Perdón, Olga Petrovna.' },
      { ru: "Говоря'т, что О'льга Петро'вна ви'дит всё.", es: 'Dicen que Olga Petrovna lo ve todo.', e: 'eyeroll' },
      { u: [["Говоря'т, что у неё глаза' на спине'.", 'Dicen que tiene ojos en la espalda.', 'Shhh. Te oye. Con la espalda.']] },
    ],
    phrases: [
      ["Здесь не ку'рят.", 'Aquí no se fuma.'],
      ["Говоря'т, что…", 'Dicen que…'],
      ["Шко'ла открыва'ется в во'семь.", 'La escuela abre a las ocho.'],
      ["Магази'н закрыва'ется.", 'La tienda cierra.'],
      ["Как э'то пи'шется?", '¿Cómo se escribe?'],
      ["Как э'то говори'тся?", '¿Cómo se dice?'],
      ["пра'вило", 'regla'],
      ["собра'ние", 'reunión'],
    ],
    grammar: {
      id: 'g78', title: '«Se» impersonal: -ся y ellos',
      body: `<p><b>3.ª persona plural sin sujeto</b> = la gente en general («se»): [[Здесь не ку'рят.]] Aquí no se fuma. · [[Говоря'т, что…]] Dicen que… · [[Меня' зову'т…]] (¡lo conoces desde la lección 1!)</p>
<p><b>-ся con cosas</b> como sujeto, para procesos: [[Магази'н открыва'ется в де'вять.]] · [[Как пи'шется э'то сло'во?]] ¿Cómo se escribe esta palabra?</p>
<p>Comparar: [[Я открыва'ю дверь]] (yo abro) / [[Дверь открыва'ется]] (la puerta se abre).</p>`,
      drills: [
        { q: "Здесь не ___.", es: 'Aquí no se fuma.', o: ["ку'рят", "ку'рится", "ку'рит"], x: 'Gente en general: 3.ª plural.' },
        { q: "Магази'н ___ в де'вять.", es: 'La tienda abre a las nueve.', o: ["открыва'ется", "открыва'ет", "открыва'ют"], x: 'Cosa: открывается.' },
        { q: "Как ___ э'то сло'во?", es: '¿Cómo se escribe esta palabra?', o: ["пи'шется", "пи'шет", "пиши'"], x: 'Пишется.' },
        { q: "___, что за'втра бу'дет снег.", es: 'Dicen que mañana nevará.', o: ["Говоря'т", "Говори'тся", "Говори'т"], x: 'Dicen: говорят.' },
        { q: "Я ___ окно'.", es: 'Abro la ventana.', o: ["открыва'ю", "открыва'юсь", "открыва'ется"], x: 'Yo abro algo: sin -ся.' },
      ],
    },
    outro: 'Olga Petrovna lo ve todo. Las notitas, el té, mi sonrisa. Todo. Es aterrador.',
  },
  {
    id: 'l79', level: 7, ru: "Мне ка'жется…", es: 'Me parece…',
    scene: 'Viernes por la noche, en casa de Masha. Pelmén duerme. Masha no puede dormir. Te llama para «hablar de trabajo». No habla de trabajo.',
    intro: 'Hoy: frases con dativo que expresan lo que sientes sin querer: me parece, me apetece, no puedo dormir. Las más rusas de todas.',
    dialog: [
      { ru: "Мне не спи'тся. Мне ка'жется, я схожу' с ума'.", es: 'No puedo dormir. Me parece que me estoy volviendo loca.', e: 'sad' },
      { u: [["Почему'? Что случи'лось?", '¿Por qué? ¿Qué pasó?'], ["Тебе' ка'жешься?", '¿Te pareces? (mal dicho)', 'Тебе кажется. Sin persona en el verbo.']] },
      { ru: "Серге'й. Мне хо'чется ему' позвони'ть. И не хо'чется. Одновре'менно.", es: 'Serguéi. Tengo ganas de llamarlo. Y no tengo ganas. Al mismo tiempo.' },
      { u: [["Мне ка'жется, он тебе' нра'вится.", 'Me parece que te gusta.', 'Puede ser. Un poco. Bastante. No lo digas en voz alta.'], ["Мне ка'жется, ты ему' нра'вишься.", 'Me parece que tú le gustas a él.', 'Eso es obvio. Escribe notitas. Es un niño de doce años.']], k: 2 },
      { ru: "Мне стра'шно. Я давно' ни с кем не встреча'лась.", es: 'Me da miedo. Hace mucho que no salgo con nadie.' },
      { u: [["Тебе' не на'до боя'ться. Он хоро'ший.", 'No tienes que tener miedo. Es bueno.', 'Bueno… sí. Es bueno. Y aburrido. Y bueno. Gracias.'], ["Тебе' на'до спать.", 'Tienes que dormir.', 'Sabio consejo. Imposible, pero sabio.']], k: 2 },
      { ru: "Ла'дно. Спаси'бо. Тепе'рь мне лу'чше. Иди' спать. Уже' два часа' но'чи.", es: 'Bueno. Gracias. Ahora estoy mejor. Ve a dormir. Ya son las dos de la madrugada.', e: 'pleased' },
    ],
    phrases: [
      ["Мне ка'жется, что…", 'Me parece que…'],
      ["Мне не спи'тся.", 'No puedo dormir. (No me sale dormir)'],
      ["Мне хо'чется…", 'Me apetece… / Tengo ganas de…'],
      ["Мне стра'шно.", 'Me da miedo.'],
      ["Мне лу'чше.", 'Estoy mejor.'],
      ["сходи'ть с ума'", 'volverse loco'],
      ["одновре'менно", 'al mismo tiempo'],
      ["давно'", 'hace mucho'],
    ],
    grammar: {
      id: 'g79', title: 'Мне кажется, мне хочется',
      body: `<p>Algunas sensaciones se dicen con <b>dativo + verbo en -ся (3.ª persona)</b>, como si te pasaran solas:</p>
<p>[[Мне ка'жется]] me parece · [[Мне хо'чется]] me apetece (más suave que хочу) · [[Мне не спи'тся]] no consigo dormir · [[Мне не ве'рится]] no me lo creo · [[Мне повезло']] tuve suerte</p>
<p>Y con palabras en -о (lección 18): [[Мне стра'шно]], [[Мне ску'чно]], [[Мне гру'стно]], [[Мне интере'сно]].</p>
<p>En pasado, neutro: [[Мне каза'лось]], [[Мне хоте'лось]], [[Мне бы'ло стра'шно]].</p>`,
      drills: [
        { q: "___ ка'жется, он прав.", es: 'Me parece que tiene razón.', o: ["Мне", "Я", "Меня'"], x: 'Dativo: мне.' },
        { q: "Ей не ___.", es: 'Ella no puede dormir.', o: ["спи'тся", "спит", "спала'"], x: 'Не спится.' },
        { q: "Мне ___ пить.", es: 'Tengo ganas de beber.', o: ["хо'чется", "хочу'сь", "хо'чет"], x: 'Хочется.' },
        { q: "Вчера' мне ___ гру'стно.", es: 'Ayer estaba triste.', o: ["бы'ло", "был", "была'"], x: 'Pasado impersonal: было.' },
        { q: "Ему' ___!", es: '¡Tuvo suerte!', o: ["повезло'", "повёз", "везёт ему'"], x: 'Повезло.' },
      ],
    },
    outro: 'Hablamos hasta las tres. De trabajo. Solo de trabajo. Ve a dormir.',
  },
  {
    id: 'l80', level: 7, ru: "Из-за пробо'к", es: 'Por culpa de los atascos',
    scene: 'Lunes horrible. Llegas tarde por los atascos, el proyector no funciona y Lidia Mijáilovna trajo a su perro. Masha te salva. Gracias a ella todo sale bien.',
    intro: 'Hoy: las causas. «Por culpa de», «gracias a», «ya que». Para explicar por qué llegas tarde. Otra vez.',
    dialog: [
      { who: 'olga', ru: "Вы опозда'ли на два'дцать мину'т.", es: 'Llegó veinte minutos tarde.' },
      { u: [["Извини'те, я {опозда'л|опозда'ла} из-за пробо'к.", 'Perdone, llegué tarde por los atascos.'], ["Извини'те, я {опозда'л|опозда'ла} благодаря' про'бкам.", 'Llegué tarde gracias a los atascos.', '¿Gracias a los atascos? Eso suena como si te alegraras. Из-за: por culpa de.']] },
      { who: 'olga', ru: "Про'бки в Петербу'рге всегда'. Выходи'те ра'ньше.", es: 'En Petersburgo siempre hay atascos. Salga antes.' },
      { n: 'En clase el proyector no funciona. Masha aparece con su portátil.' },
      { u: [["Спаси'бо! Благодаря' тебе' уро'к спасён!", '¡Gracias! ¡Gracias a ti la clase está salvada!'], ["Спаси'бо! Из-за тебя' уро'к спасён!", 'Por tu culpa la clase está salvada.', 'Из-за = por culpa de. Aquí: благодаря тебе.']] },
      { ru: "Не за что. Так как я сего'дня в хоро'шем настрое'нии, я помога'ю всем.", es: 'De nada. Ya que hoy estoy de buen humor, ayudo a todo el mundo.', e: 'happy' },
      { u: [["А почему' ты в хоро'шем настрое'нии?", '¿Y por qué estás de buen humor?', 'Porque… por el clima. Hoy no llueve. Solo por eso.'], ["Из-за Серге'я?", '¿Por Serguéi?', 'Por culpa no. Gracias a. …No digo nada más.']], k: 2 },
    ],
    phrases: [
      ["из-за пробо'к", 'por culpa de los atascos'],
      ["благодаря' тебе'", 'gracias a ti'],
      ["так как…", 'ya que…, puesto que…'],
      ["Я {опозда'л|опозда'ла}.", 'Llegué tarde.'],
      ["про'бка / про'бки", 'atasco / atascos'],
      ["Выходи'те ра'ньше.", 'Salga antes.'],
      ["Не за что.", 'De nada.'],
      ["в хоро'шем настрое'нии", 'de buen humor'],
    ],
    grammar: {
      id: 'g80', title: 'Causas: из-за, благодаря, так как',
      body: `<p>[[из-за]] + <b>genitivo</b> = por culpa de (causa negativa): [[из-за дождя']], [[из-за пробо'к]]</p>
<p>[[благодаря']] + <b>dativo</b> = gracias a (causa positiva): [[благодаря' тебе']], [[благодаря' Ма'ше]]</p>
<p>[[потому' что]] (porque) va en medio; [[так как]] (ya que) puede ir al principio: [[Так как шёл дождь, мы оста'лись до'ма.]]</p>
<p>[[поэ'тому]] = por eso: [[Шёл дождь, поэ'тому мы оста'лись до'ма.]]</p>`,
      drills: [
        { q: "Я опозда'л ___ дождя'.", es: 'Llegué tarde por la lluvia.', o: ["из-за", "благодаря'", "так как"], x: 'Causa negativa: из-за.' },
        { q: "Благодаря' ___ я сдал экза'мен.", es: 'Gracias a ti aprobé el examen.', o: ["тебе'", "тебя'", "тобо'й"], x: 'Благодаря + dativo.' },
        { q: "Шёл снег, ___ мы не пошли'.", es: 'Nevaba, por eso no fuimos.', o: ["поэ'тому", "потому' что", "из-за"], x: 'Por eso: поэтому.' },
        { q: "___ я бо'лен, я не приду'.", es: 'Ya que estoy enfermo, no iré.', o: ["Так как", "Поэ'тому", "Из-за"], x: 'Ya que (al principio): так как.' },
        { q: "Мы не пое'хали из-за ___.", es: 'No fuimos por el frío.', o: ["хо'лода", "хо'лод", "хо'лоду"], x: 'Из-за + genitivo.' },
      ],
    },
    outro: 'Lunes superado gracias a mí. Y el perro de Lidia Mijáilovna aprendió «hola» en español. Él sí.',
  },
  {
    id: 'l81', level: 7, ru: "Хотя'…", es: 'Aunque…',
    scene: 'Serguéi le propone a Masha ir juntos a Moscú, a la boda de Katia y Vadim. Masha duda. Te pide opinión. Fingiendo que no le importa.',
    intro: 'Hoy: aunque, a pesar de. Para contradicciones. Como Masha: dice que no, aunque quiere decir que sí.',
    dialog: [
      { ru: "Серге'й хо'чет пое'хать со мной на сва'дьбу. Хотя' мы встреча'емся то'лько ме'сяц.", es: 'Serguéi quiere ir conmigo a la boda. Aunque salimos hace solo un mes.' },
      { u: [["Хотя' прошёл то'лько ме'сяц, вы хорошо' друг дру'га зна'ете.", 'Aunque pasó solo un mes, se conocen bien.', 'Puede ser. Sabe cómo tomo el té. Eso ya es mucho.'], ["Несмотря' на ме'сяц, он хоро'ший.", 'A pesar del mes, es bueno.', 'Rara frase. Pero entiendo: a pesar de todo, es bueno.']] },
      { ru: "Несмотря' на то, что он мне нра'вится, я бою'сь. Вся семья' бу'дет там. И ба'бушка.", es: 'A pesar de que me gusta, tengo miedo. Toda la familia estará allí. Y la abuela.', e: 'sad' },
      { u: [["Ба'бушка его' полю'бит. Хотя' он говори'т то'лько о Петре' Пе'рвом.", 'La abuela lo va a querer. Aunque solo hable de Pedro el Grande.', 'La abuela adora a Pedro el Grande. Puede funcionar.'], ["Несмотря' на ба'бушку…", 'A pesar de la abuela…', 'No hay nada «a pesar de» la abuela. La abuela es una fuerza de la naturaleza.']] },
      { ru: "Хорошо'. Несмотря' ни на что, я скажу' «да».", es: 'Bien. A pesar de todo, diré que sí.', e: 'happy' },
      { u: [["Ура'! Он бу'дет сча'стлив.", '¡Bravo! Será feliz.', 'Y yo… también. Un poco. Bastante.']] },
    ],
    phrases: [
      ["Хотя'…", 'Aunque…'],
      ["несмотря' на дождь", 'a pesar de la lluvia'],
      ["несмотря' на то, что…", 'a pesar de que…'],
      ["несмотря' ни на что", 'a pesar de todo'],
      ["друг дру'га", 'el uno al otro'],
      ["встреча'ться", 'salir (con alguien), quedar'],
      ["полюби'ть", 'llegar a querer, encariñarse'],
      ["сча'стлив / сча'стлива", 'feliz'],
    ],
    grammar: {
      id: 'g81', title: 'Хотя y несмотря на',
      body: `<p>[[хотя']] = aunque (+ frase): [[Хотя' шёл дождь, мы гуля'ли.]] Aunque llovía, paseamos.</p>
<p>[[несмотря' на]] + <b>acusativo</b> = a pesar de (+ sustantivo): [[несмотря' на дождь]], [[несмотря' на уста'лость]]</p>
<p>[[несмотря' на то, что]] + frase = a pesar de que: [[Несмотря' на то, что он мне нра'вится, я бою'сь.]]</p>
<p>Y al revés, [[зато']] = en cambio, pero a cambio: [[Он ску'чный, зато' до'брый.]]</p>`,
      drills: [
        { q: "___ бы'ло хо'лодно, мы пошли' гуля'ть.", es: 'Aunque hacía frío, fuimos a pasear.', o: ["Хотя'", "Несмотря' на", "Поэ'тому"], x: 'Aunque + frase: хотя.' },
        { q: "Несмотря' на ___, мы игра'ли.", es: 'A pesar de la lluvia, jugamos.', o: ["дождь", "дождя'", "дождём"], x: 'Несмотря на + acusativo.' },
        { q: "Несмотря' на ___, что он уста'л, он рабо'тал.", es: 'A pesar de que estaba cansado, trabajó.', o: ["то", "тот", "того'"], x: 'Несмотря на то, что.' },
        { q: "Кварти'ра ма'ленькая, ___ в це'нтре.", es: 'El departamento es pequeño, pero en cambio está en el centro.', o: ["зато'", "хотя'", "потому' что"], x: 'En cambio: зато.' },
        { q: "Мы ___ друг дру'га давно'.", es: 'Nos conocemos desde hace mucho.', o: ["зна'ем", "зна'ешь", "зна'ют"], x: 'Мы знаем друг друга.' },
      ],
    },
    outro: 'Masha va a la boda con Serguéi. A pesar de todo. A pesar de la abuela. A pesar de Pedro el Grande.',
  },
  {
    id: 'l82', level: 7, ru: "Все и ка'ждый", es: 'Todos y cada uno',
    scene: 'Fin del semestre en la escuela. Fiesta de despedida con los estudiantes. Lidia Mijáilovna dio un discurso de veinte minutos. En español.',
    intro: 'Hoy: todo, todos, cada. весь y каждый, en todos los casos. Para resumir un semestre entero.',
    dialog: [
      { who: 'student', ru: "Спаси'бо всем! Ка'ждый уро'к был пра'здником!", es: '¡Gracias a todos! ¡Cada clase fue una fiesta!' },
      { u: [["Спаси'бо вам за всё, Ли'дия Миха'йловна!", '¡Gracias a usted por todo, Lidia Mijáilovna!'], ["Спаси'бо вам за все, Ли'дия Миха'йловна!", 'Gracias por todos (mal dicho).', 'Por todo = за всё. Все = todos.']] },
      { who: 'student', ru: "Я вы'учила все глаго'лы! Ка'ждый ве'чер, весь семе'стр!", es: '¡Aprendí todos los verbos! ¡Cada noche, todo el semestre!' },
      { ru: "Все глаго'лы? Да'же ser и estar?", es: '¿Todos los verbos? ¿Incluso ser y estar?', e: 'surprised' },
      { who: 'student', ru: "Ка'ждую ночь я ду'маю о ser и estar. Э'то ху'же, чем ру'сские падежи'.", es: 'Cada noche pienso en ser y estar. Es peor que los casos rusos.' },
      { u: [["Для ка'ждого студе'нта есть своя' пробле'ма.", 'Cada estudiante tiene su problema.', 'Exacto. Para ti, los casos. Para ella, ser y estar. Justicia universal.'], ["Для ка'ждый студе'нт есть пробле'ма.", '(mal dicho)', 'Для + genitivo: для каждого студента.']] },
      { ru: "За всех на'ших студе'нтов! И за ка'ждого, кто не сда'лся.", es: '¡Por todos nuestros estudiantes! Y por cada uno que no se rindió.', e: 'happy' },
    ],
    phrases: [
      ["Спаси'бо за всё!", '¡Gracias por todo!'],
      ["Спаси'бо всем!", '¡Gracias a todos!'],
      ["ка'ждый день / ка'ждую неде'лю", 'cada día / cada semana'],
      ["весь день / всю ночь", 'todo el día / toda la noche'],
      ["все глаго'лы", 'todos los verbos'],
      ["для ка'ждого", 'para cada uno'],
      ["семе'стр", 'semestre'],
      ["не сда'ться", 'no rendirse'],
    ],
    grammar: {
      id: 'g82', title: 'Весь y каждый',
      body: `<p>[[весь]] (todo) es irregular: [[весь день]] · [[вся неде'ля]] · [[всё вре'мя]] · [[все лю'ди]]</p>
<p>Casos frecuentes: [[всего']] (genitivo m./n.), [[всей]] (f.), [[всех]] (plural) · [[всем]] (dativo plural) · [[обо всём]] (de todo) · [[со все'ми]] (con todos)</p>
<p>[[всё]] = todo (las cosas) · [[все]] = todos (las personas). ¡El punto de la ё importa!</p>
<p>[[ка'ждый]] (cada) se declina como un adjetivo: [[ка'ждую ночь]], [[для ка'ждого]], [[в ка'ждом го'роде]].</p>`,
      drills: [
        { q: "Спаси'бо за ___!", es: '¡Gracias por todo!', o: ["всё", "все", "всех"], x: 'Todo (cosas): всё.' },
        { q: "___ студе'нты здесь.", es: 'Todos los estudiantes están aquí.', o: ["Все", "Всё", "Весь"], x: 'Plural: все.' },
        { q: "Я рабо'тал ___ день.", es: 'Trabajé todo el día.', o: ["весь", "всё", "всю"], x: 'День es masculino: весь.' },
        { q: "Я ду'маю о тебе' ___ ночь.", es: 'Pienso en ti cada noche.', o: ["ка'ждую", "ка'ждая", "ка'ждой"], x: 'Acusativo femenino: каждую.' },
        { q: "Он говори'т со ___.", es: 'Habla con todos.', o: ["все'ми", "всем", "всех"], x: 'Instrumental plural: всеми.' },
      ],
    },
    outro: 'Fin del semestre. Lidia Mijáilovna lloró. Yo no. Era la cebolla de los pirozhkí.',
  },
  {
    id: 'l83', level: 7, ru: "Ты'сяча рубле'й", es: 'Mil rublos',
    scene: 'Día de cobro. Masha y tú calculan cuánto costará el viaje a la boda: tren, hotel, regalo. Las cuentas no salen.',
    intro: 'Hoy: números grandes y dinero. Cien, mil, un millón. Y la vieja regla: después de 5, genitivo plural. Siempre.',
    dialog: [
      { ru: "Так. Биле'т на по'езд — три ты'сячи пятьсо'т рубле'й.", es: 'A ver. El billete de tren: tres mil quinientos rublos.' },
      { u: [["Гости'ница — две ты'сячи за ночь.", 'El hotel: dos mil por noche.'], ["Гости'ница — два ты'сячи.", 'El hotel: dos mil (mal dicho).', 'Тысяча es femenina: две тысячи.']] },
      { ru: "А пода'рок? Ка'тя хо'чет самова'р. Электри'ческий. За пятна'дцать ты'сяч.", es: '¿Y el regalo? Katia quiere un samovar. Eléctrico. Por quince mil.', e: 'eyeroll' },
      { u: [["Пятна'дцать ты'сяч! Э'то о'чень до'рого!", '¡Quince mil! ¡Es carísimo!'], ["Пятна'дцать ты'сячи!", '(mal dicho)', 'Con 15: genitivo plural, тысяч.']] },
      { ru: "Ски'немся. Я, ты, Серге'й. По пять ты'сяч.", es: 'Hacemos una vaca. Yo, tú, Serguéi. Cinco mil cada uno.' },
      { u: [["Договори'лись. У меня' есть ро'вно пять ты'сяч сто рубле'й.", 'Trato hecho. Tengo exactamente cinco mil cien rublos.', 'Entonces te quedan cien rublos para todo el mes. Comerás en mi casa.'], ["У меня' есть оди'н миллио'н.", 'Tengo un millón.', 'Ajá. Y yo soy la reina de Inglaterra.']], k: 2 },
    ],
    phrases: [
      ["сто / две'сти / три'ста", 'cien / doscientos / trescientos'],
      ["пятьсо'т", 'quinientos'],
      ["ты'сяча / две ты'сячи / пять ты'сяч", 'mil / dos mil / cinco mil'],
      ["миллио'н", 'millón'],
      ["за ночь", 'por noche'],
      ["гости'ница", 'hotel'],
      ["ски'нуться", 'hacer una vaca, poner dinero entre varios'],
      ["по пять ты'сяч", 'cinco mil cada uno'],
    ],
    grammar: {
      id: 'g83', title: 'Números grandes y dinero',
      body: `<p>Centenas: [[сто]] · [[две'сти]] · [[три'ста]] · [[четы'реста]] · [[пятьсо'т]] · [[шестьсо'т]] · [[семьсо'т]] · [[восемьсо'т]] · [[девятьсо'т]]</p>
<p>[[ты'сяча]] es un sustantivo femenino y sigue la regla: [[одна' ты'сяча]], [[две ты'сячи]], [[пять ты'сяч]]. Igual [[миллио'н]]: [[два миллио'на]], [[пять миллио'нов]].</p>
<p>El sustantivo depende de la <b>última</b> cifra: [[ты'сяча два рубля']], [[две'сти пять рубле'й]], [[сто оди'н рубль]].</p>
<p>«Cada uno»: [[по]] + número: [[по пять ты'сяч]], [[по одно'й кни'ге]].</p>`,
      drills: [
        { q: "Две ___ рубле'й.", es: 'Dos mil rublos.', o: ["ты'сячи", "ты'сяча", "ты'сяч"], x: '2 → тысячи.' },
        { q: "Пять ___.", es: 'Cinco mil.', o: ["ты'сяч", "ты'сячи", "ты'сяча"], x: '5 → тысяч.' },
        { q: "Э'то сто'ит ___ рубле'й.", es: 'Cuesta quinientos rublos.', o: ["пятьсо'т", "пять сот", "пятьсто'"], x: 'Пятьсот.' },
        { q: "Сто оди'н ___.", es: 'Ciento un rublos.', o: ["рубль", "рубля'", "рубле'й"], x: 'Última cifra 1 → рубль.' },
        { q: "Три ___ челове'к.", es: 'Tres millones de personas.', o: ["миллио'на", "миллио'нов", "миллио'н"], x: '3 → миллиона.' },
      ],
    },
    outro: 'Samovar eléctrico comprado. Cien rublos para el mes. Bienvenido a la vida adulta en Rusia.',
  },
  {
    id: 'l84', level: 7, ru: "Уважа'емая О'льга Петро'вна", es: 'Estimada Olga Petrovna',
    scene: 'Necesitas pedirle a Olga Petrovna tres días libres para ir a la boda. Por escrito. Formalmente. Masha te ayuda a redactar el correo.',
    intro: 'Hoy: el registro formal. Cartas, correos, peticiones. El ruso formal es largo, educado y ama los sustantivos. Como Olga Petrovna.',
    dialog: [
      { ru: "Начина'й так: «Уважа'емая О'льга Петро'вна!»", es: 'Empieza así: «¡Estimada Olga Petrovna!»' },
      { u: [["«Прошу' Вас предоста'вить мне три дня о'тпуска».", '«Le ruego que me conceda tres días de vacaciones».'], ["«Приве'т! Мо'жно три дня?»", '«¡Hola! ¿Puedo tres días?»', 'Te despide en el acto. Formal, por favor.']] },
      { ru: "Хорошо'. «Вас» — с большо'й бу'квы. Тепе'рь причи'на.", es: 'Bien. «Вас» con mayúscula. Ahora el motivo.' },
      { u: [["«В связи' с сва'дьбой сестры' мое'й колле'ги».", '«Con motivo de la boda de la hermana de mi colega».', 'Perfecto. Muy formal. Olga Petrovna llorará de emoción. O no.'], ["«Потому' что Ка'тя же'нится».", '«Porque Katia se casa».', 'Muy directo. Y para una mujer no se dice «женится», sino «выходит замуж».']] },
      { ru: "Коне'ц: «Зара'нее благодарю'. С уваже'нием, …» И твоё и'мя.", es: 'Final: «Le agradezco de antemano. Atentamente, …». Y tu nombre.' },
      { n: 'Envías el correo. Un minuto después llega la respuesta: «Одобрено. О.П.»' },
      { u: [["Одо'брено! Она' отве'тила за мину'ту!", '¡Aprobado! ¡Respondió en un minuto!', 'Olga Petrovna no duerme. Ni descansa. Lo ve todo. Fin del nivel siete.']] },
    ],
    phrases: [
      ["Уважа'емая О'льга Петро'вна!", 'Estimada Olga Petrovna:'],
      ["Прошу' Вас…", 'Le ruego que…'],
      ["в связи' с…", 'con motivo de…, en relación con…'],
      ["Зара'нее благодарю'.", 'Le agradezco de antemano.'],
      ["С уваже'нием, …", 'Atentamente, …'],
      ["колле'га", 'colega'],
      ["выходи'ть за'муж", 'casarse (una mujer)'],
      ["Одо'брено.", 'Aprobado.'],
    ],
    grammar: {
      id: 'g84', title: 'El registro formal',
      body: `<p>Saludo: [[Уважа'емый]] (m.) / [[Уважа'емая]] (f.) + nombre y patronímico. En cartas, [[Вы]], [[Вас]], [[Вам]] van con <b>mayúscula</b>.</p>
<p>Fórmulas: [[Прошу' Вас…]] · [[Сообща'ю, что…]] (le comunico que) · [[в связи' с]] + instrumental (con motivo de) · [[Зара'нее благодарю'.]] · [[С уваже'нием,]]</p>
<p>El estilo formal prefiere sustantivos: [[предоста'вить о'тпуск]] en vez de «dejar descansar».</p>
<p>Casarse: el hombre [[жени'ться на]] + prepositivo; la mujer [[вы'йти за'муж за]] + acusativo; los dos: [[пожени'ться]].</p>`,
      drills: [
        { q: "___ О'льга Петро'вна!", es: 'Estimada Olga Petrovna:', o: ["Уважа'емая", "Уважа'емый", "Дорого'й"], x: 'Mujer: уважаемая.' },
        { q: "С ___, Ива'н.", es: 'Atentamente, Iván.', o: ["уваже'нием", "уваже'ние", "уваже'ния"], x: 'С уважением.' },
        { q: "В связи' ___ боле'знью…", es: 'Con motivo de una enfermedad…', o: ["с", "на", "о"], x: 'В связи с + instrumental.' },
        { q: "Ка'тя выхо'дит ___ за Вади'ма.", es: 'Katia se casa con Vadim.', o: ["за'муж", "жени'тся", "на"], x: 'Mujer: выходит замуж за.' },
        { q: "Вади'м же'нится ___ Ка'те.", es: 'Vadim se casa con Katia.', o: ["на", "за", "с"], x: 'Hombre: жениться на + prepositivo.' },
      ],
    },
    outro: 'Tres días libres. Olga Petrovna aprobó en un minuto. Ahora: Moscú. La boda. La abuela. Serguéi. Fin del nivel siete.',
  },
);
