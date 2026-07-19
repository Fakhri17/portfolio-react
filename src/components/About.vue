<script setup>
import { ArrowUpRight, MoveUpRight } from 'lucide-vue-next'
</script>

<template>
  <section id="about" class="section about-section"><div class="container about-grid"><div class="about-intro"><span class="section-kicker">A little context</span><h2>Good software is<br /><span class="muted-text">quietly excellent.</span></h2></div><div class="about-copy"><p class="about-lead">I’m Fakhri, a developer who cares about the details between a good idea and a great product.</p><p>I work across the stack, with a particular love for backend systems that are clear, resilient, and built to evolve. My approach is equal parts technical rigor and curiosity: understand the problem deeply, then make the solution feel simple.</p><a href="https://github.com/fakhri17" target="_blank" rel="noopener noreferrer" class="text-link">More about my work <ArrowUpRight :size="16" /></a></div><div class="about-note"><MoveUpRight :size="21" /><span>Currently exploring better ways to make complex systems feel effortless.</span></div></div></section>
</template>
