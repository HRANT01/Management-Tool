import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import Default from '../layouts/Default.vue'
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/TasksView.vue";


const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'default',
        component: Default,
        redirect: '/Home',
        children: [
            {
                path: '/Home',
                name: 'default',
                component: HomeView,
            },
            {
                path: '/Tasks',
                name: 'about',
                component: AboutView,
            },
        ]

    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
