/* Nivel 4 · Busco departamento (lecciones 37–48) */
LESSONS.push(
  {
    id: 'l37', level: 4, ru: "Где что стои'т?", es: '¿Dónde está cada cosa?',
    scene: 'La residencia es demasiado ruidosa. Con Masha visitan un departamento. Lo muestra Artiom, un agente inmobiliario que sonríe demasiado.',
    intro: 'Busquemos departamento. Hoy: dónde están las cosas. En ruso las cosas «están de pie», «están acostadas» o «están colgadas». En serio.',
    dialog: [
      { who: 'artyom', ru: "Проходи'те! Вот гости'ная. Тут стои'т дива'н.", es: '¡Pasen! Esta es la sala. Aquí está el sofá.' },
      { u: [["А что виси'т на стене'?", '¿Y qué hay colgado en la pared?'], ["А что стои'т на стене'?", '¿Y qué está de pie en la pared?', 'En la pared las cosas cuelgan: висит.']] },
      { who: 'artyom', ru: "Карти'на. О'чень дорога'я. Шу'тка!", es: 'Un cuadro. Muy caro. ¡Es broma!' },
      { ru: "Ха-ха. А почему' на полу' лежи'т ковёр… и носки'?", es: 'Ja, ja. ¿Y por qué en el suelo hay una alfombra… y calcetines?', e: 'eyeroll' },
      { who: 'artyom', ru: "Э… носки' не вхо'дят в це'ну.", es: 'Eh… los calcetines no están incluidos en el precio.' },
      { u: [["А где стои'т холоди'льник?", '¿Y dónde está la nevera?'], ["А где лежи'т холоди'льник?", '¿Y dónde está acostada la nevera?', 'La nevera está de pie: стоит.']] },
      { who: 'artyom', ru: "На ку'хне. Он ста'рый, но рабо'тает.", es: 'En la cocina. Es viejo, pero funciona.' },
      { ru: "Как я. Ла'дно, посмо'трим ещё.", es: 'Como yo. Bueno, veamos más.', e: 'smirk' },
      { u: [["Мне нра'вится карти'на на стене'.", 'Me gusta el cuadro de la pared.', 'Te gusta el cuadro. A mí me preocupan los calcetines.'], ["Мне не нра'вятся носки' на полу'.", 'No me gustan los calcetines del suelo.', 'Por fin una persona sensata.']], k: 2 },
    ],
    phrases: [
      ["Тут стои'т дива'н.", 'Aquí está el sofá.'],
      ["На столе' лежи'т кни'га.", 'En la mesa hay un libro.'],
      ["На стене' виси'т карти'на.", 'En la pared cuelga un cuadro.'],
      ["гости'ная / ку'хня", 'sala / cocina'],
      ["холоди'льник", 'nevera, refrigerador'],
      ["на полу'", 'en el suelo'],
      ["Проходи'те!", '¡Pasen! / ¡Adelante!'],
      ["Шу'тка!", '¡Es broma!'],
    ],
    grammar: {
      id: 'g37', title: 'Estar: стоять, лежать, висеть',
      body: `<p>Donde el español dice «estar» o «hay», el ruso dice <b>cómo</b> está la cosa:</p>
<p>[[стоя'ть]] estar de pie, vertical: [[Стака'н стои'т на столе'.]] (vasos, muebles, botellas)</p>
<p>[[лежа'ть]] estar acostado, horizontal: [[Кни'га лежи'т на столе'.]] (libros, ropa, el teléfono)</p>
<p>[[висе'ть]] estar colgado: [[Карти'на виси'т на стене'.]]</p>
<p>Ojo: [[на полу']] (en el suelo) y [[в шкафу']] (en el armario) usan una terminación especial en -у.</p>`,
      drills: [
        { q: "Кни'га ___ на столе'.", es: 'El libro está en la mesa.', o: ["лежи'т", "стои'т", "виси'т"], x: 'Libro, horizontal: лежит.' },
        { q: "Ла'мпа ___ на столе'.", es: 'La lámpara está en la mesa.', o: ["стои'т", "лежи'т", "виси'т"], x: 'Lámpara, vertical: стоит.' },
        { q: "Часы' ___ на стене'.", es: 'El reloj está en la pared.', o: ["вися'т", "стоя'т", "лежа'т"], x: 'Colgado: висят (часы es plural).' },
        { q: "Носки' лежа'т на ___.", es: 'Los calcetines están en el suelo.', o: ["полу'", "по'ле", "пол"], x: 'На полу.' },
        { q: "Пла'тье виси'т в ___.", es: 'El vestido está en el armario.', o: ["шкафу'", "шка'фе", "шкаф"], x: 'В шкафу.' },
      ],
    },
    outro: 'Un departamento con calcetines ajenos. Seguimos buscando. Artiom seguirá sonriendo.',
  },
  {
    id: 'l38', level: 4, ru: "Перее'зд", es: 'La mudanza',
    scene: 'Encontraste departamento. Pequeño, luminoso, sin calcetines. Masha viene a ayudarte con la mudanza. Es decir, a dar órdenes.',
    intro: 'Hoy: poner cosas. Si estar es стоять, poner es ставить. Si лежать, класть. Si висеть, вешать. El ruso es coherente. A veces.',
    dialog: [
      { ru: "Так. Куда' ты ста'вишь дива'н?", es: 'A ver. ¿Dónde pones el sofá?' },
      { u: [["Я ста'влю его' у окна'.", 'Lo pongo junto a la ventana.'], ["Я кладу' его' у окна'.", 'Lo acuesto junto a la ventana.', '¿Lo acuestas? Un sofá se pone de pie: ставлю.']] },
      { ru: "Хорошо'. А кни'ги? Не клади' их на пол!", es: 'Bien. ¿Y los libros? ¡No los pongas en el suelo!', e: 'annoyed' },
      { u: [["Я положу' их на по'лку.", 'Los pondré en el estante.'], ["Я поста'влю их на по'лку.", 'Los pondré (de pie) en el estante.', 'Bien pensado: en un estante los libros pueden ir de pie. Las dos sirven.']], k: 2 },
      { ru: "А э'то что? Пла'тье? Пове'сь его' в шкаф.", es: '¿Y esto qué es? ¿Un vestido? Cuélgalo en el armario.' },
      { u: [["Э'то не моё. Э'то твоё!", '¡No es mío! ¡Es tuyo!', '…Ah. Lo busqué tres meses. ¿Cómo llegó aquí? No preguntes.'], ["Я его' положу' в шкаф.", 'Lo pondré (acostado) en el armario.', 'Un vestido se cuelga: повешу.']], k: 1 },
      { ru: "Ла'дно. Куда' ты ве'шаешь карти'ну?", es: 'Bueno. ¿Dónde cuelgas el cuadro?' },
      { u: [["Над дива'ном.", 'Encima del sofá.'], ["Под дива'ном.", 'Debajo del sofá.', '¿Un cuadro debajo del sofá? Arte contemporáneo.']] },
      { ru: "Отли'чно. Тепе'рь чай. Где ча'йник?", es: 'Perfecto. Ahora té. ¿Dónde está el hervidor?' },
      { u: [["В коро'бке но'мер пятна'дцать.", 'En la caja número quince.', 'Quince cajas. Bien organizado. Casi te admiro.']] },
    ],
    phrases: [
      ["Куда' ты ста'вишь…?", '¿Dónde pones…?'],
      ["Положи' кни'ги на по'лку.", 'Pon los libros en el estante.'],
      ["Пове'сь пла'тье в шкаф.", 'Cuelga el vestido en el armario.'],
      ["у окна'", 'junto a la ventana'],
      ["над дива'ном", 'encima del sofá'],
      ["под столо'м", 'debajo de la mesa'],
      ["коро'бка", 'caja'],
      ["ча'йник", 'hervidor, tetera'],
    ],
    grammar: {
      id: 'g38', title: 'Poner: ставить, класть, вешать',
      body: `<p>Cada «estar» tiene su «poner». Y con poner se pregunta [[куда']] (a dónde) y se usa <b>acusativo</b>:</p>
<p>[[ста'вить]] / [[поста'вить]] poner de pie: [[Я ста'влю ла'мпу на стол.]]</p>
<p>[[класть]] / [[положи'ть]] poner acostado: [[Я кладу' кни'гу на стол.]]</p>
<p>[[ве'шать]] / [[пове'сить]] colgar: [[Я ве'шаю карти'ну на сте'ну.]]</p>
<p>Comparar: [[Кни'га лежи'т на столе']] (dónde: prepositivo) / [[Я кладу' кни'гу на стол]] (a dónde: acusativo).</p>`,
      drills: [
        { q: "Я ___ ла'мпу на стол.", es: 'Pongo la lámpara en la mesa.', o: ["ста'влю", "кладу'", "ве'шаю"], x: 'Vertical: ставлю.' },
        { q: "___ ключи' на стол!", es: '¡Pon las llaves en la mesa!', o: ["Положи'", "Поста'вь", "Пове'сь"], x: 'Llaves, acostadas: положи.' },
        { q: "Она' ве'шает карти'ну на ___.", es: 'Ella cuelga el cuadro en la pared.', o: ["сте'ну", "стене'", "стена'"], x: 'A dónde: acusativo.' },
        { q: "Куда' ты ___ пальто'?", es: '¿Dónde cuelgas el abrigo?', o: ["ве'шаешь", "кладёшь", "ста'вишь"], x: 'Abrigo, colgado: вешаешь.' },
        { q: "Кни'га лежи'т на ___.", es: 'El libro está en la mesa.', o: ["столе'", "стол", "стола'"], x: 'Dónde: prepositivo.' },
      ],
    },
    outro: 'Quince cajas, un sofá y mi vestido perdido. Buena mudanza.',
  },
  {
    id: 'l39', level: 4, ru: "Лу'чше и'ли ху'же?", es: '¿Mejor o peor?',
    scene: 'Masha compara tu departamento nuevo con el suyo. Con objetividad. Más o menos.',
    intro: 'Hoy: comparar. Más grande, más caro, mejor. El ruso es muy bueno comparando. Y Masha más.',
    dialog: [
      { ru: "Твоя' кварти'ра бо'льше, чем моя'.", es: 'Tu departamento es más grande que el mío.' },
      { u: [["Но твоя' уютне'е.", 'Pero el tuyo es más acogedor.', 'Es verdad. Más acogedor y con gato. Gano yo.'], ["Но твоя' бо'лее большо'й.", 'Pero el tuyo más grande (mal dicho).', 'Más grande = больше. Sin «более».']] },
      { ru: "И твоя' светле'е. А моя' деше'вле.", es: 'Y el tuyo es más luminoso. Pero el mío es más barato.' },
      { u: [["Моя' доро'же, да.", 'El mío es más caro, sí.', 'Más caro. Esa palabra la vas a usar mucho aquí.'], ["Моя' бо'лее дорога'я…", 'El mío más caro… (poco natural)', 'Más caro = дороже. Una sola palabra.']] },
      { ru: "Ты пла'тишь бо'льше, чем я. Но ты живёшь бли'же к университе'ту.", es: 'Más caro. Pagas más que yo. Pero vives más cerca de la universidad.' },
      { u: [["Зна'чит, я бу'ду ча'ще приходи'ть на уро'ки!", '¡O sea que iré más a menudo a clase!', 'Eso quiero verlo. Con la hora. En punto.'], ["Зна'чит, я бу'ду спать бо'льше!", '¡O sea que dormiré más!', 'Sincero. Peligroso, pero sincero.']], k: 2 },
      { ru: "Ну что ж. Твоя' кварти'ра хоро'шая. Но моя' лу'чше.", es: 'Bueno. Tu departamento es bueno. Pero el mío es mejor.', e: 'smirk' },
      { u: [["Почему'?", '¿Por qué?']] },
      { ru: "Потому' что у меня' есть Пельме'нь.", es: 'Porque yo tengo a Pelmén.', e: 'happy' },
    ],
    phrases: [
      ["бо'льше / ме'ньше", 'más grande, más / más pequeño, menos'],
      ["лу'чше / ху'же", 'mejor / peor'],
      ["доро'же / деше'вле", 'más caro / más barato'],
      ["бли'же / да'льше", 'más cerca / más lejos'],
      ["ча'ще", 'más a menudo'],
      ["…, чем моя'", '…que el mío/la mía'],
      ["ую'тный", 'acogedor'],
      ["Ну что ж.", 'Bueno, pues.'],
    ],
    grammar: {
      id: 'g39', title: 'Comparar: -ее, чем',
      body: `<p>El comparativo simple añade <b>-ее</b> y no cambia: [[краси'вый]] → [[краси'вее]] · [[све'тлый]] → [[светле'е]] · [[интере'сный]] → [[интере'снее]]</p>
<p>Muchos son irregulares (y muy usados): [[большо'й]] → [[бо'льше]] · [[ма'ленький]] → [[ме'ньше]] · [[хоро'ший]] → [[лу'чше]] · [[плохо'й]] → [[ху'же]] · [[дорого'й]] → [[доро'же]] · [[дешёвый]] → [[деше'вле]] · [[бли'зкий]] → [[бли'же]] · [[далёкий]] → [[да'льше]] · [[ча'сто]] → [[ча'ще]]</p>
<p>«Que» = [[чем]] (con coma): [[Моя' кварти'ра бо'льше, чем твоя'.]]</p>
<p>También se puede usar genitivo sin «чем»: [[Он ста'рше меня'.]]</p>`,
      drills: [
        { q: "Э'та кварти'ра ___, чем та.", es: 'Este departamento es más grande que ese.', o: ["бо'льше", "бо'лее", "больша'я"], x: 'Grande → больше.' },
        { q: "Чай ___, чем ко'фе.", es: 'El té es mejor que el café.', o: ["лу'чше", "хоро'ше", "лу'чший"], x: 'Bueno → лучше.' },
        { q: "В Москве' ___.", es: 'En Moscú es más caro.', o: ["доро'же", "дороги'е", "доро'гее"], x: 'Дорогой → дороже.' },
        { q: "Он ста'рше ___.", es: 'Él es mayor que yo.', o: ["меня'", "я", "мне"], x: 'Sin чем: genitivo.' },
        { q: "Э'та кни'га ___ той.", es: 'Este libro es más interesante que aquel.', o: ["интере'снее", "интере'сней чем", "интере'сная"], x: 'Интересный → интереснее.' },
      ],
    },
    outro: 'Tu departamento es bueno. El mío es mejor. Es un hecho científico.',
  },
  {
    id: 'l40', level: 4, ru: "Са'мый лу'чший", es: 'El mejor de todos',
    scene: 'Masha te lleva a probar «el mejor pirozhok de Petersburgo». Hay cola. Siempre hay cola.',
    intro: 'Hoy: los superlativos. Lo más, lo mejor, lo peor. Para opinar con exageración. Como yo.',
    dialog: [
      { ru: "Э'то са'мая лу'чшая пирожко'вая в го'роде.", es: 'Esta es la mejor tienda de pirozhkí de la ciudad.' },
      { u: [["И са'мая дли'нная о'чередь!", '¡Y la cola más larga!'], ["И са'мый дли'нный о'чередь!", '¡Y la cola más largo! (mal dicho)', 'Очередь es femenina: самая длинная.']] },
      { ru: "Хоро'шие ве'щи сто'ят ожида'ния. Как я.", es: 'Las cosas buenas valen la espera. Como yo.', e: 'smirk' },
      { n: 'Veinte minutos después.' },
      { u: [["Э'то са'мый вку'сный пирожо'к в мое'й жи'зни!", '¡Es el pirozhok más rico de mi vida!'], ["Э'то са'мое вку'сное пирожо'к!", '¡El pirozhok más rico! (mal dicho)', 'Пирожок es masculino: самый вкусный.']] },
      { ru: "Ви'дишь? Я всегда' права'.", es: '¿Ves? Siempre tengo razón.', e: 'happy' },
      { u: [["Ты са'мая у'мная преподава'тельница.", 'Eres la profesora más inteligente.', 'Ya lo sabía. Pero repítelo. Más alto.'], ["А како'й са'мый плохо'й?", '¿Y cuál es el peor?', 'El de la estación. Nunca. NUNCA.']], k: 2 },
      { ru: "А тепе'рь — са'мое ва'жное: ещё два пирожка'. С ка'пустой.", es: 'Y ahora lo más importante: dos pirozhkí más. De repollo.' },
    ],
    phrases: [
      ["са'мый лу'чший", 'el mejor'],
      ["са'мая краси'вая", 'la más bonita'],
      ["са'мое ва'жное", 'lo más importante'],
      ["о'чередь", 'cola, fila'],
      ["пирожо'к / пирожки'", 'pirozhok / pirozhkí (empanadillas)'],
      ["с ка'пустой", 'de repollo'],
      ["Я всегда' {прав|права'}.", 'Siempre tengo razón.'],
      ["в мое'й жи'зни", 'en mi vida'],
    ],
    grammar: {
      id: 'g40', title: 'El superlativo: самый',
      body: `<p>[[са'мый]] + adjetivo, y los dos concuerdan con el sustantivo:</p>
<p>[[са'мый большо'й го'род]] · [[са'мая краси'вая у'лица]] · [[са'мое ва'жное сло'во]] · [[са'мые вку'сные пирожки']]</p>
<p>«De…» se dice con [[в]] + prepositivo: [[са'мый вку'сный в го'роде]], o con [[из]] + genitivo: [[лу'чший из всех]].</p>
<p>Con [[лу'чший]] y [[ху'дший]] el «самый» es opcional: [[лу'чший друг]] = [[са'мый лу'чший друг]].</p>`,
      drills: [
        { q: "Э'то ___ большо'й го'род.", es: 'Es la ciudad más grande.', o: ["са'мый", "са'мая", "са'мое"], x: 'Город → самый.' },
        { q: "Она' са'мая ___.", es: 'Ella es la más inteligente.', o: ["у'мная", "у'мный", "умне'е"], x: 'Concuerda: умная.' },
        { q: "Э'то ___ ва'жное.", es: 'Es lo más importante.', o: ["са'мое", "са'мый", "са'мая"], x: 'Lo más… = самое.' },
        { q: "Са'мый вку'сный пирожо'к ___ го'роде.", es: 'El pirozhok más rico de la ciudad.', o: ["в", "из", "на"], x: 'В городе.' },
        { q: "Ты мой ___ друг.", es: 'Eres mi mejor amigo.', o: ["лу'чший", "лу'чше", "хоро'ший"], x: 'Лучший = el mejor.' },
      ],
    },
    outro: 'Cuatro pirozhkí. La mejor tarde del mes. No se lo digas a mi báscula.',
  },
  {
    id: 'l41', level: 4, ru: "Нет горя'чей воды'", es: 'No hay agua caliente',
    scene: 'Domingo, 8 de la mañana. En tu edificio cortaron el agua caliente. En verano, en Rusia, pasa. Por dos semanas.',
    intro: 'Hoy: los adjetivos en otros casos. «Sin agua caliente», «en el departamento nuevo». Y la famosa tradición rusa de cortar el agua caliente.',
    dialog: [
      { u: [["Ма'ша! В мое'й но'вой кварти'ре нет горя'чей воды'!", '¡Masha! ¡En mi departamento nuevo no hay agua caliente!'], ["Ма'ша! В мой но'вый кварти'ра нет горя'чая вода'!", '(mal dicho)', 'Casos, casos: в моей новой квартире нет горячей воды.']] },
      { ru: "Коне'чно, нет. Сейча'с ию'нь. Э'то тради'ция.", es: 'Claro que no. Es junio. Es tradición.', e: 'smirk' },
      { u: [["Кака'я стра'нная тради'ция!", '¡Qué tradición tan rara!'], ["Как до'лго?", '¿Por cuánto tiempo?', 'Dos semanas. A veces tres. Bienvenido.']], k: 2 },
      { ru: "Две неде'ли без горя'чей воды'. Мо'жно гре'ть во'ду в большо'й кастрю'ле.", es: 'Dos semanas sin agua caliente. Puedes calentar agua en una olla grande.' },
      { u: [["У меня' нет большо'й кастрю'ли.", 'No tengo una olla grande.'], ["У меня' нет больша'я кастрю'ля.", 'No tengo olla grande (mal dicho).', 'Нет + genitivo, también el adjetivo: большой кастрюли.']] },
      { ru: "Возьми' мою'. И приходи' ко мне в ду'ш. В на'шем до'ме вода' есть.", es: 'Toma la mía. Y ven a ducharte a mi casa. En nuestro edificio hay agua.', e: 'pleased' },
      { u: [["Ты спаса'ешь мне жизнь!", '¡Me salvas la vida!', 'Lo sé. Trae tu toalla. Las mías son de Pelmén.']] },
    ],
    phrases: [
      ["Нет горя'чей воды'.", 'No hay agua caliente.'],
      ["в но'вой кварти'ре", 'en el departamento nuevo'],
      ["в на'шем до'ме", 'en nuestro edificio'],
      ["кастрю'ля", 'olla'],
      ["гре'ть во'ду", 'calentar agua'],
      ["принима'ть душ", 'ducharse'],
      ["полоте'нце", 'toalla'],
      ["Ты спаса'ешь мне жизнь!", '¡Me salvas la vida!'],
    ],
    grammar: {
      id: 'g41', title: 'Adjetivos: prepositivo y genitivo',
      body: `<p>El adjetivo también se declina. Prepositivo (¿dónde?, ¿sobre qué?):</p>
<p>él / ello → <b>-ом / -ем</b>: [[в но'вом до'ме]], [[в на'шем го'роде]] · ella → <b>-ой / -ей</b>: [[в но'вой кварти'ре]], [[в мое'й ко'мнате]]</p>
<p>Genitivo (de, sin, no hay):</p>
<p>él / ello → <b>-ого / -его</b> (se lee «-ova»): [[нет горя'чего ча'я]] · ella → <b>-ой / -ей</b>: [[нет горя'чей воды']]</p>
<p>Fíjate: en femenino, prepositivo y genitivo son iguales (-ой).</p>`,
      drills: [
        { q: "Я живу' в ___ до'ме.", es: 'Vivo en una casa nueva.', o: ["но'вом", "но'вый", "но'вой"], x: 'Masculino prepositivo: -ом.' },
        { q: "Нет ___ воды'.", es: 'No hay agua caliente.', o: ["горя'чей", "горя'чая", "горя'чую"], x: 'Femenino genitivo: -ей.' },
        { q: "Мы в ___ ко'мнате.", es: 'Estamos en mi cuarto.', o: ["мое'й", "моя'", "мою'"], x: 'Femenino prepositivo: моей.' },
        { q: "У меня' нет ___ бра'та.", es: 'No tengo hermano mayor.', o: ["ста'ршего", "ста'рший", "ста'ршем"], x: 'Masculino genitivo: -его.' },
        { q: "Он живёт в ___ го'роде.", es: 'Vive en una ciudad grande.', o: ["большо'м", "большо'й", "большо'го"], x: 'Masculino prepositivo: -ом.' },
      ],
    },
    outro: 'Dos semanas de duchas en mi casa. Pelmén ya te considera de la familia. Le robas su toalla.',
  },
  {
    id: 'l42', level: 4, ru: "Мы покупа'ем но'вую ла'мпу", es: 'Compramos una lámpara nueva',
    scene: 'Tienda de muebles enorme en las afueras. Masha tiene una lista. Tú tienes un presupuesto. No coinciden.',
    intro: 'Hoy: adjetivos en acusativo. Comprar una lámpara nueva, ver un sofá grande. Y discutir con Masha. Eso es gratis.',
    dialog: [
      { ru: "Тебе' ну'жен но'вый стол, но'вая ла'мпа и большо'е зе'ркало.", es: 'Necesitas una mesa nueva, una lámpara nueva y un espejo grande.' },
      { u: [["Я хочу' купи'ть то'лько ла'мпу.", 'Solo quiero comprar una lámpara.'], ["Я хочу' купи'ть но'вая ла'мпа.", 'Quiero comprar lámpara nueva (mal dicho).', 'Acusativo: новую лампу.']] },
      { ru: "Смотри', кака'я краси'вая! Бери' э'ту жёлтую ла'мпу.", es: '¡Mira qué bonita! Llévate esta lámpara amarilla.' },
      { u: [["Я ви'жу си'нюю. Она' деше'вле.", 'Veo una azul. Es más barata.'], ["Я ви'жу си'няя.", 'Veo azul (mal dicho).', 'Acusativo: синюю.']] },
      { ru: "Си'няя — ску'чная. Ты покупа'ешь ла'мпу и'ли настрое'ние?", es: 'La azul es aburrida. ¿Compras una lámpara o un estado de ánimo?', e: 'eyeroll' },
      { u: [["Ла'дно, беру' жёлтую.", 'Bueno, me llevo la amarilla.', 'Sabia decisión. La segunda que tomas este mes.'], ["Я беру' си'нюю. Э'то моя' кварти'ра!", '¡Me llevo la azul! ¡Es mi departamento!', 'Vale, vale. Rebelde. La azul. Tu casa, tu tristeza.']], k: 2 },
      { ru: "А тепе'рь — фрикаде'льки. Без фрикаде'лек я не ухожу'.", es: 'Y ahora: albóndigas. Sin albóndigas no me voy.', e: 'happy' },
    ],
    phrases: [
      ["Тебе' ну'жен стол.", 'Necesitas una mesa.'],
      ["Тебе' нужна' ла'мпа.", 'Necesitas una lámpara.'],
      ["Я беру' э'ту.", 'Me llevo esta.'],
      ["жёлтый / си'ний", 'amarillo / azul'],
      ["кра'сный / зелёный", 'rojo / verde'],
      ["бе'лый / чёрный", 'blanco / negro'],
      ["зе'ркало", 'espejo'],
      ["ску'чный", 'aburrido'],
    ],
    grammar: {
      id: 'g42', title: 'Adjetivos en acusativo',
      body: `<p>Femenino: <b>-ую / -юю</b>: [[Я покупа'ю но'вую ла'мпу.]] · [[Я ви'жу си'нюю ла'мпу.]]</p>
<p>Masculino de <b>cosa</b> y neutro: igual que el nominativo: [[Я покупа'ю но'вый стол]], [[большо'е зе'ркало]].</p>
<p>Masculino de <b>persona o animal</b>: como el genitivo, <b>-ого / -его</b>: [[Я ви'жу но'вого студе'нта.]]</p>
<p>Y «necesitar»: [[ну'жен]] / [[нужна']] / [[ну'жно]] / [[нужны']] concuerda con la cosa: [[Мне ну'жен стол]], [[Мне нужна' ла'мпа]].</p>`,
      drills: [
        { q: "Я покупа'ю ___ ла'мпу.", es: 'Compro una lámpara nueva.', o: ["но'вую", "но'вая", "но'вой"], x: 'Femenino acusativo: -ую.' },
        { q: "Он ви'дит ___ стол.", es: 'Ve una mesa grande.', o: ["большо'й", "большо'го", "большу'ю"], x: 'Masculino de cosa: no cambia.' },
        { q: "Я зна'ю ___ студе'нта.", es: 'Conozco al estudiante nuevo.', o: ["но'вого", "но'вый", "но'вую"], x: 'Persona masculina: -ого.' },
        { q: "Мне ___ стол.", es: 'Necesito una mesa.', o: ["ну'жен", "нужна'", "ну'жно"], x: 'Стол → нужен.' },
        { q: "Тебе' ___ ла'мпа?", es: '¿Necesitas una lámpara?', o: ["нужна'", "ну'жен", "нужны'"], x: 'Лампа → нужна.' },
      ],
    },
    outro: 'Lámpara, espejo y doce albóndigas. Seis eran mías. Siete. Bueno, ocho.',
  },
  {
    id: 'l43', level: 4, ru: "Сосе'дка, кото'рая поёт", es: 'La vecina que canta',
    scene: 'Tu vecina de arriba canta ópera. A las siete de la mañana. Masha viene a investigar.',
    intro: 'Hoy: «que». La vecina que canta, el departamento que alquilaste. Es который. Se declina, claro.',
    dialog: [
      { u: [["Ма'ша, у меня' есть сосе'дка, кото'рая поёт в семь утра'.", 'Masha, tengo una vecina que canta a las siete de la mañana.'], ["Ма'ша, у меня' есть сосе'дка, кото'рый поёт.", 'Masha, tengo una vecina que canta (mal dicho).', 'Соседка es ella: которая.']] },
      { ru: "Поёт? Что поёт?", es: '¿Canta? ¿Qué canta?' },
      { u: [["О'перу. Гро'мко.", 'Ópera. Fuerte.']] },
      { n: 'Se oye desde arriba un aria impresionante.' },
      { ru: "Подожди'… Я зна'ю э'тот го'лос. Э'то Ни'на Петро'вна, кото'рая поёт в Мари'инском теа'тре!", es: 'Espera… Conozco esa voz. ¡Es Nina Petrovna, la que canta en el teatro Mariinski!', e: 'surprised' },
      { u: [["Та са'мая, о кото'рой ты говори'ла?", '¿La misma de la que hablabas?'], ["Та са'мая, о кото'рая ты говори'ла?", 'La misma de la que hablabas (mal dicho).', 'Después de о: о которой.']] },
      { ru: "Да! Э'то певи'ца, кото'рую я обожа'ю! Ты живёшь под звездо'й!", es: '¡Sí! ¡Es la cantante que adoro! ¡Vives debajo de una estrella!', e: 'happy' },
      { u: [["Мо'жет быть, но я хочу' спать.", 'Puede ser, pero quiero dormir.', 'Bárbaro. Estás durmiendo debajo de la mejor voz de Rusia. Duerme después de muerto.'], ["Хо'чешь, я попрошу' авто'граф?", '¿Quieres que le pida un autógrafo?', '¿Harías eso? …Sí. Sí, quiero. Dos.']], k: 2 },
    ],
    phrases: [
      ["сосе'дка, кото'рая поёт", 'la vecina que canta'],
      ["дом, в кото'ром я живу'", 'la casa en la que vivo'],
      ["го'лос", 'voz'],
      ["гро'мко / ти'хо", 'fuerte / bajo, en silencio'],
      ["певи'ца", 'cantante (mujer)'],
      ["Я обожа'ю…", 'Adoro…'],
      ["Подожди'!", '¡Espera!'],
      ["та са'мая", 'la misma'],
    ],
    grammar: {
      id: 'g43', title: '«Que»: который',
      body: `<p>[[кото'рый]] une dos frases como «que, el cual». Toma el <b>género y número</b> de la palabra a la que se refiere…</p>
<p>…pero el <b>caso</b> de su papel en la segunda frase:</p>
<p>[[Сосе'дка, кото'рая поёт.]] (ella canta: nominativo) · [[Певи'ца, кото'рую я обожа'ю.]] (adoro a ella: acusativo) · [[Певи'ца, о кото'рой ты говори'л.]] (hablabas de ella: prepositivo) · [[Дом, в кото'ром я живу'.]]</p>
<p>Siempre con coma delante.</p>`,
      drills: [
        { q: "Э'то сосе'дка, ___ поёт.", es: 'Es la vecina que canta.', o: ["кото'рая", "кото'рый", "кото'рую"], x: 'Ella canta: nominativo femenino.' },
        { q: "Э'то дом, в ___ я живу'.", es: 'Es la casa en la que vivo.', o: ["кото'ром", "кото'рый", "кото'рой"], x: 'В + prepositivo masculino.' },
        { q: "Э'то кни'га, ___ я чита'ю.", es: 'Es el libro que leo.', o: ["кото'рую", "кото'рая", "кото'рой"], x: 'Leo (a) el libro: acusativo femenino.' },
        { q: "Где студе'нт, ___ я ви'дел вчера'?", es: '¿Dónde está el estudiante que vi ayer?', o: ["кото'рого", "кото'рый", "кото'рому"], x: 'Persona masculina en acusativo: которого.' },
        { q: "Э'то лю'ди, ___ живу'т здесь.", es: 'Es la gente que vive aquí.', o: ["кото'рые", "кото'рый", "кото'рых"], x: 'Plural nominativo.' },
      ],
    },
    outro: 'Tu vecina es una estrella de la ópera. Y tú te quejas. Tráeme el autógrafo. Dos.',
  },
  {
    id: 'l44', level: 4, ru: "Свой", es: 'Lo suyo',
    scene: 'Pelmén se mudó a una caja de tu mudanza. Masha lo trajo de visita. Se niega a salir.',
    intro: 'Hoy: свой. El posesivo que vuelve al sujeto. «Pelmén está en SU caja». Muy ruso. Muy de gato.',
    dialog: [
      { ru: "Пельме'нь не хо'чет выходи'ть. Он лю'бит свою' но'вую коро'бку.", es: 'Pelmén no quiere salir. Le encanta su caja nueva.' },
      { u: [["Э'то моя' коро'бка!", '¡Es mi caja!'], ["Э'то своя' коро'бка!", '¡Es su propia caja! (mal dicho)', 'Свой no va con «это». Aquí: моя коробка.']] },
      { ru: "Была' твоя'. Тепе'рь его'. Таки'е пра'вила.", es: 'Era tuya. Ahora es suya. Son las reglas.', e: 'smirk' },
      { u: [["А ты лю'бишь свою' рабо'ту?", '¿Y tú quieres tu trabajo?'], ["А ты лю'бишь твою' рабо'ту?", '¿Y tú quieres tu trabajo? (poco natural)', 'Con «ты» como sujeto, en ruso se dice «свою работу».']] },
      { ru: "Люблю'. Свою' рабо'ту, свой чай и своего' кота'.", es: 'Sí. Mi trabajo, mi té y mi gato.', e: 'pleased' },
      { u: [["А его' коро'бку?", '¿Y su caja?', 'Su caja ya no es tuya. Acéptalo. Es la vida.'], ["А свою' коро'бку?", '¿Y tu caja? (mal dicho)', 'La caja es de Pelmén, no mía: его коробку.']] },
      { ru: "Ла'дно. Я забира'ю своего' кота' вме'сте с его' коро'бкой.", es: 'Bueno. Me llevo a mi gato junto con su caja.' },
    ],
    phrases: [
      ["свой / своя' / своё / свои'", 'su propio, mi propio…'],
      ["Он лю'бит свою' коро'бку.", 'Le encanta su caja.'],
      ["Я люблю' свою' рабо'ту.", 'Me encanta mi trabajo.'],
      ["выходи'ть", 'salir'],
      ["пра'вила", 'reglas'],
      ["забира'ть", 'llevarse, recoger'],
      ["Таки'е пра'вила.", 'Son las reglas.'],
      ["вме'сте с", 'junto con'],
    ],
    grammar: {
      id: 'g44', title: 'Свой: «su propio»',
      body: `<p>[[свой]] significa «el suyo / el mío / el tuyo» cuando pertenece al <b>sujeto</b> de la frase. Se declina como мой.</p>
<p>[[Он лю'бит свою' коро'бку.]] Le encanta su (propia) caja. · [[Он лю'бит его' коро'бку.]] Le encanta la caja de OTRO (de él).</p>
<p>Con я y ты se puede usar мой/твой o свой; con él/ella/ellos <b>hay</b> que distinguir: свой (propio) / его, её, их (de otro).</p>
<p>No se usa como sujeto ni con «это»: [[Э'то моя' коро'бка]], no «своя».</p>`,
      drills: [
        { q: "Ма'ша лю'бит ___ кота'.", es: 'Masha quiere a su (propio) gato.', o: ["своего'", "её", "свой"], x: 'Es de Masha, que es el sujeto: своего.' },
        { q: "Он чита'ет ___ кни'гу.", es: 'Él lee su (propio) libro.', o: ["свою'", "своя'", "его'"], x: 'Femenino acusativo: свою.' },
        { q: "Ка'тя у'чит ___ бра'та.", es: 'Katia enseña a su hermano (de él, de otra persona).', o: ["его'", "своего'", "свой"], x: 'De otro: его.' },
        { q: "Э'то ___ кварти'ра.", es: 'Es mi departamento.', o: ["моя'", "своя'", "свою'"], x: 'Con это: моя.' },
        { q: "Они' лю'бят ___ го'род.", es: 'Quieren a su ciudad.', o: ["свой", "свою'", "своё"], x: 'Город, masculino de cosa: свой.' },
      ],
    },
    outro: 'Te robamos la caja. Así es la vida con gatos. Y con rusas.',
  },
  {
    id: 'l45', level: 4, ru: "Купи' себе' что'-нибудь", es: 'Cómprate algo',
    scene: 'Tu primer sueldo de las clases particulares de español. Masha insiste en que te compres algo. Para ti. No para ella. O sí.',
    intro: 'Hoy: себя. «A mí mismo», «para sí». Una palabra que nunca es sujeto. Es humilde. No como yo.',
    dialog: [
      { ru: "Пе'рвая зарпла'та! Купи' себе' что'-нибудь.", es: '¡Primer sueldo! Cómprate algo.' },
      { u: [["Что я могу' купи'ть себе'?", '¿Qué me puedo comprar?'], ["Что я могу' купи'ть меня'?", '¿Qué puedo comprar a mí? (mal dicho)', 'Para uno mismo: себе.']] },
      { ru: "Не зна'ю. Шарф. Кни'гу. Торт. Мне.", es: 'No sé. Una bufanda. Un libro. Una tarta. Para mí.', e: 'smirk' },
      { u: [["Торт тебе' и'ли себе'?", '¿La tarta para ti o para mí?', 'Para ti. Digo, para ambos. Generoso de tu parte.'], ["Ты всегда' ду'маешь о себе'!", '¡Siempre piensas en ti misma!', 'Alguien tiene que hacerlo. Pelmén no piensa en nadie.']], k: 2 },
      { ru: "Серьёзно: на'до люби'ть себя'. И забо'титься о себе'.", es: 'En serio: hay que quererse a uno mismo. Y cuidarse.', e: 'pleased' },
      { u: [["Ты ве'ришь в себя'?", '¿Crees en ti misma?'], ["Ты ве'ришь в тебя'?", '¿Crees en ti? (mal dicho)', 'En ti misma: в себя.']] },
      { ru: "Коне'чно. Я в себя' ве'рю. А иногда' — в тебя'.", es: 'Claro. Creo en mí. Y a veces, en ti.', e: 'happy' },
      { u: [["Спаси'бо. Я куплю' торт. Нам.", 'Gracias. Compraré una tarta. Para nosotros.', 'Чудесно. Con chocolate.']] },
    ],
    phrases: [
      ["Купи' себе' что'-нибудь.", 'Cómprate algo.'],
      ["Расскажи' о себе'.", 'Háblame de ti.'],
      ["На'до люби'ть себя'.", 'Hay que quererse a uno mismo.'],
      ["Я в себя' ве'рю.", 'Creo en mí.'],
      ["зарпла'та", 'sueldo'],
      ["шарф", 'bufanda'],
      ["торт", 'tarta, pastel'],
      ["забо'титься о себе'", 'cuidarse'],
    ],
    grammar: {
      id: 'g45', title: 'Себя: a uno mismo',
      body: `<p>[[себя']] es el pronombre reflexivo para <b>todas las personas</b>. Nunca es sujeto, por eso no tiene nominativo:</p>
<p>acusativo / genitivo [[себя']] · dativo / prepositivo [[себе']] · instrumental [[собо'й]]</p>
<p>[[Купи' себе' торт.]] Cómprate una tarta. · [[Он ду'мает то'лько о себе'.]] Solo piensa en sí mismo. · [[Возьми' с собо'й зо'нтик.]] Llévate un paraguas.</p>
<p>Expresiones: [[чу'вствовать себя']] (sentirse): [[Как ты себя' чу'вствуешь?]] ¿Cómo te sientes?</p>`,
      drills: [
        { q: "Купи' ___ шарф.", es: 'Cómprate una bufanda.', o: ["себе'", "себя'", "тебе'"], x: 'Dativo: себе.' },
        { q: "Как ты ___ чу'вствуешь?", es: '¿Cómo te sientes?', o: ["себя'", "себе'", "тебя'"], x: 'Чувствовать себя.' },
        { q: "Он ду'мает то'лько о ___.", es: 'Solo piensa en sí mismo.', o: ["себе'", "себя'", "нём"], x: 'О + prepositivo: себе.' },
        { q: "Возьми' зо'нтик с ___.", es: 'Llévate un paraguas.', o: ["собо'й", "себя'", "тобо'й"], x: 'С собой.' },
        { q: "Я ве'рю в ___.", es: 'Creo en mí.', o: ["себя'", "меня'", "себе'"], x: 'В + acusativo: себя.' },
      ],
    },
    outro: 'Tarta de chocolate. Te compraste algo. Para nosotros. Es lo mismo. Más o menos.',
  },
  {
    id: 'l46', level: 4, ru: "Мы с ним", es: 'Él y yo',
    scene: 'Vadim se peleó con su compañero de cuarto. Te pide consejo. Masha opina sin que nadie se lo pida.',
    intro: 'Hoy: todos los pronombres en todos los casos. Una tabla. Sí, una tabla. Es el precio de la libertad.',
    dialog: [
      { who: 'vadim', ru: "Я поссо'рился с Анто'ном. Мы с ним не разгова'риваем.", es: 'Me peleé con Antón. Él y yo no nos hablamos.' },
      { u: [["Почему'? Что у вас случи'лось?", '¿Por qué? ¿Qué les pasó?'], ["Почему'? Что у их случи'лось?", '¿Qué les pasó a ellos? (mal dicho)', 'Después de у: у них. Pero aquí: у вас.']] },
      { who: 'vadim', ru: "Он съел мой торт. Тот, кото'рый я купи'л для неё.", es: 'Se comió mi tarta. La que compré para ella.' },
      { u: [["Для неё? Для кого'?", '¿Para ella? ¿Para quién?'], ["Для она'?", '¿Para ella? (mal dicho)', 'Для неё.']] },
      { who: 'vadim', ru: "Ну… для одно'й де'вушки. Я ей пишу' стихи'.", es: 'Bueno… para una chica. Le escribo poemas.' },
      { ru: "Пло'хие стихи'? В библиоте'чной кни'ге?", es: '¿Malos poemas? ¿En un libro de la biblioteca?', e: 'surprised' },
      { who: 'vadim', ru: "Отку'да ты зна'ешь?!", es: '¡¿Cómo lo sabes?!' },
      { u: [["Вади'м, а ты с ней говори'л?", 'Vadim, ¿y hablaste con ella?', 'Ahora sí que no habla con nadie. Mira cómo se pone rojo.'], ["Ма'ша, э'то он!", '¡Masha, es él!', 'Ya lo veo. Vadim. Los poemas. Lo sabía. No lo sabía.']], k: 2 },
      { ru: "Вади'м. Мы с тобо'й поговори'м. По'зже. Без свиде'телей.", es: 'Vadim. Tú y yo hablaremos. Más tarde. Sin testigos.', e: 'smirk' },
    ],
    phrases: [
      ["мы с ним", 'él y yo'],
      ["мы с тобо'й", 'tú y yo'],
      ["поссо'риться", 'pelearse'],
      ["Что случи'лось?", '¿Qué pasó?'],
      ["для неё / для него'", 'para ella / para él'],
      ["Я ей пишу'.", 'Le escribo (a ella).'],
      ["поговори'ть", 'hablar, charlar un rato'],
      ["по'зже", 'más tarde'],
    ],
    grammar: {
      id: 'g46', title: 'Los pronombres en todos los casos',
      body: `<p><b>я</b>: [[меня']] · [[мне]] · [[мной]] · [[обо мне]] — <b>ты</b>: [[тебя']] · [[тебе']] · [[тобо'й]] · [[о тебе']]</p>
<p><b>он</b>: [[его']] · [[ему']] · [[им]] · [[о нём]] — <b>она</b>: [[её]] · [[ей]] · [[ей]] · [[о ней]]</p>
<p><b>мы</b>: [[нас]] · [[нам]] · [[на'ми]] · [[о нас]] — <b>вы</b>: [[вас]] · [[вам]] · [[ва'ми]] — <b>они</b>: [[их]] · [[им]] · [[и'ми]] · [[о них]]</p>
<p>(orden: acusativo/genitivo · dativo · instrumental · prepositivo)</p>
<p>Regla de oro: después de preposición, él/ella/ellos llevan <b>н-</b>: [[у него']], [[с ней]], [[к ним]], [[для них]].</p>
<p>«Él y yo» en ruso: [[мы с ним]] (literalmente «nosotros con él»).</p>`,
      drills: [
        { q: "Мы с ___ друзья'.", es: 'Él y yo somos amigos.', o: ["ним", "им", "он"], x: 'С + instrumental con н: ним.' },
        { q: "Я пишу' ___.", es: 'Le escribo (a ella).', o: ["ей", "её", "ней"], x: 'Dativo sin preposición: ей.' },
        { q: "Э'то для ___.", es: 'Es para ellos.', o: ["них", "их", "им"], x: 'Preposición: них.' },
        { q: "Ты ___ ви'дишь?", es: '¿Nos ves?', o: ["нас", "нам", "мы"], x: 'Acusativo: нас.' },
        { q: "Пойдём со ___!", es: '¡Ven conmigo!', o: ["мной", "меня'", "мне"], x: 'Instrumental: мной.' },
        { q: "Я ду'маю о ___.", es: 'Pienso en él.', o: ["нём", "его'", "нему'"], x: 'О нём.' },
      ],
    },
    outro: 'El poeta misterioso era Vadim. Pobre. Los poemas eran malos, pero la intención… también era mala.',
  },
  {
    id: 'l47', level: 4, ru: "Ты уме'ешь гото'вить?", es: '¿Sabes cocinar?',
    scene: 'Masha te enseña a hacer pelmeni de su abuela. Por videollamada con la abuela. Tres generaciones juzgándote.',
    intro: 'Hoy: poder y saber. мочь es poder (tener la posibilidad), уметь es saber hacer. Hoy no sabes hacer pelmeni. Mañana tampoco.',
    dialog: [
      { ru: "Ты уме'ешь гото'вить пельме'ни?", es: '¿Sabes hacer pelmeni?' },
      { u: [["Нет, не уме'ю. Но я хочу' научи'ться.", 'No, no sé. Pero quiero aprender.'], ["Нет, не могу'.", 'No, no puedo.', '¿No puedes o no sabes? «No sé hacer» = не умею.']] },
      { who: 'galia', ru: "Ма'шенька, кто э'то? Он уме'ет ле'пить?", es: 'Mashenka, ¿quién es? ¿Sabe hacer pelmeni?' },
      { ru: "Ба'ба Га'ля, э'то мой студе'нт. Он ничего' не уме'ет. Но он стара'ется.", es: 'Baba Galia, es mi estudiante. No sabe hacer nada. Pero se esfuerza.', e: 'smirk' },
      { u: [["Здра'вствуйте, Гали'на Ива'новна! Я могу' попро'бовать?", '¡Buenos días, Galina Ivánovna! ¿Puedo intentarlo?'], ["Приве'т, ба'ба!", '¡Hola, abuela!', 'Galina Ivánovna para ti. Por ahora. Es mi abuela.']] },
      { who: 'galia', ru: "Коне'чно, мо'жешь! Бери' те'сто. Вот так.", es: '¡Claro que puedes! Toma la masa. Así.' },
      { n: 'Tu primer pelmeni parece una piedra. El segundo, un barco.' },
      { ru: "Э'то… пельме'нь? Он не мо'жет так вы'глядеть.", es: '¿Esto es… un pelmeni? No puede verse así.', e: 'eyeroll' },
      { u: [["Я не могу' сде'лать лу'чше. Пока'.", 'No puedo hacerlo mejor. Por ahora.', 'Por ahora. Me gusta ese optimismo. A la abuela también.'], ["Я уме'ю гото'вить то'лько чай.", 'Solo sé hacer té.', 'Con eso basta en Rusia. Casi.']], k: 2 },
      { who: 'galia', ru: "Молоде'ц! Пе'рвый раз все так де'лают. Ма'ша то'же.", es: '¡Bravo! La primera vez todos lo hacen así. Masha también.' },
    ],
    phrases: [
      ["Ты уме'ешь гото'вить?", '¿Sabes cocinar?'],
      ["Я не уме'ю пла'вать.", 'No sé nadar.'],
      ["Я могу' попро'бовать?", '¿Puedo intentarlo?'],
      ["Я не могу' сего'дня.", 'Hoy no puedo.'],
      ["научи'ться", 'aprender (a hacer algo)'],
      ["стара'ться", 'esforzarse'],
      ["те'сто", 'masa'],
      ["Вот так.", 'Así.'],
    ],
    grammar: {
      id: 'g47', title: 'Poder y saber: мочь, уметь',
      body: `<p>[[мочь]] = poder (posibilidad, permiso): [[могу']], [[мо'жешь]], [[мо'жет]], [[мо'жем]], [[мо'жете]], [[мо'гут]]. Pasado: [[мог]], [[могла']], [[могли']].</p>
<p>[[уме'ть]] = saber hacer (habilidad aprendida): [[уме'ю]], [[уме'ешь]], [[уме'ет]]… como los verbos en -ать.</p>
<p>[[Я уме'ю пла'вать, но сего'дня не могу': хо'лодно.]] Sé nadar, pero hoy no puedo: hace frío.</p>
<p>Y «saber» un dato es otro verbo: [[знать]]. [[Я зна'ю, где он живёт.]]</p>`,
      drills: [
        { q: "Я не ___ пла'вать.", es: 'No sé nadar.', o: ["уме'ю", "могу'", "зна'ю"], x: 'Habilidad: умею.' },
        { q: "Ты ___ прийти' за'втра?", es: '¿Puedes venir mañana?', o: ["мо'жешь", "уме'ешь", "зна'ешь"], x: 'Posibilidad: можешь.' },
        { q: "Они' не ___ найти' ключи'.", es: 'No pueden encontrar las llaves.', o: ["мо'гут", "мо'жут", "могу'т"], x: 'Они могут.' },
        { q: "Она' ___ говори'ть по-кита'йски.", es: 'Ella sabe hablar chino.', o: ["уме'ет", "мо'жет", "зна'ет"], x: 'Habilidad: умеет. (Можно también: «может».)' },
        { q: "Я не ___, где он.", es: 'No sé dónde está él.', o: ["зна'ю", "уме'ю", "могу'"], x: 'Un dato: знаю.' },
      ],
    },
    outro: 'La abuela dice que tienes «manos de oro y paciencia de piedra». Es un cumplido. Creo.',
  },
  {
    id: 'l48', level: 4, ru: "Новосе'лье", es: 'La inauguración de la casa',
    scene: 'Haces una fiesta de inauguración en tu departamento: новоселье. Vienen Masha, Vadim, Pelmén en su caja y la vecina de la ópera.',
    intro: 'Hoy: empezar y terminar. Y una fiesta. Con ruso de verdad, porque a las fiestas rusas siempre llega alguien inesperado.',
    dialog: [
      { ru: "Во ско'лько начина'ется пра'здник?", es: '¿A qué hora empieza la fiesta?' },
      { u: [["Он начина'ется в семь.", 'Empieza a las siete.'], ["Он начина'ет в семь.", 'Empieza (algo) a las siete. (mal dicho)', 'La fiesta empieza sola: начинается, con -ся.']] },
      { ru: "А когда' конча'ется?", es: '¿Y cuándo termina?' },
      { u: [["Когда' зако'нчатся пельме'ни.", 'Cuando se terminen los pelmeni.', 'Respuesta perfecta. Muy rusa.'], ["Никогда'!", '¡Nunca!', 'Peligroso. Los vecinos llaman a la policía a las once.']], k: 2 },
      { n: 'A las ocho suena el timbre. Es Nina Petrovna, la cantante de ópera, con un pastel.' },
      { who: 'nina', ru: "До'брый ве'чер! Я слы'шала смех. Мо'жно к вам?", es: '¡Buenas noches! Oí risas. ¿Puedo pasar?' },
      { u: [["Коне'чно! Проходи'те, пожа'луйста!", '¡Claro! ¡Pase, por favor!'], ["Коне'чно! Проходи'!", '¡Claro! ¡Pasa!', 'Es una estrella de la ópera. ¡Usted! Проходите.']] },
      { ru: "Ни'на Петро'вна… Я ва'ша фана'тка. Мо'жно авто'граф?", es: 'Nina Petrovna… Soy su fan. ¿Me da un autógrafo?', e: 'surprised' },
      { who: 'nina', ru: "Коне'чно. А вы начина'йте петь! Я ви'жу гита'ру!", es: 'Claro. ¡Y ustedes empiecen a cantar! ¡Veo una guitarra!' },
      { u: [["Я начина'ю! Но я пою' пло'хо.", '¡Empiezo! Pero canto mal.', 'Mal es poco. Pero con cariño. Fin del nivel cuatro.']] },
    ],
    phrases: [
      ["новосе'лье", 'fiesta de inauguración de la casa'],
      ["Пра'здник начина'ется в семь.", 'La fiesta empieza a las siete.'],
      ["Когда' конча'ется фильм?", '¿Cuándo termina la película?'],
      ["Я начина'ю рабо'тать.", 'Empiezo a trabajar.'],
      ["зако'нчить", 'terminar (algo)'],
      ["смех", 'risa'],
      ["Мо'жно к вам?", '¿Puedo pasar? (a su casa)'],
      ["петь / пою'", 'cantar / canto'],
    ],
    grammar: {
      id: 'g48', title: 'Empezar y terminar',
      body: `<p>Con una <b>persona</b> como sujeto (alguien empieza algo): sin -ся: [[Я начина'ю рабо'ту.]] · [[Я начина'ю рабо'тать.]] (+ infinitivo imperfectivo)</p>
<p>Con un <b>evento</b> como sujeto (algo empieza solo): con -ся: [[Уро'к начина'ется в де'вять.]] · [[Фильм конча'ется в де'сять.]]</p>
<p>Parejas: [[начина'ть]] / [[нача'ть]] · [[конча'ть]] / [[ко'нчить]] (o [[зака'нчивать]] / [[зако'нчить]]).</p>
<p>Ojo: después de «empezar/terminar» el infinitivo es siempre imperfectivo: [[начина'ю чита'ть]], nunca «начинаю прочитать».</p>`,
      drills: [
        { q: "Фильм ___ в во'семь.", es: 'La película empieza a las ocho.', o: ["начина'ется", "начина'ет", "начну'"], x: 'Evento: con -ся.' },
        { q: "Я ___ рабо'тать в де'вять.", es: 'Empiezo a trabajar a las nueve.', o: ["начина'ю", "начина'юсь", "начина'ется"], x: 'Persona: sin -ся.' },
        { q: "Когда' ___ уро'к?", es: '¿Cuándo termina la clase?', o: ["конча'ется", "конча'ет", "ко'нчит"], x: 'Evento: кончается.' },
        { q: "Она' начала' ___.", es: 'Ella empezó a cantar.', o: ["петь", "спеть", "поёт"], x: 'Después de начать: infinitivo imperfectivo.' },
        { q: "Мы зако'нчили ___.", es: 'Terminamos el trabajo.', o: ["рабо'ту", "рабо'та", "рабо'той"], x: 'Terminar algo: acusativo.' },
      ],
    },
    outro: 'Fin del nivel cuatro. Tienes casa, amigos, vecina famosa y un gato que no es tuyo pero vive en tu caja. Eres casi ruso.',
  },
);
