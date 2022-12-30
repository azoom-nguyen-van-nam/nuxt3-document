---
title: 'SEO and Meta'
description: 'SEO and Meta in nuxt 3'
---

# :fire: Head Tag :fire:

## App Head

- Sử dụng `app.head` trong `nuxt.config.ts` để tuỳ chỉnh phần nội dung `head` cho toàn bộ ứng dụng

```javascript
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      title: 'Abothellona',
      meta: [
        { name: 'description', content: 'My amazing site.' }
      ],
    }
  }
})

```

## definePageMeta

- Xác định metadata cho từng route của ứng dụng.
- Sử dụng `definePageMeta` function:

```javascript
<script setup>
definePageMeta({
  title: 'Abothellona'
})
</script>

```

## useHead

- Là một `composable function`, cho phép quản lý các `head tags` một cách linh hoạt.
- Các thuộc tính của `useHead` có thể là _dynamic_, chấp nhận các thuộc tính `ref`, `computed` và `reactive`.

```javascript
<script setup lang="ts">
const desc = ref('My amazing site.')
useHead({
  title: 'Abothellona',
  meta: [
    { name: 'description', content: desc }
  ]
})
</script>

```

- :point_right: Ref:

  - [https://nuxt.com/docs/getting-started/seo-meta](https://nuxt.com/docs/getting-started/seo-meta)
  - [https://nuxt.com/docs/guide/directory-structure/pages#page-metadata](https://nuxt.com/docs/guide/directory-structure/pages#page-metadata)
