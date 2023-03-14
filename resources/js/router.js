import { createRouter, createWebHistory } from 'vue-router'
import Home from './Pages/Home.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home,
        },
    ],
})
