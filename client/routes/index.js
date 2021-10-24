import authRouter from './auth';
import systemRouter from './system';
import HomePage from '@/views/home/dashboard.vue';
export default [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
    },
    ...authRouter,
    ...systemRouter
]
