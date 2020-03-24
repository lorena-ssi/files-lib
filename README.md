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
const Main = require("@lorena-ssi/files-lib")

const myModule = new Main()

console.log(myModule.version)

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

- [cross-env](https://ghub.io/cross-env): Run scripts that set and use environment variables across platforms
- [eslint](https://ghub.io/eslint): An AST-based pattern checker for JavaScript.
- [eslint-config-standard](https://ghub.io/eslint-config-standard): JavaScript Standard Style - ESLint Shareable Config
- [eslint-plugin-import](https://ghub.io/eslint-plugin-import): Import with sanity.
- [eslint-plugin-node](https://ghub.io/eslint-plugin-node): Additional ESLint&#39;s rules for Node.js
- [eslint-plugin-promise](https://ghub.io/eslint-plugin-promise): Enforce best practices for JavaScript promises
- [eslint-plugin-standard](https://ghub.io/eslint-plugin-standard): ESlint Plugin for the Standard Linter
- [tap-spec](https://ghub.io/tap-spec): Formatted TAP output like Mocha&#39;s spec reporter
- [tape](https://ghub.io/tape): tap-producing test harness for node and browsers

## License

MIT
