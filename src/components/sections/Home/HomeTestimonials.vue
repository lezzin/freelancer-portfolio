<script setup>
import testimonials from "../../../mock/testimonials";

import PageSection from "../../layout/PageSection.vue";
import SectionHeader from "../../shared/SectionHeader.vue";
import TestimonialItem from "../../testimonial/TestimonialItem.vue";
// import AppSlider from "../../shared/AppSlider.vue";

const header = {
    title: 'Opiniões de quem <span class="text-gradient">confiou no meu trabalho</span>',
    description: "Conheça as experiências de clientes que tiveram seus projetos transformados.",
};
</script>

<template>
    <PageSection>
        <SectionHeader :section-title="header.title" :section-description="header.description" />

        <div class="grid gap-2 place-items-center mx-auto mt-16" data-aos="fade-up-left">
            <TestimonialItem v-for="testimonial in testimonials" :key="testimonial.name" :testimonial="testimonial" />
        </div>

        <!-- <AppSlider :items="testimonials" itemProp="testimonial" :component="TestimonialItem" class="mt-16" /> -->
    </PageSection>
</template>
