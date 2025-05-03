<script setup>
import AppCard from "../shared/AppCard.vue";
import StepListItem from "./StepListItem.vue";

const props = defineProps({
    steps: {
        type: Array,
        required: true,
    },
});
</script>

<template>
    <AppCard class="relative max-w-2xl mx-auto" data-aos="fade-in">
        <ol class="space-y-8 mx-auto">
            <StepListItem
                v-for="(step, index) in steps"
                :key="`step-${index}`"
                :step="step"
                :hasLine="index !== steps.length - 1"
                data-aos="fade-down"
                :data-aos-delay="index * 100"
            />
        </ol>
    </AppCard>
</template>
