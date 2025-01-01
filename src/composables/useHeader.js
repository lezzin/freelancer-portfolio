import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import { useRoute } from 'vue-router';

export function useHeader() {
    const route = useRoute();

    const hasHeaderBackground = ref(false);
    const isMenuOpen = ref(false);
    const showHeader = ref(route.meta.showHeader);

    function updateHeaderBackground() {
        const triggerPoint = window.innerHeight - 100;
        hasHeaderBackground.value = showHeader.value || window.scrollY > triggerPoint;
    }

    function toggleMenu() {
        isMenuOpen.value = !isMenuOpen.value;
    }

    watch(() => route.meta.showHeader, newValue => {
        showHeader.value = newValue;
        updateHeaderBackground();
    });

    onMounted(() => {
        updateHeaderBackground();
        if (!showHeader.value) {
            window.addEventListener('scroll', updateHeaderBackground);
        }
    });

    onBeforeUnmount(() => {
        window.removeEventListener('scroll', updateHeaderBackground);
    });

    return {
        hasHeaderBackground,
        isMenuOpen,
        toggleMenu,
        showHeader,
    };
}
