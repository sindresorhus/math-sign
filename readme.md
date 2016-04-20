# math-sign [![Build Status](https://travis-ci.org/sindresorhus/math-sign.svg?branch=master)](https://travis-ci.org/sindresorhus/math-sign)

> ES2015 [`Math.sign()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign) ponyfill

> Ponyfill: A polyfill that doesn't overwrite the native method


## Install

```
$ npm install --save math-sign
```


## Usage

```js
var mathSign = require('math-sign');

mathSign(5);
//=> 1

mathSign(-2);
//=> -1
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
