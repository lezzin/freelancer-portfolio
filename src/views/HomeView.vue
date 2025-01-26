<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";

import HomeHero from "../components/sections/Home/HomeHero.vue";
import HomeServices from "../components/sections/Home/HomeServices.vue";
import HomeProjects from "../components/sections/Home/HomeProjects.vue";
import HomeTecnologies from "../components/sections/Home/HomeTecnologies.vue";
import HomeSteps from "../components/sections/Home/HomeSteps.vue";
import HomeBanner from "../components/sections/Home/HomeBanner.vue";

const route = useRoute();

onMounted(() => {
    if (route.hash) {
        const element = document.querySelector(route.hash);

        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }
});
</script>

<template>
    <HomeHero />
    <!-- <HomeBanner /> -->
    <HomeServices />
    <HomeTecnologies />
    <HomeSteps />
    <HomeProjects />
</template>
