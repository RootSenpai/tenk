export default defineNuxtPlugin(() => {
  if (typeof window === 'undefined') return

  document.documentElement.classList.add('js-reveal')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 },
  )

  const observe = () => {
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
  }

  observe()
  const router = useRouter()
  router.afterEach(() => nextTick(observe))
})
