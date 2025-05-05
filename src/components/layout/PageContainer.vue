<script setup lang="ts">
interface PageContainerProps {
  centered: boolean;
  fluid: boolean;
}

const props = withDefaults(defineProps<PageContainerProps>(), {
  centered: false,
  fluid: false,
});

const getContainerClasses = (): string => {
  const { centered, fluid } = props;

  return [
    "mx-auto px-4 md:px-2 max-w-7xl",
    centered ? "flex flex-col justify-center min-h-[90vh]" : "",
    fluid ? "" : "container",
  ]
    .join(" ")
    .trim();
};
</script>

<template>
  <div :class="getContainerClasses()">
    <slot></slot>
  </div>
</template>
