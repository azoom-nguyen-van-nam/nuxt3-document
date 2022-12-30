---
title: 'Migrate Middleware'
description: 'Middleware in Nuxt 3'
---

# :fire: Middleware :fire:

#### **Method global có liên quan đến chỗ này:**
- `navigateTo()` : ~ `redirect()` in Nuxt 2 nhưng `global`
- `abortNavigation()` : chặn chuyển hướng và có thể truyền vào `error`

#### **Migrate Nuxt 2 --> Nuxt 3:**
- `next()` -->  `Không làm gì`
- `redirect` --> `navigateTo` / `return`

#### **Middleware apply theo thứ tự global --> thứ tự khai báo trong component:**
```vue
-| middleware/
---| auth.ts
---| redirect.ts
---| forbidden.global.ts
```
```vue
<script setup>
definePageMeta({
  middleware: ["auth", "redirect"]
})
</script
```
:point_right: `forbidden` -> `auth` -> `redirect`

