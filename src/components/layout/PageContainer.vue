<script setup>
const props = defineProps({
    centered: { type: Boolean, default: false },
    fluid: { type: Boolean, default: false },
});

const getContainerClasses = () => {
    return ["mx-auto px-4 md:px-2 max-w-7xl", props.centered ? "flex flex-col justify-center min-h-[90vh]" : "", props.fluid ? "" : "container"]
        .join(" ")
        .trim();
};
</script>

<template>
    <div :class="getContainerClasses()">
        <slot></slot>
    </div>
</template>
