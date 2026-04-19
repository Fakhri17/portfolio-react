<script setup>
import { Briefcase, Calendar } from 'lucide-vue-next';

const experiences = [
  {
    title: "Student Staff Front End and DevOps",
    company: "Akademik Telkom University Surabaya",
    type: "Part Time",
    period: "January 2023 - Present",
    description: "Build a profile website for the academic department of Telkom University Surabaya and a ticketing app for the Student Service Center (SSC).",
    color: "bg-[#8be9fd]"
  },
  {
    title: "Web Developer",
    company: "Pikarlabs.com",
    type: "Part Time",
    period: "January 2020 - Present",
    description: "Build websites for clients using Craft CMS and Laravel Filament.",
    color: "bg-[#ff90e8]"
  },
  {
    title: "Tech and Curriculum of Website Development",
    company: "GDSC Telkom University Surabaya",
    type: "Organization",
    period: "January 2023 - January 2024",
    description: "Collaborated with the team in planning and executing sharing session activities. Developed materials in web development. Served as a mentor and tech curriculum specialist in web development.",
    color: "bg-[#b2ff90]"
  },
  {
    title: "Frontend Developer",
    company: "Tribes Agency",
    type: "Project Base",
    period: "January 2023 - March 2023",
    description: "Built website for Tribes Agency using Tailwind CSS and Craft CMS.",
    color: "bg-[#ffd900]"
  },
  {
    title: "Member",
    company: "Coder Telkom University Surabaya",
    type: "Organization",
    period: "November 2022 - November 2023",
    description: "Member of UMKM Coder in the Web Developer division. Created website for UMKM Coder.",
    color: "bg-[#ffb86c]"
  },
];
</script>

<template>
  <section id="experience" class="py-24 px-4 relative overflow-hidden bg-[#f4f0ea]">
    <!-- Decorative background elements -->
    <div class="absolute top-20 right-10 w-32 h-32 bg-transparent border-8 border-black border-dashed opacity-20 rounded-full animate-[spin_10s_linear_infinite] hidden md:block z-0"></div>
    <div class="absolute bottom-40 left-10 w-24 h-24 bg-black opacity-10 rotate-45 hidden md:block z-0"></div>

    <div class="max-w-4xl mx-auto relative z-10">
      <!-- Section Title -->
      <div class="flex flex-col items-center mb-16">
        <h2 class="text-5xl md:text-6xl font-black uppercase tracking-tight bg-[#ff90e8] px-6 py-2 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] -rotate-2 inline-block mb-4 hover:rotate-0 transition-transform duration-300">
          Experience
        </h2>
        <p class="text-xl font-bold bg-white px-4 py-2 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-1 text-center">
          My professional journey and work experience
        </p>
      </div>

      <!-- Experience Timeline/List -->
      <div class="space-y-12">
        <div
          v-for="(experience, index) in experiences"
          :key="index"
          class="relative bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:p-8 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 group"
        >
          <!-- Decorative Number -->
          <div :class="[experience.color, 'absolute -left-4 -top-4 w-12 h-12 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center font-black text-xl rotate-12 group-hover:rotate-0 transition-transform z-10']">
            #{{ index + 1 }}
          </div>

          <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 pl-6 md:pl-8">
            <div>
              <h3 class="text-2xl md:text-3xl font-black uppercase mb-2 leading-tight">
                {{ experience.title }}
              </h3>
              <div class="flex flex-wrap items-center gap-3">
                <span class="flex items-center text-lg font-bold bg-[#f4f0ea] px-3 py-1 border-2 border-black border-dashed">
                  <Briefcase class="w-5 h-5 mr-2" stroke-width="2.5" />
                  {{ experience.company }}
                </span>
                <span :class="[experience.color, 'px-3 py-1 text-sm font-black uppercase border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]']">
                  {{ experience.type }}
                </span>
              </div>
            </div>

            <div class="flex items-center bg-black text-white px-4 py-2 font-bold whitespace-nowrap self-start md:self-auto rotate-1 shadow-[4px_4px_0px_0px_rgba(139,233,253,1)]">
              <Calendar class="w-5 h-5 mr-2" stroke-width="2.5" />
              {{ experience.period }}
            </div>
          </div>

          <div class="bg-gray-100 border-2 border-black p-4 mt-4 font-bold text-lg md:pl-8 relative overflow-hidden">
            <!-- Slash Pattern Overlay -->
            <div class="absolute inset-0 opacity-5 pointer-events-none" style="background-image: repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%); background-size: 10px 10px;"></div>
            <p class="relative z-10">{{ experience.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
