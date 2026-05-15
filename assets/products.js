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
   INSTAGRAM FEED — sistema híbrido
   ------------------------------------------------------------
   Cada entrada de IG_POSTS soporta tres modos, en este orden
   de preferencia:

   1) embedUrl (opcional)
      URL completa de un post de Instagram, p.ej.
        'https://www.instagram.com/p/CXXXXXXXX/'
      Si está definida, el sitio carga el embed OFICIAL de
      Instagram (blockquote + embed.js) y muestra el post real
      con su foto/video, likes y comentarios actualizados en
      tiempo real desde Instagram.

   2) img (opcional)
      Ruta a una foto local en assets/instagram/post-N.jpg.
      Si la imagen carga, se muestra como card minimalista
      (estilo coherente con el resto del sitio). Si falla, se
      muestra el SVG decorativo.

   3) svg + url
      Fallback decorativo. La card linkea al perfil principal
      (window.DSR_CONFIG.contact.instagramUrl) con caption real.

   ----------------------------------------------------------
   PARA ACTIVAR POSTS REALES (cliente):
     A) Vas al post en Instagram, "Compartir > Copiar enlace"
        y pegas la URL en `embedUrl` de la entrada que quieras.
     B) Alternativa: descarga la foto del post (botón
        "Descargar" o screenshot), guárdala como
        assets/instagram/post-1.jpg (o post-2, post-3...)
        y rellena `img: 'assets/instagram/post-1.jpg'`.
   ============================================================ */

const IG_POSTS = [
  {
    // embedUrl: 'https://www.instagram.com/p/PEGAR_AQUI/',  // ← activar para embed real
    img: 'assets/instagram/post-1.jpg',
    caption: 'Producción local. Cada prenda cortada y cosida en Armenia, Quindío.',
    likes: null,
    url: 'https://www.instagram.com/display_sport/',
    svg: igPlaceholder('PRODUCCIÓN LOCAL', 'ARMENIA · QUINDÍO', 'linearGradient', 'ig1')
  },
  {
    // embedUrl: 'https://www.instagram.com/p/PEGAR_AQUI/',
    img: 'assets/instagram/post-2.jpg',
    caption: 'Pantalonetas, licras y tops. Hombre, dama y accesorios.',
    likes: null,
    url: 'https://www.instagram.com/display_sport/',
    svg: igPlaceholder('CATÁLOGO', 'HOMBRE · DAMA · ACCESORIOS', 'radialGradient', 'ig2')
  },
  {
    // embedUrl: 'https://www.instagram.com/p/PEGAR_AQUI/',
    img: 'assets/instagram/post-3.jpg',
    caption: 'Running, fitness, cycling y CrossFit. Ropa pensada para entrenar de verdad.',
    likes: null,
    url: 'https://www.instagram.com/display_sport/',
    svg: igPlaceholder('DISCIPLINAS', 'RUN · FIT · CYCLE · CROSSFIT', 'linearGradient', 'ig3')
  },
  {
    // embedUrl: 'https://www.instagram.com/p/PEGAR_AQUI/',
    img: 'assets/instagram/post-4.jpg',
    caption: 'Accesorios técnicos. Viseras, canguros, cinturones y botellas.',
    likes: null,
    url: 'https://www.instagram.com/display_sport/',
    svg: igPlaceholder('ACCESORIOS', 'TÉCNICOS', 'linearGradient', 'ig4')
  },
  {
    // embedUrl: 'https://www.instagram.com/p/PEGAR_AQUI/',
    img: 'assets/instagram/post-5.jpg',
    caption: 'Envíos a todo Colombia en 24–48 h. Pedidos por WhatsApp.',
    likes: null,
    url: 'https://www.instagram.com/display_sport/',
    svg: igPlaceholder('ENVÍOS A COLOMBIA', '24 – 48 HORAS', 'linearGradient', 'ig5')
  },
  {
    // embedUrl: 'https://www.instagram.com/p/PEGAR_AQUI/',
    img: 'assets/instagram/post-6.jpg',
    caption: 'Hecho en Armenia, Quindío. Producción local, costura por costura.',
    likes: null,
    url: 'https://www.instagram.com/display_sport/',
    svg: igPlaceholder('MADE IN', 'ARMENIA · QUINDÍO', 'radialGradient', 'ig6')
  }
];

/**
 * Genera un SVG decorativo placeholder para un post de IG.
 * @param {string} bigText texto grande superior
 * @param {string} smallText texto chico inferior
 * @param {'linearGradient'|'radialGradient'} gradType tipo de fondo
 * @param {string} id id único del gradient
 * @returns {string} SVG markup
 */
function igPlaceholder(bigText, smallText, gradType, id) {
  const gradDef = gradType === 'radialGradient'
    ? `<radialGradient id="${id}"><stop offset="0" stop-color="#2a2a2a"/><stop offset="1" stop-color="#0a0a0a"/></radialGradient>`
    : `<linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2a2a2a"/><stop offset="1" stop-color="#0a0a0a"/></linearGradient>`;
  return `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs>${gradDef}</defs>
    <rect width="400" height="400" fill="url(#${id})"/>
    <text x="200" y="200" text-anchor="middle" fill="#ffffff" font-family="Bebas Neue, sans-serif" font-size="42" letter-spacing="3">${bigText}</text>
    <text x="200" y="240" text-anchor="middle" fill="#FF5E14" font-family="Space Mono, monospace" font-size="11" letter-spacing="4">${smallText}</text>
  </svg>`;
}

/**
 * Renderiza el feed de Instagram con sistema híbrido.
 * Si algún post tiene embedUrl, carga el script embed.js de Instagram.
 * @param {string} containerId
 */
function renderInstagramFeed(containerId) {
  const grid = document.getElementById(containerId);
  if (!grid) return;

  const handle = (window.DSR_CONFIG && window.DSR_CONFIG.contact.instagram) || 'display_sport';
  let hasEmbeds = false;

  grid.innerHTML = IG_POSTS.map(post => {
    // Modo 1: embed oficial
    if (post.embedUrl && post.embedUrl.startsWith('https://www.instagram.com/p/')) {
      hasEmbeds = true;
      return `<div class="ig-post ig-post--embed">
        <blockquote class="instagram-media" data-instgrm-permalink="${post.embedUrl}" data-instgrm-version="14">
          <a href="${post.embedUrl}" target="_blank" rel="noopener">Cargando post de Instagram…</a>
        </blockquote>
      </div>`;
    }

    // Modo 2 + 3: foto local con fallback al SVG
    const likesHTML = post.likes ? `
      <div class="ig-likes">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        ${Number(post.likes).toLocaleString('es-CO')}
      </div>` : '';

    return `<a class="ig-post" href="${post.url}" target="_blank" rel="noopener" aria-label="Ver en Instagram: ${post.caption}">
      <div class="ig-svg-bg">${post.svg}</div>
      <img src="${post.img}" alt="${post.caption}" class="ig-img" loading="lazy"
           onload="this.classList.add('is-loaded');"
           onerror="this.remove();" />
      <div class="ig-overlay always-visible">
        <div class="ig-overlay-top">
          <span class="ig-handle-mini">@${handle}</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
        </div>
        <div class="ig-overlay-bottom">
          ${likesHTML}
          <p class="ig-caption">${post.caption}</p>
        </div>
      </div>
    </a>`;
  }).join('');

  // Cargar el script oficial de Instagram una sola vez si hay embeds
  if (hasEmbeds && !document.querySelector('script[src*="instagram.com/embed.js"]')) {
    const s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.instagram.com/embed.js';
    document.body.appendChild(s);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => renderInstagramFeed('ig-grid'));
} else {
  renderInstagramFeed('ig-grid');
}
