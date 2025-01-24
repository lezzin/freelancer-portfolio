<script setup>
import { ref } from "vue";

import TecnologyListItem from "./TecnologyListItem.vue";
import { Slide, Carousel } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/24/solid";

const props = defineProps({
    tecnologies: {
        type: Array,
        required: true,
    },
});

const config = {
    autoplay: 2000,
    gap: 5,
    breakpointMode: "viewport",
    snapAlign: "start",
    wrapAround: true,
    breakpoints: {
        300: {
            itemsToShow: 1.5,
        },
        768: {
            itemsToShow: 3.5,
        },
    },
};

const carouselRef = ref();
const currentSlide = ref(0);

const next = () => carouselRef.value.next();
const prev = () => carouselRef.value.prev();
</script>
<template>
    <div data-aos="fade-up">
        <Carousel v-bind="config" ref="carouselRef" v-model="currentSlide">
            <Slide v-for="(tecnology, index) in tecnologies" :key="`tecnology-${index}`" class="carousel__item">
                <TecnologyListItem :tecnology="tecnology" />
            </Slide>
        </Carousel>
    </div>

    <div class="pl-4 mt-8 flex gap-2">
        <button
            type="button"
            class="w-12 aspect-square border border-red-600 text-red-600 bg-red-100 hover:bg-red-200 rounded-full grid place-items-center"
            @click="prev"
            data-aos="fade-left"
        >
            <ChevronLeftIcon class="size-5" />
        </button>

        <button
            type="button"
            class="w-12 aspect-square border border-red-600 text-red-600 bg-red-100 hover:bg-red-200 rounded-full grid place-items-center"
            @click="next"
            data-aos="fade-right"
        >
            <ChevronRightIcon class="size-5" />
        </button>
    </div>
</template>
