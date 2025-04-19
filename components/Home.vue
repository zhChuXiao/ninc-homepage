<template lang="pug">
  .home-container(class='relative h-full min-h-screen w-full font-[ubuntu] text-[var(--main_text_color)] transition-colors duration-300 ease-in-out')
    .home-background(class='pointer-events-none fixed top-0 left-0 z-0 h-screen w-full bg-[var(--background-color)] bg-[image:var(--background-image)] bg-repeat')
    .home-filter(class='fixed top-0 left-0 -z-[99999999] h-screen w-full bg-[var(--back_filter_color)] backdrop-blur-[var(--back_filter)]')
    .home-main(class='relative mx-auto flex w-full max-w-[1150px] flex-row transition-transform duration-500 ease-in-out')
      Left
      Right
    footer.home-footer(class='absolute bottom-0 w-full bg-[var(--footer_bg_color)] p-2.5 text-center text-sm text-[var(--footer_text_color)] backdrop-blur-[var(--card_filter)]')
      | {{ homeConfig.fullName }} © {{ new Date().getFullYear() }}&emsp;|&emsp;
      a(target='_blank', href='https://beian.miit.gov.cn/') 鲁ICP备2023082510号-1
</template>

<script setup lang="ts">
import homeConfig from '~/assets/homeConfig'
</script>
