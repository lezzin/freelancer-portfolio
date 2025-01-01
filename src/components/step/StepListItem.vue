<script setup>
const props = defineProps({
    step: {
        type: Object,
        required: true
    },
    hasLine: {
        type: Boolean,
        default: true
    }
});
</script>

<template>
    <li class="relative flex-1">
        <div class="flex items-start justify-start font-medium w-full gap-4">
            <span class="w-8 h-8 aspect-square border-2 bg-yellow-300 rounded-full flex justify-center items-center text-sm text-teal-800 bg-gray-50 border-yellow-500 border-solid">
                {{ step.step }}
            </span>

            <div class="block">
                <h3 class="text-lg font-semibold text-teal-800">
                    {{ step.title }}
                </h3>

                <p class="text-sm text-gray-600">{{ step.description }}</p>
            </div>
        </div>
    </li>
</template>
