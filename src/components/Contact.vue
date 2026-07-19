<script setup>
import { ArrowUpRight, Download, Github, Linkedin, Mail } from 'lucide-vue-next'
const contacts = [{ label: 'Email', value: 'fakhricoffe@gmail.com', href: 'mailto:fakhricoffe@gmail.com', icon: Mail }, { label: 'GitHub', value: 'github.com/fakhri17', href: 'https://github.com/fakhri17', icon: Github }, { label: 'LinkedIn', value: 'in/fakhri-alauddin', href: 'https://www.linkedin.com/in/fakhri-alauddin/', icon: Linkedin }]
</script>

<template>
  <section id="contact" class="contact-section"><div class="container contact-inner"><div class="contact-heading"><span class="section-kicker">Start a conversation</span><h2>Let’s make something<br /><span class="gradient-text">meaningful.</span></h2><p>Have a product to build, a system to untangle, or just want to say hello? My inbox is open.</p></div><div class="contact-links"><a v-for="contact in contacts" :key="contact.label" :href="contact.href" target="_blank" rel="noopener noreferrer" class="contact-link"><span class="contact-icon"><component :is="contact.icon" :size="18" /></span><span><small>{{ contact.label }}</small><strong>{{ contact.value }}</strong></span><ArrowUpRight :size="18" /></a></div><div class="contact-bottom"><a href="https://drive.google.com/file/d/1iopdwz6af0C4zV5T1FiRreWWqZ2-Jsqq/view?usp=sharing" target="_blank" rel="noopener noreferrer" class="button button-primary"><Download :size="16" /> Download CV</a><span>Usually replies within 1–2 business days.</span></div></div></section>
</template>
