---
title: 'Dynamic routes'

description: 'Dynamic routes in nuxt 3'
---

# :fire: Dynamic routes :fire:

- Ở nuxt 3, những **tham số động** giờ đây sẽ được đặt trong cặp dấu ngoặc vuông(`[ ]`).
- Chúng ta có thể kết hợp nhiều `tham số` hoặc thậm chí là `"văn bản"` trong tên tệp hoặc thư mục. Ví dụ:

```javascript
-| pages/
---| index.vue
---| users-[group]/
-----| [id].vue
```

Và khi truy cập `/users-admins/123`, chúng ta sẽ lấy được thông tin của `group`, `id` thông qua `$route` object với _Options API_ hoặc `useRoute()` với _Composition API_:

```javascript
{{ $route.params.group }} // admins
{{ $route.params.id }} // 123
```

- Nếu tham số là _optional_, nó cần được đặt trong dấu "ngoặc vuông kép" (`[[ ]]`), ví dụ:

  ```javascript
  ~/pages/[[slug]]/index.vue
  hoặc
  ~/pages/[[slug]].vue

  => Sẽ match với cả route `/` và `/test`.
  ```

:point_right: Ref: [https://nuxt.com/docs/guide/directory-structure/pages#dynamic-routes](https://nuxt.com/docs/guide/directory-structure/pages#dynamic-routes)
