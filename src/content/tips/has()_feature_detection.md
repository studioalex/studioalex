---
title: :has() feature detection
description: :has() feature detection with @supports(selector(…))
image: {
  src: /media/general.jpg,
  alt: A picture of a Coding
}
date: 2023-01-02
draft: false
tags: 
  - CSS
---

Detecting a CSS browser support for some features can be done inside CSS with `@supports`.
This can be used to display warnings to users on your website without the usage of JavaScript.

More information about the `/@supports` you get [here](https://developer.mozilla.org/en-US/docs/Web/CSS/@supports). Verify also the browser support of `:has()` pseudo-class [here](https://caniuse.com/css-has).

```css
/* this evaluate if the browser support the :has() usage */
@supports selector(:has(*)) {
  /* the asterisk in :has(*) is mandatory */
}
```

So now you can use `:has()` pseudo-class to show some nice warnings:

```css
/* Style warning block */
.no-support {
  margin: 1em 0;
  padding: 1em;
  border: 1px solid #ccc;
  background-color: #ff00002b;
  display: block;
}

/* Hide warning block in case :has() support is detected */
@supports selector(:has(*)) {
  .no-support {
    display: none;
  }
}
```
