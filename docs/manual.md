# Parcel ReactApp with eslint

## Building a web app with Parcel

This repo was building by [parcel](https://parceljs.org/getting-started/webapp/).

###  A. Start parcel to render webpage

- Install parcel 

```
npm install --save-dev parcel 
```

- set index.html

src/index.html

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8"/>
    <title>My First Parcel App</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
  </body>
</html>
```

- rend index.html 

```
npx parcel src/index.html 
```

###  B. Start parcel to render react

prepare the initial file: `src/index.html`, `src/index.js`, src/App.js:

-   `src/index.html`

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>My Parcel App</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="index.js"></script>
  </body>
</html>
```

-   `src/index.js`

```js
import { createRoot } from "react-dom/client";
import { App } from "./App";

const container = document.getElementById("app");
const root = createRoot(container)
root.render(<App />);
```

-   `src/App.js`

```js
export function App() {
  return <h1>Hello world!</h1>;
}
```

- install react react-dom

```
npm i --save react react-dom  
```

- Add `"start"` scripts to the `package.json` file  

```
"scripts": {
    "start": "parcel src/index.html"
}
```

- run react

```sh
npm start
```

or

```sh
npx parcel src/index.html
```

### `.gitignore`

- `.gitignore`

```shell
/node_modules
/.parcel-cache
/dist
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
```

## install ESLint version 8

- show the versions list
```
npm show eslint versions --json
```
- install eslint@8.57.0
```
npm install --save-dev eslint@8.57.0 eslint-plugin-react
```

2. Create `.eslintrc.js`

```
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the React version
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off', // Disable the rule requiring React in scope
    'quotes': ['error', 'single'], // Enforce single quotes
  },
};
```

3. Add ESLint Scripts to `package.json`

```
{
  "scripts": {
    "lint": "eslint 'src/**/*.{js,jsx}'"
  }
}
```

4. Run linx and fix

```
npm run lint -- --fix 
```