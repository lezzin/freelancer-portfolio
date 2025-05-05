<script setup lang="ts">
import type { Project } from "@/interfaces/Project";

import { XMarkIcon, PlusIcon } from "@heroicons/vue/24/solid";
import { imageUrl } from "@/utils/urlUtils";

import AppBadge from "../shared/AppBadge.vue";

interface DetailsModalProps {
  show: boolean;
  details: Project | null;
}

defineProps<DetailsModalProps>();
defineEmits(["openImageModal", "close"]);
</script>

<template>
  <div
    v-if="show && details"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="bg-white rounded-lg p-6 mx-3 md:mx-0 md:max-w-[80%] relative max-h-[90vh] overflow-y-auto"
    >
      <button
        class="fixed top-5 right-5 text-gray-600 bg-white hover:text-gray-900 hover:bg-gray-200 border rounded-md p-1"
        @click="$emit('close')"
        aria-label="Fechar Modal"
      >
        <XMarkIcon class="size-6" />
      </button>

      <h4 class="text-xl font-semibold text-gray-800 mb-8">
        Detalhes à respeito do projeto "{{ details.name }}"
      </h4>
      <div
        class="prose mt-2 text-base text-gray-700 mb-2"
        v-html="details.detailedDescription"
      ></div>

      <div class="flex flex-wrap items-center gap-1 mb-8">
        <AppBadge v-for="skill in details.skills">{{ skill }}</AppBadge>
      </div>

      <a
        :href="details.deployUrl"
        target="_blank"
        class="flex items-center w-fit justify-center gap-2 rounded bg-green-800 px-2 py-1 text-base font-semibold text-gray-100 shadow-sm hover:bg-green-700 focus-button focus-visible:outline-green-800"
      >
        <PlusIcon class="w-5 h-5" />
        Visualizar Projeto
      </a>

      <ul class="grid md:grid-cols-2 mt-4 gap-4">
        <li
          v-for="(detail, index) in details.imageDetails"
          :key="`image-details-${index}`"
          class="ring-1 ring-gray-300 rounded-md overflow-hidden"
        >
          <img
            :src="imageUrl(detail.src, 'details')"
            :alt="detail.label"
            class="w-full aspect-video object-cover cursor-zoom-in hover:opacity-90 transition-opacity"
            role="button"
            aria-label="Expandir imagem"
            @click="$emit('openImageModal', detail)"
          />
          <span
            class="border-t border-gray-300 text-sm text-gray-700 block p-2"
          >
            {{ detail.label }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>
