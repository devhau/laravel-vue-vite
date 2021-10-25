
import { createRouter, createWebHashHistory } from "vue-router";

import routes from '@/routes';
import * as auth from '@/common/auth/index';
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
});


router.beforeEach((to, from, next) => {
    //check permisison for router
    if (!auth.checkRouterAuth(to)) {
        return next({ name: 'Login' });
    }
    //check page is login and go to home
    /*if ((to.path === '/login')) {
        return next('/');
    }*/
    return next();
});
export default router;
