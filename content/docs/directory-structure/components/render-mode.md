---
title: 'Render mode'

description: 'Render mode in nuxt 3'
---

# :fire: Render mode :fire:

#### Nuxt có thể dựa vào cách đặt tên của các component để đưa ra cơ chế render một cách linh hoạt.

- `.client` component

  - Component sẽ chỉ được hiển thị phía client nếu được thêm hậu tố `.client` trong tên.
  - Ví dụ:

    ```javascript
    | components/
    --| Comments.client.vue

    <template>
      <div>
        <Comments />
      </div>
    </template>
    ```

- `.server` component

  - Với hậu tố `.server`, component sẽ dự phòng cho các `.client` component .
  - Ở ví dụ sau, `Comments.server.vue` sẽ được render ở phía server (máy chủ), sau đó `Comments.client.vue` sẽ được hiển thị ở máy khách (client).

    ```javascript
    | components/
    --| Comments.client.vue
    --| Comments.server.vue

    <template>
      <div>
        <Comments />
      </div>
    </template>

    ```

:point_right: Ref: [https://nuxt.com/docs/guide/directory-structure/components#client-components](https://nuxt.com/docs/guide/directory-structure/components#client-components)
