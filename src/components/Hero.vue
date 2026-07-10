<script setup>
import { Download, Github, Linkedin, Mail } from 'lucide-vue-next';
</script>

<template>
  <section id="home" class="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
    <!-- Neobrutalism Decorative Elements -->
    <div class="absolute top-40 left-10 w-24 h-24 bg-[#ff90e8] rounded-full border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hidden md:block animate-[bounce_5s_infinite]"></div>
    <div class="absolute bottom-32 right-12 w-28 h-28 bg-[#b2ff90] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-12 hidden md:block animate-[pulse_4s_infinite]"></div>
    <div class="absolute top-1/4 right-20 w-12 h-12 bg-[#ffd900] border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-45 hidden lg:block"></div>

    <div class="max-w-4xl mx-auto text-center z-10 relative">
      <div class="mb-8 inline-block">
        <span class="bg-[#ffd900] text-black font-black px-6 py-2 text-lg uppercase tracking-widest border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-[-2deg] inline-block hover:rotate-0 transition-transform duration-200 cursor-default">
          Hello, I'm
        </span>
      </div>

      <h1 class="text-6xl md:text-8xl lg:text-9xl font-black mb-8 uppercase tracking-tight text-white drop-shadow-[5px_5px_0px_rgba(0,0,0,1)] [-webkit-text-stroke:2px_black]">
        Fakhri<br/>Alauddin
      </h1>

      <div class="mb-12 inline-block">
        <h2 class="text-lg md:text-2xl lg:text-3xl font-bold bg-[#8be9fd] px-6 py-3 border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] inline-block rotate-[1deg] hover:-rotate-1 transition-transform duration-200 cursor-default">
          Web Developer
        </h2>
      </div>

      <div class="flex flex-wrap justify-center gap-6 mt-4">
        <a
          href="https://drive.google.com/file/d/1iopdwz6af0C4zV5T1FiRreWWqZ2-Jsqq/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-[#ffd900] px-6 py-4 neo-btn flex items-center gap-2 font-black uppercase tracking-wide hover:bg-[#b2ff90]"
          aria-label="Download Resume"
        >
          <Download class="w-5 h-5 text-black group-hover:scale-110 transition-transform" stroke-width="2.5" />
          <span class="text-black">Resume</span>
        </a>
        <a
          href="https://github.com/fakhri17"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-white p-4 neo-btn flex items-center justify-center group hover:bg-[#cba6f7]"
          aria-label="GitHub Profile"
        >
          <Github class="w-8 h-8 text-black group-hover:scale-110 transition-transform" stroke-width="2.5" />
        </a>
        <a
          href="https://www.linkedin.com/in/fakhri-alauddin/"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-white p-4 neo-btn flex items-center justify-center group hover:bg-[#ffb86c]"
          aria-label="LinkedIn Profile"
        >
          <Linkedin class="w-8 h-8 text-black group-hover:scale-110 transition-transform" stroke-width="2.5" />
        </a>
        <a
          href="mailto:fakhricoffe@gmail.com"
          class="bg-white p-4 neo-btn flex items-center justify-center group hover:bg-[#ff90e8]"
          aria-label="Send Email"
        >
          <Mail class="w-8 h-8 text-black group-hover:scale-110 transition-transform" stroke-width="2.5" />
        </a>
      </div>
    </div>
  </section>
</template>
