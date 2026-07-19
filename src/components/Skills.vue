<script setup>
import { Braces, Code2, Database, FileCode2, Figma, GitBranch, Globe2, Leaf, Palette, Send, Server, SquareTerminal, Wrench } from 'lucide-vue-next'

const groups = [
  { icon: Braces, label: 'Backend', description: 'Reliable foundations', items: [{ name: 'Laravel', icon: Server }, { name: 'PHP', icon: FileCode2 }, { name: 'Symfony', icon: Braces }, { name: 'Node.js', icon: SquareTerminal }, { name: 'Craft CMS', icon: Code2 }] },
  { icon: Globe2, label: 'Frontend', description: 'Clear interfaces', items: [{ name: 'Vue.js', icon: Code2 }, { name: 'JavaScript', icon: FileCode2 }, { name: 'Alpine.js', icon: Leaf }, { name: 'Tailwind CSS', icon: Palette }] },
  { icon: Database, label: 'Database', description: 'Structured data', items: [{ name: 'PostgreSQL', icon: Database }, { name: 'MySQL', icon: Database }, { name: 'MongoDB', icon: Braces }] },
  { icon: Wrench, label: 'Tools', description: 'Daily essentials', items: [{ name: 'Git', icon: GitBranch }, { name: 'Figma', icon: Figma }, { name: 'Postman', icon: Send }, { name: 'Visual Studio Code', icon: Code2 }] },
]
</script>

<template>
  <section id="skills" class="section skills-section">
    <div class="container">
      <div class="section-heading centered-heading"><span class="section-kicker">The toolkit</span><h2>Tools for thoughtful<br /><span class="muted-text">engineering.</span></h2><p>My stack is intentionally boring in the best way: reliable technologies, used with care.</p></div>
      <div class="skills-grid">
        <article v-for="group in groups" :key="group.label" class="skill-card">
          <div class="skill-card-header"><span class="skill-category-icon"><component :is="group.icon" :size="18" /></span><div><h3>{{ group.label }}</h3><p>{{ group.description }}</p></div></div>
          <ul class="skill-list"><li v-for="item in group.items" :key="item.name" class="skill-item"><span class="skill-item-icon"><component :is="item.icon" :size="14" /></span><span>{{ item.name }}</span><span class="skill-arrow">↗</span></li></ul>
        </article>
      </div>
    </div>
  </section>
</template>
