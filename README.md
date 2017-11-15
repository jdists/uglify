# @jdists/uglify

uglify as jdists processor

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coverage-image]][coverage-url]

* @see [jdists](https://github.com/zswang/jdists)

* @see [UglifyJS](https://github.com/mishoo/UglifyJS2)

## Example

```js
/*<jdists encoding="uglify">*/
function calc(number) {
  var result = 0
  for (var i = 0; i < number; i++) {
    result += i
  }
  return '数:' + result
}
/*</jdists>*/

/*<uglify>*/
function calc(number) {
  var result = 0
  for (var i = 0; i < number; i++) {
    result += i
  }
  return '数:' + result
}
/*</uglify>*/
```

## License

MIT © [zswang](http://weibo.com/zswang)

[npm-url]: https://badge.fury.io/js/%40jdists%2Fuglify
[npm-image]: https://badge.fury.io/js/%40jdists%2Fuglify.svg
[travis-url]: https://travis-ci.org/jdists/uglify
[travis-image]: https://travis-ci.org/jdists/uglify.svg?branch=master
[coverage-url]: https://coveralls.io/github/jdists/uglify?branch=master
[coverage-image]: https://coveralls.io/repos/jdists/uglify/badge.svg?branch=master&service=github