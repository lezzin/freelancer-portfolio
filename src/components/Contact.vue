<script setup lang="ts">
import { MessageCircle, Mail, MapPin } from "lucide-vue-next";
import { motion } from "motion-v";
</script>

<template>

  <section id="contato" class="py-12 lg:py-16 scroll-mt-24 max-w-4xl mx-auto px-6 text-center overflow-hidden">
    <motion.div :initial="{ opacity: 0, y: 30 }" :whileInView="{ opacity: 1, y: 0 }" :viewport="{
      once: true,
      margin: '-100px'
    }" :transition="{ duration: 0.6 }">
      <div class="flex items-center justify-center gap-2 text-green-vibrant mb-4">
        <span class="w-6 h-0.5 bg-green-vibrant"></span>

        <span class="text-sm font-medium uppercase tracking-wider text-green-soft">
          Contato
        </span>

        <span class="w-6 h-0.5 bg-green-vibrant"></span>
      </div>

      <h2 class="text-4xl md:text-5xl font-bold mb-8">
        Vamos Trabalhar <span class="text-green-vibrant">Juntos?</span>
      </h2>

      <p class="text-gray-400 mb-12 max-w-2xl mx-auto">
        Estou disponível para novos projetos e oportunidades. Entre em contato
        diretamente pelo WhatsApp ou envie um e-mail.
      </p>
    </motion.div>

    <motion.div :initial="{ opacity: 0, scale: 0.95, y: 40 }" :whileInView="{ opacity: 1, scale: 1, y: 0 }" :viewport="{
      once: true, margin: '-50px'
    }" :transition="{ duration: 0.7, delay: 0.2 }"
      class="bg-bg-card p-8 md:p-12 rounded-3xl border border-white/5 flex flex-col items-center max-w-2xl mx-auto shadow-2xl">
      <div class="w-20 h-20 bg-green-vibrant/10 rounded-full flex items-center justify-center mb-6 text-green-vibrant">
        <MessageCircle :size="40" />
      </div>

      <h3 class="text-2xl font-bold mb-2">Inicie uma conversa</h3>
      <p class="text-gray-400 mb-8 text-center">
        A forma mais rápida de falar comigo é através do WhatsApp. Clique no
        botão abaixo para me mandar uma mensagem agora mesmo!
      </p>

      <a href="https://wa.me/5535997242338" target="_blank" rel="noopener noreferrer"
        class="w-full sm:w-auto px-8 py-4 text-nowrap rounded-full bg-green-vibrant hover:bg-green-vibrant/90 text-white font-semibold flex items-center justify-center gap-3 transition-all hover:scale-105 mb-8">
        <img src="/whatsapp.webp" class="h-5 w-5 min-h-5 min-w-5" />
        Chamar no WhatsApp
      </a>

      <div class="w-full h-px bg-white/10 mb-8"></div>

      <div class="flex flex-col sm:flex-row gap-6 sm:gap-12 justify-center w-full">
        <div class="flex flex-col items-center gap-2">
          <div class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-green-soft">
            <Mail :size="20" />
          </div>
          <span class="text-sm text-gray-300">lezzin.code@gmail.com</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <div class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-green-soft">
            <MapPin :size="20" />
          </div>
          <span class="text-sm text-gray-300">Muzambinho, MG</span>
        </div>
      </div>
    </motion.div>
  </section>
</template>
