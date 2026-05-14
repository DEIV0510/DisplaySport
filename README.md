# Display Sport — Sitio oficial

Landing page e-commerce de **Display Sport**, marca colombiana de ropa
técnica deportiva fabricada en Armenia, Quindío.

Stack: **HTML5 + CSS3 + JavaScript vanilla** (cero frameworks, cero build).
Tipografías: Bebas Neue + Montserrat + Space Mono (Google Fonts).
Paleta: negro / blanco / grises + naranja `#FF5E14` como acento.

---

## Cómo abrirlo en local

```powershell
# Doble click al .bat:
start-server.bat

# O directamente PowerShell:
powershell -ExecutionPolicy Bypass -File .\start-server.ps1 -Port 8090
```

Abre `http://localhost:8090/` en el navegador.

Si necesitas otro puerto: `.\start-server.ps1 -Port 8081`

---

## Estructura del proyecto

```
DISPLAY SPORT/
├── index.html               · landing principal
├── producto.html            · template detalle de producto (lee ?p=ID)
├── robots.txt               · SEO
├── sitemap.xml              · SEO
├── start-server.ps1         · servidor local PowerShell
├── start-server.bat         · launcher para doble click
├── README.md                · este archivo
├── CHANGELOG.md             · historial de cambios
└── assets/
    ├── config.js            · ⭐ DATOS DE MARCA (editar aquí)
    ├── products.js          · ⭐ CATÁLOGO DE PRODUCTOS (editar aquí)
    ├── product-detail.js    · lógica de página de producto
    ├── script.js            · preloader, filtros, cursor, tracking
    ├── styles.css           · estilos completos
    ├── logo.jpg             · logo principal
    ├── favicon.png          · favicon
    ├── instagram/           · (opcional) fotos reales de Instagram
    └── products/            · ⭐ FOTOS REALES DE PRODUCTOS
        └── README.txt       · instrucciones para añadir fotos
```

Los tres archivos marcados con ⭐ son los que vas a tocar al editar
contenido. El resto es código que no necesitas modificar.

---

## Ediciones frecuentes

### 1. Cambiar datos de contacto (WhatsApp, dirección, IG)

Edita **`assets/config.js`**. Todo está en un único objeto `DSR_CONFIG`:

```js
contact: {
  whatsapp: '573185899233',           // solo dígitos para wa.me
  whatsappDisplay: '+57 318 589 9233', // formato legible
  instagram: 'Display_sportwear',
  instagramUrl: 'https://www.instagram.com/Display_sportwear',
  email: ''
}
```

Cualquier cambio aquí se refleja automáticamente en todos los CTAs
del sitio (botones, footer, mensajes prellenados de WhatsApp).

### 2. Cambiar el precio de un producto

Edita **`assets/products.js`**. Cada producto es una entrada del objeto
`PRODUCTS`. Por ejemplo, para cambiar el precio de la pantaloneta:

```js
'pantaloneta': {
  ...
  priceTBD: false,
  price: '70.000',  ← cambia aquí
  ...
}
```

Formato: string con puntos como separador de miles (`'129.000'`,
`'1.299.000'`). El símbolo `$` se añade automáticamente.

Si un producto aún no tiene precio:

```js
priceTBD: true,
// la línea price puede omitirse o quedar como esté
```

### 3. Añadir un producto nuevo

Copia un producto existente en `products.js` y cambia los campos:

```js
'nuevo-producto-id': {
  id: 'nuevo-producto-id',
  name: 'Nombre Visible',
  category: 'Ropa',                  // 'Ropa' | 'Accesorios'
  tag: 'Tipo / Disciplinas',
  lines: ['hombre'],                 // 'hombre' | 'dama' | 'accesorios'
  disciplines: ['running'],          // running | fitness | cycling | crossfit
  priceTBD: false,
  price: '99.000',
  bgNum: '12',                       // número decorativo grande
  badge: 'Nuevo',
  badgeStyle: 'light',               // 'light' | 'dark'
  short: 'Descripción corta de 1 oración.',
  description: 'Descripción larga de 2-3 oraciones.',
  features: ['Bullet 1', 'Bullet 2'],
  specs: {
    'Material': 'Poliéster',
    'Origen': 'Hecho en Armenia, Colombia'
  },
  colors: [{ name: 'Negro', hex: '#0a0a0a' }],
  sizes: ['S', 'M', 'L'],
  svg: `<svg viewBox="0 0 200 200">...</svg>`,
  related: ['pantaloneta', 'top']
}
```

Acuérdate de añadir el `<url>` correspondiente al `sitemap.xml`.

### 4. Reemplazar las fotos de productos

Guarda las fotos en `assets/products/` con el ID del producto como
nombre, en JPG:

```
assets/products/pantaloneta.jpg
assets/products/licra.jpg
assets/products/top.jpg
...
```

El sitio detecta automáticamente si la foto existe y la usa encima
del SVG placeholder. Si no existe, queda el SVG. Ver
`assets/products/README.txt` para más detalle.

**Recomendado**: imágenes cuadradas 800×800 px, JPG calidad 85, <200 KB.

### 5. Cambiar las fotos del feed de Instagram

Edita el array `IG_POSTS` al final de `assets/products.js`. Cada
post acepta `img` con la ruta a un JPG en `assets/instagram/`.

---

## SEO y meta tags

Toda la información SEO ya está en `index.html`:

- `<title>` y `<meta name="description">`
- Open Graph completo (og:title, og:image, og:url, etc.)
- Twitter Cards
- Geo tags (Armenia, Quindío)
- JSON-LD: `Organization`, `LocalBusiness`, `WebSite`

En `producto.html`, el JS de `product-detail.js` genera dinámicamente
el JSON-LD de `Product` + `BreadcrumbList` para cada producto basándose
en `PRODUCTS`.

`sitemap.xml` y `robots.txt` están en la raíz, listos para el dominio
final `display-sport.co`. Si cambias el dominio, edita ambos.

---

## Performance

- Fuentes con `display=swap` y `preload`
- Imágenes con `loading="lazy"` (excepto la del hero con `fetchpriority="high"`)
- Sin frameworks, sin builds, todo HTTP/2-friendly
- `<script>` cargados al final del `<body>`

### Pendientes de optimización
- Convertir `favicon.png` (808 KB) a `favicon.ico` y `favicon-32.png` (<10 KB)
- Convertir `logo.jpg` (97 KB) a WebP (~15 KB)

---

## Accesibilidad

- WCAG AA target
- `:focus-visible` global con outline blanco
- Skip-to-content link
- ARIA labels en navegación, botones de íconos y radio groups
- `prefers-reduced-motion` desactiva todas las animaciones
- `pointer: coarse` (touch) devuelve cursor del SO

---

## Analytics (cuando se conecte)

`assets/config.js` ya define `DSR.trackEvent(name, payload)`. Hoy
solo loguea en consola si `window.DSR_DEBUG = true`. Para activar
analytics real, basta con cargar el snippet de GA4 o Meta Pixel
antes de `config.js` — `trackEvent` los detecta automáticamente.

Eventos ya cableados: `view_product`, `click_whatsapp`,
`click_instagram`, `filter_catalog`.

---

## Licencia

Código entregado a Display Sport — Armenia, Quindío.
