<script setup>
import { imageUrl } from '../../utils/urlUtils';
import { XMarkIcon } from '@heroicons/vue/24/solid';

const props = defineProps({
    show: {
        type: Boolean,
        required: true
    },
    details: {
        required: true
    }
})

const emit = defineEmits(["openImageModal", "close"]);
</script>

<template>
    <div v-if="show && details" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        role="dialog" aria-modal="true">

        <div class="bg-white rounded-lg p-6 mx-3 md:mx-0 md:max-w-[80%] relative max-h-[90vh] overflow-y-auto">
            <button
                class="fixed top-4 right-4 text-gray-600 bg-white hover:text-gray-900 hover:bg-gray-200 border rounded-md p-1"
                @click="emit('close')" aria-label="Close modal">
                <XMarkIcon class="size-5" />
            </button>

            <div class="mt-4">
                <h4 class="text-md font-semibold text-gray-800">Detalhes das Imagens</h4>

                <ul class="grid md:grid-cols-2 mt-2 gap-4">
                    <li v-for="(detail, index) in details.imageDetails" :key="index"
                        class="ring-1 ring-gray-300 rounded-md overflow-hidden">
                        <img :src="imageUrl(detail.src, 'details')" :alt="detail.label"
                            class="w-full aspect-video object-cover cursor-zoom-in"
                            @click="emit('openImageModal', detail)" tabindex="0" />
                        <span class="border-t border-gray-300 text-sm text-gray-700 block p-2">
                            {{ detail.label }}
                        </span>
                    </li>
                </ul>
            </div>

            <div class="mt-4">
                <h4 class="text-md font-semibold text-gray-800">Descrição Detalhada</h4>
                <div class="prose mt-2" v-html="details.detailedDescription"></div>
            </div>

            <div class="mt-4">
                <a :href="details.deployUrl" target="_blank" class="text-green-600 hover:underline">
                    Visitar o Projeto
                </a>
            </div>
        </div>
    </div>
</template>