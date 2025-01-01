<script setup>
import ServiceListItem from './ServiceListItem.vue';

const props = defineProps({
    services: {
        type: Array,
        required: true
    }
})
</script>
<template>
    <div class="grid grid-cols-1 gap-y-3 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 mx-auto">
        <ServiceListItem v-for="(service, index) in services" :service="service" :key="index"
            :data-aos="index % 2 === 0 ? 'flip-right' : 'flip-left'" />
    </div>
</template>
