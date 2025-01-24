<script setup>
import PageSection from "../../layout/PageSection.vue";
import SectionHeader from "../../shared/SectionHeader.vue";
import StepItem from "../../step/StepItem.vue";
import steps from "../../../mock/steps.js";

const header = {
    title: "Construção de Websites: Cada Etapa Contada",
    description: "Para criar soluções que realmente funcionam, sigo um processo estruturado e transparente. Conheça cada etapa do desenvolvimento:",
};
</script>

<template>
    <PageSection>
        <SectionHeader :section-title="header.title" :section-description="header.description" />

        <div class="mx-auto mt-16 max-w-4xl lg:max-w-7xl">
            <StepItem :steps="steps" />
        </div>
    </PageSection>
</template>
