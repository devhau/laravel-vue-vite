
import api from '@/api/auth';

const publicPages = ['/login', '/register'];

export const checkRouterAuth = ($router) => {
    let authRequired = !publicPages.includes($router.path);
    let loggedIn = api.checkAuth();
    if (($router.meta?.can || authRequired) && !loggedIn) {
        return false;
    }
    if ($router.meta?.can && !api.$can($router.meta?.can)) {
        return false;
    }
    return true;
}
