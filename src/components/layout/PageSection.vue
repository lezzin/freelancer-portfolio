<script setup>
import PageContainer from "./PageContainer.vue";

const props = defineProps({
    withBg: { type: Boolean, default: false },
    centered: { type: Boolean, default: false },
    fluid: { type: Boolean, default: false },
});

const getSectionClasses = () => {
    return ["overflow-x-hidden", props.centered ? "min-h-[90vh]" : "py-16", props.withBg ? "bg-gray-100" : ""].join(" ").trim();
};
</script>

<template>
    <section :class="getSectionClasses()">
        <PageContainer :centered="centered" :fluid="fluid">
            <slot></slot>
        </PageContainer>
    </section>
</template>
