import svgIcon from '@/components/SvgIcon.vue'
import 'virtual:svg-icons-register' // 注册脚本，不进行nuxt.config.ts里面的配置，会报错
export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.component('svg-icon', svgIcon)
})
