<script setup>
import { RouterLink } from 'vue-router';
import LazyImage from './LazyImage.vue';

const props = defineProps({
    variant: {
        type: String,
        default: 'small'
    }
});

const logoSizes = {
    'small': 'w-12 h-12',
    'normal': 'w-32 h-32',
}
</script>

<template>
    <router-link to="/">
        <LazyImage url="/img/logo.svg" alt="Logo do projeto" :class="`${logoSizes[variant]} aspect-square`" />
        <span class="sr-only">Flashcards</span>
    </router-link>
</template>