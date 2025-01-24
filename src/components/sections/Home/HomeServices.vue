<script setup>
import ServiceList from "../../service/ServiceList.vue";
import PageSection from "../../layout/PageSection.vue";
import SectionHeader from "../../shared/SectionHeader.vue";
import services from "../../../mock/services";

const header = {
    title: "Soluções Personalizadas para Impulsionar o Seu Negócio",
    description: "Transforme suas ideias em realidade com serviços sob medida que atendem às necessidades exclusivas da sua empresa.",
};
</script>

<template>
    <PageSection id="services" class="bg-slate-100">
        <SectionHeader :section-title="header.title" :section-description="header.description" />

        <div class="mx-auto mt-16 max-w-4xl lg:max-w-7xl">
            <ServiceList :services="services" />
        </div>
    </PageSection>
</template>
