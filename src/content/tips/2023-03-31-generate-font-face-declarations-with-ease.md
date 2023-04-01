---
type: tips
preview: /media/css_postfix_fontify.png
title: Introducing PostCSS Fontify
description: "Generate Font-Face Declarations with Ease"
date: 2023-03-31T19:34:33.078Z
divider: ""
draft: false
image:
  src: /media/css_postfix_fontify.png
  alt: A picture of a CSS
tags:
  - CSS
---

## Introducing PostCSS Fontify

Are you tired of manually writing out @font-face declarations for your custom fonts? Do you want a more efficient way to generate these declarations and integrate your fonts into your web projects? Look no further than PostCSS Fontify!

PostCSS Fontify is a new PostCSS plugin that makes it easy to generate @font-face declarations from your font files. Simply point the plugin to a directory containing your font files, and it will automatically generate the necessary CSS to integrate these fonts into your project.

One of the great features of PostCSS Fontify is that it only recognizes specific font file formats, such as woff2, woff, ttf, and otf. This ensures that only valid font files are used by the plugin, which helps to prevent errors and improve performance.

But that's not all - PostCSS Fontify also includes a naming convention for your font files, which helps to ensure that your font files are correctly matched with their corresponding @font-face declarations. The naming convention consists of two parts - the font name and the font weight and style - which are separated by a hyphen. This makes it easy to keep track of your font files and ensures that the correct font declarations are generated.

By using PostCSS Fontify, you can save time and effort when integrating custom fonts into your web projects. And because it's built on PostCSS, it's easy to integrate into your existing build process and works seamlessly with other PostCSS plugins.

## Example 1 - Basic Usage

Assuming that you have a directory called fonts in your project root folder, and that it contains:

- `Roboto-Bold.woff2`
- `Roboto-Bold.woff`
- `Roboto-Regular.woff2`
- `Roboto-Regular.woff`
- `Roboto-ThinItalic.woff2`
- `Roboto-ThinItalic.woff`

You can use **PostCSS Fontify** to generate the necessary `@font-face` declarations like this:

```css
@font-face {
  font-family: 'Roboto';
  font-weight: 700;
  font-style: normal;
  src: url('/fonts/Roboto-Bold.woff2') format('woff2'),
       url('/fonts/Roboto-Bold.woff') format('woff');
}

@font-face {
  font-family: 'Roboto';
  font-weight: 400;
  font-style: normal;
  src: url('/fonts/Roboto-Regular.woff2') format('woff2'),
       url('/fonts/Roboto-Regular.woff') format('woff');
}

@font-face {
  font-family: 'Roboto';
  font-weight: 200;
  font-style: italic;
  src: url('/fonts/Roboto-Thin.woff2') format('woff2'),
       url('/fonts/Roboto-Thin.woff') format('woff');
}
```

## Conclusion

In conclusion, if you're looking for a more efficient way to generate @font-face declarations from your font files, be sure to check out PostCSS Fontify. It's a powerful and easy-to-use plugin that can help streamline your web development workflow and make your custom fonts look amazing.