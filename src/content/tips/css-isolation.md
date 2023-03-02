---
title: CSS isolation
description: Property isolation in CSS refers to the ability to apply styles to
  specific properties of an element without affecting other properties.
image: {
  src: "/assets/css_2.jpg",
  alt: "A picture of a CSS"
}
date: 2023-02-23T11:08:33.722Z
draft: false
tags: ['CSS']
---
Property isolation in CSS refers to the ability to apply styles to specific properties of an element without affecting other properties. This is useful for cases where you want to modify the appearance or behavior of one aspect of an element without changing its other properties.

For example, suppose you have a button element on your webpage, and you want to change its color on hover. You could achieve this using the `:hover` pseudo-class in CSS:

```css
button:hover {
  background-color: #0066cc;
}
```

\
However, this would also affect other properties of the button element, such as its border and text color. To isolate the hover effect to just the background color, you can use the `isolation` property in CSS:

```css
button:hover {
  isolation: isolate;
  background-color: #0066cc;
}
```

\
This will ensure that only the background color of the button changes on hover, and that other properties remain unaffected.\
\
T﻿he Isolation property is extreme helpful when handling stacking context. Using the `before` pseudo-class to create a decorative element in front of an existing element, and then use the `z-index` property to move the existing element behind the new element, not only move it behind the parent element, but moves it behind all elements. 

U﻿sing `isolation` property is set to `isolate`, the element and its contents are completely separated from other elements on the page, and its styles are not affected by any other styles defined outside of its parent container. This way the `before` pseudo-class container can be moved only behind the parent container. Here is an example:

```css
.article-section {
  background-color: hsl();
}

.isolation {
  position: relative;
}

.isolation:before {
  content: open-quote;
  font-family: serif;
  font-weight: 900;
  font-size: 12rem;
  color: hsl(240 10% 60%);
  position: absolute;
  z-index: -1;
  top: -8rem;
  left: -2rem;
}

<section class="article-section">
  <h2>Title</h2>
  <div class="isolation">
    <p>...</p>
  </div>
</section>
```
