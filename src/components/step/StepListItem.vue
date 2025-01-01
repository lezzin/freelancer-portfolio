<script setup>
const props = defineProps({
    step: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <div class="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <div class="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full mb-4">
            <span class="text-lg font-bold">{{ step.step }}</span>
        </div>

        <h3 class="text-xl font-semibold mb-2">{{ step.title }}</h3>
        <p class="text-gray-600">{{ step.description }}</p>
    </div>
</template>