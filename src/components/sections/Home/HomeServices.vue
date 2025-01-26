<script setup>
import ServiceList from "../../service/ServiceList.vue";
import PageSection from "../../layout/PageSection.vue";
import SectionHeader from "../../shared/SectionHeader.vue";
import services from "../../../mock/services";

const header = {
    title: "Soluções Sob Medida para o Seu Negócio",
    description: "Transforme suas ideias em realidade com serviços feitos para as suas necessidades.",
};
</script>

<template>
    <PageSection id="services">
        <SectionHeader :section-title="header.title" :section-description="header.description" />

        <div class="mx-auto mt-16 max-w-4xl lg:max-w-7xl">
            <ServiceList :services="services" />
        </div>
    </PageSection>
</template>
