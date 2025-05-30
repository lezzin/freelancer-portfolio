<script setup>
import PageSection from "../../layout/PageSection.vue";
import SectionHeader from "../../shared/SectionHeader.vue";
import StepItem from "../../step/StepItem.vue";
import steps from "../../../mock/steps.js";
import LazyImage from "../../shared/LazyImage.vue";
import PageBackground from "../../layout/PageBackground.vue";

const header = {
    title: "Criação de Websites Passo a Passo",
    description: "Sigo um processo claro e organizado para entregar soluções que funcionam. ",
};
</script>

<template>
    <PageSection class="relative">
        <div class="mx-auto mt-16 grid md:grid-cols-2 gap-8">
            <div class="grid gap-8 place-items-center">
                <SectionHeader :section-title="header.title" :section-description="header.description" />

                <div data-aos="fade-up-right" class="relative hidden md:block">
                    <LazyImage url="img/rocket.svg" width="300" height="300" class="rocket-image" />
                </div>
            </div>

            <StepItem :steps="steps" />
        </div>
    </PageSection>
</template>

<style scoped>
@keyframes float {
    0%,
    100% {
        transform: translateY(0) rotate(0deg);
    }
    50% {
        transform: translateY(15px) rotate(3deg);
    }
}

.rocket-image {
    animation: float 3s ease-in-out infinite;
}
</style>
