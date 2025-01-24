<script setup>
import achievements from "../../../mock/achievements";
</script>

<template>
    <div class="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-950 text-white py-16">
        <div class="container mx-auto px-6 md:px-12">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
                <div
                    v-for="(achievement, index) in achievements"
                    :key="index"
                    class="flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300"
                    data-aos="fade-up"
                    :data-aos-delay="100 * index"
                >
                    <div class="bg-teal-800/60 rounded-full w-24 h-24 flex items-center justify-center mb-6 shadow-2xl">
                        <component :is="achievement.icon" class="w-14 h-14 text-teal-300" />
                    </div>

                    <span class="text-4xl font-extrabold mb-3 text-teal-200 tracking-tight"> {{ achievement.prefix }}{{ achievement.number }} </span>
                    <span class="text-lg text-gray-300 opacity-90 leading-relaxed">
                        {{ achievement.label }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
