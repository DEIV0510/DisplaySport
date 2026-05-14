/* ============================================================
   DISPLAY SPORT — CATÁLOGO DE PRODUCTOS
   ------------------------------------------------------------
   Editar PRODUCTS para añadir / quitar / modificar items.
   Cada producto necesita:
     - id          slug único (también va en producto.html?p=ID)
     - name        nombre visible
     - category    grupo amplio: 'Ropa' | 'Accesorios'
     - tag         texto pequeño bajo el SVG (tipo + disciplinas)
     - lines       array: 'hombre' | 'dama' | 'accesorios'
     - disciplines array: 'running' | 'fitness' | 'cycling' | 'crossfit'
     - priceTBD    true mientras no se confirme precio
     - price       string formateado ('129.000') si priceTBD === false
     - colors      [{ name, hex }]
     - sizes       array (usa ['Único'] para accesorios)
     - svg         ilustración inline minimalista
     - bgNum       '01'..'11' (número decorativo grande)
     - short       1 oración para card y header de producto
     - description párrafo más largo para tab "Descripción"
     - features    array de bullets
     - specs       { Material, Origen, Cuidado, ... }
     - related     array de IDs sugeridos
     - badge       label corto opcional ('Nuevo', 'Light', etc.)
     - badgeStyle  'light' | 'dark'
   ============================================================ */

const PRODUCTS = {

  /* ============ ROPA ============ */

  'pantaloneta': {
    id: 'pantaloneta',
    name: 'Pantaloneta',
    category: 'Ropa',
    tag: 'Pantaloneta / Running · Fitness',
    lines: ['hombre'],
    disciplines: ['running', 'fitness', 'crossfit'],
    priceTBD: false,
    price: '70.000',
    bgNum: '01',
    badge: 'Pantaloneta', badgeStyle: 'light',
    short: 'Pantaloneta técnica con tela liviana, cordón ajustable y bolsillo interno. Para correr, entrenar y moverte sin restricciones.',
    description: 'Pantaloneta diseñada y producida en Armenia, Quindío. Tela técnica de secado rápido, costuras planas que eliminan rozaduras y un fit anatómico que se mueve contigo. Pensada para entrenar a fondo en cualquier clima del país.',
    features: [
      'Tela técnica de secado rápido',
      'Costuras planas anti-rozadura',
      'Bolsillo interno',
      'Cordón ajustable',
      'Pensada para clima cálido'
    ],
    specs: {
      'Material': 'Poliéster técnico + Elastano',
      'Origen': 'Hecho en Armenia, Colombia',
      'Cuidado': 'Lavado en agua fría, no usar suavizante'
    },
    colors: [{ name: 'Negro', hex: '#0a0a0a' }, { name: 'Gris', hex: '#6e6e6e' }],
    sizes: ['S', 'M', 'L'],
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g fill="#ffffff"><path d="M50 55 L 150 55 L 155 75 L 158 165 L 108 165 L 105 100 L 95 100 L 92 165 L 42 165 L 45 75 Z"/></g><rect x="48" y="55" width="104" height="10" fill="#0a0a0a"/><path d="M100 65 L 100 165" stroke="#0a0a0a" stroke-width="2"/><path d="M55 100 L 90 105" stroke="#6e6e6e" stroke-width="1.5" fill="none" opacity="0.6"/><path d="M145 100 L 110 105" stroke="#6e6e6e" stroke-width="1.5" fill="none" opacity="0.6"/><rect x="65" y="80" width="14" height="3" fill="#0a0a0a" opacity="0.5"/></svg>`,
    related: ['licra', 'camiseta', 'esqueleto', 'visera']
  },

  'licra': {
    id: 'licra',
    name: 'Licra',
    category: 'Ropa',
    tag: 'Licra / Running · Cycling · Fitness',
    lines: ['hombre', 'dama'],
    disciplines: ['running', 'cycling', 'fitness'],
    priceTBD: false,
    price: '90.000',
    bgNum: '02',
    badge: 'Licra', badgeStyle: 'dark',
    short: 'Licra de compresión técnica para máxima libertad de movimiento. Soporte muscular sin restringir el paso.',
    description: 'Licra fabricada en Armenia con tela de compresión técnica. Recuperación muscular acelerada, manejo inteligente de humedad y un fit que no se desliza. Ideal para entrenamientos largos, ciclismo y running.',
    features: [
      'Tela de compresión técnica',
      'Manejo de humedad',
      'Pretina ancha sin marcas',
      'Costuras planas',
      'Disponible para hombre y dama'
    ],
    specs: {
      'Material': 'Poliamida + Elastano',
      'Soporte': 'Compresión media',
      'Origen': 'Hecho en Armenia, Colombia',
      'Cuidado': 'Lavado en agua fría'
    },
    colors: [{ name: 'Negro', hex: '#0a0a0a' }, { name: 'Gris oscuro', hex: '#2a2a2a' }],
    sizes: ['S', 'M', 'L'],
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g fill="#1f1f1f"><path d="M58 30 L 142 30 L 148 60 L 152 180 L 108 180 L 105 90 L 95 90 L 92 180 L 48 180 L 52 60 Z"/></g><rect x="56" y="30" width="88" height="8" fill="#0a0a0a"/><path d="M100 38 L 100 180" stroke="#6e6e6e" stroke-width="1" opacity="0.6"/><path d="M62 80 L 90 80 M 110 80 L 138 80" stroke="#6e6e6e" stroke-width="0.8" opacity="0.4"/><path d="M62 130 L 90 130 M 110 130 L 138 130" stroke="#6e6e6e" stroke-width="0.8" opacity="0.4"/></svg>`,
    related: ['pantaloneta', 'top', 'buso-compresion', 'cinturon-running']
  },

  'camiseta': {
    id: 'camiseta',
    name: 'Camiseta',
    category: 'Ropa',
    tag: 'Camiseta / Running · Fitness · CrossFit',
    lines: ['hombre', 'dama'],
    disciplines: ['running', 'fitness', 'crossfit'],
    priceTBD: false,
    price: '40.000',
    bgNum: '03',
    badge: 'Camiseta', badgeStyle: 'light',
    short: 'Camiseta técnica de manga corta. Tela respirable que mantiene el cuerpo fresco entre kilómetros.',
    description: 'Camiseta básica técnica de fabricación nacional. Tela ligera con ventilación estratégica, fit relajado pero anatómico y un corte que sirve igual para correr, levantar pesas o entrenar funcional.',
    features: [
      'Tela respirable y ligera',
      'Secado rápido',
      'Fit anatómico relajado',
      'Costuras planas',
      'Versátil: running, gym, calle'
    ],
    specs: {
      'Material': 'Poliéster técnico',
      'Manga': 'Corta',
      'Origen': 'Hecho en Armenia, Colombia',
      'Cuidado': 'Lavado en agua fría'
    },
    colors: [{ name: 'Negro', hex: '#0a0a0a' }, { name: 'Blanco', hex: '#ebebeb' }, { name: 'Gris', hex: '#6e6e6e' }],
    sizes: ['S', 'M', 'L'],
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g fill="#ffffff"><path d="M60 50 L 80 38 L 120 38 L 140 50 L 165 75 L 152 95 L 140 88 L 140 170 L 60 170 L 60 88 L 48 95 L 35 75 Z"/></g><path d="M85 38 Q 100 50 115 38" fill="none" stroke="#0a0a0a" stroke-width="2"/><line x1="60" y1="120" x2="140" y2="120" stroke="#0a0a0a" stroke-width="0.5" opacity="0.3"/></svg>`,
    related: ['esqueleto', 'pantaloneta', 'top', 'buso-compresion']
  },

  'esqueleto': {
    id: 'esqueleto',
    name: 'Esqueleto',
    category: 'Ropa',
    tag: 'Esqueleto / Fitness · CrossFit · Running',
    lines: ['hombre'],
    disciplines: ['fitness', 'crossfit', 'running'],
    priceTBD: false,
    price: '40.000',
    bgNum: '04',
    badge: 'Esqueleto', badgeStyle: 'dark',
    short: 'Esqueleto sin mangas con espalda abierta. Máxima ventilación para entrenamientos intensos.',
    description: 'Esqueleto técnico pensado para entrenar duro. Espalda con corte abierto que libera el calor, hombros amplios para movilidad total y tela liviana que apenas se siente. Perfecto para CrossFit, gym y running en clima cálido.',
    features: [
      'Sin mangas',
      'Espalda abierta para máxima ventilación',
      'Tela ultra-liviana',
      'Hombros amplios para movilidad',
      'Diseñado para alta intensidad'
    ],
    specs: {
      'Material': 'Poliéster técnico',
      'Tipo': 'Sin mangas / Espalda abierta',
      'Origen': 'Hecho en Armenia, Colombia',
      'Cuidado': 'Lavado en agua fría'
    },
    colors: [{ name: 'Negro', hex: '#0a0a0a' }, { name: 'Gris', hex: '#6e6e6e' }],
    sizes: ['S', 'M', 'L'],
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g fill="#ffffff"><path d="M75 50 L 95 35 L 105 35 L 125 50 L 130 70 L 145 75 L 145 170 L 55 170 L 55 75 L 70 70 Z"/></g><path d="M75 50 Q 100 70 125 50" fill="none" stroke="#0a0a0a" stroke-width="2"/><path d="M70 70 L 80 90 L 80 170 M 130 70 L 120 90 L 120 170" stroke="#0a0a0a" stroke-width="1" fill="none" opacity="0.4"/></svg>`,
    related: ['camiseta', 'pantaloneta', 'buso-compresion', 'visera']
  },

  'buso-compresion': {
    id: 'buso-compresion',
    name: 'Buso de compresión',
    category: 'Ropa',
    tag: 'Buso / Running · Fitness',
    lines: ['hombre', 'dama'],
    disciplines: ['running', 'fitness', 'cycling'],
    priceTBD: false,
    price: '90.000',
    bgNum: '05',
    badge: 'Compresión', badgeStyle: 'light',
    short: 'Buso de compresión técnica de manga larga. Soporte muscular y protección para entrenamientos al aire libre.',
    description: 'Buso con tela de compresión que acelera la recuperación y mantiene el cuerpo caliente en mañanas frías. Cuello redondo, puños elásticos y costuras planas. Ideal para correr en altura, ciclismo y entrenamientos de fondo.',
    features: [
      'Compresión técnica',
      'Manga larga con puños elásticos',
      'Tela térmica ligera',
      'Costuras planas',
      'Para clima frío y altura'
    ],
    specs: {
      'Material': 'Poliamida + Elastano',
      'Soporte': 'Compresión media',
      'Manga': 'Larga',
      'Origen': 'Hecho en Armenia, Colombia',
      'Cuidado': 'Lavado en agua fría'
    },
    colors: [{ name: 'Negro', hex: '#0a0a0a' }, { name: 'Gris oscuro', hex: '#2a2a2a' }],
    sizes: ['S', 'M', 'L'],
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g fill="#1f1f1f"><path d="M65 45 L 80 32 L 120 32 L 135 45 L 165 78 L 168 175 L 152 178 L 148 95 L 145 95 L 145 170 L 55 170 L 55 95 L 52 95 L 48 178 L 32 175 L 35 78 Z"/></g><path d="M85 32 Q 100 44 115 32" fill="none" stroke="#0a0a0a" stroke-width="2"/><line x1="40" y1="170" x2="55" y2="170" stroke="#0a0a0a" stroke-width="3"/><line x1="145" y1="170" x2="160" y2="170" stroke="#0a0a0a" stroke-width="3"/><line x1="100" y1="40" x2="100" y2="170" stroke="#6e6e6e" stroke-width="0.5" opacity="0.4"/></svg>`,
    related: ['camiseta', 'licra', 'pantaloneta', 'visera']
  },

  'top': {
    id: 'top',
    name: 'Top',
    category: 'Ropa',
    tag: 'Top / Running · Fitness · CrossFit',
    lines: ['dama'],
    disciplines: ['running', 'fitness', 'crossfit'],
    priceTBD: false,
    price: '70.000',
    bgNum: '06',
    badge: 'Top', badgeStyle: 'light',
    short: 'Top deportivo con soporte real. Tirantes anchos, banda inferior reforzada, sin compromisos.',
    description: 'Top diseñado para mujeres que entrenan en serio. Soporte para alta intensidad, tela suave con tratamiento antibacterial y espalda nadadora para libertad de hombros. Hecho en Armenia, Quindío.',
    features: [
      'Soporte alto impacto',
      'Tirantes anchos ergonómicos',
      'Banda inferior reforzada',
      'Copa removible',
      'Espalda nadadora'
    ],
    specs: {
      'Material': 'Poliamida + Elastano',
      'Soporte': 'Alto impacto',
      'Copa': 'Removible',
      'Origen': 'Hecho en Armenia, Colombia',
      'Cuidado': 'Lavado a mano'
    },
    colors: [{ name: 'Negro', hex: '#0a0a0a' }, { name: 'Blanco', hex: '#ffffff' }, { name: 'Gris', hex: '#6e6e6e' }],
    sizes: ['XS', 'S', 'M', 'L'],
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g fill="#ffffff"><path d="M55 60 Q 70 45 100 45 Q 130 45 145 60 L 155 90 L 152 140 Q 130 152 100 152 Q 70 152 48 140 L 45 90 Z"/></g><path d="M70 50 L 80 70" stroke="#0a0a0a" stroke-width="3" fill="none"/><path d="M130 50 L 120 70" stroke="#0a0a0a" stroke-width="3" fill="none"/><path d="M100 45 L 100 152" stroke="#0a0a0a" stroke-width="1.5" opacity="0.4"/><ellipse cx="100" cy="90" rx="22" ry="14" fill="none" stroke="#0a0a0a" stroke-width="1.5" opacity="0.5"/></svg>`,
    related: ['crotop', 'licra', 'pantaloneta', 'visera']
  },

  'crotop': {
    id: 'crotop',
    name: 'Crotop',
    category: 'Ropa',
    tag: 'Crotop / Fitness · CrossFit',
    lines: ['dama'],
    disciplines: ['fitness', 'crossfit', 'running'],
    priceTBD: false,
    price: '45.000',
    bgNum: '07',
    badge: 'Crotop', badgeStyle: 'dark',
    short: 'Crotop deportivo de cintura alta. Diseño favorecedor con tela técnica y soporte ligero.',
    description: 'Crotop diseñado para combinar dentro y fuera del gimnasio. Tela suave touch, soporte de bajo a medio impacto y un corte favorecedor que se ve tan bien como funciona. Versátil para yoga, gym y entrenamiento funcional.',
    features: [
      'Soporte bajo-medio impacto',
      'Tela suave touch',
      'Largo crop (cintura alta)',
      'Sin costuras irritantes',
      'Versátil para gym, yoga y calle'
    ],
    specs: {
      'Material': 'Poliéster + Elastano',
      'Soporte': 'Bajo-medio impacto',
      'Largo': 'Crop',
      'Origen': 'Hecho en Armenia, Colombia',
      'Cuidado': 'Lavado a mano'
    },
    colors: [{ name: 'Negro', hex: '#0a0a0a' }, { name: 'Gris', hex: '#b8b8b8' }],
    sizes: ['XS', 'S', 'M', 'L'],
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g fill="#b8b8b8"><path d="M65 55 Q 75 45 100 45 Q 125 45 135 55 L 140 85 L 138 130 Q 120 138 100 138 Q 80 138 62 130 L 60 85 Z"/></g><path d="M75 50 L 82 65" stroke="#0a0a0a" stroke-width="2" fill="none"/><path d="M125 50 L 118 65" stroke="#0a0a0a" stroke-width="2" fill="none"/><g fill="#0a0a0a" opacity="0.3"><circle cx="80" cy="90" r="1.5"/><circle cx="90" cy="90" r="1.5"/><circle cx="100" cy="90" r="1.5"/><circle cx="110" cy="90" r="1.5"/><circle cx="120" cy="90" r="1.5"/><circle cx="80" cy="100" r="1.5"/><circle cx="100" cy="100" r="1.5"/><circle cx="120" cy="100" r="1.5"/><circle cx="80" cy="110" r="1.5"/><circle cx="100" cy="110" r="1.5"/><circle cx="120" cy="110" r="1.5"/></g></svg>`,
    related: ['top', 'licra', 'camiseta', 'visera']
  },

  /* ============ ACCESORIOS ============ */

  'visera': {
    id: 'visera',
    name: 'Visera',
    category: 'Accesorios',
    tag: 'Visera / Running · Cycling',
    lines: ['accesorios'],
    disciplines: ['running', 'cycling', 'fitness'],
    priceTBD: false,
    price: '40.000',
    bgNum: '08',
    badge: 'Visera', badgeStyle: 'light',
    short: 'Visera ultraligera con banda absorbente. Protección solar para entrenar bajo el sol colombiano.',
    description: 'Visera técnica de fabricación nacional. Banda interna absorbente que mantiene el sudor lejos de los ojos, visera curvada aerodinámica y ajuste con velcro de alta resistencia. Liviana, fresca y reflectiva en el logo.',
    features: [
      'Banda interna absorbente',
      'Ajuste con velcro reforzado',
      'Visera curvada aerodinámica',
      'Ultraligera',
      'Lavable a máquina'
    ],
    specs: {
      'Material': 'Poliéster técnico',
      'Ajuste': 'Velcro reforzado',
      'Origen': 'Hecho en Armenia, Colombia'
    },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Negro', hex: '#0a0a0a' }, { name: 'Gris', hex: '#6e6e6e' }],
    sizes: ['Única'],
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g fill="#ffffff"><path d="M30 105 Q 100 70 170 105 L 168 120 Q 100 100 32 120 Z"/></g><path d="M55 100 Q 100 80 145 100 L 145 105 Q 100 88 55 105 Z" fill="#0a0a0a" opacity="0.4"/><rect x="78" y="95" width="44" height="6" fill="#6e6e6e"/><text x="100" y="100" fill="#ffffff" font-family="Arial Black" font-size="6" text-anchor="middle">DS</text></svg>`,
    related: ['canguro', 'cinturon-running', 'botella-silicona', 'pantaloneta']
  },

  'canguro': {
    id: 'canguro',
    name: 'Canguro',
    category: 'Accesorios',
    tag: 'Canguro / Running · Cycling',
    lines: ['accesorios'],
    disciplines: ['running', 'cycling', 'fitness'],
    priceTBD: true,
    bgNum: '09',
    badge: 'Canguro', badgeStyle: 'dark',
    short: 'Canguro técnico con compartimientos para llaves, celular y geles. Ajuste anti-rebote.',
    description: 'Canguro hecho en Armenia para cargar lo esencial sin que se mueva. Banda elástica que se ajusta a la cadera, dos compartimientos con cremallera y tela impermeable. Cabe celular grande, llaves, tarjetas y un par de geles.',
    features: [
      'Dos compartimientos con cremallera',
      'Banda elástica anti-rebote',
      'Tela impermeable',
      'Cabe celular grande',
      'Ajuste ergonómico'
    ],
    specs: {
      'Material': 'Nylon impermeable + Elastano',
      'Compartimientos': '2 con cremallera',
      'Origen': 'Hecho en Armenia, Colombia'
    },
    colors: [{ name: 'Negro', hex: '#0a0a0a' }],
    sizes: ['Única'],
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g fill="#1f1f1f"><rect x="20" y="80" width="160" height="50" rx="14"/></g><rect x="30" y="92" width="60" height="26" rx="4" fill="#0a0a0a" stroke="#6e6e6e" stroke-width="0.5"/><rect x="110" y="92" width="60" height="26" rx="4" fill="#0a0a0a" stroke="#6e6e6e" stroke-width="0.5"/><line x1="35" y1="96" x2="85" y2="96" stroke="#6e6e6e" stroke-width="1" opacity="0.6"/><line x1="115" y1="96" x2="165" y2="96" stroke="#6e6e6e" stroke-width="1" opacity="0.6"/><line x1="0" y1="105" x2="20" y2="105" stroke="#1f1f1f" stroke-width="4"/><line x1="180" y1="105" x2="200" y2="105" stroke="#1f1f1f" stroke-width="4"/></svg>`,
    related: ['cinturon-running', 'botella-silicona', 'visera', 'pantaloneta']
  },

  'cinturon-running': {
    id: 'cinturon-running',
    name: 'Cinturón de running',
    category: 'Accesorios',
    tag: 'Cinturón / Running · Trail',
    lines: ['accesorios'],
    disciplines: ['running', 'fitness'],
    priceTBD: true,
    bgNum: '10',
    badge: 'Belt', badgeStyle: 'light',
    short: 'Cinturón de running con porta-geles, porta-celular y soporte para dorsal. Para tiradas largas.',
    description: 'Cinturón pensado para distancias largas: media maratón, maratón, trail. Múltiples porta-geles, bolsillo para celular, soporte para número de carrera. Ajuste con velcro y banda anti-rebote.',
    features: [
      'Porta-geles múltiples',
      'Bolsillo para celular',
      'Soporte para dorsal',
      'Banda anti-rebote',
      'Reflectivos para baja luz'
    ],
    specs: {
      'Material': 'Nylon ripstop + Elastano',
      'Origen': 'Hecho en Armenia, Colombia'
    },
    colors: [{ name: 'Negro', hex: '#0a0a0a' }],
    sizes: ['Única'],
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g fill="#1f1f1f"><rect x="10" y="92" width="180" height="22" rx="3"/></g><rect x="80" y="92" width="40" height="22" fill="#0a0a0a" stroke="#6e6e6e" stroke-width="0.5"/><rect x="40" y="98" width="10" height="10" fill="#6e6e6e" opacity="0.6"/><rect x="55" y="98" width="10" height="10" fill="#6e6e6e" opacity="0.6"/><rect x="135" y="98" width="10" height="10" fill="#6e6e6e" opacity="0.6"/><rect x="150" y="98" width="10" height="10" fill="#6e6e6e" opacity="0.6"/><rect x="84" y="100" width="32" height="6" rx="1" fill="#6e6e6e" opacity="0.5"/></svg>`,
    related: ['canguro', 'botella-silicona', 'visera', 'pantaloneta']
  },

  'botella-silicona': {
    id: 'botella-silicona',
    name: 'Botella en silicona',
    category: 'Accesorios',
    tag: 'Botella / Running · Cycling · Gym',
    lines: ['accesorios'],
    disciplines: ['running', 'cycling', 'fitness', 'crossfit'],
    priceTBD: true,
    bgNum: '11',
    badge: 'Silicona', badgeStyle: 'dark',
    short: 'Botella plegable en silicona libre de BPA. Se enrolla cuando está vacía. Para llevar a todas partes.',
    description: 'Botella en silicona alimentaria sin BPA. Se aplasta y enrolla cuando está vacía para que ocupe casi nada en la mochila. Boquilla anti-derrame, tapa con clip y resistente a temperaturas extremas.',
    features: [
      'Silicona alimentaria libre de BPA',
      'Plegable cuando está vacía',
      'Boquilla anti-derrame',
      'Tapa con clip para mochila',
      'Resistente a temperaturas'
    ],
    specs: {
      'Material': 'Silicona alimentaria',
      'Capacidad': '500 ml',
      'Origen': 'Hecho en Armenia, Colombia'
    },
    colors: [{ name: 'Negro', hex: '#0a0a0a' }, { name: 'Blanco', hex: '#ebebeb' }],
    sizes: ['500 ml'],
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g fill="#ffffff"><rect x="78" y="22" width="44" height="14" rx="3"/><path d="M70 40 L 130 40 L 138 70 L 138 175 Q 138 182 130 182 L 70 182 Q 62 182 62 175 L 62 70 Z"/></g><rect x="85" y="14" width="30" height="10" rx="2" fill="#0a0a0a"/><line x1="62" y1="80" x2="138" y2="80" stroke="#0a0a0a" stroke-width="0.5" opacity="0.3" stroke-dasharray="3,3"/><line x1="62" y1="110" x2="138" y2="110" stroke="#0a0a0a" stroke-width="0.5" opacity="0.3" stroke-dasharray="3,3"/><line x1="62" y1="140" x2="138" y2="140" stroke="#0a0a0a" stroke-width="0.5" opacity="0.3" stroke-dasharray="3,3"/><text x="100" y="160" font-family="Helvetica" font-size="9" text-anchor="middle" fill="#0a0a0a" opacity="0.5" letter-spacing="1">500ml</text></svg>`,
    related: ['cinturon-running', 'canguro', 'visera', 'pantaloneta']
  }
};

/* ============================================================
   RENDER — tarjeta de producto en el catálogo
   ============================================================ */

/**
 * Devuelve el HTML de una tarjeta de producto. Incluye <img> que intenta
 * cargar assets/products/<id>.jpg sobre el SVG; si la imagen no existe,
 * onerror la oculta y queda el SVG visible.
 * @param {Object} p item de PRODUCTS
 * @returns {string}
 */
function renderProductCard(p) {
  const badgeClass = p.badgeStyle === 'dark' ? 'dark' : '';
  const dataLines = (p.lines || []).join(' ');
  const dataDisc = (p.disciplines || []).join(' ');
  const priceHTML = p.priceTBD
    ? `<div class="product-price product-price--tbd">Por definir</div>`
    : `<div class="product-price"><span class="currency">$</span>${p.price}</div>`;
  const photoSrc = `assets/products/${p.id}.jpg`;

  return `
    <a class="product"
       data-lines="${dataLines}"
       data-disciplines="${dataDisc}"
       href="producto.html?p=${p.id}"
       aria-label="Ver detalles de ${p.name}">
      <span class="product-badge ${badgeClass}">${p.badge}</span>
      <div class="product-image">
        <span class="product-bg-num" aria-hidden="true">${p.bgNum}</span>
        <div aria-hidden="true">${p.svg}</div>
        <img src="${photoSrc}" alt="${p.name} — Display Sport"
             class="product-photo" loading="lazy"
             onload="this.classList.add('is-loaded');"
             onerror="this.remove();" />
      </div>
      <div class="product-tag">${p.tag}</div>
      <div class="product-name">${p.name}</div>
      <div class="product-bottom">
        ${priceHTML}
        <span class="product-cta" aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17L17 7M7 7h10v10"/></svg>
        </span>
      </div>
    </a>
  `;
}

/**
 * Renderiza el catálogo completo en un contenedor.
 * @param {string} containerId id del div destino
 */
function renderCatalog(containerId) {
  const grid = document.getElementById(containerId);
  if (!grid) return;
  grid.innerHTML = Object.values(PRODUCTS).map(renderProductCard).join('');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => renderCatalog('catalog-grid'));
} else {
  renderCatalog('catalog-grid');
}

/* ============================================================
   INSTAGRAM FEED — placeholders con SVG decorativo.
   Para usar fotos reales:
     1) Guarda imágenes en assets/instagram/post-1.jpg, etc.
     2) Cambia 'img' de cada entrada a la ruta nueva.
   La imagen real reemplaza el SVG al cargar.
   ============================================================ */

const IG_POSTS = [
  {
    img: 'assets/logo.jpg',
    caption: 'Producción local. Cada prenda cortada y cosida en Armenia, Quindío.',
    likes: 0,
    url: 'https://www.instagram.com/Display_sportwear',
    svg: `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs><linearGradient id="ig1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2a2a2a"/><stop offset="1" stop-color="#0a0a0a"/></linearGradient></defs>
      <rect width="400" height="400" fill="url(#ig1)"/>
      <text x="200" y="220" text-anchor="middle" fill="#ffffff" font-family="Bebas Neue, sans-serif" font-size="56" letter-spacing="4">DISPLAY</text>
      <text x="200" y="260" text-anchor="middle" fill="#ffffff" font-family="Bebas Neue, sans-serif" font-size="56" letter-spacing="4">SPORT</text>
      <text x="200" y="370" text-anchor="middle" fill="#b8b8b8" font-family="Space Mono, monospace" font-size="10" letter-spacing="3">ARMENIA · QUINDÍO</text>
    </svg>`
  },
  {
    img: 'assets/logo.jpg',
    caption: 'Pantalonetas, licras y tops. Hombre, dama y accesorios.',
    likes: 0,
    url: 'https://www.instagram.com/Display_sportwear',
    svg: `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs><radialGradient id="ig2"><stop offset="0" stop-color="#2a2a2a"/><stop offset="1" stop-color="#0a0a0a"/></radialGradient></defs>
      <rect width="400" height="400" fill="url(#ig2)"/>
      <g transform="translate(200,200) scale(1.8)">
        <g fill="#ffffff" transform="translate(-50,-60)">
          <path d="M50 55 L 150 55 L 155 75 L 158 165 L 108 165 L 105 100 L 95 100 L 92 165 L 42 165 L 45 75 Z"/>
        </g>
        <rect x="-52" y="-5" width="104" height="10" fill="#0a0a0a"/>
        <path d="M0 5 L 0 105" stroke="#0a0a0a" stroke-width="2"/>
      </g>
      <text x="200" y="370" text-anchor="middle" fill="#ffffff" font-family="Bebas Neue, sans-serif" font-size="22" letter-spacing="6">CATÁLOGO COMPLETO</text>
    </svg>`
  },
  {
    img: 'assets/logo.jpg',
    caption: 'Running, fitness, cycling y CrossFit. Ropa pensada para entrenar de verdad.',
    likes: 0,
    url: 'https://www.instagram.com/Display_sportwear',
    svg: `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs><linearGradient id="ig3" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1f1f1f"/><stop offset="1" stop-color="#0a0a0a"/></linearGradient></defs>
      <rect width="400" height="400" fill="url(#ig3)"/>
      <text x="200" y="120" text-anchor="middle" fill="#ffffff" font-family="Bebas Neue, sans-serif" font-size="42" letter-spacing="3">RUNNING</text>
      <text x="200" y="175" text-anchor="middle" fill="#ffffff" font-family="Bebas Neue, sans-serif" font-size="42" letter-spacing="3">FITNESS</text>
      <text x="200" y="230" text-anchor="middle" fill="#ffffff" font-family="Bebas Neue, sans-serif" font-size="42" letter-spacing="3">CYCLING</text>
      <text x="200" y="285" text-anchor="middle" fill="#ffffff" font-family="Bebas Neue, sans-serif" font-size="42" letter-spacing="3">CROSSFIT</text>
    </svg>`
  },
  {
    img: 'assets/logo.jpg',
    caption: 'Accesorios técnicos. Viseras, canguros, cinturones de running y botellas.',
    likes: 0,
    url: 'https://www.instagram.com/Display_sportwear',
    svg: `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs><linearGradient id="ig4" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#252525"/><stop offset="1" stop-color="#0a0a0a"/></linearGradient></defs>
      <rect width="400" height="400" fill="url(#ig4)"/>
      <g transform="translate(200,200) scale(1.6)">
        <g fill="#ffffff" transform="translate(-100,-15)">
          <path d="M30 105 Q 100 70 170 105 L 168 120 Q 100 100 32 120 Z"/>
        </g>
      </g>
      <text x="200" y="370" text-anchor="middle" fill="#ffffff" font-family="Bebas Neue, sans-serif" font-size="22" letter-spacing="6">ACCESORIOS</text>
    </svg>`
  },
  {
    img: 'assets/logo.jpg',
    caption: 'Pedidos a todo Colombia. WhatsApp +57 318 589 9233.',
    likes: 0,
    url: 'https://www.instagram.com/Display_sportwear',
    svg: `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs><linearGradient id="ig5" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2a2a2a"/><stop offset="1" stop-color="#0a0a0a"/></linearGradient></defs>
      <rect width="400" height="400" fill="url(#ig5)"/>
      <text x="200" y="160" text-anchor="middle" fill="#ffffff" font-family="Bebas Neue, sans-serif" font-size="44" letter-spacing="3">ENVÍOS</text>
      <text x="200" y="210" text-anchor="middle" fill="#ffffff" font-family="Bebas Neue, sans-serif" font-size="44" letter-spacing="3">A TODO</text>
      <text x="200" y="260" text-anchor="middle" fill="#ffffff" font-family="Bebas Neue, sans-serif" font-size="44" letter-spacing="3">COLOMBIA</text>
      <text x="200" y="320" text-anchor="middle" fill="#b8b8b8" font-family="Space Mono, monospace" font-size="11" letter-spacing="3">24–48 HORAS</text>
    </svg>`
  },
  {
    img: 'assets/logo.jpg',
    caption: 'Hecho en Armenia, Quindío. Producción local, costura por costura.',
    likes: 0,
    url: 'https://www.instagram.com/Display_sportwear',
    svg: `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs><radialGradient id="ig6"><stop offset="0" stop-color="#2a2a2a"/><stop offset="1" stop-color="#0a0a0a"/></radialGradient></defs>
      <rect width="400" height="400" fill="url(#ig6)"/>
      <text x="200" y="180" text-anchor="middle" fill="#ffffff" font-family="Bebas Neue, sans-serif" font-size="80" letter-spacing="2">MADE</text>
      <text x="200" y="240" text-anchor="middle" fill="#ffffff" font-family="Bebas Neue, sans-serif" font-size="80" letter-spacing="2">IN</text>
      <text x="200" y="300" text-anchor="middle" fill="#ffffff" font-family="Bebas Neue, sans-serif" font-size="46" letter-spacing="3">ARMENIA · QUINDÍO</text>
    </svg>`
  }
];

/**
 * Renderiza el feed de Instagram.
 * @param {string} containerId
 */
function renderInstagramFeed(containerId) {
  const grid = document.getElementById(containerId);
  if (!grid) return;
  grid.innerHTML = IG_POSTS.map(post => `
    <a class="ig-post" href="${post.url}" target="_blank" rel="noopener" aria-label="Ver en Instagram: ${post.caption}">
      <div class="ig-svg-bg">${post.svg}</div>
      <img src="${post.img}" alt="" class="ig-img" loading="lazy"
           onload="this.style.opacity='1';"
           onerror="this.remove();" />
      <div class="ig-overlay always-visible">
        <div class="ig-overlay-top">
          <span class="ig-handle-mini">@Display_sportwear</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
        </div>
        <div class="ig-overlay-bottom">
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
