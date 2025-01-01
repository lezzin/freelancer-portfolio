<script setup>
import links from '../../mock/links';

const props = defineProps({
    linkClass: {
        type: String,
        required: true,
    },
});

const emit = defineEmits(["linkClick"]);

function defineTo({ target }) {
    const isAnchor = target.includes('#');

    return {
        path: isAnchor ? target.split('#')[0] : target,
        hash: isAnchor ? `#${target.split('#')[1]}` : ''
    }
}
</script>

<template>
    <div v-for="(link, index) in links" :key="index" @click="emit('linkClick')">
        <router-link :to="defineTo(link)" :class="linkClass" v-if="link.type === 'internal'">
            {{ link.name }}
        </router-link>
        <a :href="link.target" :class="linkClass" target="_blank" rel="noreferrer noopener" v-else>
            {{ link.name }}
        </a>
    </div>
</template>
