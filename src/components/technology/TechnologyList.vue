<script setup>
import AppSlider from "../shared/AppSlider.vue";
import TechnologyListItem from "./TechnologyListItem.vue";

const props = defineProps({
    technologies: {
        type: Array,
        required: true,
    },
});
</script>

<template>
    <AppSlider :items="technologies" :component="TechnologyListItem" item-prop="technology" />
</template>
