# CLAUDE.md — Portafolio de Ciberseguridad

> Contexto del proyecto. Claude Code lo lee automáticamente al iniciar sesión en esta carpeta.
> Mantenlo corto y accionable: si una línea no cambia cómo trabajas, no va aquí.
> Datos personales van en `CLAUDE.local.md` (no se sube a GitHub), nunca en este archivo.

## 1. Qué es este proyecto

Sitio web personal y estático que demuestra los conocimientos y la práctica en ciberseguridad de
**Miguel Angel Barragan Bautista ("AM")**: writeups de laboratorios y CTF, proyectos,
certificaciones, habilidades y CV.

El sitio crece poco a poco. AM agrega contenido cuando tiene tiempo, así que
**agregar una entrada nueva debe ser tan simple como crear un archivo `.md`** y hacer push.

Público objetivo: reclutadores y líderes técnicos de seguridad que lo revisan en 2–3 minutos.
Lo primero que deben ver: quién es AM, qué sabe hacer y pruebas concretas (writeups y proyectos).

## 2. Stack (decidido, no cambiar sin preguntar)

- **Astro** (última versión estable) + **TypeScript** en modo `strict`.
- Contenido en **Markdown** con *Content Collections* (`glob()` loader + esquema con Zod).
- **CSS propio** con variables (`src/styles/`), sin framework CSS por ahora.
- JavaScript mínimo; solo agregar "islas" interactivas si aportan algo real.
- **Sin base de datos ni backend**: sitio 100 % estático.
- Gestor de paquetes: `npm`. Node: la LTS actual.
- Hosting: GitHub Pages con GitHub Actions (alternativa futura: Cloudflare Pages).
- Entorno de AM: **Windows + PowerShell**. Usa rutas con `\` y comandos de PowerShell; no asumas bash.

## 3. Comandos

```powershell
npm install          # instalar dependencias
npm run dev          # servidor local en http://localhost:4321
npm run build        # compilar a /dist (debe terminar sin errores)
npm run preview      # ver el resultado compilado
npx astro check      # revisar tipos y esquemas
```

## 4. Estructura de carpetas

```
Portafolio/
├─ CLAUDE.md                 este archivo (nivel proyecto)
├─ CLAUDE.local.md           personal, en .gitignore
├─ astro.config.mjs
├─ public/                   favicon, cv.pdf, og-image.png
├─ src/
│  ├─ content.config.ts      esquemas de las colecciones
│  ├─ content/
│  │  ├─ CLAUDE.md           reglas para escribir contenido (nivel directorio)
│  │  ├─ writeups/           *.md  laboratorios, CTF, máquinas retiradas
│  │  ├─ proyectos/          *.md
│  │  ├─ certificaciones/    *.md
│  │  └─ notas/              *.md  apuntes cortos
│  ├─ components/
│  ├─ layouts/
│  ├─ pages/
│  └─ styles/
└─ .github/workflows/deploy.yml
```

## 5. Páginas del sitio

Inicio · Sobre mí · Writeups (lista + detalle) · Proyectos · Certificaciones y formación ·
Habilidades (matriz por área: redes, web, sistemas, defensa/SOC, scripting) · Notas · Contacto · CV descargable.

## 6. Esquemas de contenido (frontmatter)

- **writeups**: `title`, `date`, `platform` (HackTheBox | TryHackMe | CTF | Lab propio | Otro),
  `difficulty` (Fácil | Media | Difícil | Insana), `tags[]`, `tools[]`, `summary` (≤160 caracteres), `draft` (bool).
- **proyectos**: `title`, `summary`, `stack[]`, `date`, `repo?`, `demo?`, `featured` (bool).
- **certificaciones**: `name`, `issuer`, `date`, `status` (obtenida | en curso), `credentialUrl?`.
- **notas**: `title`, `date`, `tags[]`, `summary`.

Estructura estándar de un writeup: Resumen · Alcance y entorno · Herramientas · Enumeración ·
Explotación · Hallazgos y cómo mitigarlos (visión defensiva) · Técnicas MITRE ATT&CK relacionadas ·
Lecciones aprendidas · Referencias.

## 7. Reglas de ciberseguridad y ética (innegociables)

1. Solo se documenta lo hecho en entornos **autorizados**: laboratorios propios, CTF, HackTheBox, TryHackMe, etc.
2. Respetar las reglas de cada plataforma (por ejemplo, en HackTheBox solo se publican writeups de máquinas retiradas; no publicar flags ni soluciones de retos activos).
3. **Nunca** publicar: contraseñas, tokens, claves, IPs o dominios reales de terceros, datos personales, capturas con información sensible.
4. **Nunca** publicar información interna de empleadores actuales o anteriores (sistemas, herramientas internas, incidentes, nombres de clientes), aunque sea "solo un ejemplo".
5. Los proyectos de la universidad o de grupo se publican solo con permiso de los demás integrantes.
6. Todo writeup incluye la parte defensiva: cómo se detecta y cómo se mitiga.
7. No inventar certificaciones, resultados, cargos ni experiencia. Si falta un dato, pregunta o deja un `TODO:` visible.

## 8. Diseño, accesibilidad y rendimiento

- Tema oscuro por defecto, respetando `prefers-color-scheme`; contraste mínimo WCAG AA.
- Diseño limpio y sobrio, una sola familia tipográfica, mucho espacio en blanco, **mobile first**.
- Sin recursos de terceros desde CDN (fuentes, scripts): se alojan localmente (privacidad y velocidad).
- Imágenes con `astro:assets` y texto `alt` obligatorio. Navegación completa con teclado.
- Meta etiquetas por página: `title`, `description`, Open Graph; `sitemap` y RSS de writeups/notas.
- Meta: Lighthouse ≥ 90 en Rendimiento, Accesibilidad, Buenas prácticas y SEO.

## 9. Flujo "agregar contenido nuevo"

Cuando AM diga "agrega un writeup / proyecto / certificación / nota":

1. Pregunta en **una sola ronda** los campos que falten (según la sección 6).
2. Crea el archivo en la carpeta correspondiente, con nombre en `kebab-case` (ej. `htb-nombre-maquina.md`).
3. Valida con `npm run build` y revisa que no rompa ningún esquema.
4. Repasa la sección 7 (datos sensibles, plataformas, empleadores).
5. Propón el mensaje de commit. **No hagas `git push` hasta que AM lo pida.**

## 10. Convenciones

- Código, nombres de archivos y componentes en inglés; contenido visible del sitio en español.
- Commits convencionales: `feat:`, `content:`, `fix:`, `docs:`, `chore:`. Rama principal: `main`.
- Nunca subir `.env`, `CLAUDE.local.md` ni secretos. Nunca `git push --force`.
- Cambios pequeños y verificables. Antes de instalar dependencias nuevas, borrar archivos o cambiar la estructura, pregunta.

## 11. Cómo debe trabajar Claude con AM

- Responde en **español**. Explica el "por qué" en pocas líneas: AM está aprendiendo el stack web.
- Da primero el paso concreto y luego la explicación; evita listas largas de opciones.
- Si algo falla, muestra el error, la causa y la solución, no solo el parche.

## 12. Fases del proyecto

- **Fase 1 — Base:** layout, navegación, Inicio, Sobre mí, estilos, colecciones y esquemas.
- **Fase 2 — Contenido:** 3 writeups, 1–2 proyectos, certificaciones, matriz de habilidades, CV.
- **Fase 3 — Publicación y pulido:** deploy, SEO, Lighthouse, dominio propio, cabeceras de seguridad.
- **Fuera de alcance por ahora:** bases de datos, backend, login, comentarios, formularios con servidor.
  AM quiere aprender bases de datos más adelante: **no las agregues hasta que lo pida explícitamente**,
  y cuando lo haga, enséñalo paso a paso.

## 13. Lecciones aprendidas (Claude: actualiza esta sección)

Cuando cometas un error o AM te corrija, agrega aquí una línea: `fecha — qué pasó — regla para evitarlo`.

- _(vacío por ahora)_
