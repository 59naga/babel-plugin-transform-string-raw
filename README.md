babel-plugin-transform-string-raw
---

<p align="right">
  <a href="https://npmjs.org/package/@59naga/babel-plugin-transform-string-raw">
    <img src="https://img.shields.io/npm/v/@59naga/babel-plugin-transform-string-raw.svg?style=flat-square">
  </a>
  <a href="https://travis-ci.org/59naga/babel-plugin-transform-string-raw">
    <img src="http://img.shields.io/travis/59naga/babel-plugin-transform-string-raw.svg?style=flat-square">
  </a>
  <a href="https://codeclimate.com/github/59naga/babel-plugin-transform-string-raw/coverage">
    <img src="https://img.shields.io/codeclimate/github/59naga/babel-plugin-transform-string-raw.svg?style=flat-square">
  </a>
  <a href="https://codeclimate.com/github/59naga/babel-plugin-transform-string-raw">
    <img src="https://img.shields.io/codeclimate/coverage/github/59naga/babel-plugin-transform-string-raw.svg?style=flat-square">
  </a>
  <a href="https://gemnasium.com/59naga/babel-plugin-transform-string-raw">
    <img src="https://img.shields.io/gemnasium/59naga/babel-plugin-transform-string-raw.svg?style=flat-square">
  </a>
</p>

Installation
---
```bash
npm install @59naga/babel-plugin-transform-string-raw --save
```

replace `String.raw` with an [ponyfill function](https://github.com/59naga/string-raw).

Installation
---
```bash
npm install @59naga/babel-plugin-transform-string-raw --save
```

Example
---

**In**

```js
const arg1 = 'foo';
const arg2 = 'bar';
String.raw`hoge${arg1}fuga${arg2}piyo`;
```

**Out**

```js
var _stringRaw = String.raw || function(){...};
_stringRaw`hoge${arg1}fuga${arg2}piyo`;
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["@59naga/babel-plugin-transform-string-raw"]
}
```

### Via CLI

```bash
$ babel --plugins @59naga/babel-plugin-transform-string-raw script.js
```

### Via Node API

```js
require("babel-core").transform("code", {
  plugins: ["@59naga/babel-plugin-transform-string-raw"]
});
```

Development
---
Requirement global
* NodeJS v0.12.13
* Npm v3.7.1

```bash
git clone https://github.com/59naga/babel-plugin-transform-string-raw
cd babel-plugin-transform-string-raw
npm install

npm test
```

License
---
[MIT](http://59naga.mit-license.org/)
