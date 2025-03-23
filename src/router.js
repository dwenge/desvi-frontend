import { createMemoryHistory, createRouter, createWebHistory } from "vue-router";
import NotFoundPage from "./pages/NotFoundPage.vue";
import HomePage from "./pages/HomePage.vue";

const routes = [
    { path: '/', component: HomePage },
    { path: '/:pathMatch(.*)', component: NotFoundPage },
]

export default createRouter({
    history: createWebHistory(),
    routes
})