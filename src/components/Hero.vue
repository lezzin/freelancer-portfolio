<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next';
import { motion } from 'motion-v';
import { containerVariants, itemVariants } from '../constants/motion';
</script>

<template>
  <section id="home"
    class="pt-40 pb-20 px-6 scroll-mt-12 max-w-5xl mx-auto flex flex-col items-center justify-center text-center min-h-[80vh]">
    <motion.div :variants="containerVariants" initial="hidden" animate="visible" class="flex flex-col items-center">
      <motion.div :variants="itemVariants" class="dashed-box mb-8">
        Olá, seja bem-vindo!
        <span class="corner-bl"></span>
        <span class="corner-br"></span>
      </motion.div>

      <motion.h1 :variants="itemVariants" class="text-4xl md:text-7xl font-bold leading-[1.1] mb-6">
        Sou <span class="text-green-vibrant">Leandro Adrian,</span>
        <br />
        Desenvolvedor Full-Stack.
      </motion.h1>

      <motion.p :variants="itemVariants"
        class="text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed text-base lg:text-xl">
        Transforme suas ideias em realidade com soluções web modernas. Crio
        desde landing pages até sistemas personalizados, tudo feito sob medida
        para você. Vamos criar algo incrível juntos!
      </motion.p>

      <motion.div :variants="itemVariants" class="flex flex-wrap items-center justify-center gap-4">
        <a href="#projetos"
          class="bg-green-900 text-white rounded-full pl-6 pr-2 py-2 flex items-center gap-4 hover:bg-opacity-90 transition-all border border-green-vibrant/30">
          <span class="font-medium text-sm">Ver meu Portfólio</span>

          <div class="w-8 h-8 rounded-full bg-green-vibrant flex items-center justify-center text-black">
            <ArrowRight :size="16" />
          </div>
        </a>

        <a href="#contato"
          class="px-8 py-3 rounded-full border border-gray-600 text-white font-medium hover:bg-white/5 transition-colors text-sm">
          Me Contrate
        </a>
      </motion.div>
    </motion.div>
  </section>
</template>