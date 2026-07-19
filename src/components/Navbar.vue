<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-vue-next'

const isOpen = ref(false)
const isScrolled = ref(false)
const isDark = ref(true)
const links = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const onScroll = () => { isScrolled.value = window.scrollY > 24 }
const applyTheme = (dark) => {
  isDark.value = dark
  document.documentElement.classList.toggle('dark', dark)
  document.documentElement.classList.toggle('light', !dark)
  document.documentElement.style.colorScheme = dark ? 'dark' : 'light'
}
const toggleTheme = () => {
  const nextTheme = !isDark.value
  applyTheme(nextTheme)
  localStorage.setItem('portfolio-theme', nextTheme ? 'dark' : 'light')
}
const close = () => { isOpen.value = false }

onMounted(() => {
  const savedTheme = localStorage.getItem('portfolio-theme')
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  applyTheme(savedTheme ? savedTheme === 'dark' : systemPrefersDark)
  window.addEventListener('scroll', onScroll)
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header class="nav-wrap" :class="{ 'is-scrolled': isScrolled }">
    <nav class="nav container" aria-label="Main navigation">
      <a class="brand" href="#home" @click="close" aria-label="Fakhri Alauddin home"><span class="brand-mark">FA</span><span class="brand-name">Fakhri Alauddin</span></a>
      <div class="desktop-nav"><a v-for="link in links" :key="link.href" :href="link.href" class="nav-link">{{ link.label }}</a></div>
      <div class="nav-actions">
        <button class="theme-toggle" type="button" :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'" :aria-pressed="isDark" @click="toggleTheme"><Sun v-if="isDark" :size="16" /><Moon v-else :size="16" /><span>{{ isDark ? 'Light' : 'Dark' }}</span></button>
        <a class="nav-cta desktop-only" href="#contact">Let's talk <ArrowUpRight :size="15" /></a>
      </div>
      <button class="menu-toggle" type="button" aria-label="Toggle navigation" :aria-expanded="isOpen" @click="isOpen = !isOpen"><X v-if="isOpen" :size="20" /><Menu v-else :size="20" /></button>
    </nav>
    <div v-if="isOpen" class="mobile-nav container"><a v-for="link in links" :key="link.href" :href="link.href" class="mobile-link" @click="close">{{ link.label }}</a><a href="#contact" class="mobile-link mobile-link-accent" @click="close">Let's talk <ArrowUpRight :size="16" /></a></div>
  </header>
</template>
