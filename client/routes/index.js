import authRouter from './auth';
import systemRouter from './system';
import permission from '@/common/permission';
import HomePage from '@/views/home/dashboard.vue';

export default [
    {
        path: '/',
        name: 'Home',
        meta: {

        },
        component: HomePage,
    },
    ...authRouter,
    ...systemRouter
]
