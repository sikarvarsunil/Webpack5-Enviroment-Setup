  <h1>Webpack 5 setup from scratch + React with Atomic Structor</h1>
  <p>
    Webpack is a static module bundler for JavaScript applications — it takes all the code from your application and makes it usable in a web browser
  </p>
</div>

<h3 align="left">Webpack can be broken down into these 6 principals:</h3>
<p>Webpack can be broken down into these 6 principals:</p>
<ul align="left">
<li>Entry point</li>
<li>Output</li>
<li>Loaders</li>
<li>Plugins</li>
<li>Mode</li>
<li>Code splitting</li>
</ul>

<h3 align="left">Getting start</h3>
create folder and run commanad:

```bash
npm init -y
```
<h3 align="left">install webpack</h3>
run commanad and install webpack webpacl-cli webpack-dev-server

```bash
npm i -D webpack webpacl-cli webpack-dev-server
```
<h3 align="left">create webpack.config.js on project root</h3>

<h3 align="left">install Babel Loader to compile ES6/7 to ES5</h3>
run commanad and install @babel/core @babel/preset-env babel-loader @babel/preset-react

```bash
npm i -D @babel/core @babel/preset-env babel-loader @babel/preset-react
```
<h3 align="left">create babel.config.js on project root</h3>

<p align="left">cadd module.export = { presets: ["@babel/preset-env"] }</p>

<h3 align="left">install Sass Loader to compile Scss to css</h3>
run commanad and install sass sass-loader

```bash
npm i -D sass sass-loader
```

<h3 align="left">install Postcss Loader to handle fallback for older browser</h3>
install postcss postcss-preset-env postcss-loader

```bash
npm i -D postcss postcss-preset-env postcss-loader
```

<h3 align="left">Update src/index.html file in dist folder</h3>
install html-webpack-plugin

```bash
npm i -D html-webpack-plugin
```

<h3 align="left">auto clean dist folder before new build</h3>
clean dist folder with clean-webpack-plugin

```bash
npm i -D clean-webpack-plugin
```

<h3 align="left">Add  React and React-dom in project</h3>
Add React and React-dom

```bash
npm i react react-dom
```


