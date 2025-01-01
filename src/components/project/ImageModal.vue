<script setup>
import { imageUrl } from '../../utils/urlUtils';
import { XMarkIcon } from '@heroicons/vue/24/solid';

const props = defineProps({
    show: {
        type: Boolean,
        required: true
    },
    image: {
        required: true
    }
})

const emit = defineEmits(["close"]);
</script>

<template>
    <div v-if="show && image" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        role="dialog" aria-modal="true">
        <div class="bg-white rounded-lg p-6 mx-3 md:mx-0 relative max-h-[90vh] overflow-y-auto">
            <button
                class="fixed top-4 right-4 text-gray-600 bg-white hover:text-gray-900 hover:bg-gray-200 border rounded-md p-1"
                @click="emit('close')" aria-label="Close modal">
                <XMarkIcon class="size-5" />
            </button>

            <div class="mt-4">
                <img :src="imageUrl(image.src, 'details')" :alt="image.label"
                    class="w-full max-h-[80vh] rounded-md object-contain" />
            </div>
        </div>
    </div>
</template>