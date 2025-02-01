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

const attrs = useAttrs();
</script>

<template>
    <div data-aos="fade-up">
        <Carousel v-bind="config" ref="carouselRef" v-model="currentSlide">
            <Slide v-for="(item, index) in items" :key="`slide-${index}-${itemProp}`">
                <component :is="component" v-bind="attrs" :[itemProp]="item" />
            </Slide>
        </Carousel>
    </div>

    <div class="mt-8 flex md:justify-center pl-4 md:pl-0 gap-2">
        <button type="button" class="button-back" @click="prev" data-aos="fade-left">
            <ChevronLeftIcon class="size-5" />
            <span class="sr-only">Previous</span>
        </button>

        <button type="button" class="button-back" @click="next" data-aos="fade-right">
            <ChevronRightIcon class="size-5" />
            <span class="sr-only">Next</span>
        </button>
    </div>
</template>
