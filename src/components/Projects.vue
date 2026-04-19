<script setup>
import { ref, computed } from 'vue';
import { ExternalLink, Github } from 'lucide-vue-next';

const projects = [
  {
    title: "SSC (Student Service Center) Website",
    description: "Website ticketing application for the Student Service Center (SSC) at Telkom University Surabaya.",
    image: "/ssc.png",
    tags: ["Vue.js", "Tailwind CSS", "Laravel", "MongoDB", "MySQL"],
    liveUrl: "https://ssc.telu-sby.id/",
    githubUrl: "#",
    category: "frontend",
    color: "bg-[#8be9fd]"
  },
  {
    title: "Coder Web Profile",
    description: "Website for UKM Coder at Telkom University Surabaya.",
    image: "/coder-web.png",
    tags: ["Tailwind CSS", "Livewire", "Laravel", "MySQL"],
    liveUrl: "https://www.coder-telkomsby.com/",
    githubUrl: "#",
    category: "frontend",
    color: "bg-[#ffd900]"
  },
  {
    title: "Meducine",
    description: "A application webinar and membership for doctors and medical students.",
    image: "/meducine.png",
    tags: ["Craft CMS", "PHP", "AlpineJS", "Bootstrap CSS"],
    liveUrl: "https://meducine.id/",
    githubUrl: "#",
    category: "fullstack",
    color: "bg-[#b2ff90]"
  },
  {
    title: "Mihwan.id",
    description: "A blog website for Muhammad Ihwan.",
    image: "/mihwan.png",
    tags: ["Craft CMS", "PHP", "AlpineJS", "Bootstrap CSS"],
    liveUrl: "https://mihwan.id",
    githubUrl: "#",
    category: "fullstack",
    color: "bg-[#ff90e8]"
  },
  {
    title: "Erde Jilbab",
    description: "A website for selling jilbab",
    image: "/erdejilbab.png",
    tags: ["PHP", "Laravel", "Tailwind CSS", "MySQL"],
    liveUrl: "#",
    githubUrl: "#",
    category: "fullstack",
    color: "bg-[#cba6f7]"
  },
  {
    title: "Petrokimia Company Profile",
    description: "A company profile website for Petrokimia Gresik.",
    image: "/petro.png",
    tags: ["Craft CMS", "PHP", "AlpineJS", "Bootstrap CSS"],
    liveUrl: "https://petrokimia-gresik.com/",
    githubUrl: "#",
    category: "fullstack",
    color: "bg-[#ffb86c]"
  },
  {
    title: "Islamic Website",
    description: "A website for reading the Quran and Sholah schedule.",
    image: "/islamic-web.png",
    tags: ["Bootstrap CSS", "AlpineJS"],
    liveUrl: "https://islamic-web-telkomsby.netlify.app",
    githubUrl: "#",
    category: "frontend",
    color: "bg-[#8be9fd]"
  },
  {
    title: "SIMRS Multimedika",
    description: "A website SIMRS for Multimedika Company.",
    image: "/simrs.png",
    tags: ["PHP", "Laravel", "Filament", "Tailwind CSS", "MySQL"],
    liveUrl: "#",
    githubUrl: "#",
    category: "fullstack",
    color: "bg-[#ffd900]"
  },
  {
    title: "Bisnis Digital Website",
    description: "A website for study program Bisnis Digital at Telkom University Surabaya.",
    image: "/db.png",
    tags: ["wordpress", "PHP"],
    liveUrl: "https://bdb-sby.telkomuniversity.ac.id/",
    githubUrl: "#",
    category: "fullstack",
    color: "bg-[#b2ff90]"
  },
];

const categories = [
  { value: "all", label: "All Projects" },
  { value: "frontend", label: "Frontend" },
  { value: "backend", label: "Backend" },
  { value: "fullstack", label: "Full Stack" },
];

const activeFilter = ref("all");

const filteredProjects = computed(() => {
  if (activeFilter.value === "all") {
    return projects;
  }
  return projects.filter(project => project.category === activeFilter.value);
});

const tagColors = ["bg-[#ffd900]", "bg-[#b2ff90]", "bg-[#8be9fd]", "bg-[#ff90e8]", "bg-[#cba6f7]", "bg-[#ffb86c]"];

const getRandomColor = (index) => {
  return tagColors[index % tagColors.length];
};
</script>

<template>
  <section id="projects" class="py-24 px-4 bg-[#8be9fd] border-y-4 border-black relative overflow-hidden">
    <!-- Decorative elements -->
    <div class="absolute -top-16 -right-16 w-48 h-48 bg-[#ff90e8] border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rounded-full z-0 opacity-80"></div>
    <div class="absolute bottom-10 left-[-2rem] w-32 h-32 bg-[#ffd900] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-12 z-0"></div>

    <div class="max-w-7xl mx-auto relative z-10">
      <div class="flex flex-col items-center mb-16">
        <h2 class="text-5xl md:text-6xl font-black uppercase tracking-tight bg-white px-6 py-2 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-2 inline-block mb-4 hover:rotate-0 transition-transform duration-300">
          My Projects
        </h2>
        <p class="text-xl font-bold bg-[#ffb86c] px-4 py-2 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-1 text-center">
          A selection of my recent work and creations
        </p>
      </div>

      <!-- Filters -->
      <div class="flex flex-wrap justify-center gap-4 mb-16">
        <button
          v-for="category in categories"
          :key="category.value"
          @click="activeFilter = category.value"
          :class="[
            'px-6 py-3 font-black text-lg uppercase transition-all duration-200 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
            activeFilter === category.value
              ? 'bg-black text-white translate-x-1 translate-y-1 shadow-[0px_0px_0px_0px_rgba(0,0,0,1)]'
              : 'bg-white text-black hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-[#b2ff90]'
          ]"
        >
          {{ category.label }}
        </button>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, index) in filteredProjects"
          :key="index"
          class="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 group"
        >
          <!-- Project Image -->
          <div class="relative h-56 w-full border-b-4 border-black overflow-hidden bg-gray-200">
            <div :class="[project.color, 'absolute inset-0 opacity-20 mix-blend-multiply group-hover:opacity-0 transition-opacity z-10']"></div>
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110"
              loading="lazy"
              @error="e => { e.target.src = 'https://via.placeholder.com/600x400/f4f0ea/000000?text=' + encodeURIComponent(project.title) }"
            />
          </div>

          <div class="p-6 flex-grow flex flex-col relative">
            <!-- Category Badge -->
            <div class="absolute -top-4 right-4 bg-black text-white font-black uppercase text-xs px-3 py-1 border-2 border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] z-20 rotate-3">
              {{ project.category }}
            </div>

            <h3 class="text-2xl font-black uppercase mb-3 leading-tight line-clamp-2">
              {{ project.title }}
            </h3>

            <p class="font-bold text-gray-700 mb-6 flex-grow border-l-4 border-black pl-3 border-dashed">
              {{ project.description }}
            </p>

            <div class="flex flex-wrap gap-2 mb-6">
              <span
                v-for="(tag, tagIndex) in project.tags"
                :key="tagIndex"
                :class="[getRandomColor(tagIndex), 'px-2 py-1 text-xs font-black uppercase border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] whitespace-nowrap']"
              >
                {{ tag }}
              </span>
            </div>

            <!-- Links -->
            <div class="flex justify-between items-center gap-4 mt-auto pt-4 border-t-4 border-black">
              <a
                v-if="project.liveUrl && project.liveUrl !== '#'"
                :href="project.liveUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="flex-1 bg-[#b2ff90] border-2 border-black py-2 px-3 flex justify-center items-center font-black uppercase text-sm shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-[#8be9fd] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <ExternalLink class="w-4 h-4 mr-2" stroke-width="3" />
                Live View
              </a>
              <span v-else class="flex-1 bg-gray-200 border-2 border-black py-2 px-3 flex justify-center items-center font-black uppercase text-sm opacity-50 cursor-not-allowed">
                No Link
              </span>

              <a
                v-if="project.githubUrl && project.githubUrl !== '#'"
                :href="project.githubUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="bg-white border-2 border-black p-2 flex justify-center items-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all"
                aria-label="GitHub Repository"
              >
                <Github class="w-5 h-5" stroke-width="2.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
