<template lang="pug">
  .home-left(v-motion-slide-left)
    .user-profile-image(v-motion-pop)
      img(alt='头像', @click.stop='toBlog', :src='profileImage')
      span.status-ball
    .left-div.left-des
      .left-des-item(v-for='item in descKeys', :key='item.name')
        SvgIcon(width='14px', height='14px', :name='item.icon')
        span {{ homeConfig[item.name] }}
    .left-div.left-tag
      .left-tag-item(v-for='item in tagList', :key='item') {{ item }}
    .left-div.left-time
      ul#line
        li.left-time-item(v-for='item in timeLine', :key='item.time')
          .focus
          .left-time-item-title {{ item.title }}
          .left-time-item-time {{ item.time }}
    VisitTimer
</template>

<script lang="ts" setup>
import avatar from '/avatar.jpg'
import homeConfig from '~/assets/homeConfig'
// 描述卡片
let descKeys = [
  {
    name: 'fullName',
    icon: 'user'
  },
  {
    name: 'location',
    icon: 'location'
  },
  {
    name: 'email',
    icon: 'email'
  }
]
// 头像
const profileImage = ref(avatar)
const toBlog = () => {
  window.open(homeConfig.url)
}
const tagList = ref(homeConfig.tag)

const timeLine = homeConfig.timeLine
</script>

<style lang="sass" scoped>

@mixin no-scrollbar
  &::-webkit-scrollbar
    display: none

@mixin flex-center
  display: flex
  justify-content: center
  align-items: center

@mixin glass-effect
  backdrop-filter: blur(10px)
  -webkit-backdrop-filter: blur(10px)
  background-color: rgba(var(--background-color-rgb), 0.2)
  border: 1px solid var(--border-color)
  border-radius: var(--border-radius)

$status-size: 2em

.home-left
  overflow-y: scroll
  width: 230px
  height: 100vh
  display: flex
  padding: 0 15px
  position: sticky
  top: 0
  left: 0
  align-items: center
  flex-direction: column
  @include no-scrollbar

  // 用户头像区域
  .user-profile-image
    @include flex-center
    margin-top: 50px
    border-radius: 50%
    box-shadow: 0 2px 8px var(--shadow-color)
    padding: 5px
    border: 1px solid var(--border-color)
    position: relative
    cursor: pointer

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
      transition: all 0.3s ease
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

  // 左侧区块
  .left-div
    flex-shrink: 0
    width: 100%
    margin-top: 15px
    padding: 20px
    @include glass-effect

  .left-des
    display: flex
    flex-direction: column
    justify-content: center

    .left-des-item
      display: flex
      align-items: center
      line-height: 20px
      font-size: 12px
      margin-bottom: 5px
      overflow: hidden
      font-family: 'ubuntu', sans-serif
      font-weight: 400
      letter-spacing: 0.5px

      i, svg
        width: 14px
        height: 14px
        fill: var(--fill)
        font-size: 18px
        margin-right: 10px

  // 标签区域
  .left-tag
    display: flex
    flex-direction: row
    flex-wrap: wrap
    padding: 14px

    .left-tag-item
      @include flex-center
      height: 28px
      margin: 0px 5px 5px 0
      padding: 10px
      font-size: 13px
      border-radius: 10px
      border: 1px solid var(--border-color)
      transition: box-shadow 0.3s ease

      &:hover
        box-shadow: 0 2px 8px var(--shadow-color)

  // 时间线区域
  .left-time
    padding-left: 15px

    #line
      width: 100%
      height: 200px
      font-size: 13px
      padding-left: 8px
      scroll-snap-type: y mandatory
      overflow-y: scroll
      @include no-scrollbar

      .left-time-item
        list-style: none
        position: relative
        font-size: 12px
        padding: 15px 0px 0px 15px
        border-left: 4px solid #aaa
        border-radius: 0
        scroll-snap-align: end
        color: var(--main_text_color)

        .focus
          width: 12px
          height: 12px
          border-radius: 22px
          background-color: rgb(255 255 255)
          border: 2px solid #aaa
          position: absolute
          left: -8px
          top: 50%

        .left-time-item-title
          font-size: 12px

        .left-time-item-time
          font-size: 10px
          color: var(--purple_text_color)

      // 第一个时间点高亮
      & li:first-child .focus:first-child
        background-color: #aaffcd
        animation: focus 1.8s ease infinite

@media (max-width: 800px)
  .home-left
    display: none

@keyframes focus
  0%
    box-shadow: 0 0 0 0 rgba(170, 255, 205, 0.9)
  70%
    box-shadow: 0 0 0 8px rgba(170, 255, 205, 0)
  100%
    box-shadow: 0 0 0 0 rgba(170, 255, 205, 0)
</style>
