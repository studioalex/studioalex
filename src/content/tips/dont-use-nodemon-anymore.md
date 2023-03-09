---
type: tips
title: Node.js make Nodemon abundant
description: Since Node 18.11 you don't need Nodemon anymore.
date: 2023-03-07T16:57:02.885Z
draft: false
tags:
  - JS
  - NODE
image:
  src: /media/nodemon_deprecated.png
  alt: Native replacement for nodemon.
preview: /media/nodemon_deprecated.png
---

## Nodemon done a great job, but ...

Until today, Nodemon helped to restart processes during development in Node.js to apply changes.
This worked very well in the majority of developments, although there were problems with Typescript and Nodemon.

Since **Node.js 18.11+**, Node supports watch mode with the `--watch` parameter. This makes Nodemon obsolete.

When you start a Node.js application from the command line using the `--watch` parameter, it sets up a file watcher that automatically restarts your application whenever changes are made to the source code. This provides a few benefits:

Here are some benefits of using `--watch` instead of nodemon:

- **No additional dependencies:** Since `--watch` is built into Node.js, there is no need to install any additional dependencies, which can simplify the setup process and reduce the risk of version conflicts between packages.
- **Lightweight:** `--watch` is a lightweight solution that only provides file watching functionality. This can be beneficial if you don't need the additional features that nodemon provides, such as support for different file extensions or ignoring specific files or directories.
- **Low overhead:** Since `--watch` is built into Node.js, it can have lower overhead than nodemon, which relies on an additional process to monitor file changes.
- **More control:** The `--watch` option provides more fine-grained control over how file changes are detected and handled. For example, you can specify which files or directories to watch, how frequently to check for changes, and what actions to take when changes are detected.

```bash
node --watch app.js
```

Watch all files changes in multiple locations.

```bash
node --watch-path=./src --watch-path=./lib app.js
```
