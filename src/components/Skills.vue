<script setup>
import { Braces, Code2, Database, FileCode2, Figma, GitBranch, Globe2, Leaf, Palette, Send, Server, SquareTerminal, Users, Wrench } from 'lucide-vue-next'

const groups = [
  { icon: Braces, label: 'Backend', description: 'Application logic and APIs', items: [{ name: 'Laravel', icon: Server }, { name: 'PHP', icon: FileCode2 }, { name: 'Symfony', icon: Braces }, { name: 'Filament PHP', icon: Code2 }, { name: 'Node.js', icon: SquareTerminal }, { name: 'REST API', icon: Send }] },
  { icon: Globe2, label: 'Frontend', description: 'Web interfaces and styling', items: [{ name: 'Vue.js', icon: Code2 }, { name: 'JavaScript', icon: FileCode2 }, { name: 'jQuery', icon: Code2 }, { name: 'HTML & CSS', icon: FileCode2 }, { name: 'Bootstrap', icon: Palette }, { name: 'Alpine.js', icon: Leaf }, { name: 'Tailwind CSS', icon: Palette }] },
  { icon: Database, label: 'Database & CMS', description: 'Databases and content management', items: [{ name: 'MySQL', icon: Database }, { name: 'PostgreSQL', icon: Database }, { name: 'SQL', icon: Database }, { name: 'Craft CMS', icon: Code2 }, { name: 'Database Integration', icon: GitBranch }, { name: 'MongoDB', icon: Braces }] },
  { icon: Wrench, label: 'Tools', description: 'Version control, design, and API tools', items: [{ name: 'Git', icon: GitBranch }, { name: 'Figma', icon: Figma }, { name: 'Postman', icon: Send }, { name: 'Visual Studio Code', icon: Code2 }] },
  { icon: Server, label: 'Server & Deployment', description: 'Basic server administration', items: [{ name: 'Linux', icon: SquareTerminal }, { name: 'Nginx', icon: Server }, { name: 'Cloudflare', icon: Globe2 }, { name: 'Web Deployment', icon: Server }, { name: 'API Integration', icon: Send }] },
  { icon: Users, label: 'Development & Collaboration', description: 'From requirements to maintenance', items: [{ name: 'Debugging', icon: Wrench }, { name: 'Application Maintenance', icon: Code2 }, { name: 'Requirement Analysis', icon: FileCode2 }, { name: 'Problem Solving', icon: Braces }, { name: 'Team Collaboration', icon: Users }] },
]
</script>

<template>
  <section id="skills" class="section skills-section">
    <div class="container">
      <div class="section-heading centered-heading"><span class="section-kicker">Technologies &amp; tools</span><h2>Skills</h2><p>I work mainly with PHP, Laravel, Craft CMS, and Vue.js. I also have basic experience with Linux servers and web deployment.</p></div>
      <div class="skills-grid">
        <article v-for="group in groups" :key="group.label" class="skill-card">
          <div class="skill-card-header"><span class="skill-category-icon"><component :is="group.icon" :size="18" /></span><div><h3>{{ group.label }}</h3><p>{{ group.description }}</p></div></div>
          <ul class="skill-list"><li v-for="item in group.items" :key="item.name" class="skill-item"><span class="skill-item-icon"><component :is="item.icon" :size="14" /></span><span>{{ item.name }}</span><span class="skill-arrow">↗</span></li></ul>
        </article>
      </div>
    </div>
  </section>
</template>
