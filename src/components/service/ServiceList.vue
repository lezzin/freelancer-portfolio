<script setup>
import AppSlider from "../shared/AppSlider.vue";
import ServiceListItem from "./ServiceListItem.vue";
import "vue3-carousel/dist/carousel.css";

const props = defineProps({
    services: {
        type: Array,
        required: true,
    },
});
</script>

<template>
    <AppSlider :items="services" :component="ServiceListItem" item-prop="service" />
</template>
