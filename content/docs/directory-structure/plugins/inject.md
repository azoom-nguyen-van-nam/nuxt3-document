---
title: 'Inject Plugins'
description: 'Plugins in Nuxt 3'
---

# :fire: Plugins :fire:

:point_right: Inject to `nuxtApp` ~ `nuxt3Context`:

```javascript
export default defineNuxtPlugin(() => {
  return {
    provide: {
      pluginA
    }
  }
})
```

:point_right: Sử dụng:

```vue
<template>
  <div>
    {{ $pluginA('world') }}
  </div>
</template>
<script setup lang="ts">
const { $pluginA } = useNuxtApp()
</script>
```
