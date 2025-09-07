import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/pages/HomePage.vue'),
        },
        {
            path: '/trip/:id',
            name: 'trip',
            component: () => import('@/pages/TripPage.vue'),
        },
        {
            path: '/avia-search',
            name: 'aviaSearch',
            component: () => import('@/pages/AviaSearchPage.vue'),
        }
    ],
})

export default router
