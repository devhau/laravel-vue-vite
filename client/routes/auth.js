
import LoginPage from '@/views/auth/login.vue';
import RegisterPage from '@/views/auth/register.vue';
import { APPLICATION_LAYOUT } from '@/common/constant';
export default [
    {
        path: '/login',
        name: 'Login',
        component: LoginPage,
        meta: {
            layout: APPLICATION_LAYOUT.None
        }
    },
    {
        path: '/register',
        name: 'Register',
        component: RegisterPage,
        meta: {
            layout: APPLICATION_LAYOUT.None
        }
    },
]
