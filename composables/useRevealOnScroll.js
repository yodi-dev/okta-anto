import { onMounted, onUnmounted } from 'vue'

export function useRevealOnScroll(target, options = {}) {
  const {
    threshold = 0.15,
    rootMargin = '0px 0px -60px 0px',
    once = true,
  } = options

  let observer

  onMounted(() => {
    if (!target?.value) return

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          target.value.classList.add('is-visible')

          if (once) {
            observer.unobserve(target.value)
          }
        } else if (!once) {
          target.value.classList.remove('is-visible')
        }
      },
      {
        threshold,
        rootMargin,
      },
    )

    observer.observe(target.value)
  })

  onUnmounted(() => {
    observer?.disconnect()
  })
}