<script setup lang="ts">
type SectionAlignments = "center" | "left" | "right";

interface SectionHeaderProps {
  sectionTitle: string;
  sectionDescription: string;
  sectionAlign: SectionAlignments;
}

const props = withDefaults(defineProps<SectionHeaderProps>(), {
  sectionAlign: "center",
});

const getAlign = (): string => {
  const aligns: Record<SectionAlignments, string> = {
    center: "mx-auto",
    left: "lg:text-left",
    right: "lg:text-right",
  };

  return aligns[props.sectionAlign];
};
</script>

<template>
  <div
    :class="getAlign()"
    class="md:text-center lg:max-w-2xl"
    v-if="sectionDescription"
  >
    <h2 class="section-title" data-aos="fade-left" v-html="sectionTitle"></h2>
    <p
      class="section-subtitle"
      data-aos="fade-right"
      data-aos-delay="100"
      v-html="sectionDescription"
    ></p>
  </div>

  <h2 class="md:text-center section-title" data-aos="fade-left" v-else>
    {{ sectionTitle }}
  </h2>
</template>
