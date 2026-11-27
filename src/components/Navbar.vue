<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-vue-next'

const isOpen = ref(false)
const isScrolled = ref(false)
const progress = ref(0)
const activeHref = ref('')
let sectionObserver
const isDark = ref(document.documentElement.classList.contains('dark'))
const links = [
  { label: 'Work', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Milestones', href: '#milestones' },
  { label: 'Contact', href: '#contact' },
]

const onScroll = () => {
  isScrolled.value = window.scrollY > 24
  const scrollable = document.documentElement.scrollHeight - window.innerHeight
  progress.value = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0
}
const applyTheme = (dark) => {
  isDark.value = dark
  document.documentElement.classList.toggle('dark', dark)
  document.documentElement.classList.toggle('light', !dark)
  document.documentElement.style.colorScheme = dark ? 'dark' : 'light'
}
const toggleTheme = () => {
  const nextTheme = !isDark.value
  applyTheme(nextTheme)
  try {
    localStorage.setItem('portfolio-theme', nextTheme ? 'dark' : 'light')
  } catch {
    // Keep the toggle usable when browser storage is unavailable.
  }
}
const close = () => { isOpen.value = false }
const onKeydown = (event) => { if (event.key === 'Escape') close() }
const desktopQuery = window.matchMedia('(min-width: 901px)')
const onBreakpointChange = (event) => { if (event.matches) close() }

watch(isOpen, (open) => {
  document.documentElement.classList.toggle('menu-open', open)
})

onMounted(() => {
  applyTheme(isDark.value)
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKeydown)
  desktopQuery.addEventListener?.('change', onBreakpointChange)
  if (!('IntersectionObserver' in window)) return
  sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) activeHref.value = `#${entry.target.id}`
    })
  }, { rootMargin: '-45% 0px -50% 0px' })
  document.querySelectorAll('main section[id]').forEach((section) => sectionObserver.observe(section))
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKeydown)
  desktopQuery.removeEventListener?.('change', onBreakpointChange)
  document.documentElement.classList.remove('menu-open')
  sectionObserver?.disconnect()
})
</script>

<template>
  <header class="nav-wrap" :class="{ 'is-scrolled': isScrolled }">
    <nav class="nav container" aria-label="Main navigation">
      <a class="brand" href="#home" @click="close" aria-label="Fakhri Alauddin home"><span class="brand-mark">FA</span><span class="brand-name">Fakhri Alauddin</span></a>
      <div class="desktop-nav"><a v-for="link in links" :key="link.href" :href="link.href" class="nav-link" :class="{ 'is-active': activeHref === link.href }" :aria-current="activeHref === link.href ? 'location' : undefined">{{ link.label }}</a></div>
      <div class="nav-actions">
        <button class="theme-toggle" type="button" :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'" :aria-pressed="isDark" @click="toggleTheme"><Sun v-if="isDark" :size="16" /><Moon v-else :size="16" /><span>{{ isDark ? 'Light' : 'Dark' }}</span></button>
        <a class="nav-cta desktop-only" href="#contact">Let's talk <ArrowUpRight :size="15" /></a>
      </div>
      <button class="menu-toggle" type="button" aria-label="Toggle navigation" aria-controls="mobile-navigation" :aria-expanded="isOpen" @click="isOpen = !isOpen"><X v-if="isOpen" :size="20" /><Menu v-else :size="20" /></button>
    </nav>
    <div class="scroll-progress" :style="{ transform: `scaleX(${progress})` }" aria-hidden="true"></div>
    <Transition name="menu"><div v-if="isOpen" id="mobile-navigation" class="mobile-nav"><div class="container"><a v-for="link in links" :key="link.href" :href="link.href" class="mobile-link" :class="{ 'is-active': activeHref === link.href }" @click="close">{{ link.label }}</a><a href="#contact" class="mobile-link mobile-link-accent" @click="close">Let's talk <ArrowUpRight :size="16" /></a></div></div></Transition>
  </header>
  <Transition name="fade"><div v-if="isOpen" class="nav-backdrop" aria-hidden="true" @click="close"></div></Transition>
</template>
