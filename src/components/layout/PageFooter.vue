<script setup>
import AppLinks from "../shared/AppLinks.vue";
import AppLogo from "../shared/AppLogo.vue";
</script>

<template>
    <footer class="bg-teal-800 text-gray-100">
        <div class="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <div class="flex flex-col items-center space-y-6">
                <AppLogo variant="normal" />

                <nav aria-label="Footer navigation" class="flex flex-wrap justify-center gap-1">
                    <AppLinks linkClass="text-base leading-6 px-3 hover:text-gray-300" />
                </nav>
            </div>
        </div>

        <div class="bg-teal-900 py-3">
            <p class="text-sm text-center text-gray-300">
                © {{ new Date().getFullYear() }} <a href="https://lezzin.github.io" class="hover:text-gray-300" target="_blank">Lezzin</a>. Todos os direitos reservados.
            </p>
        </div>
    </footer>
</template>
