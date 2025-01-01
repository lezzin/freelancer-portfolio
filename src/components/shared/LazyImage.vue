<script setup>
import { ref } from 'vue';
import { useLazyload } from 'vue3-lazyload';

const props = defineProps(["url"]);

const successUrl = ref(props.url);

const lazyRef = useLazyload(successUrl, {
    error: '/img/image-load-error.webp',
    loading: '',
    lifecycle: {
        loading: (el) => {
            el.style.opacity = 0;
            el.style.transition = "opacity .3s ease"
        },
        error: (el) => {
            el.style.opacity = 1;
        },
        loaded: (el) => {
            el.style.opacity = 1;
        }
    }
});
</script>

<template>
    <img ref="lazyRef">
</template>