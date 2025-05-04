<script setup>
import { imageUrl } from "../../utils/urlUtils";
import AppCard from "../shared/AppCard.vue";

defineProps({
    testimonial: Object,
    required: true,
});
</script>

<template>
    <!-- <AppCard class="mx-auto max-w-2xl">
        <img class="mx-auto h-12" :src="imageUrl(testimonial.logo, 'testimonials/logo')" alt="" />

        <figure class="mt-10">
            <blockquote class="text-2xl font-semibold tracking-tight my-8 text-center">
                <p>“{{ testimonial.description }}”</p>
            </blockquote>

            <figcaption class="mt-10">
                <img class="mx-auto size-10 rounded-full" :src="imageUrl(testimonial.image, 'testimonials/user')" alt="" />

                <div class="mt-4 flex items-center justify-center space-x-3 text-base">
                    <div class="font-semibold text-gray-900">{{ testimonial.name }}</div>

                    <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" class="fill-gray-900">
                        <circle cx="1" cy="1" r="1" />
                    </svg>

                    <div class="text-gray-600">{{ testimonial.role }}</div>
                </div>
            </figcaption>
        </figure>
    </AppCard> -->

    <AppCard class="mx-auto max-w-2xl relative isolate overflow-hidden">
        <div class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-20"></div>
        <div
            class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-indigo-600/10 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"
        ></div>

        <figure class="grid">
            <p class="sr-only">5 out of 5 stars</p>

            <div class="flex h-5 text-green-600">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    class="on wu"
                    v-for="item in [1, 2, 3, 4, 5]"
                    :key="item"
                >
                    <path
                        fill-rule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                        clip-rule="evenodd"
                    ></path>
                </svg>
            </div>

            <blockquote class="text-pretty text-2xl font-semibold tracking-tight my-8">
                <p>“{{ testimonial.description }}”</p>
            </blockquote>

            <figcaption class="flex items-center gap-6 text-sm">
                <img
                    alt="Foto de perfil do cliente"
                    :src="imageUrl(testimonial.image, 'testimonials/user')"
                    class="h-12 aspect-square object-cover rounded-full"
                />

                <div class="grid">
                    <div class="font-semibold text-gray-900">{{ testimonial.name }}</div>
                    <div class="text-gray-600">{{ testimonial.role }}</div>
                </div>
            </figcaption>
        </figure>
    </AppCard>
</template>
