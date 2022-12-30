---
title: 'Component naming'

description: 'Component naming in nuxt 3'
---

# :fire: Component names :fire:

#### Tên của component sẽ được Nuxt xử lý dựa trên đường dẫn thư mục và tên mà component được đặt.

#### Ví dụ:

Tên của component sẽ là: `<BaseFooButton />` nếu ta tạo component với cấu trúc lồng nhau như sau:

```javascript
| components/
--| base/
----| foo/
------| Button.vue
```

:point_right: Ref: [https://nuxt.com/docs/guide/directory-structure/components#component-names](https://nuxt.com/docs/guide/directory-structure/components#component-names)
