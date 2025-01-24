<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import StepListItem from "./StepListItem.vue";

const props = defineProps({
    steps: {
        type: Array,
        required: true,
    },
});

const showLine = ref(false);
const line = ref(null);

function handleScroll() {
    const el = document.querySelector(".line");
    const top = el.getBoundingClientRect().top;

    showLine.value = top < window.innerHeight - 200;
}

onMounted(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
    <ol class="space-y-8 mx-auto max-w-2xl relative">
        <div v-show="showLine" class="w-[.1rem] md:w-0.5 bg-yellow-600 inline-block absolute top-5 left-4 line"></div>

        <StepListItem
            v-for="(step, index) in steps"
            :key="`step-${index}`"
            :step="step"
            :hasLine="index !== steps.length - 1"
            data-aos="fade-down"
            :data-aos-delay="index * 100"
        />
    </ol>
</template>
<style scoped>
@keyframes growLine {
    from {
        height: 0;
    }
    to {
        height: 90%;
    }
}

.line {
    animation: growLine 1s ease-out forwards;
}
</style>
