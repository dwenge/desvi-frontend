import { createRouter, createWebHashHistory } from "vue-router";
import NotFoundPage from "./pages/NotFoundPage.vue";
import HomePage from "./pages/HomePage.vue";
import SecondPage from "./pages/SecondPage.vue";

const routes = [
    { path: '/', name: 'home', component: HomePage },
    { path: '/second', name: 'second', component: SecondPage },
    { path: '/:pathMatch(.*)', name: 'not-found', component: NotFoundPage },
]

export default createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes
})