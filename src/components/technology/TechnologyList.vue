<script setup lang="ts">
import type { Technology } from "@/interfaces/Technology";

import TechnologyListItem from "./TechnologyListItem.vue";
import AppSlider from "../shared/AppSlider.vue";

interface TechnologyListProps {
  technologies: Technology[];
}

defineProps<TechnologyListProps>();
</script>

<template>
  <AppSlider
    :items="technologies"
    :component="TechnologyListItem"
    item-prop="technology"
  />
</template>
