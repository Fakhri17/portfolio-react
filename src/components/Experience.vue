<script setup>
import { ArrowUpRight } from 'lucide-vue-next'

const roles = [
  { period: 'Januari 2023 — Sampai Saat Ini', company: 'Akademik Telkom University Surabaya', type: 'Part Time', role: 'Student Staff Front End and DevOps', detail: 'Build a profile website for the academic department of Telkom University Surabaya and a ticketing app for the Student Service Center (SSC).', current: true },
  { period: 'Januari 2020 — Sampai Saat Ini', company: 'Pikarlabs.com', type: 'Part Time', role: 'Web Developer', detail: 'Build Website from client using Craft CMS and Laravel Filament.', current: true },
  { period: 'Juni 2025 — Agustus 2025', company: 'PT Aptikma Teknologi Indonesia', type: 'Magang', role: 'Web Developer', detail: 'Membantu pembuatan project website di Aptikma dengan tech stack Laravel dan Jquery.' },
  { period: 'Januari 2023 — Maret 2023', company: 'Tribes Agency', type: 'Project Base', role: 'Frontend Developer', detail: 'Build Website Tribes Agency using Tailwind CSS and Craft CMS.' },
  { period: 'Januari 2023 — Januari 2024', company: 'GDSC Telkom University Surabaya', type: 'Organisasi', role: 'Tech and Curriculum of Website Development', detail: 'Collaborating with the team in the planning and execution of sharing session activities. Developing materials in the field of web development. Serving as a mentor and tech curriculum aspects in the realm of web development.' },
  { period: 'November 2022 — November 2023', company: 'Coder Telkom University Surabaya', type: 'Organisasi', role: 'Anggota', detail: 'Menjadi anggota UKMK Coder pada divisi Web Developer. Serta membuat website untuk UKMK Coder.' },
]
</script>

<template>
  <section id="experience" class="section experience-section">
    <div class="container">
      <div class="section-heading"><span class="section-kicker">A short history</span><h2>Experience that compounds.</h2></div>
      <div class="timeline">
        <article v-for="item in roles" :key="`${item.company}-${item.period}`" class="timeline-item">
          <div class="timeline-marker" :class="{ current: item.current }"></div>
          <div class="timeline-date">{{ item.period }}</div>
          <div class="timeline-content">
            <div class="timeline-company">{{ item.company }} <span class="experience-type">• {{ item.type }}</span> <span v-if="item.current" class="current-label">Current</span></div>
            <h3>{{ item.role }}</h3>
            <p>{{ item.detail }}</p>
          </div>
          <ArrowUpRight :size="18" class="timeline-arrow" />
        </article>
      </div>
      <a href="#contact" class="text-link">Have a project in mind? <ArrowUpRight :size="16" /></a>
    </div>
  </section>
</template>
