export default [
    {
        path: '/user',
        name: 'User',
        component: () => import('@/views/user/index.vue'),
    },
    {
        path: '/role',
        name: 'Role',
        component: () => import('@/views/role/index.vue'),
    },
    {
        path: '/permission',
        name: 'Permission',
        component: () => import('@/views/permission/index.vue'),
    }
]
