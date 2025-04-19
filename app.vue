<template lang="pug">
  Html(:lang='locale')
    Head
      Title {{ homeConfig.fullName }}
    Body
      Home
</template>

<script setup lang="ts">
import homeConfig from '~/assets/homeConfig'
const locale = ref('zh-CN')

if (import.meta.client) {
  console.log(
    '%c 个人主页 %c ninc.top ',
    'background:linear-gradient(to right, #ff6b6b, #ff9e7d); color:white; font-size:16px; border-radius:8px 0 0 8px; padding:5px 10px; font-weight:bold; box-shadow:0 2px 5px rgba(0,0,0,0.2);',
    'background:linear-gradient(to right, #38a3a5, #57cc99); color:white; font-size:16px; border-radius:0 8px 8px 0; padding:5px 10px; font-weight:bold; box-shadow:0 2px 5px rgba(0,0,0,0.2);'
  )
  console.log(
    '%c Copyright © 2025 %c 呢喃ninc ',
    'background:linear-gradient(to right, #8338ec, #3a86ff); color:white; font-size:16px; border-radius:8px 0 0 8px; padding:5px 10px; font-weight:bold; box-shadow:0 2px 5px rgba(0,0,0,0.2);',
    'background:linear-gradient(to right, #fb5607, #ff9000); color:white; font-size:16px; border-radius:0 8px 8px 0; padding:5px 10px; font-weight:bold; box-shadow:0 2px 5px rgba(0,0,0,0.2);'
  )
}

// 禁用右键菜单
if (import.meta.client) {
  document.addEventListener('contextmenu', function (event) {
    event.preventDefault()
  })
}
</script>
