---
title: 'Naming Middleware'
description: 'Middleware in Nuxt 3'
---

# :fire: Middleware :fire:

- Sử dụng `defineNuxtRouteMiddleware` để định nghĩa và `definePageMeta` để sử dụng trong component.

```javascript
export default defineNuxtRouteMiddleware(() => {
  const { loggedInUser } = useAuthStore()
  if (loggedInUser.token) {
    return navigateToDefaultRouter()
  }
})
```
```javascript
<script setup>
definePageMeta({
  middleware: ["redirect"] // or middleware: 'redirect'
})
</script>
```

- Để đặt `middleware` chạy global thì chỉ cần thêm `.global` thôi. VD: `forbidden.global.ts`

```javascript
-| middleware/
---| redirect.ts
---| forbidden.global.ts
```
 