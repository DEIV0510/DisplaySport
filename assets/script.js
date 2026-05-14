/* ============================================================
   DISPLAY SPORT — SCRIPT GLOBAL
   ------------------------------------------------------------
   Comportamientos compartidos por todas las páginas:
   - Cursor custom (solo en dispositivos con pointer fino)
   - Filtros del catálogo por línea (hombre/dama/accesorios)
   - Año dinámico del footer
   - CTAs de WhatsApp con texto pre-poblado
   - Links del footer que disparan filtros del catálogo
   Respeta prefers-reduced-motion para animaciones JS.
   ============================================================ */

(function () {
  'use strict';

  const supportsFinePointer = window.matchMedia('(pointer: fine)').matches;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ============ Cursor custom ============
  const cursor = document.getElementById('cursor');
  if (cursor && supportsFinePointer) {
    let mouseX = 0, mouseY = 0, cx = 0, cy = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    const ease = reducedMotion ? 1 : 0.18;
    function animateCursor() {
      cx += (mouseX - cx) * ease;
      cy += (mouseY - cy) * ease;
      cursor.style.left = cx + 'px';
      cursor.style.top = cy + 'px';
      requestAnimationFrame(animateCursor);
    }
    requestAnimationFrame(animateCursor);

    // Crece sobre elementos interactivos
    const interactiveSelector = 'a, button, .feature, .product, .swatch, .size-btn, .tab-btn, .thumb, .filter-btn, input, textarea';
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest(interactiveSelector)) cursor.classList.add('active');
    });
    document.addEventListener('mouseout', (e) => {
      if (e.target.closest(interactiveSelector)) cursor.classList.remove('active');
    });
  } else if (cursor) {
    // Touch / coarse pointer: ocultamos el cursor custom y devolvemos el del SO
    cursor.style.display = 'none';
    document.documentElement.style.cursor = 'auto';
    document.body.style.cursor = 'auto';
  }

  // ============ Filtro de catálogo por línea ============
  const filterBtns = document.querySelectorAll('.filter-btn');

  function applyFilter(filter) {
    const products = document.querySelectorAll('.product');
    products.forEach(p => {
      const lines = (p.dataset.lines || '').split(/\s+/);
      const show = filter === 'todos' || lines.includes(filter);
      p.style.display = show ? '' : 'none';
    });
    filterBtns.forEach(b => {
      const isActive = b.dataset.filter === filter;
      b.classList.toggle('active', isActive);
      b.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
    if (window.DSR) window.DSR.trackEvent('filter_catalog', { filter });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => applyFilter(btn.dataset.filter));
  });

  // ============ Footer: links que disparan filtros del catálogo ============
  document.querySelectorAll('[data-filter]').forEach(el => {
    if (el.classList.contains('filter-btn')) return; // ya manejados arriba
    el.addEventListener('click', (e) => {
      const filter = el.dataset.filter;
      if (!filter) return;
      // Si estamos en index, aplicamos sin recargar. Si no, dejamos navegar al hash.
      if (document.getElementById('catalog-grid')) {
        applyFilter(filter);
      }
    });
  });

  // ============ Año dinámico del footer ============
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ============ CTA "Consultar catálogo por WhatsApp" en el footer del catálogo ============
  const catalogCta = document.getElementById('catalog-whatsapp-cta');
  if (catalogCta && window.DSR) {
    catalogCta.href = window.DSR.whatsappUrl(
      'Hola Display Sport, me gustaría ver el catálogo completo con precios y disponibilidad.'
    );
    catalogCta.target = '_blank';
    catalogCta.rel = 'noopener';
    catalogCta.addEventListener('click', () => {
      window.DSR.trackEvent('click_whatsapp', { source: 'catalog_cta' });
    });
  }

  // ============ Tracking: clicks en WhatsApp e Instagram globales ============
  document.querySelectorAll('a[href*="wa.me"]').forEach(a => {
    a.addEventListener('click', () => {
      if (window.DSR) window.DSR.trackEvent('click_whatsapp', { href: a.href });
    });
  });
  document.querySelectorAll('a[href*="instagram.com"]').forEach(a => {
    a.addEventListener('click', () => {
      if (window.DSR) window.DSR.trackEvent('click_instagram', { href: a.href });
    });
  });

})();
