<script setup>
import technologies from "../../../mock/technologies";

import TechnologyList from "../../technology/TechnologyList.vue";
import PageSection from "../../layout/PageSection.vue";
import SectionHeader from "../../shared/SectionHeader.vue";
import LazyImage from "../../shared/LazyImage.vue";

const header = {
    title: 'Tecnologia moderna para <span class="text-gradient">projetos criativos</span>',
    description: "Uso ferramentas atuais para entregar soluções eficientes e de qualidade.",
};
</script>

<template>
    <PageSection id="technologies">
        <SectionHeader :section-title="header.title" :section-description="header.description" />

        <div class="mx-auto mt-16 max-w-4xl lg:max-w-7xl">
            <TechnologyList :technologies="technologies" />
        </div>
    </PageSection>
</template>
