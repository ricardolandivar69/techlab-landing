# Guía rápida para sustentar TechLab en React

## 1. ¿Qué es React en este proyecto?

React es la librería que organiza la interfaz en componentes. En lugar de escribir toda la página como un único HTML gigante, la aplicación se divide en piezas reutilizables.

En este proyecto las piezas principales son:

- `App.jsx`: organiza toda la página.
- `ServiceCard.jsx`: representa una tarjeta de servicio.
- `ThemeToggle.jsx`: controla el switch de tema.
- `Icon.jsx`: reutiliza los íconos SVG.

## 2. ¿Dónde está el HTML?

Existe `index.html`, pero contiene principalmente el elemento:

```html
<div id="root"></div>
```

React se monta dentro de ese elemento desde `src/main.jsx`.

El contenido visual se escribe con JSX. JSX se parece a HTML, pero realmente forma parte del código JavaScript de React.

## 3. ¿Qué hace `main.jsx`?

Es el punto de entrada de la aplicación:

```jsx
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
```

Busca el `#root` de `index.html` y coloca ahí el componente `App`.

## 4. ¿Por qué usar componentes?

Porque permiten separar responsabilidades y reutilizar estructura.

Por ejemplo, las cuatro tarjetas de servicio no están escritas cuatro veces en `App.jsx`. Los datos están en `data.js` y React crea cada tarjeta con:

```jsx
services.map((service) => (
  <ServiceCard service={service} />
))
```

Esto hace el código más mantenible: para agregar un servicio, basta con agregar un objeto al arreglo.

## 5. ¿Qué es `useState`?

`useState` permite guardar datos que pueden cambiar mientras se usa la página.

Ejemplos del proyecto:

```jsx
const [theme, setTheme] = useState('dark')
const [menuOpen, setMenuOpen] = useState(false)
const [openService, setOpenService] = useState(null)
```

- `theme` recuerda si el sitio está claro u oscuro.
- `menuOpen` sabe si el menú móvil está abierto.
- `openService` sabe qué servicio tiene sus detalles visibles.

Cuando cambia un estado, React vuelve a renderizar la parte necesaria de la interfaz.

## 6. ¿Qué es `useEffect`?

`useEffect` ejecuta una acción cuando cambia un dato del componente.

En este caso, cuando cambia `theme`:

```jsx
useEffect(() => {
  document.documentElement.dataset.theme = theme
  localStorage.setItem('techlab-theme', theme)
}, [theme])
```

Actualiza el atributo del documento y guarda la preferencia en `localStorage`.

## 7. ¿Cómo funciona CSS con React?

React no reemplaza CSS. `main.jsx` importa:

```jsx
import './styles.css'
```

El archivo `styles.css` contiene variables, Grid, Flexbox y media queries. React controla la estructura e interacciones; CSS controla la apariencia.

## 8. ¿Qué hace Vite?

Vite es la herramienta que ejecuta y compila el proyecto React.

- `npm run dev`: servidor para desarrollar.
- `npm run build`: crea la versión optimizada en `dist/`.
- `npm run preview`: permite revisar esa versión compilada.

## 9. Flujo completo que puedes explicar en clase

1. El navegador abre `index.html`.
2. `index.html` carga `src/main.jsx`.
3. `main.jsx` monta `<App />` dentro de `#root`.
4. `App.jsx` construye las secciones y utiliza componentes.
5. Los datos de servicios vienen de `data.js`.
6. Los estados de React controlan el tema, menú y servicios expandibles.
7. `styles.css` adapta la página a desktop, tablet y móvil.
8. Vite compila todo para producción.

## 10. Preguntas que podría hacer el docente

**¿Por qué React si se puede hacer con HTML normal?**
Porque permite dividir la interfaz en componentes reutilizables y manejar estados e interacciones de forma organizada.

**¿Qué diferencia existe entre HTML y JSX?**
HTML es el lenguaje de marcado del documento. JSX es una sintaxis usada dentro de JavaScript que React transforma en elementos de interfaz.

**¿Qué significa estado?**
Es información que puede cambiar durante la ejecución y que, al cambiar, hace que React actualice la interfaz.

**¿Qué componente reutilizaste?**
`ServiceCard`. Se utiliza varias veces con datos diferentes.

**¿Dónde está JavaScript?**
En `App.jsx`, `main.jsx`, los componentes y `data.js`. Los archivos `.jsx` siguen siendo JavaScript, pero permiten escribir JSX.

**¿Para qué sirve Vite?**
Para levantar el servidor de desarrollo y generar la versión optimizada que se publica.

**¿La página tiene backend?**
No. Esta versión es una aplicación de frontend. Los botones de contacto abren servicios externos como WhatsApp e Instagram.
