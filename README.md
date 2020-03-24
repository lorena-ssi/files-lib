# @lorena-ssi/files-lib

Manage file chunks to send via json messages

## Installation

This is a [Node.js](https://nodejs.org/) module available through the 
[npm registry](https://www.npmjs.com/). It can be installed using the 
[`npm`](https://docs.npmjs.com/getting-started/installing-npm-packages-locally)
or 
[`yarn`](https://yarnpkg.com/en/)
command line tools.

```sh
npm install @lorena-ssi/files-lib --save
```

## Usage

```js
const SplitFile = require("@lorena-ssi/files-lib")
const path = require('path')
const fs = require('fs')
const sp = new SplitFile()

const maxFileSize = 1024 // 1024 bytes per file
const outputPath = path.join(__dirname, '/outputFiles/output') // file path partition's prefix

var readStream = fs.createReadStream('./assets/flower.jpeg')
sp.split(readStream, maxFileSize, outputPath, filePaths => {
  console.log('This is an array of my new files:', filePaths)
})

```

## Tests

```sh
npm install
npm test
```

## Dependencies

- [debug](https://ghub.io/debug): small debugging utility
- [esm](https://ghub.io/esm): Tomorrow&#39;s ECMAScript modules today!

## Dev Dependencies

- [@babel/cli](https://ghub.io/@babel/cli): Babel command line.
- [@babel/core](https://ghub.io/@babel/core): Babel compiler core.
- [@babel/plugin-proposal-class-properties](https://ghub.io/@babel/plugin-proposal-class-properties): This plugin transforms static class properties as well as properties declared with the property initializer syntax
- [@babel/polyfill](https://ghub.io/@babel/polyfill): Provides polyfills necessary for a full ES2015+ environment
- [@babel/preset-env](https://ghub.io/@babel/preset-env): A Babel preset for each environment.
- [babel-loader](https://ghub.io/babel-loader): babel module loader for webpack
- [babel-preset-minify](https://ghub.io/babel-preset-minify): Babel preset for all minify plugins.
- [cross-env](https://ghub.io/cross-env): Run scripts that set and use environment variables across platforms
- [eslint](https://ghub.io/eslint): An AST-based pattern checker for JavaScript.
- [eslint-config-standard](https://ghub.io/eslint-config-standard): JavaScript Standard Style - ESLint Shareable Config
- [eslint-plugin-html](https://ghub.io/eslint-plugin-html): A ESLint plugin to lint and fix inline scripts contained in HTML files.
- [eslint-plugin-import](https://ghub.io/eslint-plugin-import): Import with sanity.
- [eslint-plugin-node](https://ghub.io/eslint-plugin-node): Additional ESLint&#39;s rules for Node.js
- [eslint-plugin-promise](https://ghub.io/eslint-plugin-promise): Enforce best practices for JavaScript promises
- [eslint-plugin-standard](https://ghub.io/eslint-plugin-standard): ESlint Plugin for the Standard Linter
- [strip-loader](https://ghub.io/strip-loader): Webpack loader to strip arbitrary functions out of your production code.
- [tap-spec](https://ghub.io/tap-spec): Formatted TAP output like Mocha&#39;s spec reporter
- [tape](https://ghub.io/tape): tap-producing test harness for node and browsers
- [webpack](https://ghub.io/webpack): Packs CommonJs/AMD modules for the browser. Allows to split your codebase into multiple bundles, which can be loaded on demand. Support loaders to preprocess files, i.e. json, jsx, es7, css, less, ... and your custom stuff.
- [webpack-cli](https://ghub.io/webpack-cli): CLI for webpack &amp; friends
- [webpack-dev-server](https://ghub.io/webpack-dev-server): Serves a webpack app. Updates the browser on changes.

## License

MIT
