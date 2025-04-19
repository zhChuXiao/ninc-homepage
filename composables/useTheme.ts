import { useDark, useToggle } from '@vueuse/core'
import { onMounted } from 'vue'
import type { UseDarkOptions, BasicColorSchema } from '@vueuse/core'

interface ThemeHook {
  isDark: Ref<boolean>
  changeTheme: (event: MouseEvent) => void
}

const THEME_CONFIG: UseDarkOptions = {
  selector: 'html',
  attribute: 'data-theme',
  valueDark: 'dark',
  valueLight: 'light',
  initialValue: 'light' as BasicColorSchema,
  disableTransition: false
}

/**
 * 主题切换Hook，支持圆形过渡动画效果
 * @returns {ThemeHook} 包含isDark状态和changeTheme函数
 */
export function useTheme(): ThemeHook {
  const isDark = useDark(THEME_CONFIG)
  const toggleDark = useToggle(isDark)

  // 确保初始值为亮色
  onMounted(() => {
    if (isDark.value) {
      toggleDark(false)
    }
  })

  /**
   * 带有过渡动画的主题切换函数
   * @param {MouseEvent} event 点击事件，用于获取动画起始位置
   */
  const changeTheme = (event: MouseEvent): void => {
    const { clientX: x, clientY: y } = event
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    )

    if (!document.startViewTransition) {
      toggleDark()
      return
    }

    const transition = document.startViewTransition(async () => {
      toggleDark()
    })

    transition.ready.then(() => {
      const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`]

      document.documentElement.animate(
        {
          clipPath: isDark.value ? [...clipPath].reverse() : clipPath
        },
        {
          duration: 400,
          easing: 'ease-in',
          pseudoElement: isDark.value
            ? '::view-transition-old(root)'
            : '::view-transition-new(root)'
        }
      )
    })
  }

  return {
    isDark,
    changeTheme
  }
}
