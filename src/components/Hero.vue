<script setup>
import { ArrowDown, ArrowUpRight, CheckCircle2, GitBranch, Server, Zap } from 'lucide-vue-next'
</script>

<template>
  <section id="home" class="hero-section">
    <div class="hero-glow hero-glow-one"></div><div class="hero-glow hero-glow-two"></div>
    <div class="container hero-grid">
      <div class="hero-copy reveal">
        <div class="eyebrow"><span class="status-dot"></span> Available for select projects <span class="eyebrow-line"></span> 2024—25</div>
        <h1>Fakhri<br /><span class="gradient-text">Alauddin.</span></h1>
        <p class="hero-description">Full Stack Web Developer specializing in Laravel, Craft CMS, Vue.js, REST APIs, MySQL, and scalable web architecture.</p>
        <div class="hero-actions"><a href="#projects" class="button button-primary">View projects <ArrowUpRight :size="17" /></a><a href="#contact" class="button button-ghost">Contact me <ArrowUpRight :size="17" /></a></div>
        <div class="scroll-cue"><ArrowDown :size="15" /> Scroll to explore</div>
      </div>
      <div class="hero-showcase reveal reveal-delay" aria-label="Portrait of Fakhri Alauddin and backend architecture showcase">
        <img class="hero-portrait" src="/fakhri.png" alt="Fakhri Alauddin" />

      </div>
    </div>
    <div class="hero-footer container"><span>01 / 06</span><div class="hero-rule"></div><span>Independent developer · Based in Indonesia</span></div>
  </section>
</template>
