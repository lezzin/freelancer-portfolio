<script setup>
import { ref, useAttrs } from "vue";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/24/solid";
import { Slide, Carousel } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

const props = defineProps({
    items: {
        type: Array,
        required: true,
    },
    component: {
        type: [Object, Function],
        required: true,
    },
    itemProp: {
        type: String,
        required: true,
    },
});

const config = {
    autoplay: 2000,
    gap: 5,
    breakpointMode: "viewport",
    snapAlign: "center",
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

const attrs = useAttrs();
</script>

<template>
    <div data-aos="fade-up" class="relative">
        <div class="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div class="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <Carousel v-bind="config" ref="carouselRef" v-model="currentSlide">
            <Slide v-for="(item, index) in items" :key="`slide-${index}-${itemProp}`" class="cursor-grab select-none">
                <component :is="component" v-bind="attrs" :[itemProp]="item" />
            </Slide>
        </Carousel>
    </div>

    <div class="mt-8 flex md:justify-center pl-4 md:pl-0 gap-2">
        <button type="button" class="slider-button" @click="prev" data-aos="fade-left">
            <ChevronLeftIcon class="size-5" />
            <span class="sr-only">Previous</span>
        </button>

        <button type="button" class="slider-button" @click="next" data-aos="fade-right">
            <ChevronRightIcon class="size-5" />
            <span class="sr-only">Next</span>
        </button>
    </div>
</template>

<style lang="postcss">
.slider-button {
    @apply w-10 aspect-square border border-yellow-600 text-yellow-600 bg-yellow-100 hover:bg-yellow-200 rounded-full grid place-items-center;
}
</style>
