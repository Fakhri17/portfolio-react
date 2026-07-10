<script setup>
import { Layout, Server, Database } from 'lucide-vue-next';

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Layout,
    color: "bg-[#b2ff90]",
    skills: ["HTML/CSS/JS", "AlpineJS", "Bootstrap CSS", "Tailwind CSS", "VueJS"],
  },
  {
    title: "Backend Development",
    icon: Server,
    color: "bg-[#ff90e8]",
    skills: ["PHP", "Python", "Laravel", "Craft CMS", "WordPress", "Flask"],
  },
  {
    title: "Database & DevOps",
    icon: Database,
    color: "bg-[#8be9fd]",
    skills: ["SQL", "Git", "Version Control", "Server Administration"],
  },
];
</script>

<template>
  <section id="skills" class="py-24 px-4 bg-[#cba6f7] border-y-4 border-black overflow-hidden relative">
    <!-- Decorative background elements -->
    <div class="absolute -top-10 -left-10 w-40 h-40 border-4 border-black rounded-full bg-[#ffd900] opacity-50 z-0"></div>
    <div class="absolute -bottom-10 -right-10 w-40 h-40 border-4 border-black rounded-full bg-[#ffb86c] opacity-50 z-0"></div>

    <div class="max-w-7xl mx-auto relative z-10">
      <div class="flex flex-col items-center mb-16">
        <h2 class="text-5xl md:text-6xl font-black uppercase tracking-tight bg-[#ffd900] px-6 py-2 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-2 inline-block mb-4 hover:rotate-0 transition-transform duration-300">
          My Skills
        </h2>
        <p class="text-xl font-bold bg-white px-4 py-2 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-1 text-center max-w-2xl">
          A comprehensive overview of my technical and soft skills
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(category, index) in skillCategories"
          :key="index"
          class="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 flex flex-col h-full relative"
        >
          <!-- Category Pin Decoration -->
          <div class="absolute -top-3 -right-3 w-6 h-6 bg-white border-3 border-black rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] z-20"></div>

          <div :class="[category.color, 'w-16 h-16 flex items-center justify-center border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6 -rotate-3 hover:rotate-6 transition-transform cursor-crosshair']">
            <component :is="category.icon" class="w-8 h-8 text-black" stroke-width="2.5" />
          </div>

          <h3 class="text-2xl font-black uppercase mb-6 border-b-4 border-black pb-4 inline-block self-start">
            {{ category.title }}
          </h3>

          <div class="flex flex-wrap gap-3 mt-auto">
            <span
              v-for="(skill, skillIndex) in category.skills"
              :key="skillIndex"
              class="bg-[#f4f0ea] px-3 py-1 font-bold text-sm border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-[#ffd900] hover:-translate-y-1 hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all cursor-default"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
