<template>
  <div>
    <div class="pb-20">
      <div v-for="item in docsSidebar" :key="item.title">
        <NuxtLink
          :to="item.router"
          class="inline-flex items-center text-sm leading-6 mb-4 font-medium text-slate-700 hover:text-sky-500 hover:shadow-sm"
          activeClass="text-sky-500"
        >
          <span
            class="mr-4 p-[2px] !text-xl !leading-4 rounded ring-1 ring-slate-900/5 shadow-md"
            :class="item.icon"
          />
          {{ item.title }}
        </NuxtLink>
      </div>

      <h3 class="pb-2 mb-0">
        <NuxtLink
          to="/docs/rendering-modes"
          class="text-slate-900 hover:text-slate-500"
          activeClass="!text-sky-500"
          >Rendering Modes</NuxtLink
        >
      </h3>

      <h3 class="pb-2 mb-0">
        <NuxtLink
          to="/docs/state-management"
          class="mb-3 font-medium text-slate-500 hover:text-slate-900"
          activeClass="!text-sky-500 border-sky-500"
          >State management</NuxtLink
        >
      </h3>
      <p v-for="item in docsState" :key="item.title">
        <NuxtLink
          :to="item.router"
          class="block border-l pl-4 py-2 -ml-px border-slate-200 text-slate-500 hover:border-slate-400 hover:text-slate-900"
          activeClass="!text-sky-500 border-sky-500"
          >{{ item.title }}</NuxtLink
        >
      </p>

      <h3 class="pb-2 mb-0">Directory Structure</h3>
      <div class="mb-6 ml-4" v-for="folder in docsGuide" :key="folder.title">
        <h5 class="mb-3 font-medium text-slate-900">{{ folder.title }}</h5>
        <div class="space-y-2 border-l border-slate-100">
          <p v-for="item in folder.children" :key="item.title">
            <NuxtLink
              :to="item.router"
              class="block border-l pl-4 -ml-px border-slate-200 text-slate-500 hover:border-slate-400 hover:text-slate-900"
              activeClass="!text-sky-500 border-sky-500"
              >{{ item.title }}</NuxtLink
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DocsSidebar, DocsGuide, RenderingDocs } from '~~/types/docs'

const docsSidebar: Array<DocsSidebar> = unref(useDocsSidebar())
const docsGuide: Array<DocsGuide> = unref(useDocsGuide())
// const renderingDocs: Array<RenderingDocs> = unref(useRenderingDocs())
const docsState = unref(useStateManagement())
</script>
