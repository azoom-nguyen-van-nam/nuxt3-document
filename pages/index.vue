<template>
  <div class="beams pt-6">
    <the-header />
    <div class="max-w-5xl mx-auto mb-24">
      <p class="mb-6 text-slate-900 text-4xl tracking-tight text-center">
        Nuxt 3 Best Practices
      </p>
      <p class="text-lg text-slate-600 text-center max-w-3xl mx-auto">
        This operation manual including
        <code class="font-mono font-medium text-sky-500">nuxt 3</code>,
        <code class="font-mono font-medium text-sky-500">nuxt-content</code> and
        <code class="font-mono font-medium text-sky-500">tailwind css</code>.
      </p>
      <p class="text-center text-lg mt-4 text-slate-600 max-w-3xl mx-auto">
        Before getting started, please make sure you have installed the
        recommended setup
      </p>
      <ul class="text-lg mt-4 text-slate-600 max-w-3xl mx-auto">
        <li class="ml-72 font-mono font-medium text-red-500">
          Node.js > 16.11
        </li>
        <li class="ml-72 font-mono font-medium text-red-500">
          Visual Studio Code
        </li>
        <li class="ml-72 font-mono font-medium text-red-500">
          Volar Extension
        </li>
      </ul>
    </div>

    <div class="max-w-7xl mx-auto px-4 pb-24 lg:flex lg:items-center">
      <div class="lg:3/8 lg:mr-6 w-full mb-6 lg:mb-0">
        <div
          class="lg:h-[25rem] h-[28rem] bg-white ring-1 ring-slate-900/5 rounded-lg shadow-xl px-6 pt-6"
        >
          <div class="relative flex items-center mb-8">
            <span
              class="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-rose-400 opacity-75"
            ></span>
            <span class="ml-6 text-rose-400">{{ websiteName }}</span>
          </div>
          <div>
            <div
              class="relative mb-5 flex items-center text-sm text-slate-600"
              v-for="(item, index) in timelineContent"
              :key="index"
            >
              <div
                v-if="timelineContent.length !== index + 1"
                class="absolute left-1 top-6 w-px h-2.5 bg-slate-200"
              ></div>
              <div
                class="mr-3 w-2.5 h-2.5 bg-white rounded-full border-2 border-blue-500"
              ></div>
              <div class="break-word">{{ item }}</div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="lg:4/8 w-full lg:h-[30rem] h-[28rem] overflow-auto shadow-xl bg-slate-800 rounded-xl"
      >
        <div class="border-b border-slate-500/30">
          <div class="flex items-center h-8 space-x-1.5 px-3">
            <div
              v-for="i in 3"
              :key="i"
              class="w-2.5 h-2.5 bg-slate-600 rounded-full"
            ></div>
          </div>
        </div>
        <code class="text-sm text-slate-50 p-4">
          <div
            v-for="(item, index) in codeContent"
            :key="index"
            class="flex pl-4 mb-6 u-code"
            :style="{
              'animation-delay': `${3 * index}s`,
              width: `${item.length / 2 + 4}rem`
            }"
          >
            <div class="text-slate-600 pr-4">{{ index + 1 }}</div>
            <div class="text-slate-50">
              <span>{{ item }}</span>
            </div>
          </div>
        </code>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const websiteName = useAppName()
const timelineText: Array<string> = unref(usePageHomeTimeline())
const timelineContent = ref<Array<String>>([])

const codeContent: Array<string> = unref(usePageHomeCode())

const contentWriter = (item: string, time: number) => {
  setTimeout(() => {
    timelineContent.value.push(item)
  }, 3000 * time)
}

onMounted(() => {
  timelineText.forEach((item, index) => contentWriter(item, index))
})
</script>

<style scoped>
.beams {
  background-image: url('~/assets/img/docs/home-bg.jpg');
  background-size: 120rem;
  background-position: 0 1rem;

  background-repeat: no-repeat;
}

.u-code {
  border-right: 0.15em solid rgb(248 250 252);
  animation: flicker 3s steps(30, end);
  animation-fill-mode: forwards;
  overflow: hidden;
  opacity: 0;
  white-space: nowrap;
}

@keyframes flicker {
  0% {
    width: 0;
  }
  1% {
    opacity: 1;
  }
  99.9% {
    border-right: 0.15em solid rgb(248 250 252);
  }
  100% {
    opacity: 1;
    border: none;
  }
}
</style>
