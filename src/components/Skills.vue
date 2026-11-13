<script setup>
const groups = [
  { label: 'Backend', items: ['PHP', 'Laravel', 'Symfony', 'Filament PHP', 'Node.js', 'REST API'] },
  { label: 'Frontend', items: ['JavaScript', 'Vue.js', 'Alpine.js', 'jQuery', 'HTML & CSS', 'Tailwind CSS', 'Bootstrap'] },
  { label: 'Database & CMS', items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Craft CMS'] },
  { label: 'Server & deployment', items: ['Linux', 'Nginx', 'Apache', 'Cloudflare'] },
  { label: 'Tools', items: ['Git', 'Postman', 'Figma', 'Visual Studio Code'] },
  { label: 'AI-assisted development', items: ['Claude Code', 'Gemini', 'Codex'] },
]
</script>

<template>
  <section id="skills" class="section skills-section">
    <div class="container skills-layout">
      <div v-reveal class="section-heading"><h2>Skills</h2><p>I work mainly with PHP, Laravel, Craft CMS, and Vue.js, and I’m comfortable deploying on Linux servers with Nginx or Apache.</p></div>
      <dl class="skills-table">
        <div v-for="(group, index) in groups" :key="group.label" v-reveal="index * 50" class="skills-row">
          <dt>{{ group.label }}</dt>
          <dd><span v-for="item in group.items" :key="item">{{ item }}</span></dd>
        </div>
      </dl>
    </div>
  </section>
</template>
