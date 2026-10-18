/* Nivel 6 · Fiestas y tradiciones (lecciones 61–72) */
LESSONS.push(
  {
    id: 'l61', level: 6, ru: "Жела'ю тебе' сча'стья!", es: '¡Te deseo felicidad!',
    scene: '25 de octubre. El cumpleaños de Masha. Vadim, Katia (que vino desde Moscú) y tú preparan una fiesta sorpresa. Masha odia las sorpresas.',
    intro: 'Hoy: desear. En ruso se desea algo en genitivo: «te deseo DE felicidad». Y los brindis. Los rusos brindan mucho. Y largo.',
    dialog: [
      { n: 'Masha abre la puerta. Todos gritan.' },
      { who: 'katia', ru: "Сюрпри'з! С днём рожде'ния, Ма'ша!", es: '¡Sorpresa! ¡Feliz cumpleaños, Masha!' },
      { ru: "…Я же говори'ла: никаки'х пра'здников.", es: '…Les dije: nada de fiestas.', e: 'surprised' },
      { u: [["Ма'ша, жела'ю тебе' сча'стья и здоро'вья!", '¡Masha, te deseo felicidad y salud!'], ["Ма'ша, жела'ю тебе' сча'стье!", 'Masha, te deseo felicidad (mal dicho).', 'Желать + genitivo: счастья.']] },
      { who: 'vadim', ru: "И терпе'ния! С на'ми ну'жно мно'го терпе'ния.", es: '¡Y paciencia! Con nosotros hace falta mucha paciencia.' },
      { ru: "Э'то пра'вда. Ну… спаси'бо. Пра'вда. Спаси'бо.", es: 'Eso es verdad. Bueno… gracias. De verdad. Gracias.', e: 'pleased' },
      { u: [["Тепе'рь тост! За Ма'шу!", '¡Ahora un brindis! ¡Por Masha!'], ["Тепе'рь тост! За Ма'ша!", '¡Por Masha! (mal dicho)', 'За + acusativo: за Машу.']] },
      { who: 'katia', ru: "За Ма'шу — лу'чшую сестру' и са'мую стро'гую учи'тельницу!", es: '¡Por Masha, la mejor hermana y la profesora más estricta!' },
      { ru: "Ла'дно. Я не пла'чу. Э'то лук. В сала'те мно'го лу'ка.", es: 'Bueno. No estoy llorando. Es la cebolla. La ensalada tiene mucha cebolla.', e: 'sad' },
      { u: [["Коне'чно, э'то лук.", 'Claro, es la cebolla.', 'Exacto. La cebolla. Gracias por entenderlo.']] },
    ],
    phrases: [
      ["С днём рожде'ния!", '¡Feliz cumpleaños!'],
      ["Жела'ю тебе' сча'стья!", '¡Te deseo felicidad!'],
      ["Жела'ю здоро'вья!", '¡Te deseo salud!'],
      ["Уда'чи! / Успе'хов!", '¡Suerte! / ¡Éxitos!'],
      ["За тебя'!", '¡Por ti! (brindis)'],
      ["тост", 'brindis'],
      ["сюрпри'з", 'sorpresa'],
      ["терпе'ние", 'paciencia'],
    ],
    grammar: {
      id: 'g61', title: 'Desear y brindar',
      body: `<p>[[жела'ть]] + <b>dativo</b> (a quién) + <b>genitivo</b> (qué): [[Жела'ю тебе' сча'стья.]] · [[Жела'ем вам здоро'вья и успе'хов.]]</p>
<p>Muchas veces se omite «желаю»: [[Уда'чи!]] [[Сча'стья!]] [[Здоро'вья!]] [[Всего' хоро'шего!]]</p>
<p>Felicitar: [[С]] + instrumental: [[С днём рожде'ния!]] [[С Но'вым го'дом!]] [[С пра'здником!]]</p>
<p>Brindar: [[За]] + acusativo: [[За тебя'!]] [[За Ма'шу!]] [[За дру'жбу!]]</p>`,
      drills: [
        { q: "Жела'ю тебе' ___!", es: '¡Te deseo felicidad!', o: ["сча'стья", "сча'стье", "сча'стьем"], x: 'Желать + genitivo.' },
        { q: "___ днём рожде'ния!", es: '¡Feliz cumpleaños!', o: ["С", "За", "На"], x: 'Felicitar: с + instrumental.' },
        { q: "За ___!", es: '¡Por la amistad!', o: ["дру'жбу", "дру'жба", "дру'жбы"], x: 'Brindis: за + acusativo.' },
        { q: "Жела'ем ___ успе'хов!", es: '¡Le deseamos éxitos!', o: ["вам", "вас", "вы"], x: 'A quién: dativo.' },
        { q: "С Но'вым ___!", es: '¡Feliz Año Nuevo!', o: ["го'дом", "го'да", "год"], x: 'С Новым годом.' },
      ],
    },
    outro: 'Fue la cebolla. Solo la cebolla. Pero gracias. A todos. Hasta a Vadim.',
  },
  {
    id: 'l62', level: 6, ru: "Како'го числа'?", es: '¿Qué día?',
    scene: 'Diciembre. Masha planea las fiestas: Año Nuevo, Navidad ortodoxa, el «Año Nuevo viejo». Los rusos tienen muchas fiestas en enero.',
    intro: 'Hoy: fechas completas, con años. «En 2026», «el 7 de enero». Los números largos asustan, pero se dicen igual que los ordinales.',
    dialog: [
      { ru: "Како'го числа' ты е'дешь домо'й?", es: '¿Qué día te vas a casa?' },
      { u: [["Деся'того января'. По'сле пра'здников.", 'El diez de enero. Después de las fiestas.', 'Muy bien. Así lo vives todo.'], ["Деся'тое января'.", 'Diez de enero (mal dicho).', '¿Qué día? → genitivo: десятого.']] },
      { ru: "Отли'чно. Три'дцать пе'рвого — Но'вый год, седьмо'го января' — Рождество'.", es: 'Perfecto. El 31, Año Nuevo; el 7 de enero, Navidad.' },
      { u: [["Почему' Рождество' седьмо'го?", '¿Por qué la Navidad es el 7?'], ["Почему' Рождество' седьмо'е?", '¿Por qué la Navidad séptimo? (mal dicho)', '¿Cuándo? → седьмого.']] },
      { ru: "Ста'рый календа'рь. И тринадца'того — Ста'рый Но'вый год.", es: 'El calendario antiguo. Y el 13 es el Año Nuevo Viejo.', e: 'smirk' },
      { u: [["Ста'рый Но'вый год? Э'то шу'тка?", '¿Año Nuevo Viejo? ¿Es una broma?', 'No. Es lo más ruso que existe. Un año nuevo viejo. Lógica rusa.']] },
      { ru: "В две ты'сячи два'дцать шесто'м году' я встреча'ла Но'вый год одна'. В э'том году' — с ва'ми.", es: 'En 2026 recibí el Año Nuevo sola. Este año, con ustedes.', e: 'pleased' },
      { u: [["В э'том году' бу'дет лу'чший Но'вый год!", '¡Este año será el mejor Año Nuevo!', 'Ya veremos. Si Vadim no cocina.']] },
    ],
    phrases: [
      ["Како'го числа'?", '¿Qué día? (de qué fecha)'],
      ["Како'е сего'дня число'?", '¿A qué fecha estamos?'],
      ["седьмо'го января'", 'el siete de enero'],
      ["в э'том году'", 'este año'],
      ["в про'шлом году'", 'el año pasado'],
      ["Рождество'", 'Navidad'],
      ["Ста'рый Но'вый год", 'Año Nuevo Viejo (13 de enero)'],
      ["встреча'ть Но'вый год", 'recibir el Año Nuevo'],
    ],
    grammar: {
      id: 'g62', title: 'Fechas y años',
      body: `<p>¿Qué fecha es? → nominativo neutro: [[Сего'дня седьмо'е января'.]] · ¿Qué día (pasa algo)? → genitivo: [[седьмо'го января']]</p>
<p>El año es un ordinal: solo la <b>última palabra</b> cambia. «En el año…» = [[в]] + prepositivo + [[году']]: [[в две ты'сячи двадца'том году']] (2020), [[в ты'сяча девятьсо'т девяно'стом году']] (1990)</p>
<p>Fecha completa («cuándo») → todo en genitivo: [[седьмо'го января' две ты'сячи два'дцать седьмо'го го'да]]</p>
<p>Con [[э'тот]], [[про'шлый]], [[сле'дующий]]: [[в э'том году']], [[в сле'дующем году']].</p>`,
      drills: [
        { q: "Сего'дня ___ января'.", es: 'Hoy es siete de enero.', o: ["седьмо'е", "седьмо'го", "седьмо'й"], x: 'Hoy es…: nominativo neutro.' },
        { q: "Я прие'ду ___ ма'я.", es: 'Llegaré el diez de mayo.', o: ["деся'того", "деся'тое", "деся'тый"], x: 'Cuándo: genitivo.' },
        { q: "Я роди'лся в ___ году'.", es: 'Nací en 2000.', o: ["двухты'сячном", "две ты'сячи", "двухты'сячный"], x: 'En el año 2000: в двухтысячном году.' },
        { q: "В ___ году' я был в Москве'.", es: 'El año pasado estuve en Moscú.', o: ["про'шлом", "про'шлый", "про'шлого"], x: 'В прошлом году.' },
        { q: "Како'го ___ твой день рожде'ния?", es: '¿Qué día es tu cumpleaños?', o: ["числа'", "число'", "числе'"], x: 'Какого числа.' },
      ],
    },
    outro: 'Tres fiestas en dos semanas. Enero en Rusia es largo. Y comestible.',
  },
  {
    id: 'l63', level: 6, ru: "Кем ты хо'чешь стать?", es: '¿Qué quieres ser?',
    scene: '31 de diciembre, 11 de la noche. En casa de Masha preparan la mesa. Katia pregunta a todos qué querían ser de niños.',
    intro: 'Hoy: el instrumental con «ser» en pasado y futuro, y con «convertirse en». Cuando ERAS niño, cuando SERÁS rico. En instrumental.',
    dialog: [
      { who: 'katia', ru: "Кем вы хоте'ли стать в де'тстве?", es: '¿Qué querían ser de niños?' },
      { u: [["Я {хоте'л|хоте'ла} стать космона'втом.", 'Yo quería ser astronauta.', 'Astronauta. Clásico. Pelmén quería ser león.'], ["Я {хоте'л|хоте'ла} стать космона'вт.", 'Quería ser astronauta (mal dicho).', 'Стать + instrumental: космонавтом.']] },
      { ru: "А я хоте'ла быть балери'ной. Пять лет. Пото'м я ста'ла ре'зкой.", es: 'Yo quería ser bailarina. Cinco años. Después me volví brusca.', e: 'smirk' },
      { who: 'vadim', ru: "А я был ма'леньким и ду'мал, что ста'ну драко'ном.", es: 'Y yo era pequeño y pensaba que me convertiría en dragón.' },
      { u: [["Ты почти' стал драко'ном. Ты храпи'шь, как драко'н.", 'Casi te convertiste en dragón. Roncas como un dragón.', 'Ja. Lo dijiste tú. Yo solo me reí.'], ["Ты стал врач?", '¿Te hiciste médico? (mal dicho)', 'Стать + instrumental: врачом. Y no, Vadim no es médico.']] },
      { who: 'katia', ru: "А кем ты бу'дешь че'рез де'сять лет?", es: '¿Y qué serás dentro de diez años?' },
      { u: [["Я бу'ду перево'дчиком с ру'сского.", 'Seré traductor/a del ruso.', '…Eso sería un orgullo. Para mí. Como profesora. Solo como profesora.'], ["Я бу'ду бога'тым и счастли'вым.", 'Seré rico y feliz.', 'Rico, no sé. Feliz, si estudias.']], k: 2 },
      { ru: "Пять мину'т до Но'вого го'да! Где шампа'нское?", es: '¡Cinco minutos para el Año Nuevo! ¿Dónde está el champán?', e: 'surprised' },
    ],
    phrases: [
      ["Кем ты хо'чешь стать?", '¿Qué quieres ser?'],
      ["в де'тстве", 'de niño, en la infancia'],
      ["Я {хоте'л|хоте'ла} стать врачо'м.", 'Quería ser médico.'],
      ["Когда' я {был ма'леньким|была' ма'ленькой}…", 'Cuando era pequeño/a…'],
      ["Он стал учи'телем.", 'Se hizo maestro.'],
      ["перево'дчик", 'traductor'],
      ["космона'вт", 'astronauta (cosmonauta)'],
      ["шампа'нское", 'champán'],
    ],
    grammar: {
      id: 'g63', title: 'Instrumental con быть y стать',
      body: `<p>En presente no hay verbo: [[Он врач.]] Pero en pasado, futuro e infinitivo, la profesión o estado va en <b>instrumental</b>:</p>
<p>[[Он был врачо'м.]] · [[Я бу'ду врачо'м.]] · [[Я хочу' быть врачо'м.]]</p>
<p>[[стать]] (convertirse, hacerse) siempre con instrumental: [[Она' ста'ла учи'тельницей.]]</p>
<p>Instrumental singular: masculino <b>-ом / -ем</b> ([[врачо'м]], [[учи'телем]]), femenino <b>-ой / -ей</b> ([[балери'ной]]), adjetivos <b>-ым / -ой</b> ([[ма'леньким]], [[ма'ленькой]]).</p>`,
      drills: [
        { q: "Он хо'чет стать ___.", es: 'Quiere ser médico.', o: ["врачо'м", "врач", "врача'"], x: 'Стать + instrumental.' },
        { q: "Она' была' ___.", es: 'Era profesora.', o: ["учи'тельницей", "учи'тельница", "учи'тельницу"], x: 'Был/была + instrumental.' },
        { q: "Когда' я был ___…", es: 'Cuando era pequeño…', o: ["ма'леньким", "ма'ленький", "ма'ленького"], x: 'Adjetivo en instrumental: -им.' },
        { q: "Я бу'ду ___.", es: 'Seré traductor.', o: ["перево'дчиком", "перево'дчик", "перево'дчика"], x: 'Futuro con быть: instrumental.' },
        { q: "Он ___.", es: 'Él es ingeniero.', o: ["инжене'р", "инжене'ром", "есть инжене'ром"], x: 'Presente: nominativo, sin verbo.' },
      ],
    },
    outro: 'Quería ser bailarina. Me hice profesora. Igual hago que la gente salte. De miedo.',
  },
  {
    id: 'l64', level: 6, ru: "Но'вый год — но'вая жизнь", es: 'Año nuevo, vida nueva',
    scene: 'Medianoche. Suenan las campanadas del Kremlin en la tele. Todos escriben un deseo en un papel, lo queman y se tragan las cenizas con champán. Tradición.',
    intro: 'Hoy: los propósitos de año nuevo. Hacer deporte, interesarse por algo. Verbos que piden instrumental. Muchos van a ser mentira.',
    dialog: [
      { who: 'katia', ru: "Бы'стро! Пиши'те жела'ние, сжига'йте и пе'йте!", es: '¡Rápido! ¡Escriban un deseo, quémenlo y bébanlo!' },
      { n: 'Las doce campanadas. Todos gritan «¡Ура!».' },
      { ru: "С Но'вым го'дом! Ну, каки'е пла'ны на год?", es: '¡Feliz Año Nuevo! Bueno, ¿qué planes para este año?' },
      { u: [["Я бу'ду занима'ться спо'ртом.", 'Voy a hacer deporte.', 'Lo dijiste el año pasado. Y el anterior. Te lo creeré en febrero.'], ["Я бу'ду занима'ться спорт.", 'Haré deporte (mal dicho).', 'Заниматься + instrumental: спортом.']] },
      { who: 'vadim', ru: "А я бу'ду интересова'ться иску'сством. Ка'тя лю'бит теа'тр.", es: 'Y yo me interesaré por el arte. A Katia le encanta el teatro.' },
      { ru: "Как удо'бно.", es: 'Qué oportuno.', e: 'eyeroll' },
      { u: [["А ты, Ма'ша? Чем ты бу'дешь занима'ться?", '¿Y tú, Masha? ¿A qué te vas a dedicar?'], ["А ты, Ма'ша? Что ты бу'дешь занима'ться?", '¿Y tú qué te dedicarás? (mal dicho)', 'Заниматься + instrumental: чем.']] },
      { ru: "Я? Я бу'ду занима'ться… свое'й жи'знью. И, мо'жет быть, му'зыкой. Я игра'ла на пиани'но.", es: '¿Yo? Me voy a ocupar… de mi vida. Y tal vez de la música. Tocaba el piano.', e: 'pleased' },
      { u: [["Ты игра'ешь на пиани'но? Сыгра'й!", '¿Tocas el piano? ¡Toca algo!', 'No. …Mañana. Tal vez. Si nadie mira.']] },
    ],
    phrases: [
      ["С Но'вым го'дом!", '¡Feliz Año Nuevo!'],
      ["Я бу'ду занима'ться спо'ртом.", 'Voy a hacer deporte.'],
      ["Чем ты занима'ешься?", '¿A qué te dedicas?'],
      ["интересова'ться иску'сством", 'interesarse por el arte'],
      ["игра'ть на пиани'но", 'tocar el piano'],
      ["жела'ние", 'deseo'],
      ["пла'ны на год", 'planes para el año'],
      ["Как удо'бно.", 'Qué oportuno / conveniente.'],
    ],
    grammar: {
      id: 'g64', title: 'Verbos con instrumental',
      body: `<p>Algunos verbos piden siempre <b>instrumental</b>:</p>
<p>[[занима'ться]] (dedicarse, practicar, estudiar): [[занима'ться спо'ртом]], [[занима'ться ру'сским]]</p>
<p>[[интересова'ться]] (interesarse por): [[интересова'ться иску'сством]] — conjugación: [[интересу'юсь]], [[интересу'ешься]]</p>
<p>[[увлека'ться]] (apasionarse por), [[по'льзоваться]] (usar), [[горди'ться]] (estar orgulloso de), [[быть дово'льным]] (estar contento con).</p>
<p>Y los instrumentos: [[игра'ть на]] + prepositivo ([[на гита'ре]]); los deportes: [[игра'ть в]] + acusativo ([[в футбо'л]]).</p>`,
      drills: [
        { q: "Я занима'юсь ___.", es: 'Hago deporte.', o: ["спо'ртом", "спорт", "спо'рта"], x: 'Заниматься + instrumental.' },
        { q: "Она' интересу'ется ___.", es: 'Se interesa por la música.', o: ["му'зыкой", "му'зыку", "му'зыка"], x: 'Интересоваться + instrumental.' },
        { q: "Он игра'ет ___ гита'ре.", es: 'Toca la guitarra.', o: ["на", "в", "с"], x: 'Instrumentos: на.' },
        { q: "Мы игра'ем ___ футбо'л.", es: 'Jugamos al fútbol.', o: ["в", "на", "с"], x: 'Juegos: в.' },
        { q: "___ ты занима'ешься?", es: '¿A qué te dedicas?', o: ["Чем", "Что", "Чего'"], x: 'Instrumental: чем.' },
      ],
    },
    outro: 'Comiste papel quemado con champán. Ahora eres oficialmente ruso. Y el deseo se cumplirá. Si no, culpa al champán.',
  },
  {
    id: 'l65', level: 6, ru: "С но'выми друзья'ми", es: 'Con los nuevos amigos',
    scene: '1 de enero, 4 de la tarde. Desayuno-almuerzo con las sobras de ayer. Masha mira a todos y, por una vez, no se queja.',
    intro: 'Hoy: instrumental plural y con adjetivos. «Con los nuevos amigos». Una frase que Masha dirá en voz muy baja.',
    dialog: [
      { ru: "Ра'ньше я встреча'ла Но'вый год с ко'шкой и телеви'зором.", es: 'Antes recibía el Año Nuevo con el gato y la tele.' },
      { u: [["А в э'том году' — с но'выми друзья'ми.", 'Y este año, con nuevos amigos.', '…Sí. Con nuevos amigos. No lo repitas.'], ["А в э'том году' — с но'вые друзья'.", 'Con nuevos amigos (mal dicho).', 'Instrumental plural: с новыми друзьями.']] },
      { who: 'katia', ru: "И с ва'шими сала'тами! Я ем «оливье'» тре'тий раз.", es: '¡Y con tus ensaladas! Estoy comiendo «olivier» por tercera vez.' },
      { u: [["А я ем с бутербро'дами с икро'й.", 'Yo como sándwiches con caviar.'], ["А я ем с бутербро'дами с икра'.", 'Con caviar (mal dicho).', 'Con caviar: с икрой.']] },
      { ru: "Икра' — пода'рок от па'пы. Он ду'мает, что я пита'юсь то'лько ча'ем.", es: 'El caviar es regalo de papá. Cree que me alimento solo de té.' },
      { u: [["Он почти' прав.", 'Casi tiene razón.', 'Casi. El té y los pelmeni de la abuela. Y los pirozhkí. Y…'], ["Ты пита'ешься ча'ем и кни'гами.", 'Te alimentas de té y de libros.', 'Bonita frase. Muy precisa.']], k: 2 },
      { ru: "Ла'дно. Я хочу' сказа'ть… Мне хорошо' с ва'ми. Всё. Бо'льше не повторю'.", es: 'Bueno. Quiero decir… Estoy bien con ustedes. Ya está. No lo repetiré.', e: 'pleased' },
    ],
    phrases: [
      ["с но'выми друзья'ми", 'con nuevos amigos'],
      ["с бутербро'дами", 'con sándwiches'],
      ["бутербро'д с икро'й", 'sándwich de caviar'],
      ["сала'т «оливье'»", 'ensalada olivier (ensaladilla rusa)'],
      ["Мне хорошо' с ва'ми.", 'Estoy bien con ustedes.'],
      ["ра'ньше", 'antes'],
      ["пита'ться", 'alimentarse'],
      ["тре'тий раз", 'por tercera vez'],
    ],
    grammar: {
      id: 'g65', title: 'Instrumental plural',
      body: `<p>El instrumental plural es fácil: siempre <b>-ами / -ями</b>: [[друзья']] → [[с друзья'ми]] · [[кни'ги]] → [[с кни'гами]] · [[лю'ди]] → [[с людьми']] (irregular)</p>
<p>Adjetivos en plural: <b>-ыми / -ими</b>: [[с но'выми друзья'ми]], [[с ру'сскими студе'нтами]]</p>
<p>Adjetivos en singular: masculino <b>-ым / -им</b> ([[с но'вым дру'гом]]), femenino <b>-ой / -ей</b> ([[с но'вой подру'гой]]).</p>
<p>Posesivos: [[с мои'ми]], [[с твои'ми]], [[с на'шими]], [[с ва'шими]].</p>`,
      drills: [
        { q: "Я гуля'ю с ___.", es: 'Paseo con mis amigos.', o: ["друзья'ми", "друзья'", "друзе'й"], x: 'Instrumental plural: -ями.' },
        { q: "Чай с ___.", es: 'Té con galletas.', o: ["пече'ньем", "пече'нье", "пече'нья"], x: 'Neutro singular: -ем.' },
        { q: "Мы говори'м с ___ студе'нтами.", es: 'Hablamos con los nuevos estudiantes.', o: ["но'выми", "но'вые", "но'вых"], x: 'Adjetivo plural: -ыми.' },
        { q: "Я живу' с ___ подру'гой.", es: 'Vivo con mi amiga.', o: ["мое'й", "мои'ми", "мою'"], x: 'Femenino singular: моей.' },
        { q: "Он говори'т с ___.", es: 'Habla con la gente.', o: ["людьми'", "лю'дями", "люде'й"], x: 'Люди → людьми.' },
      ],
    },
    outro: 'Lo dije una vez. No lo repetiré. Pero lo dije. Feliz año nuevo.',
  },
  {
    id: 'l66', level: 6, ru: "Пода'рки друзья'м", es: 'Regalos para los amigos',
    scene: 'Abren los regalos de Año Nuevo bajo el árbol (ёлка). Nadie se puso de acuerdo con nadie. Todos regalaron libros.',
    intro: 'Hoy: el dativo plural. Regalar a los amigos, escribir a los padres. Siempre -ам / -ям. Por fin algo fácil.',
    dialog: [
      { ru: "Я купи'ла пода'рки всем. Друзья'м — кни'ги.", es: 'Compré regalos para todos. A los amigos, libros.' },
      { who: 'vadim', ru: "А я то'же купи'л кни'ги. Всем.", es: 'Yo también compré libros. Para todos.' },
      { u: [["И я {подари'л|подари'ла} кни'ги всем друзья'м!", '¡Y yo regalé libros a todos los amigos!'], ["И я {подари'л|подари'ла} кни'ги всем друзе'й!", 'Regalé libros a todos los amigos (mal dicho).', 'A quién, plural: друзьям.']] },
      { who: 'katia', ru: "А я — нет! Я подари'ла всем носки'!", es: '¡Yo no! ¡Yo regalé calcetines a todos!' },
      { ru: "Носки'. С оленя'ми. Спаси'бо, Ка'тя.", es: 'Calcetines. Con renos. Gracias, Katia.', e: 'eyeroll' },
      { u: [["Носки' с оленя'ми — э'то о'чень практи'чно.", 'Los calcetines con renos son muy prácticos.', 'Prácticos sí. Elegantes no. Pero me los voy a poner. Hace frío.'], ["Я напишу' роди'телям: «Мне подари'ли носки'».", 'Escribiré a mis padres: «Me regalaron calcetines».', 'Escribe a tus padres. Pero también cuéntales lo de los libros.']], k: 2 },
      { ru: "А Пельме'ню мы да'рим но'вую коро'бку.", es: 'Y a Pelmén le regalamos una caja nueva.' },
      { n: 'Pelmén ignora la caja nueva y se mete en la caja de los calcetines.' },
    ],
    phrases: [
      ["пода'рки друзья'м", 'regalos para los amigos'],
      ["Я пишу' роди'телям.", 'Les escribo a mis padres.'],
      ["подари'ть", 'regalar'],
      ["всем", 'a todos'],
      ["ёлка", 'árbol de Año Nuevo'],
      ["носки'", 'calcetines'],
      ["оле'нь", 'reno, ciervo'],
      ["практи'чно", 'práctico'],
    ],
    grammar: {
      id: 'g66', title: 'Dativo plural',
      body: `<p>El dativo plural termina siempre en <b>-ам / -ям</b>: [[друзья']] → [[друзья'м]] · [[роди'тели]] → [[роди'телям]] · [[студе'нты]] → [[студе'нтам]] · [[лю'ди]] → [[лю'дям]] · [[де'ти]] → [[де'тям]]</p>
<p>Adjetivos y posesivos: <b>-ым / -им</b>: [[мои'м друзья'м]], [[но'вым студе'нтам]]</p>
<p>«A todos» = [[всем]]. Y ya lo conoces de los días: [[по суббо'там]] (por + dativo plural).</p>`,
      drills: [
        { q: "Я да'рю пода'рки ___.", es: 'Hago regalos a mis amigos.', o: ["друзья'м", "друзья'ми", "друзе'й"], x: 'Dativo plural: -ям.' },
        { q: "Позвони' ___!", es: '¡Llama a tus padres!', o: ["роди'телям", "роди'телей", "роди'тели"], x: 'Dativo plural.' },
        { q: "Учи'тель помога'ет ___.", es: 'El maestro ayuda a los niños.', o: ["де'тям", "дете'й", "детьми'"], x: 'Дети → детям.' },
        { q: "Я пишу' ___ друзья'м.", es: 'Escribo a mis amigos.', o: ["мои'м", "мои'х", "мои'ми"], x: 'Posesivo dativo plural: моим.' },
        { q: "Спаси'бо ___!", es: '¡Gracias a todos!', o: ["всем", "всех", "все"], x: 'Dativo: всем.' },
      ],
    },
    outro: 'Doce libros, seis pares de calcetines con renos y un gato en una caja que no era la suya. Navidad perfecta.',
  },
  {
    id: 'l67', level: 6, ru: "Мно'го хоро'ших люде'й", es: 'Mucha gente buena',
    scene: '7 de enero. Navidad ortodoxa. Masha te lleva a una iglesia, a ver la misa de medianoche. Hay velas, cantos y frío.',
    intro: 'Hoy: genitivo plural de adjetivos y los plurales más rebeldes. Muchas velas, muchos buenos deseos.',
    dialog: [
      { ru: "Здесь мно'го люде'й. И мно'го свече'й.", es: 'Aquí hay mucha gente. Y muchas velas.' },
      { u: [["Как краси'во! Ско'лько ста'рых ико'н!", '¡Qué bonito! ¡Cuántos íconos antiguos!'], ["Как краси'во! Ско'лько ста'рые ико'ны!", '(mal dicho)', 'Сколько + genitivo plural: старых икон.']] },
      { ru: "Ба'бушка водила' меня' сюда', когда' мне бы'ло семь лет.", es: 'La abuela me traía aquí cuando yo tenía siete años.', e: 'pleased' },
      { u: [["Ты ве'ришь в Бо'га?", '¿Crees en Dios?', 'No sé. Creo en la abuela. Es parecido.'], ["Ты здесь ча'сто быва'ешь?", '¿Vienes aquí a menudo?', 'Una vez al año. En Navidad. Por la abuela.']], k: 2 },
      { ru: "Слы'шишь хор? Э'то не'сколько стари'нных пе'сен.", es: '¿Oyes el coro? Son varias canciones antiguas.' },
      { u: [["У меня' нет слов. Э'то волше'бно.", 'No tengo palabras. Es mágico.'], ["У меня' нет слова'.", 'No tengo palabras (mal dicho).', 'Нет слов: genitivo plural de слово.']] },
      { ru: "Да. В Росси'и мно'го пробле'м. Но и мно'го краси'вых веще'й.", es: 'Sí. En Rusia hay muchos problemas. Pero también muchas cosas bonitas.', e: 'sad' },
    ],
    phrases: [
      ["мно'го хоро'ших люде'й", 'mucha gente buena'],
      ["свеча' / све'чи", 'vela / velas'],
      ["ико'на", 'ícono (imagen religiosa)'],
      ["хор", 'coro'],
      ["не'сколько пе'сен", 'varias canciones'],
      ["У меня' нет слов.", 'No tengo palabras.'],
      ["Э'то волше'бно.", 'Es mágico.'],
      ["вещь / ве'щи", 'cosa / cosas'],
    ],
    grammar: {
      id: 'g67', title: 'Genitivo plural: adjetivos y rebeldes',
      body: `<p>Adjetivos en genitivo plural: <b>-ых / -их</b>: [[мно'го хоро'ших люде'й]], [[ско'лько ста'рых ико'н]], [[нет но'вых книг]]</p>
<p>Recuerda las tres terminaciones del sustantivo: <b>-ов/-ев</b> ([[столо'в]]), <b>cero</b> ([[книг]], [[слов]]), <b>-ей</b> ([[веще'й]], [[свече'й]]).</p>
<p>A veces aparece una vocal para que se pueda pronunciar: [[пе'сня]] → [[пе'сен]], [[де'вушка]] → [[де'вушек]], [[окно']] → [[о'кон]].</p>
<p>Palabras que piden genitivo: [[мно'го]], [[ма'ло]], [[ско'лько]], [[не'сколько]] (varios), [[нет]], números desde 5.</p>`,
      drills: [
        { q: "Тут мно'го ___ люде'й.", es: 'Aquí hay mucha gente buena.', o: ["хоро'ших", "хоро'шие", "хоро'шим"], x: 'Adjetivo genitivo plural: -их.' },
        { q: "Не'сколько ___.", es: 'Varias canciones.', o: ["пе'сен", "пе'сни", "пе'сней"], x: 'Песня → песен.' },
        { q: "У меня' нет ___.", es: 'No tengo palabras.', o: ["слов", "слова'", "слово'в"], x: 'Слово → слов.' },
        { q: "Ско'лько ___!", es: '¡Cuántas cosas!', o: ["веще'й", "вещи'", "вещо'в"], x: 'Вещь → вещей.' },
        { q: "В гру'ппе пять ___.", es: 'En el grupo hay cinco chicas.', o: ["де'вушек", "де'вушки", "де'вушков"], x: 'Девушка → девушек.' },
      ],
    },
    outro: 'Una Navidad tranquila. Velas, coro y frío. La abuela estaría contenta. Le mandé una foto.',
  },
  {
    id: 'l68', level: 6, ru: "На э'той неде'ле — Ма'сленица!", es: '¡Esta semana es Maslenitsa!',
    scene: 'Febrero. La semana de Maslenitsa: despedida del invierno, se comen blinis cada día. Masha tiene un plan para cada día. Con blinis.',
    intro: 'Hoy: expresiones de tiempo: esta semana, el mes pasado, el próximo año. Cada una con su preposición. Y blinis. Muchos blinis.',
    dialog: [
      { ru: "На э'той неде'ле — Ма'сленица! Ка'ждый день — блины'.", es: '¡Esta semana es Maslenitsa! Cada día, blinis.', e: 'happy' },
      { u: [["Ка'ждый день? Всю неде'лю?", '¿Cada día? ¿Toda la semana?'], ["Ка'ждый день? В э'той неде'ле?", '¿Cada día? ¿Esta semana? (mal dicho)', 'Semana: на этой неделе.']] },
      { ru: "Да. В понеде'льник — со смета'ной, во вто'рник — с мёдом, в сре'ду — с икро'й…", es: 'Sí. El lunes con crema agria, el martes con miel, el miércoles con caviar…' },
      { u: [["А в про'шлом году' ты то'же ела' блины' всю неде'лю?", 'Y el año pasado, ¿también comiste blinis toda la semana?'], ["А на про'шлом году'?", '¿Y el año pasado? (mal dicho)', 'Año: в прошлом году.']] },
      { ru: "Коне'чно. А в воскресе'нье мы сжига'ем чу'чело зимы'.", es: 'Claro. Y el domingo quemamos un muñeco del invierno.' },
      { u: [["Зна'чит, в сле'дующем ме'сяце бу'дет весна'?", '¿O sea que el mes que viene será primavera?', 'En teoría. En Petersburgo, la primavera llega en junio. Si llega.'], ["Зна'чит, на сле'дующем ме'сяце?", '¿El mes que viene? (mal dicho)', 'Mes: в следующем месяце.']] },
      { ru: "Э'то теори'я. На пра'ктике — снег до ма'я.", es: 'Eso es la teoría. En la práctica, nieve hasta mayo.', e: 'eyeroll' },
    ],
    phrases: [
      ["на э'той неде'ле", 'esta semana'],
      ["в про'шлом ме'сяце", 'el mes pasado'],
      ["в сле'дующем году'", 'el año que viene'],
      ["всю неде'лю", 'toda la semana'],
      ["Ма'сленица", 'Maslenitsa (fiesta del fin del invierno)'],
      ["блины' со смета'ной", 'blinis con crema agria'],
      ["весна'", 'primavera'],
      ["чу'чело", 'muñeco, espantapájaros'],
    ],
    grammar: {
      id: 'g68', title: 'Esta semana, el año pasado',
      body: `<p><b>Semana</b> → [[на]] + prepositivo: [[на э'той неде'ле]], [[на про'шлой неде'ле]], [[на сле'дующей неде'ле]]</p>
<p><b>Mes, año, siglo</b> → [[в]] + prepositivo: [[в э'том ме'сяце]], [[в про'шлом году']], [[в двадца'том ве'ке]]</p>
<p><b>Día</b> → [[в]] + acusativo: [[в э'тот день]], [[в сре'ду]]</p>
<p>Duración («todo el…») → acusativo sin preposición: [[всю неде'лю]], [[весь день]], [[це'лый год]]. Y «cada»: [[ка'ждый день]], [[ка'ждую неде'лю]].</p>`,
      drills: [
        { q: "___ э'той неде'ле я рабо'таю.", es: 'Esta semana trabajo.', o: ["На", "В", "За"], x: 'Semana: на.' },
        { q: "В ___ году' я был в Росси'и.", es: 'El año pasado estuve en Rusia.', o: ["про'шлом", "про'шлый", "про'шлого"], x: 'В + prepositivo.' },
        { q: "Мы е'ли блины' ___ неде'лю.", es: 'Comimos blinis toda la semana.', o: ["всю", "всей", "вся"], x: 'Duración: acusativo.' },
        { q: "В ___ ме'сяце бу'дет весна'.", es: 'El mes que viene será primavera.', o: ["сле'дующем", "сле'дующий", "сле'дующей"], x: 'Месяц, masculino: следующем.' },
        { q: "Я звоню' ма'ме ___ день.", es: 'Llamo a mi mamá cada día.', o: ["ка'ждый", "ка'ждого", "в ка'ждом"], x: 'Cada día: каждый день.' },
      ],
    },
    outro: 'Siete días, cuarenta blinis. La primavera no llegó, pero yo estoy feliz. Y redonda.',
  },
  {
    id: 'l69', level: 6, ru: "Я никогда' не был в ба'не", es: 'Nunca estuve en una banya',
    scene: 'La dacha de unos amigos de Masha. Hay banya: sauna rusa de madera. Con ramas de abedul. Y nieve afuera para saltar.',
    intro: 'Hoy: nadie, nada, nunca. En ruso la negación es doble: «nunca no estuve». Más negativo, más ruso.',
    dialog: [
      { ru: "Ты когда'-нибудь {был|была'} в ба'не?", es: '¿Alguna vez estuviste en una banya?' },
      { u: [["Нет, я никогда' не {был|была'} в ба'не.", 'No, nunca estuve en una banya.'], ["Нет, я никогда' {был|была'} в ба'не.", 'Nunca estuve (mal dicho).', 'Doble negación: никогда НЕ был.']] },
      { ru: "Ничего' стра'шного. Ничего' не бои'сь. Никто' не умира'ет. Обы'чно.", es: 'No pasa nada. No tengas miedo de nada. Nadie se muere. Normalmente.', e: 'smirk' },
      { n: 'Dentro: cien grados. Masha te golpea con ramas de abedul. Por tu salud.' },
      { u: [["Я ничего' не ви'жу! Здесь о'чень жа'рко!", '¡No veo nada! ¡Aquí hace mucho calor!'], ["Я ничего' ви'жу!", 'Veo nada (mal dicho).', 'Ничего НЕ вижу.']] },
      { ru: "А тепе'рь — в снег!", es: '¡Y ahora, a la nieve!', e: 'happy' },
      { u: [["Нет! Никуда' не пойду'!", '¡No! ¡No voy a ningún lado!', 'Demasiado tarde. Ya estás en la nieve. ¿Ves? Nadie murió.'], ["Я ни с кем не пойду'!", '¡No voy con nadie!', 'No vas con nadie. Vas solo. A la nieve. Ahora.']], k: 2 },
      { n: 'Después del salto a la nieve, té con mermelada.' },
      { ru: "Ну? Как?", es: '¿Y? ¿Qué tal?' },
      { u: [["Я никогда' так хорошо' себя' не {чу'вствовал|чу'вствовала}!", '¡Nunca me sentí tan bien!', 'Eso dicen todos. Y vuelven cada semana. Es la banya.']] },
    ],
    phrases: [
      ["Я никогда' не {был|была'} в ба'не.", 'Nunca estuve en una banya.'],
      ["Я ничего' не ви'жу.", 'No veo nada.'],
      ["Никто' не зна'ет.", 'Nadie sabe.'],
      ["Ничего' стра'шного.", 'No pasa nada.'],
      ["никуда'", 'a ningún lado'],
      ["ни с кем", 'con nadie'],
      ["ба'ня", 'banya (sauna rusa)'],
      ["ве'ник", 'manojo de ramas (para la banya)'],
    ],
    grammar: {
      id: 'g69', title: 'Nadie, nada, nunca',
      body: `<p>En ruso, con [[никто']] (nadie), [[ничто'/ничего']] (nada), [[никогда']] (nunca), [[нигде']] (en ningún lugar), [[никуда']] (a ningún lugar) se pone <b>también</b> [[не]] ante el verbo:</p>
<p>[[Никто' не зна'ет.]] · [[Я ничего' не ви'жу.]] · [[Он никогда' не опа'здывает.]]</p>
<p>Se declinan como кто / что: [[никого']], [[никому']], [[ниче'м]]. Con preposición, la preposición se mete en medio: [[ни с кем]] (con nadie), [[ни о чём]] (de nada).</p>
<p>Pueden acumularse: [[Никто' никогда' ничего' не зна'ет.]] Nadie nunca sabe nada.</p>`,
      drills: [
        { q: "Я ___ не ви'жу.", es: 'No veo nada.', o: ["ничего'", "что'-то", "всё"], x: 'Nada: ничего + не.' },
        { q: "Никто' ___ зна'ет.", es: 'Nadie sabe.', o: ["не", "ни", "нет"], x: 'Doble negación: не.' },
        { q: "Он ___ не опа'здывает.", es: 'Él nunca llega tarde.', o: ["никогда'", "когда'-нибудь", "всегда'"], x: 'Nunca: никогда.' },
        { q: "Я ___ не говори'л.", es: 'No hablé con nadie.', o: ["ни с кем", "с нике'м", "никто'"], x: 'La preposición va en medio: ни с кем.' },
        { q: "Я ___ не пойду'.", es: 'No voy a ningún lado.', o: ["никуда'", "нигде'", "никогда'"], x: 'A ningún lado: никуда.' },
      ],
    },
    outro: 'Sobreviviste a la banya. Y saltaste a la nieve. Gritaste como Vadim cuando ve una araña. Pero sobreviviste.',
  },
  {
    id: 'l70', level: 6, ru: "Кто'-то звони'л", es: 'Alguien llamó',
    scene: 'De vuelta de la dacha. Masha tiene cinco llamadas perdidas de un número desconocido. Y un mensaje: «Tenemos que hablar. K.»',
    intro: 'Hoy: alguien, algo, algún día. -то y -нибудь. Uno es «alguien concreto que no sé quién es», el otro «alguien, cualquiera». Sutil. Muy sutil.',
    dialog: [
      { ru: "Кто'-то звони'л пять раз. И написа'л: «Нам на'до поговори'ть. К.»", es: 'Alguien llamó cinco veces. Y escribió: «Tenemos que hablar. K.»', e: 'surprised' },
      { u: [["Мо'жет быть, Ка'тя?", '¿Tal vez Katia?'], ["Кто'-нибудь звони'л?", '¿Llamó alguien?', 'Ya te dije que sí: кто-то llamó. Concreto.']] },
      { ru: "Ка'тя всегда' пи'шет со сма'йликами. Тут сма'йликов нет. Что'-то случи'лось.", es: 'Katia siempre escribe con emoticones. Aquí no hay. Algo pasó.' },
      { u: [["Хо'чешь, я что'-нибудь сде'лаю?", '¿Quieres que haga algo?', 'Haz té. Es lo único que funciona.'], ["Позвони' ей когда'-нибудь.", 'Llámala algún día.', '¿Algún día? ¡Ahora!']], k: 1 },
      { n: 'Masha llama. Habla en voz baja. Cuelga. Silencio.' },
      { ru: "Э'то была' Ка'тя. Она' хо'чет мне что'-то сказа'ть. Но то'лько ли'чно. В суббо'ту.", es: 'Era Katia. Quiere decirme algo. Pero solo en persona. El sábado.' },
      { u: [["Мо'жет быть, что'-то хоро'шее?", '¿Tal vez algo bueno?', 'Tal vez. Con Katia nunca se sabe. Y Vadim no contesta el teléfono. Sospechoso.']] },
    ],
    phrases: [
      ["Кто'-то звони'л.", 'Alguien llamó.'],
      ["Что'-то случи'лось.", 'Algo pasó.'],
      ["Хо'чешь что'-нибудь?", '¿Quieres algo?'],
      ["Кто'-нибудь зна'ет?", '¿Alguien sabe?'],
      ["когда'-нибудь", 'algún día, alguna vez'],
      ["где'-то", 'en algún lugar'],
      ["ли'чно", 'en persona'],
      ["сма'йлик", 'emoticono'],
    ],
    grammar: {
      id: 'g70', title: 'Alguien: -то y -нибудь',
      body: `<p><b>-то</b>: algo o alguien <b>concreto</b>, que existe, pero no sé o no digo cuál: [[Кто'-то звони'л.]] (alguien llamó, de verdad). [[Он что'-то сказа'л.]]</p>
<p><b>-нибудь</b>: <b>cualquiera</b>, no importa cuál, o si existe. Va en preguntas, órdenes, futuro: [[Кто'-нибудь звони'л?]] (¿llamó alguien?) · [[Купи' что'-нибудь.]] (compra algo, lo que sea)</p>
<p>Funciona con todos: [[где'-то]] / [[где'-нибудь]], [[когда'-то]] (una vez, antiguamente) / [[когда'-нибудь]] (alguna vez, algún día), [[како'й-то]] / [[како'й-нибудь]].</p>`,
      drills: [
        { q: "___ звони'л, но я не зна'ю кто.", es: 'Alguien llamó, pero no sé quién.', o: ["Кто'-то", "Кто'-нибудь", "Никто'"], x: 'Concreto, ya pasó: кто-то.' },
        { q: "Ты ___ был в Москве'?", es: '¿Alguna vez estuviste en Moscú?', o: ["когда'-нибудь", "когда'-то", "никогда'"], x: 'Pregunta, cualquier momento: -нибудь.' },
        { q: "Купи' ___ на у'жин.", es: 'Compra algo para la cena.', o: ["что'-нибудь", "что'-то", "ничего'"], x: 'Orden, cualquier cosa: -нибудь.' },
        { q: "Я ___ потеря'л ключи'.", es: 'Perdí las llaves en algún lugar.', o: ["где'-то", "где'-нибудь", "нигде'"], x: 'Ya pasó, lugar concreto desconocido: где-то.' },
        { q: "Он ___ сказа'л, но я не по'нял.", es: 'Dijo algo, pero no entendí.', o: ["что'-то", "что'-нибудь", "ничего'"], x: 'Algo concreto: что-то.' },
      ],
    },
    outro: 'Katia quiere decirme algo. En persona. Con Vadim desaparecido. No voy a dormir hasta el sábado.',
  },
  {
    id: 'l71', level: 6, ru: "Я не зна'ю, лю'бит ли она' цветы'", es: 'No sé si le gustan las flores',
    scene: '8 de marzo, Día de la Mujer. En Rusia los hombres regalan flores a todas las mujeres. Vadim está nervioso: quiere comprarle flores a Katia y no sabe cuáles.',
    intro: 'Hoy: «si» indirecto. «No sé si…» En ruso no es если, es ли. Y va detrás de la palabra importante.',
    dialog: [
      { who: 'vadim', ru: "Помоги'! Я не зна'ю, лю'бит ли Ка'тя ро'зы.", es: '¡Ayúdame! No sé si a Katia le gustan las rosas.' },
      { u: [["Спроси' Ма'шу, лю'бит ли она' ро'зы.", 'Pregúntale a Masha si le gustan las rosas.'], ["Спроси' Ма'шу, е'сли она' лю'бит ро'зы.", 'Pregúntale a Masha si le gustan (mal dicho).', '«Si» indirecto: ли, no если.']] },
      { ru: "Ка'тя лю'бит тюльпа'ны. Жёлтые. С де'тства.", es: 'A Katia le gustan los tulipanes. Amarillos. Desde niña.' },
      { who: 'vadim', ru: "А ты зна'ешь, придёт ли она' сего'дня?", es: '¿Y sabes si vendrá hoy?' },
      { ru: "Не зна'ю, придёт ли. Но зна'ю, что она' уже' здесь. За твое'й спино'й.", es: 'No sé si vendrá. Pero sé que ya está aquí. Detrás de ti.', e: 'smirk' },
      { who: 'katia', ru: "Вади'м! Ты купи'л тюльпа'ны? Жёлтые?!", es: '¡Vadim! ¿Compraste tulipanes? ¿¡Amarillos?!' },
      { u: [["Интере'сно, кто ему' сказа'л…", 'Me pregunto quién le dijo…', 'Nadie. Nadie le dijo nada. Feliz 8 de marzo.'], ["Интере'сно, сказа'ла ли Ма'ша…", 'Me pregunto si Masha dijo…', 'Nunca lo sabrás. Feliz 8 de marzo.']], k: 2 },
      { who: 'vadim', ru: "С Восьмы'м ма'рта, Ма'ша! Э'то тебе'.", es: '¡Feliz 8 de marzo, Masha! Esto es para ti.' },
      { n: 'Vadim le da a Masha un ramito de mimosas.' },
      { ru: "…Мимо'зы. Спаси'бо, Вади'м. Ты не безнадёжен.", es: '…Mimosas. Gracias, Vadim. No eres un caso perdido.', e: 'pleased' },
    ],
    phrases: [
      ["Я не зна'ю, придёт ли он.", 'No sé si vendrá.'],
      ["Спроси', лю'бит ли она' цветы'.", 'Pregunta si le gustan las flores.'],
      ["Интере'сно, …", 'Me pregunto… (interesante)'],
      ["С Восьмы'м ма'рта!", '¡Feliz 8 de marzo!'],
      ["ро'зы / тюльпа'ны", 'rosas / tulipanes'],
      ["мимо'за", 'mimosa'],
      ["за твое'й спино'й", 'detrás de ti'],
      ["безнадёжный", 'sin remedio, caso perdido'],
    ],
    grammar: {
      id: 'g71', title: '«Si» indirecto: ли',
      body: `<p>Para «no sé si…», «pregunta si…», el ruso usa la partícula [[ли]] (nunca [[е'сли]]).</p>
<p>Va <b>justo después</b> de la palabra sobre la que preguntas, que se pone al principio:</p>
<p>[[Я не зна'ю, придёт ли он.]] No sé si vendrá. · [[Спроси', лю'бит ли она' ро'зы.]] · [[Не зна'ю, сего'дня ли конце'рт.]] (si es HOY el concierto)</p>
<p>Si la pregunta ya tiene palabra interrogativa, no hace falta ли: [[Не зна'ю, где он.]]</p>`,
      drills: [
        { q: "Я не зна'ю, придёт ___ он.", es: 'No sé si vendrá.', o: ["ли", "е'сли", "что"], x: '«Si» indirecto: ли.' },
        { q: "Спроси', ___ ли она' ко'фе.", es: 'Pregunta si toma café.', o: ["пьёт", "она' пьёт", "е'сли пьёт"], x: 'Verbo primero, luego ли.' },
        { q: "___ бу'дет дождь, мы оста'немся до'ма.", es: 'Si llueve, nos quedamos en casa.', o: ["Е'сли", "Ли", "Бу'дет ли"], x: 'Condición: если.' },
        { q: "Не зна'ю, ___ он живёт.", es: 'No sé dónde vive.', o: ["где", "где ли", "ли где"], x: 'Con palabra interrogativa no hace falta ли.' },
        { p: '«Me pregunto si lo sabe»', o: ["Интере'сно, зна'ет ли он.", "Интере'сно, е'сли он зна'ет.", "Интере'сно, ли он зна'ет."], x: 'Знает ли он.' },
      ],
    },
    outro: 'Tulipanes amarillos. Vadim aprende. Y me regaló mimosas. No eres un caso perdido, Vadim. Casi.',
  },
  {
    id: 'l72', level: 6, ru: "Ка'тя сказа'ла, что…", es: 'Katia dijo que…',
    scene: 'Sábado. Katia y Vadim llegan juntos a casa de Masha. Katia tiene algo en la mano izquierda. Algo que brilla.',
    intro: 'Hoy: contar lo que dijo otro. «Dijo que…», «preguntó cuándo…». En ruso es fácil: no cambias los tiempos. Lo difícil es lo que dijo Katia.',
    dialog: [
      { who: 'katia', ru: "Ма'ша… Вади'м сде'лал мне предложе'ние. Мы же'нимся!", es: 'Masha… Vadim me pidió matrimonio. ¡Nos casamos!' },
      { ru: "…", es: '(Silencio.)', e: 'surprised' },
      { u: [["Ма'ша, ты слы'шала? Ка'тя сказа'ла, что они' же'нятся!", 'Masha, ¿oíste? ¡Katia dijo que se casan!'], ["Ка'тя сказа'ла, что они' жени'лись бу'дут.", '(mal dicho)', 'Estilo indirecto: mismo tiempo que lo dijo ella: что они женятся.']] },
      { ru: "Я слы'шала. Я про'сто… Вади'м. Ты спроси'л па'пу?", es: 'Lo oí. Solo que… Vadim. ¿Le preguntaste a papá?', e: 'annoyed' },
      { who: 'vadim', ru: "Да! Он спроси'л, уме'ю ли я гото'вить. Я сказа'л, что уме'ю.", es: '¡Sí! Me preguntó si sé cocinar. Le dije que sí.' },
      { u: [["Он сказа'л па'пе, что уме'ет гото'вить! Э'то непра'вда!", '¡Le dijo a papá que sabe cocinar! ¡No es verdad!', 'Ja. El primer pelmeni de Vadim parecía una piedra. Igual que el tuyo.'], ["Ма'ша, скажи' им, что ты ра'да.", 'Masha, diles que te alegras.', '…Tienes razón.']], k: 2 },
      { ru: "Ка'тя. Вади'м. Я… я о'чень ра'да. Пра'вда. Иди'те сюда'.", es: 'Katia. Vadim. Yo… me alegro mucho. De verdad. Vengan aquí.', e: 'happy' },
      { n: 'Masha los abraza a los dos. Llora. Esta vez no hay cebolla.' },
      { u: [["Э'то лук?", '¿Es la cebolla?', 'No. No es la cebolla. Fin del nivel seis.']] },
    ],
    phrases: [
      ["Она' сказа'ла, что…", 'Ella dijo que…'],
      ["Он спроси'л, где…", 'Él preguntó dónde…'],
      ["Мы же'нимся!", '¡Nos casamos!'],
      ["сде'лать предложе'ние", 'pedir matrimonio'],
      ["сва'дьба", 'boda'],
      ["Я о'чень {рад|ра'да} за вас.", 'Me alegro mucho por ustedes.'],
      ["непра'вда", 'mentira, no es verdad'],
      ["Иди'те сюда'.", 'Vengan aquí.'],
    ],
    grammar: {
      id: 'g72', title: 'Estilo indirecto',
      body: `<p>Para contar lo que dijo alguien: [[сказа'ть, что…]] (decir que), [[спроси'ть, где / когда' / кто…]] (preguntar dónde…), [[спроси'ть, … ли]] (preguntar si).</p>
<p><b>No se cambian los tiempos</b>: se usa el que usó la persona. Ella dijo: «Nos casamos» → [[Она' сказа'ла, что они' же'нятся.]] (presente, aunque ya pasó).</p>
<p>Sí cambian los pronombres: «Yo sé cocinar» → [[Он сказа'л, что уме'ет гото'вить.]]</p>
<p>Las órdenes se cuentan con [[что'бы]] + pasado: [[Она' сказа'ла, что'бы я пришёл.]] Me dijo que viniera.</p>`,
      drills: [
        { q: "Она' сказа'ла, ___ у'стала.", es: 'Dijo que estaba cansada.', o: ["что", "ли", "е'сли"], x: 'Decir que: что.' },
        { q: "Он спроси'л, ___ я живу'.", es: 'Preguntó dónde vivo.', o: ["где", "что где", "ли"], x: 'Preguntar dónde: где.' },
        { q: "Ма'ма спроси'ла, ___ ли я.", es: 'Mamá preguntó si había comido.', o: ["пое'л", "е'сли пое'л", "что пое'л"], x: 'Preguntar si: ли.' },
        { p: 'Él dijo: «Estoy cansado». → Él dijo que…', o: ["…он уста'л.", "…я уста'л.", "…он уста'нет."], x: 'Cambia el pronombre, no el tiempo.' },
        { q: "Она' сказа'ла, ___ я позвони'л.", es: 'Me dijo que llamara.', o: ["что'бы", "что", "ли"], x: 'Orden indirecta: чтобы + pasado.' },
      ],
    },
    outro: 'Mi hermana se casa. Con Vadim. El de los poemas malos. Fin del nivel seis. Necesito un té. Muy grande.',
  },
);
