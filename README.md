# Pokémon - Microfrontends

<b>Project created with yarn and lerna.</br>
Works with monorepos and standalone versioning.</b>

link of <a href="https://pokemon-single-spa.web.app/" target="_blank"><b>DEMO</b></a>

## List Microfrontends

- 🔥 @pokemon/root-config
- 🔥 @pokemon/header
- 🔥 @pokemon/home
- 🔥 @pokemon/detail

## System Communication

- 📡 Single Spa
- 📡 Custom Events
- 📡 Storage


<img width="1185" alt="image" src="https://user-images.githubusercontent.com/2993052/229370658-0cb008bd-82ab-4af0-ad38-79e72dd3c5f2.png">


<img width="1188" alt="image" src="https://user-images.githubusercontent.com/2993052/229370647-cf3ee00e-336e-4fab-bf0e-513c19c0c0fc.png">



## 🚀 Getting Started

```sh
   npm install --global yarn
   git clone https://github.com/luisestebanveragomez/pokemon.git
   cd pokemon
   yarn install
```

## ✨ Run Microfrontends

### @pokemon/root-config (shell)

```sh
   cd packages/root
   yarn start
```
```sh
  open url: http://localhost:9000/
```


### @pokemon/header

```sh
   cd packages/header
   yarn start
```

### @pokemon/home

```sh
   cd packages/home
   yarn start
```

### @pokemon/detail

```sh
   cd packages/detail
   yarn start
```

## 🏗️ Build All Microfrontends

To build all packages at once using Lerna:

```sh
   lerna run build --parallel
```

This runs the `build` script in every package simultaneously.

## 📦 Deploy

### Step 1: Build all microfrontends

```sh
   lerna run build --parallel
```

### Step 2: Organize the `public/` folder

Create a `public/` folder at the root and copy **all** build outputs from each `packages/*/dist/`:

```
public/
├── index.html                    # Root HTML with import map
├── pokemon-root-config.js        # Root config bundle (from packages/root/dist/)
├── pokemon-root-config.d.ts      # Root config types
├── header/                       # Header microfrontend (from packages/header/dist/)
│   ├── pokemon-header.js         # Main bundle
│   ├── *.pokemon-header.js       # Code-split chunks
│   ├── components/               # All built components
│   ├── constants/
│   └── ...                       # ALL files from dist/
├── home/                         # Home microfrontend (from packages/home/dist/)
│   ├── pokemon-home.js           # Main bundle
│   ├── *.pokemon-home.js         # Code-split chunks
│   ├── adapters/
│   ├── components/
│   ├── hooks/
│   ├── pages/
│   └── ...                       # ALL files from dist/
└── detail/                       # Detail microfrontend (from packages/detail/dist/)
    ├── pokemon-detail.js         # Main bundle
    ├── *.pokemon-detail.js       # Code-split chunks
    ├── adapters/
    ├── components/
    ├── hooks/
    ├── pages/
    └── ...                       # ALL files from dist/
```

**Important:** Each folder must contain **all** files from the corresponding `packages/*/dist/` directory, not just the main `.js` bundle. Code-split chunks, components, hooks, pages, and all other generated files are required for the microfrontend to work correctly.

### Step 3: Configure the import map in `index.html`

The `index.html` must include **all** microfrontends in the import map, including the root-config and shared dependencies (`react`, `react-dom`):

```html
<script type="systemjs-importmap">
{
  "imports": {
    "single-spa": "https://cdn.jsdelivr.net/npm/single-spa@5.9.0/lib/system/single-spa.min.js",
    "react": "https://cdn.jsdelivr.net/npm/react@17.0.2/umd/react.production.min.js",
    "react-dom": "https://cdn.jsdelivr.net/npm/react-dom@17.0.2/umd/react-dom.production.min.js",
    "@pokemon/root-config": "./pokemon-root-config.js",
    "@pokemon/header": "./header/pokemon-header.js",
    "@pokemon/home": "./home/pokemon-home.js",
    "@pokemon/detail": "./detail/pokemon-detail.js"
  }
}
</script>
```

For production, update the URLs to your deployed domain:

```html
<script type="systemjs-importmap">
{
  "imports": {
    "single-spa": "https://cdn.jsdelivr.net/npm/single-spa@5.9.0/lib/system/single-spa.min.js",
    "react": "https://cdn.jsdelivr.net/npm/react@17.0.2/umd/react.production.min.js",
    "react-dom": "https://cdn.jsdelivr.net/npm/react-dom@17.0.2/umd/react-dom.production.min.js",
    "@pokemon/root-config": "https://pokemon-single-spa.web.app/pokemon-root-config.js",
    "@pokemon/header": "https://pokemon-single-spa.web.app/header/pokemon-header.js",
    "@pokemon/home": "https://pokemon-single-spa.web.app/home/pokemon-home.js",
    "@pokemon/detail": "https://pokemon-single-spa.web.app/detail/pokemon-detail.js"
  }
}
</script>
```

**Important:**
- The `@pokemon/root-config` entry is required. Without it, `System.import('@pokemon/root-config')` will fail.
- `react` and `react-dom` must be in the import map as shared dependencies. All microfrontends use them as webpack externals, so they must be loaded from the import map, not bundled into each microfrontend.

### Step 4: Deploy with Firebase

```sh
   firebase deploy
```

The `firebase.json` is configured with `"public": "public"` and rewrites all routes to `index.html` for SPA routing.
