<script setup>
import { PlusIcon } from '@heroicons/vue/24/solid';
import { imageUrl } from '../../utils/urlUtils';
import { EyeIcon } from '@heroicons/vue/24/solid';

const props = defineProps({
    project: {
        type: Object,
        required: true
    }
});

const emit = defineEmits(["openModal"]);
</script>

<template>
    <article
        class="bg-gray-100 p-4 ring-1 ring-gray-300 shadow-lg rounded-md transition-all hover:shadow-xl flex flex-col justify-between"
        aria-labelledby="project-title-{{ project.id }}">
        <header>
            <h3 id="project-title-{{ project.id }}" class="text-lg font-semibold text-gray-900">{{ project.name }}</h3>
            <p class="mt-2 text-sm text-gray-600">{{ project.description }}</p>
        </header>

        <div class="mt-4">
            <img :src="imageUrl(project.image, 'projects')" :alt="project.name" class="w-full h-auto rounded-md" />

            <div class="flex items-center flex-wrap justify-between gap-2 mt-4">
                <a :href="project.deployUrl" target="_blank"
                    class="flex items-center gap-2 bg-green-500 py-1 px-2 rounded text-white hover:bg-green-700"
                    aria-label="Visitar o Projeto">
                    <EyeIcon class="size-4" />
                    Visitar o Projeto
                </a>

                <button class="flex items-center gap-2 py-1 px-2 rounded text-green-500 hover:text-green-700"
                    @click="emit('openModal', project)" aria-label="Ver mais sobre {{ project.name }}">
                    <span>Ver mais</span>
                    <PlusIcon class="size-4" />
                </button>
            </div>
        </div>
    </article>
</template>
