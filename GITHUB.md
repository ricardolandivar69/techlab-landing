# Actualizar el repositorio de TechLab

## Opción recomendada: ya tienes el repositorio clonado

Conserva la carpeta oculta `.git` del repositorio actual y reemplaza los demás archivos con los de este proyecto.

Luego abre la terminal en la carpeta donde está `package.json`:

```bash
npm install
npm run dev
```

Si todo funciona:

```bash
git status
git add .
git commit -m "Renovar landing TechLab con React"
git push origin main
```

## Si todavía no tienes el repositorio en tu PC

Clona primero el repositorio y después reemplaza su contenido por este proyecto:

```bash
git clone https://github.com/ricardolandivar69/techlab-react.git
cd techlab-react
```

Copia los archivos de este ZIP dentro de esa carpeta y luego:

```bash
npm install
npm run dev
git add .
git commit -m "Renovar landing TechLab con React"
git push origin main
```

## Si el proyecto está en una carpeta nueva y quieres enlazarlo manualmente

```bash
git init
git branch -M main
git remote add origin https://github.com/ricardolandivar69/techlab-react.git
git remote -v
```

Si `origin` ya existe:

```bash
git remote set-url origin https://github.com/ricardolandivar69/techlab-react.git
git remote -v
```

Para publicar cambios:

```bash
git add .
git commit -m "Actualizar pagina TechLab"
git push -u origin main
```

> Si el repositorio remoto ya tiene historial y tu carpeta nueva no lo tiene, es más seguro usar la opción `git clone` para conservar la historia y evitar conflictos.

## GitHub Pages

Este proyecto incluye un workflow en `.github/workflows/deploy.yml`.

En GitHub abre:

**Settings > Pages > Source > GitHub Actions**

Cada `push` a `main` compila la aplicación y publica la carpeta `dist` automáticamente.
