<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu, X, ArrowUpRight } from 'lucide-vue-next'

const isOpen = ref(false)
const isScrolled = ref(false)
const links = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]
const onScroll = () => { isScrolled.value = window.scrollY > 24 }
onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
const close = () => { isOpen.value = false }
</script>

<template>
  <header class="nav-wrap" :class="{ 'is-scrolled': isScrolled }">
    <nav class="nav container" aria-label="Main navigation">

      <div class="desktop-nav">
        <a v-for="link in links" :key="link.href" :href="link.href" class="nav-link">{{ link.label }}</a>
      </div>
      <a class="nav-cta desktop-only" href="#contact">Let's talk <ArrowUpRight :size="15" /></a>
      <button class="menu-toggle" type="button" aria-label="Toggle navigation" :aria-expanded="isOpen" @click="isOpen = !isOpen">
        <X v-if="isOpen" :size="20" /><Menu v-else :size="20" />
      </button>
    </nav>
    <div v-if="isOpen" class="mobile-nav container">
      <a v-for="link in links" :key="link.href" :href="link.href" class="mobile-link" @click="close">{{ link.label }}</a>
      <a href="#contact" class="mobile-link mobile-link-accent" @click="close">Let's talk <ArrowUpRight :size="16" /></a>
    </div>
  </header>
</template>
