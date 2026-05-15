FOTOS DEL FEED DE INSTAGRAM — DISPLAY SPORT
============================================

Aquí van las fotos que quieras mostrar en la sección "Síguenos
en Instagram" del home.

NOMBRES ESPERADOS (6 archivos)
------------------------------
  post-1.jpg
  post-2.jpg
  post-3.jpg
  post-4.jpg
  post-5.jpg
  post-6.jpg

Si la imagen no existe, se muestra un SVG decorativo en su
lugar (no se rompe nada).

FORMATO RECOMENDADO
-------------------
- Cuadrada 1:1 (Instagram también las muestra cuadradas)
- 800x800 px ideal, mínimo 600x600
- JPG calidad 85, máximo 200 KB
- Optimizar con squoosh.app o tinypng.com antes de subir

CÓMO BAJAR FOTOS DESDE EL INSTAGRAM PÚBLICO
-------------------------------------------
1) Abre el post desde el navegador en
   https://www.instagram.com/display_sport/
2) Click derecho en la foto > "Guardar imagen como…"
   - Si Instagram no te deja, usa F12 (DevTools), pestaña Network,
     filtro Img, recarga, encuentra el JPG más grande y descárgalo.
3) Renombra a post-1.jpg (o post-2, etc.) y guárdalo aquí.
4) Edita el caption + URL en assets/products.js > IG_POSTS

ALTERNATIVA — EMBED OFICIAL EN VIVO
-----------------------------------
Si prefieres que el sitio muestre el post real con likes y
comentarios actualizados:

1) Abre el post en Instagram, "..." > "Copiar enlace"
   (tendrás algo como https://www.instagram.com/p/ABC123/)
2) En assets/products.js, dentro del IG_POSTS de esa posición,
   descomenta la línea embedUrl y pega la URL:

   embedUrl: 'https://www.instagram.com/p/ABC123/',

3) Listo. El sitio carga automáticamente el embed oficial de
   Instagram con el post real (foto, video, likes, comentarios).

(El sistema soporta cualquier combinación: unos posts con
embedUrl y otros con foto local, según prefieras.)
