<script setup>
import SectionHeader from "../../shared/SectionHeader.vue";
import PageSection from "../../layout/PageSection.vue";
import ProjectList from "../../project/ProjectList.vue";

import projects from "../../../mock/projects";

const header = {
    title: "Projetos Realizados",
    description: "Confira os projetos que desenvolvi e veja como posso ajudar você!",
};
</script>

<template>
    <PageSection id="projects" class="bg-gray-50 bg-opacity-80">
        <SectionHeader :section-title="header.title" :section-description="header.description" />
        <ProjectList :projects="projects" />
    </PageSection>
</template>
