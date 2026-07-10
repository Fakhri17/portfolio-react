<template>
  <section id="about" class="py-24 px-4 relative overflow-hidden">
    <!-- Decorative background patterns -->
    <div class="absolute top-0 right-0 w-64 h-64 bg-[#ffd900] rounded-full mix-blend-multiply filter blur-3xl opacity-50 z-0"></div>
    <div class="absolute bottom-0 left-0 w-64 h-64 bg-[#ff90e8] rounded-full mix-blend-multiply filter blur-3xl opacity-50 z-0"></div>

    <div class="max-w-6xl mx-auto relative z-10">
      <!-- Section Title -->
      <div class="flex flex-col items-center md:items-start mb-16">
        <h2 class="text-5xl md:text-6xl font-black uppercase tracking-tight bg-[#b2ff90] px-6 py-2 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] -rotate-2 inline-block mb-4 hover:rotate-0 transition-transform duration-300">
          About Me
        </h2>
        <p class="text-xl md:text-2xl font-bold bg-white px-4 py-2 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-1 max-w-2xl text-center md:text-left">
         Informatic student with a passion for web development.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <!-- Image Column -->
        <div class="md:col-span-5 relative group">
          <!-- Offset Neobrutalist Shadow Box -->
          <div class="absolute inset-0 bg-[#cba6f7] translate-x-4 translate-y-4 border-4 border-black"></div>

          <div class="relative z-10 border-4 border-black bg-white overflow-hidden">
            <img
              src="/fakhri.png"
              alt="Fakhri Alauddin"
              class="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-500 hover:scale-105"
            />
          </div>

          <!-- Floating Badge -->
          <div class="absolute -top-6 -right-6 z-20 bg-[#ff90e8] border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-4 rotate-12 hover:rotate-45 transition-transform duration-300 cursor-default">
            <span class="text-3xl block transform -rotate-12">👋</span>
          </div>
        </div>

        <!-- Text Content Column -->
        <div class="md:col-span-7">
          <div class="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 md:p-10 relative hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">

            <!-- Tab Element -->
            <div class="absolute -top-5 left-8 bg-[#8be9fd] border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-4 py-1 font-black uppercase text-sm tracking-wider">
              Profile
            </div>

            <h3 class="text-2xl md:text-3xl font-black mb-6 mt-2 leading-tight uppercase">
              Web Developer
            </h3>

            <p class="text-lg font-bold mb-6 border-b-4 border-black pb-6 border-dotted">
              I am an Informatic student at Telkom University Surabaya with a strong interest in web development and networking.
            </p>

            <p class="text-lg font-bold text-gray-800 leading-relaxed bg-[#f4f0ea] p-4 border-2 border-black border-dashed">
              I have experience working with various technologies and frameworks, and I am passionate about creating user-friendly, robust, and visually appealing web applications that solve real-world problems.
            </p>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>
