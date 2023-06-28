---
type: tips
title: How to use SASS in Sveltekit
description: An easy way to add and configure SASS in your SvelteKit project.
image:
  src: /media/sveltekit.png
  alt: A picture of a SvelteKit
date: 2023-06-28
draft: false
tags:
  - SVELTE
  - SVELTEKIT
preview: /media/sveltekit.png
---

Although Svelte/SvelteKit supports other CSS preprocessors, they are not included by default, so we need to manually install the necessary dependencies to use them in our project. In this blog post, we will discuss the simplest approach to achieving this.

To add **SASS** to **SvelteKit**, we need to install two packages: **SASS** itself and **svelte-preprocess**, which acts as a facilitator for using other languages with Svelte. It provides multiple features, sensible defaults, and a less disruptive development experience.

```bash
npm i -D sass svelte-preprocess
```

## Configure

It is recommended to use with `svelte.config.js` file located at the project root. For alternative usage, please refer to the [usage documentation](https://github.com/sveltejs/svelte-preprocess#usage-documentation).

```js
import preprocess from 'svelte-preprocess';

const config = {
  preprocess: preprocess({ ... })
}

export default config;
```

## Usage

Now you can use SASS in your project. For example, you can create SASS files directly (e.g., `src/styles/index.scss`) or use it directly in your Svelte components:

```js
<div class="heading-wrap">
  <h1>Section 1</h1>
</div>
<style lang="scss">
  .heading-wrap {
    padding-top: 2rem;
    h1 {
        margin: 0;
    }
  }
</style>
```

Don't forget to add the `lang="scss"` attribute to your style tag.

## Extended configuration

Often, it becomes necessary to import specific SASS files containing mixins, variables, or functions into your Svelte components. This repetitive work can be reduced by configuring these files as `prependData` in the `preprocessor`.

```js
import preprocess from 'svelte-preprocess';

const config = {
  preprocess: preprocess({
		scss: {
			prependData: `@use 'src/styles/' as *;`
		}
	})
}

export default config;
```

However, keep in mind that using the `@import` rule can increase the size of the CSS code because it will be integrated into every component. It is better to use the `@use` rule in this scenario.
