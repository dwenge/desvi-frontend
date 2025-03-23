import { createMemoryHistory, createRouter, createWebHistory } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import NotFoundPage from "./pages/NotFoundPage.vue";

const routes = [
    { path: '/', component: HelloWorld },
    { path: '/:pathMatch(.*)', component: NotFoundPage },
]

export default createRouter({
    history: createWebHistory(),
    routes
})