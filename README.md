# Territorios · Congregación Granada

<img src="icono-192.png" width="88" alt="">

App instalable con los 58 territorios de la congregación Granada, en
Ensenada, Baja California.

- **Sección 1 — México–Reforma:** territorios 1 al 31
- **Sección 2 — Zona Centro / Aduana:** territorios 32 al 58

## Cómo se usa

1. Abre la app y elige un territorio de la lista, o búscalo por número.
2. **Ver todos los territorios** muestra el mapa completo con cada número
   en su lugar. Toca cualquiera para abrirlo.
3. Dentro del territorio, presiona en el mapa el punto de encuentro de la
   cuadra a la que vas. Si te sales un poco, la app acomoda el punto al
   borde más cercano de ese mismo territorio.
4. **Cómo llegar** abre Google Maps con la ruta.
5. El botón ◎ activa el GPS y muestra distancias. El ☾ cambia entre tema
   oscuro y claro.

Una vez abierto un territorio queda fijo: para cambiar a otro, usa **←**.

## Publicar en GitHub Pages

1. Crea un repositorio y sube todos estos archivos a la rama `main`.
2. **Settings → Pages → Deploy from a branch**, rama `main`, carpeta
   `/ (root)`.
3. En un minuto queda en `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/`.

## Instalarla en el teléfono

Abre esa dirección en Chrome y toca **Instalar la app en este teléfono**.
Si no aparece el botón, usa el menú de Chrome → *Agregar a pantalla
principal*. En iPhone: Compartir → *Agregar a pantalla de inicio*.

Queda con su icono y abre a pantalla completa, sin barra de navegador.

## Qué funciona sin internet

Instalada, la app se guarda completa en el teléfono: la lista, el buscador,
los contornos de los 58 territorios y la vista de conjunto. Puedes marcar
el destino igual.

Lo único que necesita señal es el mapa de calles de Google, porque sus
condiciones de uso no permiten guardarlo. Sin señal aparece el **plano
guardado**: tu territorio, los vecinos con su número y las cuadras.

Para navegar sin datos, descarga Ensenada en la app de Google Maps: foto de
perfil → *Mapas sin conexión* → *Selecciona tu propio mapa*.

## Archivos

| Archivo | Para qué sirve |
|---|---|
| `index.html` | La app completa, con los 58 territorios dentro |
| `sw.js` | Guarda la app en el teléfono para que abra sin internet |
| `manifest.webmanifest` | Nombre, icono y colores al instalarla |
| `icono-192.png`, `icono-512.png`, `icono-maskable.png` | Iconos |
| `logo.png` | Logo original, fondo transparente |
| `kml/` | Los territorios en KML, para Google Earth o Google My Maps |

## IMPORTANTE — clave de Google Maps

La clave de Google Maps está dentro de `index.html`. En un repositorio
público **cualquiera puede leerla**, y si la usan en otro sitio el consumo
se carga a tu cuenta.

Antes de publicar, restringe la clave:

1. `console.cloud.google.com` → **APIs y servicios → Credenciales**.
2. Abre la clave → **Restricciones de aplicación** → **Sitios web**.
3. Agrega `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/*`
4. En **Restricciones de API**, deja activa solo **Maps JavaScript API**.
5. En **Facturación → Presupuestos y alertas**, pon un límite bajo con
   aviso por correo.

## Actualizar la app

Al cambiar `index.html`, sube también `sw.js` con un número nuevo en la
primera línea (`granada-v5` → `granada-v6`). Sin eso, los teléfonos que ya
la tengan instalada seguirán abriendo la versión vieja.
