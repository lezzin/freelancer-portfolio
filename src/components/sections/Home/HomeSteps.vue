<script setup>
import PageSection from "../../layout/PageSection.vue";
import SectionHeader from "../../shared/SectionHeader.vue";
import StepItem from "../../step/StepItem.vue";
import steps from "../../../mock/steps.js";
import LazyImage from "../../shared/LazyImage.vue";

const header = {
    title: "Criação de Websites Passo a Passo",
    description: "Sigo um processo claro e organizado para entregar soluções que funcionam. ",
};
</script>

<template>
    <PageSection>
        <div class="mx-auto mt-16 grid md:grid-cols-2 gap-8">
            <div class="grid gap-8">
                <SectionHeader section-align="left" :section-title="header.title" :section-description="header.description" />

                <div data-aos="fade-up-right" class="hidden md:block">
                    <LazyImage url="img/rocket.svg" width="300" height="300" />
                </div>
            </div>

            <StepItem :steps="steps" />
        </div>
    </PageSection>
</template>
