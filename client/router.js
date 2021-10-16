
import { createRouter, createWebHashHistory } from "vue-router"

import  HomeComponent   from './components/kanban.vue';
import  GanttComponent   from './components/gantt.vue';
import  AccordionComponent   from './components/accordion.vue';
import  AlertComponent   from './components/alert.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeComponent,
    },
    {
        path: '/gantt',
        name: 'Gantt',
        component: GanttComponent,
    },
    {
        path: '/accordion',
        name: 'Accordion',
        component: AccordionComponent,
    },
    {
        path: '/alert',
        name: 'Alert',
        component: AlertComponent,
    },
];
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})
export default router;