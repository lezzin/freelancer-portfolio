<script setup>
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/solid';
import { useHeader } from '../../composables/useHeader';

import AppLogo from '../shared/AppLogo.vue';
import AppLinks from '../shared/AppLinks.vue';
import PageContainer from './PageContainer.vue';

const { hasHeaderBackground, isMenuOpen, toggleMenu } = useHeader();
</script>

<template>
    <header class="sticky top-0 z-10 ring-1 ring-gray-900/10 transition-all duration-500"
        :class="hasHeaderBackground ? 'bg-white bg-opacity-80 backdrop-blur-md' : 'bg-green-300'">
        <PageContainer class="flex items-center justify-between h-[10vh]" aria-label="Global">
            <AppLogo />

            <div class="hidden lg:flex lg:gap-x-6">
                <AppLinks linkClass="text-base font-semibold text-gray-900 hover:text-gray-700" />
            </div>

            <button type="button" @click="toggleMenu" class="flex lg:hidden">
                <span class="sr-only">Open main menu</span>
                <Bars3Icon class="size-8" />
            </button>
        </PageContainer>
    </header>

    <transition name="menu">
        <div v-if="isMenuOpen"
            class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-50 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 lg:hidden"
            role="dialog" aria-modal="true">
            <div class="flex items-center justify-between">
                <AppLogo />

                <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700 hover:text-red-600"
                    @click="toggleMenu">
                    <span class="sr-only">Close menu</span>
                    <XMarkIcon class="size-8" />
                </button>
            </div>

            <div class="mt-6 flow-root">
                <div class="space-y-2 py-6">
                    <AppLinks
                        linkClass="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                        @linkClick="toggleMenu" />
                </div>
            </div>
        </div>
    </transition>
</template>

<style scoped>
.menu-enter-active,
.menu-leave-active {
    transition: transform 0.5s ease;
}

.header-enter-from,
.header-leave-to {
    transform: translateY(-100%);
}

.menu-enter-from,
.menu-leave-to {
    transform: translateX(100%);
}
</style>
