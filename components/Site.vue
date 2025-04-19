<template lang="pug">
  #site-container.site-container
    swiper.site-swiper(
      :space-between='0',
      :slides-per-view='"auto"',
      :pagination='{ clickable: true, type: "bullets" }',
      :mousewheel='true',
      :modules='[SwiperPagination, SwiperMousewheel]',
      :grab-cursor='true'
    )
      swiper-slide.site-slide(v-for='item in siteLinks', :key='item.title')
        a.projectItem.a(target='_blank', :href='item.url', :class='item.main ? "main" : ""')
          .projectItemLeft
            h1 {{ item.title }}
            p {{ item.desc }}
          .projectItemRight
            i(:class='item.icon')
</template>

<script lang="ts" setup>
import homeConfig from '~/assets/homeConfig'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Mousewheel } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/mousewheel'

const { siteLinks } = homeConfig
const SwiperPagination = Pagination
const SwiperMousewheel = Mousewheel
</script>

<style lang="sass" scoped>
$active-bullet-color: #747ef7

@mixin flex-center
  display: flex
  justify-content: center
  align-items: center

@mixin glass-effect
  backdrop-filter: blur(10px)
  -webkit-backdrop-filter: blur(10px)
  background-color: rgba(var(--background-color-rgb), 0.2)

@mixin responsive-height($height, $screen-size)
  @media screen and (max-width: $screen-size)
    height: $height

.site-container
  width: 100%
  max-width: 1200px
  margin: 0 auto
  padding-right: 20px
  box-sizing: border-box
  font-family: 'JinBuTi', 'PingFang SC', 'Microsoft YaHei', '微软雅黑', 'Hiragino Sans GB', 'STHeiti', 'WenQuanYi Micro Hei', sans-serif

.site-swiper
  width: 100%
  padding-bottom: 30px

  :deep(.swiper-pagination)
    bottom: 10px

  // 分页点
  :deep(.swiper-pagination-bullet)
    width: 70px
    height: 5px
    border-radius: 5px
    background: rgba(125, 125, 125, 0.6)
    opacity: 1
    margin: 0 4px

  // 活动分页点
  :deep(.swiper-pagination-bullet-active)
    background: $active-bullet-color
    box-shadow: 0 0 5px rgba(117, 129, 239, 0.5)

.site-slide
  width: auto
  height: auto
  display: flex

.projectItem
  margin: 7px
  display: flex
  background-color: var(--item_bg_color)
  padding: 15px
  height: 100px
  width: calc(100% - 30px) // 减去左右padding
  min-width: 200px
  max-width: 300px
  border-radius: var(--border-radius)
  border: 1px solid var(--border-color)
  @include glass-effect
  transition: opacity 0.5s ease, background-color 0.2s ease, border 0.2s ease, transform 0.3s ease
  position: relative
  overflow: hidden

  @include responsive-height(90px, 768px)
  @include responsive-height(80px, 480px)

  @media screen and (max-width: 480px)
    max-width: 250px

  .projectItemLeft
    transition: width 0.4s ease
    height: 100%
    width: 80%

    h1
      font-weight: 600
      font-size: 16px
      margin: 0
      transition: font-size 0.4s ease
      color: var(--text-color)

    p
      font-size: 12px
      width: 80%
      margin-top: 15px
      color: var(--item_left_text_color)

      @media screen and (max-width: 800px)
        display: none

  .projectItemRight
    position: absolute
    right: 20px
    bottom: -5px
    transform: rotate(20deg) scale(1.8)
    opacity: 0.5
    filter: blur(2px)
    transition: all 0.8s ease

    i
      font-size: 40px
      color: var(--shadow-color)

  &.main
    border: 1px solid $active-bullet-color

    h1, p, i
      color: $active-bullet-color
      font-weight: 600

  &:hover
    box-shadow: 0 8px 16px -4px #2c2d300c
    transform: scale(1.05)

    .projectItemRight
      opacity: 1
      filter: blur(0px)
      transform: rotate(0) scale(1)
      bottom: 10px

  &:active
    transform: scale(0.9)
    background-color: var(--item_hover_color)
</style>
