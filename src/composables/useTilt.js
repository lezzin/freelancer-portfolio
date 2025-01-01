import { ref, computed, onMounted, onUnmounted } from 'vue';

export const useTilt = (cardElement) => {
    const tiltEffect = ref({ x: 0, y: 0 });
    const isDesktop = ref(checkIsDesktop());

    function checkIsDesktop() {
        return window.innerWidth > 768 && !('ontouchstart' in window);
    }

    const handleResize = () => {
        isDesktop.value = checkIsDesktop();
    };

    const handleMouseMove = (e) => {
        if (isDesktop.value && cardElement.value) {
            const { left, top, width, height } = cardElement.value.getBoundingClientRect();
            const x = Math.max(((e.clientX - left) / width) * 2 - 1, -1);
            const y = Math.max((((e.clientY - top) / height) * 2 - 1) * -1, -1);
            tiltEffect.value = { x, y };
        }
    };

    const handleMouseLeave = () => {
        if (isDesktop.value) {
            tiltEffect.value = { x: 0, y: 0 };
        }
    };

    const transitionStyle = computed(() => {
        return isDesktop.value
            ? {
                transform: `perspective(1000px) rotateX(${tiltEffect.value.y * 20}deg) rotateY(${tiltEffect.value.x * 20}deg)`,
                transition: 'transform 250ms ease',
            }
            : {};
    });

    onMounted(() => {
        window.addEventListener('resize', handleResize);
    });

    onUnmounted(() => {
        window.removeEventListener('resize', handleResize);
    });

    return {
        handleMouseMove,
        handleMouseLeave,
        transitionStyle,
    };
};
