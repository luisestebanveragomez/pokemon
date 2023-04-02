# Pokémon - Microfrontends

<b>Project created with yarn and lerna.</br>
Works with monorepos and standalone versioning.</b>

link of <b>[DEMO](https://pokemon-37647.web.app/)</b>

## List Microfrontends

- 🔥 @pokemon/root-config
- 🔥 @pokemon/header
- 🔥 @pokemon/home
- 🔥 @pokemon/detail

## System Communication

- 📡 Single Spa
- 📡 Custom Events
- 📡 Storage


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