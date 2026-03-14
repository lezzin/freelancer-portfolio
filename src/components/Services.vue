<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import { motion } from 'motion-v';
import { containerVariants, itemVariants } from '../constants/motion';
import services from '../data/services';
</script>

<template>
  <section id="serviços" class="py-12 lg:py-16 max-w-7xl scroll-mt-24 mx-auto px-6 overflow-hidden">
    <motion.div :initial="{ opacity: 0, y: 30 }" :whileInView="{ opacity: 1, y: 0 }" :viewport="{
      once: true,
      margin: '-100px'
    }" :transition="{ duration: 0.6 }" class="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
      <div>
        <div class="flex items-center gap-2 text-green-vibrant mb-4">
          <span class="w-6 h-0.5 bg-green-vibrant"></span>
          <span class="text-sm font-medium uppercase tracking-wider text-green-soft">
            Serviços
          </span>
        </div>
        <h2 class="text-4xl md:text-5xl font-bold">
          <span class="text-green-vibrant">Serviços</span> que Ofereço
        </h2>
      </div>
    </motion.div>

    <motion.div :variants="containerVariants" initial="hidden" whileInView="visible" :viewport="{
      once: true,
      margin: '-50px'
    }" class="grid md:grid-cols-3 gap-6">
      <motion.div :variants="itemVariants" v-for="(service, index) in services" :key="index"
        class="bg-bg-card p-8 rounded-2xl border border-white/5 hover:border-green-vibrant/50 transition-colors group">
        <div
          class="w-12 h-12 rounded-lg bg-green-900/30 flex items-center justify-center text-green-vibrant mb-6 group-hover:scale-110 transition-transform">
          <component :is="service.icon" :size="24" />
        </div>

        <h3 class="text-xl font-bold mb-4">{{ service.title }}</h3>

        <p class="text-gray-400 text-sm mb-8 leading-relaxed">
          {{ service.desc }}
        </p>

        <a href="#" class="text-green-vibrant text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all">
          Saiba mais
          <ArrowRight :size="14" />
        </a>
      </motion.div>
    </motion.div>
  </section>
</template>