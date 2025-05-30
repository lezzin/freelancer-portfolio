<script setup lang="ts">
import type { Service } from "@/interfaces/Service";

import AppSlider from "../shared/AppSlider.vue";
import ServiceListItem from "./ServiceListItem.vue";

interface ServiceList {
  services: Service[];
}

defineProps<ServiceList>();
</script>

<template>
  <AppSlider
    :items="services"
    :component="ServiceListItem"
    item-prop="service"
  />
</template>
