<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Menu, X } from 'lucide-vue-next';

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};
</script>

<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b-3 border-transparent',
      isScrolled ? 'bg-white neo-border border-b-black py-2' : 'bg-transparent py-4'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-12">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <a href="#home" class="text-2xl font-black tracking-tighter" @click="closeMobileMenu">
            <span class="bg-[#ffd900] px-2 py-1 neo-border shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">FA</span>
          </a>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-6">
            <a
              v-for="link in navLinks"
              :key="link.name"
              :href="link.href"
              class="font-bold hover:bg-[#ff90e8] px-3 py-2 border-2 border-transparent hover:border-black hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              {{ link.name }}
            </a>
          </div>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <button
            @click="toggleMobileMenu"
            class="p-2 bg-[#b2ff90] neo-btn flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <Menu v-if="!isMobileMenuOpen" class="w-6 h-6 text-black" />
            <X v-else class="w-6 h-6 text-black" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-show="isMobileMenuOpen"
      class="md:hidden absolute top-full left-0 right-0 bg-white border-b-3 border-black border-t-3 shadow-[0_8px_0px_0px_rgba(0,0,0,1)]"
    >
      <div class="px-4 pt-2 pb-6 space-y-2">
        <a
          v-for="link in navLinks"
          :key="link.name"
          :href="link.href"
          @click="closeMobileMenu"
          class="block font-bold text-lg px-3 py-3 border-2 border-black bg-[#f4f0ea] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-[#8be9fd] transition-colors"
        >
          {{ link.name }}
        </a>
      </div>
    </div>
  </nav>
</template>
