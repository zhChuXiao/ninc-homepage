<template lang="pug">
  .contact-section(class='flex justify-center gap-8 rounded-xl border border-[var(--border-color)] px-4 py-1 backdrop-blur-sm transition-all')
    template(v-for='contact in contacts', :key='contact.type')
      a.contact-item(v-if='contact.url', target='_blank', :style='{ "--hover-color": contact.hoverColor }', :href='contact.url')
        i(:class='contact.icon')
        span.tooltip {{ contact.type }}
    span.contact-item(@click='themeClick', :style='{ "--hover-color": isDark ? "#ffcc00" : "#666" }')
      i(:class='isDark ? "iconfont icon-yangguang" : "iconfont icon-yueliang"')
      span.tooltip {{ isDark ? '浅色' : '深色' }}
</template>

<script lang="ts" setup>
import homeConfig from '~/assets/homeConfig'
const contacts = ref(homeConfig.contacts)
const mainStore = useMainStore()
const { isDark } = storeToRefs(mainStore)
const themeClick = (event: MouseEvent) => {
  mainStore.toggleTheme(event)
}
</script>
<style lang="sass" scoped>


.contact-section


  .contact-item
    color: var(--text-color)
    font-size: var(--icon-size)
    cursor: pointer
    transition: transform 0.3s ease-in-out, color 0.3s ease-in-out
    position: relative

    .fas.fa-moon
      width: 20px
      height: 20px
      display: inline-flex
      justify-content: center
      align-items: center

    .icon-email
      position: relative
      top: 2px

    &:hover
      transform: translateY(-5px) rotate(10deg)
      color: var(--hover-color)

      .tooltip
        opacity: 1
        transform: translate(-50%, 0px)

    .tooltip
      position: absolute
      bottom: 100%
      left: 50%
      transform: translate(-50%, 10px)
      opacity: 0
      transition: opacity 0.3s ease, transform 0.3s ease
      white-space: nowrap
      pointer-events: none

  &:hover
    box-shadow: 0 2px 8px var(--shadow-color)
</style>
