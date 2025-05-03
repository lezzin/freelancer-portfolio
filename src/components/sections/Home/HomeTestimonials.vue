<script setup>
import testimonials from "../../../mock/testimonials";

import PageSection from "../../layout/PageSection.vue";
import SectionHeader from "../../shared/SectionHeader.vue";
import TestimonialItem from "../../testimonial/TestimonialItem.vue";

const header = {
    title: "Testemunhos",
    description: "Veja o que meus clientes dizem!",
};
</script>

<template>
    <PageSection>
        <SectionHeader :section-title="header.title" :section-description="header.description" />

        <div class="grid gap-2 place-items-center mx-auto">
            <TestimonialItem v-for="testimonial in testimonials" :key="testimonial.name" :testimonial="testimonial" />
        </div>
    </PageSection>
</template>
