<script setup>
import StepListItem from './StepListItem.vue';

const props = defineProps({
    steps: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        <StepListItem v-for="(step, index) in steps" :key="index" :step="step" />
    </div>
</template>