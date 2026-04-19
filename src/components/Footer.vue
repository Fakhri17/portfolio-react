<script setup>
import { ArrowUp } from 'lucide-vue-next';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
</script>

<template>
  <footer class="bg-white border-t-4 border-black py-8 px-4 relative z-20">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

      <!-- Brand -->
      <div class="font-black text-2xl tracking-tighter flex items-center group cursor-pointer" @click="scrollToTop">
        <span class="bg-[#ffd900] px-2 py-1 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] mr-3 group-hover:-rotate-6 transition-transform">FA</span>
        <span class="uppercase">Fakhri Alauddin</span>
      </div>

      <!-- Copyright -->
      <div class="font-bold text-center border-2 border-black border-dashed px-6 py-2 bg-[#f4f0ea] rotate-1 hover:-rotate-1 transition-transform cursor-default">
        &copy; {{ new Date().getFullYear() }} All Rights Reserved.
      </div>

      <!-- Back to top -->
      <button
        @click="scrollToTop"
        class="bg-[#b2ff90] px-4 py-2 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center gap-2 font-black uppercase"
        aria-label="Back to top"
      >
        <span>Top</span>
        <ArrowUp class="w-5 h-5 border-l-2 border-black pl-2" stroke-width="3" />
      </button>

    </div>
  </footer>
</template>
