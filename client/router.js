
import { createRouter, createWebHashHistory } from "vue-router"

import HomeComponent from './components/kanban.vue';
import LoginPage from '@/views/auth/login.vue';
import RegisterPage from '@/views/auth/register.vue';
const layout = {
    None: 'None',
    NoSidebar: 'NoSidebar',
    Sidebar: 'Sidebar'
};

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeComponent,
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginPage,
        meta: {
            layout: layout.None
        }
    },
    {
        path: '/register',
        name: 'Register',
        component: RegisterPage,
        meta: {
            layout: layout.None
        }
    },
];
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})
export default router;
