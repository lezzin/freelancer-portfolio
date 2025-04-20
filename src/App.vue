<script setup>
import { RouterView } from "vue-router";
import PageHeader from "./components/layout/PageHeader.vue";
import PageFooter from "./components/layout/PageFooter.vue";
</script>

<template>
    <PageHeader />

    <main class="min-h-[90vh]">
        <router-view></router-view>
    </main>

    <PageFooter />
</template>
