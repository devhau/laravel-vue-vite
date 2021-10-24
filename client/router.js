
import { createRouter, createWebHashHistory } from "vue-router";
import api from '@/api/auth';
import routes from '@/routes';

const publicPages = ['/login', '/register'];

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
});


router.beforeEach((to, from, next) => {
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = api.checkAuth();
    //check auth
    if ((to.meta?.can || authRequired) && !loggedIn) {
        return next({ name: 'Login' });
    }
    //check permisison for router
    if (to.meta?.can && !api.$can(to.meta?.can)) {
        return next({ name: 'Login' });
    }
    //check page is login and go to home
    if ((loggedIn && to.path === '/login')) {
        return next('/');
    }
    return next();
});
export default router;
