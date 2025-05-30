<script setup lang="ts">
import { ref } from "vue";
import { useLazyload } from "vue3-lazyload";

interface LazyImageProps {
  url: string;
}

const props = defineProps<LazyImageProps>();
const successUrl = ref(props.url);

const lazyRef = useLazyload(successUrl, {
  error: "/img/image-error.png",
  loading: "",
  lifecycle: {
    loading: (el) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transition = "opacity .3s ease";
    },
    error: (el) => {
      if (!el) return;
      el.style.opacity = "1";
    },
    loaded: (el) => {
      if (!el) return;
      el.style.opacity = "1";
    },
  },
});
</script>

<template>
  <img ref="lazyRef" />
</template>
