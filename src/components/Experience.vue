<script setup>
import { ArrowUpRight } from 'lucide-vue-next'

const roles = [
  {
    period: 'Apr 2020 — Jul 2026', company: 'PikarLabs', type: 'Part-time', role: 'Web Developer',
    detail: 'Developed and maintained client and internal web applications using Craft CMS, Laravel, and Filament, working across backend and frontend features, database integration, debugging, and maintenance.',
    highlights: [
      'Contributed to SIMRS, a Hospital Information System supporting healthcare operations and administration.',
      'Developed the Petrokimia company profile website and Meducine, a platform for medical webinars and online classes for doctors.',
      'Built internal applications, including external API integrations, and collaborated with the team to turn client requirements into practical web solutions.',
    ],
  },
  {
    period: 'Apr 2023 — Jul 2026', company: 'Telkom University', type: 'Part-time', role: 'Student Staff',
    detail: 'Developed web applications and internal tools to support academic and administrative services, collaborating with academic staff to understand operational needs.',
    highlights: [
      'Developed Student Service Center (SSC), a ticketing and complaint management system for student service requests and academic inquiries.',
      'Built tools for academic document management and contributed to a student queuing application and the academic department profile website.',
      'Helped manage and schedule lecturer educational video recording sessions to support learning content production.',
    ],
  },
  {
    period: 'Jun 2025 — Aug 2025', company: 'PT Aptikma Teknologi Indonesia', type: 'Internship', role: 'Web Developer',
    detail: 'Developed web applications using Laravel and jQuery, implementing backend logic, relational database integration, and features based on user requirements and project specifications.',
    highlights: ['Collaborated with the development team on testing, debugging, and improving application functionality throughout the project.'],
  },
  { period: 'Jan 2023 — Mar 2023', company: 'Tribes Agency', type: 'Project-based', role: 'Frontend Developer', detail: 'Built the Tribes Agency website using Tailwind CSS and Craft CMS.' },
  { period: 'Jan 2023 — Jan 2024', company: 'GDSC Telkom University Surabaya', type: 'Organization', role: 'Tech and Curriculum of Website Development', detail: 'Collaborated on sharing sessions, developed web development learning materials, and mentored students in web development.' },
  { period: 'Nov 2022 — Nov 2023', company: 'Coder Telkom University Surabaya', type: 'Organization', role: 'Web Development Member', detail: 'Participated in the Web Developer division of UKMK Coder and helped build the community website.' },
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
            <ul v-if="item.highlights" class="timeline-highlights">
              <li v-for="highlight in item.highlights" :key="highlight">{{ highlight }}</li>
            </ul>
          </div>
          <ArrowUpRight :size="18" class="timeline-arrow" />
        </article>
      </div>
      <a href="#contact" class="text-link">Have a project in mind? <ArrowUpRight :size="16" /></a>
    </div>
  </section>
</template>
