# Changelog — Display Sport

Todos los cambios notables del sitio quedan registrados aquí.

---

## [fix] — Contacto definitivo (WhatsApp + Instagram) + logo dos variantes

### Cambiado
- **WhatsApp activo definitivo**: `+57 301 665 8929` (`wa.me/573016658929`).
  El número del PDF (`+57 318 589 9233`) era una versión desactualizada;
  el contacto vigente es el del brief inicial. Actualizado en
  `config.js`, `index.html`, `producto.html`, `products.js`, `README.md`.
- **Instagram definitivo**: [@display_sport](https://www.instagram.com/display_sport/).
  El handle del PDF (`@Display_sportwear`) era una versión desactualizada;
  el handle vigente es el del brief inicial. Actualizado en los mismos
  5 archivos (config + 2 HTMLs + products.js + README).
- **Logo** ahora en dos variantes alternadas (path central en negro
  para mostrar la D + slash como "perforación" del logo):
  - `assets/logo.svg` — naranja, usado en el preloader.
  - `assets/logo-white.svg` — blanco, usado en navbar, hero y footer.
  - `assets/logo-black.svg` — backup del original (todo negro).
- Preloader vuelve a usar `<img>` directos en lugar de `mask-image`,
  preservando los colores internos del SVG.

---

## [F-Pro] — Preloader 3D, naranja extendido, secciones nuevas, SEO

### Añadido
- **Preloader full-screen** con logo girando en 3D (cubo de 4 caras),
  rings concéntricos, contador de progreso 0–100 % y barra con
  gradiente blanco → naranja. Se oculta al `window.load`.
- **Indicador REC** pulsante en la navbar (estilo broadcast).
- **Sección "Por qué Display Sport"** con 4 cards:
  Hecho en Armenia · Envío rápido · Atención WhatsApp · Devolución 30 días.
- **Badges de pago** en footer (Nequi, Daviplata, Bancolombia, PSE,
  Visa/MC, Contraentrega) que toman su color real al hover.
- **Sistema de fotos reales**: `assets/products/<id>.jpg` se carga
  automáticamente sobre el SVG placeholder si existe.
- **SEO completo** en `index.html`:
  meta description, keywords, geo tags, Open Graph (1200x630),
  Twitter Card, JSON-LD (`Organization` + `LocalBusiness` + `WebSite`).
- **SEO dinámico** en `producto.html`: `product-detail.js` inyecta
  `Product` + `BreadcrumbList` JSON-LD por producto + canonical.
- **sitemap.xml** con las 11 URLs de producto + secciones.
- **robots.txt** apuntando al sitemap.
- **Skip-to-content link** para teclado / screen readers.
- **README.md** y **start-server.bat** para arranque doble-click.

### Cambiado
- Naranja ahora usado también en: dot del hero (con glow pulsante),
  REC indicator, filtros activos (borde + underline), badges de
  producto (mini-dot), separadores del marquee (alternados),
  línea inferior de cards al hover, sombra del nav-cta hover,
  hover de payment badges, decoración del top-banner.

### Notas
- El preloader respeta `prefers-reduced-motion`: deshabilita las
  rotaciones 3D y se oculta en 400 ms en vez de 1400 ms.
- El sistema de fotos no rompe nada si `assets/products/` está
  vacío — el `onerror` del `<img>` simplemente lo quita y queda
  el SVG visible.

---

## [F1 fix] — Datos reales del PDF

### Cambiado
- WhatsApp: `573185899233` / `+57 318 589 9233`
- Instagram: `@Display_sportwear`
- Dirección: `Cra 14 #8-12, Armenia, Quindío`
- Precios cargados para 8 de 11 productos (40k, 45k, 70k, 90k).
- Tallas ajustadas según PDF: S-M-L para ropa básica, XS-S-M-L para
  tops femeninos, Única para accesorios.

---

## [F1] — Contenido real Display Sport

### Añadido
- `assets/config.js` con `DSR_CONFIG` central + helpers
  (`DSR.whatsappUrl`, `DSR.trackEvent`, `DSR.formatPrice`).
- `assets/product-detail.js` extraído del IIFE inline en `producto.html`.
- 11 productos reales: pantaloneta, licra, camiseta, esqueleto,
  buso de compresión, top, crotop, visera, canguro, cinturón de
  running, botella en silicona. SVGs minimalistas para cada uno.
- Filtros por línea: Todos / Hombre / Dama / Accesorios.
- `:focus-visible` global, `prefers-reduced-motion`, `pointer: coarse`
  para cursor del SO en mobile.
- Tracking wrappers ready para GA4 / Meta Pixel.

### Cambiado
- Hero: "THE TIME IS NOW" en 3 líneas con dot naranja al final.
- Copy del hero centrado en running / fitness / cycling / CrossFit.
- Lang: `es-CO` (antes `es`).
- Fix bug: `font-family:Anton` (no importada) → Bebas Neue.

### Removido
- Stats inventados del hero (3.500 runners, 32 ciudades, etc.).
- Sección testimonios completa (eran inventados).
- Sección about-stats (2021, 100%, +50K km — inventados).

---

## [Snapshot inicial]

Versión pre-refactor del sitio, conservada como baseline en el
primer commit del repo.
