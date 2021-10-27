import permission from '@/common/permission';
export default [
    {
        path: '/user',
        name: 'User',
        meta: {
            can: permission.user.index
        },
        component: () => import('@/views/user/index.vue'),
    },
    {
        path: '/role',
        name: 'Role',
        meta: {
            can: permission.role.index
        },
        component: () => import('@/views/role/index.vue'),
    },
    {
        path: '/permission',
        name: 'Permission',
        meta: {
            can: permission.permission.index
        },
        component: () => import('@/views/permission/index.vue'),

    }
]
