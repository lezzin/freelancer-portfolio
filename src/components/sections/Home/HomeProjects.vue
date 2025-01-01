<script setup>
import SectionHeader from '../../shared/SectionHeader.vue';
import PageSection from '../../layout/PageSection.vue';
import LazyImage from '../../shared/LazyImage.vue';
import projects from "../../../mock/projects";
import ProjectList from '../../project/ProjectList.vue';

</script>

<template>
    <PageSection id="skills">
        <SectionHeader section-title="Projetos desenvolvidos"
            section-description="Abaixo, uma lista de meus projetos já desenvolvidos." />

        <ProjectList :projects="projects" />
    </PageSection>
</template>
