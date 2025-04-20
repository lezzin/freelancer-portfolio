<script setup>
import achievements from "../../../mock/achievements";
</script>

<template>
    <section class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 text-white py-16 overflow-hidden">
        <div class="container mx-auto px-6 md:px-12">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div
                    v-for="(achievement, index) in achievements"
                    :key="index"
                    class="relative group"
                    data-aos="fade-up"
                    :data-aos-delay="100 * index"
                >
                    <div
                        class="relative bg-gray-800/60 rounded-xl p-6 h-full flex flex-col items-center text-center transform group-hover:scale-[1.02] transition-all duration-300 border border-gray-700/50 hover:border-green-500/50"
                    >
                        <div class="bg-green-800/60 rounded-full w-24 h-24 flex items-center justify-center mb-6">
                            <component
                                :is="achievement.icon"
                                class="w-14 h-14 text-green-300 group-hover:text-green-200 group-hover:scale-110 transition-transform duration-300"
                            />
                        </div>

                        <div class="flex flex-col items-center">
                            <span
                                class="text-2xl font-black text-green-200 tracking-tight mb-2 group-hover:text-green-100 transition-colors duration-300"
                            >
                                {{ achievement.prefix }}{{ achievement.number }}
                            </span>
                            <p
                                class="text-lg text-gray-300 opacity-90 leading-relaxed font-medium group-hover:text-gray-100 transition-colors duration-300"
                            >
                                {{ achievement.label }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
