<script setup>
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/solid";
import { useHeader } from "../../composables/useHeader";

import AppLogo from "../shared/AppLogo.vue";
import AppLinks from "../shared/AppLinks.vue";
import PageContainer from "./PageContainer.vue";

const { hasHeaderBackground, isMenuOpen, toggleMenu } = useHeader();
</script>

<template>
    <header
        class="sticky top-0 z-20 ring-1 transition-all duration-500"
        :class="hasHeaderBackground ? 'ring-slate-300 bg-white bg-opacity-80 backdrop-blur-md' : 'ring-teal-900 bg-teal-800'"
    >
        <PageContainer class="flex items-center justify-between h-[10vh]" aria-label="Global">
            <AppLogo />

            <div class="hidden lg:flex lg:gap-x-3">
                <AppLinks
                    :linkClass="`text-base font-semibold ${
                        hasHeaderBackground ? 'text-gray-900 hover:text-gray-700' : 'text-gray-100 hover:text-white'
                    }`"
                />
            </div>

            <button type="button" @click="toggleMenu" class="flex lg:hidden">
                <span class="sr-only">Open main menu</span>
                <Bars3Icon :class="`size-8 ${!hasHeaderBackground && 'text-white'}`" />
            </button>
        </PageContainer>
    </header>

    <transition name="menu">
        <div
            v-if="isMenuOpen"
            :class="`fixed inset-y-0 right-0 z-20 w-full overflow-y-auto sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 lg:hidden transition-color duration-500 ${
                hasHeaderBackground ? 'bg-gray-50' : 'bg-teal-700'
            }`"
            role="dialog"
            aria-modal="true"
        >
            <div class="flex items-center justify-between border-b px-6 py-3" :class="hasHeaderBackground ? 'border-slate-300' : 'border-teal-900'">
                <AppLogo />

                <button
                    type="button"
                    :class="`-m-2.5 rounded-md p-2.5 ${hasHeaderBackground ? 'text-black' : 'text-white'}  hover:text-red-600`"
                    @click="toggleMenu"
                >
                    <span class="sr-only">Close menu</span>
                    <XMarkIcon class="size-8" />
                </button>
            </div>

            <div class="mt-6 flow-root px-6 py-3">
                <div class="space-y-2">
                    <AppLinks
                        :linkClass="`transition-color duration-500 -mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-center ${
                            hasHeaderBackground ? 'text-black hover:bg-gray-200' : 'text-white hover:bg-teal-800'
                        }`"
                        linkClass=""
                        @linkClick="toggleMenu"
                    />
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
