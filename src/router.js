import { createMemoryHistory, createRouter, createWebHistory } from "vue-router";
import NotFoundPage from "./pages/NotFoundPage.vue";
import HomePage from "./pages/HomePage.vue";

const getPath = (path) => (import.meta.env.BASE_URL || '').replace(/[\/]*$/g, '') + path

const routes = [
    { path: getPath('/'), name: 'home', component: HomePage },
    { path: getPath('/:pathMatch(.*)'), name: 'not-found', component: NotFoundPage },
]

export default createRouter({
    history: createWebHistory(),
    routes
})