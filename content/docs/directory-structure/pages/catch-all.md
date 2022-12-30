---
title: 'Catch-all route'

description: 'Catch-all route in nuxt 3'
---

# :fire: Catch-all Route :fire:

- Nếu ta muốn bắt được tất cả các route, cần tạo và sử dụng file có tên như `[...slug].vue`.

```javascript
<template>
  <p>{{ $route.params.slug }}</p>
</template>
```

Navigating đến `/hello/world` sẽ hiển thị:

```javascript
<p>["hello", "world"]</p>

```

:point_right: Ref: [https://nuxt.com/docs/guide/directory-structure/pages#catch-all-route](https://nuxt.com/docs/guide/directory-structure/pages#catch-all-route)
