---
title: 'Global component'

description: 'Global component in nuxt 3'
---

# :fire: Global component :fire:

### Đăng ký các **global component** (có thể sử dụng mà không cần import)

#### Option 1 - Chỉ đăng ký global cho **một số** component: Tạo các component theo cấu trúc thư mục:

```javascript
| components/
--| global/
-----| ComponentName.vue
```

#### Option 2 (_Không khuyến khích_) - Đăng ký global cho **tất cả** component trong ứng dụng với config:

```javascript
export default defineNuxtConfig({
  components: {
    global: true,
    dirs: ['~/components']
  }
})
```

:point_right: Ref: [https://nuxt.com/docs/guide/directory-structure/components#dynamic-components](https://nuxt.com/docs/guide/directory-structure/components#dynamic-components)
