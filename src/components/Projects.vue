<script setup lang="ts">
import { AnimatePresence, motion } from "motion-v";
import { ArrowRight, ExternalLink, Github, X } from "lucide-vue-next";
import { ref, watchEffect } from "vue";
import projects, { type Project } from "../data/projects";

const selectedProject = ref<Project | null>(null)

watchEffect((onCleanup) => {
  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") selectedProject.value = null;
  };

  if (selectedProject.value) {
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
  }

  onCleanup(() => {
    document.body.style.overflow = "";
    window.removeEventListener("keydown", onKeyDown);
  });
});

const activeImage = ref<string | null>(null);

watchEffect(() => {
  if (selectedProject.value) {
    activeImage.value = selectedProject.value.image;
  }
});
</script>

<template>
  <section id="projetos" class="relative scroll-mt-24 bg-bg-main py-12 lg:py-16">
    <div class="mx-auto max-w-7xl px-6">
      <motion.div :initial="{ opacity: 0, y: -30 }" :whileInView="{ opacity: 1, y: 0 }" :viewport="{ once: true }"
        :transition="{ duration: 0.6 }" class="mb-12 flex flex-col items-center text-center gap-3">
        <div class="flex items-center gap-2 text-green-vibrant">
          <span class="w-6 h-0.5 bg-green-vibrant" />
          <span class="text-sm font-medium uppercase tracking-wider text-green-soft">
            Portfólio
          </span>
          <span class="w-6 h-0.5 bg-green-vibrant" />
        </div>

        <h2 class="text-3xl md:text-5xl font-bold">
          Projetos <span class="text-green-vibrant">Recentes</span>
        </h2>
      </motion.div>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        <motion.button v-for="(project, index) in projects" type="button" :key="index"
          @click="() => { selectedProject = project }" :initial="{ opacity: 0, y: 28 }"
          :whileInView="{ opacity: 1, y: 0 }" :viewport="{ once: true, amount: 0.2 }"
          :transition="{ duration: 0.5, delay: index * 0.06 }" class="group rounded-2xl cursor-pointer border border-white/5 bg-bg-card p-4 text-left transition-colors
          hover:border-green-vibrant/50">
          <div class="relative mb-5 aspect-video overflow-hidden rounded-xl bg-white/5">
            <img :src="project.image" :alt="project.title"
              class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerpolicy="no-referrer" />
          </div>

          <div class="flex items-center justify-between px-2">
            <div>
              <p class="mb-1 text-xs font-medium text-green-soft">
                {{ project.category }}
              </p>
              <h3 class="text-xl font-bold">{{ project.title }}</h3>
            </div>

            <div
              class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 transition-colors group-hover:bg-green-vibrant group-hover:text-black">
              <ArrowRight :size="18" />
            </div>
          </div>
        </motion.button>
      </div>
    </div>
  </section>

  <AnimatePresence>
    <motion.div v-if="selectedProject"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
      :initial="{ opacity: 0 }" :animate="{ opacity: 1 }" :exit="{ opacity: 0 }" @click="selectedProject = null">
      <motion.div @click.stop :initial="{ opacity: 0, y: 40, scale: 0.95 }" :animate="{ opacity: 1, y: 0, scale: 1 }"
        :exit="{ opacity: 0, y: 20, scale: 0.98 }" :transition="{ duration: 0.3 }"
        class="relative w-full max-w-6xl max-h-[92vh] overflow-hidden rounded-3xl border border-white/10 bg-black/80">
        <button @click="selectedProject = null"
          class="absolute top-4 right-4 z-20 h-10 w-10 flex items-center justify-center rounded-full bg-black/60 border border-white/10 hover:bg-black/80 transition cursor-pointer">
          <X :size="18" />
        </button>

        <div class="grid md:grid-cols-2 h-full max-h-[92vh]">
          <div class="flex flex-col bg-black/40 border-r border-r-white/10">
            <div class="flex-1 overflow-hidden aspect-16/8">
              <img :src="activeImage || selectedProject.image"
                class="w-full h-full object-cover transition duration-500" />
            </div>

            <div class="flex gap-3 p-4 overflow-x-auto">
              <button v-for="(photo, index) in [selectedProject.image, ...selectedProject.gallery]" :key="index"
                @click="activeImage = photo" class="relative shrink-0 rounded-xl overflow-hidden border transition"
                :class="[
                  activeImage === photo
                    ? 'border-green-vibrant scale-105'
                    : 'border-white/10 hover:border-white/30'
                ]">
                <img :src="photo" class="h-16 w-28 object-cover hover:scale-110 transition" />
              </button>
            </div>
          </div>

          <div class="flex flex-col overflow-y-auto p-6 md:p-8">
            <div class="mb-6">
              <p class="text-xs uppercase tracking-[0.2em] text-green-soft mb-2">
                {{ selectedProject.category }}
              </p>

              <h2 class="text-2xl md:text-3xl font-bold leading-tight">
                {{ selectedProject.title }}
              </h2>
            </div>

            <p class="text-sm md:text-base text-white/70 leading-relaxed mb-8">
              {{ selectedProject.description }}
            </p>

            <div class="flex flex-col sm:flex-row gap-3 mt-auto">
              <a v-if="selectedProject.github" :href="selectedProject.github" target="_blank"
                class="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm hover:bg-white/10 transition">
                <Github :size="17" />
                GitHub
              </a>

              <a v-if="selectedProject.link" :href="selectedProject.link" target="_blank"
                class="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-green-vibrant px-5 py-3 text-sm font-semibold text-black hover:opacity-90 transition">
                <ExternalLink :size="17" />
                Ver projeto
              </a>

              <div v-if="!selectedProject.github && (!selectedProject.link || selectedProject.link === '#')"
                class="text-sm text-white/40">
                Projeto privado ou não disponível online
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </AnimatePresence>
</template>