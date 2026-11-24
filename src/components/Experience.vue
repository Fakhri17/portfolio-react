<script setup>
import { ArrowUpRight } from 'lucide-vue-next'

const roles = [
  {
    period: 'Apr 2020 — Jul 2026', location: 'Remote', company: 'PikarLabs', type: 'Freelance', role: 'Full-Stack Developer',
    detail: 'Built and maintained 5+ web applications for clients and internal needs using Craft CMS, Laravel, Vue.js, Tailwind CSS, MySQL, and PostgreSQL, covering backend, frontend, and database.',
    highlights: [
      { label: 'SIMRS', text: 'Built medicine management and patient modules for a Hospital Information System, using the Ministry of Health’s KFA (Kamus Farmasi dan Alat Kesehatan) data.' },
      { label: 'Meducine', text: 'Contributed to an online medical education platform (webinars, courses, memberships) for doctors, built on Craft CMS: webinar listing and detail pages, speaker pages, and a REST API for the webinar list.' },
      { label: 'Petrokimia', text: 'Developed the frontend and Craft CMS backend for the Petrokimia corporate website.' },
      { label: 'Monitoring & analytics', text: 'Integrated web applications with monitoring and analytics tools.' },
      { label: 'Deployment', text: 'Set up and managed servers and application deployments using Ploi.' },
      { label: 'Testing & project management', text: 'Performed manual testing, wrote user guides, and managed project tasks using Paymo.' },
    ],
  },
  {
    period: 'Apr 2023 — Jul 2026', location: 'Surabaya, East Java', company: 'Telkom University Surabaya', type: 'Part-Time', role: 'Academic Student Staff',
    detail: 'Built web applications and internal tools for academic and administrative services.',
    highlights: [
      { label: 'Student Service Center', text: 'Built a ticketing and complaint management system for student service requests and academic inquiries, used by 2,000+ students (Laravel, Vue.js, Tailwind CSS, MySQL, MongoDB).' },
      { label: 'Academic tools', text: 'Built internal tools to streamline academic scheduling and administrative workflows for academic staff, replacing manual processes.' },
      { label: 'Student queuing', text: 'Contributed to a student queuing application for managing student services.' },
      { label: 'Server', text: 'Set up and managed a VPS for internal applications, including server configuration and deployment.' },
      { label: 'Academic operations', text: 'Supported academic operations by scheduling lecturer video recording sessions and serving on academic event committees.' },
    ],
  },
  {
    period: 'Jun 2025 — Aug 2025', location: 'Malang, East Java', company: 'PT Aptikma Teknologi Indonesia', type: 'Intern', role: 'Web Developer',
    detail: 'Worked on the Laravel backends of AI-based products during a web development internship.',
    highlights: [
      { label: 'Backend features', text: 'Implemented and fixed backend features for an AI-based Document Recognition System (OCR) and a CCTV-based People Counting System, including application logic and relational database integration.' },
      { label: 'Testing & debugging', text: 'Customized features based on user requirements and supported testing and debugging across the development team.' },
    ],
  },
]
</script>

<template>
  <section id="experience" class="section experience-section">
    <div class="container">
      <div v-reveal class="section-heading split-heading"><h2>Work experience</h2><p>Six years of freelance, campus, and internship work, from client websites to internal tools and AI product backends.</p></div>
      <div class="timeline">
        <article v-for="item in roles" :key="`${item.company}-${item.period}`" v-reveal class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-date"><span class="timeline-period">{{ item.period }}</span><br />{{ item.location }}</div>
          <div class="timeline-content">
            <div class="timeline-company">{{ item.company }} <span class="experience-type">{{ item.type }}</span></div>
            <h3>{{ item.role }}</h3>
            <p>{{ item.detail }}</p>
            <ul v-if="item.highlights" class="timeline-highlights">
              <li v-for="highlight in item.highlights" :key="highlight.label"><strong>{{ highlight.label }}.</strong> {{ highlight.text }}</li>
            </ul>
          </div>
        </article>
      </div>
      <a href="#contact" class="text-link">Hiring a full-stack developer? Get in touch <ArrowUpRight :size="16" /></a>
    </div>
  </section>
</template>
