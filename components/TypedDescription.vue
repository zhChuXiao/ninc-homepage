<template lang="pug">
  .typed-description(
    role='region',
    class='relative flex min-h-[32px] w-full max-w-[500px] items-center font-serif text-lg overflow-ellipsis whitespace-nowrap transition-all duration-300 ease-in-out',
    aria-label='动态打字效果'
  )
    span.quote-left(class='mx-1 text-[1.5em] text-gray-500') "
    p.typed-cursor-fix(ref='descriptionElement', class='m-0 overflow-hidden font-semibold text-ellipsis whitespace-nowrap text-[var(--main_text_color,#333)]', aria-live='polite')
    span.quote-right(class='mx-1 text-[1.5em] text-gray-500') "
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Typed from 'typed.js'

const descriptionElement = ref<HTMLElement | null>(null)

// 预定义描述
const predefinedDescriptions: string[] = [
  '嘿，你来啦！这里有一份专属的温暖待签收~',
  '今天也要做一颗闪闪发光的星星呀✨',
  '你的每一次点击，都是故事的开始。',
  '生活偶有裂缝，那是光照进来的地方。',
  'I hope you have a happy day every day.'
]

const initializeTyped = (): void => {
  if (!descriptionElement.value) return

  new Typed(descriptionElement.value, {
    strings: predefinedDescriptions,
    typeSpeed: 120,
    backSpeed: 80,
    showCursor: true,
    cursorChar: '|',
    loop: true
  })
}

onMounted(() => {
  initializeTyped()
})
</script>

<style scoped>
@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

.typed-cursor-fix + .typed-cursor {
  margin-left: 2px;
  animation: blink 0.7s infinite;
}
</style>
