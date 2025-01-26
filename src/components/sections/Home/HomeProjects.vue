<script setup>
import SectionHeader from "../../shared/SectionHeader.vue";
import PageSection from "../../layout/PageSection.vue";
import projects from "../../../mock/projects";
import ProjectList from "../../project/ProjectList.vue";

const header = {
    title: "Projetos Realizados",
    description: "Confira os projetos que desenvolvi e veja como posso ajudar você!",
};
</script>

<template>
    <PageSection id="projects" class="bg-slate-100">
        <SectionHeader :section-title="header.title" :section-description="header.description" />
        <ProjectList :projects="projects" />
    </PageSection>
</template>
