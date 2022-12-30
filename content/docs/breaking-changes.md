---
title: 'Breaking changes'
description: 'Breaking changes'
---

# :fire: Breaking changes :fire:
#### Do đã được giới thiệu qua các bài Seminar của các bậc tiền bối nên ở đây mình sẽ điểm qua nhanh một số **breaking changes** (theo mình) thôi nhé:
### :fire: CompositionAPI:
```vue
<!-- Optional API (kiểu cũ) -->
<template>
    <h1>{{ counter }}</h1>
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
    <h1>{{ counter }}</h1>
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
### :fire: Flagments ~ Multiple root
- Từ nay duyên kiếp bỏ lại phía sau không phải `single root` nữa
```vue
// Vue 2
<template>
	<div>  
		<header>...</header>
		<main>...</main>
		<footer>...</footer>
	</div>
</template>
```
- Multiple Root
```vue
// Vue 3
<template>
	<header>...</header>
	<main v-bind="$attrs">...</main>
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
<ChildComponent  v-model:title="pageTitle" />
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
			this.$emit('input', title) 				// Vue 2
			this.$emit('update:modelValue',  title) // Vue 3
		}
	}  
}
```
+ Multiple v-model
```html
// Vue 2
<ChildComponent
	:title="pageTitle"
	@update:title="pageTitle = $event"
	:content="pageContent"
	@update:content="pageContent = $event" 
/>

// Vue 3
<ChildComponent 
	v-model:title="pageTitle"
	v-model:content="pageContent" 
/>
```
#### 8. Khai báo các events emit
```html
// Vue 2
<button  v-on:click="$emit('accepted')">OK</button>

// Vue 3
<template>
	<div> 
		<p>{{ text }}</p>  
		<button  v-on:click="$emit('accepted')">OK</button>
	</div>
</template>
<script>  
	export  default  {
		props: ['text'],  
		emits: ['accepted']
	}  
</script>
```
:point_right: Nếu không khai báo events emits thì các event này sẽ được trigger 2 lần(1 cái của emits, 1 cái là native event)

### :fire: Proxy và Reactivity in depth
```js
// Vue 2
<div v-for="comp in comps">
Test
</div>
data() {
	return {
		comps:[]
	}
},
mounted() {
	this.comps[0] = 'Azoom'
}
```
Với cơ chế Vue 2 sử dụng kiểu kiểu Object.defineProperty để bắt sự kiện thay đổi thuộc tính, và chỉ xảy ra khi lúc Vue.set còn hoạt động (component được tạo) -> nên nếu mình update vào mảng, property của Object lúc mounted thì là đi luôn (watch deep là ví dụ cụ thể). Như ví dụ trên là cụ hiện ra màn hình trống trơn.

```js
// Giải pháp ở Vue 2 là:
this.$forceUpdate
// hoặc 
Vue.set(this.comps, 0, 'Azoom')
```
Ở vue 3 sử dụng `Proxy` nên câu chuyện trên đã được giải quyết
```js
// Vue 2
let A0 =  1  
let A1 =  2  
let A2 = A0 + A1  
console.log(A2) // 3  

A0 =  2  
console.log(A2) // Still 3
```

```js
// Vue 3
let A0 =  $ref(0)
let A1 =  $ref(1)  
// track on variable read  
const A2 =  $computed(()  => A0 + A1)  

// trigger on variable write
A0 =  2
```
:point_right: Kiểu object thì ưu tiên dùng `reactive`, còn `ref` sử dụng cho các datatype còn lại.

### :fire: Composables: Kẻ thay thế mixins có thể là helpers/utils
Sinh ra trong trường hợp mà mình muốn chia sẻ các `stateful logic` giữa các Component với nhau: format date, format yen, tracking event,... Trước đây chúng ta có công cụ để xử lý các vấn đề này như mixins, helpers/util. Nhưng càng ngày thì các công cụ này càng lộ ra nhiều vấn đề như [bài viết của a Tuấn](https://azoom.slack.com/archives/GV1L7LQJW/p1671437071682909) đã nêu.
:point_right: Vì thế Composables được sinh ra để xử lý các vấn đề còn tồn đọng này
```js
<script  setup>
import  {  useFeatureA  }  from  './featureA.js'
import  {  useFeatureB  }  from  './featureB.js'
import  {  useFeatureC  }  from  './featureC.js'

const  { foo, bar }  =  useFeatureA()  
const  { baz }  =  useFeatureB(foo)  
const  { qux }  =  useFeatureC(baz) 
</script>
```

### :fire: Suspense: Tăng trải nghiệm người dùng bằng cách tạm thời thay chỗ asyncComponent bằng một phần tử thay thế(ứng dụng điển hình là loading)
```html
<Suspense>
	<UserTable /> 	// UserTable là asyncComponent. Khi Component này đang "bận gọi API hoặc một tác vụ bất đồng bộ" thì element with fallback sẽ được render để thay thế
	<template #fallback>
		<the-loading text="Fetching users..." />
	</template>
</Suspense>
```

### :fire: Teleport: "Dịch chuyển" element mong muốn trong Component ra phạm vi bên ngoài
```html
<button @click="open = true">Open Modal</button>

<Teleport to="body">
	<div v-if="open" class="modal">
		<p>Hello from the modal!</p>
		<button @click="open = false">Close</button>
	</div>
</Teleport>
```
Nội dung của to sẽ là `CSS selector` hoặc `một thẻ trong DOM tree`. Trong ví dụ trên thì đang append vào thẻ body
:point_right: Hữu ích khi chơi với mấy anh popup, dialog, tooltip,... khi đó sẽ không bị overlap

### :fire: CSS Features: Thêm mới một số tính năng và cú pháp khi làm với CSS
#### Sử dụng v-bind để dùng biến trong CSS: Có thể bind các biến vào làm thuộc tính CSS
```html
<script setup>
const theme = { color: 'red' }
</script>
<template>
	<p>hello</p>
</template>
<style scoped>  
p { 
	color: v-bind('theme.color');
}  
</style>
```
### :fire: Hỗ trợ Typescript mượt mà hơn

### :fire: Vue 3 Global variable
Ở Vue 2 khi muốn cài thêm
```js
// Vue 2
Vue.use(Vuex) // chẳng hạn --> cài thằng vào đối tượng Vue global
```
```js
// Vue 3
import { createApp } from 'vue'
import App from './App.vue'
const myApp = createApp(App)
myApp.use(pinia) <---
myApp.mount('#app')
```
:point_right: Khởi tạo instance và chỉ cài vào instance, điều này giúp bảo vệ app khỏi các thư viện/plugin bên thứ ba, tránh việc chúng có thể làm thay đổi đối tượng Vue global.

### :fire: Hiệu năng
Về mục này thì a Duy đã có demo về bảng biểu rồi.
Về cá nhân em thì em cũng mới chỉ đọc và cảm nhận qua việc compile code thôi. Về cảm giác thì nói chung là nhanh và nhẹ hơn Vue 2 kha khá, dùng vite nên cảm giác khi sửa code xong lưu lại không phải đợi luôn.
