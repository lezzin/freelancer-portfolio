<script setup lang="ts">
import About from './components/About.vue';
import Contact from './components/Contact.vue';
import Feedbacks from './components/Feedbacks.vue';
import Footer from './components/Footer.vue';
import Hero from './components/Hero.vue';
import Navbar from './components/Navbar.vue';
import Projects from './components/Projects.vue';
import Services from './components/Services.vue';
</script>

<template>
  <div class="min-h-screen font-sans selection:bg-green-vibrant selection:text-black">
    <Navbar />

    <main>
      <Hero />
      <Services />
      <Projects />
      <Feedbacks />
      <About />
      <Contact />
    </main>
    <Footer />
  </div>
</template>