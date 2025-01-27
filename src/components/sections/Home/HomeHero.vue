<script setup>
import { ArrowRightIcon, PlusIcon, CodeBracketIcon } from "@heroicons/vue/20/solid";
import { RouterLink } from "vue-router";
import LazyImage from "../../shared/LazyImage.vue";
import PageContainer from "../../layout/PageContainer.vue";
</script>

<template>
    <section class="overflow-x-hidden relative bg-teal-800 bg-opacity-90 min-h-[90vh] flex items-center">
        <div class="absolute inset-0 bg-square-pattern bg-no-repeat opacity-30 z-[-1]"></div>
        <div class="absolute inset-0 bg-gradient-to-b from-transparent to-teal-800 lg:from-teal-800 lg:to-transparent opacity-90 z-[-1]"></div>

        <PageContainer>
            <div class="grid grid-cols-1 lg:grid-cols-2 items-center py-16 lg:py-0">
                <div class="text-center lg:text-left space-y-6 order-2 lg:order-1">
                    <div class="inline-flex items-center rounded-full bg-teal-900/50 px-4 py-1.5 text-sm text-white">
                        <CodeBracketIcon class="w-5 h-5 mr-2 text-teal-300" />
                        Desenvolvedor Full-Stack
                    </div>

                    <h1 class="text-5xl lg:text-6xl font-bold text-white tracking-tight">Leandro Adrian</h1>

                    <p class="text-xl text-teal-100 max-w-2xl mx-auto lg:mx-0">
                        Transforme suas ideias em realidade com soluções web modernas. Crio desde <strong>landing pages</strong> até
                        <strong>sistemas personalizados</strong>, tudo feito sob medida para você. Vamos criar algo incrível juntos!
                    </p>

                    <div class="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                        <RouterLink
                            to="#projects"
                            class="flex items-center justify-center gap-2 px-6 py-3 bg-yellow-400 text-teal-900 font-bold rounded-full hover:bg-yellow-500 transition-colors"
                        >
                            <PlusIcon class="w-5 h-5" />
                            Ver projetos
                        </RouterLink>

                        <RouterLink
                            to="/contact"
                            class="flex items-center justify-center gap-2 px-6 py-3 border-2 border-yellow-400 text-yellow-400 rounded-full hover:bg-teal-800 transition-colors"
                        >
                            Contato
                            <ArrowRightIcon class="w-5 h-5" />
                        </RouterLink>
                    </div>
                </div>

                <div class="order-1 lg:order-2 flex justify-center mb-12 lg:mb-0 ms-0 md:ms-auto">
                    <div class="lg:w-[500px] lg:h-[500px] relative">
                        <div class="absolute inset-0 bg-gradient-to-br from-teal-500 to-teal-700 rounded-full blur-2xl opacity-50"></div>
                        <div class="bg-white/10 backdrop-blur-lg rounded-full">
                            <div class="rounded-full p-4 shadow-2xl border-4 border-white/20 overflow-hidden">
                                <LazyImage url="img/profile.png" alt="Leandro Adrian" class="rounded-full object-cover w-full h-full bg-teal-800" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageContainer>
    </section>
</template>
