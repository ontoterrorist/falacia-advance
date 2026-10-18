/* Nivel 3 · Un semestre en Petersburgo (lecciones 25–36) */
LESSONS.push(
  {
    id: 'l25', level: 3, ru: "Сосе'ди", es: 'Los vecinos',
    scene: 'Llegaste a Petersburgo para un semestre. Masha te espera en la puerta de la residencia de estudiantes. En persona. Con paraguas.',
    intro: 'Bienvenido a Petersburgo. Sí, llueve. Hoy: el plural. Porque aquí nada viene de a uno. Ni la lluvia.',
    dialog: [
      { ru: "Ну, приве'т. Ты здесь. Настоя'щий, не на экра'не.", es: 'Bueno, hola. Estás aquí. De verdad, no en una pantalla.', e: 'smirk' },
      { u: [["Приве'т, Ма'ша! Я так {рад|ра'да}!", '¡Hola, Masha! ¡Estoy tan contento/a!', 'Sí, sí. Yo también. Un poco. No me abraces.'], ["Здра'вствуйте, О'льга Петро'вна!", '¡Buenos días, Olga Petrovna!', 'Olga Petrovna no vino. Por suerte para todos.']] },
      { ru: "Э'то твоё общежи'тие. Тут живу'т студе'нты из ра'зных стран.", es: 'Esta es tu residencia. Aquí viven estudiantes de distintos países.' },
      { u: [["А кто мои' сосе'ди?", '¿Y quiénes son mis vecinos?'], ["А кто мой сосе'ди?", '¿Y quién mi vecinos? (mal dicho)', 'Соседи es plural: мои соседи.']] },
      { ru: "Два брази'льца и оди'н не'мец. Они' о'чень шу'мные.", es: 'Dos brasileños y un alemán. Son muy ruidosos.', e: 'annoyed' },
      { u: [["Ничего', я то'же {шу'мный|шу'мная}.", 'No pasa nada, yo también soy ruidoso/a.', 'Genial. Pelmén y yo vivimos lejos. Por suerte.'], ["Они' шу'мный.", 'Ellos ruidoso. (mal dicho)', 'Plural: шумные.']] },
      { ru: "Вот твоя' ко'мната. Тут крова'ть, стол и две по'лки.", es: 'Aquí está tu cuarto. Hay una cama, una mesa y dos estantes.' },
      { u: [["А где ключи'?", '¿Y dónde están las llaves?'], ["А где ключы'?", '¿Y las llaves? (mal dicho)', 'Después de ч nunca va ы: ключи.']] },
      { ru: "Вот. Два ключа'. Оди'н от две'ри, а друго'й… не зна'ю. Ру'сская та'йна.", es: 'Toma. Dos llaves. Una es de la puerta y la otra… no sé. Misterio ruso.', e: 'smirk' },
      { u: [["Спаси'бо, Ма'ша. Ты лу'чшая.", 'Gracias, Masha. Eres la mejor.', 'Lo sé. Descansa. Mañana empiezan las clases. Y no pierdas las llaves.'], ["Спаси'бо, Ма'ша. Ты лу'чший.", 'Gracias, Masha. Eres el mejor.', 'Лучшая. Soy mujer, la última vez que miré.']] },
    ],
    phrases: [
      ["общежи'тие", 'residencia de estudiantes'],
      ["сосе'д / сосе'ди", 'vecino / vecinos'],
      ["ко'мната", 'cuarto, habitación'],
      ["ключ / ключи'", 'llave / llaves'],
      ["крова'ть", 'cama'],
      ["Э'то мои' сосе'ди.", 'Estos son mis vecinos.'],
      ["Где ключи'?", '¿Dónde están las llaves?'],
      ["Я так {рад|ра'да}!", '¡Estoy tan contento/a!'],
    ],
    grammar: {
      id: 'g25', title: 'El plural: -ы, -и, -а',
      body: `<p>Consonante → <b>+ы</b>: [[студе'нт]] → [[студе'нты]] · [[стол]] → [[столы']]</p>
<p>Después de <b>к, г, х, ж, ш, ч, щ</b> va siempre <b>-и</b>: [[ключ]] → [[ключи']] · [[кни'га]] → [[кни'ги]]</p>
<p>-а → <b>-ы</b>: [[ко'мната]] → [[ко'мнаты]] · -я, -ь → <b>-и</b>: [[неде'ля]] → [[неде'ли]], [[крова'ть]] → [[крова'ти]]</p>
<p>Neutros: -о → <b>-а</b>: [[окно']] → [[о'кна]] · -е → <b>-я</b>: [[мо'ре]] → [[моря']]</p>
<p>Y los rebeldes: [[друг]] → [[друзья']] · [[брат]] → [[бра'тья]] · [[челове'к]] → [[лю'ди]] · [[ребёнок]] → [[де'ти]]</p>
<p>«Mi» en plural: [[мои']], «tu»: [[твои']].</p>`,
      drills: [
        { p: '«los estudiantes»', o: ["студе'нты", "студе'нта", "студе'нтов"], x: 'Consonante → -ы.' },
        { q: "Где мои' ___?", es: '¿Dónde están mis llaves?', o: ["ключи'", "ключы'", "ключа'"], x: 'Después de ч: -и.' },
        { q: "Э'то мои' ___.", es: 'Estos son mis amigos.', o: ["друзья'", "дру'ги", "друга'"], x: 'Друг → друзья.' },
        { p: 'Plural de «окно\'» (ventana)', o: ["о'кна", "окны'", "окни'"], x: 'Neutro en -о → -а.' },
        { q: "Здесь живу'т ___.", es: 'Aquí vive gente.', o: ["лю'ди", "челове'ки", "люде'й"], x: 'Человек → люди.' },
        { p: 'Plural de «кни\'га»', o: ["кни'ги", "кни'гы", "кни'га"], x: 'Después de г: -и, nunca -ы.' },
      ],
    },
    outro: 'Llegaste, tienes llaves y vecinos ruidosos. Bienvenido a la vida rusa.',
  },
  {
    id: 'l26', level: 3, ru: "Но'вый го'род", es: 'Una ciudad nueva',
    scene: 'Primer paseo por Petersburgo. Masha hace de guía. Una guía que se queja de todo pero lo sabe todo.',
    intro: 'Hoy: los adjetivos. Bonito, viejo, grande, gris. Sobre todo gris. Es Petersburgo.',
    dialog: [
      { ru: "Э'то Не'вский проспе'кт. Гла'вная у'лица го'рода.", es: 'Esta es la avenida Nevski. La calle principal de la ciudad.' },
      { u: [["Кака'я краси'вая у'лица!", '¡Qué calle tan bonita!'], ["Како'й краси'вый у'лица!", '¡Qué bonito calle! (mal dicho)', 'Улица es femenina: какая красивая.']] },
      { ru: "Да. Краси'вая и шу'мная. А э'то Каза'нский собо'р.", es: 'Sí. Bonita y ruidosa. Y esa es la catedral de Kazán.' },
      { u: [["Он о'чень большо'й!", '¡Es muy grande!'], ["Она' о'чень больша'я!", '¡Ella es muy grande!', 'Собор es masculino: он большой.']] },
      { ru: "Большо'й и ста'рый. Как мой самова'р. А вот мо'ре… то есть кана'л.", es: 'Grande y viejo. Como mi samovar. Y aquí el mar… es decir, un canal.', e: 'smirk' },
      { u: [["Кака'я тёмная вода'!", '¡Qué agua tan oscura!'], ["Како'е тёмное вода'!", 'Qué oscuro agua (mal dicho)', 'Вода es femenina: тёмная вода.']] },
      { ru: "Э'то Петербу'рг. Тут всё се'рое: не'бо, дома', настрое'ние.", es: 'Esto es Petersburgo. Aquí todo es gris: el cielo, las casas, el humor.', e: 'eyeroll' },
      { u: [["Но го'род о'чень краси'вый.", 'Pero la ciudad es muy bonita.'], ["Но го'род о'чень краси'вые.", 'Pero la ciudad muy bonitos.', 'Город es uno: красивый.']] },
      { ru: "…Да. Краси'вый. Я его' люблю'. Не говори' никому'.", es: '…Sí. Bonita. La quiero. No se lo digas a nadie.', e: 'pleased' },
      { u: [["Э'то наш секре'т.", 'Es nuestro secreto.']] },
    ],
    phrases: [
      ["Како'й краси'вый го'род!", '¡Qué ciudad tan bonita!'],
      ["Кака'я краси'вая у'лица!", '¡Qué calle tan bonita!'],
      ["большо'й / ма'ленький", 'grande / pequeño'],
      ["но'вый / ста'рый", 'nuevo / viejo'],
      ["гла'вный", 'principal'],
      ["се'рый", 'gris'],
      ["не'бо", 'cielo'],
      ["настрое'ние", 'humor, estado de ánimo'],
    ],
    grammar: {
      id: 'g26', title: 'Los adjetivos concuerdan',
      body: `<p>El adjetivo copia el género y el número del sustantivo:</p>
<p>él: <b>-ый / -ий / -ой</b>: [[но'вый дом]], [[большо'й собо'р]] · ella: <b>-ая / -яя</b>: [[но'вая у'лица]] · ello: <b>-ое / -ее</b>: [[но'вое окно']] · plural: <b>-ые / -ие</b>: [[но'вые дома']]</p>
<p>Después de к, г, х, ж, ш, ч, щ, en vez de ы va и: [[ма'ленький]], [[ру'сские]].</p>
<p>«¡Qué…!»: [[Како'й]], [[Кака'я]], [[Како'е]], [[Каки'е]] + adjetivo.</p>`,
      drills: [
        { q: "Э'то ___ у'лица.", es: 'Es una calle nueva.', o: ["но'вая", "но'вый", "но'вое"], x: 'Улица → femenino.' },
        { q: "Како'й ___ го'род!", es: '¡Qué ciudad tan bonita!', o: ["краси'вый", "краси'вая", "краси'вое"], x: 'Город → masculino.' },
        { q: "Э'то ___ окно'.", es: 'Es una ventana vieja.', o: ["ста'рое", "ста'рый", "ста'рая"], x: 'Окно → neutro.' },
        { q: "Тут ___ дома'.", es: 'Aquí las casas son grandes.', o: ["больши'е", "большо'й", "больша'я"], x: 'Plural: -ие (después de ш).' },
        { q: "Кака'я ___ вода'!", es: '¡Qué agua tan fría!', o: ["холо'дная", "холо'дный", "холо'дное"], x: 'Вода → femenino.' },
        { q: "Э'то ___ кот.", es: 'Es un gato pequeño.', o: ["ма'ленький", "ма'ленькый", "ма'ленькая"], x: 'Después de к: -ий.' },
      ],
    },
    outro: 'Ya describes la ciudad. Gris, pero bonita. Como yo. No, eso no lo dije.',
  },
  {
    id: 'l27', level: 3, ru: "Кого' ты зна'ешь?", es: '¿A quién conoces?',
    scene: 'Primera clase en la universidad. Masha te señala a la gente del pasillo. Conoce a todos. A todos les tiene algo que decir.',
    intro: 'Hoy: el acusativo de las personas. Ver a alguien, conocer a alguien. Pelmén ya lo domina: me ignora con precisión.',
    dialog: [
      { ru: "Ты зна'ешь э'того па'рня?", es: '¿Conoces a ese chico?' },
      { u: [["Нет. Кто э'то?", 'No. ¿Quién es?'], ["Да, я зна'ю э'тот па'рень.", 'Sí, conozco ese chico (mal dicho).', 'Persona masculina en acusativo: этого парня.']] },
      { ru: "Э'то Вади'м. Он у'чится здесь. Он зна'ет всех.", es: 'Es Vadim. Estudia aquí. Conoce a todo el mundo.' },
      { who: 'vadim', ru: "Приве'т! Ты но'вый студе'нт? Я ви'дел тебя' вчера'.", es: '¡Hola! ¿Eres el nuevo? Te vi ayer.' },
      { u: [["Приве'т! Да, я то'же тебя' {ви'дел|ви'дела}.", '¡Hola! Sí, yo también te vi.'], ["Приве'т! Да, я то'же ты {ви'дел|ви'дела}.", 'Yo también tú vi (mal dicho).', 'Ты → тебя en acusativo.']] },
      { who: 'vadim', ru: "Ты зна'ешь Ма'шу? Она' стро'гая.", es: '¿Conoces a Masha? Es estricta.' },
      { u: [["Да, я зна'ю Ма'шу. Она' моя' преподава'тельница.", 'Sí, conozco a Masha. Es mi profesora.'], ["Да, я зна'ю Ма'ша.", 'Sí, conozco Masha (mal dicho).', 'Маша → Машу. Las personas en -а cambian.']] },
      { ru: "Я всё слы'шу, Вади'м.", es: 'Lo oigo todo, Vadim.', e: 'annoyed' },
      { who: 'vadim', ru: "Ой. Ну… пока'!", es: 'Ups. Bueno… ¡chao!' },
      { ru: "Он хоро'ший. Но болтли'вый. Ты лю'бишь болтли'вых люде'й?", es: 'Es bueno. Pero hablador. ¿Te gusta la gente habladora?', e: 'smirk' },
      { u: [["Я люблю' тебя' и Пельме'ня. Э'того доста'точно.", 'Te quiero a ti y a Pelmén. Con eso basta.', '…Hmm. Respuesta aceptable. Pelmén también te tolera.'], ["Я люблю' Вади'м.", 'Quiero a Vadim (mal dicho).', '¿A Vadim? Acabas de conocerlo. Y es «Вадима».']] },
    ],
    phrases: [
      ["Ты зна'ешь Ма'шу?", '¿Conoces a Masha?'],
      ["Я ви'жу бра'та.", 'Veo a mi hermano.'],
      ["Я тебя' {ви'дел|ви'дела}.", 'Te vi.'],
      ["па'рень", 'chico, muchacho'],
      ["де'вушка", 'chica, muchacha'],
      ["Кого' ты зна'ешь?", '¿A quién conoces?'],
      ["болтли'вый", 'hablador, charlatán'],
      ["всех", 'a todos'],
    ],
    grammar: {
      id: 'g27', title: 'Acusativo de las personas',
      body: `<p>Cuando el objeto es una <b>persona o animal</b> masculino, toma <b>-а / -я</b>: [[брат]] → [[Я ви'жу бра'та.]] · [[Вади'м]] → [[Я зна'ю Вади'ма.]] · [[кот]] → [[Я люблю' кота'.]]</p>
<p>Los femeninos en -а hacen lo de siempre (-у / -ю): [[Ма'ша]] → [[Ма'шу]] · [[Та'ня]] → [[Та'ню]]</p>
<p>Pronombres: [[меня']], [[тебя']], [[его']], [[её]], [[нас]], [[вас]], [[их]]. La pregunta es [[кого'?]] (¿a quién?).</p>`,
      drills: [
        { q: "Я ви'жу ___.", es: 'Veo a mi hermano.', o: ["бра'та", "брат", "бра'ту"], x: 'Persona masculina: -а.' },
        { q: "Ты зна'ешь ___?", es: '¿Conoces a Masha?', o: ["Ма'шу", "Ма'ша", "Ма'ши"], x: '-а → -у.' },
        { q: "Я люблю' ___.", es: 'Quiero a mi gato.', o: ["кота'", "кот", "кото'м"], x: 'Animal masculino: кота.' },
        { q: "Она' лю'бит ___.", es: 'Ella te quiere.', o: ["тебя'", "ты", "тебе'"], x: 'Acusativo de ты: тебя.' },
        { q: "___ ты ждёшь?", es: '¿A quién esperas?', o: ["Кого'", "Кто", "Кому'"], x: '¿A quién? = кого.' },
        { q: "Мы ви'дим ___.", es: 'Lo vemos (a él).', o: ["его'", "он", "ему'"], x: 'Он → его.' },
      ],
    },
    outro: 'Ya conoces a Vadim. Ahora él conoce a ti. Te deseo suerte.',
  },
  {
    id: 'l28', level: 3, ru: "Чья э'то кни'га?", es: '¿De quién es este libro?',
    scene: 'En la biblioteca de la universidad. Alguien dejó un libro con una nota dentro. Masha está demasiado interesada.',
    intro: 'Hoy: «de»: el libro de Masha, la casa del amigo. Es el genitivo. Otra vez. Ya te dije que nos perseguiría.',
    dialog: [
      { ru: "Смотри'. Чья э'то кни'га?", es: 'Mira. ¿De quién es este libro?' },
      { u: [["Не зна'ю. Мо'жет быть, Вади'ма?", 'No sé. ¿Tal vez de Vadim?'], ["Не зна'ю. Мо'жет быть, Вади'м?", 'No sé. ¿Tal vez Vadim? (mal dicho)', '«De Vadim» = Вадима. Genitivo.']] },
      { ru: "Нет. Вади'м не чита'ет. Тут запи'ска. «Для Ма'ши».", es: 'No. Vadim no lee. Aquí hay una nota. «Para Masha».', e: 'surprised' },
      { u: [["Для тебя'? Интере'сно! От кого'?", '¿Para ti? ¡Interesante! ¿De quién?'], ["Для ты?", '¿Para tú?', 'Después de для: тебя.']] },
      { ru: "Нет по'дписи. То'лько стихи'. Пло'хие стихи'.", es: 'No hay firma. Solo poemas. Malos poemas.', e: 'eyeroll' },
      { u: [["Э'то кни'га преподава'теля? И'ли студе'нта?", '¿Es el libro de un profesor? ¿O de un estudiante?'], ["Э'то кни'га преподава'тель?", '¿Es el libro profesor? (mal dicho)', '«Del profesor» = преподавателя.']] },
      { ru: "Э'то кни'га библиоте'ки. Но запи'ска… запи'ска моя'.", es: 'Es un libro de la biblioteca. Pero la nota… la nota es mía.', e: 'pleased' },
      { u: [["У тебя' есть та'йный покло'нник!", '¡Tienes un admirador secreto!', 'No digas tonterías. …¿Tú crees? No. Tonterías.'], ["У тебя' нет покло'нника.", 'No tienes admirador.', 'Gracias por la confianza.']] },
    ],
    phrases: [
      ["Чья э'то кни'га?", '¿De quién es este libro?'],
      ["кни'га Ма'ши", 'el libro de Masha'],
      ["дом дру'га", 'la casa del amigo'],
      ["для тебя'", 'para ti'],
      ["от кого'?", '¿de parte de quién?'],
      ["запи'ска", 'nota (papelito)'],
      ["стихи'", 'poemas, versos'],
      ["библиоте'ка", 'biblioteca'],
    ],
    grammar: {
      id: 'g28', title: 'Genitivo: «de» alguien',
      body: `<p>Para «el X de Y», Y va en genitivo, <b>después</b>: [[кни'га Ма'ши]] el libro de Masha · [[дом дру'га]] la casa del amigo</p>
<p>masculino / neutro → <b>-а / -я</b>: [[брат]] → [[бра'та]], [[преподава'тель]] → [[преподава'теля]] · femenino → <b>-ы / -и</b>: [[ма'ма]] → [[ма'мы]], [[Ка'тя]] → [[Ка'ти]]</p>
<p>Las preposiciones [[для]] (para), [[от]] (de parte de), [[у]], [[из]], [[без]], [[до]], [[по'сле]] también piden genitivo: [[для Ма'ши]], [[по'сле уро'ка]].</p>
<p>«¿De quién?»: [[чей]], [[чья]], [[чьё]], [[чьи]].</p>`,
      drills: [
        { q: "Э'то кни'га ___.", es: 'Es el libro de Masha.', o: ["Ма'ши", "Ма'ша", "Ма'шу"], x: 'Femenino: -ы/-и (después de ш: -и).' },
        { q: "Э'то дом ___.", es: 'Es la casa de mi hermano.', o: ["бра'та", "брат", "бра'том"], x: 'Masculino: -а.' },
        { q: "Пода'рок для ___.", es: 'Un regalo para mamá.', o: ["ма'мы", "ма'ма", "ма'му"], x: 'Для + genitivo.' },
        { q: "___ э'то кни'га?", es: '¿De quién es este libro?', o: ["Чья", "Чей", "Чьё"], x: 'Книга → femenino: чья.' },
        { q: "Мы гуля'ем по'сле ___.", es: 'Paseamos después de la clase.', o: ["уро'ка", "уро'к", "уро'ке"], x: 'После + genitivo.' },
        { q: "Письмо' от ___.", es: 'Una carta de parte de Katia.', o: ["Ка'ти", "Ка'тя", "Ка'тю"], x: '-я → -и.' },
      ],
    },
    outro: 'Un admirador secreto con malos poemas. Petersburgo. Típico. No le des importancia. Yo no se la doy. Casi.',
  },
  {
    id: 'l29', level: 3, ru: "Мно'го люде'й", es: 'Mucha gente',
    scene: 'Sábado en el mercado de Kuznechny. Hay muchísima gente, muchísimas frutas y una vendedora que le regala pepinillos a Masha.',
    intro: 'Hoy: «mucho» y «poco». Y el genitivo plural, el final más caprichoso del ruso. Respira hondo.',
    dialog: [
      { ru: "Ско'лько тут люде'й! Я не люблю' ры'нки по суббо'там.", es: '¡Cuánta gente! No me gustan los mercados los sábados.', e: 'annoyed' },
      { u: [["Но тут мно'го фру'ктов!", '¡Pero aquí hay mucha fruta!'], ["Но тут мно'го фру'кты!", 'Pero aquí mucho frutas (mal dicho).', 'Después de много: genitivo plural, фруктов.']] },
      { ru: "И мно'го овоще'й. Купи' огурцы'. И помидо'ры.", es: 'Y muchas verduras. Compra pepinos. Y tomates.' },
      { who: 'seller', ru: "Ма'шенька! Возьми' солёные огурцы'. Бесплатно'!", es: '¡Mashenka! Llévate pepinillos en salmuera. ¡Gratis!' },
      { u: [["Ма'шенька? Ты её зна'ешь?", '¿Mashenka? ¿La conoces?'], ["Ско'лько сто'ит?", '¿Cuánto cuesta?', 'Dijo «gratis». Escucha.']] },
      { ru: "Я покупа'ю здесь пять лет. Она' меня' лю'бит. Э'то взаи'мно.", es: 'Compro aquí desde hace cinco años. Me quiere. Es mutuo.', e: 'pleased' },
      { u: [["А у нас мно'го де'нег?", '¿Y tenemos mucho dinero?', 'Tenemos poco dinero. Como siempre.'], ["А у нас ма'ло вре'мени?", '¿Y tenemos poco tiempo?', 'Siempre. Vamos.']], k: 2 },
      { ru: "Ла'дно. Ещё пять я'блок, и домо'й.", es: 'Bueno. Cinco manzanas más, y a casa.' },
      { u: [["Пять я'блок, пожа'луйста!", '¡Cinco manzanas, por favor!'], ["Пять я'блоки, пожа'луйста!", 'Cinco manzanas (mal dicho).', 'Con 5: genitivo plural, яблок.']] },
    ],
    phrases: [
      ["мно'го люде'й", 'mucha gente'],
      ["ма'ло вре'мени", 'poco tiempo'],
      ["ры'нок", 'mercado'],
      ["фру'кты / о'вощи", 'frutas / verduras'],
      ["огурцы' / помидо'ры", 'pepinos / tomates'],
      ["я'блоко / я'блоки", 'manzana / manzanas'],
      ["Бесплатно'.", 'Gratis.'],
      ["Возьми'!", '¡Toma! / ¡Llévate!'],
    ],
    grammar: {
      id: 'g29', title: 'Mucho, poco: genitivo plural',
      body: `<p>Después de [[мно'го]] (mucho), [[ма'ло]] (poco), [[ско'лько]] (cuánto) y de los números desde 5, va el <b>genitivo plural</b>:</p>
<p>masculino consonante → <b>-ов / -ев</b>: [[фрукт]] → [[фру'ктов]], [[огуре'ц]] → [[огурцо'в]]</p>
<p>femenino -а y neutro -о → <b>sin final</b>: [[кни'га]] → [[книг]], [[я'блоко]] → [[я'блок]]</p>
<p>-ь, -ж, -ш, -ч, -щ → <b>-ей</b>: [[о'вощи]] → [[овоще'й]], [[ключ]] → [[ключе'й]]</p>
<p>Para memorizar: [[лю'ди]] → [[люде'й]] · [[де'ньги]] → [[де'нег]] · [[вре'мя]] → [[вре'мени]] (singular)</p>`,
      drills: [
        { q: "Тут мно'го ___.", es: 'Aquí hay mucha fruta.', o: ["фру'ктов", "фру'кты", "фру'кта"], x: 'Много + -ов.' },
        { q: "Ско'лько ___?", es: '¿Cuánta gente?', o: ["люде'й", "лю'ди", "челове'ков"], x: 'Люди → людей.' },
        { q: "У меня' мно'го ___.", es: 'Tengo muchos libros.', o: ["книг", "кни'ги", "кни'гов"], x: 'Femenino en -а: sin final.' },
        { q: "Пять ___, пожа'луйста.", es: 'Cinco manzanas, por favor.', o: ["я'блок", "я'блоки", "я'блоков"], x: 'Яблоко → яблок.' },
        { q: "У нас ма'ло ___.", es: 'Tenemos poco tiempo.', o: ["вре'мени", "вре'мя", "времён"], x: 'Время → времени.' },
        { q: "У него' мно'го ___.", es: 'Él tiene muchas llaves.', o: ["ключе'й", "ключо'в", "ключи'"], x: 'Después de ч: -ей.' },
      ],
    },
    outro: 'Volvimos con pepinillos gratis y tres kilos de cosas que no necesitábamos. Un sábado perfecto.',
  },
  {
    id: 'l30', level: 3, ru: "Две кни'ги, пять книг", es: 'Dos libros, cinco libros',
    scene: 'En la librería Dom Knigi. Masha quiere comprar «solo un libro». Lleva una cesta.',
    intro: 'Números con cosas. 1 libro, 2 libroS, 5 libroS… pero en ruso cada número tiene su capricho. Ya lo viste con «год, года, лет».',
    dialog: [
      { ru: "Я хочу' купи'ть одну' кни'гу. То'лько одну'.", es: 'Quiero comprar un libro. Solo uno.' },
      { u: [["Ма'ша, у тебя' в корзи'не четы'ре кни'ги.", 'Masha, tienes cuatro libros en la cesta.'], ["Ма'ша, у тебя' четы'ре книг.", 'Masha, tienes cuatro libros (mal dicho).', 'Con 2, 3, 4: genitivo singular, книги.']] },
      { ru: "Э'то не счита'ется. Три — пода'рки.", es: 'Eso no cuenta. Tres son regalos.', e: 'smirk' },
      { u: [["А пя'тая?", '¿Y el quinto?'], ["А пять?", '¿Y cinco?', 'Quieres decir «el quinto»: пятая.']] },
      { ru: "Пя'тая — для Пельме'ня. «Ко'шки и лю'ди».", es: 'El quinto es para Pelmén. «Gatos y personas».' },
      { u: [["Ско'лько сто'ят пять книг?", '¿Cuánto cuestan cinco libros?'], ["Ско'лько сто'ят пять кни'ги?", '¿Cuánto cuestan cinco libro? (mal dicho)', 'Con 5: genitivo plural, книг.']] },
      { who: 'kassir', ru: "Две ты'сячи пятьсо'т рубле'й.", es: 'Dos mil quinientos rublos.' },
      { ru: "Две ты'сячи?! Ну… кни'ги — э'то не тра'та. Э'то инвести'ция.", es: '¡¿Dos mil?! Bueno… los libros no son un gasto. Son una inversión.', e: 'surprised' },
      { u: [["Коне'чно. Как и твои' три самова'ра.", 'Claro. Como tus tres samovares.', 'Tengo un samovar. Uno. Y dos teteras. No es lo mismo.'], ["Коне'чно. Как и твои' три самова'ров.", 'Claro, como tus tres samovares (mal dicho).', 'Con 3: самовара.']] },
    ],
    phrases: [
      ["одна' кни'га", 'un libro'],
      ["две кни'ги", 'dos libros'],
      ["пять книг", 'cinco libros'],
      ["оди'н рубль / два рубля' / пять рубле'й", 'un rublo / dos rublos / cinco rublos'],
      ["ты'сяча", 'mil'],
      ["пода'рок / пода'рки", 'regalo / regalos'],
      ["Э'то не счита'ется.", 'Eso no cuenta.'],
      ["Ско'лько сто'ят…?", '¿Cuánto cuestan…?'],
    ],
    grammar: {
      id: 'g30', title: 'Números con sustantivos',
      body: `<p><b>1</b> (21, 31…): nominativo singular: [[оди'н стол]], [[одна' кни'га]], [[одно' окно']]</p>
<p><b>2, 3, 4</b> (22, 23, 24…): genitivo <b>singular</b>: [[два стола']], [[две кни'ги]], [[три окна']]</p>
<p><b>5 a 20</b>, y los que terminan en 5–9 y 0: genitivo <b>plural</b>: [[пять столо'в]], [[пять книг]], [[де'сять о'кон]]</p>
<p>Ojo: «dos» tiene género: [[два]] (él, ello) y [[две]] (ella). Lo mismo «uno»: [[оди'н]], [[одна']], [[одно']].</p>`,
      drills: [
        { q: "У меня' две ___.", es: 'Tengo dos libros.', o: ["кни'ги", "кни'га", "книг"], x: '2 → genitivo singular.' },
        { q: "Пять ___.", es: 'Cinco rublos.', o: ["рубле'й", "рубля'", "рубль"], x: '5 → genitivo plural.' },
        { q: "___ кни'ги.", es: 'Dos libros.', o: ["Две", "Два", "Дво'е"], x: 'Книга es femenina: две.' },
        { q: "Три ___.", es: 'Tres samovares.', o: ["самова'ра", "самова'ров", "самова'ры"], x: '3 → genitivo singular.' },
        { q: "Два'дцать оди'н ___.", es: 'Veintiún rublos.', o: ["рубль", "рубля'", "рубле'й"], x: 'Termina en 1 → nominativo.' },
        { q: "Де'сять ___.", es: 'Diez regalos.', o: ["пода'рков", "пода'рка", "пода'рки"], x: '10 → genitivo plural.' },
      ],
    },
    outro: 'Cinco libros. «Solo uno». Así se compran libros en Rusia.',
  },
  {
    id: 'l31', level: 3, ru: "Кото'рый час?", es: '¿Qué hora es?',
    scene: 'Masha te llama. Tenían clase a las diez. Son las diez y veinte. Y estás en la cama.',
    intro: 'La hora. Para que no vuelvas a llegar tarde. Es la lección más importante del curso. Para mí.',
    dialog: [
      { ru: "Алло'. Кото'рый час?", es: 'Aló. ¿Qué hora es?', e: 'annoyed' },
      { u: [["Э… де'сять часо'в?", 'Eh… ¿las diez?', 'Las diez y VEINTE. Veinte minutos tarde.'], ["Э… де'сять час?", 'Eh… ¿diez hora? (mal dicho)', 'Con 10: часов.']] },
      { ru: "Де'сять два'дцать. Уро'к начина'ется в де'сять.", es: 'Las diez y veinte. La clase empieza a las diez.' },
      { u: [["Извини'! Я {проспа'л|проспала'}!", '¡Perdona! ¡Me quedé dormido/a!'], ["Извини'! Я сплю!", '¡Perdona! ¡Estoy durmiendo!', 'Ya lo sé. Ese es el problema.']] },
      { ru: "Во ско'лько ты бу'дешь здесь?", es: '¿A qué hora estarás aquí?' },
      { u: [["Че'рез полчаса'. В оди'ннадцать.", 'En media hora. A las once.'], ["В оди'ннадцать часа'.", 'A las once hora (mal dicho).', 'Con 11: часов. O solo «в одиннадцать».']] },
      { ru: "Хорошо'. В оди'ннадцать ро'вно. Не в оди'ннадцать пятна'дцать.", es: 'Bien. A las once en punto. No a las once y cuarto.' },
      { u: [["Обеща'ю! Ро'вно в оди'ннадцать.", '¡Lo prometo! A las once en punto.'], ["Обеща'ю! В час.", '¡Lo prometo! A la una.', '¿A la una? Ni lo sueñes.']] },
      { n: 'A las 11:07 llegas corriendo.' },
      { ru: "Семь мину'т. Прогре'сс.", es: 'Siete minutos. Progreso.', e: 'smirk' },
    ],
    phrases: [
      ["Кото'рый час?", '¿Qué hora es?'],
      ["Сейча'с три часа'.", 'Son las tres.'],
      ["в два часа'", 'a las dos'],
      ["в пять часо'в", 'a las cinco'],
      ["полчаса'", 'media hora'],
      ["ро'вно", 'en punto, exactamente'],
      ["Уро'к начина'ется в де'сять.", 'La clase empieza a las diez.'],
      ["Я {проспа'л|проспала'}.", 'Me quedé dormido/a.'],
    ],
    grammar: {
      id: 'g31', title: 'La hora',
      body: `<p>¿Qué hora es? [[Кото'рый час?]] o [[Ско'лько вре'мени?]]</p>
<p>[[час]] sigue la regla de los números: [[час]] (1) · [[два часа']] (2–4) · [[пять часо'в]] (5–20)</p>
<p>«A las…» = [[в]] + la hora: [[в два часа']], [[в семь часо'в]], [[в час]]. Con minutos, más fácil: [[в де'сять два'дцать]].</p>
<p>Partes del día: [[утра']] (de la mañana), [[дня]] (de la tarde), [[ве'чера]] (de la noche), [[но'чи]] (de la madrugada): [[в семь утра']], [[в два но'чи]].</p>`,
      drills: [
        { q: "Сейча'с три ___.", es: 'Son las tres.', o: ["часа'", "часо'в", "час"], x: '3 → часа.' },
        { q: "Фильм в во'семь ___.", es: 'La película es a las ocho.', o: ["часо'в", "часа'", "час"], x: '8 → часов.' },
        { q: "Я встаю' в семь ___.", es: 'Me levanto a las siete de la mañana.', o: ["утра'", "у'тро", "у'тром"], x: 'De la mañana: утра.' },
        { q: "Уро'к ___ де'сять.", es: 'La clase es a las diez.', o: ["в", "на", "к"], x: 'A las…: в.' },
        { p: '«¿Qué hora es?»', o: ["Кото'рый час?", "Како'й час?", "Где час?"], x: 'Который час? o Сколько времени?' },
      ],
    },
    outro: 'Siete minutos tarde. El récord anterior era cuarenta. Estoy casi orgullosa.',
  },
  {
    id: 'l32', level: 3, ru: "Расписа'ние", es: 'El horario',
    scene: 'Masha te arma el horario de la semana. Con colores. Con muchos colores. Le gusta organizar la vida de los demás.',
    intro: 'Los días de la semana. Y cómo decir «el lunes», «los martes». Para que sepas cuándo te voy a torturar.',
    dialog: [
      { ru: "Так. В понеде'льник у тебя' грамма'тика.", es: 'A ver. El lunes tienes gramática.' },
      { u: [["А во вто'рник?", '¿Y el martes?'], ["А в вто'рник?", '¿Y el martes? (mal dicho)', 'Antes de вт- se dice «во»: во вторник.']] },
      { ru: "Во вто'рник и в четве'рг — разгово'рная пра'ктика. Со мной.", es: 'El martes y el jueves, práctica de conversación. Conmigo.', e: 'smirk' },
      { u: [["Ура'! А в сре'ду?", '¡Bien! ¿Y el miércoles?', '¿«Ура»? Sincero o irónico, no lo sé. Lo acepto.'], ["О нет. А в среда'?", 'Oh no. ¿Y el miércoles? (mal dicho)', 'В + acusativo: в среду.']] },
      { ru: "В сре'ду — исто'рия. В пя'тницу — свобо'дный день.", es: 'El miércoles, historia. El viernes, día libre.' },
      { u: [["А что ты де'лаешь в суббо'ту?", '¿Y qué haces el sábado?'], ["А что ты де'лаешь суббо'та?", '¿Y qué haces sábado? (mal dicho)', 'В субботу.']] },
      { ru: "В суббо'ту я сплю. В воскресе'нье то'же. Э'то свяще'нно.", es: 'El sábado duermo. El domingo también. Es sagrado.', e: 'pleased' },
      { u: [["{По'нял|Поняла'}. По выходны'м тебя' не трево'жить.", 'Entendido. Los fines de semana no molestarte.'], ["Дава'й встре'тимся в воскресе'нье в во'семь утра'!", '¡Quedemos el domingo a las ocho de la mañana!', 'Te voy a bloquear.']] },
    ],
    phrases: [
      ["понеде'льник, вто'рник, среда'", 'lunes, martes, miércoles'],
      ["четве'рг, пя'тница", 'jueves, viernes'],
      ["суббо'та, воскресе'нье", 'sábado, domingo'],
      ["в понеде'льник", 'el lunes'],
      ["во вто'рник", 'el martes'],
      ["по выходны'м", 'los fines de semana'],
      ["расписа'ние", 'horario'],
      ["свобо'дный день", 'día libre'],
    ],
    grammar: {
      id: 'g32', title: 'Los días: в + acusativo',
      body: `<p>«El lunes» = [[в]] + acusativo: [[в понеде'льник]], [[в сре'ду]], [[в пя'тницу]], [[в суббо'ту]], [[в воскресе'нье]]</p>
<p>Antes de «вт» se dice [[во]] para que suene mejor: [[во вто'рник]].</p>
<p>Para hábitos («los lunes»): [[по]] + dativo plural: [[по понеде'льникам]], [[по суббо'там]], [[по выходны'м]].</p>
<p>¿Qué día es hoy? [[Како'й сего'дня день?]] — [[Сего'дня пя'тница.]]</p>`,
      drills: [
        { q: "Я рабо'таю ___ сре'ду.", es: 'Trabajo el miércoles.', o: ["в", "во", "на"], x: 'В среду.' },
        { q: "___ вто'рник у нас уро'к.", es: 'El martes tenemos clase.', o: ["Во", "В", "По"], x: 'Во вторник.' },
        { q: "Мы гуля'ем в ___.", es: 'Paseamos el sábado.', o: ["суббо'ту", "суббо'та", "суббо'те"], x: 'В + acusativo: субботу.' },
        { q: "Я сплю ___ выходны'м.", es: 'Duermo los fines de semana.', o: ["по", "в", "на"], x: 'Hábito: по + dativo.' },
        { q: "Сего'дня ___.", es: 'Hoy es viernes.', o: ["пя'тница", "пя'тницу", "в пя'тницу"], x: 'Hoy es: nominativo.' },
      ],
    },
    outro: 'Tienes horario. Con colores. Si lo pierdes, te hago otro. Con más colores. Como castigo.',
  },
  {
    id: 'l33', level: 3, ru: "Когда' у тебя' день рожде'ния?", es: '¿Cuándo es tu cumpleaños?',
    scene: 'En la cafetería de la universidad. Vadim organiza un calendario de cumpleaños «para la fiesta». Masha sospecha.',
    intro: 'Fechas y meses. «El primero de mayo», «en junio». Y números ordinales. Muchos finales. Ya estás acostumbrado.',
    dialog: [
      { who: 'vadim', ru: "Когда' у тебя' день рожде'ния?", es: '¿Cuándo es tu cumpleaños?' },
      { u: [["Деся'того ма'я.", 'El diez de mayo.', 'En mayo. Bonito mes. Aquí todavía hace frío.'], ["Пе'рвого ию'ля.", 'El primero de julio.', 'En julio. Noches blancas. Buena época.'], ["Деся'тый май.", 'Décimo mayo (mal dicho).', 'Fechas: десятого мая. Genitivo.']], k: 2 },
      { who: 'vadim', ru: "Отли'чно! А у тебя', Ма'ша?", es: '¡Genial! ¿Y el tuyo, Masha?' },
      { ru: "Не скажу'.", es: 'No lo diré.', e: 'annoyed' },
      { who: 'vadim', ru: "Я зна'ю! Два'дцать пя'того октября'!", es: '¡Lo sé! ¡El veinticinco de octubre!' },
      { u: [["Э'то ско'ро! Че'рез неде'лю!", '¡Es pronto! ¡En una semana!'], ["Э'то в ма'е!", '¡Es en mayo!', 'Octubre, no mayo. Escucha a Vadim. Aunque sea difícil.']] },
      { ru: "Вади'м. Я тебя' убью'.", es: 'Vadim. Te voy a matar.', e: 'annoyed' },
      { u: [["Мы устро'им вечери'нку!", '¡Haremos una fiesta!', 'No. No. …¿Con tarta? No. …¿De qué tarta?'], ["Не волну'йся, мы ничего' не бу'дем де'лать.", 'No te preocupes, no haremos nada.', 'Bien. …¿Nada, nada? Bueno. Mejor.']], k: 2 },
    ],
    phrases: [
      ["Когда' у тебя' день рожде'ния?", '¿Cuándo es tu cumpleaños?'],
      ["пе'рвого ма'я", 'el primero de mayo'],
      ["в ма'е", 'en mayo'],
      ["янва'рь, февра'ль, март", 'enero, febrero, marzo'],
      ["апре'ль, май, ию'нь", 'abril, mayo, junio'],
      ["ию'ль, а'вгуст, сентя'брь", 'julio, agosto, septiembre'],
      ["октя'брь, ноя'брь, дека'брь", 'octubre, noviembre, diciembre'],
      ["че'рез неде'лю", 'dentro de una semana'],
    ],
    grammar: {
      id: 'g33', title: 'Meses y fechas',
      body: `<p>«En mayo» = [[в]] + prepositivo: [[в ма'е]], [[в январе']], [[в сентябре']] (los meses en -ь acentúan el final).</p>
<p>Los ordinales son adjetivos: [[пе'рвый]], [[второ'й]], [[тре'тий]], [[четвёртый]], [[пя'тый]]… [[деся'тый]], [[двадца'тый]].</p>
<p>¿Qué fecha? → neutro: [[Сего'дня пе'рвое ма'я.]] (Hoy es uno de mayo).</p>
<p>¿Cuándo? → genitivo: [[пе'рвого ма'я]] (el primero de mayo), [[деся'того октября']].</p>`,
      drills: [
        { q: "Мой день рожде'ния ___ ма'я.", es: 'Mi cumpleaños es el primero de mayo.', o: ["пе'рвого", "пе'рвый", "пе'рвое"], x: '¿Cuándo? → genitivo: первого.' },
        { q: "Мы е'дем в Москву' в ___.", es: 'Vamos a Moscú en julio.', o: ["ию'ле", "ию'ль", "ию'ля"], x: 'В + prepositivo: в июле.' },
        { q: "Сего'дня ___ октября'.", es: 'Hoy es diez de octubre.', o: ["деся'тое", "деся'того", "деся'тый"], x: 'Hoy es…: neutro, десятое.' },
        { q: "Я {роди'лся|родила'сь} в ___.", es: 'Nací en enero.', o: ["январе'", "янва'ре", "январь"], x: 'В январе.' },
        { q: "___ декабря' — пра'здник.", es: 'El treinta y uno de diciembre es fiesta.', o: ["Три'дцать пе'рвого", "Три'дцать оди'н", "Три'дцать пе'рвое"], x: 'Fecha «cuándo» → genitivo.' },
      ],
    },
    outro: 'Mi cumpleaños es secreto. Era. Gracias, Vadim. No quiero fiesta. …¿Qué tarta, por curiosidad?',
  },
  {
    id: 'l34', level: 3, ru: "О чём ты ду'маешь?", es: '¿En qué piensas?',
    scene: 'Tarde en el Ermitage. Masha se queda mirando un cuadro mucho tiempo. Más de lo normal. Incluso para ella.',
    intro: 'Hoy: «hablar de», «pensar en». La preposición о. Y el prepositivo plural, de regalo.',
    dialog: [
      { ru: "…", es: '(Masha mira un cuadro en silencio.)', e: 'sad' },
      { u: [["О чём ты ду'маешь?", '¿En qué piensas?'], ["Что ты ду'маешь?", '¿Qué piensas?', 'Casi. «En qué» = о чём.']] },
      { ru: "О ба'бушке. Она' люби'ла э'ту карти'ну.", es: 'En mi abuela. A ella le encantaba este cuadro.' },
      { u: [["Расскажи' мне о ней.", 'Háblame de ella.'], ["Расскажи' мне о она'.", 'Háblame de ella (mal dicho).', 'Después de о: о ней.']] },
      { ru: "Она' мно'го говори'ла о худо'жниках, о кни'гах, о жи'зни. Она' была' учи'тельницей.", es: 'Hablaba mucho de pintores, de libros, de la vida. Era maestra.', e: 'pleased' },
      { u: [["Тепе'рь я понима'ю, почему' ты преподава'тель.", 'Ahora entiendo por qué eres profesora.'], ["Она' говори'ла о кни'ги?", '¿Hablaba de libros? (mal dicho)', 'Plural prepositivo: о книгах.']] },
      { ru: "Мо'жет быть. Ла'дно. Пошли'. В музе'ях я всегда' сли'шком мно'го ду'маю.", es: 'Puede ser. Bueno. Vamos. En los museos siempre pienso demasiado.' },
      { u: [["Ду'мать — э'то хорошо'.", 'Pensar está bien.', 'Para ti es fácil decirlo. Tú no piensas. Es broma. Gracias.']] },
    ],
    phrases: [
      ["О чём ты ду'маешь?", '¿En qué piensas?'],
      ["Я ду'маю о тебе'.", 'Pienso en ti.'],
      ["Расскажи' о себе'.", 'Háblame de ti.'],
      ["о ней / о нём", 'de ella / de él'],
      ["карти'на", 'cuadro, pintura'],
      ["худо'жник", 'pintor, artista'],
      ["в музе'ях", 'en los museos'],
      ["Пошли'!", '¡Vamos!'],
    ],
    grammar: {
      id: 'g34', title: '«О»: hablar de, pensar en',
      body: `<p>[[о]] (sobre, de) + <b>prepositivo</b>: [[говори'ть о кни'ге]], [[ду'мать о ба'бушке]]</p>
<p>Antes de vocal se dice [[об]]: [[об Испа'нии]]. Y con pronombres: [[обо мне]], [[о тебе']], [[о нём]], [[о ней]], [[о нас]], [[о них]].</p>
<p>¿De qué? [[о чём?]] · ¿De quién? [[о ком?]]</p>
<p>Prepositivo plural: siempre <b>-ах / -ях</b>: [[в музе'ях]], [[о кни'гах]], [[в города'х]].</p>`,
      drills: [
        { q: "Я ду'маю о ___.", es: 'Pienso en mi abuela.', o: ["ба'бушке", "ба'бушка", "ба'бушку"], x: 'О + prepositivo: -е.' },
        { q: "Расскажи' о ___.", es: 'Habla de él.', o: ["нём", "его'", "он"], x: 'О нём.' },
        { q: "___ чём ты ду'маешь?", es: '¿En qué piensas?', o: ["О", "В", "На"], x: 'О чём.' },
        { q: "Мы говори'м о ___.", es: 'Hablamos de libros.', o: ["кни'гах", "кни'ги", "кни'гам"], x: 'Plural prepositivo: -ах.' },
        { q: "Он мно'го говори'т ___ Испа'нии.", es: 'Habla mucho de España.', o: ["об", "о", "обо"], x: 'Antes de vocal: об.' },
      ],
    },
    outro: 'Hoy hablé de mi abuela. No me acostumbres a hablar de sentimientos. Mañana: gramática dura.',
  },
  {
    id: 'l35', level: 3, ru: "Позвони' ма'ме!", es: '¡Llama a mamá!',
    scene: 'Domingo. Llevas dos semanas en Petersburgo y no has llamado a tu familia. Masha se entera. Masha no lo aprueba.',
    intro: 'El dativo: dar algo A alguien, llamar A alguien. Ya conoces «мне», «тебе». Ahora, con nombres.',
    dialog: [
      { ru: "Ты {звони'л|звони'ла} ма'ме?", es: '¿Llamaste a tu mamá?' },
      { u: [["Э… нет. Ещё нет.", 'Eh… no. Todavía no.'], ["Да, я звони'л ма'ма.", 'Sí, llamé mamá (mal dicho).', 'A mamá = маме. Y no te creo.']] },
      { ru: "Две неде'ли! Позвони' ма'ме. Сейча'с.", es: '¡Dos semanas! Llama a tu mamá. Ahora.', e: 'annoyed' },
      { u: [["Хорошо', хорошо'. А ты звони'шь ма'ме?", 'Vale, vale. ¿Y tú llamas a tu mamá?'], ["Нет, я пишу' па'пе.", 'No, le escribo a papá.', 'Escríbele a papá también. Después.']] },
      { ru: "Ка'ждый ве'чер. И ба'бушке по воскресе'ньям. И Ка'те — когда' она' мне пи'шет.", es: 'Cada noche. Y a la abuela los domingos. Y a Katia, cuando me escribe.' },
      { u: [["Ты хоро'шая дочь.", 'Eres una buena hija.', 'Lo sé. Y tú un hijo regular. Llama.'], ["А что ты да'ришь ма'ме на день рожде'ния?", '¿Y qué le regalas a tu mamá por su cumpleaños?', 'Libros. Siempre libros. Llama. YA.']], k: 2 },
      { n: 'Llamas. Tu mamá llora de alegría. Masha finge que no escucha.' },
      { ru: "Ну? Что сказа'ла ма'ма?", es: '¿Y? ¿Qué dijo tu mamá?' },
      { u: [["Она' переда'ёт тебе' приве'т!", '¡Te manda saludos!', '…Ah. Dale saludos también. De mi parte. Y de Pelmén.']] },
    ],
    phrases: [
      ["Позвони' ма'ме!", '¡Llama a tu mamá!'],
      ["Я пишу' дру'гу.", 'Le escribo a un amigo.'],
      ["дари'ть пода'рок", 'regalar algo'],
      ["Переда'й приве'т!", '¡Manda saludos!'],
      ["Она' переда'ёт тебе' приве'т.", 'Te manda saludos.'],
      ["ка'ждый ве'чер", 'cada noche'],
      ["дочь / сын", 'hija / hijo'],
      ["Ещё нет.", 'Todavía no.'],
    ],
    grammar: {
      id: 'g35', title: 'Dativo: a quién',
      body: `<p>El <b>destinatario</b> (a quién das, llamas, escribes, dices) va en dativo:</p>
<p>masculino / neutro → <b>-у / -ю</b>: [[брат]] → [[бра'ту]], [[преподава'тель]] → [[преподава'телю]]</p>
<p>femenino → <b>-е</b>: [[ма'ма]] → [[ма'ме]], [[Ка'тя]] → [[Ка'те]] · (-ия → -ии: [[Мари'я]] → [[Мари'и]]; -ь → -и: [[дочь]] → [[до'чери]])</p>
<p>Verbos típicos: [[звони'ть]] (llamar), [[писа'ть]] (escribir), [[дава'ть]] (dar), [[дари'ть]] (regalar), [[говори'ть]] (decir), [[помога'ть]] (ayudar).</p>`,
      drills: [
        { q: "Позвони' ___!", es: '¡Llama a mamá!', o: ["ма'ме", "ма'му", "ма'мы"], x: 'Femenino: -е.' },
        { q: "Я пишу' ___.", es: 'Le escribo a mi hermano.', o: ["бра'ту", "бра'та", "брат"], x: 'Masculino: -у.' },
        { q: "Мы помога'ем ___.", es: 'Ayudamos a Katia.', o: ["Ка'те", "Ка'тю", "Ка'ти"], x: 'Помогать + dativo.' },
        { q: "Что ты да'ришь ___?", es: '¿Qué le regalas a papá?', o: ["па'пе", "па'пу", "па'па"], x: 'Папа se declina como femenino: папе.' },
        { q: "Переда'й приве'т ___!", es: '¡Saluda a Pelmén de mi parte!', o: ["Пельме'ню", "Пельме'ня", "Пельме'нь"], x: 'Masculino en -ь: -ю.' },
      ],
    },
    outro: 'Llamaste. Tu mamá está feliz. Pelmén también, porque yo estoy de buen humor y le di atún.',
  },
  {
    id: 'l36', level: 3, ru: "К врачу' и'ли к Ма'ше?", es: '¿Al médico o a casa de Masha?',
    scene: 'Fin del primer mes. Vadim tiene gripe y pide ayuda. Masha dice que no es enfermera. Va igual.',
    intro: 'Hoy: «к» (hacia una persona) y repaso del dativo. Y Masha haciendo de buena persona. Que no se entere nadie.',
    dialog: [
      { who: 'vadim', ru: "Ма'ша, мне пло'хо. У меня' температу'ра.", es: 'Masha, me siento mal. Tengo fiebre.' },
      { ru: "Иди' к врачу'.", es: 'Ve al médico.', e: 'annoyed' },
      { who: 'vadim', ru: "Я не хочу' к врачу'. Я хочу' суп.", es: 'No quiero ir al médico. Quiero sopa.' },
      { ru: "Ты слы'шишь? Он хо'чет суп. Я не повари'ха.", es: '¿Oyes? Quiere sopa. No soy cocinera.' },
      { u: [["Дава'й пойдём к нему' вме'сте!", '¡Vamos a su casa juntos!'], ["Дава'й пойдём к он вме'сте!", 'Vamos a él juntos (mal dicho).', 'К + dativo: к нему.']] },
      { ru: "…Ла'дно. Но я несу' чай, а не суп.", es: '…Bueno. Pero llevo té, no sopa.', e: 'eyeroll' },
      { n: 'Más tarde, en la habitación de Vadim. Masha trajo té, miel, limones… y sopa.' },
      { u: [["Ты принесла' суп!", '¡Trajiste sopa!', 'Era de ayer. Sobraba. No significa nada.'], ["Ты не принесла' суп.", 'No trajiste sopa.', 'Mira bien. Es sopa. Pero no significa nada.']] },
      { who: 'vadim', ru: "Ма'ша, ты а'нгел.", es: 'Masha, eres un ángel.' },
      { ru: "Я не а'нгел. Я преподава'тель. Выздора'вливай, глу'пый.", es: 'No soy un ángel. Soy profesora. Recupérate, tonto.', e: 'pleased' },
      { u: [["Ма'ша, тебе' идёт быть до'брой.", 'Masha, te queda bien ser buena.', 'Silencio. Nivel tres terminado. Vete a estudiar.']] },
    ],
    phrases: [
      ["Иди' к врачу'.", 'Ve al médico.'],
      ["Пойдём к Ма'ше!", '¡Vamos a casa de Masha!'],
      ["к нему' / к ней", 'a su casa (de él / de ella)'],
      ["Я несу' чай.", 'Llevo té.'],
      ["Ты принесла' суп!", '¡Trajiste sopa!'],
      ["мёд", 'miel'],
      ["глу'пый", 'tonto'],
      ["Тебе' идёт…", 'Te queda bien…'],
    ],
    grammar: {
      id: 'g36', title: '«К»: ir hacia alguien',
      body: `<p>[[к]] (hacia, a casa de) + <b>dativo</b>. Se usa sobre todo con <b>personas</b>: [[к врачу']] (al médico), [[к Ма'ше]] (a casa de Masha), [[к ба'бушке]].</p>
<p>Con lugares se usa в/на + acusativo: [[в больни'цу]], [[на рабо'ту]]. Con personas, к: [[к дру'гу]].</p>
<p>Pronombres tras к: [[ко мне]], [[к тебе']], [[к нему']], [[к ней]], [[к нам]], [[к ним]].</p>
<p>Y una expresión útil: [[Тебе' идёт]] (te queda bien): [[Тебе' идёт э'то пла'тье.]]</p>`,
      drills: [
        { q: "Иди' к ___.", es: 'Ve al médico.', o: ["врачу'", "врача'", "врач"], x: 'К + dativo.' },
        { q: "Мы идём к ___.", es: 'Vamos a casa de la abuela.', o: ["ба'бушке", "ба'бушку", "ба'бушки"], x: 'Femenino: -е.' },
        { q: "Приходи' ко ___!", es: '¡Ven a mi casa!', o: ["мне", "меня'", "я"], x: 'Ко мне.' },
        { q: "Я е'ду ___ рабо'ту.", es: 'Voy al trabajo.', o: ["на", "к", "в"], x: 'Lugar: на работу.' },
        { q: "Пойдём к ___.", es: 'Vamos a su casa (de él).', o: ["нему'", "его'", "он"], x: 'К нему.' },
      ],
    },
    outro: 'Fin del nivel tres. Sobreviviste a un mes en Petersburgo. Vadim también, gracias a mi sopa. Que no era mía.',
  },
);
