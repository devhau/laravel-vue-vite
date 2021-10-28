import permission from '@/common/permission';
export default [
    {
        path: '/user',
        name: 'User',
        meta: {
            can: permission.USER.INDEX
        },
        component: () => import('@/views/user/index.vue'),
    },
    {
        path: '/role',
        name: 'Role',
        meta: {
            can: permission.ROLE.INDEX
        },
        component: () => import('@/views/role/index.vue'),
    },
    {
        path: '/permission',
        name: 'Permission',
        meta: {
            can: permission.PERMISSION.INDEX
        },
        component: () => import('@/views/permission/index.vue'),

    }
]
