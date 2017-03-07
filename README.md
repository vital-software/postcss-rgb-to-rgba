# PostCSS RGB-to-RGBA
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]
[PostCSS][PostCSS] plugin that can convert rgb() colors to rgba()

```css
.button {
  color: rgba(rgb(106, 119, 138), 0.8);
  background-color: rgba(rgb(55, 0, 203), 0.8);
}
```

```css
.button {
  color: rgba(106, 119, 138, 0.8);
  background-color: rgba(55, 0, 203, 0.8);
}
```

### Usage

```js
postcss([ require('postcss-rgb-to-rgba') ])
```

See [PostCSS][PostCSS] docs for examples for your environment.

--

### License

MIT © Vital Software

[npm-image]: https://badge.fury.io/js/postcss-rgb-to-rgba.svg
[npm-url]: https://npmjs.org/package/postcss-rgb-to-rgba
[travis-image]: https://travis-ci.org/vital-software/postcss-rgb-to-rgba.svg?branch=master
[travis-url]: https://travis-ci.org/vital-software/postcss-rgb-to-rgba
[PostCSS]: https://github.com/postcss/postcss
