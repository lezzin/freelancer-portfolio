<script setup lang="ts">
import { Menu, X } from 'lucide-vue-next';
import { motion, AnimatePresence } from 'motion-v';
import { ref } from 'vue';

const isOpen = ref(false);
const links = ["Serviços", "Projetos", "Feedbacks", "Sobre", "Contato"];
</script>

<template>
  <motion.nav :initial="{ opacity: 0, y: -20 }" :animate="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.6, delay: 0.2 }" class="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50
    bg-bg-card/90 backdrop-blur-md border border-white/5 px-6 py-4 flex justify-between items-center shadow-2xl"
    :class="isOpen
      ? 'rounded-t-3xl' : 'rounded-full'">


    <div class="flex items-center gap-3 text-white font-bold text-xl">
      <div class="w-8 h-8 rounded-full bg-green-900 text-green-vibrant flex items-center justify-center text-sm">
        L
      </div>
      Adrian
    </div>

    <div class="hidden md:flex items-center gap-8 text-sm font-medium text-white/80">
      <a href="#home" class="text-green-vibrant">
        Home
      </a>

      <a v-for="link in links" :key="link" :href="`#${link.toLowerCase()}`" class="hover:text-white transition-colors">
        {{ link }}
      </a>
    </div>

    <a href="#contato"
      class="hidden md:block bg-green-900 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-green-800 transition-colors border border-green-vibrant/20">
      Me Contrate
    </a>

    <button class="md:hidden text-white" @click="isOpen = !isOpen">
      <X v-if="isOpen" :size="24" />
      <Menu v-else :size="24" />
    </button>
  </motion.nav>

  <AnimatePresence>
    <motion.div v-if="isOpen" :initial="{ opacity: 0, y: -20 }" :animate="{ opacity: 1, y: 0 }"
      :exit="{ opacity: 0, y: -20 }" class="fixed top-20 left-1/2 -translate-x-1/2 w-[95%] z-40 bg-bg-card/95 backdrop-blur-md border border-white/5
      p-6 shadow-2xl md:hidden flex flex-col gap-4" :class="isOpen ? 'rounded-b-3xl rounded-t-none' : 'rounded-full'">

      <a href="#home" @click="isOpen = false" class="text-green-vibrant font-medium text-lg">
        Home
      </a>

      <a v-for="link in links" :key="link" :href="`#${link.toLowerCase()}`" @click="isOpen = false"
        class="text-white/80 hover:text-white font-medium text-lg transition-colors">
        {{ link }}
      </a>

      <a href="#contato" @click="isOpen = false" class="mt-4 bg-green-900 text-white px-6 py-3 rounded-full font-bold text-center hover:bg-green-800
        transition-colors border border-green-vibrant/20">
        Me Contrate
      </a>
    </motion.div>
  </AnimatePresence>
</template>