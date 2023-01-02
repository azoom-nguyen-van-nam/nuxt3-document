---
title: Data and Memory leak
---


# :fire: Vấn đề Data Leak và Memory Leak:fire:

### Doc Nuxt 3 có 1 lưu ý như này, mình sẽ làm rõ trong VD dưới đây nhé:
![issue](/_nuxt/assets/img/docs/state-management/3.png)<br>
`Link`: https://nuxt.com/docs/getting-started/state-management#best-practices

<br><br>

#### Với mode Universal, mình có 1 page và 1 composable như dưới, users sẽ dùng chung ở nhiều components. Có thể làm như sau:

```javascript
// /composables/index.ts
// TH1 using ref
const users = ref([{ id: 0, name: 'Admin' }])
export const getUsers = () => users
// TH2 using useState
export const getUsers = () =>
  useState('users', () => [{ id: 0, name: 'Admin' }])
```

```vue
<template>
  <p>Users</p>
  <p v-for="item in users">{{ item.id }}: {{ item.name }}</p>
</template>
<script setup>
const users = getUsers()
users.value.push({ id: 1, name: `user 1` }) // push to list users
console.log('users: ', users.value)
</script>
```

#### **TH1: using ref()**

Khi SSR, chúng ta có thể check phần `Network` của trình duyệt:

##### **User 1 truy cập vào trình duyệt:**

```
users: [
  { id: 0, name: 'Admin' },
  { id: 1, name: 'user 1' }
]
```

![Request 1](/_nuxt/assets/img/docs/state-management/1.png)<br>

##### **Sau đó User 2 vào trình duyệt**: trả về cả dữ liệu từ User 1 đã push vào (users có 3 phần tử)

```
users: [
  { id: 0, name: 'Admin' },
  { id: 1, name: 'user 1' },
  { id: 1, name: 'user 1' }
]
```

![Request 1](/_nuxt/assets/img/docs/state-management/2.png)<br> <br>

- Như chúng ta thấy, vì `ref` ~ `Singleton Pattern` nên khi đó người dùng hoàn toàn có thể bị rò rỉ dữ liệu (`data leak`), nếu trường hợp trên data push vào là tài khoản, mật khẩu vào thì toang :smile:
- Bên cạnh đó vì nó không được giải phóng sau mỗi `request`, khi số lượng request tăng -> biến `users` sẽ tăng đến 1 mức nào đó của bộ nhớ -> server sẽ `ngỏm` ~~~ `memory leak`

#### **TH2: using useState()**

- `Nuxt 3` đã giải quyết vấn đề trên bằng việc tạo ra `useState()`,
- Khi sử dụng `useState` biến sẽ tạo mới với mỗi yêu cầu --> không còn tình trạng như trên

### :fire: Kết luận :fire:

- Với `Vue 3` hay `SPA` mode trong `Nuxt`, vì các `client` là độc lập nên mọi thứ đều bình thường :smile:
- Với `SSR` bởi vì `server` chỉ chạy 1 lần nên **không đươc** sử dụng `ref` trong việc chia sẻ dữ liệu `global` (trong composables/store), thay vào đó là sử dụng `useState`

- VD: sử dụng `ref` bên trong `composables` như này thì `thoải mái` nhé, vì nó là biến scope nên không lo các vấn đề trên:

```javascript
export const getUsers = () => ref([{ id: 0, name: 'Admin' }])
```

:point_right: nhưng mà rõ ràng VD này không thể share được `users` giữa các `components` được rồi
