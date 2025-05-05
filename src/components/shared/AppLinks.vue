<script setup lang="ts">
import type { Link } from "@/interfaces/Link";
import links from "../../mock/links";

interface AppLinksProps {
  linkClass: string;
}

defineProps<AppLinksProps>();

defineEmits(["linkClick"]);

function defineTo({ target }: Link) {
  const isAnchor = target.includes("#");

  return {
    path: isAnchor ? target.split("#")[0] : target,
    hash: isAnchor ? `#${target.split("#")[1]}` : "",
  };
}
</script>

<template>
  <div
    v-for="(link, index) in links"
    :key="`link-${index}`"
    @click="$emit('linkClick')"
  >
    <router-link
      :to="defineTo(link)"
      :class="linkClass"
      v-if="link.type === 'internal'"
    >
      {{ link.name }}
    </router-link>

    <a
      :href="link.target"
      :class="linkClass"
      target="_blank"
      rel="noreferrer noopener"
      v-else
    >
      {{ link.name }}
    </a>
  </div>
</template>
