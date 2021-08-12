import { createRouter, createWebHistory } from "vue-router";
import Katalog from "./components/Katalog.vue";
import ManajemenBuku from "./components/ManajemenBuku.vue";

const routes = [
    {
        path: "/",
        component: Katalog
    },
    {
        path: "/manajemen-buku",
        component: ManajemenBuku
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
