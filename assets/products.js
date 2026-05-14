/* ============ DISPLAY SPORT — PRODUCT DATABASE ============ */

const PRODUCTS = {
  'pantaloneta-pro-run': {
    id: 'pantaloneta-pro-run',
    name: 'Pantaloneta Pro Run',
    category: 'Pantalonetas',
    catSlug: 'pantalonetas',
    tag: 'Pantaloneta / Running',
    price: '129.000',
    oldPrice: null,
    badge: 'Nuevo', badgeStyle: 'light',
    rating: 4.8, reviews: 127,
    bgNum: '01',
    short: 'Pantaloneta técnica con tela ultra-liviana, cordón ajustable y bolsillo interno con cremallera.',
    description: 'La Pantaloneta Pro Run es la opción definitiva para corredores que buscan rendimiento real. Tela técnica de secado rápido, costuras planas que eliminan rozaduras y un fit anatómico que se mueve contigo. Probada en la Media Maratón de Bogotá, la 21K de Cali y trails de los cerros orientales.',
    features: [
      'Tela técnica DryFlex® que respira',
      'Costuras planas anti-rozadura',
      'Bolsillo interno con cremallera (cabe celular)',
      'Cordón ajustable interno',
      'Largo: 7 pulgadas (corte clásico)',
      'Reflectivos discretos en logo'
    ],
    specs: {
      'Material': '88% Poliéster reciclado, 12% Elastano',
      'Peso': '110g',
      'Largo': '7 pulgadas',
      'Origen': 'Hecho en Colombia',
      'Cuidado': 'Lavado en agua fría, no usar suavizante'
    },
    colors: [{name:'Negro', hex:'#0a0a0a'},{name:'Gris', hex:'#6e6e6e'},{name:'Blanco', hex:'#ebebeb'}],
    sizes: ['S', 'M', 'L', 'XL'],
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><g fill="#ffffff"><path d="M50 55 L 150 55 L 155 75 L 158 165 L 108 165 L 105 100 L 95 100 L 92 165 L 42 165 L 45 75 Z"/></g><rect x="48" y="55" width="104" height="10" fill="#0a0a0a"/><path d="M100 65 L 100 165" stroke="#0a0a0a" stroke-width="2"/><path d="M55 100 L 90 105" stroke="#6e6e6e" stroke-width="1.5" fill="none" opacity="0.6"/><path d="M145 100 L 110 105" stroke="#6e6e6e" stroke-width="1.5" fill="none" opacity="0.6"/><rect x="65" y="80" width="14" height="3" fill="#0a0a0a" opacity="0.5"/></svg>`,
    related: ['pantaloneta-lightweight','pantaloneta-trail','top-high-impact','visera-aerodynamic']
  },

  'pantaloneta-lightweight': {
    id: 'pantaloneta-lightweight',
    name: 'Pantaloneta Lightweight',
    category: 'Pantalonetas', catSlug: 'pantalonetas',
    tag: 'Pantaloneta / Diaria',
    price: '99.000', oldPrice: null,
    badge: 'Light', badgeStyle: 'dark',
    rating: 4.7, reviews: 89,
    bgNum: '02',
    short: 'La pantaloneta más liviana de la colección. Perfecta para entrenamientos diarios y clima cálido.',
    description: 'Diseñada para la rutina diaria del runner. Tela ultra-liviana que casi no se siente, ideal para climas cálidos como Cartagena, Barranquilla y Cali. La favorita de la comunidad para entrenamientos de fondo en clima caliente.',
    features: [
      'Tela ultra-liviana (solo 85g)',
      'Secado en menos de 15 minutos',
      'Cordón elástico interno',
      'Bolsillo lateral sin cremallera',
      'Largo: 5 pulgadas',
      'Ideal para clima cálido'
    ],
    specs: {
      'Material': '92% Poliéster, 8% Elastano',
      'Peso': '85g',
      'Largo': '5 pulgadas',
      'Origen': 'Hecho en Colombia',
      'Cuidado': 'Lavado en agua fría'
    },
    colors: [{name:'Negro', hex:'#0a0a0a'},{name:'Gris claro', hex:'#b8b8b8'}],
    sizes: ['S', 'M', 'L', 'XL'],
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><g fill="#b8b8b8"><path d="M52 55 L 148 55 L 152 72 L 156 155 L 110 155 L 107 95 L 93 95 L 90 155 L 44 155 L 48 72 Z"/></g><rect x="50" y="55" width="100" height="9" fill="#0a0a0a"/><path d="M100 64 L 100 155" stroke="#ffffff" stroke-width="2"/><path d="M60 75 L 90 75" stroke="#0a0a0a" stroke-width="1" opacity="0.4"/><path d="M110 75 L 140 75" stroke="#0a0a0a" stroke-width="1" opacity="0.4"/><circle cx="78" cy="120" r="2" fill="#0a0a0a" opacity="0.5"/><circle cx="122" cy="120" r="2" fill="#0a0a0a" opacity="0.5"/></svg>`,
    related: ['pantaloneta-pro-run','pantaloneta-trail','top-crop-mesh','visera-aerodynamic']
  },

  'pantaloneta-trail': {
    id: 'pantaloneta-trail',
    name: 'Pantaloneta Trail 5"',
    category: 'Pantalonetas', catSlug: 'pantalonetas',
    tag: 'Pantaloneta / Trail',
    price: '145.000', oldPrice: null,
    badge: 'Trail', badgeStyle: 'light',
    rating: 4.9, reviews: 64,
    bgNum: '03',
    short: 'Resistente, con bolsillos amplios para geles y barras, y reflectivos para trails al amanecer.',
    description: 'Diseñada con runners de montaña en mente. Tela resistente a la abrasión, dos bolsillos amplios con cremallera para geles, llaves o un teléfono pequeño. Probada en los senderos de Monserrate, Chingaza y el Nevado del Ruiz.',
    features: [
      'Tela ripstop resistente',
      'Dos bolsillos amplios con cremallera',
      'Reflectivos 360° para visibilidad',
      'Costuras reforzadas',
      'Largo: 5 pulgadas con underliner',
      'Ventilación lateral'
    ],
    specs: {
      'Material': '78% Nylon ripstop, 22% Elastano',
      'Peso': '145g',
      'Largo': '5 pulgadas',
      'Underliner': 'Sí, con compresión suave',
      'Origen': 'Hecho en Colombia'
    },
    colors: [{name:'Negro', hex:'#0a0a0a'},{name:'Gris oscuro', hex:'#2a2a2a'}],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><g fill="#6e6e6e"><path d="M48 55 L 152 55 L 158 78 L 162 170 L 108 170 L 105 105 L 95 105 L 92 170 L 38 170 L 42 78 Z"/></g><rect x="46" y="55" width="108" height="11" fill="#0a0a0a"/><path d="M100 66 L 100 170" stroke="#ffffff" stroke-width="2"/><rect x="58" y="120" width="22" height="14" fill="#0a0a0a" opacity="0.5" stroke="#ffffff" stroke-width="0.5"/><rect x="120" y="120" width="22" height="14" fill="#0a0a0a" opacity="0.5" stroke="#ffffff" stroke-width="0.5"/></svg>`,
    related: ['pantaloneta-pro-run','top-high-impact','visera-reflective','visera-aerodynamic']
  },

  'top-high-impact': {
    id: 'top-high-impact',
    name: 'Top High Impact',
    category: 'Tops', catSlug: 'tops',
    tag: 'Top / Alto Impacto',
    price: '119.000', oldPrice: null,
    badge: 'High Impact', badgeStyle: 'dark',
    rating: 4.9, reviews: 156,
    bgNum: '04',
    short: 'Soporte real para entrenamientos de alta intensidad. Tirantes anchos y banda inferior reforzada.',
    description: 'El top que las runners colombianas estaban esperando. Soporte de alto impacto sin sacrificar comodidad ni estilo. Tirantes anchos que no se entierran, banda inferior con elástico ancho que no aprieta, y tela con tecnología antibacterial.',
    features: [
      'Soporte de alto impacto (HIIT, running, crossfit)',
      'Tirantes anchos ergonómicos',
      'Banda inferior reforzada de 4cm',
      'Copa removible',
      'Tela con tratamiento antibacterial',
      'Espalda nadadora para mayor movilidad'
    ],
    specs: {
      'Material': '85% Poliamida, 15% Elastano',
      'Soporte': 'Alto impacto',
      'Copa': 'Removible',
      'Origen': 'Hecho en Colombia',
      'Cuidado': 'Lavado a mano recomendado'
    },
    colors: [{name:'Negro', hex:'#0a0a0a'},{name:'Blanco', hex:'#ffffff'},{name:'Gris', hex:'#6e6e6e'}],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><g fill="#ffffff"><path d="M55 60 Q 70 45 100 45 Q 130 45 145 60 L 155 90 L 152 140 Q 130 152 100 152 Q 70 152 48 140 L 45 90 Z"/></g><path d="M70 50 L 80 70" stroke="#0a0a0a" stroke-width="3" fill="none"/><path d="M130 50 L 120 70" stroke="#0a0a0a" stroke-width="3" fill="none"/><path d="M100 45 L 100 152" stroke="#0a0a0a" stroke-width="1.5" opacity="0.4"/><ellipse cx="100" cy="90" rx="22" ry="14" fill="none" stroke="#0a0a0a" stroke-width="1.5" opacity="0.5"/></svg>`,
    related: ['top-crop-mesh','top-strap-performance','pantaloneta-pro-run','visera-aerodynamic']
  },

  'top-crop-mesh': {
    id: 'top-crop-mesh',
    name: 'Top Crop Mesh',
    category: 'Tops', catSlug: 'tops',
    tag: 'Top / Mesh',
    price: '89.000', oldPrice: '105.000',
    badge: '-15%', badgeStyle: 'light',
    rating: 4.6, reviews: 92,
    bgNum: '05',
    short: 'Top crop con paneles mesh para máxima ventilación. Ideal para yoga, gym y entrenamientos de baja-media intensidad.',
    description: 'El top crop perfecto para combinar dentro y fuera del gimnasio. Paneles mesh estratégicamente ubicados para ventilación, tela suave que se siente como una segunda piel y un fit favorecedor.',
    features: [
      'Paneles mesh en espalda y costados',
      'Tela suave touch',
      'Soporte de bajo-medio impacto',
      'Sin costuras irritantes',
      'Largo crop (cintura alta)',
      'Versátil: gym, yoga, calle'
    ],
    specs: {
      'Material': '78% Poliéster, 22% Elastano',
      'Soporte': 'Bajo-medio impacto',
      'Largo': 'Crop',
      'Origen': 'Hecho en Colombia'
    },
    colors: [{name:'Negro', hex:'#0a0a0a'},{name:'Gris', hex:'#b8b8b8'}],
    sizes: ['XS', 'S', 'M', 'L'],
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><g fill="#b8b8b8"><path d="M65 55 Q 75 45 100 45 Q 125 45 135 55 L 140 85 L 138 130 Q 120 138 100 138 Q 80 138 62 130 L 60 85 Z"/></g><path d="M75 50 L 82 65" stroke="#0a0a0a" stroke-width="2" fill="none"/><path d="M125 50 L 118 65" stroke="#0a0a0a" stroke-width="2" fill="none"/><g fill="#0a0a0a" opacity="0.3"><circle cx="80" cy="90" r="1.5"/><circle cx="90" cy="90" r="1.5"/><circle cx="100" cy="90" r="1.5"/><circle cx="110" cy="90" r="1.5"/><circle cx="120" cy="90" r="1.5"/><circle cx="80" cy="100" r="1.5"/><circle cx="100" cy="100" r="1.5"/><circle cx="120" cy="100" r="1.5"/><circle cx="80" cy="110" r="1.5"/><circle cx="100" cy="110" r="1.5"/><circle cx="120" cy="110" r="1.5"/></g></svg>`,
    related: ['top-high-impact','top-strap-performance','pantaloneta-lightweight','visera-aerodynamic']
  },

  'top-strap-performance': {
    id: 'top-strap-performance',
    name: 'Top Strap Performance',
    category: 'Tops', catSlug: 'tops',
    tag: 'Top / Performance',
    price: '109.000', oldPrice: null,
    badge: 'Strap', badgeStyle: 'dark',
    rating: 4.8, reviews: 71,
    bgNum: '06',
    short: 'Diseño con doble tirante cruzado en la espalda. Combina estética y rendimiento.',
    description: 'Un top que se ve tan bien como funciona. Doble tirante cruzado en la espalda para soporte extra y un look que destaca. Tela técnica de alto rendimiento con tratamiento antiolor.',
    features: [
      'Doble tirante cruzado en espalda',
      'Soporte medio-alto',
      'Tratamiento antiolor',
      'Tela quick-dry',
      'Copa removible',
      'Diseño espalda descubierta'
    ],
    specs: {
      'Material': '82% Poliéster, 18% Elastano',
      'Soporte': 'Medio-alto',
      'Origen': 'Hecho en Colombia'
    },
    colors: [{name:'Negro', hex:'#0a0a0a'},{name:'Blanco', hex:'#ffffff'}],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><g fill="#ffffff"><path d="M58 60 Q 72 48 100 48 Q 128 48 142 60 L 150 95 L 148 145 Q 128 156 100 156 Q 72 156 52 145 L 50 95 Z"/></g><path d="M65 55 L 72 75" stroke="#0a0a0a" stroke-width="2.5" fill="none"/><path d="M80 50 L 85 75" stroke="#0a0a0a" stroke-width="2.5" fill="none"/><path d="M135 55 L 128 75" stroke="#0a0a0a" stroke-width="2.5" fill="none"/><path d="M120 50 L 115 75" stroke="#0a0a0a" stroke-width="2.5" fill="none"/></svg>`,
    related: ['top-high-impact','top-crop-mesh','pantaloneta-pro-run','visera-reflective']
  },

  'visera-aerodynamic': {
    id: 'visera-aerodynamic',
    name: 'Visera Aerodynamic',
    category: 'Viseras', catSlug: 'viseras',
    tag: 'Visera / Sun Protection',
    price: '69.000', oldPrice: null,
    badge: 'Sun', badgeStyle: 'light',
    rating: 4.7, reviews: 104,
    bgNum: '07',
    short: 'Visera ultraligera con protección UV 50+. Banda absorbente y ajuste perfecto.',
    description: 'Tu mejor aliada contra el sol colombiano. Visera ultraligera con tela técnica que bloquea el 98% de los rayos UV, banda interna absorbente que mantiene el sudor lejos de los ojos y ajuste con velcro de alta resistencia.',
    features: [
      'Protección UV 50+',
      'Banda interna absorbente',
      'Tela ultraligera (solo 35g)',
      'Visera curvada aerodinámica',
      'Ajuste con velcro reforzado',
      'Lavable a máquina'
    ],
    specs: {
      'Material': '100% Poliéster técnico',
      'Peso': '35g',
      'Protección UV': '50+',
      'Origen': 'Hecho en Colombia'
    },
    colors: [{name:'Blanco', hex:'#ffffff'},{name:'Negro', hex:'#0a0a0a'},{name:'Gris', hex:'#6e6e6e'}],
    sizes: ['Único (ajustable)'],
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><g fill="#ffffff"><path d="M30 105 Q 100 70 170 105 L 168 120 Q 100 100 32 120 Z"/></g><path d="M55 100 Q 100 80 145 100 L 145 105 Q 100 88 55 105 Z" fill="#0a0a0a" opacity="0.4"/><rect x="78" y="95" width="44" height="6" fill="#6e6e6e"/><text x="100" y="100" fill="#ffffff" font-family="Arial Black" font-size="6" text-anchor="middle">DSR</text></svg>`,
    related: ['visera-reflective','pantaloneta-pro-run','top-high-impact','pantaloneta-lightweight']
  },

  'visera-reflective': {
    id: 'visera-reflective',
    name: 'Visera Reflective Pro',
    category: 'Viseras', catSlug: 'viseras',
    tag: 'Visera / Nocturna',
    price: '79.000', oldPrice: null,
    badge: 'Reflect', badgeStyle: 'dark',
    rating: 4.8, reviews: 58,
    bgNum: '08',
    short: 'Visera con detalles reflectivos 360° para entrenar de noche. Tu seguridad primero.',
    description: 'Para los que entrenan cuando el resto duerme. Detalles reflectivos en el frente, laterales y parte trasera que te hacen visible hasta a 100 metros. Tela técnica con secado rápido y banda anti-sudor.',
    features: [
      'Reflectivos 360° (visible 100m)',
      'Banda interna anti-sudor',
      'Tela técnica secado rápido',
      'Ajuste con velcro',
      'Visera flexible y resistente',
      'Diseñada para baja luz'
    ],
    specs: {
      'Material': '100% Poliéster con detalles reflectivos',
      'Peso': '42g',
      'Visibilidad': '100m en baja luz',
      'Origen': 'Hecho en Colombia'
    },
    colors: [{name:'Negro/Reflectivo', hex:'#0a0a0a'},{name:'Gris/Reflectivo', hex:'#6e6e6e'}],
    sizes: ['Único (ajustable)'],
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><g fill="#6e6e6e"><path d="M28 108 Q 100 72 172 108 L 170 122 Q 100 102 30 122 Z"/></g><path d="M50 105 Q 100 82 150 105 L 150 110 Q 100 90 50 110 Z" fill="#ffffff" opacity="0.7"/><rect x="75" y="98" width="50" height="6" fill="#0a0a0a"/><rect x="78" y="100" width="44" height="2" fill="#ffffff"/><circle cx="100" cy="100" r="2" fill="#ffffff"/></svg>`,
    related: ['visera-aerodynamic','pantaloneta-trail','top-strap-performance','pantaloneta-pro-run']
  }
};

/* ============ RENDER FUNCTIONS ============ */

function renderProductCard(p) {
  const badgeClass = p.badgeStyle === 'dark' ? 'dark' : '';
  return `
    <a class="product" data-cat="${p.catSlug}" href="producto.html?p=${p.id}">
      <span class="product-badge ${badgeClass}">${p.badge}</span>
      <div class="product-image">
        <span class="product-bg-num">${p.bgNum}</span>
        ${p.svg}
      </div>
      <div class="product-tag">${p.tag}</div>
      <div class="product-name">${p.name}</div>
      <div class="product-bottom">
        <div class="product-price"><span class="currency">$</span>${p.price}</div>
        <span class="product-cta" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17L17 7M7 7h10v10"/></svg></span>
      </div>
    </a>
  `;
}

function renderCatalog(containerId) {
  const grid = document.getElementById(containerId);
  if (!grid) return;
  grid.innerHTML = Object.values(PRODUCTS).map(renderProductCard).join('');
}

// Auto-render on DOM ready if catalog grid exists
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => renderCatalog('catalog-grid'));
} else {
  renderCatalog('catalog-grid');
}



/* ============ INSTAGRAM FEED ============ */
/* Cada post tiene una ilustración SVG rica como placeholder.
   Para usar fotos REALES de Instagram:
   1) Guarda el screenshot en assets/instagram/post-N.jpg (1, 2, 3...)
   2) Si quieres URL específico del post, cámbialo en "url"
   Si la imagen existe, se muestra encima del SVG automáticamente. */

const IG_POSTS = [
  {
    img: 'assets/logo.jpg',
    caption: 'Domingo de 21K en los cerros 🏃‍♂️ — La Pantaloneta Pro Run aguantó cada paso',
    likes: 1342,
    url: 'https://www.instagram.com/display_sport',
    svg: `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <defs><linearGradient id="g1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2a2a2a"/><stop offset="1" stop-color="#0a0a0a"/></linearGradient></defs>
      <rect width="400" height="400" fill="url(#g1)"/>
      <path d="M0 280 L 60 220 L 120 250 L 180 200 L 240 240 L 300 190 L 360 230 L 400 210 L 400 400 L 0 400 Z" fill="#1f1f1f"/>
      <path d="M0 310 L 80 270 L 160 295 L 240 260 L 320 290 L 400 275 L 400 400 L 0 400 Z" fill="#141414"/>
      <circle cx="320" cy="100" r="40" fill="#b8b8b8" opacity="0.5"/>
      <g fill="#ffffff" transform="translate(150,200) scale(0.5)">
        <circle cx="60" cy="0" r="14"/>
        <path d="M40 18 Q 55 50 75 65 L 90 90 Q 95 110 88 130 L 75 145 L 55 125 Q 45 105 40 90 L 25 65 Q 25 35 40 18 Z"/>
        <path d="M75 50 Q 105 30 120 0 L 130 -5 Q 135 5 125 15 L 95 50 Z"/>
        <path d="M35 50 Q 5 70 -10 100 L -20 115 Q -25 110 -20 105 L 5 70 L 25 50 Z"/>
        <path d="M75 130 Q 95 160 105 200 L 115 230 Q 110 240 100 235 L 80 195 L 60 140 Z"/>
        <path d="M50 140 Q 30 180 5 220 L -15 250 Q -25 250 -25 240 Q -15 225 -10 215 L 20 180 L 45 145 Z"/>
      </g>
      <line x1="80" y1="220" x2="130" y2="220" stroke="#ffffff" stroke-width="2" opacity="0.4"/>
      <line x1="70" y1="235" x2="115" y2="235" stroke="#ffffff" stroke-width="2" opacity="0.3"/>
    </svg>`
  },
  {
    img: 'assets/logo.jpg',
    caption: 'Nueva colección Trail disponible. Bolsillos amplios para geles 🏔️',
    likes: 2105,
    url: 'https://www.instagram.com/display_sport',
    svg: `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <defs><radialGradient id="g2"><stop offset="0" stop-color="#2a2a2a"/><stop offset="1" stop-color="#0a0a0a"/></radialGradient></defs>
      <rect width="400" height="400" fill="url(#g2)"/>
      <g transform="translate(200,200) scale(2.4)">
        <g fill="#ffffff" transform="translate(-50,-50)">
          <path d="M48 55 L 152 55 L 158 78 L 162 170 L 108 170 L 105 105 L 95 105 L 92 170 L 38 170 L 42 78 Z"/>
        </g>
        <rect x="-54" y="5" width="108" height="11" fill="#0a0a0a"/>
        <path d="M0 16 L 0 120" stroke="#0a0a0a" stroke-width="2"/>
        <rect x="-42" y="70" width="22" height="14" fill="#0a0a0a" stroke="#ffffff" stroke-width="0.5" opacity="0.5"/>
        <rect x="20" y="70" width="22" height="14" fill="#0a0a0a" stroke="#ffffff" stroke-width="0.5" opacity="0.5"/>
      </g>
      <text x="200" y="370" text-anchor="middle" fill="#ffffff" font-family="Anton, sans-serif" font-size="22" letter-spacing="2" opacity="0.7">TRAIL COLLECTION</text>
    </svg>`
  },
  {
    img: 'assets/logo.jpg',
    caption: 'Quedada runners Bogotá — Sábado 6am en El Virrey. ¿Quién se apunta?',
    likes: 887,
    url: 'https://www.instagram.com/display_sport',
    svg: `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <defs><linearGradient id="g3" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a3a3a"/><stop offset="0.6" stop-color="#1a1a1a"/><stop offset="1" stop-color="#0a0a0a"/></linearGradient></defs>
      <rect width="400" height="400" fill="url(#g3)"/>
      <rect y="280" width="400" height="120" fill="#0a0a0a"/>
      <line x1="0" y1="290" x2="400" y2="290" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="20,12"/>
      <line x1="0" y1="320" x2="400" y2="320" stroke="#6e6e6e" stroke-width="1" stroke-dasharray="12,8" opacity="0.5"/>
      <g fill="#ffffff">
        <g transform="translate(80,180) scale(0.4)">
          <circle cx="40" cy="0" r="13"/>
          <path d="M25 18 Q 40 48 55 65 L 70 90 Q 73 110 65 125 L 50 110 Q 40 90 35 75 L 15 55 Q 15 30 25 18 Z"/>
          <path d="M55 50 Q 80 30 95 5 L 105 0 Q 110 8 100 18 L 70 50 Z"/>
          <path d="M65 120 Q 80 155 90 195 L 95 215 Q 88 220 82 215 L 65 175 Z"/>
        </g>
        <g transform="translate(180,160) scale(0.5)">
          <circle cx="40" cy="0" r="14"/>
          <path d="M25 18 Q 40 48 55 65 L 70 90 Q 73 110 65 125 L 50 110 Q 40 90 35 75 L 15 55 Q 15 30 25 18 Z"/>
          <path d="M55 50 Q 80 30 95 5 L 105 0 Q 110 8 100 18 L 70 50 Z"/>
          <path d="M65 120 Q 80 155 90 195 L 95 215 Q 88 220 82 215 L 65 175 Z"/>
          <path d="M45 130 Q 25 165 5 200 L -10 220 Q -18 218 -15 212 L 25 165 Z"/>
        </g>
        <g transform="translate(290,175) scale(0.45)">
          <circle cx="40" cy="0" r="13"/>
          <path d="M25 18 Q 40 48 55 65 L 70 90 Q 73 110 65 125 L 50 110 Q 40 90 35 75 L 15 55 Q 15 30 25 18 Z"/>
          <path d="M55 50 Q 80 30 95 5 L 105 0 Q 110 8 100 18 L 70 50 Z"/>
          <path d="M65 120 Q 80 155 90 195 L 95 215 Q 88 220 82 215 L 65 175 Z"/>
        </g>
      </g>
      <circle cx="330" cy="80" r="35" fill="#ebebeb" opacity="0.4"/>
    </svg>`
  },
  {
    img: 'assets/logo.jpg',
    caption: 'Top High Impact en acción. Soporte real, sin compromisos 💪',
    likes: 3241,
    url: 'https://www.instagram.com/display_sport',
    svg: `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <defs><linearGradient id="g4" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1f1f1f"/><stop offset="1" stop-color="#0a0a0a"/></linearGradient></defs>
      <rect width="400" height="400" fill="url(#g4)"/>
      <text x="200" y="380" text-anchor="middle" fill="#ffffff" font-family="Anton, sans-serif" font-size="280" opacity="0.04" letter-spacing="-8">DSR</text>
      <g transform="translate(200,200) scale(2.2)">
        <g fill="#ffffff" transform="translate(-50,-50)">
          <path d="M55 60 Q 70 45 100 45 Q 130 45 145 60 L 155 90 L 152 140 Q 130 152 100 152 Q 70 152 48 140 L 45 90 Z"/>
        </g>
        <path d="M-30 -50 L -20 -30" stroke="#0a0a0a" stroke-width="3" fill="none"/>
        <path d="M30 -50 L 20 -30" stroke="#0a0a0a" stroke-width="3" fill="none"/>
        <ellipse cx="0" cy="-10" rx="22" ry="14" fill="none" stroke="#0a0a0a" stroke-width="1.5" opacity="0.5"/>
      </g>
      <line x1="20" y1="60" x2="60" y2="60" stroke="#ffffff" stroke-width="2" opacity="0.4"/>
      <line x1="340" y1="340" x2="380" y2="340" stroke="#ffffff" stroke-width="2" opacity="0.4"/>
    </svg>`
  },
  {
    img: 'assets/logo.jpg',
    caption: 'Detrás de cámaras. Hecho en Colombia, costura por costura 🇨🇴',
    likes: 1198,
    url: 'https://www.instagram.com/display_sport',
    svg: `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <defs><linearGradient id="g5" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#252525"/><stop offset="1" stop-color="#0a0a0a"/></linearGradient></defs>
      <rect width="400" height="400" fill="url(#g5)"/>
      <rect x="50" y="120" width="300" height="180" fill="#1a1a1a" stroke="#3a3a3a" stroke-width="1"/>
      <line x1="50" y1="160" x2="350" y2="160" stroke="#6e6e6e" stroke-width="1" stroke-dasharray="4,4"/>
      <line x1="50" y1="200" x2="350" y2="200" stroke="#6e6e6e" stroke-width="1" stroke-dasharray="4,4"/>
      <line x1="50" y1="240" x2="350" y2="240" stroke="#6e6e6e" stroke-width="1" stroke-dasharray="4,4"/>
      <line x1="50" y1="280" x2="350" y2="280" stroke="#6e6e6e" stroke-width="1" stroke-dasharray="4,4"/>
      <g fill="#ffffff">
        <circle cx="100" cy="100" r="8"/>
        <path d="M88 100 L 108 100 L 110 105 L 92 105 Z"/>
        <line x1="100" y1="108" x2="100" y2="140" stroke="#ffffff" stroke-width="3"/>
      </g>
      <rect x="80" y="180" width="80" height="50" fill="#3a3a3a" rx="4"/>
      <line x1="90" y1="195" x2="150" y2="195" stroke="#ffffff" stroke-width="1" opacity="0.5"/>
      <line x1="90" y1="210" x2="150" y2="210" stroke="#ffffff" stroke-width="1" opacity="0.5"/>
      <text x="200" y="365" text-anchor="middle" fill="#ffffff" font-family="Space Mono, monospace" font-size="11" letter-spacing="3" opacity="0.6">MADE IN COLOMBIA</text>
    </svg>`
  },
  {
    img: 'assets/logo.jpg',
    caption: 'Maratón de Medellín — Equipo DSR cruzó la meta 🏅 Orgullo total',
    likes: 4287,
    url: 'https://www.instagram.com/display_sport',
    svg: `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <defs><radialGradient id="g6"><stop offset="0" stop-color="#2a2a2a"/><stop offset="1" stop-color="#0a0a0a"/></radialGradient></defs>
      <rect width="400" height="400" fill="url(#g6)"/>
      <g fill="#ffffff" opacity="0.15">
        <rect x="50" y="80" width="6" height="6" transform="rotate(45 53 83)"/>
        <rect x="120" y="40" width="5" height="5" transform="rotate(20 122 42)"/>
        <rect x="200" y="100" width="7" height="7" transform="rotate(60 203 103)"/>
        <rect x="280" y="60" width="5" height="5" transform="rotate(30 282 62)"/>
        <rect x="350" y="120" width="6" height="6" transform="rotate(45 353 123)"/>
        <rect x="80" y="160" width="4" height="4" transform="rotate(20 82 162)"/>
        <rect x="320" y="180" width="5" height="5" transform="rotate(60 322 182)"/>
      </g>
      <g transform="translate(200,200)">
        <line x1="0" y1="-100" x2="0" y2="-30" stroke="#b8b8b8" stroke-width="3"/>
        <circle cx="0" cy="0" r="55" fill="#ebebeb" stroke="#ffffff" stroke-width="4"/>
        <circle cx="0" cy="0" r="42" fill="none" stroke="#6e6e6e" stroke-width="1.5"/>
        <text x="0" y="-8" text-anchor="middle" fill="#0a0a0a" font-family="Anton, sans-serif" font-size="22">FINISH</text>
        <text x="0" y="14" text-anchor="middle" fill="#0a0a0a" font-family="Space Mono, monospace" font-size="10" letter-spacing="2">42.195 KM</text>
      </g>
      <g fill="#ffffff" opacity="0.5">
        <path d="M0 320 L 400 320" stroke="#ffffff" stroke-width="1"/>
        <text x="200" y="350" text-anchor="middle" font-family="Space Mono, monospace" font-size="11" letter-spacing="3">MARATÓN MEDELLÍN 2026</text>
      </g>
    </svg>`
  }
];

function renderInstagramFeed(containerId) {
  const grid = document.getElementById(containerId);
  if (!grid) return;
  grid.innerHTML = IG_POSTS.map((post, i) => `
    <a class="ig-post" href="${post.url}" target="_blank" rel="noopener">
      <div class="ig-svg-bg">${post.svg}</div>
      <img src="${post.img}" alt="${post.caption}" class="ig-img"
           onload="this.style.opacity='1';"
           onerror="this.remove();" />
      <div class="ig-overlay always-visible">
        <div class="ig-overlay-top">
          <span class="ig-handle-mini">@display_sport</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
        </div>
        <div class="ig-overlay-bottom">
          <div class="ig-likes">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            ${post.likes.toLocaleString('es-CO')}
          </div>
          <p class="ig-caption">${post.caption}</p>
        </div>
      </div>
    </a>
  `).join('');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => renderInstagramFeed('ig-grid'));
} else {
  renderInstagramFeed('ig-grid');
}
