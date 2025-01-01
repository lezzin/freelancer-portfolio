import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('../views/HomeView.vue'),
            meta: { showHeader: false },
        },
        {
            path: '/contact',
            component: () => import('../views/ContactView.vue'),
            meta: { showHeader: true },
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            const element = document.querySelector(to.hash);

            if (element) {
                const headerHeight = window.innerHeight * 0.1;
                const position = element.offsetTop - headerHeight;
                return { top: position, behavior: 'smooth' };
            }
        }

        return savedPosition || { top: 0 };
    },
});

export default router;
