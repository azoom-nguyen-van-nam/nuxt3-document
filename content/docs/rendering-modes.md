---
title: 'Rendering Modes'

description: 'Rendering Modes in nuxt 3'
---

# :fire: Rendering Modes :fire:

#### Ngoài **Client-side Rendering** và **Universal Rendering** đã được sử dụng ở bản tiền nhiệm thì Nuxt 3 mang đến cho chúng ta thêm 2 cơ chế render khác đó là **Hybrid Rendering** và **Static Rendering**.

### **Static Rendering (SSG)**
- Giống với `Universal app`, nội dung hiển thị của page được tạo ở phía server.
- Điểm khác biệt là, với `Universal app` thì HTML được tạo tại thời điểm `request` còn `static rendering` tạo ở "`build step`".  

![Static Rendering (SSG)](https://blog.vueschool.io/wp-content/uploads/2022/10/static-site-generation.jpg)


### **Hybrid Rendering**  
- Trước đây, mọi `route` / `page` của ứng dụng đều phải sử dụng cùng một chế độ render (`client-side` hoặc `universal`). <br/> Với Nuxt 3, `Hybrid Rendering` mang đến khả năng kết hợp các chế độ render khác nhau trong ứng dụng.  
- Sử dụng _[route rules](https://nitro.unjs.io/config/#routerules)_ ta có thể xác định `render mode` cho một nhóm các Nuxt routes.

![Hybrid Rendering](https://blog.vueschool.io/wp-content/uploads/2022/10/hybrid-rendering.jpg)

```javascript
export default defineNuxtConfig({
  // https://nuxt.com/docs/guide/concepts/rendering#route-rules
  routeRules: {
    // Static page generated on-demand, revalidates in background (ISG)
    '/blog/**': { swr: true },

    // Static page generated on-demand once (SSG - or at least mighty close)
    '/articles/**': { static: true },

    // Render these routes on the client (SPA)
    '/admin/**': { ssr: false },
  }
})
```

:point_right: Ref: [https://vueschool.io/articles/vuejs-tutorials/hybrid-rendering-in-nuxt-js-3/](https://vueschool.io/articles/vuejs-tutorials/hybrid-rendering-in-nuxt-js-3/)
