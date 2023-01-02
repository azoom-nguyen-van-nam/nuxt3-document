---
title: 'State management'
description: 'State management vs Pinia Nuxt 3'
---

# :fire: State Management :fire:

### useState

```javascript
// In a component
const sharedState = useState('shared', 'defaultValue')

// In another component
const alsoSharedState = useState('shared')
```

`useState` chỉ dùng trong `setup` hoặc `Lifecycle Hooks`.

### Tại sao có ref() rồi vẫn cần useState(): (xem chi tiết ở các mục nhỏ)

- Chia sẻ `state` giữa các `components`
- `Singleton` và vấn đề để Memory leak
- Chia sẻ dữ liệu từ `server` --> `client` và `hydration`

### Pinia vs useState()

- `Pinia` chắc không còn xa lạ

- Nếu ứng dụng nhỏ và hệ thống dữ liệu đơn giản thì hãy sử dụng `useState` để tiết kiệm tài nguyên,
  còn ngược lại thì `Pinia` chắc chắn lựa chọn hàng đầu để tổ chức dữ liệu ở `Vue 3`/`Nuxt 3` hiện tại.
