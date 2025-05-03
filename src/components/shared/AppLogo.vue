<script setup>
import { RouterLink } from "vue-router";
import LazyImage from "./LazyImage.vue";

const props = defineProps({
    variant: {
        type: String,
        default: "small",
    },
    coloring: {
        type: String,
        default: "bg-green-600 ring-green-900",
    },
});

const logoSizes = {
    small: "w-12 h-12",
    normal: "w-32 h-32",
};
</script>

<template>
    <router-link to="/" :class="`${logoSizes[variant]} ring-1 ${coloring} aspect-square rounded-full`">
        <LazyImage url="logo.svg" alt="Logo do projeto" />
        <span class="sr-only">Leandro Adrian da Silva</span>
    </router-link>
</template>
