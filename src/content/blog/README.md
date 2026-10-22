# Blog de kiub

Artículos de `/blog/`. Cada `.md` de esta carpeta es un post (este README no se publica).

## Cómo agregar un artículo nuevo

1. Crea `src/content/blog/<slug>.md` copiando el frontmatter de un post existente. El nombre del archivo y el campo `slug` deben ser iguales.
2. `title` ≤ 60 caracteres (si es más largo, hasta 90, agrega `seoTitle` ≤ 60: el `title` queda como H1 y `seoTitle` va en `<title>` y `og:title`); `description` de 140 a 160; `slug` en minúsculas con guiones; `tags` de la lista existente cuando sea posible. El primer tag es la categoría que se muestra en las tarjetas.
3. Portada en `src/assets/blog/<slug>/cover.webp` (16:9, ≥ 1600 px) y `coverAlt` descriptivo. De la portada se genera también la imagen para redes (1200×630).
4. Tablas como HTML (`<figure class="table-figure"><table>…`), nunca como imagen.
5. `faq` con 3–4 preguntas si aplica; `related` con 2–3 slugs. Deja en el cuerpo un `## Preguntas frecuentes`: ahí se inserta el acordeón generado desde `faq` (y el JSON-LD `FAQPage`). Lo que vaya después (p. ej. "Fuentes") se muestra a continuación.
6. Enlaces internos a `/servicios/`, `/contacto/` y otros posts. CTA final a WhatsApp.
7. `npm run build` (el schema valida longitudes y campos) y revisa la vista previa.
8. Español neutro con "tú" ("necesitas", no "necesitás"). No inventar cifras: toda cifra de mercado con enlace a la fuente; los rangos propios se rotulan "estimado de kiub".

Otros campos útiles:

- `draft: true` oculta el post en producción (se ve en `npm run dev`).
- `featured: true` lo pone como destacado en `/blog/` (si no, el destacado es el más reciente).
- `updated` actualiza `dateModified` y `article:modified_time`.
- Los comentarios HTML (`<!-- … -->`) del `.md` no se publican: sirven para notas internas.

## Versión en inglés (pendiente)

`/en/blog/` todavía no existe. La estructura ya está preparada:

- Cada post tiene `lang` (`es` por defecto) y `translationOf` (slug de la versión en el otro idioma).
- `getPosts()` en `src/lib/blog.ts` solo devuelve posts `lang: 'es'`.

Para lanzarla: crear posts con `lang: 'en'` y `translationOf`, agregar `src/pages/en/blog/`, emitir hreflang (`es`, `en`, `x-default`) **solo** en los posts que tengan traducción, y agregar "Blog" al menú y al footer en inglés (`content.en.nav.blog` y la columna de navegación).
