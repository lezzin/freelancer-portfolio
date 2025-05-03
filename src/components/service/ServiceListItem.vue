<script setup>
import AppCard from "../shared/AppCard.vue";

const props = defineProps({
    service: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <AppCard class="group-hover h-full text-left">
        <div class="pl-16 relative">
            <h3 class="text-base/7 font-semibold text-gray-900 flex items-center">
                <div class="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-yellow-600 transition duration-300">
                    <component :is="service.icon" class="size-6 text-white" aria-hidden="true" />
                </div>

                <p>{{ service.name }}</p>
            </h3>
            <p class="mt-2 text-base/7 text-gray-600">{{ service.description }}</p>
        </div>
    </AppCard>
</template>

<style scoped>
.group-hover:hover div.absolute {
    transform: rotate(6deg);
}
</style>
