import { ref, onMounted, onBeforeUnmount, watch } from "vue";
import { useRoute } from "vue-router";

export function useHeader() {
  const route = useRoute();

  const hasHeaderBackground = ref<boolean>(false);
  const isMenuOpen = ref<boolean>(false);
  const canToggleHeaderBackground = ref(
    Boolean(route.meta.canToggleHeaderBackground)
  );

  function updateHeaderBackground() {
    const triggerPoint = window.innerHeight - 100;
    hasHeaderBackground.value =
      canToggleHeaderBackground.value || window.scrollY > triggerPoint;
  }

  function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
  }

  watch(
    () => route.meta.canToggleHeaderBackground,
    (newValue) => {
      canToggleHeaderBackground.value = Boolean(newValue);
      updateHeaderBackground();
    }
  );

  onMounted(() => {
    updateHeaderBackground();
    if (!canToggleHeaderBackground.value) {
      window.addEventListener("scroll", updateHeaderBackground);
    }
  });

  onBeforeUnmount(() => {
    window.removeEventListener("scroll", updateHeaderBackground);
  });

  return {
    canToggleHeaderBackground,
    hasHeaderBackground,
    isMenuOpen,
    toggleMenu,
  };
}
