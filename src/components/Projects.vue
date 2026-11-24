<script setup>
import { ArrowUpRight } from 'lucide-vue-next'

const featured = [
  { title: 'Student Service Center', type: 'Telkom University Surabaya', description: 'A ticketing and complaint management system for student service requests and academic inquiries, used by 2,000+ students.', image: '/ssc.png', tags: ['Laravel', 'Vue.js', 'MongoDB'], url: 'https://ssc.telu-sby.id/' },
  { title: 'Meducine', type: 'Medical education platform', description: 'An online medical education platform for doctors. I worked on the webinar listing and detail pages, speaker pages, and a REST API.', image: '/meducine.png', tags: ['Craft CMS', 'PHP', 'Alpine.js'], url: 'https://meducine.id/' },
  { title: 'Petrokimia Gresik', type: 'Corporate website', description: 'The corporate website of Petrokimia Gresik. I developed the frontend and the Craft CMS backend.', image: '/petro.png', tags: ['Craft CMS', 'PHP'], url: 'https://petrokimia-gresik.com/' },
  { title: 'SIMRS Multimedika', type: 'Hospital information system', description: 'I built the medicine management and patient modules using the Ministry of Health’s KFA data.', image: '/simrs.png', tags: ['Laravel', 'Filament', 'MySQL'], url: 'https://dokteremr.com/' },
  { title: 'Bisnis Digital', type: 'Study program website', description: 'A study program website for prospective students.', image: '/db.png', tags: ['Filament PHP', 'Tailwind CSS'], url: 'https://bdb-sby.telkomuniversity.ac.id/' },
  { title: 'Mihwan.id', type: 'Personal blog', description: 'A personal blog built on Craft CMS.', image: '/mihwan.png', tags: ['Craft CMS', 'PHP', 'Alpine.js'], url: 'https://mihwan.id' },
]
const others = [
  // Inactive, hidden for now:
  // { title: 'Coder Web Profile', description: 'Profile website for the UKM CODER student developer community.', tags: ['Laravel', 'Livewire', 'MySQL'], url: 'https://www.coder-telkomsby.com/' },
  // { title: 'Erde Jilbab', description: 'An ecommerce site for modest fashion.', tags: ['Laravel', 'Tailwind CSS'], url: '' },
  { title: 'Vote Tenant', description: 'Tenant voting website for the campus Market Day event, updated every semester and for each new event.', tags: ['Vue.js', 'Bootstrap'], url: 'https://vote-tenant-tmd2026.netlify.app/' },
  { title: 'PDFLab', description: 'Side project. A PDF toolkit (split, merge, organize, watermark) that runs entirely in the browser.', tags: ['Vue.js', 'Tailwind CSS'], url: 'https://pdflabs.my.id/' },
  { title: 'itools', description: 'Side project. A collection of free internet tools that run entirely in the browser, with no login needed.', tags: ['Vue.js', 'Tailwind CSS'], url: 'https://itools.web.id/' },
  { title: 'Islamic Website', description: 'Quran reader and prayer schedules.', tags: ['Alpine.js', 'Bootstrap'], url: 'https://islamic-web-telkomsby.netlify.app' },
]
</script>

<template>
  <section id="projects" class="section projects-section">
    <div class="container">
      <div v-reveal class="section-heading split-heading"><h2>Selected work</h2><p>Client, institutional, and community projects I built or contributed to, most of them live in production.</p></div>
      <div class="projects-grid">
        <article v-for="(project, index) in featured" :key="project.title" v-reveal="(index % 2) * 90" class="project-card">
          <a class="project-visual" :href="project.url" target="_blank" rel="noopener noreferrer" :aria-label="'Open ' + project.title"><img :src="project.image" :alt="project.title + ' screenshot'" loading="lazy" decoding="async" /></a>
          <div class="project-info">
            <div class="project-meta"><span>{{ project.type }}</span><a :href="project.url" target="_blank" rel="noopener noreferrer">View live <ArrowUpRight :size="15" /></a></div>
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <div class="tag-row"><span v-for="tag in project.tags" :key="tag">{{ tag }}</span></div>
          </div>
        </article>
      </div>
      <h3 v-reveal class="projects-subheading">More projects <span class="projects-count">{{ String(others.length).padStart(2, '0') }}</span></h3>
      <ul class="project-list">
        <li v-for="(project, index) in others" :key="project.title" v-reveal="index * 40">
          <component :is="project.url ? 'a' : 'div'" class="project-row" :href="project.url || undefined" :target="project.url ? '_blank' : undefined" :rel="project.url ? 'noopener noreferrer' : undefined">
            <strong>{{ project.title }}</strong>
            <span class="project-row-description">{{ project.description }}</span>
            <span class="project-row-tags">{{ project.tags.join(' · ') }}</span>
            <ArrowUpRight v-if="project.url" :size="16" />
            <span v-else class="offline-label">Private</span>
          </component>
        </li>
      </ul>
    </div>
  </section>
</template>
