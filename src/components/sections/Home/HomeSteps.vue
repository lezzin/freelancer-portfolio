<script setup>
import PageSection from "../../layout/PageSection.vue";
import SectionHeader from "../../shared/SectionHeader.vue";
import StepItem from "../../step/StepItem.vue";
import steps from "../../../mock/steps.js";

const header = {
    title: "Criação de Websites Passo a Passo",
    description: "Sigo um processo claro e organizado para entregar soluções que funcionam. Confira as etapas:",
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
