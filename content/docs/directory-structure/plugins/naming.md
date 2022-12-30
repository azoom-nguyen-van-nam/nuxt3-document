---
title: 'Naming Plugins'
description: 'Plugins in Nuxt 3'
---

# :fire: Plugins :fire:

- Giống với define `global-component` ở trên --> để define `mode` của `plugins` thì thêm hậu tố `.client`, `.server` ở tên file.

```javascript
plugins/
 | - pluginA.client.ts
 | - pluginB.server.ts
```

- Có thể sắp xếp `thứ tự` regist plugins, bằng cách thêm tiền tố:

```javascript
plugins/
 | - 1.pluginA.ts
 | - 2.pluginB.ts
```

#### :point_right: Có thể sử dụng **composable** trong **plugins** với điều kiện **composable** đó:

- không phụ thuộc vào `plugins` được `import` sau
- không liên quan đến `Vue lifecycle`
