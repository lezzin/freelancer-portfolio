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
      class=" fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4 py-6 backdrop-blur-sm"
      :initial="{ opacity: 0 }" :animate="{ opacity: 1 }" :exit="{ opacity: 0 }"
      @click="() => { selectedProject = null }">
      <motion.div :initial="{ opacity: 0, y: 24, scale: 0.96 }" :animate="{ opacity: 1, y: 0, scale: 1 }" :exit="{
        opacity: 0, y: 16, scale: 0.98
      }" :transition="{ duration: 0.28 }" @click.stop class=" relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10
        bg-[#0c0c0c] shadow-2xl">
        <button type="button" @click="() => { selectedProject = null }" class=" absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border
          border-white/10 bg-black/50 text-white transition hover:border-white/20 hover:bg-black/70">
          <X :size="18" />
        </button>

        <div class=" max-h-[90vh] overflow-y-auto">
          <div class="aspect-16/8 w-full overflow-hidden bg-white/5">
            <img :src="selectedProject.image" :alt="selectedProject.title" class="h-full w-full object-cover"
              referrerpolicy="no-referrer" />
          </div>

          <div class="grid gap-8 p-5 md:p-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p class="mb-2 text-sm font-medium uppercase tracking-[0.18em] text-green-soft">
                {{ selectedProject.category }}
              </p>

              <h3 class="mb-4 text-2xl font-bold md:text-4xl">
                {{ selectedProject.title }}
              </h3>

              <p class="mb-6 text-sm leading-relaxed text-white/70 md:text-base">
                {{ selectedProject.description }}
              </p>

              <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <a :href="selectedProject.github" target="_blank" rel="noreferrer"
                  class="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/10">
                  <Github :size="17" />
                  GitHub
                </a>

                <a :href="selectedProject.link" target="_blank" rel="noreferrer"
                  class="inline-flex items-center justify-center gap-2 rounded-full bg-green-vibrant px-5 py-3 text-sm font-semibold text-black transition hover:opacity-90">
                  <ExternalLink :size="17" />
                  Ver projeto
                </a>
              </div>
            </div>

            <div>
              <h4 class=" mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/50">
                Mais imagens
              </h4>

              <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <div v-for="(photo, index) in selectedProject.gallery" :key="index" class="overflow-hidden rounded-2xl border
                  border-white/8 bg-white/5">
                  <img :src="photo" :alt="`${selectedProject.title} ${+index + 1}`"
                    class=" w-full aspect-video object-cover" referrerpolicy="no-referrer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </AnimatePresence>
</template>