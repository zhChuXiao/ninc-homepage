<template lang="pug">
  #skill.skill(role='region', class='flex w-full flex-wrap gap-[10px] rounded-[20px] py-[10px] pb-[60px] focus:shadow-[0_0_0_2px_var(--border-color)] focus:outline-none', aria-label='技能列表')
    .skill-item(
      v-for='item in skillsList',
      role='img',
      class='sm:max-w-[600px]:w-[45px] sm:max-w-[600px]:h-[45px] relative flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-[13px] transition-all duration-300 ease-in-out hover:translate-y-[-2px] hover:shadow-md focus:translate-y-[-2px] focus:shadow-md focus:outline-none focus-visible:outline-offset-[2px] focus-visible:outline-[var(--primary-color,#1a73e8)]',
      :style='{ backgroundColor: item.color }',
      :key='item.name',
      :class='{ "border-2 border-solid border-gray-300 dark:border-gray-700": item.border }',
      :aria-label='`技能: ${item.name}`'
    )
      SvgIcon(width='30px', height='30px', aria-hidden='true', :name='item.icon')
</template>

<script setup lang="ts">
import homeConfig from '~/assets/homeConfig'

interface SkillItem {
  name: string
  icon: string
  color: string
  border?: boolean
}

const { skillsList } = homeConfig as { skillsList: SkillItem[] }
</script>

<style scoped>
@media (max-width: 600px) {
  .skill {
    justify-content: center;
  }
}
</style>
