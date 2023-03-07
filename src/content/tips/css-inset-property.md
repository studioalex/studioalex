---
title: CSS inset property
description: The inset property is a shorthand for the top, right, bottom, and
  left properties.
image: {
  src: /media/css_3.png,
  alt: A picture of a CSS
}
date: 2023-02-23T20:16:42.600Z
draft: false
tags:
  - CSS
---
The CSS property `inset` is used to specify the position of an element's box within its containing element, by specifying the distance of the box from the edges of the containing element.

The `inset` property accepts up to four values, which represent the distance of the box from the top, right, bottom, and left edges of the containing element, respectively. These values can be expressed as lengths, percentages, or the keyword `auto`.

Here is an example of how the `inset` property can be used to position an element:

```html
div {
  position: absolute;
  inset: 20px 10px 30px 10px;
}

```

In this example, the `div` element is positioned absolutely within its containing element, and its box is positioned 20 pixels from the top, 10 pixels from the right, 30 pixels from the bottom, and 10 pixels from the left.

The `inset` property is a shorthand for the `top`, `right`, `bottom`, and `left` properties, and can be used as a more concise way of specifying the position of an element. It is supported in all modern web browsers.
