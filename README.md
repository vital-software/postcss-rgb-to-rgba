# PostCSS RGB-to-RGBA
[PostCSS][PostCSS] plugin that can convert rgb() colors to rgba()

```css
.button {
  color: rgba(rgb(106, 119, 138), 0.8);
}
```

```css
.button {
  color: rgba(106, 119, 138, 0.8);
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

[PostCSS]: https://github.com/postcss/postcss
