<script setup lang="ts">
import { motion } from "motion-v";
</script>

<template>
  <section id="sobre" class="bg-bg-card scroll-mt-24 py-12 lg:py-16 mt-12 border-y border-white/5 overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
      <motion.div :initial="{ opacity: 0, x: -50 }" :whileInView="{ opacity: 1, x: 0 }" :viewport="{
        once: true,
        margin: '-100px'
      }" :transition="{ duration: 0.8 }" class="relative flex justify-center">
        <div class="absolute w-75 h-75 md:w-112.5 md:h-112.5 bg-green-900/50 rounded-full -z-10 blur-3xl"></div>
        <img src="/profile.jpg" alt="Leandro Adrian"
          class="relative z-10 w-75 h-75 md:w-112.5 md:h-112.5 object-cover rounded-full border-4 border-green-vibrant/30"
          referrerPolicy="no-referrer" />
      </motion.div>

      <motion.div :initial="{ opacity: 0, x: 50 }" :whileInView="{ opacity: 1, x: 0 }" :viewport="{
        once: true,
        margin: '-100px'
      }" :transition="{ duration: 0.8 }">
        <div class="flex items-center gap-2 text-green-vibrant mb-4">
          <span class="w-6 h-0.5 bg-green-vibrant"></span>
          <span class="text-sm font-medium uppercase tracking-wider text-green-soft">
            Sobre Mim
          </span>
        </div>

        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
          Quem é <span class="text-green-vibrant">Leandro Adrian?</span>
        </h2>

        <p class="text-gray-400 mb-10 leading-relaxed text-sm lg:text-base">
          Sou um desenvolvedor full-stack apaixonado por criar soluções web
          que não apenas parecem incríveis, mas também entregam resultados
          reais para os negócios. Minha abordagem une design sofisticado com
          engenharia de software robusta, garantindo que cada projeto seja
          rápido, acessível e escalável.
        </p>

        <div class="grid grid-cols-3 gap-6 mb-12">
          <div>
            <h4 class="text-3xl font-bold text-green-vibrant mb-2">
              3+
            </h4>
            <p class="text-xs text-gray-500">Projetos Entregues</p>
          </div>

          <div>
            <h4 class="text-3xl font-bold text-green-vibrant mb-2">
              2+
            </h4>
            <p class="text-xs text-gray-500">Clientes Felizes</p>
          </div>

          <div>
            <h4 class="text-3xl font-bold text-green-vibrant mb-2">2+</h4>
            <p class="text-xs text-gray-500">Anos de Experiência</p>
          </div>
        </div>

        <div class="font-signature text-4xl text-green-soft">
          Leandro Adrian
        </div>
      </motion.div>
    </div>
  </section>
</template>