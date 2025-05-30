<script setup lang="ts">
import PageContainer from "./PageContainer.vue";

interface PageSectionProps {
  centered?: boolean;
  withBg?: boolean;
  fluid?: boolean;
}

const props = withDefaults(defineProps<PageSectionProps>(), {
  centered: false,
  withBg: false,
  fluid: false,
});

const getSectionClasses = () => {
  const { centered, withBg } = props;

  return [
    "overflow-hidden",
    centered ? "min-h-[90vh] py-2" : "py-16",
    withBg ? "bg-gray-100" : "",
  ]
    .join(" ")
    .trim();
};
</script>

<template>
  <section :class="getSectionClasses()">
    <PageContainer :centered="centered" :fluid="fluid">
      <slot></slot>
    </PageContainer>
  </section>
</template>
