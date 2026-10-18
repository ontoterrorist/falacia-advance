/* Nivel 10 · Hablar con libertad (lecciones 109–120) */
LESSONS.push(
  {
    id: 'l109', level: 10, ru: "У меня' получи'лось!", es: '¡Me salió!',
    scene: 'Noviembre. Intentas hacer pelmeni solo, sin ayuda de nadie, por primera vez desde la lección 47. Masha supervisa por videollamada. Con los brazos cruzados.',
    intro: 'Último nivel. Hoy: получаться y удаваться. «Me salió», «no me sale». En ruso las cosas te salen solas. O no.',
    dialog: [
      { ru: "Ну? Получа'ется?", es: '¿Y? ¿Te sale?', e: 'smirk' },
      { u: [["Получа'ется! Смотри', како'й краси'вый пельме'нь!", '¡Me sale! ¡Mira qué pelmeni tan bonito!'], ["Я получа'ю!", '¡Recibo! (mal dicho)', '«Me sale» = у меня получается. Получать es recibir.']] },
      { ru: "Хм. Э'тот — да. А вот э'тот… похо'ж на Пельме'ня. На кота'.", es: 'Hm. Este sí. Pero este… se parece a Pelmén. Al gato.' },
      { u: [["У меня' не всё получа'ется сра'зу.", 'No todo me sale a la primera.', 'A nadie. A mí me salió el número 300. Sigue.'], ["Мне не удало'сь э'тот.", 'Este no me salió.', 'Correcto. Удаться: lograr. Muy elegante.']], k: 2 },
      { n: 'Una hora después. Cincuenta pelmeni. Cuarenta y ocho son perfectos.' },
      { ru: "Со'рок во'семь из пяти'десяти. Тебе' удало'сь. Ба'бушка бу'дет горди'ться.", es: 'Cuarenta y ocho de cincuenta. Lo lograste. La abuela estará orgullosa.', e: 'happy' },
      { u: [["У меня' всё получи'лось благодаря' тебе'.", 'Todo me salió gracias a ti.', 'Gracias a la abuela. Y a ti. Yo solo crucé los brazos.']] },
    ],
    phrases: [
      ["У меня' получи'лось!", '¡Me salió! / ¡Lo logré!'],
      ["У меня' не получа'ется.", 'No me sale.'],
      ["Мне удало'сь…", 'Logré… / Conseguí…'],
      ["Получа'ется?", '¿Te sale? / ¿Funciona?'],
      ["сра'зу", 'a la primera, enseguida'],
      ["похо'ж на…", 'se parece a…'],
      ["горди'ться", 'estar orgulloso'],
      ["из пяти'десяти", 'de cincuenta'],
    ],
    grammar: {
      id: 'g109', title: 'Получаться y удаваться',
      body: `<p>[[у меня' получа'ется]] / [[получи'лось]] = me sale / me salió. Lo que sale es el sujeto: [[У меня' получи'лся пиро'г.]] (me salió bien el pastel)</p>
<p>Sin sujeto, en neutro: [[У меня' не получа'ется.]] No me sale.</p>
<p>[[мне удаётся]] / [[удало'сь]] + infinitivo = logro, consigo (más formal), con <b>dativo</b>: [[Мне удало'сь найти' рабо'ту.]]</p>
<p>No confundir con [[получа'ть]] (recibir): [[Я получи'л письмо'.]]</p>`,
      drills: [
        { q: "У меня' всё ___!", es: '¡Me salió todo!', o: ["получи'лось", "получи'л", "получи'ла"], x: 'Sin sujeto: neutro.' },
        { q: "___ удало'сь найти' кварти'ру.", es: 'Logré encontrar departamento.', o: ["Мне", "У меня'", "Я"], x: 'Удаться + dativo.' },
        { q: "У него' не ___ говори'ть по-кита'йски.", es: 'No le sale hablar chino.', o: ["получа'ется", "получа'ет", "удаётся ему'"], x: 'У него не получается.' },
        { q: "Я ___ твоё письмо'.", es: 'Recibí tu carta.', o: ["получи'л", "получи'лось", "удало'сь"], x: 'Recibir: получил.' },
        { q: "У неё ___ вку'сный торт.", es: 'Le salió un pastel rico.', o: ["получи'лся", "получи'лось", "получи'ла"], x: 'Торт → masculino: получился.' },
      ],
    },
    outro: 'Cuarenta y ocho pelmeni perfectos. Hace un año, uno parecía una piedra. Eso es aprender.',
  },
  {
    id: 'l110', level: 10, ru: "Е'сли бы я не прие'хал…", es: 'Si no hubiera venido…',
    scene: 'Diciembre. Hace un año exacto que llegaste a Petersburgo. Masha y tú pasean por el malecón del Nevá. Nieva. Por fin nieve y no lluvia.',
    intro: 'Hoy: el condicional en pasado. «Si no hubiera venido, no te habría conocido». En ruso es igual que el presente: pasado + бы. Lo difícil son los sentimientos.',
    dialog: [
      { ru: "Год наза'д ты {прие'хал|прие'хала}. По'мнишь?", es: 'Hace un año llegaste. ¿Te acuerdas?' },
      { u: [["Е'сли бы я не {прие'хал|прие'хала}, я бы не {встре'тил|встре'тила} вас.", 'Si no hubiera venido, no los habría conocido.', '…Sí. Y yo no habría tenido a quién regañar. Qué vida tan aburrida.'], ["Е'сли я не прие'ду, я не встре'чу вас.", 'Si no vengo, no los conoceré.', 'Eso es futuro. Ya pasó: если бы я не приехал…']] },
      { ru: "А е'сли бы ты не {сказа'л|сказа'ла} Серге'ю, что я свобо'дна… я бы не жила' с ним.", es: 'Y si no le hubieras dicho a Serguéi que yo estaba libre… no viviría con él.' },
      { u: [["Е'сли бы не Вади'м, Ка'тя не вы'шла бы за'муж.", 'Si no fuera por Vadim, Katia no se habría casado.', 'Si no fuera por Vadim, nada. Él lo empezó todo. Con sus poemas malos.'], ["Е'сли бы не ты, я бы не {знал|зна'ла} ру'сский.", 'Si no fuera por ti, no sabría ruso.', 'Si no fuera por ti, no habría ruso que enseñar. Empate.']], k: 2 },
      { ru: "Ла'дно. Хва'тит. Я бы запла'кала, но хо'лодно. Слёзы замёрзнут.", es: 'Bueno. Basta. Lloraría, pero hace frío. Las lágrimas se congelarían.', e: 'sad' },
      { u: [["Пойдём пить чай.", 'Vamos a tomar té.', 'Sí. Eso. Té. La respuesta rusa a todo.']] },
    ],
    phrases: [
      ["Е'сли бы я не {прие'хал|прие'хала}…", 'Si no hubiera venido…'],
      ["Е'сли бы не ты…", 'Si no fuera por ti…'],
      ["я бы не {встре'тил|встре'тила} тебя'", 'no te habría conocido'],
      ["По'мнишь?", '¿Te acuerdas?'],
      ["на'бережная", 'malecón, paseo junto al río'],
      ["слёзы", 'lágrimas'],
      ["замёрзнуть", 'congelarse'],
      ["Хва'тит.", 'Basta.'],
    ],
    grammar: {
      id: 'g110', title: 'Condicional en pasado',
      body: `<p>En ruso no hay diferencia de forma entre «si fuera» y «si hubiera sido»: siempre <b>pasado + бы</b>. El contexto decide:</p>
<p>[[Е'сли бы я знал, я бы пришёл.]] = Si lo supiera, vendría / Si lo hubiera sabido, habría venido.</p>
<p>«Si no fuera por…» = [[е'сли бы не]] + nominativo: [[Е'сли бы не ты, я бы не сдал.]]</p>
<p>Para dejarlo claro se añaden palabras de tiempo: [[Е'сли бы вчера' был дождь…]] · [[Е'сли бы я тогда' знал…]]</p>`,
      drills: [
        { q: "Е'сли бы я знал, я ___ пришёл.", es: 'Si lo hubiera sabido, habría venido.', o: ["бы", "ли", "бу'ду"], x: 'Pasado + бы.' },
        { q: "Е'сли бы не ___, я бы не сдал экза'мен.", es: 'Si no fuera por ti, no habría aprobado.', o: ["ты", "тебя'", "тебе'"], x: 'Если бы не + nominativo.' },
        { q: "Е'сли бы вчера' не ___ дождь, мы бы гуля'ли.", es: 'Si ayer no hubiera llovido, habríamos paseado.', o: ["шёл", "идёт", "пойдёт"], x: 'Pasado: шёл.' },
        { q: "Я бы ___ тебе', но не знал но'мер.", es: 'Te habría llamado, pero no sabía el número.', o: ["позвони'л", "позвоню'", "звоню'"], x: 'Бы + pasado.' },
        { q: "Что бы ты ___ на моём ме'сте?", es: '¿Qué habrías hecho en mi lugar?', o: ["сде'лал", "сде'лаешь", "де'лаешь"], x: 'Бы + pasado.' },
      ],
    },
    outro: 'Un año en Petersburgo. Si no hubieras venido… mejor no pensarlo. Té.',
  },
  {
    id: 'l111', level: 10, ru: "Она' проси'ла, что'бы вы прие'хали", es: 'Pidió que vinieran',
    scene: '14 de enero, 3 de la madrugada. Suena el teléfono. Es Vadim. Gritando. El bebé nació.',
    intro: 'Hoy: transmitir órdenes y pedidos: «dijo que vinieran», «pidió que llamaras». чтобы + pasado. Y un bebé.',
    dialog: [
      { who: 'vadim', ru: "Ма'ша! Родила'сь! Де'вочка! Три ки'ло пятьсо'т!", es: '¡Masha! ¡Nació! ¡Una niña! ¡Tres kilos quinientos!' },
      { ru: "Вади'м! Как Ка'тя? Что она' сказа'ла?", es: '¡Vadim! ¿Cómo está Katia? ¿Qué dijo?', e: 'surprised' },
      { who: 'vadim', ru: "Ка'тя проси'ла, что'бы вы прие'хали. Все. И что'бы Ма'ша привезла' пиро'г.", es: 'Katia pidió que vinieran. Todos. Y que Masha trajera pastel.' },
      { u: [["Ма'ша, Ка'тя хо'чет, что'бы мы прие'хали!", 'Masha, ¡Katia quiere que vayamos!'], ["Ма'ша, Ка'тя хо'чет, что'бы мы прие'дем!", '(mal dicho)', 'Чтобы + pasado: приехали.']] },
      { ru: "Я слы'шала. Скажи' Серге'ю, что'бы он купи'л биле'ты. Сейча'с же!", es: 'Lo oí. Dile a Serguéi que compre billetes. ¡Ahora mismo!' },
      { who: 'vadim', ru: "И ещё. Мы хоти'м, что'бы ты была' крёстной.", es: 'Y otra cosa. Queremos que seas la madrina.' },
      { ru: "Я? Крёстной? …Да. Да! Коне'чно да!", es: '¿Yo? ¿Madrina? …Sí. ¡Sí! ¡Claro que sí!', e: 'happy' },
      { u: [["А как её зову'т?", '¿Y cómo se llama?', 'Vadim duda. Después dice: «Галина. Como la abuela». Masha llora. Ya sin excusas.']] },
    ],
    phrases: [
      ["Она' проси'ла, что'бы вы прие'хали.", 'Pidió que vinieran.'],
      ["Скажи' ему', что'бы он позвони'л.", 'Dile que llame.'],
      ["Родила'сь де'вочка!", '¡Nació una niña!'],
      ["ма'льчик / де'вочка", 'niño / niña'],
      ["крёстная / крёстный", 'madrina / padrino'],
      ["Сейча'с же!", '¡Ahora mismo!'],
      ["три ки'ло", 'tres kilos'],
      ["роди'ться", 'nacer'],
    ],
    grammar: {
      id: 'g111', title: 'Órdenes indirectas: чтобы',
      body: `<p>Para transmitir una orden o un pedido: [[сказа'ть]] / [[проси'ть]] / [[хоте'ть]] + [[что'бы]] + <b>pasado</b>:</p>
<p>«¡Vengan!» → [[Она' сказа'ла, что'бы вы прие'хали.]] · «Llama» → [[Скажи' ему', что'бы он позвони'л.]]</p>
<p>Comparar: [[Она' сказа'ла, что вы прие'хали]] (dijo que ustedes llegaron: información) / [[Она' сказа'ла, что'бы вы прие'хали]] (dijo que vinieran: orden).</p>
<p>¡Una letra cambia todo!</p>`,
      drills: [
        { q: "Ма'ма сказа'ла, ___ я пришёл в семь.", es: 'Mamá dijo que viniera a las siete.', o: ["что'бы", "что", "ли"], x: 'Orden: чтобы.' },
        { q: "Он сказа'л, ___ уже' пришёл.", es: 'Dijo que ya había llegado.', o: ["что", "что'бы", "ли"], x: 'Información: что.' },
        { q: "Попроси' его', что'бы он ___ хлеб.", es: 'Pídele que compre pan.', o: ["купи'л", "ку'пит", "купи'ть"], x: 'Чтобы + pasado.' },
        { q: "Я хочу', что'бы ты ___ крёстной.", es: 'Quiero que seas la madrina.', o: ["была'", "бу'дешь", "быть"], x: 'Чтобы + pasado: была.' },
        { q: "Скажи' им, что'бы они' не ___.", es: 'Diles que no lleguen tarde.', o: ["опа'здывали", "опа'здывают", "опозда'ют"], x: 'Чтобы + pasado.' },
      ],
    },
    outro: 'Se llama Galina. Galia. Como la abuela. Soy madrina. Tía Masha y madrina Masha. Necesito sentarme.',
  },
  {
    id: 'l112', level: 10, ru: "Чё как?", es: '¿Qué onda?',
    scene: 'Moscú, en casa de Katia y Vadim. Llega Dima, el primo de Vadim, de 16 años. Habla un ruso que no está en ningún libro.',
    intro: 'Hoy: el ruso coloquial. Lo que dicen los jóvenes. No lo uses con Olga Petrovna. Ni con la abuela. Ni conmigo. Bueno, conmigo a veces.',
    dialog: [
      { who: 'dima', ru: "Приве'т! Чё как? Норм?", es: '¡Hola! ¿Qué onda? ¿Todo bien?' },
      { u: [["Приве'т! Всё норм. А у тебя'?", '¡Hola! Todo bien. ¿Y tú?', 'Dima te choca la mano. Eres aceptado.'], ["Здра'вствуйте! У меня' всё хорошо', спаси'бо.", '¡Buenos días! Estoy bien, gracias.', 'Dima te mira como a un abuelo. Demasiado formal.']] },
      { who: 'dima', ru: "Ща покажу' ви'дос. Он о'чень прико'льный.", es: 'Ahora te enseño un video. Es muy chulo.' },
      { ru: "«Ща» — э'то «сейча'с». «Ви'дос» — э'то «ви'део». «Прико'льный» — э'то «смешно'й, интере'сный».", es: '«Ща» es «сейчас». «Видос» es «видео». «Прикольный» es «divertido, guay».', e: 'eyeroll' },
      { u: [["Прико'льно! Мне нра'вится.", '¡Qué guay! Me gusta.', 'Dima sonríe. Masha suspira.'], ["Э'то весьма' интере'сное ви'део.", 'Es un video bastante interesante.', 'Dima se ríe. Hablas como un libro de Tolstói.']], k: 1 },
      { who: 'dima', ru: "Ты кла'ссный. Не то что тётя Ма'ша. Она' стро'гая.", es: 'Eres genial. No como la tía Masha. Ella es estricta.' },
      { ru: "Я слы'шу всё, Ди'ма. Как О'льга Петро'вна.", es: 'Lo oigo todo, Dima. Como Olga Petrovna.', e: 'smirk' },
    ],
    phrases: [
      ["Чё как?", '¿Qué onda? / ¿Qué tal? (muy coloquial)'],
      ["Норм.", 'Bien, normal (coloquial).'],
      ["Ща!", '¡Ya voy! / ¡Ahora! (= сейчас)'],
      ["Прико'льно!", '¡Qué guay! / ¡Qué divertido!'],
      ["кла'ссный", 'genial, guay'],
      ["ви'дос", 'video (coloquial)'],
      ["Не то что…", 'No como…'],
      ["Ва'у!", '¡Guau!'],
    ],
    grammar: {
      id: 'g112', title: 'Ruso coloquial',
      body: `<p>En la calle, las palabras se acortan: [[сейча'с]] → [[ща]] · [[что]] → [[чё]] · [[норма'льно]] → [[норм]] · [[спаси'бо]] → <b>спс</b> (por escrito) · [[пожа'луйста]] → <b>пжлст</b></p>
<p>Palabras típicas: [[прико'льно]] (guay) · [[кла'ссно]] (genial) · [[кру'то]] (genial, guay) · [[ничего' себе'!]] (¡vaya!) · [[блин!]] (¡caramba! — literalmente «blini»)</p>
<p>Úsalo con amigos jóvenes. Con desconocidos, profesores y abuelas: ruso normal. El registro también es gramática.</p>`,
      drills: [
        { p: '«ща» significa…', o: ["сейча'с", "что", "ещё"], x: 'Ща = сейчас.' },
        { p: 'Saludas a un amigo de 16 años:', o: ["Приве'т! Чё как?", "Здра'вствуйте! Как пожива'ете?", "Уважа'емый Ди'ма!"], x: 'Coloquial entre jóvenes.' },
        { p: 'Saludas a Olga Petrovna:', o: ["Здра'вствуйте, О'льга Петро'вна!", "Чё как, О'ля?", "Приве'т! Норм?"], x: 'Con ella, siempre formal. Bueno, casi.' },
        { p: '«¡Qué guay!» (coloquial)', o: ["Кру'то!", "Блин!", "Ща!"], x: 'Круто / прикольно.' },
        { p: 'Se te cae el teléfono. Dices (suave):', o: ["Блин!", "Кру'то!", "Норм!"], x: 'Блин: ¡caramba!' },
      ],
    },
    outro: 'Dima te enseñó más palabras en una hora que yo en un mes. Ninguna sirve para el examen. Todas sirven para la vida.',
  },
  {
    id: 'l113', level: 10, ru: "Да ла'дно!", es: '¡No me digas!',
    scene: 'De vuelta en Petersburgo. Olga Petrovna llama a Masha a su despacho. Masha sale con una cara que nunca has visto.',
    intro: 'Hoy: exclamaciones. Las que usas cuando te dan una noticia enorme. ¡No me digas! ¡Vaya! ¡Increíble! Prepárate.',
    dialog: [
      { ru: "О'льга Петро'вна ухо'дит на пе'нсию. И… она' хо'чет, что'бы я ста'ла дире'ктором.", es: 'Olga Petrovna se jubila. Y… quiere que yo sea la directora.', e: 'surprised' },
      { u: [["Да ла'дно! Ты? Дире'ктор?", '¡No me digas! ¿Tú? ¿Directora?'], ["Ну ты даёшь!", '¡Increíble lo tuyo!', 'Sí. Eso. «Ну ты даёшь» a mí misma.']], k: 2 },
      { ru: "Я. Дире'ктор. С кабине'том. И с ча'ем в рабо'чее вре'мя.", es: 'Yo. Directora. Con despacho. Y con té en horario laboral.' },
      { u: [["Вот э'то да! Поздравля'ю!", '¡Pero qué cosa! ¡Felicidades!', 'Gracias. Estoy aterrada. Pero gracias.'], ["Ничего' себе'! Ты согласи'лась?", '¡Vaya! ¿Aceptaste?', 'Dije: lo pensaré. O sea, sí. Ya sabes mi idioma.']], k: 2 },
      { ru: "Ой, блин. Тепе'рь я бу'ду как О'льга Петро'вна. Бу'ду всё ви'деть и всё слы'шать.", es: 'Ay, caramba. Ahora seré como Olga Petrovna. Lo veré todo y lo oiré todo.', e: 'smirk' },
      { u: [["Не мо'жет быть! Ты бу'дешь ещё стро'же!", '¡No puede ser! ¡Serás aún más estricta!', 'Exacto. Prepárate. Empiezo mañana. Contigo.']] },
    ],
    phrases: [
      ["Да ла'дно!", '¡No me digas! / ¡Venga ya!'],
      ["Ну ты даёшь!", '¡Increíble lo tuyo! / ¡Qué fuerte!'],
      ["Вот э'то да!", '¡Pero qué cosa! / ¡Vaya!'],
      ["Ничего' себе'!", '¡Vaya! / ¡Caramba!'],
      ["Не мо'жет быть!", '¡No puede ser!'],
      ["Ой, блин.", 'Ay, caramba.'],
      ["уйти' на пе'нсию", 'jubilarse'],
      ["кабине'т", 'despacho, oficina'],
    ],
    grammar: {
      id: 'g113', title: 'Exclamaciones',
      body: `<p>Sorpresa: [[Да ла'дно!]] (¡no me digas!) · [[Не мо'жет быть!]] · [[Ничего' себе'!]] · [[Вот э'то да!]] · [[Серьёзно?]] (¿en serio?)</p>
<p>Admiración o reproche cariñoso: [[Ну ты даёшь!]] · [[Молоде'ц!]] · [[Класс!]]</p>
<p>Fastidio: [[Блин!]] · [[Ну вот!]] · [[Опя'ть!]] · [[Ну и ну!]]</p>
<p>Alivio: [[Сла'ва Бо'гу!]] · [[Ну наконе'ц-то!]] · [[Уф!]]</p>
<p>La entonación lo es todo: [[Да ла'дно]] puede ser sorpresa, incredulidad o «bah, no importa».</p>`,
      drills: [
        { p: 'Te dicen una noticia increíble:', o: ["Да ла'дно!", "Сла'ва Бо'гу!", "Уф!"], x: 'Sorpresa: да ладно.' },
        { p: 'Por fin llega el autobús después de una hora:', o: ["Ну наконе'ц-то!", "Ничего' себе'!", "Ну ты даёшь!"], x: 'Alivio: ну наконец-то.' },
        { p: 'Tu amigo corrió una maratón sin entrenar:', o: ["Ну ты даёшь!", "Блин!", "Уф!"], x: 'Admiración: ну ты даёшь.' },
        { p: 'Se te quema la comida:', o: ["Блин!", "Вот э'то да!", "Молоде'ц!"], x: 'Fastidio: блин.' },
        { p: '«¡No puede ser!»', o: ["Не мо'жет быть!", "Не мо'жно быть!", "Нельзя' быть!"], x: 'Не может быть.' },
      ],
    },
    outro: 'Seré directora. Que Dios ayude a los profesores. Y a los alumnos. Y a ti.',
  },
  {
    id: 'l114', level: 10, ru: "Во-пе'рвых, кста'ти, коро'че", es: 'En primer lugar, por cierto, en resumen',
    scene: 'Fiesta de despedida de Olga Petrovna en la escuela. Masha te pide que digas unas palabras. En ruso. Delante de todos. Sin papel.',
    intro: 'Hoy: palabras para organizar un discurso: en primer lugar, por cierto, en resumen, en fin. Para hablar en público sin perderte.',
    dialog: [
      { ru: "Твоя' о'чередь. Скажи' не'сколько слов. Ко'ротко.", es: 'Tu turno. Di unas palabras. Breve.' },
      { u: [["Во-пе'рвых, спаси'бо, О'льга Петро'вна, за то, что вы при'няли меня' на рабо'ту.", 'En primer lugar, gracias, Olga Petrovna, por contratarme.'], ["Коро'че, спаси'бо.", 'En resumen, gracias.', '¿Ya terminaste? Demasiado corto. Y «короче» es muy coloquial.']] },
      { u: [["Во-вторы'х, за то, что вы всегда' всё ви'дели. Да'же запи'ски.", 'En segundo lugar, porque siempre lo veía todo. Incluso las notitas.', 'Risas. Serguéi se pone rojo. Olga Petrovna sonríe.'], ["Во-вторы'х, кста'ти, вы стро'гая.", 'En segundo lugar, por cierto, es estricta.', 'Cuidado. Todavía es tu jefa. Por dos horas.']] },
      { u: [["Кста'ти, я до сих пор бою'сь опа'здывать.", 'Por cierto, todavía me da miedo llegar tarde.', 'Todos asienten. Todos tienen ese miedo. Es su legado.']] },
      { u: [["В о'бщем, без вас шко'ла бу'дет друго'й. Но в хоро'ших рука'х.", 'En fin, sin usted la escuela será distinta. Pero en buenas manos.', 'Aplausos. Olga Petrovna se levanta. Y te abraza. Abraza. Olga Petrovna.']] },
      { who: 'olga', ru: "Спаси'бо. Я горжу'сь ва'ми. Все'ми. Осо'бенно Ма'шей.", es: 'Gracias. Estoy orgullosa de ustedes. De todos. Sobre todo de Masha.' },
      { ru: "…Я не пла'чу. В шко'ле нет лу'ка.", es: '…No lloro. En la escuela no hay cebolla.', e: 'sad' },
    ],
    phrases: [
      ["во-пе'рвых, во-вторы'х", 'en primer lugar, en segundo lugar'],
      ["кста'ти", 'por cierto'],
      ["в о'бщем", 'en fin, en general'],
      ["коро'че", 'en resumen (coloquial)'],
      ["наконе'ц", 'por último, finalmente'],
      ["до сих пор", 'hasta ahora, todavía'],
      ["в хоро'ших рука'х", 'en buenas manos'],
      ["Скажи' не'сколько слов.", 'Di unas palabras.'],
    ],
    grammar: {
      id: 'g114', title: 'Organizar lo que dices',
      body: `<p>Para ordenar: [[во-пе'рвых]], [[во-вторы'х]], [[в-тре'тьих]], [[наконе'ц]] (por último)</p>
<p>Para añadir algo de paso: [[кста'ти]] (por cierto), [[ме'жду про'чим]] (por cierto, entre otras cosas)</p>
<p>Para resumir: [[в о'бщем]] (en fin), [[ита'к]] (así pues, formal), [[коро'че]] (en resumen, coloquial), [[одни'м сло'вом]] (en una palabra)</p>
<p>Para aclarar: [[то есть]] (es decir), [[наприме'р]] (por ejemplo), [[други'ми слова'ми]] (en otras palabras)</p>`,
      drills: [
        { p: '«por cierto»', o: ["кста'ти", "коро'че", "во-пе'рвых"], x: 'Кстати.' },
        { p: 'Empiezas a enumerar razones:', o: ["Во-пе'рвых…", "Наконе'ц…", "В о'бщем…"], x: 'Во-первых.' },
        { p: 'Resumes en un discurso formal:', o: ["Ита'к…", "Коро'че…", "Ща…"], x: 'Formal: итак.' },
        { p: '«por ejemplo»', o: ["наприме'р", "то есть", "кста'ти"], x: 'Например.' },
        { p: '«es decir»', o: ["то есть", "в о'бщем", "наконе'ц"], x: 'То есть.' },
      ],
    },
    outro: 'Hablaste en público. En ruso. Sin papel. Olga Petrovna te abrazó. Hay testigos.',
  },
  {
    id: 'l115', level: 10, ru: "С одно'й стороны'…", es: 'Por un lado…',
    scene: 'Masha, directora desde hace una semana, tiene que decidir algo difícil: abrir o no un curso de español para niños. Te pide opinión. De verdad, esta vez.',
    intro: 'Hoy: argumentar. Por un lado, por otro lado, sin embargo, en cambio. Para discutir como un adulto. O como una directora.',
    dialog: [
      { ru: "С одно'й стороны', де'тский курс — э'то но'вые студе'нты. С друго'й стороны', де'ти — э'то шум.", es: 'Por un lado, un curso infantil son estudiantes nuevos. Por otro lado, los niños son ruido.' },
      { u: [["Тем не ме'нее, де'ти у'чатся быстре'е взро'слых.", 'Sin embargo, los niños aprenden más rápido que los adultos.', 'Eso es verdad. Y no discuten sobre ser y estar.'], ["С одно'й стороны', шум. С одно'й стороны', студе'нты.", '(mal dicho)', 'Por un lado… por OTRO lado: с другой стороны.']] },
      { ru: "Но кто бу'дет их учи'ть? У нас нет преподава'теля.", es: 'Pero ¿quién les enseñará? No tenemos profesor.' },
      { u: [["Я {мог|могла'} бы. Зато' я зна'ю, как тру'дно учи'ть язы'к.", 'Yo podría. En cambio, sé lo difícil que es aprender un idioma.', '…Tú. Profesor de niños. En mi escuela. …Me gusta.'], ["Не зна'ю. Э'то не моё де'ло.", 'No sé. No es asunto mío.', 'Error. Ahora es asunto tuyo. Porque te lo estoy ofreciendo.']] },
      { ru: "Зна'чит, реше'но. Ты ведёшь де'тский курс. Начина'ем в сентябре'.", es: 'Entonces está decidido. Tú das el curso infantil. Empezamos en septiembre.', e: 'happy' },
      { u: [["Ты э'то пла'нировала с са'мого нача'ла!", '¡Lo tenías planeado desde el principio!', 'Por supuesto. Soy directora. Planear es mi trabajo.']] },
    ],
    phrases: [
      ["с одно'й стороны'…, с друго'й стороны'…", 'por un lado…, por otro lado…'],
      ["тем не ме'нее", 'sin embargo, no obstante'],
      ["зато'", 'en cambio'],
      ["одна'ко", 'sin embargo'],
      ["Зна'чит, реше'но.", 'Entonces está decidido.'],
      ["де'тский курс", 'curso infantil'],
      ["взро'слые", 'adultos'],
      ["с са'мого нача'ла", 'desde el principio'],
    ],
    grammar: {
      id: 'g115', title: 'Argumentar',
      body: `<p>Dos caras: [[с одно'й стороны'…, с друго'й стороны'…]]</p>
<p>Contraste: [[одна'ко]] (sin embargo, más formal) · [[тем не ме'нее]] (no obstante) · [[зато']] (en cambio, compensa) · [[но]] (pero)</p>
<p>Consecuencia: [[поэ'тому]] (por eso) · [[зна'чит]] (o sea, entonces) · [[таки'м о'бразом]] (de este modo, formal)</p>
<p>Opinión: [[по-мо'ему]] · [[я счита'ю, что…]] (considero que) · [[на мой взгляд]] (a mi parecer)</p>`,
      drills: [
        { q: "С одно'й стороны', до'рого. С ___ стороны', удо'бно.", es: 'Por un lado, es caro. Por otro, es cómodo.', o: ["друго'й", "одно'й", "втору'ю"], x: 'С другой стороны.' },
        { q: "Он уста'л, ___ продолжа'л рабо'тать.", es: 'Estaba cansado; sin embargo, siguió trabajando.', o: ["тем не ме'нее", "поэ'тому", "зна'чит"], x: 'Contraste: тем не менее.' },
        { q: "Кварти'ра ма'ленькая, ___ дешёвая.", es: 'El departamento es pequeño, en cambio es barato.', o: ["зато'", "поэ'тому", "во-пе'рвых"], x: 'Compensación: зато.' },
        { q: "Я ___, что он прав.", es: 'Considero que tiene razón.', o: ["счита'ю", "счита'юсь", "сосчита'л"], x: 'Я считаю.' },
        { q: "Ты не пришёл, ___, ты был за'нят.", es: 'No viniste; o sea que estabas ocupado.', o: ["зна'чит", "зато'", "одна'ко"], x: 'Consecuencia: значит.' },
      ],
    },
    outro: 'Darás clase a niños. En septiembre. En mi escuela. Lo planeé todo. Desde la lección uno, casi.',
  },
  {
    id: 'l116', level: 10, ru: "Го'род был осно'ван…", es: 'La ciudad fue fundada…',
    scene: 'Serguéi, profesor de historia, te lleva a la Fortaleza de Pedro y Pablo. Donde empezó Petersburgo. Habla tres horas. Esta vez escuchas con gusto.',
    intro: 'Hoy: la voz pasiva. «Fue fundada», «fue construido». La lengua de los libros de historia, las noticias y los guías turísticos.',
    dialog: [
      { who: 'sergei', ru: "Петербу'рг был осно'ван Петро'м Пе'рвым в ты'сяча семьсо'т тре'тьем году'.", es: 'Petersburgo fue fundada por Pedro el Grande en 1703.' },
      { u: [["А кем была' постро'ена э'та кре'пость?", '¿Y quién construyó esta fortaleza? (¿Por quién fue construida?)'], ["А кто была' постро'ена?", '(mal dicho)', '¿Por quién? = кем (instrumental).']] },
      { who: 'sergei', ru: "Она' была' постро'ена тысяча'ми рабо'чих. Го'род стро'ился на боло'те.", es: 'Fue construida por miles de obreros. La ciudad se construía sobre un pantano.' },
      { u: [["Поэ'тому здесь всегда' сы'ро!", '¡Por eso aquí siempre hay humedad!', 'Exacto. Trescientos años de humedad. Masha tiene razón con la lluvia.'], ["Го'род стро'или три дня?", '¿Construyeron la ciudad en tres días?', 'Décadas. Y mucho sufrimiento. Serguéi suspira.']], k: 1 },
      { ru: "Сообща'ется, что в э'том году' в Петербу'рге бу'дет са'мое дождли'вое ле'то за сто лет.", es: 'Se informa de que este año en Petersburgo habrá el verano más lluvioso en cien años.', e: 'eyeroll' },
      { who: 'sergei', ru: "Ма'ша, ты чита'ешь но'вости во вре'мя экску'рсии?", es: 'Masha, ¿lees las noticias durante la excursión?' },
      { ru: "Я чита'ю но'вости о дожде'. Э'то моя' люби'мая те'ма.", es: 'Leo noticias sobre la lluvia. Es mi tema favorito.', e: 'smirk' },
    ],
    phrases: [
      ["Го'род был осно'ван в ты'сяча семьсо'т тре'тьем году'.", 'La ciudad fue fundada en 1703.'],
      ["Кре'пость была' постро'ена…", 'La fortaleza fue construida…'],
      ["кем?", '¿por quién?'],
      ["Сообща'ется, что…", 'Se informa de que…'],
      ["кре'пость", 'fortaleza'],
      ["боло'то", 'pantano'],
      ["сы'ро", 'húmedo'],
      ["экску'рсия", 'excursión, visita guiada'],
    ],
    grammar: {
      id: 'g116', title: 'La voz pasiva',
      body: `<p><b>Perfectivo</b>: [[быть]] + participio pasivo corto (lección 87): [[Го'род был осно'ван.]] · [[Кре'пость была' постро'ена.]] · [[Дома' бы'ли постро'ены.]]</p>
<p><b>Imperfectivo</b>: verbo en <b>-ся</b>: [[Го'род стро'ился сто лет.]] (se construía) · [[Э'та кни'га чита'ется легко'.]]</p>
<p>El agente («por…») va en <b>instrumental</b>: [[осно'ван Петро'м Пе'рвым]], [[постро'ена рабо'чими]].</p>
<p>En las noticias: [[Сообща'ется, что…]] (se informa) · [[Ожида'ется, что…]] (se espera que)</p>`,
      drills: [
        { q: "Го'род был ___ в ты'сяча семьсо'т тре'тьем году'.", es: 'La ciudad fue fundada en 1703.', o: ["осно'ван", "осно'вана", "осно'вано"], x: 'Город → masculino.' },
        { q: "Кре'пость была' ___.", es: 'La fortaleza fue construida.', o: ["постро'ена", "постро'ен", "постро'ено"], x: 'Крепость → femenino.' },
        { q: "Рома'н был напи'сан ___.", es: 'La novela fue escrita por Tolstói.', o: ["Толсты'м", "Толсто'й", "Толсто'го"], x: 'Agente: instrumental.' },
        { q: "Дом ___ два го'да.", es: 'La casa se estuvo construyendo dos años.', o: ["стро'ился", "постро'ен", "стро'ил"], x: 'Imperfectivo: -ся.' },
        { q: "___, что за'втра бу'дет снег.", es: 'Se espera que mañana nieve.', o: ["Ожида'ется", "Ожида'ют бы", "Ожида'л"], x: 'Ожидается.' },
      ],
    },
    outro: 'Trescientos años de historia en tres horas. Serguéi es feliz. Yo también. Pero no se lo digas.',
  },
  {
    id: 'l117', level: 10, ru: "Нас тро'е", es: 'Somos tres',
    scene: 'Primavera. En casa de Masha y Serguéi. Masha tiene algo que decir. Está nerviosa. Pelmén la mira fijamente.',
    intro: 'Hoy: los numerales colectivos: двое, трое. Para personas, para niños, para parejas. «Somos tres». Ya verás por qué.',
    dialog: [
      { ru: "Сади'сь. Мне на'до тебе' ко'е-что сказа'ть.", es: 'Siéntate. Tengo que decirte algo.', e: 'surprised' },
      { u: [["Что случи'лось? Вы о'ба здоро'вы?", '¿Qué pasó? ¿Están bien los dos?'], ["Что случи'лось? Вы о'бе здоро'вы?", '(mal dicho)', 'Hombre y mujer: оба.']] },
      { ru: "О'ба. Про'сто… ско'ро нас бу'дет тро'е.", es: 'Los dos. Solo que… pronto seremos tres.' },
      { u: [["Ма'ша! У вас бу'дет ребёнок?!", '¡Masha! ¡¿Van a tener un bebé?!', 'No. No. Siéntate bien. …Vamos a adoptar a otro gato.'], ["Нас бу'дет три?", '¿Seremos tres? (mal dicho)', 'Personas: трое.']] },
      { ru: "Нет! Мы берём второ'го кота'. Из прию'та. Его' зову'т Блин.", es: '¡No! Adoptamos un segundo gato. De un refugio. Se llama Blin.', e: 'happy' },
      { u: [["Блин?! Пельме'нь и Блин?", '¡¿Blin?! ¿Pelmén y Blin?', 'Sí. Dos gatos, dos platos rusos. Es una familia gastronómica.'], ["Дво'е кото'в!", '¡Dos gatos! (colectivo con animales es raro)', 'Con animales: два кота. Двое es para personas.']], k: 1 },
      { ru: "Нас тепе'рь че'тверо: я, Серге'й, Пельме'нь и Блин. Пельме'нь ещё не зна'ет.", es: 'Ahora somos cuatro: yo, Serguéi, Pelmén y Blin. Pelmén todavía no lo sabe.' },
    ],
    phrases: [
      ["Нас тро'е.", 'Somos tres.'],
      ["дво'е дете'й", 'dos niños'],
      ["о'ба / о'бе", 'ambos / ambas'],
      ["ко'е-что", 'algo (que sé, pero no digo aún)'],
      ["прию'т", 'refugio (de animales)'],
      ["взять кота'", 'adoptar un gato'],
      ["Нас бу'дет че'тверо.", 'Seremos cuatro.'],
      ["Вы о'ба здоро'вы?", '¿Están bien los dos?'],
    ],
    grammar: {
      id: 'g117', title: 'Двое, трое; оба',
      body: `<p>Numerales colectivos para <b>personas</b> (sobre todo grupos, niños, «somos…»): [[дво'е]], [[тро'е]], [[че'тверо]], [[пя'теро]]</p>
<p>[[Нас тро'е.]] Somos tres. · [[У них дво'е дете'й.]] Tienen dos hijos. (+ genitivo plural)</p>
<p>Con animales y cosas, el número normal: [[два кота']], [[три стола']].</p>
<p>[[о'ба]] (ambos, m./mixto) / [[о'бе]] (ambas, f.) + genitivo singular: [[о'ба бра'та]], [[о'бе сестры']].</p>`,
      drills: [
        { q: "Нас ___.", es: 'Somos tres.', o: ["тро'е", "три", "тре'тьи"], x: 'Personas: трое.' },
        { q: "У них ___ дете'й.", es: 'Tienen dos hijos.', o: ["дво'е", "два", "две"], x: 'Niños: двое детей.' },
        { q: "У меня' ___ кота'.", es: 'Tengo dos gatos.', o: ["два", "дво'е", "двух"], x: 'Animales: два.' },
        { q: "___ сестры' живу'т в Москве'.", es: 'Ambas hermanas viven en Moscú.', o: ["О'бе", "О'ба", "Обо'и"], x: 'Femenino: обе.' },
        { q: "Мы пришли' ___.", es: 'Vinimos los cuatro.', o: ["вчетверо'м", "четы'ре", "че'тверо их"], x: 'Вчетвером = los cuatro juntos.' },
      ],
    },
    outro: 'Pelmén y Blin. Pelmén está ofendido. Blin es feliz. Familia rusa típica.',
  },
  {
    id: 'l118', level: 10, ru: "Снача'ла, пото'м, вдруг", es: 'Primero, después, de repente',
    scene: 'Lidia Mijáilovna, tu exalumna de 71 años, te pide que cuentes en su club de jubilados cómo fue tu año en Rusia. En ruso. Con detalles.',
    intro: 'Hoy: contar una historia. Primero, luego, de repente, al final. La lección más tuya de todas.',
    dialog: [
      { who: 'student', ru: "Расскажи'те, как всё начало'сь!", es: '¡Cuéntenos cómo empezó todo!' },
      { u: [["Снача'ла я {учи'л|учи'ла} ру'сский по интерне'ту. С Ма'шей.", 'Primero estudiaba ruso por internet. Con Masha.'], ["Наконе'ц я учи'л ру'сский.", 'Por último estudié ruso.', 'Al principio, no al final: сначала.']] },
      { u: [["Пото'м я {прие'хал|прие'хала} в Петербу'рг. Шёл дождь.", 'Después llegué a Petersburgo. Llovía.', 'Todos se ríen. En Petersburgo siempre llueve.'], ["Пото'м шёл дождь.", 'Después llovió.', 'Cuéntalo con más detalle: ¿qué hiciste?']] },
      { u: [["И вдруг всё измени'лось: друзья', рабо'та, сва'дьба, ба'бушка…", 'Y de repente todo cambió: amigos, trabajo, una boda, la abuela…'], ["И вдруг я спал.", 'Y de repente dormí.', '¿Ese es el clímax? Mejor: всё изменилось.']] },
      { who: 'student', ru: "А чем всё ко'нчилось?", es: '¿Y cómo terminó todo?' },
      { u: [["В конце' концо'в я {по'нял|поняла'}, что э'то мой второ'й дом.", 'Al final de todo, entendí que esta es mi segunda casa.', 'Silencio. Lidia Mijáilovna se seca una lágrima. Masha, en la última fila, también.']] },
      { ru: "Хоро'шая исто'рия. Немно'го сентимента'льная. Но хоро'шая.", es: 'Buena historia. Un poco sentimental. Pero buena.', e: 'pleased' },
    ],
    phrases: [
      ["снача'ла", 'primero, al principio'],
      ["пото'м / зате'м", 'después / luego'],
      ["вдруг", 'de repente'],
      ["наконе'ц", 'por fin, finalmente'],
      ["в конце' концо'в", 'al final de todo'],
      ["Как всё начало'сь?", '¿Cómo empezó todo?'],
      ["Чем всё ко'нчилось?", '¿Cómo terminó todo?'],
      ["Всё измени'лось.", 'Todo cambió.'],
    ],
    grammar: {
      id: 'g118', title: 'Contar una historia',
      body: `<p>Orden: [[снача'ла]] (primero) → [[пото'м]], [[зате'м]] (después) → [[по'сле э'того]] (tras eso) → [[наконе'ц]] (por fin) → [[в конце' концо'в]] (al final de todo)</p>
<p>Sorpresa: [[вдруг]] (de repente), [[неожи'данно]] (inesperadamente) · Simultaneidad: [[в э'то вре'мя]] (mientras tanto)</p>
<p>Aspecto en la narración: <b>imperfectivo</b> para el fondo, el decorado ([[Шёл дождь.]]), <b>perfectivo</b> para los hechos que hacen avanzar la historia ([[Я прие'хал. Вдруг зазвони'л телефо'н.]])</p>`,
      drills: [
        { q: "___ я учи'л алфави'т.", es: 'Primero aprendí el alfabeto.', o: ["Снача'ла", "Наконе'ц", "Вдруг"], x: 'Primero: сначала.' },
        { q: "Мы гуля'ли, и ___ пошёл дождь.", es: 'Paseábamos y de repente empezó a llover.', o: ["вдруг", "снача'ла", "в о'бщем"], x: 'De repente: вдруг.' },
        { q: "___ я по'нял, что люблю' Росси'ю.", es: 'Al final de todo entendí que amo Rusia.', o: ["В конце' концо'в", "Снача'ла", "Вдруг"], x: 'В конце концов.' },
        { q: "Когда' я вошёл, ___ дождь.", es: 'Cuando entré, llovía.', o: ["шёл", "пошёл", "пройдёт"], x: 'Fondo: imperfectivo.' },
        { q: "Вдруг ___ телефо'н.", es: 'De repente sonó el teléfono.', o: ["зазвони'л", "звони'л", "звони'т бы"], x: 'Hecho puntual: perfectivo.' },
      ],
    },
    outro: 'Contaste tu historia. En ruso. Con aspecto correcto. Lidia Mijáilovna lloró. Yo… estaba resfriada.',
  },
  {
    id: 'l119', level: 10, ru: "Все падежи'", es: 'Todos los casos',
    scene: 'Masha te prepara un «examen final» casero: una cena en la que cada plato tiene una pregunta. Si fallas, no comes. Sus reglas.',
    intro: 'Hoy: repaso de los seis casos. Todos los que aprendiste en 119 lecciones. Juntos. En una cena. Sin presión.',
    dialog: [
      { ru: "Пе'рвый вопро'с. Без чего' нельзя' жить в Петербу'рге?", es: 'Primera pregunta. ¿Sin qué no se puede vivir en Petersburgo?' },
      { u: [["Без зо'нтика!", '¡Sin paraguas!', 'Genitivo correcto. Sopa para ti.'], ["Без зо'нтик!", 'Sin paraguas (mal dicho).', 'Без + genitivo: без зонтика.']] },
      { ru: "Второ'й. Кому' ты звони'шь ка'ждое воскресе'нье?", es: 'Segunda. ¿A quién llamas cada domingo?' },
      { u: [["Ма'ме и ба'бушке Га'ле!", '¡A mamá y a la abuela Galia!', 'Dativo correcto. Y buena respuesta. Ensalada.'], ["Ма'му и ба'бушку!", 'A mamá y a la abuela (mal dicho).', 'Звонить + dativo: маме, бабушке.']] },
      { ru: "Тре'тий. С кем ты пьёшь чай?", es: 'Tercera. ¿Con quién tomas el té?' },
      { u: [["С тобо'й, с Серге'ем и с кота'ми!", '¡Contigo, con Serguéi y con los gatos!', 'Instrumental perfecto. Pelmeni.'], ["С ты и с кот!", '(mal dicho)', 'С + instrumental: с тобой, с котом.']] },
      { ru: "После'дний. О чём ты бу'дешь ду'мать, когда' уе'дешь в о'тпуск?", es: 'La última. ¿En qué pensarás cuando te vayas de vacaciones?' },
      { u: [["О Петербу'рге, о на'ших уро'ках и о тебе'.", 'En Petersburgo, en nuestras clases y en ti.', '…Prepositivo correcto. Postre. Y abrazo. Pero solo uno.']] },
    ],
    phrases: [
      ["кто? что? (имени'тельный)", 'nominativo: el sujeto'],
      ["кого'? чего'? (роди'тельный)", 'genitivo: de, sin, no hay'],
      ["кому'? чему'? (да'тельный)", 'dativo: a quién'],
      ["кого'? что? (вини'тельный)", 'acusativo: el objeto, a dónde'],
      ["кем? чем? (твори'тельный)", 'instrumental: con, ser/hacerse'],
      ["о ком? о чём? (предло'жный)", 'prepositivo: dónde, sobre'],
      ["зо'нтик", 'paraguas'],
      ["Я {сдал|сдала'}!", '¡Aprobé!'],
    ],
    grammar: {
      id: 'g119', title: 'Los seis casos de un vistazo',
      body: `<p><b>Nominativo</b> ([[кто? что?]]): sujeto — [[Ма'ша пьёт чай.]]</p>
<p><b>Genitivo</b> ([[кого'? чего'?]]): de, sin, no hay, cantidades, из/у/для/до/после — [[чай без са'хара]], [[кни'га Ма'ши]]</p>
<p><b>Dativo</b> ([[кому'?]]): a quién, к, edad, gustos — [[звони'ть ма'ме]], [[мне нра'вится]]</p>
<p><b>Acusativo</b> ([[кого'? что?]]): objeto, в/на a dónde — [[люблю' Ма'шу]], [[иду' в парк]]</p>
<p><b>Instrumental</b> ([[кем? чем?]]): с (con), ser/hacerse, заниматься — [[с ба'бушкой]], [[стать врачо'м]]</p>
<p><b>Prepositivo</b> ([[о ком? где?]]): о (sobre), в/на (dónde) — [[в Петербу'рге]], [[о тебе']]</p>`,
      drills: [
        { q: "Я живу' в ___.", es: 'Vivo en Petersburgo.', o: ["Петербу'рге", "Петербу'рг", "Петербу'рга"], x: 'Dónde: prepositivo.' },
        { q: "Чай без ___.", es: 'Té sin azúcar.', o: ["са'хара", "са'хар", "са'харом"], x: 'Без: genitivo.' },
        { q: "Я пишу' ___.", es: 'Le escribo a Masha.', o: ["Ма'ше", "Ма'шу", "Ма'шей"], x: 'A quién: dativo.' },
        { q: "Я ви'жу ___.", es: 'Veo a Masha.', o: ["Ма'шу", "Ма'ше", "Ма'ши"], x: 'Objeto: acusativo.' },
        { q: "Я гуля'ю с ___.", es: 'Paseo con Masha.', o: ["Ма'шей", "Ма'шу", "Ма'ше"], x: 'Con: instrumental.' },
        { q: "Я ду'маю о ___.", es: 'Pienso en Masha.', o: ["Ма'ше", "Ма'шу", "Ма'ши"], x: 'Sobre: prepositivo.' },
      ],
    },
    outro: 'Comiste todos los platos. Seis casos, seis platos. Aprobaste. Con postre. Y un abrazo. Uno solo.',
  },
  {
    id: 'l120', level: 10, ru: "Э'то не коне'ц", es: 'Esto no es el final',
    scene: 'Junio. Noches blancas. Son las doce de la noche y hay luz. Toda la familia rusa en el malecón: Masha, Serguéi, Katia, Vadim, la pequeña Galia, la abuela, Pelmén en una mochila. Esperan que abran los puentes.',
    intro: 'Última lección. Hoy no hay gramática nueva. Bueno, un poco. Hoy hablamos de lo que viene. Porque esto no es el final.',
    dialog: [
      { ru: "Сто двадца'тый уро'к. По'мнишь пе'рвый? «Приве'т. Я Ма'ша.»", es: 'Lección ciento veinte. ¿Te acuerdas de la primera? «Hola. Soy Masha.»', e: 'pleased' },
      { u: [["«Приве'т! Меня' зову'т {name}.» Я по'мню всё.", '«¡Hola! Me llamo {name}.» Lo recuerdo todo.', 'Yo también. Tenías un acento terrible. Ahora tienes un acento… aceptable. Es un cumplido.'], ["Я ничего' не по'мню.", 'No recuerdo nada.', 'Mentira. Lo recuerdas todo. Lo vi en el repaso.']] },
      { who: 'galia', ru: "Ты тепе'рь говори'шь по-ру'сски, как наш. Почти'.", es: 'Ahora hablas ruso como uno de los nuestros. Casi.' },
      { u: [["Спаси'бо. Но я ещё мно'го не зна'ю.", 'Gracias. Pero todavía no sé mucho.', 'Nadie sabe todo el ruso. Ni los rusos. Ni yo. Sobre todo el aspecto.'], ["Я зна'ю ру'сский язы'к на сто проце'нтов!", '¡Sé ruso al cien por cien!', 'Ja. Ni Pushkin. Pero me gusta tu optimismo.']], k: 1 },
      { n: 'Los puentes se abren. Barcos. Música. La gente aplaude.' },
      { ru: "Обеща'й мне три ве'щи. Пе'рвое: повторя'й. Второ'е: чита'й. Тре'тье: возвраща'йся.", es: 'Prométeme tres cosas. Primera: repasa. Segunda: lee. Tercera: vuelve.' },
      { u: [["Обеща'ю. Э'то не коне'ц.", 'Lo prometo. Esto no es el final.', '…Sí. No es el final. Es el principio de tu ruso de verdad. Y del mío contigo. Pelmén, despídete. …No quiere. Es ruso.'], ["До свида'ния навсегда'!", '¡Adiós para siempre!', '¿Para siempre? No. «До свидания» significa «hasta volver a vernos». Ya lo sabes.']] },
      { ru: "До свида'ния. До но'вой встре'чи. И… спаси'бо. За всё.", es: 'Hasta luego. Hasta el próximo encuentro. Y… gracias. Por todo.', e: 'happy' },
    ],
    phrases: [
      ["Э'то не коне'ц.", 'Esto no es el final.'],
      ["До но'вой встре'чи!", '¡Hasta el próximo encuentro!'],
      ["Обеща'й мне…", 'Prométeme…'],
      ["Возвраща'йся!", '¡Vuelve!'],
      ["бе'лые но'чи", 'noches blancas'],
      ["Разво'дят мосты'.", 'Abren los puentes.'],
      ["навсегда'", 'para siempre'],
      ["Спаси'бо за всё.", 'Gracias por todo.'],
    ],
    grammar: {
      id: 'g120', title: 'Lo que viene',
      body: `<p>Has visto: los seis casos, el aspecto, los verbos de movimiento con prefijos, participios y gerundios, el condicional, el estilo indirecto y el registro.</p>
<p>¿Qué falta? Mucho vocabulario. Leer: [[Че'хов]], [[Пу'шкин]], [[Булга'ков]]. Escuchar: [[фи'льмы]], [[подка'сты]], [[пе'сни]]. Hablar: con [[лю'ди]], no con libros.</p>
<p>Y sobre todo: [[повторе'ние]]. El repaso de esta app seguirá preguntándote todo lo aprendido, cada vez más espaciado.</p>
<p>[[Повторе'ние — мать уче'ния.]] Lo dijo Masha. Lo dijo tu abuela. Lo dicen todos los rusos.</p>`,
      drills: [
        { p: '«Hasta el próximo encuentro»', o: ["До но'вой встре'чи!", "До но'вая встре'ча!", "До но'вую встре'чу!"], x: 'До + genitivo: до новой встречи.' },
        { q: "Обеща'й мне ___ ка'ждый день.", es: 'Prométeme repasar cada día.', o: ["повторя'ть", "повтори'ть", "повторя'ю"], x: 'Cada día (repetido): imperfectivo.' },
        { q: "Я ___ в Петербу'рг.", es: 'Volveré a Petersburgo.', o: ["верну'сь", "возвраща'юсь бы", "верну'л"], x: 'Futuro perfectivo: вернусь.' },
        { q: "Спаси'бо за ___!", es: '¡Gracias por todo!', o: ["всё", "все", "всего'"], x: 'Спасибо за всё.' },
        { p: '«До свидания» significa literalmente…', o: ['hasta volver a vernos', 'adiós para siempre', 'buenas noches'], x: 'Свидание = encuentro. Hasta el próximo.' },
      ],
    },
    outro: 'Ciento veinte lecciones. Lo hiciste. Ahora el repaso sigue: cada día un poco. Yo sigo aquí. Con té. Siempre. До свидания. Hasta volver a vernos.',
  },
);
