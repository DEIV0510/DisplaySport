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
    name: 'Pantaloneta Carioca',
    reference: 'Carioca',
    category: 'Ropa',
    tag: 'Pantaloneta / Running · Fitness',
    lines: ['hombre'],
    disciplines: ['running', 'fitness', 'crossfit'],
    priceTBD: false,
    price: '70.000',
    bgNum: '01',
    badge: 'Carioca', badgeStyle: 'light',
    photo: 'assets/products/pantaloneta-detalle.png',
    photos: [
      'assets/products/pantaloneta-detalle.png',
      'assets/products/pantaloneta-colores.jpg',
      'assets/products/pantaloneta.png',
      'assets/products/pantaloneta-2.png'
    ],
    short: 'Pantaloneta Carioca con tela liviana, calzón interno, resorte confortable y dos bolsillos internos para geles.',
    description: 'Pantaloneta referencia Carioca, diseñada y producida en Colombia. Tela liviana que apenas se siente, calzón interno integrado para mayor comodidad y dos bolsillos internos pequeños perfectos para llevar geles energéticos en tiradas largas. Resorte confortable que no aprieta ni se desliza.',
    features: [
      'Tela liviana',
      'Calzón interno integrado',
      'Dos bolsillos internos para geles',
      'Resorte confortable',
      'Referencia: Carioca'
    ],
    specs: {
      'Referencia': 'Carioca',
      'Material': 'Tela liviana técnica',
      'Calzón interno': 'Sí',
      'Bolsillos': 'Dos internos para geles',
      'Origen': 'Hecho en Colombia',
      'Cuidado': 'Lavado en agua fría, no usar suavizante'
    },
    colors: [
      { name: 'Negro', hex: '#0a0a0a' },
      { name: 'Azul marino', hex: '#1a2742' },
      { name: 'Azul royal', hex: '#4a7eb0' },
      { name: 'Celeste', hex: '#93c4e3' },
      { name: 'Turquesa', hex: '#5cb8b8' },
      { name: 'Beige', hex: '#c9b88a' },
      { name: 'Blanco', hex: '#f0f0f0' }
    ],
    sizes: ['S', 'M', 'L'],
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g fill="#ffffff"><path d="M50 55 L 150 55 L 155 75 L 158 165 L 108 165 L 105 100 L 95 100 L 92 165 L 42 165 L 45 75 Z"/></g><rect x="48" y="55" width="104" height="10" fill="#0a0a0a"/><path d="M100 65 L 100 165" stroke="#0a0a0a" stroke-width="2"/><path d="M55 100 L 90 105" stroke="#6e6e6e" stroke-width="1.5" fill="none" opacity="0.6"/><path d="M145 100 L 110 105" stroke="#6e6e6e" stroke-width="1.5" fill="none" opacity="0.6"/><rect x="65" y="80" width="14" height="3" fill="#0a0a0a" opacity="0.5"/></svg>`,
    related: ['pantaloneta-boston', 'pantaloneta-elite', 'termo-silicona']
  },

  'pantaloneta-boston': {
    id: 'pantaloneta-boston',
    name: 'Pantaloneta Boston',
    reference: 'Boston',
    category: 'Ropa',
    tag: 'Pantaloneta / Running · Fitness',
    lines: ['hombre'],
    disciplines: ['running', 'fitness', 'crossfit'],
    priceTBD: true,
    bgNum: '02',
    badge: 'Boston', badgeStyle: 'dark',
    short: 'Pantaloneta Boston: corte clásico, tela técnica liviana y resorte cómodo para entrenar sin pensar.',
    description: 'Pantaloneta referencia Boston, diseñada y producida en Colombia. Tela técnica liviana de secado rápido, costuras planas anti-rozadura y un fit anatómico que se mueve con el cuerpo. Ideal para running, fitness y entrenamientos diarios.',
    features: [
      'Tela técnica liviana',
      'Secado rápido',
      'Costuras planas anti-rozadura',
      'Resorte cómodo',
      'Referencia: Boston'
    ],
    specs: {
      'Referencia': 'Boston',
      'Material': 'Tela técnica liviana',
      'Origen': 'Hecho en Colombia',
      'Cuidado': 'Lavado en agua fría, no usar suavizante'
    },
    colors: [
      { name: 'Negro', hex: '#0a0a0a' },
      { name: 'Azul marino', hex: '#1a2742' },
      { name: 'Gris', hex: '#6e6e6e' }
    ],
    sizes: ['S', 'M', 'L'],
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g fill="#ffffff"><path d="M52 55 L 148 55 L 152 72 L 156 158 L 110 158 L 107 95 L 93 95 L 90 158 L 44 158 L 48 72 Z"/></g><rect x="50" y="55" width="100" height="9" fill="#0a0a0a"/><path d="M100 64 L 100 158" stroke="#0a0a0a" stroke-width="2"/><path d="M60 80 L 90 80 M 110 80 L 140 80" stroke="#6e6e6e" stroke-width="1" opacity="0.5"/></svg>`,
    related: ['pantaloneta', 'pantaloneta-elite', 'termo-silicona']
  },

  'pantaloneta-elite': {
    id: 'pantaloneta-elite',
    name: 'Pantaloneta Elite',
    reference: 'Elite',
    category: 'Ropa',
    tag: 'Pantaloneta / Running · Fitness',
    lines: ['hombre'],
    disciplines: ['running', 'fitness', 'crossfit'],
    priceTBD: true,
    bgNum: '03',
    badge: 'Elite', badgeStyle: 'light',
    short: 'Pantaloneta Elite con licra interna integrada. Compresión muscular y libertad de movimiento en una sola prenda.',
    description: 'Pantaloneta referencia Elite, diseñada y producida en Colombia. Trae licra interna de compresión que ofrece soporte muscular, evita rozaduras y se queda en su lugar. La capa exterior es de tela técnica liviana con secado rápido. Pensada para runners y atletas que entrenan en serio.',
    features: [
      'Licra interna integrada',
      'Compresión muscular',
      'Tela exterior liviana y técnica',
      'Secado rápido',
      'Sin rozaduras',
      'Referencia: Elite'
    ],
    specs: {
      'Referencia': 'Elite',
      'Material exterior': 'Tela técnica liviana',
      'Licra interna': 'Sí, de compresión',
      'Origen': 'Hecho en Colombia',
      'Cuidado': 'Lavado en agua fría, no usar suavizante'
    },
    colors: [
      { name: 'Negro', hex: '#0a0a0a' },
      { name: 'Azul marino', hex: '#1a2742' },
      { name: 'Gris oscuro', hex: '#2a2a2a' }
    ],
    sizes: ['S', 'M', 'L'],
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g fill="#1f1f1f"><path d="M48 55 L 152 55 L 158 78 L 162 170 L 108 170 L 105 105 L 95 105 L 92 170 L 38 170 L 42 78 Z"/></g><g fill="#0a0a0a" opacity="0.7"><path d="M58 95 L 142 95 L 144 120 L 100 130 L 56 120 Z"/></g><rect x="46" y="55" width="108" height="11" fill="#0a0a0a"/><path d="M100 66 L 100 170" stroke="#ffffff" stroke-width="2"/><rect x="58" y="120" width="22" height="14" fill="#0a0a0a" opacity="0.5" stroke="#ffffff" stroke-width="0.5"/><rect x="120" y="120" width="22" height="14" fill="#0a0a0a" opacity="0.5" stroke="#ffffff" stroke-width="0.5"/></svg>`,
    related: ['pantaloneta', 'pantaloneta-boston', 'termo-silicona']
  },

  'termo-silicona': {
    id: 'termo-silicona',
    name: 'Termo 250 ml',
    reference: 'Silicona con manigueta',
    category: 'Accesorios',
    tag: 'Termo / Running · Cycling · Gym',
    lines: ['accesorios'],
    disciplines: ['running', 'fitness', 'cycling', 'crossfit'],
    priceTBD: true,
    bgNum: '04',
    badge: 'Termo', badgeStyle: 'dark',
    short: 'Termo de 250 ml en silicona con manigueta. Liviano, plegable y fácil de llevar en cualquier salida.',
    description: 'Termo en silicona alimentaria libre de BPA con capacidad de 250 ml. Trae manigueta para llevarlo cómodamente o engancharlo a la mochila/cinturón. Liviano, flexible, plegable cuando está vacío y resistente a temperaturas. Perfecto para tiradas, gym o cualquier entrenamiento donde la hidratación a la mano marca la diferencia.',
    features: [
      'Silicona alimentaria libre de BPA',
      'Capacidad: 250 ml',
      'Manigueta para llevar fácil',
      'Plegable cuando está vacío',
      'Resistente a temperaturas',
      'Tapa con cierre seguro'
    ],
    specs: {
      'Material': 'Silicona alimentaria',
      'Capacidad': '250 ml',
      'Manigueta': 'Sí',
      'Origen': 'Hecho en Colombia'
    },
    colors: [
      { name: 'Negro', hex: '#0a0a0a' },
      { name: 'Blanco', hex: '#ebebeb' }
    ],
    sizes: ['250 ml'],
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g fill="#ffffff"><rect x="78" y="22" width="44" height="14" rx="3"/><path d="M70 40 L 130 40 L 138 70 L 138 175 Q 138 182 130 182 L 70 182 Q 62 182 62 175 L 62 70 Z"/></g><rect x="85" y="14" width="30" height="10" rx="2" fill="#0a0a0a"/><path d="M138 80 Q 165 85 165 110 Q 165 135 138 140" stroke="#ffffff" stroke-width="6" fill="none" stroke-linecap="round"/><line x1="62" y1="80" x2="138" y2="80" stroke="#0a0a0a" stroke-width="0.5" opacity="0.3" stroke-dasharray="3,3"/><line x1="62" y1="110" x2="138" y2="110" stroke="#0a0a0a" stroke-width="0.5" opacity="0.3" stroke-dasharray="3,3"/><line x1="62" y1="140" x2="138" y2="140" stroke="#0a0a0a" stroke-width="0.5" opacity="0.3" stroke-dasharray="3,3"/><text x="100" y="165" font-family="Helvetica" font-size="9" text-anchor="middle" fill="#0a0a0a" opacity="0.6" letter-spacing="1">250ml</text></svg>`,
    related: ['pantaloneta', 'pantaloneta-boston', 'pantaloneta-elite']
  }
};

/* ============================================================
   RENDER — tarjeta de producto en el catálogo
   ============================================================ */

/**
 * Devuelve el HTML de una tarjeta de producto.
 *
 * Sistema de fotos: solo emite el <img> si el producto tiene la
 * propiedad `photo: 'assets/products/<archivo>.jpg'` definida. Si no
 * está, queda solo el SVG decorativo (sin intentar cargar nada, sin
 * generar 404 en consola).
 *
 * Para activar foto real en un producto: añade `photo: 'assets/products/pantaloneta.jpg'`
 * al objeto correspondiente en PRODUCTS y guarda la imagen con ese nombre.
 *
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
  const photoHTML = p.photo
    ? `<img src="${p.photo}" alt="${p.name} — Display Sport"
             class="product-photo" loading="lazy"
             onload="this.classList.add('is-loaded');"
             onerror="this.remove();" />`
    : '';

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
        ${photoHTML}
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
    embedUrl: 'https://www.instagram.com/p/DYXVf__ggqm/',
    url: 'https://www.instagram.com/p/DYXVf__ggqm/',
    caption: 'Producción local. Cada prenda cortada y cosida en Colombia. 🏭✨',
    likes: 142,
    date: 'hace 2 días',
    svg: igPlaceholder('PRODUCCIÓN LOCAL', 'ARMENIA · QUINDÍO', 'linearGradient', 'ig1')
  },
  {
    embedUrl: 'https://www.instagram.com/p/DXR5YAfEZ0b/',
    url: 'https://www.instagram.com/p/DXR5YAfEZ0b/',
    caption: 'Pantalonetas, licras y tops listos. Hombre, dama y accesorios — todo hecho a mano. #DisplaySport',
    likes: 218,
    date: 'hace 5 días',
    svg: igPlaceholder('CATÁLOGO', 'HOMBRE · DAMA · ACCESORIOS', 'radialGradient', 'ig2')
  },
  {
    embedUrl: 'https://www.instagram.com/p/DV997hajcqg/',
    url: 'https://www.instagram.com/p/DV997hajcqg/?img_index=1',
    caption: 'Running, fitness, cycling y CrossFit 🏃‍♂️🚴‍♀️ Ropa pensada para entrenar de verdad.',
    likes: 305,
    date: 'hace 1 semana',
    svg: igPlaceholder('DISCIPLINAS', 'RUN · FIT · CYCLE · CROSSFIT', 'linearGradient', 'ig3')
  }
  // Para añadir más posts: copia un objeto de arriba y pega su URL en embedUrl.
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

    // Modo 2: tarjeta estilo "embed de Instagram" (look idéntico al
    // embed oficial, con datos de la marca). Se reemplaza con embed
    // oficial cuando el cliente provea embedUrl.
    const likesNum = post.likes ? Number(post.likes).toLocaleString('es-CO') : '—';
    const mediaHTML = post.img
      ? `<img src="${post.img}" alt="${post.caption}" class="igcard-media-img" loading="lazy"
             onload="this.classList.add('is-loaded');"
             onerror="this.remove();" />`
      : '';

    return `<article class="ig-post ig-post--card">
      <header class="igcard-header">
        <div class="igcard-avatar" aria-hidden="true"></div>
        <div class="igcard-id">
          <span class="igcard-name">Display Sport</span>
          <span class="igcard-handle">@${handle} · Seguir</span>
        </div>
        <a class="igcard-logo" href="${post.url}" target="_blank" rel="noopener" aria-label="Abrir en Instagram">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
        </a>
      </header>

      <p class="igcard-caption">${post.caption}</p>

      <div class="igcard-media">
        <div class="igcard-svg-bg" aria-hidden="true">${post.svg}</div>
        ${mediaHTML}
      </div>

      <div class="igcard-actions" aria-hidden="true">
        <button type="button" class="igcard-action" aria-label="Me gusta">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        </button>
        <button type="button" class="igcard-action" aria-label="Comentar">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
        </button>
        <button type="button" class="igcard-action" aria-label="Compartir">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
        </button>
        <button type="button" class="igcard-action igcard-action--right" aria-label="Guardar">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
        </button>
      </div>

      <div class="igcard-meta">
        <span class="igcard-likes"><strong>${likesNum}</strong> me gusta</span>
        <span class="igcard-date">${post.date || ''}</span>
      </div>

      <a class="igcard-cta" href="${post.url}" target="_blank" rel="noopener">
        Leer más en Instagram →
      </a>
    </article>`;
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
