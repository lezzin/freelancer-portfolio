<script setup>
defineProps({
    testimonial: Object,
    required: true,
});
</script>

<template>
    <div class="mx-auto max-w-2xl lg:max-w-4xl">
        <figure class="mt-10">
            <blockquote class="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
                <p>“{{ testimonial.description }}”</p>
            </blockquote>

            <figcaption class="mt-10">
                <img class="mx-auto size-10 rounded-full" :src="testimonial.image" alt="" />

                <div class="mt-4 flex items-center justify-center space-x-3 text-base">
                    <div class="font-semibold text-gray-900">{{ testimonial.name }}</div>

                    <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" class="fill-gray-900">
                        <circle cx="1" cy="1" r="1" />
                    </svg>

                    <div class="text-gray-600">{{ testimonial.role }}</div>
                </div>
            </figcaption>
        </figure>
    </div>
</template>
