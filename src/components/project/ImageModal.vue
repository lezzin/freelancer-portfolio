<script setup lang="ts">
import type { ImageDetails } from "@/interfaces/Project";

import { XMarkIcon } from "@heroicons/vue/24/solid";
import { imageUrl } from "../../utils/urlUtils";

interface ImageModalProps {
  show: boolean;
  image: ImageDetails | null;
}

defineProps<ImageModalProps>();
defineEmits(["close"]);
</script>

<template>
  <div
    v-if="show && image"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="bg-white rounded-lg p-6 mx-3 md:mx-0 relative max-h-[90vh] overflow-y-auto"
    >
      <button
        class="fixed top-5 right-5 text-gray-600 bg-white hover:text-gray-900 hover:bg-gray-200 border rounded-md p-1"
        @click="$emit('close')"
        aria-label="Fechar Modal"
      >
        <XMarkIcon class="size-6" />
      </button>

      <div class="mt-4">
        <img
          :src="imageUrl(image.src, 'details')"
          :alt="image.label"
          class="w-full max-h-[80vh] rounded-md object-contain"
        />
      </div>
    </div>
  </div>
</template>
