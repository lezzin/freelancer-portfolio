<script setup>
import ProjectListItem from './ProjectListItem.vue';
import { ref } from 'vue';
import DetailsModal from './DetailsModal.vue';
import ImageModal from './ImageModal.vue';

const props = defineProps({
    projects: {
        type: Array,
        required: true
    }
});

const showDetailsModal = ref(false);
const selectedDetail = ref(null);
const showImageModal = ref(false);
const selectedImage = ref(null);

const addBodyOverflow = () => {
    document.body.classList.add('overflow-hidden');
};

const removeBodyOverflow = () => {
    document.body.classList.remove('overflow-hidden');
}

const openModal = (detail) => {
    selectedDetail.value = detail;
    showDetailsModal.value = true;
    addBodyOverflow();
};

const closeDetailsModal = () => {
    showDetailsModal.value = false;
    selectedDetail.value = null;
    removeBodyOverflow();
};

const openImageModal = (image) => {
    selectedImage.value = image;
    showImageModal.value = true;
    addBodyOverflow();
};

const closeImageModal = () => {
    showImageModal.value = false;
    selectedImage.value = null;
    removeBodyOverflow();
};
</script>

<template>
    <div class="grid grid-cols-1 gap-y-3 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 mx-auto mt-16">
        <ProjectListItem v-for="(project, index) in projects" :project="project" :key="index"
            :data-aos="index % 2 === 0 ? 'flip-right' : 'flip-left'" @openModal="openModal" />
    </div>

    <Teleport to="#overlay">
        <TransitionGroup name="fade">
            <DetailsModal :show="showDetailsModal" :details="selectedDetail" @close="closeDetailsModal"
                @openImageModal="openImageModal" @click.self="closeDetailsModal" :key="'details-modal'" />
            <ImageModal :show="showImageModal" :image="selectedImage" @close="closeImageModal"
                @click.self="closeImageModal" :key="'image-modal'" />
        </TransitionGroup>
    </Teleport>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>