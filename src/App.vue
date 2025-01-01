<script setup>
import { PROJECT_TITLE } from './constants';

import { RouterView } from 'vue-router';
import { onMounted, ref } from 'vue';

import AppLoader from './components/AppLoader.vue';
import PageHeader from './components/layout/PageHeader.vue';
import PageFooter from './components/layout/PageFooter.vue';

const isLoading = ref(true);

onMounted(() => {
    isLoading.value = false;
    document.title = PROJECT_TITLE;
})

</script>

<template>
    <AppLoader :control="isLoading" />

    <PageHeader />

    <main class="min-h-[90vh]">
        <router-view></router-view>
    </main>

    <PageFooter v-if="!isLoading" />
</template>
