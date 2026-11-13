import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Apply the saved palette before Vue renders; new visitors start in the paper theme.
let theme = 'light'
try {
  if (localStorage.getItem('portfolio-theme') === 'dark') theme = 'dark'
} catch {
  // The default theme also works when browser storage is unavailable.
}
document.documentElement.classList.add(theme)
document.documentElement.style.colorScheme = theme

const revealObserver = 'IntersectionObserver' in window
  ? new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-visible')
        revealObserver.unobserve(entry.target)
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })
  : null

const reveal = {
  mounted(el, binding) {
    if (!revealObserver) return
    el.classList.add('sr')
    if (binding.value) el.style.transitionDelay = `${binding.value}ms`
    revealObserver.observe(el)
  },
  unmounted(el) {
    revealObserver?.unobserve(el)
  },
}

createApp(App).directive('reveal', reveal).mount('#app')
