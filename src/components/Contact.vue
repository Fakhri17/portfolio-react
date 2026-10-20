<script setup>
import { ArrowUpRight, Download, Github, Globe2, Linkedin, Mail, Phone } from 'lucide-vue-next'
const contacts = [
  { label: 'Email', value: 'fakhricoffe@gmail.com', href: 'mailto:fakhricoffe@gmail.com', icon: Mail },
  { label: 'Phone', value: '+62 8970 6324 41', href: 'tel:+628970632441', icon: Phone },
  { label: 'Website', value: 'fakhri-17.my.id', href: 'https://fakhri-17.my.id', icon: Globe2 },
  { label: 'GitHub', value: 'github.com/fakhri17', href: 'https://github.com/fakhri17', icon: Github },
  { label: 'LinkedIn', value: 'in/fakhri-alauddin', href: 'https://www.linkedin.com/in/fakhri-alauddin/', icon: Linkedin },
]
</script>

<template>
  <section id="contact" class="contact-section">
    <div class="container contact-inner">
      <div class="contact-heading">
        <span class="section-kicker">Get in touch</span>
        <h2>Contact</h2>
        <p>For project inquiries or work opportunities, email me or use one of the links below.</p>
      </div>
      <div class="contact-links">
        <a v-for="contact in contacts" :key="contact.label" :href="contact.href" target="_blank" rel="noopener noreferrer" class="contact-link">
          <span class="contact-icon"><component :is="contact.icon" :size="18" /></span>
          <span><small>{{ contact.label }}</small><strong>{{ contact.value }}</strong></span>
          <ArrowUpRight :size="18" />
        </a>
      </div>
      <div class="contact-bottom">
        <a href="/resume-fakhri-alauddin.pdf" download="Resume - CV Fakhri Alauddin.pdf" class="button button-primary"><Download :size="16" /> Download CV</a>
        <span>Usually replies within 1–2 business days.</span>
      </div>
    </div>
  </section>
</template>
