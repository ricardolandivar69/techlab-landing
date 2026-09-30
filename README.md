# TechLab.ec - React + Vite

Landing page de TechLab.ec desarrollada con React y Vite. El proyecto presenta los servicios de mantenimiento, reparación, ensamble de PC y soporte técnico con una interfaz responsive inspirada en el sistema visual del portafolio de Ricardo Landívar.

## Tecnologías

- HTML5: `index.html` funciona como documento base donde React monta la aplicación.
- CSS3: estilos, variables, responsive design, Grid y Flexbox en `src/styles.css`.
- JavaScript: datos y lógica en `src/data.js`, `src/App.jsx` y componentes.
- React: componentes, renderizado de listas, estado e interacciones.
- Vite: servidor de desarrollo y compilación.

## Funcionalidades

- Tema claro y oscuro con `useState`, `useEffect` y `localStorage`.
- Menú responsive controlado por estado de React.
- Tarjetas de servicios creadas desde un arreglo con `.map()`.
- Detalles expandibles por servicio.
- Diseño responsive para móvil, tablet y escritorio.
- Botones directos a WhatsApp e Instagram.
- Publicación automática en GitHub Pages mediante GitHub Actions.

## Estructura

```text
techlab-react/
├── .github/workflows/deploy.yml
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Icon.jsx
│   │   ├── ServiceCard.jsx
│   │   └── ThemeToggle.jsx
│   ├── App.jsx
│   ├── data.js
│   ├── main.jsx
│   └── styles.css
├── .gitignore
├── index.html
├── package.json
├── SUSTENTACION_REACT.md
└── vite.config.js
```

## Ejecutar localmente

```bash
npm install
npm run dev
```

Para verificar la compilación:

```bash
npm run build
npm run preview
```

## GitHub Pages

El repositorio incluye `.github/workflows/deploy.yml`. En GitHub:

1. Abrir **Settings > Pages**.
2. En **Source**, elegir **GitHub Actions**.
3. Hacer `git push` a `main`.
4. Revisar el despliegue desde **Actions**.

`vite.config.js` utiliza `base: './'` para que los archivos compilados funcionen correctamente dentro de una ruta de GitHub Pages.

## Identidad visual

El logo se carga desde la imagen pública asociada a TechLab.ec. Si se desea que el proyecto sea totalmente autónomo, se puede reemplazar `LOGO_URL` en `src/App.jsx` por una imagen propia ubicada en `public/`.
