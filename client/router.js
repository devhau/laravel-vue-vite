
import { createRouter, createWebHashHistory } from "vue-router";
import api from '@/api/auth';

import HomePage from '@/views/home/dashboard.vue';
import LoginPage from '@/views/auth/login.vue';
import RegisterPage from '@/views/auth/register.vue';
import UserPage from '@/views/user/index.vue';
const layout = {
    None: 'None',
    NoSidebar: 'NoSidebar',
    Sidebar: 'Sidebar'
};

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
    },
    {
        path: '/user',
        name: 'User',
        component: UserPage,
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
const publicPages = ['/login', '/register'];

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
});


router.beforeEach((to, from, next) => {
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = api.checkAuth();
    if (authRequired && !loggedIn) {
        return next('/login');
    }
    if ((loggedIn && to.path === '/login')) {
        return next('/');
    }
    return next();
});
export default router;
