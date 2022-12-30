---
title: 'Plugins'
description: 'Plugins in Nuxt 3'
---

# :fire: Plugins :fire:

- Định nghĩa bằng `defineNuxtPlugin(() => {})`
- Tất cả `plugins` đều được `auto-registered` nên **không cần import** trong `nuxt.config`
- Trong những file nào được `auto-registered` :

```javascript
plugins/
 | - pluginA.ts // registered
 | - otherPlugin
 | --- A.ts // not registered
 | --- B.ts // not registered
 | --- index.ts // registered
```
