<script setup>
import PageSection from '../../layout/PageSection.vue';
import SectionHeader from '../../shared/SectionHeader.vue';
import StepItem from '../../step/StepItem.vue';
import steps from "../../../mock/steps.js"

const header = {
    title: "Passo-a-passo para a Construção do Seu Website",
    description: "Para garantir que o software atenda perfeitamente às suas necessidades, sigo um processo detalhado e estruturado. Confira cada etapa abaixo:"
}
</script>

<template>
    <PageSection>
        <SectionHeader :section-title="header.title" :section-description="header.description" />
        <StepItem :steps="steps" />
    </PageSection>
</template>
