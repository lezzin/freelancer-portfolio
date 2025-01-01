<script setup>
import { PlusIcon, EyeIcon } from '@heroicons/vue/24/solid';
import { imageUrl } from '../../utils/urlUtils';

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

            <div class="flex items-center flex-wrap justify-between gap-2 mt-4 overflow-hidden">
                <a :href="project.deployUrl" target="_blank"
                    class="flex items-center justify-center gap-2 rounded bg-teal-800 px-2 py-1 text-base font-semibold text-gray-100 shadow-sm hover:bg-teal-700 focus-button focus-visible:outline-teal-800"
                    data-aos="fade-right" data-aos-delay="400">
                    <PlusIcon class="w-5 h-5" />
                    Visualizar Projeto
                </a>

                <button class="flex items-center gap-2 px-2 py-1 rounded text-teal-800 hover:text-teal-700 border border-teal-800 focus-button focus-visible:outline-teal-800"
                    @click="emit('openModal', project)" aria-label="Ver mais sobre {{ project.name }}">
                    <span>Ver mais</span>
                    <PlusIcon class="size-4" />
                </button>
            </div>
        </div>
    </article>
</template>
