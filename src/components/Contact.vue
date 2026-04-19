<script setup>
import { MapPin, Mail, Phone } from 'lucide-vue-next';
</script>

<template>
  <section id="contact" class="py-24 px-4 bg-[#ff90e8] border-t-4 border-black relative overflow-hidden">
    <!-- Decorative Elements -->
    <div class="absolute top-10 left-10 w-20 h-20 bg-[#ffd900] border-4 border-black rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] animate-[bounce_3s_infinite] hidden md:block"></div>
    <div class="absolute bottom-10 right-20 w-32 h-32 bg-[#8be9fd] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-45 hidden md:block"></div>

    <div class="max-w-3xl mx-auto relative z-10">
      <div class="flex flex-col items-center mb-16">
        <h2 class="text-5xl md:text-6xl font-black uppercase tracking-tight bg-[#b2ff90] px-6 py-2 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] -rotate-2 inline-block mb-4 hover:rotate-0 transition-transform duration-300">
          Get In Touch
        </h2>
        <p class="text-xl font-bold bg-white px-4 py-2 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-1 text-center">
          Have a project in mind or want to collaborate?
        </p>
      </div>

      <div class="bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8 md:p-12 relative hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
        <!-- Pin decoration -->
        <div class="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#cba6f7] border-3 border-black rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] z-20"></div>

        <div class="text-center mb-10">
          <h3 class="text-3xl font-black uppercase border-b-4 border-black inline-block pb-2">
            Contact Information
          </h3>
          <p class="font-bold text-gray-700 mt-4 text-lg">
            Feel free to reach out through any of these channels
          </p>
        </div>

        <div class="space-y-6 max-w-xl mx-auto">
          <!-- Location -->
          <div class="flex items-center p-4 border-3 border-black bg-[#f4f0ea] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all group">
            <div class="bg-[#ffd900] p-3 border-2 border-black mr-6 group-hover:rotate-12 transition-transform">
              <MapPin class="w-6 h-6 text-black" stroke-width="2.5" />
            </div>
            <div>
              <p class="font-black uppercase text-sm text-gray-500 tracking-wider">Location</p>
              <p class="font-bold text-xl">Surabaya, Indonesia</p>
            </div>
          </div>

          <!-- Email -->
          <a href="mailto:fakhricoffe@gmail.com" class="flex items-center p-4 border-3 border-black bg-[#f4f0ea] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all group cursor-pointer w-full">
            <div class="bg-[#8be9fd] p-3 border-2 border-black mr-6 group-hover:-rotate-12 transition-transform">
              <Mail class="w-6 h-6 text-black" stroke-width="2.5" />
            </div>
            <div>
              <p class="font-black uppercase text-sm text-gray-500 tracking-wider">Email</p>
              <p class="font-bold text-xl break-all">fakhricoffe@gmail.com</p>
            </div>
          </a>

          <!-- Phone -->
          <div class="flex items-center p-4 border-3 border-black bg-[#f4f0ea] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all group">
            <div class="bg-[#b2ff90] p-3 border-2 border-black mr-6 group-hover:rotate-12 transition-transform">
              <Phone class="w-6 h-6 text-black" stroke-width="2.5" />
            </div>
            <div>
              <p class="font-black uppercase text-sm text-gray-500 tracking-wider">Phone</p>
              <p class="font-bold text-xl">+628970632441</p>
            </div>
          </div>
        </div>

        <div class="mt-12 pt-8 border-t-4 border-black border-dashed relative">
          <!-- Tape decoration -->
          <div class="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-white/50 backdrop-blur-sm border-2 border-black/20 -rotate-2"></div>

          <p class="text-center font-bold text-lg bg-[#ffd900] p-5 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-1 hover:-rotate-1 transition-transform">
            I'm currently open to freelance opportunities, part-time positions, and interesting projects. Let's create something amazing together!
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
