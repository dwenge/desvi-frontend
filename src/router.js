import { createRouter, createWebHashHistory } from "vue-router";
import NotFoundPage from "./pages/NotFoundPage.vue";
import HomePage from "./pages/HomePage.vue";
import ProjectPage from "./pages/ProjectPage.vue";

// Список адресов
export const routes = [
    // {
    //     path: '/',
    //     name: 'home',
    //     component: HomePage,
    //     meta: {
    //         title: 'Главная',
    //         menu: 'Главная',
    //     }
    // },
    {
        path: '/',
        name: 'project',
        component: ProjectPage,
        meta: {
            title: 'Проект',
        }
    },
    {
        path: '/:pathMatch(.*)',
        name: 'not-found',
        component: NotFoundPage,
        meta: {
            title: 'Страница не найдена',
        }
    },
]

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes
})

// Установка заголовка на странице
router.beforeEach((to) => {
    const defaultTitle = 'Страница без заголовка'
    const { title } = to.meta
    document.title = title || defaultTitle
})

export default router