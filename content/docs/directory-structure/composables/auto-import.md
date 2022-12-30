---
title: 'Composables'
description: 'Composables'
---


# :fire: Composables :fire:

- con hàng thay thế `mixins`, `helpers` và `ultis` đây rồi chứ đâu.
```javascript
// composables/index.ts
export const formatRole = (value) => {
  return value == 0 ? 'admin' : 'user' 
}
```

- có `auto-import` là dùng luôn thôi
```javascript
// in components
<template>
  <div>
    {{ formatRole(0) }}
  </div>
</template>
```
- Có thể dùng composable bên trong 1 composable khác.

- Mặc định chỉ có các file con trực tiếp: `composables/*.{ts, js}` được auto-import. <br/> 
Để giải quyết có thể config trong `nuxt.config` hoặc `import` nó vào `composables/index.ts` chẳng hạn.
```javascript
composables
 | - index.ts // scanned
 | - useFoo.ts // scanned
 | - nested
 | --- utils.ts // not scanned
```
