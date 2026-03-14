<script setup lang="ts">
import { motion } from "motion-v";
</script>

<template>
  <motion.footer :initial="{ opacity: 0 }" :whileInView="{ opacity: 1 }" :viewport="{ once: true }" :transition="{
    duration: 0.8
  }" class="py-8 border-t border-white/5 text-center text-sm text-gray-500 bg-bg-main mt-12">

    <p>
      © {{ new Date().getFullYear() }} Leandro Adrian.
      <br class="md:hidden md:flex-none" />
      <br class="md:hidden md:flex-none" />
      Todos os direitos reservados.
    </p>

  </motion.footer>
</template>