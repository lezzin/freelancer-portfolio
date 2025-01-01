<script setup>
const props = defineProps({
    control: {
        type: Boolean,
        required: true
    }
})
</script>

<template>
    <teleport to="#overlay">
        <transition name="loader">
            <div class="fixed inset-0 z-50 bg-white flex items-center justify-center" v-if="props.control">
                <span
                    class="h-8 w-8 animate-spin rounded-full border-4 border-green-600 border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status">
                </span>
            </div>
        </transition>
    </teleport>
</template>

<style>
.loader-enter-active,
.loader-leave-active {
    transition: opacity 0.5s ease;
}

.loader-enter-from,
.loader-leave-to {
    opacity: 0;
}
</style>