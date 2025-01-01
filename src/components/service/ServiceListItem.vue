<script setup>
const props = defineProps({
    service: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <div class="bg-white p-4 shadow-lg rounded-md transition-all hover:shadow-xl hover:scale-[1.05] group-hover">
        <div class="pl-16 relative">
            <h3 class="text-base/7 font-semibold text-gray-900 flex items-center">
                <div
                    class="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-red-600 transition duration-300">
                    <component :is="service.icon" class="size-6 text-white" aria-hidden="true" />
                </div>

                <span>{{ service.name }}</span>
            </h3>
            <p class="mt-2 text-base/7 text-gray-600">{{ service.description }}</p>
        </div>
    </div>
</template>

<style scoped>
.group-hover:hover div.absolute {
    transform: rotate(6deg);
}
</style>
