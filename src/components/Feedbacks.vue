<script setup lang="ts">
import { Star } from "lucide-vue-next";
import { motion } from "motion-v";
import { containerVariants, itemVariants } from '../constants/motion';
import feedbacks from "../data/feedbacks";
</script>

<template>
  <section id="feedbacks" class="py-12 lg:py-16 scroll-mt-24 max-w-7xl mx-auto px-6 overflow-hidden">
    <motion.div :initial="{ opacity: 0, y: 30 }" :whileInView="{ opacity: 1, y: 0 }" :viewport="{
      once: true,
      margin: '-100px'
    }" :transition="{ duration: 0.6 }" class="flex flex-col items-center text-center mb-12 gap-4">
      <div class="flex items-center gap-2 text-green-vibrant">
        <span class="w-6 h-0.5 bg-green-vibrant"></span>
        <span class="text-sm font-medium uppercase tracking-wider text-green-soft">
          Depoimentos
        </span>

        <span class="w-6 h-0.5 bg-green-vibrant"></span>
      </div>

      <h2 class="text-4xl md:text-5xl font-bold">
        O que dizem os <span class="text-green-vibrant">clientes</span>
      </h2>
    </motion.div>

    <motion.div :variants="containerVariants" initial="hidden" whileInView="visible" :viewport="{
      once: true,
      margin: ' -50px'
    }" class="grid md:grid-cols-3 gap-6">
      <motion.div v-for="(feedback, index) in feedbacks" :variants="itemVariants" :key="index"
        class="bg-bg-card p-8 rounded-2xl border border-white/5 hover:border-green-vibrant/30 transition-colors flex flex-col h-full">
        <div class="flex gap-1 mb-6 text-green-vibrant">
          <Star v-for="i in [...Array(5)]" :key="i" :size="16" fill="currentColor" />
        </div>

        <p class="text-gray-300 italic mb-8 flex-1 text-sm leading-relaxed">
          "{{ feedback.text }}"
        </p>

        <div class="flex items-center gap-4">
          <img v-if="feedback?.image" :src="feedback.image" class="w-12 h-12 rounded-full" />
          <div v-else
            class="w-12 h-12 rounded-full bg-green-900 flex items-center justify-center font-bold text-green-vibrant">
            {{ feedback.name.charAt(0) }}
          </div>

          <div>
            <h5 class="font-bold text-white text-sm">
              {{ feedback.name }}
            </h5>

            <p class="text-xs text-gray-500">{{ feedback.role }}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
</template>