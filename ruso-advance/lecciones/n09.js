/* Nivel 9 · Verano en la dacha (lecciones 97–108) */
LESSONS.push(
  {
    id: 'l97', level: 9, ru: "Не забу'дь!", es: '¡No te olvides!',
    scene: 'Julio. Toda la familia va a la dacha (casa de campo) de los padres de Masha, cerca de Ekaterimburgo. Masha hace la lista. La lista tiene dos páginas.',
    intro: 'Hoy: el aspecto en órdenes negativas. «No hace falta llamar» frente a «¡no te olvides!». Una advertencia es perfectiva. Una prohibición, imperfectiva.',
    dialog: [
      { ru: "Не забу'дь сре'дство от комаро'в! Без него' ты не вы'живешь.", es: '¡No te olvides del repelente! Sin él no sobrevivirás.' },
      { u: [["Не забу'ду. А что ещё?", 'No me olvidaré. ¿Qué más?'], ["Не забыва'й сре'дство?", '¿No olvides (en general) el repelente?', 'Para advertir de un olvido concreto: не забудь.']] },
      { ru: "Сапоги'. Сви'тер. И не бери' ноутбу'к. На да'че не рабо'тают.", es: 'Botas. Un suéter. Y no lleves el portátil. En la dacha no se trabaja.' },
      { u: [["А звони'ть мо'жно?", '¿Y llamar se puede?'], ["Не возьму' ноутбу'к?", '¿No tomaré el portátil?', 'Ella te lo ordena: не бери.']] },
      { ru: "Звони'ть не на'до. Там нет свя'зи. Мо'жно то'лько на кры'ше.", es: 'No hace falta llamar. Allí no hay cobertura. Solo en el tejado.', e: 'smirk' },
      { u: [["Не упади' с кры'ши!", '¡No te caigas del tejado!', 'Gracias por la preocupación. Llevo veinte años subiendo. Bueno, me caí una vez.'], ["Не па'дай с кры'ши!", '¡No caigas (en general) del tejado!', 'Para advertir: не упади. Perfectivo.']] },
      { who: 'katia', ru: "Ма'ша, ты не забы'ла пельме'ня?", es: 'Masha, ¿no te olvidaste de Pelmén?' },
      { ru: "Пельме'нь сам не забу'дет. Он уже' в маши'не. Он всегда' пе'рвый.", es: 'Pelmén no se olvida solo. Ya está en el coche. Siempre es el primero.', e: 'pleased' },
    ],
    phrases: [
      ["Не забу'дь!", '¡No te olvides!'],
      ["Не упади'!", '¡No te caigas!'],
      ["Не на'до звони'ть.", 'No hace falta llamar.'],
      ["Не бери' ноутбу'к.", 'No lleves el portátil.'],
      ["да'ча", 'dacha (casa de campo)'],
      ["сре'дство от комаро'в", 'repelente de mosquitos'],
      ["Там нет свя'зи.", 'Allí no hay cobertura.'],
      ["сапоги' / сви'тер", 'botas / suéter'],
    ],
    grammar: {
      id: 'g97', title: 'Aspecto y negación',
      body: `<p><b>Prohibir</b> o decir que algo no hace falta → <b>imperfectivo</b>: [[Не звони'!]] · [[Не на'до покупа'ть.]] · [[Не бери' э'то.]]</p>
<p><b>Advertir</b> de un error posible, sin querer (cuidado con…) → <b>perfectivo</b>: [[Не забу'дь!]] · [[Не упади'!]] · [[Не опозда'й!]] · [[Смотри', не потеря'й ключи'!]]</p>
<p>Con [[нельзя']]: imperfectivo = está prohibido ([[Здесь нельзя' кури'ть]]); perfectivo = es imposible ([[Дверь нельзя' откры'ть]] — no se puede abrir, está rota).</p>`,
      drills: [
        { q: "Не ___ ключи'!", es: '¡No pierdas las llaves! (cuidado)', o: ["потеря'й", "теря'й", "теря'ть"], x: 'Advertencia: perfectivo.' },
        { q: "Не ___ мне так по'здно!", es: '¡No me llames tan tarde! (prohibición)', o: ["звони'", "позвони'", "звони'шь"], x: 'Prohibición: imperfectivo.' },
        { q: "Не на'до ___ хлеб, у нас есть.", es: 'No hace falta comprar pan, tenemos.', o: ["покупа'ть", "купи'ть", "куплю'"], x: 'No hace falta: imperfectivo.' },
        { q: "Не ___ мне позвони'ть!", es: '¡No te olvides de llamarme!', o: ["забу'дь", "забыва'й", "забы'ть"], x: 'Advertencia: забудь.' },
        { q: "Э'ту дверь нельзя' ___: она' сло'мана.", es: 'Esta puerta no se puede abrir: está rota.', o: ["откры'ть", "открыва'ть", "откро'й"], x: 'Imposible: perfectivo.' },
      ],
    },
    outro: 'Dos páginas de lista. Olvidamos el pan. Siempre se olvida el pan.',
  },
  {
    id: 'l98', level: 9, ru: "Кто открыва'л окно'?", es: '¿Quién abrió la ventana?',
    scene: 'En la dacha. La casa está llena de mosquitos. Alguien dejó la ventana abierta por la noche. Masha investiga como una detective.',
    intro: 'Hoy: aspecto en pasado. «¿Quién abrió la ventana?» (y ya está cerrada) vs «¿quién la abrió?» (y sigue abierta). El ruso distingue. El español no.',
    dialog: [
      { ru: "Кто открыва'л окно' но'чью? В до'ме ты'сяча комаро'в.", es: '¿Quién abrió la ventana anoche? En la casa hay mil mosquitos.', e: 'annoyed' },
      { u: [["Я не {открыва'л|открыва'ла}.", 'Yo no la abrí.'], ["Я не {откры'л|откры'ла}.", 'No la abrí (y no está abierta).', 'Ahora está cerrada. Pregunta por el hecho: не открывал.']] },
      { who: 'vadim', ru: "Я открыва'л. Бы'ло жа'рко. Но пото'м я его' закры'л!", es: 'Yo la abrí. Hacía calor. ¡Pero después la cerré!' },
      { ru: "Ты закры'л его' в три часа' но'чи. Комары' успе'ли.", es: 'La cerraste a las tres de la madrugada. A los mosquitos les dio tiempo.', e: 'eyeroll' },
      { u: [["Я вчера' три ра'за {звони'л|звони'ла} Серге'ю с кры'ши.", 'Ayer llamé a Serguéi tres veces desde el tejado.', 'Tres veces. Y yo cinco. Él no viene hasta el sábado.'], ["Кто-то уже' позвони'л в поли'цию?", '¿Alguien ya llamó a la policía?', 'Por mosquitos no se llama a la policía. Ni en Rusia.']], k: 2 },
      { who: 'galia', ru: "Ничего'. Я сде'лала мазь из тра'в. Бабу'шкин реце'пт.", es: 'No pasa nada. Hice una pomada de hierbas. Receta de abuela.' },
      { u: [["Вы са'ми её де'лали? Как?", '¿La hizo usted misma? ¿Cómo?', 'La abuela no responde. Es un secreto. Hace sesenta años que lo guarda.']] },
    ],
    phrases: [
      ["Кто открыва'л окно'?", '¿Quién abrió la ventana? (y ya no está abierta)'],
      ["Кто откры'л окно'?", '¿Quién abrió la ventana? (sigue abierta)'],
      ["Я три ра'за {звони'л|звони'ла}.", 'Llamé tres veces.'],
      ["Он закры'л дверь.", 'Cerró la puerta.'],
      ["комары'", 'mosquitos'],
      ["мазь", 'pomada'],
      ["реце'пт", 'receta'],
      ["успе'ть", 'llegar a tiempo, dar tiempo'],
    ],
    grammar: {
      id: 'g98', title: 'Aspecto en pasado',
      body: `<p><b>Perfectivo</b>: resultado que sigue vigente, acción única y completa: [[Кто откры'л окно'?]] (la ventana está abierta ahora) · [[Я прочита'л кни'гу.]]</p>
<p><b>Imperfectivo</b>: solo el hecho de que pasó, sin interesar el resultado (o resultado anulado): [[Кто открыва'л окно'?]] (alguien la abrió, ya está cerrada) · [[Ты чита'л э'ту кни'гу?]] (¿la has leído alguna vez?)</p>
<p>Acción <b>repetida</b> → imperfectivo: [[Я звони'л три ра'за.]] · [[Ка'ждый день он звони'л ма'ме.]]</p>
<p>Proceso, duración → imperfectivo: [[Я чита'л два часа'.]]</p>`,
      drills: [
        { q: "Кто ___ окно'? Закро'й!", es: '¿Quién abrió la ventana? ¡Ciérrala!', o: ["откры'л", "открыва'л", "открыва'ет"], x: 'Sigue abierta: открыл.' },
        { q: "Ты когда'-нибудь ___ Толсто'го?", es: '¿Alguna vez leíste a Tolstói?', o: ["чита'л", "прочита'л", "прочита'ешь"], x: 'Experiencia: читал.' },
        { q: "Я ___ ему' три ра'за.", es: 'Lo llamé tres veces.', o: ["звони'л", "позвони'л", "позвоню'"], x: 'Repetido: звонил.' },
        { q: "Наконе'ц я ___ дома'шнее зада'ние!", es: '¡Por fin terminé la tarea!', o: ["сде'лал", "де'лал", "де'лаю"], x: 'Resultado: сделал.' },
        { q: "Вчера' я ___ весь ве'чер.", es: 'Ayer estuve trabajando toda la tarde.', o: ["рабо'тал", "порабо'тал", "зарабо'тал"], x: 'Duración: работал.' },
      ],
    },
    outro: 'La pomada de la abuela funciona. Huele a bosque y a misterio. Vadim duerme con la ventana cerrada. Por fin.',
  },
  {
    id: 'l99', level: 9, ru: "Пошли' за гриба'ми!", es: '¡Vamos a buscar setas!',
    scene: 'Seis de la mañana. Baba Galia los despierta: es temporada de setas. En Rusia buscar setas es un deporte nacional. Y una religión.',
    intro: 'Hoy: prefijos que cambian el matiz. за- (empezar de golpe), по- (un poco), про- (durante un tiempo). Pequeños cambios, gran diferencia.',
    dialog: [
      { who: 'galia', ru: "Встава'йте! Пошли' за гриба'ми, пока' не жа'рко!", es: '¡Arriba! ¡Vamos a buscar setas mientras no hace calor!' },
      { ru: "Ба'ба, шесть утра'. Я хочу' поспа'ть ещё полчаса'.", es: 'Abuela, son las seis. Quiero dormir media horita más.', e: 'annoyed' },
      { u: [["Мы проспи'м все грибы'!", '¡Se nos van a ir todas las setas mientras dormimos!', 'Exacto. La abuela tiene razón. Las setas no esperan.'], ["Я {поспа'л|поспала'} всю ночь!", 'Dormí un poco toda la noche (raro).', 'Toda la noche: проспал. Por: un poco.']] },
      { n: 'En el bosque. Silencio. Musgo. Abedules.' },
      { u: [["Смотри'! Бе'лый гриб!", '¡Mira! ¡Un boleto!', 'Un белый. El rey de las setas. Masha grita de alegría. Masha nunca grita.'], ["Смотри'! Мухомо'р!", '¡Mira! ¡Una amanita!', 'Rojo con puntos blancos. Bonito. Venenoso. No lo toques.']], k: 2 },
      { ru: "Бе'лый! Я его' не ви'дела де'сять лет! Ба'ба, иди' сюда'!", es: '¡Un boleto! ¡Hace diez años que no veía uno! ¡Abuela, ven aquí!', e: 'happy' },
      { who: 'galia', ru: "Молоде'ц, сыно'к! Тепе'рь ты настоя'щий ру'сский.", es: '¡Bravo, hijo! Ahora eres un ruso de verdad.' },
      { ru: "Вади'м заблуди'лся. Он запе'л, что'бы мы его' нашли'.", es: 'Vadim se perdió. Se puso a cantar para que lo encontráramos.', e: 'smirk' },
    ],
    phrases: [
      ["пойти' за гриба'ми", 'ir a buscar setas'],
      ["поспа'ть", 'dormir un rato'],
      ["проспа'ть", 'quedarse dormido; dormir (un tiempo entero)'],
      ["запе'ть", 'ponerse a cantar'],
      ["заблуди'ться", 'perderse'],
      ["бе'лый гриб", 'boleto (seta blanca)'],
      ["мухомо'р", 'amanita (seta venenosa)'],
      ["пока' не жа'рко", 'mientras no hace calor'],
    ],
    grammar: {
      id: 'g99', title: 'Prefijos de matiz: за-, по-, про-',
      body: `<p><b>за-</b> = empezar (de golpe): [[запе'ть]] (ponerse a cantar), [[запла'кать]] (echarse a llorar), [[засмея'ться]] (echarse a reír)</p>
<p><b>по-</b> = un poco, un rato: [[поспа'ть]] (dormir un rato), [[погуля'ть]] (pasear un poco), [[почита'ть]] (leer un rato), [[поговори'ть]] (hablar un poco)</p>
<p><b>про-</b> = durante un tiempo entero: [[проспа'ть весь день]], [[прожи'ть год в Москве']]; o pasarse: [[проспа'ть]] (quedarse dormido), [[пропусти'ть]] (saltarse)</p>
<p>Todos son perfectivos.</p>`,
      drills: [
        { q: "Ребёнок вдруг ___.", es: 'De repente el niño se echó a llorar.', o: ["запла'кал", "попла'кал", "пропла'кал"], x: 'Empezar de golpe: за-.' },
        { q: "Дава'й ___ в па'рке.", es: 'Paseemos un rato por el parque.', o: ["погуля'ем", "загуля'ем", "прогуля'ем"], x: 'Un rato: по-.' },
        { q: "Он ___ весь день.", es: 'Durmió todo el día.', o: ["проспа'л", "поспа'л", "заспа'л"], x: 'Todo el tiempo: про-.' },
        { q: "Я хочу' ___ немно'го пе'ред сном.", es: 'Quiero leer un poco antes de dormir.', o: ["почита'ть", "зачита'ть", "прочита'ть"], x: 'Un poco: по-.' },
        { q: "Мы ___ в Москве' три го'да.", es: 'Vivimos en Moscú tres años.', o: ["прожи'ли", "пожи'ли", "зажи'ли"], x: 'Un tiempo entero: про-.' },
      ],
    },
    outro: 'Un boleto. Diez años sin ver uno. Y lo encontraste tú. La abuela ya te quiere más que a mí.',
  },
  {
    id: 'l100', level: 9, ru: "Где Пельме'нь?", es: '¿Dónde está Pelmén?',
    scene: 'Al volver del bosque, Pelmén no está. La puerta estaba abierta. Masha se pone pálida. Pelmén nunca sale de casa.',
    intro: 'Hoy: собираться (disponerse a, reunirse) y оказываться (resultar). Para cuando las cosas no salen como pensabas.',
    dialog: [
      { ru: "Пельме'ня нет. Нигде'. Дверь была' откры'та.", es: 'Pelmén no está. En ningún lado. La puerta estaba abierta.', e: 'sad' },
      { u: [["Не волну'йся. Мы его' найдём. Дава'й соберёмся и поды'щем вме'сте.", 'No te preocupes. Lo encontraremos. Reunámonos y busquemos juntos.'], ["Он ушёл навсегда'.", 'Se fue para siempre.', '¡¿Cómo puedes decir eso?!']] },
      { ru: "Я собира'лась ему' сего'дня купи'ть но'вую игру'шку…", es: 'Iba a comprarle hoy un juguete nuevo…' },
      { who: 'katia', ru: "Ма'ша, я спроси'ла сосе'дей. Оказа'лось, что его' ви'дели у ре'чки.", es: 'Masha, les pregunté a los vecinos. Resulta que lo vieron junto al río.' },
      { u: [["Пошли' к ре'чке! Бы'стро!", '¡Vamos al río! ¡Rápido!'], ["Оказа'лся у ре'чки?", '¿Resultó estar junto al río?', 'Sí, sí. ¡Pero vamos, rápido!']] },
      { n: 'Junto al río. Pelmén está sentado en una barca. Mirando peces. Muy concentrado.' },
      { ru: "Пельме'нь! Ты… ты рыба'к?! Ты пять лет собира'лся спать на дива'не всю жизнь!", es: '¡Pelmén! ¿Tú… eres pescador? ¡Llevabas cinco años decidido a dormir en el sofá toda la vida!', e: 'surprised' },
      { u: [["Оказа'лось, он лю'бит приро'ду.", 'Resultó que le gusta la naturaleza.', 'Mi gato. Un pescador. Cinco años y no sabía nada de él.']] },
    ],
    phrases: [
      ["Где Пельме'нь?", '¿Dónde está Pelmén?'],
      ["Я {собира'лся|собира'лась}…", 'Iba a… / Pensaba…'],
      ["Дава'й соберёмся.", 'Reunámonos.'],
      ["Оказа'лось, что…", 'Resultó que…'],
      ["Мы его' найдём.", 'Lo encontraremos.'],
      ["ре'чка", 'riachuelo, río pequeño'],
      ["ло'дка", 'barca'],
      ["рыба'к", 'pescador'],
    ],
    grammar: {
      id: 'g100', title: 'Собираться y оказываться',
      body: `<p>[[собира'ться]] + infinitivo = disponerse a, tener la intención de: [[Я собира'юсь пое'хать в Москву'.]] Pienso ir a Moscú. · En pasado: [[Я собира'лся позвони'ть.]] Iba a llamar.</p>
<p>[[собира'ться]] / [[собра'ться]] = también reunirse o prepararse: [[Мы собрали'сь у Ма'ши.]] · [[Собира'йся, мы опа'здываем!]]</p>
<p>[[оказа'ться]] = resultar, encontrarse: [[Оказа'лось, что он рыба'к.]] Resultó que era pescador. · Con instrumental: [[Фильм оказа'лся интере'сным.]]</p>`,
      drills: [
        { q: "Я ___ пое'хать на мо'ре.", es: 'Pienso ir al mar.', o: ["собира'юсь", "собира'ю", "оказываюсь"], x: 'Intención: собираюсь.' },
        { q: "___, что он прав.", es: 'Resultó que él tenía razón.', o: ["Оказа'лось", "Оказа'лся", "Собрало'сь"], x: 'Impersonal: оказалось.' },
        { q: "Фильм оказа'лся ___.", es: 'La película resultó interesante.', o: ["интере'сным", "интере'сный", "интере'сно"], x: 'Оказаться + instrumental.' },
        { q: "Ве'чером мы ___ у Ка'ти.", es: 'Por la noche nos reunimos en casa de Katia.', o: ["собрали'сь", "собра'ли", "оказа'лись бы"], x: 'Reunirse: собрались.' },
        { q: "Я ___ тебе' позвони'ть, но забы'л.", es: 'Iba a llamarte, pero me olvidé.', o: ["собира'лся", "собра'лся бы", "оказа'лся"], x: 'Iba a: собирался.' },
      ],
    },
    outro: 'Pelmén es pescador. Me lo ocultó cinco años. Ahora no quiere irse de la dacha. Lo entiendo.',
  },
  {
    id: 'l101', level: 9, ru: "Ведь я говори'ла!", es: '¡Pero si te lo dije!',
    scene: 'Tarde de lluvia en la dacha. Juegan a las cartas. Masha pierde. Masha no sabe perder.',
    intro: 'Hoy: partículas: же, ведь, вот, ну, -то. Palabras pequeñas sin traducción exacta que hacen que tu ruso suene ruso. Y no de manual.',
    dialog: [
      { ru: "Ну вот. Опя'ть я проигра'ла. Ведь я говори'ла, что не уме'ю.", es: 'Pues nada. Otra vez perdí. Si ya decía que no sé.', e: 'annoyed' },
      { u: [["Ты же сама' предложи'ла игра'ть!", '¡Pero si fuiste tú la que propuso jugar!'], ["Ты сама' предложи'ла игра'ть же.", '(orden raro)', 'Же va detrás de la palabra que subrayas: ты же сама…']] },
      { ru: "Предложи'ла-то я. Но я ду'мала, что вы игра'ете ху'же.", es: 'Proponerlo, lo propuse yo. Pero pensaba que ustedes jugaban peor.' },
      { who: 'galia', ru: "Ну что ты, Ма'шенька. Ты же у нас у'мная. Про'сто сего'дня не твой день.", es: 'Vamos, Mashenka. Tú eres la lista de la familia. Simplemente hoy no es tu día.' },
      { u: [["Вот и'менно. За'втра вы'играешь.", 'Exacto. Mañana ganarás.', 'Mañana jugamos al ajedrez. Ahí no pierdo.'], ["Ведь ты всегда' прои'грываешь!", '¡Pero si siempre pierdes!', 'Cuidado. Muy cuidado.']], k: 1 },
      { ru: "Ну ла'дно. Дава'йте ещё раз. Ведь у нас весь ве'чер.", es: 'Bueno, vale. Otra vez. Total, tenemos toda la tarde.', e: 'smirk' },
    ],
    phrases: [
      ["Ведь я {говори'л|говори'ла}!", '¡Pero si te lo dije!'],
      ["Ты же зна'ешь!", '¡Si tú ya lo sabes!'],
      ["Ну вот.", 'Pues nada. / Ya está.'],
      ["Вот и'менно.", 'Exacto.'],
      ["Ну что ты!", '¡Pero qué dices! / ¡Vamos!'],
      ["проигра'ть / вы'играть", 'perder / ganar (un juego)'],
      ["ка'рты", 'cartas'],
      ["не твой день", 'no es tu día'],
    ],
    grammar: {
      id: 'g101', title: 'Partículas: же, ведь, вот, ну, -то',
      body: `<p>[[же]] — subraya, «pero si…, ya…»: [[Ты же зна'ешь!]] ¡Si lo sabes! · también «mismo»: [[тот же]] (el mismo), [[сего'дня же]] (hoy mismo)</p>
<p>[[ведь]] — «es que, pero si» (algo que el otro debería saber), va al principio: [[Ведь я говори'л!]]</p>
<p>[[вот]] — «aquí está, pues»: [[Вот твой чай.]] · [[Вот и'менно!]] (¡exacto!) · [[Ну вот.]] (pues nada)</p>
<p>[[ну]] — «bueno, pues, vamos»: [[Ну, пошли'!]] · [[Ну что ты!]]</p>
<p>[[-то]] tras una palabra — contraste: [[Я-то зна'ю, а он нет.]] Yo sí lo sé, él no.</p>`,
      drills: [
        { q: "Ты ___ зна'ешь, я не люблю' ры'бу!", es: '¡Si ya sabes que no me gusta el pescado!', o: ["же", "ли", "бы"], x: 'Subrayar: же.' },
        { q: "___ я тебе' говори'л!", es: '¡Pero si te lo dije!', o: ["Ведь", "Ли", "Бы"], x: 'Al principio: ведь.' },
        { q: "___ твой чай.", es: 'Aquí está tu té.', o: ["Вот", "Ведь", "Же"], x: 'Aquí está: вот.' },
        { q: "Мы живём в том ___ до'ме.", es: 'Vivimos en la misma casa.', o: ["же", "ли", "то"], x: 'El mismo: тот же.' },
        { q: "Я-___ по'нял, а он нет.", es: 'Yo sí entendí, pero él no.', o: ["то", "же", "вот"], x: 'Contraste: -то.' },
      ],
    },
    outro: 'Perdí seis veces. Gané una. La última. Esa es la que cuenta. Siempre.',
  },
  {
    id: 'l102', level: 9, ru: "Пока' ты спал", es: 'Mientras dormías',
    scene: 'Una mañana en la dacha. Masha y Katia hablan en la cocina en voz baja. Tú bajas y se callan. Algo pasa.',
    intro: 'Hoy: conjunciones de tiempo: mientras, hasta que, en cuanto, antes de que, después de que. Para contar secuencias. Y secretos.',
    dialog: [
      { ru: "О, ты {просну'лся|просну'лась}. Пока' ты {спал|спала'}, мы… разгова'ривали.", es: 'Ah, te despertaste. Mientras dormías, nosotras… hablábamos.', e: 'surprised' },
      { u: [["О чём? Как то'лько я {вошёл|вошла'}, вы замолча'ли.", '¿De qué? En cuanto entré, se callaron.'], ["Пока' я не {вошёл|вошла'}, вы говори'ли?", '(raro)', 'Más natural: как только я вошёл, вы замолчали.']] },
      { who: 'katia', ru: "Ла'дно. Скажу'. Но то'лько по'сле того', как ты ся'дешь.", es: 'Bueno. Lo diré. Pero solo después de que te sientes.' },
      { u: [["Я {сел|се'ла}. Говори'!", 'Ya me senté. ¡Habla!']] },
      { who: 'katia', ru: "У нас с Вади'мом бу'дет ребёнок. В январе'.", es: 'Vadim y yo vamos a tener un bebé. En enero.' },
      { u: [["Поздравля'ю! Э'то чуде'сно!", '¡Felicidades! ¡Es maravilloso!', 'Katia llora. Masha también. Esta vez no hay ni cebolla de excusa.'], ["А Вади'м зна'ет?", '¿Y Vadim lo sabe?', 'Lo sabe. Desde ayer. Por eso cantaba en el bosque.']], k: 2 },
      { ru: "Я бу'ду тётей. Пока' ребёнок не вы'растет, я бу'ду его' учи'ть ру'сскому. И испа'нскому. Ты помо'жешь.", es: 'Voy a ser tía. Hasta que el bebé crezca, le enseñaré ruso. Y español. Tú me ayudarás.', e: 'happy' },
    ],
    phrases: [
      ["пока' ты спал", 'mientras dormías'],
      ["пока' не…", 'hasta que…'],
      ["как то'лько", 'en cuanto'],
      ["пе'ред тем, как", 'antes de (que)'],
      ["по'сле того', как", 'después de que'],
      ["У нас бу'дет ребёнок.", 'Vamos a tener un bebé.'],
      ["Поздравля'ю!", '¡Felicidades!'],
      ["тётя / дя'дя", 'tía / tío'],
    ],
    grammar: {
      id: 'g102', title: 'Mientras, hasta que, en cuanto',
      body: `<p>[[пока']] + imperfectivo = mientras: [[Пока' ты спал, мы гото'вили.]]</p>
<p>[[пока' не]] + perfectivo = hasta que (¡con не, pero sin negar!): [[Жди, пока' я не приду'.]] Espera hasta que llegue.</p>
<p>[[как то'лько]] = en cuanto: [[Как то'лько он пришёл, все замолча'ли.]]</p>
<p>[[пе'ред тем, как]] + infinitivo = antes de: [[Пе'ред тем, как вы'йти, закро'й окно'.]]</p>
<p>[[по'сле того', как]] = después de que: [[По'сле того', как ты ся'дешь, я скажу'.]]</p>`,
      drills: [
        { q: "___ ты спал, я гото'вила за'втрак.", es: 'Mientras dormías, preparaba el desayuno.', o: ["Пока'", "Пока' не", "Как то'лько"], x: 'Mientras: пока.' },
        { q: "Жди, пока' я ___ приду'.", es: 'Espera hasta que llegue.', o: ["не", "ни", "бы"], x: 'Hasta que: пока не.' },
        { q: "___ он вошёл, все замолча'ли.", es: 'En cuanto entró, todos se callaron.', o: ["Как то'лько", "Пока'", "Пе'ред тем, как"], x: 'En cuanto: как только.' },
        { q: "Пе'ред тем, как ___, закро'й окно'.", es: 'Antes de salir, cierra la ventana.', o: ["вы'йти", "вы'йдешь", "вы'шел"], x: 'Перед тем, как + infinitivo.' },
        { q: "По'сле ___, как ты позвони'шь, я прие'ду.", es: 'Después de que llames, iré.', o: ["того'", "тем", "то"], x: 'После того, как.' },
      ],
    },
    outro: 'Voy a ser tía. Tía Masha. Esa criatura aprenderá los casos antes de caminar. Pobre.',
  },
  {
    id: 'l103', level: 9, ru: "Чем бо'льше, тем лу'чше", es: 'Cuanto más, mejor',
    scene: 'Última noche en la dacha. Hoguera. Guitarra. Serguéi llegó por fin. Discuten si el bebé se parecerá a Katia o a Vadim.',
    intro: 'Hoy: más comparaciones: «igual que», «el mismo que», «cuanto más…, más…». Para filosofar alrededor del fuego.',
    dialog: [
      { who: 'sergei', ru: "Наде'юсь, ребёнок бу'дет тако'й же у'мный, как Ка'тя.", es: 'Espero que el bebé sea tan listo como Katia.' },
      { who: 'vadim', ru: "И тако'й же краси'вый, как я!", es: '¡Y tan guapo como yo!' },
      { ru: "И не тако'й же шу'мный, как ты. Пожа'луйста.", es: 'Y no tan ruidoso como tú. Por favor.', e: 'smirk' },
      { u: [["Чем бо'льше люде'й его' лю'бят, тем лу'чше.", 'Cuanto más gente lo quiera, mejor.', 'Muy sabio. El fuego te vuelve filósofo.'], ["Чем бо'льше, так лу'чше.", '(mal dicho)', 'Чем…, тем…: чем больше, тем лучше.']] },
      { who: 'galia', ru: "Чем ста'рше я стано'влюсь, тем бо'льше люблю' таки'е вечера'.", es: 'Cuanto más vieja me hago, más me gustan estas tardes.' },
      { u: [["Я то'же. Я чу'вствую себя' так же, как до'ма.", 'Yo también. Me siento igual que en casa.', 'Es que esta es tu casa. Aquí ya eres de la familia.'], ["Я то'же. Чем до'льше, тем ху'же.", 'Yo también. Cuanto más tiempo, peor.', '¿Peor? Revisa tus sentimientos.']], k: 1 },
      { ru: "Да. Ты наш. Э'то так же то'чно, как то, что в Петербу'рге идёт дождь.", es: 'Sí. Eres de los nuestros. Es tan seguro como que en Petersburgo llueve.', e: 'pleased' },
    ],
    phrases: [
      ["тако'й же, как…", 'igual de… que…, tan… como…'],
      ["так же, как…", 'igual que…'],
      ["Чем бо'льше, тем лу'чше.", 'Cuanto más, mejor.'],
      ["тот же са'мый", 'el mismo'],
      ["костёр", 'hoguera'],
      ["Наде'юсь…", 'Espero (que)…'],
      ["чу'вствовать себя' как до'ма", 'sentirse como en casa'],
      ["Ты наш.", 'Eres de los nuestros.'],
    ],
    grammar: {
      id: 'g103', title: 'Igual que; cuanto más…, más…',
      body: `<p>[[тако'й же]] + adjetivo + [[, как]] = tan… como: [[Он тако'й же высо'кий, как брат.]] (тако'й concuerda: [[така'я же]], [[таки'е же]])</p>
<p>[[так же]] + adverbio + [[, как]] = igual de / igual que: [[Она' поёт так же хорошо', как мать.]]</p>
<p>[[тот же (са'мый)]] = el mismo: [[в том же до'ме]]</p>
<p>[[чем]] + comparativo, [[тем]] + comparativo = cuanto más…, más…: [[Чем бо'льше чита'ешь, тем бо'льше зна'ешь.]]</p>`,
      drills: [
        { q: "Он ___ же у'мный, как сестра'.", es: 'Es tan listo como su hermana.', o: ["тако'й", "так", "тот"], x: 'Con adjetivo: такой же.' },
        { q: "Она' говори'т ___ же бы'стро, как ты.", es: 'Habla igual de rápido que tú.', o: ["так", "така'я", "тако'й"], x: 'Con adverbio: так же.' },
        { q: "___ бо'льше, тем лу'чше.", es: 'Cuanto más, mejor.', o: ["Чем", "Тем", "Как"], x: 'Чем…, тем…' },
        { q: "Чем ра'ньше, ___ лу'чше.", es: 'Cuanto antes, mejor.', o: ["тем", "чем", "так"], x: 'Чем…, тем…' },
        { q: "Мы живём в ___ же до'ме.", es: 'Vivimos en la misma casa.', o: ["том", "тот", "таком"], x: 'En la misma: в том же.' },
      ],
    },
    outro: 'Una hoguera, una guitarra, una abuela cantando. Cuanto más tiempo pasa, más se parece esto a la felicidad.',
  },
  {
    id: 'l104', level: 9, ru: "С двумя' чемода'нами", es: 'Con dos maletas',
    scene: 'Vuelta a Petersburgo. En el tren, cuentan el equipaje: dos maletas, tres frascos, cuatro bolsas de setas, un gato. Bueno, cinco bolsas.',
    intro: 'Hoy: los números también se declinan. «Con dos maletas», «sobre tres gatos». Los rusos a veces los evitan. Tú, no.',
    dialog: [
      { ru: "Мы е'дем с двумя' чемода'нами, тремя' ба'нками и пятью' су'мками грибо'в.", es: 'Viajamos con dos maletas, tres frascos y cinco bolsas de setas.' },
      { u: [["И с одни'м кото'м!", '¡Y con un gato!'], ["И с оди'н кот!", '(mal dicho)', 'С + instrumental: с одним котом.']] },
      { who: 'provod', ru: "Мо'жно ваш биле'т? О, у вас биле'ты на трёх челове'к.", es: '¿Me permite su billete? Oh, tienen billetes para tres personas.' },
      { u: [["Нас четы'ре. Но кот е'дет без биле'та.", 'Somos cuatro. Pero el gato viaja sin billete.', 'La revisora mira a Pelmén. Pelmén la mira a ella. Gana Pelmén.'], ["Нас три с полови'ной.", 'Somos tres y medio.', 'Pelmén no es medio. Es un gato entero. Y grande.']], k: 2 },
      { who: 'provod', ru: "Ла'дно. Я ничего' не ви'дела. У меня' до'ма то'же два кота'.", es: 'Bueno. Yo no vi nada. En casa yo también tengo dos gatos.' },
      { ru: "Вот ви'дишь. В Росси'и все дела' реша'ются с по'мощью двух веще'й: ча'я и ко'шек.", es: '¿Ves? En Rusia todo se resuelve con dos cosas: té y gatos.', e: 'smirk' },
    ],
    phrases: [
      ["с двумя' чемода'нами", 'con dos maletas'],
      ["для трёх челове'к", 'para tres personas'],
      ["о пяти' кни'гах", 'sobre cinco libros'],
      ["Нас четы'ре.", 'Somos cuatro.'],
      ["с по'мощью", 'con ayuda de'],
      ["чемода'н", 'maleta'],
      ["без биле'та", 'sin billete'],
      ["Я ничего' не {ви'дел|ви'дела}.", 'No vi nada.'],
    ],
    grammar: {
      id: 'g104', title: 'Números en todos los casos',
      body: `<p>Fuera del nominativo y acusativo, los números se declinan, y el sustantivo va en <b>plural en el mismo caso</b>:</p>
<p><b>2, 3, 4</b>: genitivo/prepositivo [[двух]], [[трёх]], [[четырёх]] · dativo [[двум]], [[трём]], [[четырём]] · instrumental [[двумя']], [[тремя']], [[четырьмя']]</p>
<p><b>5 a 20</b>: terminan en <b>-и</b> (gen., dat., prep.) y <b>-ью</b> (instr.): [[пяти']], [[пятью']], [[десяти']], [[десятью']]</p>
<p>[[С двумя' чемода'нами]] · [[для трёх челове'к]] · [[о пяти' кни'гах]] · [[к двум часа'м]]</p>`,
      drills: [
        { q: "Я е'ду с ___ друзья'ми.", es: 'Voy con dos amigos.', o: ["двумя'", "два", "двух"], x: 'Instrumental: двумя.' },
        { q: "Биле'ты для ___ челове'к.", es: 'Billetes para tres personas.', o: ["трёх", "три", "тремя'"], x: 'Для + genitivo: трёх.' },
        { q: "Мы говори'ли о ___ кни'гах.", es: 'Hablamos de cinco libros.', o: ["пяти'", "пять", "пятью'"], x: 'Prepositivo: пяти.' },
        { q: "Он пришёл с ___ детьми'.", es: 'Vino con cuatro niños.', o: ["четырьмя'", "четыре", "четырёх"], x: 'Instrumental: четырьмя.' },
        { q: "Я позвони'л ___ друзья'м.", es: 'Llamé a dos amigos.', o: ["двум", "двух", "два"], x: 'Dativo: двум.' },
      ],
    },
    outro: 'Cinco bolsas de setas. Tres frascos. Un gato sin billete. Llegamos. El verano terminó. Huele a setas toda la casa.',
  },
  {
    id: 'l105', level: 9, ru: "Где уго'дно", es: 'Donde sea',
    scene: 'Septiembre. Masha está rara. Te invita a cenar «a cualquier lugar», «a la hora que quieras». Masha nunca deja nada al azar.',
    intro: 'Hoy: cualquiera, donde sea, lo que sea. любой y -угодно. Para cuando todo te da igual. O finges que te da igual.',
    dialog: [
      { ru: "Пойдём у'жинать. Куда' уго'дно. В любо'е кафе'.", es: 'Vamos a cenar. A donde sea. A cualquier café.' },
      { u: [["В любо'е? Ты? Что случи'лось?", '¿A cualquiera? ¿Tú? ¿Qué pasó?', 'Nada. Nada pasó. Elige.'], ["В како'й уго'дно рестора'н!", '¡A cualquier restaurante!', 'Bueno. Cualquiera. Tú eliges. Rápido.']], k: 2 },
      { n: 'En un café pequeño. Masha pide «lo que sea» y no toca la comida.' },
      { ru: "Серге'й предложи'л мне жить вме'сте. Я не зна'ю, что де'лать.", es: 'Serguéi me propuso vivir juntos. No sé qué hacer.', e: 'sad' },
      { u: [["Ты его' лю'бишь?", '¿Lo quieres?'], ["Де'лай что уго'дно.", 'Haz lo que quieras.', 'Gracias. Muy útil. Eso es lo que me da miedo.']] },
      { ru: "Да. Но… Пельме'нь. Моя' кварти'ра. Мои' привы'чки. Мой чай в любо'е вре'мя.", es: 'Sí. Pero… Pelmén. Mi departamento. Mis costumbres. Mi té a cualquier hora.' },
      { u: [["Он лю'бит тебя' любо'й. С ча'ем и с Пельме'нем.", 'Te quiere de cualquier manera. Con té y con Pelmén.', '…Lo sé. Lo sé. ¿Por qué es tan difícil?'], ["Любо'й челове'к бои'тся переме'н.", 'Cualquier persona tiene miedo a los cambios.', 'Sí. Todos. Hasta yo. Sobre todo yo.']], k: 2 },
    ],
    phrases: [
      ["куда' уго'дно", 'a donde sea'],
      ["что уго'дно", 'lo que sea'],
      ["любо'й", 'cualquiera'],
      ["в любо'е вре'мя", 'a cualquier hora'],
      ["жить вме'сте", 'vivir juntos'],
      ["привы'чка", 'costumbre, hábito'],
      ["переме'ны", 'cambios'],
      ["Я не зна'ю, что де'лать.", 'No sé qué hacer.'],
    ],
    grammar: {
      id: 'g105', title: 'Cualquiera: любой, -угодно',
      body: `<p>[[любо'й]] = cualquiera (todos sirven), se declina como adjetivo: [[в любо'е вре'мя]], [[любо'й челове'к]], [[спроси' любо'го]]</p>
<p><b>-угодно</b> = lo que sea, donde sea (sin límites): [[что уго'дно]], [[кто уго'дно]], [[где уго'дно]], [[куда' уго'дно]], [[когда' уго'дно]], [[како'й уго'дно]]</p>
<p>Comparar con -нибудь (lección 70): [[Купи' что'-нибудь]] (compra algo, una cosa) / [[Купи' что уго'дно]] (compra lo que sea, no importa qué).</p>`,
      drills: [
        { q: "Приходи' в ___ вре'мя.", es: 'Ven a cualquier hora.', o: ["любо'е", "любо'й", "люба'я"], x: 'Время es neutro: любое.' },
        { q: "Я гото'в пое'хать куда' ___.", es: 'Estoy listo para ir a donde sea.', o: ["уго'дно", "нибудь", "то"], x: 'Куда угодно.' },
        { q: "Спроси' ___ челове'ка.", es: 'Pregúntale a cualquier persona.', o: ["любо'го", "любо'й", "любо'му"], x: 'Acusativo animado: любого.' },
        { q: "Он мо'жет сказа'ть что ___.", es: 'Puede decir cualquier cosa.', o: ["уго'дно", "нибудь", "любо'е"], x: 'Что угодно.' },
        { q: "___ ребёнок э'то зна'ет.", es: 'Cualquier niño sabe esto.', o: ["Любо'й", "Кто уго'дно", "Како'й-то"], x: 'Любой.' },
      ],
    },
    outro: 'Le dije que sí. Bueno, le dije «lo pensaré». Que en mi idioma es sí. Pelmén todavía no lo sabe.',
  },
  {
    id: 'l106', level: 9, ru: "Сади'сь, ложи'сь, встава'й", es: 'Siéntate, acuéstate, levántate',
    scene: 'Masha se muda a casa de Serguéi. Tú ayudas. Pelmén se niega a entrar en la casa nueva. Se sienta en la puerta. Se acuesta en la puerta. No se levanta.',
    intro: 'Hoy: sentarse, acostarse, levantarse. Los verbos de posición tienen pareja propia. Y Pelmén los domina todos.',
    dialog: [
      { ru: "Пельме'нь, встава'й! Э'то наш но'вый дом.", es: '¡Pelmén, levántate! Es nuestra casa nueva.', e: 'annoyed' },
      { n: 'Pelmén se acuesta. Bosteza.' },
      { u: [["Он лёг. Он протесту'ет.", 'Se acostó. Está protestando.', 'Lo veo. Es un gato con principios.'], ["Он лежа'л. Он протесту'ет.", 'Estaba acostado.', 'Acaba de acostarse: лёг.']] },
      { who: 'sergei', ru: "Дава'йте ся'дем и попьём ча'ю. Мо'жет быть, он сам войдёт.", es: 'Sentémonos y tomemos un té. Tal vez entre solo.' },
      { u: [["Хоро'шая иде'я. Я ся'ду здесь.", 'Buena idea. Me siento aquí.'], ["Хоро'шая иде'я. Я сижу' здесь.", 'Estoy sentado aquí.', 'Para la acción de sentarse: сяду.']] },
      { n: 'Veinte minutos después. Pelmén entra, se sienta en el sofá nuevo y se queda dormido.' },
      { ru: "Он сел на дива'н. На мою' поду'шку. Он до'ма.", es: 'Se sentó en el sofá. En mi cojín. Está en casa.', e: 'happy' },
      { u: [["Тепе'рь и ты до'ма, Ма'ша.", 'Ahora tú también estás en casa, Masha.', '…Sí. Estoy en casa. Qué cosa más rara de decir. Y más bonita.']] },
    ],
    phrases: [
      ["Сади'сь!", '¡Siéntate!'],
      ["Ложи'сь спать!", '¡Acuéstate!'],
      ["Встава'й!", '¡Levántate!'],
      ["Он сел на дива'н.", 'Se sentó en el sofá.'],
      ["Он лёг.", 'Se acostó.'],
      ["Я ся'ду здесь.", 'Me siento aquí.'],
      ["поду'шка", 'cojín, almohada'],
      ["протестова'ть", 'protestar'],
    ],
    grammar: {
      id: 'g106', title: 'Sentarse, acostarse, levantarse',
      body: `<p>Acción (cambiar de posición) / estado (estar en ella):</p>
<p>[[сади'ться]] / [[сесть]] sentarse → [[сиде'ть]] estar sentado · futuro [[ся'ду]], pasado [[сел]], [[се'ла]] · ¡Сядь! / [[Сади'сь!]]</p>
<p>[[ложи'ться]] / [[лечь]] acostarse → [[лежа'ть]] estar acostado · futuro [[ля'гу]], pasado [[лёг]], [[легла']] · [[Ложи'сь!]]</p>
<p>[[встава'ть]] / [[встать]] levantarse → [[стоя'ть]] estar de pie · presente [[встаю']], futuro [[вста'ну]] · [[Встава'й!]]</p>
<p>La acción pide [[куда']] (acusativo): [[сесть на дива'н]]; el estado, [[где]] (prepositivo): [[сиде'ть на дива'не]].</p>`,
      drills: [
        { q: "Он ___ на дива'н.", es: 'Se sentó en el sofá.', o: ["сел", "сиде'л", "сади'лся бы"], x: 'Acción completa: сел.' },
        { q: "Ко'шка ___ на крова'ти.", es: 'La gata está acostada en la cama.', o: ["лежи'т", "ложи'тся", "легла' бы"], x: 'Estado: лежит.' },
        { q: "Я ___ в семь.", es: 'Me levanto a las siete.', o: ["встаю'", "стою'", "вста'л"], x: 'Costumbre: встаю.' },
        { q: "Вчера' я ___ спать в оди'ннадцать.", es: 'Ayer me acosté a las once.', o: ["лёг", "лежа'л", "ложу'сь"], x: 'Acción completa: лёг.' },
        { q: "Сади'тесь на ___!", es: '¡Siéntense en las sillas!', o: ["сту'лья", "сту'льях", "стул"], x: 'Acción: acusativo.' },
      ],
    },
    outro: 'Masha vive con Serguéi. Pelmén aprobó. El sofá nuevo ya tiene pelos. Es oficial.',
  },
  {
    id: 'l107', level: 9, ru: "Вряд ли", es: 'Difícilmente',
    scene: 'Octubre. Te llega una propuesta de trabajo en tu país. Bien pagado. Tendrías que irte de Petersburgo. Masha intenta ser objetiva.',
    intro: 'Hoy: probabilidad. Seguramente, difícilmente, debe de ser, tal vez. Para hablar del futuro sin prometer nada.',
    dialog: [
      { u: [["Мне предложи'ли рабо'ту до'ма. Наве'рное, я соглашу'сь.", 'Me ofrecieron un trabajo en mi país. Probablemente acepte.', 'Ah. …Qué bien. Probablemente. Sí. Qué bien.'], ["Мне предложи'ли рабо'ту. Вряд ли я соглашу'сь.", 'Me ofrecieron un trabajo. Difícilmente acepte.', '¿De verdad? …Piénsalo bien. Pero me alegra oírlo.']], k: 2 },
      { ru: "Э'то, должно' быть, хоро'шая рабо'та.", es: 'Debe de ser un buen trabajo.' },
      { u: [["Мо'жет быть. Но здесь моя' жизнь.", 'Puede ser. Pero aquí está mi vida.'], ["Должно' быть, хоро'шая.", 'Debe de ser bueno.', 'Sí. Debe de ser.']] },
      { ru: "Ты наверняка' найдёшь здесь рабо'ту. О'ля возьмёт тебя' в шко'лу. Наве'рное.", es: 'Seguramente encontrarás trabajo aquí. Olia te contratará en la escuela. Probablemente.' },
      { u: [["Вряд ли я смогу' уе'хать от вас.", 'Difícilmente podré irme de aquí, de ustedes.', '…Bueno. No digo nada. No lloro. Pelmén, ¿lo oíste?'], ["Наве'рное, я уе'ду.", 'Probablemente me vaya.', 'Bueno. Entonces disfrutemos lo que queda. Sin dramas.']] },
      { ru: "Реша'ть тебе'. Но е'сли что — у нас всегда' есть чай.", es: 'Decides tú. Pero por si acaso: aquí siempre hay té.', e: 'pleased' },
    ],
    phrases: [
      ["наве'рное", 'probablemente'],
      ["наверняка'", 'seguramente, sin duda'],
      ["вряд ли", 'difícilmente, poco probable'],
      ["должно' быть", 'debe de ser, seguramente'],
      ["мо'жет быть", 'tal vez'],
      ["согласи'ться", 'aceptar, estar de acuerdo'],
      ["Реша'ть тебе'.", 'Decides tú.'],
      ["е'сли что", 'por si acaso'],
    ],
    grammar: {
      id: 'g107', title: 'Probabilidad',
      body: `<p>De más a menos seguro:</p>
<p>[[наверняка']] (seguro, sin duda) → [[должно' быть]] (debe de) → [[наве'рное]] (probablemente) → [[мо'жет быть]] (tal vez) → [[вряд ли]] (difícilmente)</p>
<p>[[Он наверняка' придёт.]] · [[Он, должно' быть, уста'л.]] · [[Вряд ли он придёт.]] (es poco probable que venga)</p>
<p>Ojo: [[вряд ли]] ya es negativo, no lleva не: [[Вряд ли я смогу'.]] = Difícilmente podré.</p>`,
      drills: [
        { q: "___ он придёт: он бо'лен.", es: 'Difícilmente venga: está enfermo.', o: ["Вряд ли", "Наверняка'", "Должно' быть"], x: 'Poco probable: вряд ли.' },
        { q: "Он ___ уста'л по'сле рабо'ты.", es: 'Seguramente está cansado después del trabajo.', o: ["наверняка'", "вряд ли", "ли"], x: 'Seguro: наверняка.' },
        { q: "___ пойдёт дождь.", es: 'Tal vez llueva.', o: ["Мо'жет быть", "Вряд ли не", "Ли"], x: 'Tal vez: может быть.' },
        { q: "Вряд ли я ___.", es: 'Difícilmente podré.', o: ["смогу'", "не смогу'", "смогу' ли"], x: 'Вряд ли ya niega.' },
        { q: "Э'то, ___, о'чень до'рого.", es: 'Eso debe de ser muy caro.', o: ["должно' быть", "вряд ли", "е'сли"], x: 'Debe de ser: должно быть.' },
      ],
    },
    outro: 'Decides tú. Yo no influyo. Yo solo preparo té. Mucho té. Y pirozhkí. Por si acaso.',
  },
  {
    id: 'l108', level: 9, ru: "Тебе' идёт!", es: '¡Te queda bien!',
    scene: 'Decidiste quedarte. Para celebrarlo, Masha te regala una bufanda que tejió ella misma. Con muchos errores. Y mucho cariño.',
    intro: 'Hoy: las mil caras del verbo идти. La lluvia va, la película va, la bufanda te va. En ruso todo «va».',
    dialog: [
      { ru: "Э'то тебе'. Я сама' связа'ла. Не смотри' на оши'бки.", es: 'Esto es para ti. La tejí yo misma. No mires los errores.' },
      { u: [["Спаси'бо! Как мне идёт?", '¡Gracias! ¿Cómo me queda?'], ["Спаси'бо! Как я иду'?", '¡Gracias! ¿Cómo camino?', '¿Cómo te queda? = как мне идёт.']] },
      { ru: "Тебе' о'чень идёт. Си'ний — твой цвет.", es: 'Te queda muy bien. El azul es tu color.', e: 'pleased' },
      { u: [["Как иду'т дела' у Ка'ти?", '¿Cómo le van las cosas a Katia?'], ["Как хо'дят дела'?", '¿Cómo van las cosas? (mal dicho)', 'Las cosas van: дела идут.']] },
      { ru: "Хорошо'. Ребёнок растёт. Ждём в январе'. Вади'м уже' купи'л три коля'ски.", es: 'Bien. El bebé crece. Lo esperamos en enero. Vadim ya compró tres cochecitos.', e: 'eyeroll' },
      { n: 'Afuera empieza a llover.' },
      { u: [["Опя'ть идёт дождь.", 'Otra vez llueve.', 'Claro. Es Petersburgo. Es octubre. Y tú te quedas. Bienvenido otra vez. Fin del nivel nueve.'], ["Опя'ть хо'дит дождь.", '(mal dicho)', 'La lluvia va: идёт дождь.']] },
    ],
    phrases: [
      ["Тебе' идёт.", 'Te queda bien.'],
      ["Идёт дождь.", 'Llueve.'],
      ["Как иду'т дела'?", '¿Cómo van las cosas?'],
      ["Речь идёт о…", 'Se trata de…'],
      ["Фильм идёт два часа'.", 'La película dura dos horas.'],
      ["Вре'мя идёт.", 'El tiempo pasa.'],
      ["связа'ть шарф", 'tejer una bufanda'],
      ["коля'ска", 'cochecito de bebé'],
    ],
    grammar: {
      id: 'g108', title: 'Las mil caras de идти',
      body: `<p>[[идти']] no es solo «ir a pie». También:</p>
<p>clima: [[Идёт дождь / снег.]] · espectáculos, en cartelera o durando: [[В кино' идёт но'вый фильм.]] [[Фильм идёт два часа'.]]</p>
<p>quedar bien: [[Тебе' идёт э'то пла'тье.]] (a quién: dativo) · marchar las cosas: [[Как иду'т дела'?]] · el tiempo: [[Вре'мя идёт.]]</p>
<p>tratar de: [[Речь идёт о…]] (se trata de) · aceptar: [[Идёт!]] (¡vale, hecho!)</p>`,
      drills: [
        { q: "Тебе' ___ э'та ша'пка.", es: 'Te queda bien este gorro.', o: ["идёт", "хо'дит", "е'дет"], x: 'Quedar bien: идёт.' },
        { q: "На у'лице ___ снег.", es: 'Afuera nieva.', o: ["идёт", "па'дает бы", "хо'дит"], x: 'Идёт снег.' },
        { q: "Как ___ дела'?", es: '¿Cómo van las cosas?', o: ["иду'т", "иду'", "хо'дят"], x: 'Дела идут.' },
        { q: "Речь ___ о рабо'те.", es: 'Se trata del trabajo.', o: ["идёт", "хо'дит", "е'дет"], x: 'Речь идёт о.' },
        { q: "Встре'тимся в семь? — ___!", es: '¿Nos vemos a las siete? — ¡Hecho!', o: ["Идёт", "Иду'", "Шёл"], x: 'Идёт = de acuerdo.' },
      ],
    },
    outro: 'Te quedas. Con bufanda azul y errores de tejido. Fin del nivel nueve. Y sí, llueve.',
  },
);
