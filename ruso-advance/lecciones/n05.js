/* Nivel 5 · De viaje (lecciones 49–60) */
LESSONS.push(
  {
    id: 'l49', level: 5, ru: "Ходи'ть и'ли идти'?", es: '¿Ходить o идти?',
    scene: 'Masha te invita al cumpleaños de Katia, en Moscú. Antes, van caminando a la estación. Masha camina rápido. Siempre.',
    intro: 'Empieza el viaje. Y empiezan los verbos de movimiento de verdad. идти es ir ahora, en una dirección. ходить es ir y volver, o ir a menudo.',
    dialog: [
      { ru: "Быстре'е! Мы идём на вокза'л, а не гуля'ем.", es: '¡Más rápido! Vamos a la estación, no estamos paseando.', e: 'annoyed' },
      { u: [["Ты всегда' так бы'стро хо'дишь?", '¿Siempre caminas tan rápido?'], ["Ты всегда' так бы'стро идёшь?", '¿Siempre vas tan rápido? (poco natural)', 'Siempre, costumbre: ходишь.']] },
      { ru: "Всегда'. Я хожу' пешко'м ка'ждый день. Э'то мой спорт.", es: 'Siempre. Camino todos los días. Es mi deporte.' },
      { u: [["А я хожу' в спортза'л. Иногда'.", 'Yo voy al gimnasio. A veces.', '«A veces» = una vez al año. Lo sé.'], ["А я иду' в спортза'л ка'ждый день.", 'Voy al gimnasio cada día (mal dicho).', 'Con «cada día»: хожу.']] },
      { ru: "Куда' ты сейча'с смо'тришь?", es: '¿A dónde miras ahora?' },
      { u: [["Туда' идёт челове'к с огро'мным то'ртом.", 'Allá va un hombre con una tarta enorme.'], ["Туда' хо'дит челове'к с то'ртом.", 'Allá anda un hombre con tarta.', 'Ahora, en una dirección: идёт.']] },
      { ru: "Э'то Вади'м. Он то'же идёт к Ка'те?! Я его' не приглаша'ла!", es: 'Es Vadim. ¿¡También va a lo de Katia?! ¡Yo no lo invité!', e: 'surprised' },
      { u: [["Мо'жет быть, Ка'тя пригласи'ла.", 'Tal vez Katia lo invitó.', 'Katia. Claro. Mi hermana invita a todos. Es su superpoder.']] },
    ],
    phrases: [
      ["Мы идём на вокза'л.", 'Vamos (a pie) a la estación.'],
      ["Я хожу' пешко'м.", 'Voy a pie (habitualmente).'],
      ["Я хожу' в спортза'л.", 'Voy al gimnasio (habitualmente).'],
      ["вокза'л", 'estación de tren'],
      ["пешко'м", 'a pie'],
      ["туда' / сюда'", 'hacia allá / hacia acá'],
      ["приглаша'ть", 'invitar'],
      ["Быстре'е!", '¡Más rápido!'],
    ],
    grammar: {
      id: 'g49', title: 'Идти y ходить',
      body: `<p>[[идти']] — una dirección, <b>ahora</b> (o en un momento concreto): [[Я иду' в магази'н.]] Voy (ahora) a la tienda.</p>
<p>[[ходи'ть]] — <b>ida y vuelta, costumbre</b>, o moverse sin dirección: [[Я хожу' в магази'н ка'ждый день.]] · [[Он хо'дит по ко'мнате.]] Camina por el cuarto.</p>
<p>ходить: [[хожу']], [[хо'дишь]], [[хо'дит]], [[хо'дим]], [[хо'дите]], [[хо'дят]].</p>
<p>En pasado, [[ходи'л]] puede significar «fui y volví»: [[Вчера' я ходи'л в кино'.]] Ayer fui al cine.</p>`,
      drills: [
        { q: "Сейча'с я ___ домо'й.", es: 'Ahora voy a casa.', o: ["иду'", "хожу'", "хо'дим"], x: 'Ahora, una dirección: иду.' },
        { q: "Я ___ в бассе'йн по суббо'там.", es: 'Voy a la piscina los sábados.', o: ["хожу'", "иду'", "идём"], x: 'Costumbre: хожу.' },
        { q: "Вчера' мы ___ в теа'тр.", es: 'Ayer fuimos al teatro.', o: ["ходи'ли", "шли", "идём"], x: 'Ida y vuelta en pasado: ходили.' },
        { q: "Куда' ты ___?", es: '¿A dónde vas (ahora)?', o: ["идёшь", "хо'дишь", "ходи'л"], x: 'Ahora: идёшь.' },
        { q: "Ребёнок уже' ___.", es: 'El niño ya camina.', o: ["хо'дит", "идёт", "шёл"], x: 'Capacidad general: ходит.' },
      ],
    },
    outro: 'Vadim va al cumpleaños. Con tarta. Esto va a ser interesante.',
  },
  {
    id: 'l50', level: 5, ru: "В по'езде", es: 'En el tren',
    scene: 'Tren rápido Sapsán, de Petersburgo a Moscú. Masha, tú, y Vadim sentado justo detrás. Casualidad. Claro.',
    intro: 'Hoy: ехать y ездить. La misma idea que идти y ходить, pero en vehículo. Cuatro horas de tren para practicar.',
    dialog: [
      { who: 'vadim', ru: "Ма'ша, ты ча'сто е'здишь в Москву'?", es: 'Masha, ¿vas a Moscú a menudo?' },
      { ru: "Раз в год. На день рожде'ния Ка'ти. Э'то мой долг.", es: 'Una vez al año. Al cumpleaños de Katia. Es mi deber.' },
      { u: [["А куда' ты е'дешь в о'тпуск?", '¿Y a dónde vas de vacaciones?'], ["А куда' ты е'здишь сейча'с?", '¿Y a dónde vas ahora? (mal dicho)', 'Ahora: едешь. Y ahora vamos a Moscú, ya lo sabes.']] },
      { ru: "В о'тпуск я е'зжу к ба'бушке, в Екатеринбу'рг.", es: 'De vacaciones voy a ver a la abuela, a Ekaterimburgo.' },
      { who: 'vadim', ru: "А я никогда' не е'здил на Ура'л!", es: '¡Yo nunca fui a los Urales!' },
      { u: [["Я то'же. Мо'жно пое'хать вме'сте!", 'Yo tampoco. ¡Podríamos ir juntos!', '¿Juntos? ¿Los tres? …En el Transiberiano. Dos días. …Lo pensaré.'], ["Я то'же. Я е'ду туда' ка'ждый год.", 'Yo tampoco. Voy cada año.', '¿Nunca fuiste y vas cada año? Decide.']] },
      { ru: "Мы е'дем уже' три часа'. Ско'ро Москва'.", es: 'Llevamos tres horas de viaje. Pronto Moscú.' },
      { u: [["Как бы'стро! В Испа'нии я {е'здил|е'здила} на по'езде ме'дленнее.", '¡Qué rápido! En España viajaba en trenes más lentos.', 'En España también hay trenes rápidos. Algunos. A veces.'], ["Как бы'стро е'дет по'езд!", '¡Qué rápido va el tren!', 'Doscientos kilómetros por hora. Más rápido que Vadim pensando.']], k: 2 },
    ],
    phrases: [
      ["Ты ча'сто е'здишь в Москву'?", '¿Vas a Moscú a menudo?'],
      ["Я е'зжу к ба'бушке.", 'Voy a ver a la abuela (habitualmente).'],
      ["Мы е'дем в Москву'.", 'Vamos a Moscú (ahora).'],
      ["раз в год", 'una vez al año'],
      ["о'тпуск", 'vacaciones'],
      ["Я никогда' не {е'здил|е'здила} на Ура'л.", 'Nunca fui a los Urales.'],
      ["ско'ро", 'pronto'],
      ["долг", 'deber'],
    ],
    grammar: {
      id: 'g50', title: 'Ехать y ездить',
      body: `<p>[[е'хать]] — en vehículo, una dirección, ahora: [[Мы е'дем в Москву'.]]</p>
<p>[[е'здить]] — en vehículo, ida y vuelta, costumbre: [[Я е'зжу на рабо'ту на метро'.]]</p>
<p>ездить: [[е'зжу]] (¡зж!), [[е'здишь]], [[е'здит]], [[е'здим]], [[е'здите]], [[е'здят]].</p>
<p>Experiencia («he ido alguna vez»): [[Я {е'здил|е'здила} в Москву'.]] · [[Я никогда' не {е'здил|е'здила} на Ура'л.]]</p>`,
      drills: [
        { q: "Я ___ на рабо'ту на авто'бусе.", es: 'Voy al trabajo en autobús (siempre).', o: ["е'зжу", "е'ду", "е'здю"], x: 'Costumbre: езжу.' },
        { q: "Сейча'с мы ___ в Москву'.", es: 'Ahora vamos a Moscú.', o: ["е'дем", "е'здим", "е'хали"], x: 'Ahora: едем.' },
        { q: "Ты когда'-нибудь ___ в Сиби'рь?", es: '¿Alguna vez fuiste a Siberia?', o: ["{е'здил|е'здила}", "{е'хал|е'хала}", "е'дешь"], x: 'Experiencia: ездил.' },
        { q: "Они' ча'сто ___ на да'чу.", es: 'Van a menudo a la dacha.', o: ["е'здят", "е'дут", "е'здют"], x: 'Ездят.' },
        { q: "Куда' ты ___ ле'том?", es: '¿A dónde vas en verano (normalmente)?', o: ["е'здишь", "е'дешь", "е'хал"], x: 'Costumbre: ездишь.' },
      ],
    },
    outro: 'Llegamos a Moscú. Vadim nos sigue. Con la tarta. La tarta sobrevivió. Él casi no.',
  },
  {
    id: 'l51', level: 5, ru: "Мы прие'хали!", es: '¡Llegamos!',
    scene: 'Estación Leningradski, Moscú. Katia, la hermana menor de Masha, los espera. Es igual a Masha, pero sonríe. Mucho.',
    intro: 'Hoy: llegar e irse. Los prefijos при- (llegar) y у- (irse). Con un prefijo, el verbo de movimiento cambia de significado. Magia rusa.',
    dialog: [
      { who: 'katia', ru: "Ма'ша! Вы прие'хали! Наконе'ц-то!", es: '¡Masha! ¡Llegaron! ¡Por fin!' },
      { ru: "Приве'т, Ка'тя. Э'то мой студе'нт. А э'то… Вади'м.", es: 'Hola, Katia. Este es mi estudiante. Y este es… Vadim.', e: 'eyeroll' },
      { u: [["О'чень прия'тно, Ка'тя! С днём рожде'ния!", '¡Mucho gusto, Katia! ¡Feliz cumpleaños!'], ["О'чень прия'тно! Мы ушли'!", '¡Mucho gusto! ¡Nos fuimos!', '¿Nos fuimos? Acabamos de llegar: приехали.']] },
      { who: 'katia', ru: "Спаси'бо! Вади'м, ты то'же прие'хал! Я так ра'да!", es: '¡Gracias! ¡Vadim, viniste también! ¡Qué alegría!' },
      { ru: "Ка'тя, когда' ты его' пригласи'ла?", es: 'Katia, ¿cuándo lo invitaste?', e: 'annoyed' },
      { who: 'katia', ru: "В про'шлом году'. Он приходи'л к тебе' в го'сти, а ты ушла' в магази'н.", es: 'El año pasado. Fue a visitarte y tú habías salido a la tienda.' },
      { u: [["Зна'чит, вы уже' знако'мы!", '¡O sea que ya se conocen!'], ["Зна'чит, ты пришла' в магази'н.", 'O sea que llegaste a la tienda.', 'Ушла: se fue a la tienda. No llegó.']] },
      { ru: "Ка'тя. Ты ничего' не сказа'ла.", es: 'Katia. No dijiste nada.', e: 'annoyed' },
      { who: 'katia', ru: "А ты не спра'шивала! Ну, пошли' домо'й. Ма'ма ждёт.", es: '¡Y tú no preguntaste! Bueno, vamos a casa. Mamá espera.' },
    ],
    phrases: [
      ["Вы прие'хали!", '¡Llegaron! (en vehículo)'],
      ["Он пришёл.", 'Él llegó (a pie).'],
      ["Она' ушла'.", 'Ella se fue (a pie).'],
      ["Он уе'хал.", 'Él se fue (en vehículo).'],
      ["приходи'ть в го'сти", 'ir de visita'],
      ["в про'шлом году'", 'el año pasado'],
      ["Мы знако'мы.", 'Nos conocemos.'],
      ["Ма'ма ждёт.", 'Mamá espera.'],
    ],
    grammar: {
      id: 'g51', title: 'При- (llegar) y у- (irse)',
      body: `<p>Con prefijo, идти se vuelve [[-йти]] y ехать se vuelve [[-езжа'ть]] / [[-е'хать]]:</p>
<p><b>при-</b> = llegar: [[прийти']] / [[приходи'ть]] (a pie), [[прие'хать]] / [[приезжа'ть]] (en vehículo)</p>
<p><b>у-</b> = irse: [[уйти']] / [[уходи'ть]], [[уе'хать]] / [[уезжа'ть]]</p>
<p>Pasado de -йти: [[пришёл]], [[пришла']], [[пришли']] · [[ушёл]], [[ушла']], [[ушли']]. Futuro: [[приду']], [[придёшь]] · [[уйду']].</p>
<p>[[Он пришёл]] = llegó (y está aquí). [[Он приходи'л]] = vino (y ya se fue).</p>`,
      drills: [
        { q: "Мы ___ в Москву' вчера'.", es: 'Llegamos a Moscú ayer (en tren).', o: ["прие'хали", "пришли'", "уе'хали"], x: 'Llegar en vehículo: приехали.' },
        { q: "Ма'ша ___ в магази'н.", es: 'Masha se fue a la tienda.', o: ["ушла'", "пришла'", "уе'хала"], x: 'Irse a pie: ушла.' },
        { q: "Когда' ты ___?", es: '¿Cuándo vendrás?', o: ["придёшь", "пришёл", "уйдёшь"], x: 'Futuro de прийти.' },
        { q: "Он уже' ___ домо'й.", es: 'Ya se fue a casa (en coche).', o: ["уе'хал", "прие'хал", "пришёл"], x: 'Irse en vehículo: уехал.' },
        { q: "Вади'м ___ к нам вчера'.", es: 'Vadim vino a vernos ayer (y se fue).', o: ["приходи'л", "пришёл", "уходи'л"], x: 'Vino y se fue: приходил.' },
      ],
    },
    outro: 'Katia ya conocía a Vadim. Mi propia hermana. Traición. Con sonrisa, pero traición.',
  },
  {
    id: 'l52', level: 5, ru: "Вы выхо'дите?", es: '¿Se baja?',
    scene: 'Metro de Moscú en hora pico. Hay que bajarse en la próxima. Hay doscientas personas entre tú y la puerta.',
    intro: 'Hoy: entrar y salir. в- y вы-. Y la frase más útil del metro de Moscú. Sin ella, te quedas a vivir en el vagón.',
    dialog: [
      { ru: "На сле'дующей мы выхо'дим. Спроси' э'ту же'нщину.", es: 'En la próxima nos bajamos. Pregúntale a esa mujer.' },
      { u: [["Извини'те, вы выхо'дите на сле'дующей?", 'Disculpe, ¿se baja en la próxima?'], ["Извини'те, вы вхо'дите?", 'Disculpe, ¿entra usted?', '¿Entra? Ya está dentro. Выходите.']] },
      { who: 'woman', ru: "Нет. Проходи'те, пожа'луйста.", es: 'No. Pase, por favor.' },
      { n: 'Logras salir. Katia y Vadim se quedaron dentro. Las puertas se cierran.' },
      { u: [["О нет! Они' не вы'шли!", '¡Oh, no! ¡No salieron!'], ["О нет! Они' не вошли'!", '¡Oh, no! ¡No entraron!', 'Estaban dentro. No salieron: не вышли.']] },
      { ru: "Ка'тя! Вы'йдите на сле'дующей и верни'тесь!", es: '¡Katia! ¡Bájense en la próxima y vuelvan!', e: 'annoyed' },
      { n: 'Diez minutos después, llegan. Katia se ríe. Vadim no.' },
      { who: 'katia', ru: "Э'то бы'ло весело'! Вади'м вошёл не в тот ваго'н.", es: '¡Fue divertido! Vadim entró en el vagón equivocado.' },
      { u: [["Метро' в Москве' — э'то приключе'ние.", 'El metro de Moscú es una aventura.', 'Y eso que no has visto la línea circular a las 6.']] },
    ],
    phrases: [
      ["Вы выхо'дите на сле'дующей?", '¿Se baja en la próxima?'],
      ["Я выхожу'.", 'Me bajo. / Salgo.'],
      ["войти' / вы'йти", 'entrar / salir'],
      ["вход / вы'ход", 'entrada / salida'],
      ["ваго'н", 'vagón'],
      ["Верни'тесь!", '¡Vuelvan!'],
      ["не тот", 'el equivocado (no ese)'],
      ["приключе'ние", 'aventura'],
    ],
    grammar: {
      id: 'g52', title: 'В- (entrar) y вы- (salir)',
      body: `<p><b>в-</b> = entrar: [[входи'ть]] / [[войти']] (a pie), [[въезжа'ть]] / [[въе'хать]] (en vehículo) · + [[в]] + acusativo: [[войти' в ваго'н]]</p>
<p><b>вы-</b> = salir: [[выходи'ть]] / [[вы'йти]], [[выезжа'ть]] / [[вы'ехать]] · + [[из]] + genitivo: [[вы'йти из метро']]</p>
<p>Con вы- perfectivo, el acento va siempre en вы: [[вы'йду]], [[вы'шел]], [[вы'шла]].</p>
<p>En los carteles: [[ВХОД]] (entrada), [[ВЫ'ХОД]] (salida), [[ВЫ'ХОДА НЕТ]] (sin salida).</p>`,
      drills: [
        { q: "Мы ___ на сле'дующей.", es: 'Nos bajamos en la próxima.', o: ["выхо'дим", "вхо'дим", "прихо'дим"], x: 'Salir: выходим.' },
        { q: "Он ___ в ко'мнату.", es: 'Él entró en la habitación.', o: ["вошёл", "вы'шел", "ушёл"], x: 'Entrar: вошёл.' },
        { q: "Она' вы'шла из ___.", es: 'Ella salió del metro.', o: ["метро'", "метра'", "метро'м"], x: 'Метро no se declina.' },
        { q: "Где ___?", es: '¿Dónde está la salida?', o: ["вы'ход", "вход", "прихо'д"], x: 'Salida: выход.' },
        { q: "За'втра я ___ из до'ма в семь.", es: 'Mañana saldré de casa a las siete.', o: ["вы'йду", "вы'шел", "вхожу'"], x: 'Futuro: выйду.' },
      ],
    },
    outro: 'Moscú: diez millones de personas y Vadim en el vagón equivocado. Todo normal.',
  },
  {
    id: 'l53', level: 5, ru: "Пойдём на Кра'сную пло'щадь!", es: '¡Vamos a la Plaza Roja!',
    scene: 'La mañana después del cumpleaños. Katia propone un plan turístico. Masha propone dormir. Gana Katia.',
    intro: 'Hoy: по-. Пойти, поехать: «ir» como acción completa, salir hacia. Y «пойдём» para proponer. Muy útil para no dormir.',
    dialog: [
      { who: 'katia', ru: "Пойдём на Кра'сную пло'щадь!", es: '¡Vamos a la Plaza Roja!' },
      { ru: "Сейча'с? Я хочу' спать.", es: '¿Ahora? Quiero dormir.', e: 'annoyed' },
      { u: [["Пойдём, Ма'ша! Пото'м пое'дем в парк.", '¡Vamos, Masha! Después iremos al parque.'], ["Идём в парк вчера'!", 'Vamos al parque ayer.', 'Ayer ya pasó. Пойдём / поедем: ahora o después.']] },
      { ru: "Ла'дно. Но снача'ла ко'фе.", es: 'Bueno. Pero primero café.' },
      { who: 'katia', ru: "Пото'м пойдём в ГУМ, а ве'чером пое'дем на Воробьёвы го'ры!", es: 'Después vamos al GUM, y por la noche iremos a las Colinas de los Gorriones.' },
      { u: [["Куда' пошёл Вади'м?", '¿A dónde se fue Vadim?'], ["Куда' пое'хал Вади'м?", '¿A dónde se fue Vadim (en vehículo)?', 'Vadim fue a pie. Al quiosco, a comprar flores. Para alguien.']], k: 1 },
      { who: 'katia', ru: "Он пошёл за цвета'ми. Для меня'!", es: 'Fue a buscar flores. ¡Para mí!' },
      { ru: "…Для тебя'? Ка'тя. Мы должны' поговори'ть.", es: '…¿Para ti? Katia. Tenemos que hablar.', e: 'surprised' },
      { u: [["Пойдём, пойдём! Пло'щадь ждёт!", '¡Vamos, vamos! ¡La plaza espera!', 'Vale. Pero esta conversación no ha terminado.']] },
    ],
    phrases: [
      ["Пойдём!", '¡Vamos! (a pie)'],
      ["Пое'хали!", '¡Vámonos! (en vehículo)'],
      ["Он пошёл в магази'н.", 'Se fue a la tienda.'],
      ["снача'ла / пото'м", 'primero / después'],
      ["пло'щадь", 'plaza'],
      ["за цвета'ми", 'a buscar flores'],
      ["Мы должны' поговори'ть.", 'Tenemos que hablar.'],
      ["Кра'сная пло'щадь", 'la Plaza Roja'],
    ],
    grammar: {
      id: 'g53', title: 'Пойти, поехать',
      body: `<p><b>по-</b> + идти/ехать = empezar a ir, salir hacia, ir (una vez): [[пойти']], [[пое'хать]].</p>
<p>Futuro: [[Я пойду' в кино'.]] Iré al cine. · [[Мы пое'дем на да'чу.]]</p>
<p>Pasado: [[Он пошёл в магази'н.]] Se fue a la tienda (y todavía no volvió). Comparar: [[Он ходи'л в магази'н]] (fue y volvió).</p>
<p>Proponer: [[Пойдём!]] [[Пойдёмте!]] (a varios / formal), [[Пое'хали!]] (el famoso «¡vámonos!» de Gagarin).</p>
<p>«A buscar algo» = [[за]] + instrumental: [[пойти' за хле'бом]].</p>`,
      drills: [
        { q: "За'втра я ___ в теа'тр.", es: 'Mañana iré al teatro.', o: ["пойду'", "пошёл", "хожу'"], x: 'Futuro: пойду.' },
        { q: "Где па'па? — Он ___ в магази'н.", es: '¿Dónde está papá? — Se fue a la tienda.', o: ["пошёл", "ходи'л", "пойдёт"], x: 'Se fue y no volvió: пошёл.' },
        { q: "___ в парк!", es: '¡Vamos al parque! (a pie)', o: ["Пойдём", "Пое'хали", "Пошли'сь"], x: 'Proponer a pie: пойдём.' },
        { q: "Ле'том мы ___ на мо'ре.", es: 'En verano iremos al mar.', o: ["пое'дем", "пойдём", "е'здим"], x: 'Lejos, en vehículo: поедем.' },
        { q: "Я пошёл за ___.", es: 'Fui a buscar pan.', o: ["хле'бом", "хлеб", "хле'ба"], x: 'За + instrumental.' },
      ],
    },
    outro: 'Vadim le compra flores a Katia. Mi hermana. Y mi alumno es el único que no se sorprende. Tú lo sabías.',
  },
  {
    id: 'l54', level: 5, ru: "Как дойти' до…?", es: '¿Cómo se llega a…?',
    scene: 'Katia y Vadim desaparecieron «a comprar helado». Masha y tú buscan el café donde quedaron. Masha se niega a usar el mapa del teléfono.',
    intro: 'Hoy: llegar hasta, cruzar, pasar. Prefijos до-, пере-, про-. Para pedir direcciones como en 1990.',
    dialog: [
      { ru: "Спроси' доро'гу. Я не бу'ду смотре'ть в телефо'н. Э'то при'нцип.", es: 'Pregunta el camino. No voy a mirar el teléfono. Es una cuestión de principios.', e: 'smirk' },
      { u: [["Извини'те, как дойти' до кафе' «Пу'шкин»?", 'Disculpe, ¿cómo se llega al café «Pushkin»?'], ["Извини'те, как прийти' кафе'?", 'Disculpe, ¿cómo venir café? (mal dicho)', '«Llegar hasta» = дойти до + genitivo.']] },
      { who: 'passer', ru: "Перейди'те у'лицу, пройди'те ми'мо теа'тра, и пото'м напра'во.", es: 'Cruce la calle, pase delante del teatro y luego a la derecha.' },
      { u: [["Перейти' у'лицу, пройти' ми'мо теа'тра, напра'во. Спаси'бо!", 'Cruzar la calle, pasar el teatro, a la derecha. ¡Gracias!'], ["Пройти' у'лицу?", '¿Pasar la calle?', 'Cruzar = перейти.']] },
      { n: 'Veinte minutos después estás en otra plaza. Sin café.' },
      { ru: "Мы прошли' ми'мо. Два ра'за.", es: 'Pasamos de largo. Dos veces.', e: 'annoyed' },
      { u: [["Мо'жет быть, посмо'трим в телефо'н?", '¿Tal vez miramos el teléfono?', 'Nunca. …Bueno. Solo esta vez. No se lo digas a nadie.'], ["Мы дошли' до кафе'!", '¡Llegamos al café!', 'No llegamos a nada. Esto es un parque.']] },
      { ru: "До кафе' пять мину'т. Мы прошли' два киломе'тра. Ко'фе бу'дет за'служенный.", es: 'El café está a cinco minutos. Caminamos dos kilómetros. El café será merecido.' },
    ],
    phrases: [
      ["Как дойти' до…?", '¿Cómo se llega a…? (a pie)'],
      ["Перейди'те у'лицу.", 'Cruce la calle.'],
      ["Пройди'те ми'мо теа'тра.", 'Pase delante del teatro.'],
      ["Мы прошли' ми'мо.", 'Pasamos de largo.'],
      ["доро'га", 'camino'],
      ["Спроси' доро'гу.", 'Pregunta el camino.'],
      ["Э'то при'нцип.", 'Es cuestión de principios.'],
      ["два ра'за", 'dos veces'],
    ],
    grammar: {
      id: 'g54', title: 'До-, пере-, про-',
      body: `<p><b>до-</b> = llegar hasta (el final del camino): [[дойти' до кафе']], [[дое'хать до вокза'ла]] (+ до + genitivo)</p>
<p><b>пере-</b> = cruzar, atravesar: [[перейти' у'лицу]], [[перее'хать мост]]. También mudarse: [[перее'хать в Петербу'рг]].</p>
<p><b>про-</b> = pasar (de largo, a través, una distancia): [[пройти' ми'мо теа'тра]], [[пройти' два киломе'тра]], [[Проходи'те!]] (¡pase!)</p>
<p>Imperativos para dar direcciones: [[Иди'те пря'мо]], [[Поверни'те напра'во]], [[Перейди'те]], [[Пройди'те]].</p>`,
      drills: [
        { q: "Как ___ до вокза'ла?", es: '¿Cómo se llega a la estación (a pie)?', o: ["дойти'", "пройти'", "перейти'"], x: 'Llegar hasta: дойти.' },
        { q: "___ у'лицу здесь.", es: 'Cruce la calle aquí.', o: ["Перейди'те", "Дойди'те", "Пройди'те"], x: 'Cruzar: перейти.' },
        { q: "Мы прошли' ми'мо ___.", es: 'Pasamos delante del museo.', o: ["музе'я", "музе'й", "музе'ю"], x: 'Мимо + genitivo.' },
        { q: "В про'шлом году' они' ___ в Москву'.", es: 'El año pasado se mudaron a Moscú.', o: ["перее'хали", "дое'хали", "прое'хали"], x: 'Mudarse: переехать.' },
        { q: "Мы ___ до кафе' за пять мину'т.", es: 'Llegamos al café en cinco minutos.', o: ["дошли'", "перешли'", "вошли'"], x: 'Llegar hasta: дошли.' },
      ],
    },
    outro: 'Llegamos. Katia y Vadim llevaban una hora. Tomados de la mano. No pregunté. No quiero saber. Quiero saber todo.',
  },
  {
    id: 'l55', level: 5, ru: "Что ты несёшь?", es: '¿Qué llevas?',
    scene: 'Vuelta a Petersburgo. Masha y tú cargan las cosas que les dio la mamá de Masha: frascos de mermelada, pepinillos, un abrigo, una planta.',
    intro: 'Hoy: llevar. Нести (llevar a pie) y везти (llevar en vehículo). Las madres rusas no dejan que vuelvas con las manos vacías.',
    dialog: [
      { ru: "Что ты несёшь?", es: '¿Qué llevas?' },
      { u: [["Три ба'нки варе'нья и цвето'к.", 'Tres frascos de mermelada y una planta.'], ["Я везу' три ба'нки варе'нья.", 'Llevo (en vehículo) tres frascos.', 'Ahora vamos a pie, así que: несу.']] },
      { ru: "А я несу' огурцы' и па'пино пальто'. Он ду'мает, в Петербу'рге хо'лодно.", es: 'Yo llevo pepinillos y el abrigo de papá. Cree que en Petersburgo hace frío.' },
      { u: [["Он прав.", 'Tiene razón.', 'Sí. Pero no se lo digas.'], ["Он не прав.", 'No tiene razón.', 'Sí la tiene. Siempre hace frío. Hasta en julio.']] },
      { ru: "Ма'ма всегда' даёт мне еду'. Я вожу' её в Петербу'рг ка'ждый год.", es: 'Mamá siempre me da comida. La llevo a Petersburgo cada año.' },
      { u: [["Мы везём еду' на це'лую зи'му!", '¡Llevamos comida para todo el invierno!', 'Exacto. Por eso las madres rusas no conocen la palabra «suficiente».'], ["Мы несём еду' в по'езде.", 'Llevamos (a pie) comida en el tren.', 'En el tren, el que lleva es el tren: везём.']] },
      { n: 'En el tren, un frasco de mermelada se abre. Sobre el abrigo de papá.' },
      { ru: "…Не говори' ма'ме.", es: '…No se lo digas a mamá.', e: 'sad' },
    ],
    phrases: [
      ["Что ты несёшь?", '¿Qué llevas? (a pie)'],
      ["Я несу' су'мку.", 'Llevo una bolsa.'],
      ["Мы везём еду'.", 'Llevamos comida (en vehículo).'],
      ["ба'нка", 'frasco'],
      ["цвето'к / цветы'", 'flor, planta / flores'],
      ["пальто'", 'abrigo'],
      ["на це'лую зи'му", 'para todo el invierno'],
      ["Не говори' ма'ме.", 'No se lo digas a mamá.'],
    ],
    grammar: {
      id: 'g55', title: 'Llevar: нести, везти',
      body: `<p>Funcionan como идти / ехать, pero con una carga:</p>
<p>[[нести']] — llevar a pie, en las manos (ahora): [[несу']], [[несёшь]], [[несёт]] · pasado [[нёс]], [[несла']]</p>
<p>[[носи'ть]] — llevar habitualmente; también «llevar puesto»: [[Она' но'сит очки'.]] Usa gafas.</p>
<p>[[везти']] — llevar en un vehículo (ahora): [[везу']], [[везёшь]] · [[вози'ть]] — habitualmente: [[вожу']], [[во'зишь]]</p>
<p>Con prefijos, igual que antes: [[принести']] (traer), [[привезти']] (traer en vehículo), [[унести']] (llevarse).</p>`,
      drills: [
        { q: "Я ___ су'мку.", es: 'Llevo una bolsa (ahora, a pie).', o: ["несу'", "ношу'", "везу'"], x: 'Ahora, a pie: несу.' },
        { q: "Он всегда' ___ очки'.", es: 'Siempre lleva gafas.', o: ["но'сит", "несёт", "во'зит"], x: 'Llevar puesto: носит.' },
        { q: "Такси' ___ нас в аэропо'рт.", es: 'El taxi nos lleva al aeropuerto.', o: ["везёт", "несёт", "идёт"], x: 'Vehículo: везёт.' },
        { q: "Ма'ма ___ мне пода'рок.", es: 'Mamá me trajo un regalo (a pie).', o: ["принесла'", "привезла'", "унесла'"], x: 'Traer a pie: принесла.' },
        { q: "Я ___ дете'й в шко'лу ка'ждый день.", es: 'Llevo a los niños al colegio (en coche) cada día.', o: ["вожу'", "везу'", "ношу'"], x: 'Costumbre, vehículo: вожу.' },
      ],
    },
    outro: 'El abrigo de papá huele a mermelada de frambuesa para siempre. Es nuestro secreto. Uno más.',
  },
  {
    id: 'l56', level: 5, ru: "Лете'ть и'ли е'хать?", es: '¿Volar o ir en tren?',
    scene: 'Planean el viaje a Ekaterimburgo, a ver a la abuela. Vadim quiere volar. Masha tiene miedo a los aviones. No lo admite.',
    intro: 'Hoy: volar. Лететь y летать. Y una Masha con miedo. Disfrútalo, no pasa a menudo.',
    dialog: [
      { who: 'vadim', ru: "Дава'йте полети'м на самолёте! Два часа' — и мы там.", es: '¡Vamos en avión! Dos horas y estamos allí.' },
      { ru: "Нет. Мы пое'дем на по'езде. Два дня.", es: 'No. Iremos en tren. Dos días.', e: 'annoyed' },
      { u: [["Ма'ша, ты бои'шься лета'ть?", 'Masha, ¿te da miedo volar?'], ["Ма'ша, ты бои'шься лете'ть?", 'Masha, ¿te da miedo volar? (poco natural)', 'Volar en general: летать.']] },
      { ru: "Я не бою'сь. Я про'сто не люблю' лета'ть. Э'то ра'зные ве'щи.", es: 'No tengo miedo. Simplemente no me gusta volar. Son cosas distintas.', e: 'eyeroll' },
      { who: 'vadim', ru: "Я лета'ю ча'сто. Э'то безопа'сно!", es: 'Yo vuelo a menudo. ¡Es seguro!' },
      { u: [["А по'езд — э'то приключе'ние. Транссиби'рская магистра'ль!", 'Y el tren es una aventura. ¡El Transiberiano!', 'Exacto. Gracias. Por fin alguien que me entiende.'], ["Дава'й полети'м, Ма'ша!", '¡Volemos, Masha!', 'Te pongo un cero en la próxima prueba.']], k: 2 },
      { ru: "Реши'ли. Е'дем на по'езде. Чай в подста'канниках, разгово'ры, леса'.", es: 'Decidido. Vamos en tren. Té en portavasos, conversaciones, bosques.', e: 'happy' },
      { u: [["Как в рома'не!", '¡Como en una novela!']] },
    ],
    phrases: [
      ["лете'ть на самолёте", 'volar en avión'],
      ["Я ча'сто лета'ю.", 'Vuelo a menudo.'],
      ["Ты бои'шься лета'ть?", '¿Te da miedo volar?'],
      ["Я не бою'сь.", 'No tengo miedo.'],
      ["безопа'сно", 'seguro (sin peligro)'],
      ["Реши'ли.", 'Decidido.'],
      ["подста'канник", 'portavasos (de metal, para el té del tren)'],
      ["лес / леса'", 'bosque / bosques'],
    ],
    grammar: {
      id: 'g56', title: 'Лететь y летать; бояться',
      body: `<p>[[лете'ть]] — volar ahora, en una dirección: [[лечу']], [[лети'шь]], [[лети'т]] · [[Я лечу' в Москву'.]]</p>
<p>[[лета'ть]] — volar en general, habitualmente: [[лета'ю]], [[лета'ешь]] · [[Пти'цы лета'ют.]]</p>
<p>Con prefijos: [[прилете'ть]] (llegar en avión), [[улете'ть]] (irse en avión), [[полете'ть]].</p>
<p>[[боя'ться]] (tener miedo) pide <b>genitivo</b>: [[Я бою'сь соба'к.]] · o infinitivo: [[Я бою'сь лета'ть.]] Conjugación: [[бою'сь]], [[бои'шься]], [[бои'тся]].</p>`,
      drills: [
        { q: "За'втра я ___ в Мадри'д.", es: 'Mañana vuelo a Madrid.', o: ["лечу'", "лета'ю", "лете'ю"], x: 'Una dirección: лечу.' },
        { q: "Пти'цы ___.", es: 'Los pájaros vuelan.', o: ["лета'ют", "летя'т", "летёт"], x: 'En general: летают.' },
        { q: "Самолёт ___ в три часа'.", es: 'El avión llegó a las tres.', o: ["прилете'л", "улете'л", "лета'л"], x: 'Llegar volando: прилетел.' },
        { q: "Я бою'сь ___.", es: 'Me dan miedo los perros.', o: ["соба'к", "соба'ки", "соба'кам"], x: 'Бояться + genitivo.' },
        { q: "Ты ___ темноты'?", es: '¿Te da miedo la oscuridad?', o: ["бои'шься", "бою'сь", "бои'тся"], x: 'Ты боишься.' },
      ],
    },
    outro: 'No tengo miedo a volar. Simplemente prefiero el tren. Y la tierra firme. Y no morir. Normal.',
  },
  {
    id: 'l57', level: 5, ru: "Че'рез три дня", es: 'Dentro de tres días',
    scene: 'Transiberiano, vagón de literas. La revisora (проводница) reparte té. Masha mira por la ventana: bosque. Bosque. Bosque.',
    intro: 'Hoy: expresiones de tiempo. Dentro de, hace, en (cuánto tardas). Через, назад, за. Tienes dos días de tren para aprenderlas.',
    dialog: [
      { who: 'provod', ru: "Чай бу'дете? Мы прие'дем в Екатеринбу'рг че'рез два дня.", es: '¿Quieren té? Llegaremos a Ekaterimburgo dentro de dos días.' },
      { u: [["Да, пожа'луйста. Два ча'я.", 'Sí, por favor. Dos tés.'], ["Да. А мы прие'хали два дня наза'д?", 'Sí. ¿Y llegamos hace dos días?', 'No, LLEGAREMOS dentro de dos días: через.']] },
      { ru: "Я е'здила по э'той доро'ге пять лет наза'д. Всё так же: лес и чай.", es: 'Hice este viaje hace cinco años. Todo igual: bosque y té.' },
      { u: [["За два дня я прочита'ю всю кни'гу!", '¡En dos días leeré todo el libro!', 'Eso dices. Pero en tren se duerme. Y se come. Y se habla.'], ["Я прочита'ю кни'гу че'рез два дня.", 'Leeré el libro dentro de dos días.', '¿Dentro de dos días empezarás? Para «en dos días» se dice «за».']], k: 1 },
      { who: 'vadim', ru: "А я уже' съел все пирожки'. За час.", es: 'Yo ya me comí todos los pirozhkí. En una hora.' },
      { ru: "Вади'м. Э'то бы'ли пирожки' на два дня.", es: 'Vadim. Eran pirozhkí para dos días.', e: 'annoyed' },
      { u: [["Ничего'. Че'рез час бу'дет ста'нция. Там прода'ют еду'.", 'No pasa nada. Dentro de una hora hay una estación. Allí venden comida.', 'Las babushkas de los andenes. Tienes razón. Salvados.']] },
    ],
    phrases: [
      ["че'рез два дня", 'dentro de dos días'],
      ["пять лет наза'д", 'hace cinco años'],
      ["за час", 'en una hora'],
      ["на два дня", 'para dos días'],
      ["проводни'ца", 'revisora (del tren)'],
      ["ста'нция", 'estación (parada)'],
      ["Чай бу'дете?", '¿Quieren té?'],
      ["Всё так же.", 'Todo igual.'],
    ],
    grammar: {
      id: 'g57', title: 'Через, назад, за, на',
      body: `<p>[[че'рез]] + acusativo = dentro de (futuro): [[че'рез час]], [[че'рез неде'лю]]</p>
<p>… [[наза'д]] (detrás) = hace (pasado): [[два го'да наза'д]], [[неде'лю наза'д]]</p>
<p>[[за]] + acusativo = en (lo que tardas en completar algo, con perfectivo): [[Я прочита'л кни'гу за два дня.]]</p>
<p>[[на]] + acusativo = para (duración prevista): [[Я прие'хал на неде'лю.]] Vine para una semana.</p>
<p>Y duración simple, sin preposición: [[Я ждал час.]] Esperé una hora.</p>`,
      drills: [
        { q: "По'езд придёт ___ час.", es: 'El tren llegará dentro de una hora.', o: ["че'рез", "за", "наза'д"], x: 'Dentro de: через.' },
        { q: "Я был там два го'да ___.", es: 'Estuve allí hace dos años.', o: ["наза'д", "че'рез", "за"], x: 'Hace: назад.' },
        { q: "Он прочита'л кни'гу ___ день.", es: 'Leyó el libro en un día.', o: ["за", "че'рез", "на"], x: 'Tiempo para completar: за.' },
        { q: "Мы прие'хали ___ неде'лю.", es: 'Vinimos para una semana.', o: ["на", "за", "че'рез"], x: 'Duración prevista: на.' },
        { q: "Я ждал ___.", es: 'Esperé una hora.', o: ["час", "за час", "на час"], x: 'Duración simple: sin preposición.' },
      ],
    },
    outro: 'Dos días de tren. Bosque, té y Vadim comiendo. El Transiberiano es meditación. Con Vadim, no tanto.',
  },
  {
    id: 'l58', level: 5, ru: "Е'сли бу'дет хо'лодно…", es: 'Si hace frío…',
    scene: 'Segunda noche en el tren. La revisora cuenta historias de los Urales. Masha escucha. Vadim ronca.',
    intro: 'Hoy: «si». Condiciones reales: si llueve, si hace frío, si Vadim no deja de roncar. Con futuro, en ruso, a diferencia del español.',
    dialog: [
      { who: 'provod', ru: "Е'сли за'втра бу'дет со'лнце, вы уви'дите го'ры.", es: 'Si mañana hace sol, verán las montañas.' },
      { u: [["А е'сли бу'дет дождь?", '¿Y si llueve?'], ["А е'сли есть дождь?", '¿Y si hay lluvia? (mal dicho)', 'Futuro: если будет дождь.']] },
      { who: 'provod', ru: "Е'сли бу'дет дождь, бу'дете пить чай и слу'шать мои' исто'рии.", es: 'Si llueve, tomarán té y escucharán mis historias.' },
      { ru: "Е'сли Вади'м не переста'нет храпе'ть, я вы'йду на сле'дующей ста'нции.", es: 'Si Vadim no deja de roncar, me bajo en la próxima estación.', e: 'annoyed' },
      { u: [["Е'сли ты вы'йдешь, я пойду' с тобо'й.", 'Si te bajas, iré contigo.', 'Lealtad. Me gusta. Pero no te bajes. Hay osos.'], ["Е'сли ты выхо'дишь, я иду' с тобо'й.", 'Si te bajas, voy contigo (aspecto raro).', 'Mejor en futuro perfectivo: если ты выйдешь, я пойду.']], k: 1 },
      { who: 'provod', ru: "Е'сли хоти'те, я дам вам беру'ши.", es: 'Si quieren, les doy tapones para los oídos.' },
      { ru: "Вы а'нгел. Е'сли я когда'-нибудь бу'ду бога'той, я куплю' вам дом.", es: 'Es usted un ángel. Si algún día soy rica, le compraré una casa.', e: 'happy' },
      { u: [["А мне?", '¿Y a mí?', 'Tú tendrás un frasco de pepinillos. Si apruebas.']] },
    ],
    phrases: [
      ["Е'сли бу'дет дождь…", 'Si llueve…'],
      ["Е'сли хо'чешь…", 'Si quieres…'],
      ["Е'сли ты вы'йдешь, я пойду' с тобо'й.", 'Si te bajas, iré contigo.'],
      ["храпе'ть", 'roncar'],
      ["переста'ть", 'dejar de'],
      ["беру'ши", 'tapones para los oídos'],
      ["исто'рия / исто'рии", 'historia / historias'],
      ["когда'-нибудь", 'algún día'],
    ],
    grammar: {
      id: 'g58', title: '«Si» real: если + futuro',
      body: `<p>Para hablar de algo que puede pasar, el ruso usa [[е'сли]] + <b>futuro</b> (el español usa presente):</p>
<p>[[Е'сли бу'дет дождь, мы оста'немся до'ма.]] Si llueve, nos quedamos en casa.</p>
<p>[[Е'сли ты придёшь, я бу'ду ра'да.]] Si vienes, me alegraré.</p>
<p>Con verbos de estado presentes (хотеть, мочь, знать), presente: [[Е'сли хо'чешь, пойдём.]]</p>
<p>No se usa [[е'сли]] para «si» indirecto (no sé si…): eso es [[ли]], ya lo veremos.</p>`,
      drills: [
        { q: "Е'сли за'втра ___ дождь, мы не пойдём.", es: 'Si mañana llueve, no iremos.', o: ["бу'дет", "есть", "был"], x: 'Futuro: будет.' },
        { q: "Е'сли ты ___, я бу'ду ра'да.", es: 'Si vienes, me alegraré.', o: ["придёшь", "прихо'дишь", "пришёл"], x: 'Futuro perfectivo: придёшь.' },
        { q: "Е'сли ___, пойдём в кино'.", es: 'Si quieres, vamos al cine.', o: ["хо'чешь", "бу'дешь хоте'ть", "хоте'л"], x: 'Хотеть: presente.' },
        { q: "Е'сли он не ___, я уйду'.", es: 'Si no deja de roncar, me voy.', o: ["переста'нет", "перестаёт", "переста'л"], x: 'Futuro: перестанет.' },
        { q: "___ бу'дет со'лнце, пойдём гуля'ть.", es: 'Si hace sol, vamos a pasear.', o: ["Е'сли", "Ли", "Когда' бы"], x: 'Если.' },
      ],
    },
    outro: 'Tapones para los oídos. El mejor regalo del viaje. Dormí como un oso. Uno que no ronca.',
  },
  {
    id: 'l59', level: 5, ru: "Я всё сде'лаю!", es: '¡Lo haré todo!',
    scene: 'Llegan a Ekaterimburgo. Baba Galia los espera en el andén con un abrigo para cada uno. Hace 12 grados. Es mayo.',
    intro: 'Hoy: el futuro perfectivo. «Lo haré», «te ayudaré». Una promesa completa. Distinto de «estaré haciendo» (буду делать).',
    dialog: [
      { who: 'galia', ru: "Ма'шенька! Наконе'ц-то! Наде'ньте пальто', здесь хо'лодно!", es: '¡Mashenka! ¡Por fin! ¡Pónganse los abrigos, aquí hace frío!' },
      { ru: "Ба'ба, двена'дцать гра'дусов. Э'то не хо'лодно.", es: 'Abuela, doce grados. No hace frío.', e: 'eyeroll' },
      { u: [["Здра'вствуйте, Гали'на Ива'новна! Я вам помогу' с су'мками.", '¡Buenos días, Galina Ivánovna! La ayudaré con las bolsas.'], ["Здра'вствуйте! Я бу'ду помога'ть вам су'мки.", 'Estaré ayudando las bolsas (mal dicho).', 'Una vez, resultado: помогу. Y «con las bolsas»: с сумками.']] },
      { who: 'galia', ru: "Како'й ве'жливый! Сего'дня я пригото'влю пельме'ни, а за'втра испеку' пиро'г.", es: '¡Qué educado! Hoy prepararé pelmeni y mañana hornearé un pastel.' },
      { u: [["А я помо'ю посу'ду!", '¡Y yo lavaré los platos!', 'Prometiste. Te veo. Y la abuela tiene buena memoria.'], ["А я бу'ду есть.", 'Y yo estaré comiendo.', 'Sincero. La abuela lo aprecia.']], k: 2 },
      { who: 'vadim', ru: "А я почи'ню кран! Ма'ша говори'ла, он течёт.", es: '¡Y yo arreglaré el grifo! Masha dijo que gotea.' },
      { ru: "Ты почи'нишь кран? Ты?", es: '¿Tú arreglarás el grifo? ¿Tú?', e: 'surprised' },
      { who: 'galia', ru: "Ма'шенька, како'й хоро'ший па'рень! Где ты его' нашла'?", es: '¡Mashenka, qué buen chico! ¿Dónde lo encontraste?' },
      { ru: "Э'то не мой. Э'то Ка'тин.", es: 'No es mío. Es de Katia.', e: 'smirk' },
    ],
    phrases: [
      ["Я вам помогу'.", 'La/Lo ayudaré.'],
      ["Я всё сде'лаю.", 'Lo haré todo.'],
      ["Я помо'ю посу'ду.", 'Lavaré los platos.'],
      ["пригото'вить", 'preparar, cocinar'],
      ["испе'чь пиро'г", 'hornear un pastel'],
      ["почини'ть", 'arreglar, reparar'],
      ["Кран течёт.", 'El grifo gotea.'],
      ["Наде'ньте пальто'!", '¡Pónganse el abrigo!'],
    ],
    grammar: {
      id: 'g59', title: 'Futuro perfectivo',
      body: `<p>El verbo perfectivo conjugado como si fuera presente <b>es futuro</b>: [[сде'лать]] → [[я сде'лаю]] (lo haré) · [[помо'чь]] → [[я помогу']] (ayudaré) · [[купи'ть]] → [[я куплю']]</p>
<p>Comparar: [[Я бу'ду чита'ть]] (estaré leyendo, leeré en general) / [[Я прочита'ю]] (lo leeré entero, resultado).</p>
<p>¡Los perfectivos no tienen presente! [[я сде'лаю]] nunca significa «hago».</p>
<p>Algunos futuros irregulares: [[помогу']], [[помо'жешь]] · [[испеку']], [[испечёшь]] · [[дам]], [[дашь]], [[даст]] · [[съем]], [[съешь]].</p>`,
      drills: [
        { q: "За'втра я ___ тебе'.", es: 'Mañana te ayudaré.', o: ["помогу'", "помога'ю", "помо'жу"], x: 'Помочь → помогу.' },
        { q: "Я ___ кни'гу за неде'лю.", es: 'Leeré el libro en una semana.', o: ["прочита'ю", "бу'ду прочита'ть", "чита'ю"], x: 'Resultado futuro: прочитаю.' },
        { q: "Ве'чером я ___ телеви'зор.", es: 'Por la noche veré la tele (un rato).', o: ["бу'ду смотре'ть", "посмотрю' бу'ду", "смотре'л"], x: 'Proceso: буду смотреть.' },
        { q: "Он ___ кран.", es: 'Él arreglará el grifo.', o: ["почи'нит", "чи'нит бу'дет", "почини'л"], x: 'Futuro perfectivo: починит.' },
        { q: "Я тебе' ___ кни'гу.", es: 'Te daré el libro.', o: ["дам", "даю'", "дам бу'ду"], x: 'Дать → дам.' },
      ],
    },
    outro: 'Vadim arregló el grifo. Ahora gotea más. La abuela igual lo adora. Hay cosas que no entiendo.',
  },
  {
    id: 'l60', level: 5, ru: "Сади'тесь, е'шьте!", es: '¡Siéntense, coman!',
    scene: 'Cena en casa de la abuela Galia. La mesa no tiene ni un centímetro libre. Pelmeni, ensaladas, pescado, pasteles. Y la abuela dando órdenes.',
    intro: 'Hoy: el imperativo y el aspecto. Las abuelas rusas dominan el imperativo imperfectivo: «¡come!», «¡siéntate!», «¡toma más!». No hay escapatoria.',
    dialog: [
      { who: 'galia', ru: "Сади'тесь, сади'тесь! Е'шьте, пока' горя'чее!", es: '¡Siéntense, siéntense! ¡Coman mientras está caliente!' },
      { u: [["Спаси'бо! Всё так вку'сно вы'глядит!", '¡Gracias! ¡Todo se ve tan rico!'], ["Спаси'бо, я не хочу' есть.", 'Gracias, no tengo hambre.', '¿No tienes hambre? ¿En casa de una abuela rusa? Eso no es una opción.']] },
      { who: 'galia', ru: "Бери'те сала'т! И ры'бу! И ещё пельме'ней!", es: '¡Tomen ensalada! ¡Y pescado! ¡Y más pelmeni!' },
      { u: [["Мо'жно мне ещё пельме'ней?", '¿Me da más pelmeni?', 'Respuesta correcta. La abuela llora de alegría.'], ["Я уже' {сыт|сыта'}…", 'Ya estoy lleno/a…', 'Ese adjetivo no existe en casa de mi abuela.']], k: 1 },
      { ru: "Ба'ба, скажи' ему', что мо'жно отказа'ться.", es: 'Abuela, dile que se puede decir que no.', e: 'smirk' },
      { who: 'galia', ru: "Нельзя'! Ешь, сыно'к, ешь. Ты худо'й.", es: '¡No se puede! Come, hijo, come. Estás flaco.' },
      { u: [["Спаси'бо, ба'ба Га'ля! Переда'йте, пожа'луйста, хлеб.", '¡Gracias, baba Galia! Páseme el pan, por favor.', '¡Ya le dices «baba Galia»! Te adoptaron. Felicidades. Fin del nivel cinco.']] },
    ],
    phrases: [
      ["Сади'тесь!", '¡Siéntense!'],
      ["Е'шьте, пока' горя'чее!", '¡Coman mientras está caliente!'],
      ["Бери'те!", '¡Tomen! / ¡Sírvanse!'],
      ["Переда'йте, пожа'луйста, хлеб.", 'Páseme el pan, por favor.'],
      ["Мо'жно мне ещё?", '¿Me da más?'],
      ["Я {сыт|сыта'}.", 'Estoy lleno/a.'],
      ["отказа'ться", 'rechazar, decir que no'],
      ["сала'т / ры'ба", 'ensalada / pescado'],
    ],
    grammar: {
      id: 'g60', title: 'Imperativo: ¿qué aspecto?',
      body: `<p><b>Imperfectivo</b> para invitar, animar o pedir algo que el otro ya espera hacer: [[Сади'тесь!]] [[Е'шьте!]] [[Проходи'те!]] [[Бери'те!]] — es cálido y hospitalario.</p>
<p><b>Perfectivo</b> para pedir una acción concreta, una vez: [[Переда'йте хлеб.]] [[Закро'йте окно'.]] [[Скажи'те, пожа'луйста…]]</p>
<p>Negativo: casi siempre <b>imperfectivo</b>: [[Не открыва'й окно'!]] · El perfectivo negativo es advertencia: [[Не упади'!]] (¡no te caigas!)</p>
<p>Irregulares: [[есть]] → [[ешь]], [[е'шьте]] · [[дать]] → [[дай]], [[да'йте]] · [[сесть]] → [[сядь]], [[ся'дьте]].</p>`,
      drills: [
        { q: "Проходи'те, ___!", es: '¡Pasen, siéntense!', o: ["сади'тесь", "ся'дьте", "сиди'те"], x: 'Invitación: садитесь.' },
        { q: "___, пожа'луйста, где метро'?", es: 'Dígame, por favor, ¿dónde está el metro?', o: ["Скажи'те", "Говори'те", "Сказа'ть"], x: 'Pedido concreto: скажите.' },
        { q: "Не ___ окно'!", es: '¡No abras la ventana!', o: ["открыва'й", "откро'й", "откры'ть"], x: 'Negativo: imperfectivo.' },
        { q: "___, пока' горя'чее!", es: '¡Come mientras está caliente!', o: ["Ешь", "Есть", "Съешь бу'дет"], x: 'Есть → ешь.' },
        { q: "___ мне ру'чку, пожа'луйста.", es: 'Dame un bolígrafo, por favor.', o: ["Дай", "Дава'й", "Дать"], x: 'Дать → дай.' },
      ],
    },
    outro: 'Engordamos tres kilos en una noche. La abuela te adoptó. Vadim arregló el grifo otra vez. Fin del nivel cinco.',
  },
);
