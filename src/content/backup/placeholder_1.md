---
title: Placeholder for Design
description: Should make it easier to design the tips blog.
image: placeholder.jpg
date: 2023-01-02
draft: false
tags: ['GENERAL']
---

## Vue reactive props destructure

The reactivity in Vue 3.4 will be updated and the use of default values is much easier without breaking the reactivity.
The updated declaration is also easier to read.

### Props usage in TypeScript with setting default values

```ts
const props = withDefaults(
  defineProps<{ visible: boolean }>(),
  { visible: true}
)

props.visible
```

### Props reactive with default values

```ts
const {
  visible = true
} = defineProps<{ visible: boolean }>()

visible // visible stays reactive
```
