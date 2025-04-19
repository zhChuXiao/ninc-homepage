<template lang="pug">
  .home-right
    header
      div
        .user-profile-image(v-motion-fade)
          img(alt='头像', @click='toBlog', :src='avatar')
          span.status-ball
      .welcome(v-motion-fade)
        | Hello I' m
        span.gradientText {{ homeConfig.name }}
      TypedDescription

      .iconContainer
        Contact

      .tanChiShe
        img#tanChiShe(alt='', :src='tanChiSheSrc')

    main.main-content
      .title
        i.iconfont.icon-copyright
        | Project
      //- 网站链接
      Site

      .title
        svg.icon(xmlns='http://www.w3.org/2000/svg', viewBox='0 0 1024 1024', version='1.1', t='1705257823317', p-id='7833')
          path(
            p-id='7834',
            d='M395.765333 586.570667h-171.733333c-22.421333 0-37.888-22.442667-29.909333-43.381334L364.768 95.274667A32 32 0 0 1 394.666667 74.666667h287.957333c22.72 0 38.208 23.018667 29.632 44.064l-99.36 243.882666h187.050667c27.509333 0 42.186667 32.426667 24.042666 53.098667l-458.602666 522.56c-22.293333 25.408-63.626667 3.392-54.976-29.28l85.354666-322.421333zM416.714667 138.666667L270.453333 522.581333h166.869334a32 32 0 0 1 30.933333 40.181334l-61.130667 230.954666 322.176-367.114666H565.312c-22.72 0-38.208-23.018667-29.632-44.064l99.36-243.882667H416.714667z'
          )
        | Skills
      Skills
</template>

<script lang="ts" setup>
const mainStore = useMainStore()
const { isDark } = storeToRefs(mainStore)
import snakeLight from '~/assets/svg/snake-Light.svg'
import snakeDark from '~/assets/svg/snake-Dark.svg'
import homeConfig from '~/assets/homeConfig'
import avatar from '/avatar.jpg'
// 头像

const toBlog = () => {
  // 添加跳转链接
  window.open(homeConfig.url)
}

const tanChiSheSrc = computed(() => {
  return isDark.value ? snakeDark : snakeLight
})
</script>

<style lang="sass" scoped>
$transition-normal: all 0.3s
$status-size: 2em

// 混合
@mixin flex-center
  display: flex
  justify-content: center
  align-items: center

@mixin hide-scrollbar
  &::-webkit-scrollbar
    display: none

@mixin responsive-hide
  @media screen and (max-width: 800px)
    display: none

@mixin responsive-show
  @media screen and (max-width: 800px)
    display: flex

.home-right
  width: calc(100% - 230px)
  display: flex
  padding: 0 20px
  padding-top: 20px
  position: relative
  flex-direction: column

  @media screen and (max-width: 800px)
    width: 100%

  // 头部
  header
    // 移动端显示的头像
    .user-profile-image
      display: none
      margin-top: 50px
      border-radius: 50%
      box-shadow: 0 2px 8px var(--shadow-color)
      padding: 5px
      border: 3px solid var(--border-color)
      position: relative
      cursor: pointer
      width: 165px
      height: 165px
      @include responsive-show

      img
        width: 150px
        height: 150px
        border-radius: 50%
        background-size: cover
        background-position: center

      .status-ball
        position: absolute
        background: #00c800
        width: $status-size
        height: $status-size
        border-radius: 20px
        border: 3px solid #eee
        bottom: 5px
        right: 15px
        @include flex-center
        transition: $transition-normal
        z-index: 1
        cursor: pointer
        overflow: hidden

        &::before
          content: '在线中'
          color: #00c800
          opacity: 0
          transition: opacity 0.3s ease-in-out, color 0.1s ease-in-out

      &:hover
        .status-ball
          width: 4.5em
          height: $status-size

          &::before
            opacity: 1
            color: #eee

    .welcome
      font-size: 65px
      font-weight: 800
      margin: 20px 0
      transition: $transition-normal

      .gradientText
        -webkit-background-clip: text
        position: relative
        -webkit-text-fill-color: transparent
        background-size: 200%
        background-position: 0%
        font-family: 'title'
        animation: backgroundSizeAnimation 10s ease-in-out infinite
        background-image: var(--gradient)

    .iconContainer
      width: 100%
      height: 60px
      display: flex
      align-items: center
      margin-top: 20px
      @include hide-scrollbar

    // 贪吃蛇图像
    .tanChiShe
      width: 85%
      transition: $transition-normal
      position: relative
      left: -10px

      img
        width: 100%
        height: 100%
        object-fit: cover

  main
    .title
      display: flex
      align-items: center
      font-size: 26px
      font-weight: 800
      margin: 2px 0
      transition: transform 0.4s ease
      i
        margin-right: 8px
        color: var(--fill)
        font-weight: 400
      svg
        margin-right: 8px
        font-weight: normal
        height: 26px
        width: 26px
        fill: var(--fill)

// 背景大小动画
@keyframes backgroundSizeAnimation
  0%
    background-position: 100%

  25%
    background-position: 50%

  50%
    background-position: 0%

  75%
    background-position: 50%

  100%
    background-position: 100%
</style>
