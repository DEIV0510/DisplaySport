/* ============================================================
   DISPLAY SPORT — PRODUCT DETAIL PAGE
   ------------------------------------------------------------
   Lee ?p=ID de la URL, busca el producto en PRODUCTS (products.js)
   y renderiza la página de detalle. Depende de:
     - window.DSR_CONFIG (config.js)
     - window.DSR (config.js, helpers)
     - PRODUCTS (products.js)
     - renderProductCard (products.js, para los relacionados)
   ============================================================ */

(function () {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get('p');
  const product = (typeof PRODUCTS !== 'undefined') ? PRODUCTS[productId] : null;
  const container = document.getElementById('page-content');
  if (!container) return;

  // ============ 404: producto no encontrado ============
  if (!product) {
    container.innerHTML = `
      <div class="product-404">
        <h1>Producto no encontrado</h1>
        <p>El producto que buscas no existe o el enlace está roto.</p>
        <a href="index.html#catalogo" class="btn-buy-secondary">Volver al catálogo →</a>
      </div>`;
    return;
  }

  document.title = `${product.name} — Display Sport · Armenia, Colombia`;

  // Actualizar meta description con el producto
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content', `${product.name}. ${product.short} Hecho en Armenia, Quindío. Envíos a toda Colombia.`);
  }

  // Inyectar JSON-LD de Product + Breadcrumb dinámico
  const offerPrice = product.priceTBD
    ? undefined
    : Number(String(product.price).replace(/\./g, ''));
  const productLD = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    sku: product.id,
    brand: { '@type': 'Brand', name: 'Display Sport' },
    image: product.photo
      ? `https://display-sport.co/${product.photo}`
      : 'https://display-sport.co/assets/logo.svg',
    category: product.category,
    offers: offerPrice ? {
      '@type': 'Offer',
      priceCurrency: 'COP',
      price: offerPrice,
      availability: 'https://schema.org/InStock',
      url: `https://display-sport.co/producto.html?p=${product.id}`,
      seller: { '@type': 'Organization', name: 'Display Sport' }
    } : {
      '@type': 'Offer',
      availability: 'https://schema.org/PreOrder',
      url: `https://display-sport.co/producto.html?p=${product.id}`,
      seller: { '@type': 'Organization', name: 'Display Sport' }
    }
  };
  const breadcrumbLD = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://display-sport.co/' },
      { '@type': 'ListItem', position: 2, name: 'Catálogo', item: 'https://display-sport.co/#catalogo' },
      { '@type': 'ListItem', position: 3, name: product.category, item: 'https://display-sport.co/#catalogo' },
      { '@type': 'ListItem', position: 4, name: product.name, item: `https://display-sport.co/producto.html?p=${product.id}` }
    ]
  };
  const ldScript = document.createElement('script');
  ldScript.type = 'application/ld+json';
  ldScript.textContent = JSON.stringify([productLD, breadcrumbLD]);
  document.head.appendChild(ldScript);

  // Canonical
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = `https://display-sport.co/producto.html?p=${product.id}`;

  // ============ HTML builders ============
  const colorsHTML = product.colors.map((c, i) =>
    `<button class="swatch ${i === 0 ? 'active' : ''}" type="button" style="background:${c.hex}" data-name="${c.name}" aria-label="Color ${c.name}" aria-pressed="${i === 0}"></button>`
  ).join('');

  const sizesHTML = product.sizes.map((s, i) =>
    `<button class="size-btn ${i === 0 ? 'active' : ''}" type="button" data-size="${s}" aria-pressed="${i === 0}">${s}</button>`
  ).join('');

  const featuresHTML = product.features.map(f => `<li>${f}</li>`).join('');

  const specsHTML = Object.entries(product.specs)
    .map(([k, v]) => `<tr><th scope="row">${k}</th><td>${v}</td></tr>`).join('');

  const relatedHTML = (product.related || [])
    .map(id => PRODUCTS[id])
    .filter(Boolean)
    .map(renderProductCard).join('');

  const priceHTML = product.priceTBD
    ? `<div class="pinfo-price pinfo-price--tbd">Por definir</div>
       <div class="pinfo-price-note">Consulta el precio por WhatsApp</div>`
    : `<div class="pinfo-price"><span class="currency">$</span>${product.price}</div>`;

  const wspMsg = product.priceTBD
    ? `Hola Display Sport, me interesa el ${product.name}. ¿Cuál es el precio y la disponibilidad actual?`
    : `Hola Display Sport, me interesa el ${product.name} ($${product.price}). ¿Tienen disponibilidad?`;

  const wspUrl = window.DSR.whatsappUrl(wspMsg);

  // ============ Render principal ============
  container.innerHTML = `
    <nav class="breadcrumb" aria-label="Ruta de navegación">
      <a href="index.html">Inicio</a>
      <span class="sep" aria-hidden="true">/</span>
      <a href="index.html#catalogo">Catálogo</a>
      <span class="sep" aria-hidden="true">/</span>
      <a href="index.html#catalogo">${product.category}</a>
      <span class="sep" aria-hidden="true">/</span>
      <span class="current" aria-current="page">${product.name}</span>
    </nav>

    <div class="product-main">
      <div class="product-gallery">
        <div class="gallery-main">
          <div class="gallery-bg-text" aria-hidden="true">${product.bgNum}</div>
          <div aria-hidden="true">${product.svg}</div>
          ${product.photo ? `<img src="${product.photo}" alt="${product.name} — Display Sport"
               class="product-photo" fetchpriority="high"
               onload="this.classList.add('is-loaded');"
               onerror="this.remove();" />` : ''}
        </div>
        <div class="gallery-thumbs" aria-hidden="true">
          <div class="thumb active">${product.svg}</div>
          <div class="thumb" style="background:#1f1f1f">${product.svg}</div>
          <div class="thumb" style="background:#0a0a0a">${product.svg}</div>
          <div class="thumb" style="background:#2a2a2a">${product.svg}</div>
        </div>
      </div>

      <div class="product-info">
        <div class="pinfo-tag">${product.tag}</div>
        <h1 class="pinfo-name">${product.name}</h1>

        <div class="pinfo-price-row">${priceHTML}</div>

        <p class="pinfo-short">${product.short}</p>

        <div class="opt-section">
          <div class="opt-label">Color <span class="selected" id="lbl-color">${product.colors[0].name}</span></div>
          <div class="color-swatches" role="radiogroup" aria-label="Color">${colorsHTML}</div>
        </div>

        <div class="opt-section">
          <div class="opt-label">Talla <span class="selected" id="lbl-size">${product.sizes[0]}</span></div>
          <div class="size-options" role="radiogroup" aria-label="Talla">${sizesHTML}</div>
        </div>

        <div class="opt-section">
          <div class="opt-label">Cantidad</div>
          <div class="qty-control">
            <button id="qty-minus" type="button" aria-label="Disminuir cantidad">−</button>
            <div class="qty-val" id="qty-val" aria-live="polite">1</div>
            <button id="qty-plus" type="button" aria-label="Aumentar cantidad">+</button>
          </div>
        </div>

        <div class="buy-actions">
          <a class="btn-buy-main" id="btn-buy-main" href="${wspUrl}" target="_blank" rel="noopener">Comprar por WhatsApp →</a>
          <a class="btn-wsp" href="${wspUrl}" target="_blank" rel="noopener">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
            Consultar disponibilidad
          </a>
        </div>

        <div class="shipping-info">
          <div class="ship-row">
            <div class="ship-icon" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg></div>
            <div><strong>Envío rápido</strong>Llega en 24–48 horas a las principales ciudades. Gratis sobre $200.000.</div>
          </div>
          <div class="ship-row">
            <div class="ship-icon" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg></div>
            <div><strong>Devolución 30 días</strong>Cambia o devuelve tu prenda sin costo.</div>
          </div>
          <div class="ship-row">
            <div class="ship-icon" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg></div>
            <div><strong>Múltiples medios de pago</strong>Tarjeta, PSE, Nequi, Daviplata, Bancolombia o contraentrega.</div>
          </div>
        </div>
      </div>
    </div>

    <section class="product-details" aria-label="Información del producto">
      <div class="details-tabs" role="tablist">
        <button class="tab-btn active" type="button" data-tab="desc" role="tab" aria-selected="true" aria-controls="panel-desc">Descripción</button>
        <button class="tab-btn" type="button" data-tab="feat" role="tab" aria-selected="false" aria-controls="panel-feat">Características</button>
        <button class="tab-btn" type="button" data-tab="specs" role="tab" aria-selected="false" aria-controls="panel-specs">Especificaciones</button>
      </div>
      <div class="tab-panel active" data-panel="desc" id="panel-desc" role="tabpanel">
        <p>${product.description}</p>
      </div>
      <div class="tab-panel" data-panel="feat" id="panel-feat" role="tabpanel">
        <ul class="feature-list">${featuresHTML}</ul>
      </div>
      <div class="tab-panel" data-panel="specs" id="panel-specs" role="tabpanel">
        <table class="specs-table"><tbody>${specsHTML}</tbody></table>
      </div>
    </section>

    ${relatedHTML ? `
    <section class="recommended" aria-labelledby="rec-title">
      <h2 class="recommended-title" id="rec-title">También te puede<br><span class="outline-text">interesar.</span></h2>
      <div class="recommended-grid">${relatedHTML}</div>
    </section>` : ''}
  `;

  // ============ Interactividad ============

  // Color swatches
  document.querySelectorAll('.swatch').forEach(s => {
    s.addEventListener('click', () => {
      document.querySelectorAll('.swatch').forEach(x => {
        x.classList.remove('active');
        x.setAttribute('aria-pressed', 'false');
      });
      s.classList.add('active');
      s.setAttribute('aria-pressed', 'true');
      document.getElementById('lbl-color').textContent = s.dataset.name;
    });
  });

  // Size buttons
  document.querySelectorAll('.size-btn').forEach(b => {
    b.addEventListener('click', () => {
      document.querySelectorAll('.size-btn').forEach(x => {
        x.classList.remove('active');
        x.setAttribute('aria-pressed', 'false');
      });
      b.classList.add('active');
      b.setAttribute('aria-pressed', 'true');
      document.getElementById('lbl-size').textContent = b.dataset.size;
    });
  });

  // Quantity
  const qtyEl = document.getElementById('qty-val');
  let qty = 1;
  document.getElementById('qty-minus').addEventListener('click', () => {
    if (qty > 1) { qty--; qtyEl.textContent = qty; }
  });
  document.getElementById('qty-plus').addEventListener('click', () => {
    if (qty < 10) { qty++; qtyEl.textContent = qty; }
  });

  // Tabs
  document.querySelectorAll('.tab-btn').forEach(t => {
    t.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(x => {
        x.classList.remove('active');
        x.setAttribute('aria-selected', 'false');
      });
      document.querySelectorAll('.tab-panel').forEach(x => x.classList.remove('active'));
      t.classList.add('active');
      t.setAttribute('aria-selected', 'true');
      const panel = document.querySelector(`.tab-panel[data-panel="${t.dataset.tab}"]`);
      if (panel) panel.classList.add('active');
    });
  });

  /**
   * Construye el mensaje de WhatsApp con color, talla y cantidad seleccionados.
   * @returns {string}
   */
  function buildBuyMessage() {
    const c = document.getElementById('lbl-color').textContent;
    const s = document.getElementById('lbl-size').textContent;
    const priceLine = product.priceTBD ? 'Precio: Por definir' : `Precio: $${product.price}`;
    return `Hola Display Sport, quiero comprar:\n${product.name}\nColor: ${c}\nTalla: ${s}\nCantidad: ${qty}\n${priceLine}`;
  }

  // El botón principal abre WhatsApp con el detalle armado en el momento del click
  const btnMain = document.getElementById('btn-buy-main');
  if (btnMain) {
    btnMain.addEventListener('click', (e) => {
      e.preventDefault();
      const url = window.DSR.whatsappUrl(buildBuyMessage());
      window.DSR.trackEvent('click_whatsapp', { source: 'buy_main', product: product.id });
      window.open(url, '_blank', 'noopener');
    });
  }

  // Float WhatsApp prellena el contexto del producto
  const float = document.getElementById('whatsapp-float');
  if (float) float.href = wspUrl;

  // Analytics: view_product
  window.DSR.trackEvent('view_product', { product: product.id, category: product.category });
})();
