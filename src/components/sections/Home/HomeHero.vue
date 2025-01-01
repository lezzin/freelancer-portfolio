<script setup>
import { ArrowRightIcon, PlusIcon } from '@heroicons/vue/20/solid';
import { RouterLink } from 'vue-router';
import LazyImage from '../../shared/LazyImage.vue';
import PageContainer from '../../layout/PageContainer.vue';
</script>

<template>
    <div class="absolute inset-0 bg-square-pattern bg-no-repeat opacity-30"></div>
    <div class="absolute inset-0 bg-gradient-to-b from-teal-800 to-transparent opacity-90"></div>

    <section class="overflow-x-hidden relative bg-teal-800 bg-opacity-90 min-h-[90vh] flex items-center">
        <PageContainer>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 py-16 lg:py-0 items-center">
                <div class="text-center lg:text-left space-y-6">
                    <span class="text-yellow-300 font-semibold text-lg block" data-aos="fade-right">Olá, sou o Leandro</span>

                    <h1 class="text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100" data-aos="fade-right" data-aos-delay="100">
                        Desenvolvedor Full-Stack Freelancer
                    </h1>

                    <p class="text-base sm:text-xl text-slate-300 font-semibold mt-8 mb-12" data-aos="fade-right"
                        data-aos-delay="200">
                        Transforme suas ideias em realidade com soluções web modernas e eficientes.
                        De <span class="text-white font-bold">aplicativos dinâmicos</span> a
                        <span class="text-white font-bold">websites responsivos</span>,
                        ofereço serviços personalizados para atender às suas necessidades.
                        Vamos colaborar para criar algo incrível!
                    </p>

                    <div class="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2 md:gap-4">
                        <router-link to="#projects"
                            class="flex items-center justify-center gap-2 rounded-full bg-yellow-300 px-5 py-2.5 text-base font-bold text-teal-800 shadow-sm hover:bg-yellow-400 focus-button focus-visible:outline-yellow-400"
                            data-aos="fade-right" data-aos-delay="400">
                            <PlusIcon class="w-5 h-5" />
                            Visualizar Projetos
                        </router-link>

                        <router-link to="/contact"
                            class="flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-base font-medium border border-yellow-300 text-yellow-300 hover:bg-teal-900 focus-button focus-visible:outline-white"
                            data-aos="fade-right" data-aos-delay="450">
                            <span>Contato</span>
                            <ArrowRightIcon class="w-5 h-5" />
                        </router-link>
                    </div>
                </div>

                <div data-aos="zoom-in-left">
                    <div
                        class="bg-gray-200 bg-opacity-40 ring-1 ring-gray-900/10 p-2 md:p-4 rounded-xl lg:translate-x-40 lg:h-[600px] aspect-square md:aspect-auto shadow-2xl">
                        <LazyImage url="/img/profile-png.png" alt="Imagem do projeto"
                            class="rounded-lg ring-1 ring-gray-900/10 object-cover w-full h-full" />
                    </div>
                </div>
            </div>
        </PageContainer>
    </section>
</template>
