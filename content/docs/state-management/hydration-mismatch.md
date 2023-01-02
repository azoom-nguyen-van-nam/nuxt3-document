---
title: Hydration mismatch
---

# :fire: Hydration Mismatch :fire:

Nghe giang hồ đồn rằng: ai chưa gặp lỗi này thì chưa làm Vue/Nuxt 3 :smile: (hoặc ông bật `SPA` mode)

Hiểu đơn giản thì lỗi này sẽ gặp khi cấu trúc DOM khi `pre-rendered` không trùng với cấu trúc DOM `dự kiến` ở `client` <br>
--> quá trình `hydration` không thể thực hiện hoàn toàn được

#### Tiện nói về Hydration:

> Hiểu ngắn gọn là, SSR trả về một web tĩnh (HTML, CSS) cho ae, bây giờ muốn cái web đó có thể xử lý được các event tới từ user (Click vào button, validate form,...) thì phải chạy một bước là `Hydrate` để gắn các việc xử lý sự kiện vào các Element HTML tương ứng (Button, input,...)

### Các nguyên nhân phổ biến của lỗi Hydration Mismatch

- **Case 1**: `Template` chứa cấu trúc HTML không hợp lệ và HTML được hiển thị đã được `corrected` bởi việc phân tích cú pháp HTML của trình duyệt.
  Ví dụ: `<div> không thể được đặt bên trong <p>`

```html
<p>
    <div>test</div>
</p>
```

nhưng trình duyệt sẽ render như sau:

```html
<p></p>
<div>test</div>
<p></p>
```

- **Case 2**: Sử dụng dữ liệu ngẫu nhiên (random number chằng hạn): nên không thể đảm bảo được giống nhau giữa 2 lần chạy riêng biệt trên Client và Server
  VD:

```vue
<template>
  <p>Home</p>
  <p v-for="user in users">{{ user.id }}: {{ user.name }}</p>
</template>
<script setup>
const users = getUsers()
const random = Math.floor(Math.random() * 10) % 10 // random data
users.value.push({ id: random, name: `user 1` })
</script>
```

Giải pháp đơn giản có thể sử dụng thư viện random support có `seed/salt` hay đơn giản dùng `useState` ở đây, vì `useState` sẽ lưu giá trị này và gửi về `client` nên yên tâm là không lệch đi đâu được :smile:, nhưng lưu ý `useState` sẽ là global state (cân nhắc khi sử dụng):
```vue
<script setup>
const users = getUsers()
const random = useState('readomNumber',() => Math.floor(Math.random() * 10) % 10)
users.value.push({ id: random.value, name: `user 1` })
</script>
```
Hoặc dùng `<ClientOnly>` or `v-if` + `onMounted` thôi :smile:
```vue
<template>
  <p>Home</p>
  <ClientOnly>
    <p v-for="user in users">{{ user.id }}: {{ user.name }}</p>
  </ClientOnly>
</template>
<script setup>
const users = getUsers()
const random = Math.floor(Math.random() * 10) % 10 // random data
users.value.push({ id: random, name: `user 1` })
</script>
```

- **Case 3**: Liên quan đến múi giờ chẳng hạn: Múi giờ `Server` và `Client` là khác nhau, mọi người đọc xong 2 ví dụ trên thì case này quá rõ ràng rồi nhỉ :smile:


## :fire: Kết luận :fire:
- Trong `document` của Vue 3 cũng đề cập đến, khi xuất hiện `hydration mismatch`, nó sẽ cố gắng điều chỉnh để hiện thị phù hợp với `client-side` nhưng điều này sẽ làm giảm hiệu suất của ứng dụng khi phải tính toán lại khi `render`. Tuy là `document` nói trong mọi trường hợp nó sẽ hoạt động bình thường nhưng về `UI` thì gần như chắc chắc sẽ bị `hỏng` (render lặp lại/ xoá element,...). 

- Như ví dụ ở **case 1** nó sẽ xuất hiện 2 chữ `test`

![hydration mismatch](/img/4.png)<br> <br>