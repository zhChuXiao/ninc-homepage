<template>
  <svg :class="svgClass" v-bind="$attrs" :style="svgStyle" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'
// 定义 props 接收
const props = defineProps<{
  name: string
  color?: string
  width: string
  height: string
}>()
const svgStyle = computed(() => {
  if (props.color) {
    return { color: props.color }
  }
  return {}
})
const iconName = computed(() => `#icon-${props.name}`)
const svgClass = computed(() => {
  if (props.name) {
    return `svg-icon icon-${props.name}`
  }
  return 'svg-icon'
})
</script>

<style lang="scss" scoped>
.svg-icon {
  width: v-bind(width);
  height: v-bind(height);
  fill: currentColor;
  vertical-align: middle;
}
</style>
