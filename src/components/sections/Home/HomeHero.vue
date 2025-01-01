<script setup>
import { ArrowRightIcon, PlusIcon } from '@heroicons/vue/20/solid';
import { RouterLink } from 'vue-router';
import LazyImage from '../../shared/LazyImage.vue';
import PageContainer from '../../layout/PageContainer.vue';
</script>

<template>
    <section class="overflow-x-hidden relative lp-bg-gradient min-h-[90vh] flex items-center">
        <PageContainer>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 py-16 lg:py-0 items-center">
                <div class="text-center lg:text-left lg:ps-8 md:ps-16">
                    <h1 class="text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900" data-aos="fade-right">
                        Desenvolvedor Full-Stack Freelancer
                    </h1>

                    <p class="text-base sm:text-xl text-gray-700 font-semibold mt-8 mb-12" data-aos="fade-right"
                        data-aos-delay="200">
                        Transforme suas ideias em realidade com soluções web modernas e eficientes.
                        De <span class="text-gray-800 font-bold">aplicativos dinâmicos</span> a
                        <span class="text-gray-800 font-bold">websites responsivos</span>,
                        ofereço serviços personalizados para atender às suas necessidades.
                        Vamos colaborar para criar algo incrível!
                    </p>

                    <div class="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2 md:gap-4">
                        <router-link to="#skills"
                            class="flex items-center justify-center gap-2 rounded-full bg-green-600 px-5 py-2.5 text-base font-medium text-white shadow-sm hover:bg-green-700 focus-button focus-visible:outline-green-600"
                            data-aos="fade-right" data-aos-delay="400">
                            <PlusIcon class="size-4" />
                            Visualizar projetos
                        </router-link>

                        <router-link to="/contact"
                            class="flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-base font-medium border border-green-600 bg-green-50 text-green-600 hover:bg-green-100 focus-button focus-visible:outline-white"
                            data-aos="fade-right" data-aos-delay="450">
                            <span>Contato</span>
                            <ArrowRightIcon class="size-4" />
                        </router-link>
                    </div>
                </div>

                <div data-aos="zoom-in-left">
                    <div
                        class="bg-gray-200 bg-opacity-40 ring-1 ring-gray-900/10 p-2 md:p-4 rounded-xl lg:translate-x-40 lg:h-[600px] aspect-square md:aspect-auto shadow-2xl">
                        <LazyImage url="/img/profile.webp" alt="Imagem do projeto"
                            class="rounded-lg ring-1 ring-gray-900/10 object-center object-cover w-full h-full" />
                    </div>
                </div>
            </div>
        </PageContainer>
    </section>
</template>
