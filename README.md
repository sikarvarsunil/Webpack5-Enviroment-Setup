  <h1>Webpack 5 setup from scratch + React with Atomic structor</h1>
  <p>
    Webpack is a static module bundler for JavaScript applications — it takes all the code from your application and makes it usable in a web browser
  </p>
</div>

<h2 align="center">Webpack can be broken down into these 6 principals:</h2>Webpack can be broken down into these 6 principals:
</h2>
<ul align="left">
<li>Entry point</li>
<li>Output</li>
<li>Loaders</li>
<li>Plugins</li>
<li>Mode</li>
<li>Code splitting</li>
</ul>

<h2 align="center">Getting start</h2>
create folder and run commanad:

```bash
npm init -y
```
<h2 align="center">install webpack</h2>
run commanad and install webpack webpacl-cli webpack-dev-server

```bash
npm i -D webpack webpacl-cli webpack-dev-server
```
<h2 align="center">create webpack.config.js on project root</h2>

<h2 align="center">install Babel Loader to compile ES6/7 to ES5</h2>
run commanad and install @babel/core @babel/preset-env babel-loader @babel/preset-react

```bash
npm i -D @babel/core @babel/preset-env babel-loader @babel/preset-react
```
<h2 align="center">create babel.config.js on project root</h2>

<p align="center">cadd module.export = { presets: ["@babel/preset-env"] }</p>

<h2 align="center">install Sass Loader to compile Scss to css</h2>
run commanad and install sass sass-loader

```bash
npm i -D sass sass-loader
```

<h2 align="center">install Postcss Loader to handle fallback for older browser</h2>
install postcss postcss-preset-env postcss-loader

```bash
npm i -D postcss postcss-preset-env postcss-loader
```

<h2 align="center">Update src/index.html file in dist folder</h2>
install html-webpack-plugin

```bash
npm i -D html-webpack-plugin
```

<h2 align="center">auto clean dist folder before new build</h2>
clean dist folder with clean-webpack-plugin

```bash
npm i -D clean-webpack-plugin
```

<h2 align="center">Add  React and React-dom in out project</h2>
Add React and React-dom

```bash
npm i react react-dom
```


