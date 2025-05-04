<script setup>
import AppCard from "../shared/AppCard.vue";

const props = defineProps({
    technology: {
        type: Object,
        required: true,
    },
});

const categoryColors = {
    Backend: "bg-blue-100 text-blue-800",
    Frontend: "bg-green-100 text-green-800",
    Estilo: "bg-purple-100 text-purple-800",
    CMS: "bg-yellow-100 text-yellow-800",
};
</script>

<template>
    <AppCard class="h-full">
        <div class="pl-16 relative">
            <div class="absolute left-0 top-0 w-16 h-16 rounded-lg flex items-center justify-center mr-4 shadow-sm bg-gray-100">
                <span v-html="technology.icon" class="text-4xl"></span>
            </div>

            <div class="flex items-stretch flex-col ms-4 text-left">
                <h3 class="text-lg font-semibold text-gray-800">{{ technology.name }}</h3>

                <span class="w-fit inline-block px-2 py-1 rounded-full text-xs font-medium mt-1" :class="categoryColors[technology.category]">
                    {{ technology.category }}
                </span>

                <p class="text-gray-600 text-sm text-left mt-2">{{ technology.description }}</p>
            </div>
        </div>
    </AppCard>
</template>
