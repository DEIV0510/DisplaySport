FOTOS DEL CATÁLOGO — DISPLAY SPORT
===================================

Guarda aquí las fotos REALES de cada producto.

NOMBRE RECOMENDADO DEL ARCHIVO
------------------------------
Usa el ID del producto como nombre (más fácil de mantener).
En .jpg minúsculas, sin tildes ni espacios.

IDs ACTUALES (11 productos):

  pantaloneta.jpg
  licra.jpg
  camiseta.jpg
  esqueleto.jpg
  buzo-compresion.jpg
  top.jpg
  croptop.jpg
  visera.jpg
  canguro.jpg
  cinturon-running.jpg
  botella-silicona.jpg

FORMATO RECOMENDADO
-------------------
- JPG calidad 85 (o WebP si tu hosting lo soporta)
- Cuadrada (1:1), 800x800 px ideal, mínimo 600x600
- Fondo neutro/oscuro coherente con la marca
- Menor a 200 KB cada una (usa squoosh.app o tinypng.com)

CÓMO ACTIVAR LA FOTO EN UN PRODUCTO
-----------------------------------
1. Guarda la imagen aquí (ej. pantaloneta.jpg).
2. Abre assets/products.js y dentro del objeto del producto
   añade una línea con `photo:` apuntando al archivo:

      'pantaloneta': {
        id: 'pantaloneta',
        ...
        photo: 'assets/products/pantaloneta.jpg',   ← AÑADE ESTA
        ...
      }

3. Guarda y recarga el navegador con Ctrl+F5. La foto reemplaza
   al SVG decorativo.

SI NO TIENES FOTO TODAVÍA
-------------------------
No pongas el campo `photo:` o déjalo comentado. El sitio NO
intenta cargar nada — queda el SVG y la consola limpia, sin
errores 404.

PARA QUITAR UNA FOTO
--------------------
Borra (o comenta) la línea `photo:` en products.js. El archivo
.jpg puedes dejarlo aquí o borrarlo.
