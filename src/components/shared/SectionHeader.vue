<script setup>
const props = defineProps({
    sectionTitle: {
        type: String,
        required: true,
    },
    sectionDescription: {
        type: String,
        required: false,
    },
    sectionAlign: {
        type: String,
        default: "center",
    },
});
</script>

<template>
    <div :class="sectionAlign === 'center' ? 'mx-auto' : 'md:text-center lg:text-left'" class="md:text-center lg:max-w-2xl" v-if="sectionDescription">
        <h2 class="section-title" data-aos="fade-left" v-html="sectionTitle"></h2>
        <p class="section-subtitle" data-aos="fade-right" data-aos-delay="100" v-html="sectionDescription"></p>
    </div>

    <h2 class="md:text-center section-title" data-aos="fade-left" v-else>{{ sectionTitle }}</h2>
</template>
