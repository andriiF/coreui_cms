import {createRouter, createWebHistory} from 'vue-router'
import Home from './Pages/Home.vue'
import Login from './Pages/Login.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/login',
            component: Login,
        },
    ],
})
