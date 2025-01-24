<script setup>
import TecnologyList from "../../tecnology/TecnologyList.vue";
import PageSection from "../../layout/PageSection.vue";
import SectionHeader from "../../shared/SectionHeader.vue";
import tecnologies from "../../../mock/tecnologies";

const header = {
    title: "Tecnologias de Ponta para Projetos Inovadores",
    description: "Utilizo ferramentas e tecnologias modernas para oferecer soluções eficientes e de alta qualidade.",
};
</script>

<template>
    <PageSection id="services" class="bg-slate-100 overflow-hidden">
        <SectionHeader :section-title="header.title" :section-description="header.description" />

        <div class="mx-auto mt-16 max-w-4xl lg:max-w-7xl">
            <TecnologyList :tecnologies="tecnologies" />
        </div>
    </PageSection>
</template>
