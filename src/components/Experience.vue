<script setup>
import { ArrowUpRight } from 'lucide-vue-next'

const roles = [
  {
    period: 'Apr 2020 — Jul 2026', company: 'PikarLabs', type: 'Part-time', role: 'Web Developer',
    detail: 'Built and maintained client and internal web applications using Craft CMS, Laravel, and Filament.',
    highlights: [
      { label: 'SIMRS', text: 'Contributed to a hospital information system for healthcare operations and administration.' },
      { label: 'Petrokimia & Meducine', text: 'Developed a company profile website and a platform for medical webinars and online classes for doctors.' },
      { label: 'Development & maintenance', text: 'Implemented backend and frontend features, database connections, and external API integrations; handled debugging and maintenance.' },
      { label: 'Client requirements', text: 'Worked with the team to translate client needs and business processes into web applications.' },
    ],
  },
  {
    period: 'Apr 2023 — Jul 2026', company: 'Telkom University', type: 'Part-time', role: 'Student Staff',
    detail: 'Built web applications and internal tools for academic and administrative services.',
    highlights: [
      { label: 'Student Service Center', text: 'Developed a ticketing and complaint management system for student requests and academic inquiries.' },
      { label: 'Academic tools', text: 'Built document management tools and contributed to a student queuing app and the academic department website.' },
      { label: 'Learning content', text: 'Helped manage and schedule lecturers’ educational video recording sessions.' },
      { label: 'Staff collaboration', text: 'Worked with academic staff and internal teams to identify operational needs and develop supporting applications.' },
    ],
  },
  {
    period: 'Jun 2025 — Aug 2025', company: 'PT Aptikma Teknologi Indonesia', type: 'Internship', role: 'Web Developer',
    detail: 'Developed web applications with Laravel and jQuery during a web development internship.',
    highlights: [
      { label: 'Backend features', text: 'Implemented application logic, relational database integration, and features based on user requirements and project specifications.' },
      { label: 'Testing & debugging', text: 'Worked with the development team to test, debug, and improve application functionality throughout the project.' },
    ],
  },
  { period: 'Jan 2023 — Mar 2023', company: 'Tribes Agency', type: 'Project-based', role: 'Frontend Developer', detail: 'Worked on the Tribes Agency website.', highlights: [{ label: 'Frontend', text: 'Built the website using Tailwind CSS and Craft CMS.' }] },
  { period: 'Jan 2023 — Jan 2024', company: 'GDSC Telkom University Surabaya', type: 'Organization', role: 'Tech and Curriculum of Website Development', detail: 'Supported web development learning activities.', highlights: [{ label: 'Curriculum & mentoring', text: 'Planned sharing sessions with the team, developed learning materials, and mentored students in web development.' }] },
  { period: 'Nov 2022 — Nov 2023', company: 'Coder Telkom University Surabaya', type: 'Organization', role: 'Web Development Member', detail: 'Joined the Web Developer division of UKMK Coder.', highlights: [{ label: 'Community website', text: 'Helped build the UKMK Coder website.' }] },
]
</script>

<template>
  <section id="experience" class="section experience-section">
    <div class="container">
      <div class="section-heading"><span class="section-kicker">Work &amp; organizations</span><h2>Experience</h2></div>
      <div class="timeline">
        <article v-for="item in roles" :key="`${item.company}-${item.period}`" class="timeline-item">
          <div class="timeline-marker" :class="{ current: item.current }"></div>
          <div class="timeline-date">{{ item.period }}</div>
          <div class="timeline-content">
            <div class="timeline-company">{{ item.company }} <span class="experience-type">• {{ item.type }}</span> <span v-if="item.current" class="current-label">Current</span></div>
            <h3>{{ item.role }}</h3>
            <p>{{ item.detail }}</p>
            <ul v-if="item.highlights" class="timeline-highlights">
              <li v-for="highlight in item.highlights" :key="highlight.label"><strong>{{ highlight.label }}.</strong> {{ highlight.text }}</li>
            </ul>
          </div>
          <ArrowUpRight :size="18" class="timeline-arrow" />
        </article>
      </div>
      <a href="#contact" class="text-link">Have a project in mind? <ArrowUpRight :size="16" /></a>
    </div>
  </section>
</template>
