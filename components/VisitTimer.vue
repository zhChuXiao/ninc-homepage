<template lang="pug">
  .visit-timer-container(class='pointer-events-none z-[100] mt-10 hidden h-0 w-full md:block')
    .visit-timer(
      v-motion,
      class='pointer-events-auto bottom-[30px] z-[100] w-full cursor-pointer rounded-[20px] border border-[var(--border-color)] px-4 py-2 font-bold backdrop-blur-[10px] transition-all duration-300 ease-in-out hover:shadow-md',
      @mouseleave='handleMouseLeave',
      @mouseenter='handleMouseEnter',
      @click='toggleCalendar',
      :initial='{ opacity: 0, y: 50, scale: 0.5 }',
      :enter='{ opacity: 1, y: 0, scale: 1, transition: { duration: 300 } }'
    )
      .timer-content(class='flex w-full items-baseline gap-[5px] text-[0.8em]')
        i.iconfont.icon-clock-filling.font-normal
        span 停留时间 :
        .time(class='flex')
          template(v-for='(value, unit) in timeUnits', :key='unit')
            .time-wrapper(class='relative h-[1.2em] w-[1.6em] overflow-visible')
              Transition(name='flip')
                span.time-unit(class='inline-block h-[1.2em] w-[1.6em] text-center leading-[1.2em]', :key='value') {{ value }}
            span(v-if='unit !== "seconds"', class='separator mx-[2px]') :

    Transition(name='calendar')
      .calendar-popup(
        v-if='showCalendar',
        class='pointer-events-auto absolute bottom-[110px] left-5 z-[100] min-w-[188px] rounded-lg border border-[var(--border-color)] p-3 font-bold shadow-md backdrop-blur-[10px]',
        @mouseleave='handleMouseLeave'
      )
        .calendar-header(class='text-center font-bold')
          i.iconfont.icon-calendar-fill.font-normal
          | {{ dateTime.dateOnly }}
        .calendar-time(class='mt-[5px] flex items-center justify-center gap-2 font-bold')
          i.iconfont.icon-clock-filling.font-normal
          span {{ dateTime.weekday }}
          span {{ dateTime.timeWithoutSeconds }}
          span.pin-indicator(
            v-if='isCalendarPinned',
            class='animate-pin-in absolute top-0 left-0 -m-[10px] flex h-[30px] w-[30px] rotate-45 items-center justify-center rounded-full bg-[var(--background-color)] text-red-500 shadow-md'
          )
            i.iconfont.icon-thumbtack
</template>

<script setup lang="ts">
interface TimeUnits {
  hours: string
  minutes: string
  seconds: string
}

interface DateTime {
  dateOnly: string
  weekday: string
  timeWithoutSeconds: string
}

const useTimeManager = () => {
  const startTime = ref<number>(Date.now())
  const currentTime = ref<number>(Date.now())

  onMounted(() => {
    const timer = setInterval(() => {
      currentTime.value = Date.now()
    }, 1000)

    onUnmounted(() => clearInterval(timer))
  })

  const timeUnits = computed<TimeUnits>(() => {
    const totalSeconds = Math.floor((currentTime.value - startTime.value) / 1000)
    return {
      hours: Math.floor(totalSeconds / 3600)
        .toString()
        .padStart(2, '0'),
      minutes: Math.floor((totalSeconds % 3600) / 60)
        .toString()
        .padStart(2, '0'),
      seconds: (totalSeconds % 60).toString().padStart(2, '0')
    }
  })

  const dateTime = computed<DateTime>(() => {
    const now = new Date(currentTime.value)
    return {
      dateOnly: now.toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      weekday: now.toLocaleDateString('zh-CN', { weekday: 'long' }),
      timeWithoutSeconds: now.toLocaleTimeString('zh-CN', {
        hour: '2-digit',
        minute: '2-digit'
      })
    }
  })

  return {
    timeUnits,
    dateTime
  }
}

const showCalendar = ref<boolean>(false)
const isCalendarPinned = ref<boolean>(false)

const { timeUnits, dateTime } = useTimeManager()

const handleMouseEnter = (): void => {
  showCalendar.value = true
}

const handleMouseLeave = (): void => {
  if (!isCalendarPinned.value) {
    showCalendar.value = false
  }
}

const toggleCalendar = (): void => {
  isCalendarPinned.value = !isCalendarPinned.value
  showCalendar.value = true
}
</script>

<style scoped>
@keyframes pin-in {
  0% {
    transform: rotate(0deg) scale(0.5) translateY(-10px);
    opacity: 0;
  }
  30% {
    transform: rotate(0deg) scale(1.2) translateY(0);
    opacity: 1;
  }
  100% {
    transform: rotate(45deg) scale(1) translateY(0);
    opacity: 1;
  }
}

.animate-pin-in {
  animation: pin-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* 动画样式 */
.calendar-enter-active,
.calendar-leave-active {
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.calendar-enter-from,
.calendar-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.5);
}

.flip-enter-active,
.flip-leave-active {
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: absolute;
  width: 100%;
  left: 0;
}

.flip-enter-from {
  transform: translateY(20px);
  opacity: 0;
}

.flip-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
