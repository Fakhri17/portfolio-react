<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { ArrowUpRight } from 'lucide-vue-next'

const stats = [
  { value: 6, suffix: '', label: 'Years of project experience' },
  { value: 5, suffix: '+', label: 'Years building with Craft CMS' },
  { value: 6, suffix: '+', label: 'Production systems delivered' },
]

const format = (value) => String(Math.round(value))
const shown = ref(stats.map((stat) => format(stat.value)))
const statsEl = ref(null)
let observer
let frame

const countUp = () => {
  const duration = 1400
  const start = performance.now()
  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 4)
    shown.value = stats.map((stat) => format(stat.value * eased))
    if (progress < 1) frame = requestAnimationFrame(tick)
  }
  frame = requestAnimationFrame(tick)
}

onMounted(() => {
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  shown.value = stats.map(() => format(0))
  observer = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return
    observer.disconnect()
    countUp()
  }, { threshold: 0.3 })
  observer.observe(statsEl.value)
})
onUnmounted(() => {
  observer?.disconnect()
  cancelAnimationFrame(frame)
})
</script>

<template>
  <section id="home" class="hero-section">
    <div class="container hero-grid">
      <div class="hero-copy reveal">
        <div class="eyebrow"><span class="status-dot"></span> Open to full-time roles · Surabaya, Indonesia</div>
        <h1>Fakhri<br /><span class="hero-surname">Alauddin</span></h1>
        <p class="hero-role">Full-Stack Developer</p>
        <p class="hero-description">I build and maintain websites and web platforms with <strong>Craft CMS, Laravel, and Vue.js</strong>. My production work includes a medical webinar platform, a corporate website, and a student ticketing system used by 2,000+ students, and I contributed to a hospital information system (SIMRS).</p>
        <div class="hero-actions"><a href="#projects" class="button button-primary">View projects <ArrowUpRight :size="17" /></a><a href="#contact" class="button button-ghost">Contact me</a></div>
      </div>
      <div class="hero-showcase reveal reveal-delay">
        <div class="portrait-frame">
          <img class="hero-portrait" src="/fakhri.png" alt="Portrait of Fakhri Alauddin" width="1024" height="1024" fetchpriority="high" />
        </div>
      </div>
    </div>
    <dl ref="statsEl" class="container hero-stats">
      <div v-for="(stat, index) in stats" :key="stat.label" class="hero-stat">
        <dt>{{ stat.label }}</dt>
        <dd>{{ shown[index] }}{{ stat.suffix }}</dd>
      </div>
    </dl>
  </section>
</template>
