/* Masha: avatar en SVG con expresiones, parpadeo y boca que se mueve cuando habla. */
const Masha = (() => {
  const SKIN = '#f4d9c6', SKIN_SH = '#e6bfa6', HAIR = '#ecc76f', HAIR_SH = '#c99f45', HAIR_HI = '#fbe6a6';
  const LINE = '#3b2a2a', BROW = '#a5793e', LIP = '#a5505a', MOUTH = '#7d2f3b';

  const BROWS = {
    neutral: ['M88 92 Q98 87 110 90', 'M130 90 Q142 87 152 92'],
    up: ['M88 84 Q98 78 110 82', 'M130 82 Q142 78 152 84'],
    annoyed: ['M88 88 Q99 89 110 95', 'M130 95 Q141 89 152 88'],
    sad: ['M88 94 Q99 91 110 86', 'M130 86 Q141 91 152 94'],
    smirk: ['M88 93 Q98 90 110 92', 'M130 86 Q142 79 152 86'],
  };
  const MOUTHS = {
    neutral: '<path d="M110 143 Q120 145.5 130 143" fill="none" stroke="' + LIP + '" stroke-width="2.6" stroke-linecap="round"/>',
    smirk: '<path d="M109 144.5 Q121 146.5 132 139" fill="none" stroke="' + LIP + '" stroke-width="2.6" stroke-linecap="round"/>',
    annoyed: '<path d="M110 145 Q120 141.5 130 145" fill="none" stroke="' + LIP + '" stroke-width="2.6" stroke-linecap="round"/>',
    sad: '<path d="M111 147 Q120 140.5 129 147" fill="none" stroke="' + LIP + '" stroke-width="2.6" stroke-linecap="round"/>',
    happy: '<path d="M107 139.5 Q120 156 133 139.5 Q120 144 107 139.5 Z" fill="' + MOUTH + '" stroke="' + LIP + '" stroke-width="1.6" stroke-linejoin="round"/><path d="M110 141.2 Q120 144.6 130 141.2 L129 143 Q120 145.5 111 143 Z" fill="#fff" opacity=".9"/>',
    surprised: '<ellipse cx="120" cy="145" rx="5" ry="6.5" fill="' + MOUTH + '" stroke="' + LIP + '" stroke-width="1.6"/>',
    talk: '<ellipse cx="120" cy="144" rx="6.5" ry="4.6" fill="' + MOUTH + '" stroke="' + LIP + '" stroke-width="1.6"/>',
    talk2: '<path d="M111 143 Q120 149 129 143 Q120 145 111 143 Z" fill="' + MOUTH + '" stroke="' + LIP + '" stroke-width="1.6"/>',
  };
  /* cada expresión: cejas, párpado (0 abierto, 1 cerrado), mirada, boca, rubor */
  const EXPR = {
    neutral: { brows: 'neutral', lid: 0.15, look: [0, 0], mouth: 'neutral', blush: 0.22 },
    smirk: { brows: 'smirk', lid: 0.42, look: [1.5, 0], mouth: 'smirk', blush: 0.22 },
    annoyed: { brows: 'annoyed', lid: 0.45, look: [0, 0.5], mouth: 'annoyed', blush: 0.18 },
    eyeroll: { brows: 'smirk', lid: 0.35, look: [1.5, -3.6], mouth: 'annoyed', blush: 0.18 },
    happy: { brows: 'up', lid: 0, look: [0, 0], mouth: 'happy', blush: 0.55, closed: true },
    pleased: { brows: 'neutral', lid: 0.1, look: [0, 0], mouth: 'smirk', blush: 0.45 },
    surprised: { brows: 'up', lid: -0.15, look: [0, 0], mouth: 'surprised', blush: 0.25 },
    sad: { brows: 'sad', lid: 0.3, look: [0, 1.5], mouth: 'sad', blush: 0.2 },
  };

  function eye(cx, cy, e, id) {
    if (e.closed) return '<path d="M' + (cx - 10) + ' ' + (cy + 1) + ' Q' + cx + ' ' + (cy - 7) + ' ' + (cx + 10) + ' ' + (cy + 1) + '" fill="none" stroke="' + LINE + '" stroke-width="2.6" stroke-linecap="round"/>';
    const ry = 6.6, lid = e.lid, [dx, dy] = e.look;
    const top = cy - ry + Math.max(0, lid) * 2 * ry * 0.75;
    let s = '<clipPath id="ce' + id + '"><ellipse cx="' + cx + '" cy="' + cy + '" rx="10" ry="' + (ry - Math.min(0, lid) * 6) + '"/></clipPath>';
    s += '<g clip-path="url(#ce' + id + ')"><rect x="' + (cx - 11) + '" y="' + (cy - 12) + '" width="22" height="24" fill="#fbfbff"/>';
    s += '<circle cx="' + (cx + dx) + '" cy="' + (cy + dy) + '" r="5.4" fill="#6c8cab"/><circle cx="' + (cx + dx) + '" cy="' + (cy + dy) + '" r="3.6" fill="#4d6a88"/>';
    s += '<circle cx="' + (cx + dx) + '" cy="' + (cy + dy) + '" r="2.3" fill="#1c2233"/><circle cx="' + (cx + dx + 1.9) + '" cy="' + (cy + dy - 1.9) + '" r="1.3" fill="#fff"/>';
    if (lid > 0) s += '<rect x="' + (cx - 11) + '" y="' + (cy - 14) + '" width="22" height="' + (top - cy + 14) + '" fill="' + SKIN + '"/>';
    s += '</g>';
    s += '<path d="M' + (cx - 10.5) + ' ' + (cy + 0.5 + Math.max(0, lid) * 3) + ' Q' + cx + ' ' + (top - 1.2) + ' ' + (cx + 10.5) + ' ' + (cy - 0.5 + Math.max(0, lid) * 3) + '" fill="none" stroke="' + LINE + '" stroke-width="2.4" stroke-linecap="round"/>';
    s += '<path d="M' + (cx + (id === 'L' ? -10.5 : 10.5)) + ' ' + (cy - 0.5 + Math.max(0, lid) * 3) + ' l' + (id === 'L' ? -2.6 : 2.6) + ' -2.2" stroke="' + LINE + '" stroke-width="2" stroke-linecap="round"/>';
    s += '<path d="M' + (cx - 7) + ' ' + (cy + ry + 0.6) + ' Q' + cx + ' ' + (cy + ry + 2.2) + ' ' + (cx + 7) + ' ' + (cy + ry + 0.6) + '" fill="none" stroke="' + SKIN_SH + '" stroke-width="1.3" stroke-linecap="round"/>';
    return s;
  }

  function face(name) {
    const e = EXPR[name] || EXPR.neutral, b = BROWS[e.brows];
    return '<g class="m-brows" fill="none" stroke="' + BROW + '" stroke-width="3.4" stroke-linecap="round"><path d="' + b[0] + '"/><path d="' + b[1] + '"/></g>' +
      '<g class="m-eyes">' + eye(99, 109, e, 'L') + eye(141, 109, e, 'R') + '</g>' +
      '<g class="m-blush" fill="#e98a8f" opacity="' + e.blush + '"><ellipse cx="93" cy="128" rx="8" ry="4.5"/><ellipse cx="147" cy="128" rx="8" ry="4.5"/></g>' +
      '<g class="m-mouth">' + MOUTHS[e.mouth] + '</g>';
  }

  function svg(expr, opts) {
    opts = opts || {};
    const mug = opts.mug === false ? '' :
      '<g class="m-mug"><g class="m-steam" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" opacity=".55"><path d="M172 200 q-5 -7 0 -14 q5 -7 0 -14"/><path d="M184 202 q-5 -7 0 -14 q5 -7 0 -14"/></g>' +
      '<path d="M196 216 q14 0 14 12 q0 12 -14 12" fill="none" stroke="#efe6d8" stroke-width="5"/>' +
      '<path d="M160 208 h38 v34 q0 12 -12 12 h-14 q-12 0 -12 -12 z" fill="#f6efe2" stroke="#d9cdb8" stroke-width="1.5"/>' +
      '<path d="M160 218 h38" stroke="#c8343f" stroke-width="3"/><circle cx="170" cy="230" r="3" fill="#c8343f"/><circle cx="179" cy="236" r="3" fill="#e0a526"/><circle cx="188" cy="230" r="3" fill="#c8343f"/></g>';
    return '<svg class="masha-svg" viewBox="0 0 240 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Masha">' +
      /* pelo de atrás */
      '<path d="M120 38 C72 38 56 76 58 120 C60 160 54 196 46 222 C66 232 92 228 100 216 L100 166 L140 166 L140 216 C148 228 174 232 194 222 C186 196 180 160 182 120 C184 76 168 38 120 38 Z" fill="' + HAIR_SH + '"/>' +
      /* cuello y cuerpo */
      '<path d="M106 146 h28 v40 h-28 z" fill="' + SKIN_SH + '"/>' +
      '<path d="M30 262 C34 214 74 192 120 192 C166 192 206 214 210 262 Z" fill="#7b2d3b"/>' +
      '<path d="M98 172 Q120 180 142 172 L144 196 Q120 206 96 196 Z" fill="#6a2433"/>' +
      '<path d="M101 180 Q120 187 139 180" fill="none" stroke="#5a1d2a" stroke-width="1.5"/><path d="M99 188 Q120 196 141 188" fill="none" stroke="#5a1d2a" stroke-width="1.5"/>' +
      /* orejas y aretes */
      '<ellipse cx="78" cy="114" rx="6" ry="9" fill="' + SKIN_SH + '"/><ellipse cx="162" cy="114" rx="6" ry="9" fill="' + SKIN_SH + '"/>' +
      '<circle cx="78" cy="125" r="2.6" fill="#e0b13a"/><circle cx="162" cy="125" r="2.6" fill="#e0b13a"/>' +
      /* cara */
      '<path d="M79 100 C79 62 161 62 161 100 C161 138 146 162 120 165 C94 162 79 138 79 100 Z" fill="' + SKIN + '"/>' +
      '<path d="M100 158 Q120 168 140 158 Q130 166 120 166 Q110 166 100 158 Z" fill="' + SKIN_SH + '" opacity=".6"/>' +
      /* nariz y pecas */
      '<path d="M121 115 C119 124 116 128 121 130.5" fill="none" stroke="' + SKIN_SH + '" stroke-width="2.2" stroke-linecap="round"/>' +
      '<g fill="#c99a7e" opacity=".55"><circle cx="108" cy="122" r="1"/><circle cx="112" cy="125" r="1"/><circle cx="104" cy="125" r="1"/><circle cx="132" cy="122" r="1"/><circle cx="128" cy="125" r="1"/><circle cx="136" cy="125" r="1"/></g>' +
      '<g class="m-face">' + face(expr || 'neutral') + '</g>' +
      /* mechones sobre los hombros */
      '<path d="M82 92 C70 120 74 170 66 222 C76 230 92 226 96 214 C92 186 86 150 92 110 Z" fill="' + HAIR + '"/>' +
      '<path d="M158 92 C170 120 166 170 174 222 C164 230 148 226 144 214 C148 186 154 150 148 110 Z" fill="' + HAIR + '"/>' +
      '<path d="M80 130 C78 160 76 190 72 214" fill="none" stroke="' + HAIR_HI + '" stroke-width="2" opacity=".6"/><path d="M162 140 C164 170 166 196 168 214" fill="none" stroke="' + HAIR_SH + '" stroke-width="2" opacity=".7"/>' +
      /* flequillo de lado */
      '<path d="M76 106 C66 60 100 40 124 42 C154 44 176 66 166 108 C164 94 159 84 152 77 C136 69 108 70 94 80 C86 86 80 95 76 106 Z" fill="' + HAIR + '"/>' +
      '<path d="M152 77 C140 72 124 72 112 75 C126 74 140 76 150 82 Z" fill="' + HAIR_SH + '"/>' +
      '<path d="M90 70 C104 56 124 52 146 58" fill="none" stroke="' + HAIR_HI + '" stroke-width="3" stroke-linecap="round" opacity=".7"/>' +
      mug + '</svg>';
  }

  /* versión pixel art (imágenes de PixelLab), si existen */
  function mountPixel(el, P) {
    let cur = 'neutral', talkTimer = null;
    el.classList.add('pixel');
    el.innerHTML = '<img class="masha-pixel" alt="Masha" src="' + (P.neutral || '') + '">';
    const img = el.querySelector('img');
    Object.values(P).forEach(src => { const i = new Image(); i.src = src; });
    function set(expr) {
      cur = P[expr] ? expr : 'neutral';
      img.src = P[cur];
      el.classList.remove('bump'); void el.offsetWidth; el.classList.add('bump');
    }
    function talk(on) {
      clearInterval(talkTimer); talkTimer = null;
      el.classList.toggle('talking', !!on);
      img.src = P[cur];
      if (on && P.talk) {
        let i = 0;
        talkTimer = setInterval(() => { img.src = i++ % 2 ? P[cur] : P.talk; }, 160);
      }
    }
    return { set, talk, get expr() { return cur; } };
  }

  /* un avatar vivo dentro de un contenedor */
  function mount(el, opts) {
    if (window.MASHA_PIXEL && window.MASHA_PIXEL.neutral) return mountPixel(el, window.MASHA_PIXEL);
    let cur = 'neutral', talkTimer = null;
    el.innerHTML = svg(cur, opts);
    const faceG = () => el.querySelector('.m-face');
    function set(expr) {
      if (!EXPR[expr]) expr = 'neutral';
      cur = expr;
      const g = faceG();
      if (g) g.innerHTML = face(expr);
      el.classList.remove('bump'); void el.offsetWidth; el.classList.add('bump');
    }
    function talk(on) {
      clearInterval(talkTimer); talkTimer = null;
      const m = () => el.querySelector('.m-mouth');
      if (!on) { const g = m(); if (g) g.innerHTML = MOUTHS[(EXPR[cur] || EXPR.neutral).mouth]; return; }
      let i = 0;
      talkTimer = setInterval(() => {
        const g = m(); if (!g) return;
        g.innerHTML = MOUTHS[['talk', 'talk2', 'neutral', 'talk'][i++ % 4]];
      }, 120);
    }
    return { set, talk, get expr() { return cur; } };
  }

  return { svg, mount, EXPR: Object.keys(EXPR) };
})();
