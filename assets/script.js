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

  // ============ PRELOADER ============
  // Animación de carga: cuenta hasta 100% al ritmo del documento.
  // Se oculta cuando window.load() resuelve.
  const preloader = document.getElementById('preloader');
  const fill = document.getElementById('preloader-fill');
  const counter = document.getElementById('preloader-counter');

  if (preloader && fill && counter) {
    let progress = 0;
    let loaded = false;
    const minDisplay = reducedMotion ? 400 : 1400; // ms mínimos visibles
    const start = performance.now();

    function setProgress(p) {
      progress = Math.min(100, Math.max(progress, p));
      fill.style.width = progress + '%';
      counter.textContent = String(Math.round(progress)).padStart(2, '0') + '%';
    }

    function tick() {
      const elapsed = performance.now() - start;
      const target = loaded ? 100 : Math.min(85, (elapsed / minDisplay) * 85);
      setProgress(progress + (target - progress) * 0.12);

      if (progress < 99.5) {
        requestAnimationFrame(tick);
      } else if (loaded) {
        setProgress(100);
        setTimeout(() => {
          preloader.classList.add('is-hidden');
          document.body.classList.add('is-ready');
        }, 180);
      } else {
        requestAnimationFrame(tick);
      }
    }

    window.addEventListener('load', () => {
      loaded = true;
      // Asegurar tiempo mínimo de exposición
      const elapsed = performance.now() - start;
      if (elapsed < minDisplay) {
        setTimeout(() => { /* tick ya recoge la nueva meta */ }, minDisplay - elapsed);
      }
    });

    // Failsafe: si window.load nunca dispara (poco probable), forzar a los 6s
    setTimeout(() => { loaded = true; }, 6000);

    requestAnimationFrame(tick);
  }

  // ============ Hero products — parallax con mouse ============
  // Cada producto se desplaza con intensidad distinta según su
  // "profundidad" (capa). Crea sensación 3D real cuando el usuario
  // mueve el mouse sobre el hero card.
  const heroProductsEl = document.getElementById('hero-products');
  const heroStage = document.querySelector('.hero-logo-stage');
  if (heroProductsEl && heroStage && !reducedMotion && supportsFinePointer) {
    const heroProds = heroProductsEl.querySelectorAll('.hero-product');
    // Intensidad de parallax por capa (capa al frente se mueve más)
    const depths = [22, 14, 14, 10]; // matches z-index 4,3,3,2
    let rafId = null;
    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;

    function animateParallax() {
      // Easing suave hacia el target
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      heroProds.forEach((p, i) => {
        const d = depths[i] || 10;
        p.style.setProperty('--mx', `${currentX * d}px`);
        p.style.setProperty('--my', `${currentY * d}px`);
      });
      rafId = requestAnimationFrame(animateParallax);
    }

    heroStage.addEventListener('mousemove', (e) => {
      const rect = heroStage.getBoundingClientRect();
      targetX = ((e.clientX - rect.left) / rect.width) - 0.5;  // -0.5 a 0.5
      targetY = ((e.clientY - rect.top) / rect.height) - 0.5;
      if (!rafId) rafId = requestAnimationFrame(animateParallax);
    }, { passive: true });

    heroStage.addEventListener('mouseleave', () => {
      targetX = 0; targetY = 0;
      // Dejar correr el RAF unos frames para que vuelvan suavemente al centro
    });
  }

  // ============ Navbar scroll state ============
  // Al hacer scroll > 40px, el navbar se compacta, sube al top y
  // el top-banner se oculta (translateY). El JS solo añade/quita
  // las clases — todo el resto vive en CSS.
  const navEl = document.querySelector('nav');
  if (navEl) {
    let ticking = false;
    const SCROLL_THRESHOLD = 40;

    function updateNavState() {
      const scrolled = window.scrollY > SCROLL_THRESHOLD;
      navEl.classList.toggle('is-scrolled', scrolled);
      document.body.classList.toggle('is-scrolled-page', scrolled);
      ticking = false;
    }

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(updateNavState);
        ticking = true;
      }
    }, { passive: true });

    // Estado inicial (por si la página carga ya con scroll, p.ej. al
    // volver con anchor #catalogo desde producto.html)
    updateNavState();
  }

  // ============ Mobile hamburger menu ============
  // Botón hamburguesa + overlay con links. Se cierra al click en link,
  // ESC, o click en el overlay. Bloquea scroll del body mientras abierto.
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuToggle && mobileMenu) {
    function setMenuOpen(open) {
      menuToggle.classList.toggle('is-active', open);
      mobileMenu.classList.toggle('is-open', open);
      menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      mobileMenu.setAttribute('aria-hidden', open ? 'false' : 'true');
      menuToggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
      document.body.classList.toggle('menu-open', open);
    }

    menuToggle.addEventListener('click', () => {
      setMenuOpen(!mobileMenu.classList.contains('is-open'));
    });

    // Cierra al click en cualquier link/CTA marcado
    mobileMenu.querySelectorAll('[data-menu-close]').forEach(el => {
      el.addEventListener('click', () => setMenuOpen(false));
    });

    // ESC cierra
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
        setMenuOpen(false);
      }
    });

    // Cerrar si la ventana se hace ancha (rotación a landscape / desktop)
    window.addEventListener('resize', () => {
      if (window.innerWidth > 900 && mobileMenu.classList.contains('is-open')) {
        setMenuOpen(false);
      }
    });
  }

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
