---
title: 'Breaking changes'
description: 'Breaking changes'
---

# :fire: Breaking changes :fire:
#### Do đã được giới thiệu từ trước nên ở đây mình sẽ điểm qua một số **breaking changes** (theo mình) thôi nhé:

### :fire: CompositionAPI:
```vue
<!-- Optional API (kiểu cũ) -->
<template>
    <h1></h1>
    <button @click="incrCounter">Click Me</button>
</template>
<script>
export default {
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        incrCounter: function() {
            this.counter += 1;
        }
    }
}
</script>

 <!-- Composition API ~ <script setup> -->
<template>
    <h1></h1>
    <button @click="incrCounter">Click Me</button>
</template>
<script setup>
    import { ref } from 'vue'

    let counter = ref(0);

    const incrCounter = function() {
        counter.value += 1;
    }
</script>
```
:point_right:  `Big changing` này mất khá nhiều thời gian để làm quen: (từ lifecycle hook, mindset viết, ref, reactive,....)
### Flagments ~ Multiple root
- Từ nay duyên kiếp bỏ lại phía sau không cần `single root` nữa
```vue
<template>
	<div>  
		<header>...</header>
		<main>...</main>
		<footer>...</footer>
	</div>
</template>
```
- Multiple Root
```html
<template>
	<header>...</header>
	<main  v-bind="$attrs">...</main>
	<footer>...</footer>  
</template>
```
### Một số thay đổi liên quan:
#### 1. Thay đổi tên hooks:
- `destroyed` => `unmounted`
- `beforeDestroy` => `beforeUnmount`
####  2. Bỏ **Filters**
```javascript
<p>{{ money | formatYen }}</p>

filters: {  
	formatYen: function (value) {  
		// format to ,000 and add 円
	}
}
```
#### 3. **v-if** có độ ưu tiên cao hơn **v-for** nếu được sử dụng chung trên 1 element (Trước đây ở vue 2 thì **v-for** > **v-if**)
#### 4. Thứ tự viết **binding** sẽ ảnh hưởng đến kết quả (viết sau ăn tất)
```html
<p id="x" v-bind="{id: 'y'}"> // Vue 2: id="x", Vue 3: id="y"
```
#### 5. **Keycode** không còn hỗ trợ nữa -> @keyup.q (sử dụng tên **kebab-case** - ngăn cách nhau bởi dấu -)
```html
// Vue 2
<input  v-on:keyup.13="submit" /> 				// nút enter
<input  v-on:keyup.112="showHelpText" /> 		// nút F1

// Vue 3
<input  v-on:keyup.enter="submit" />
<input  v-on:keyup.page-down="nextPage">
```
#### 6. Say good bye to **EventBus**
#### 7. Những thay đổi về **v-model**
+ Bỏ `.sync` và thay bằng biến số của `v-model`
```html
// Vue 2
<ChildComponent  :title.sync="pageTitle" />

// Vue 3
<ChildComponent  v-model:title="pageTitle" v-model:content="pageContent" />
```
+ Thay đổi cách khai báo `prop`

```javascript
export  default  {  
	props:  {
		modelValue: { 					// Vue 2
			type:  String,
			default:  'プラン名'
		},
		modelValue: String 				// Vue 3
	},  
	emits: ['update:modelValue'],
	methods:  {  
		changePageTitle(title)  {
			this.$emit('update:modelValue',  title) // Vue 3
			this.$emit('input', title) // Vue 2
		}
	}  
}
```
	