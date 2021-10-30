import { h } from 'vue';
import textLocal from '@/components/common/textLocal.vue';
export default [
    {
        className: "",
        icon: () => "bi bi-box",
        title: () => h(textLocal, { text: "menu.dashboard" }),
        router: {
            name: "Home",
        },
    },
    {
        icon: "bi bi-box",
        title: () => h(textLocal, { text: "menu.system.title" }),
        sub: [
            {
                className: "",
                icon: "bi bi-box",
                title: () => h(textLocal, { text: "menu.system.user" }),
                router: {
                    name: "User",
                },
            },
            {
                className: "",
                icon: "bi bi-box",
                title: () => h(textLocal, { text: "menu.system.role" }),
                router: {
                    name: "Role",
                },
            },
            {
                className: "",
                icon: "bi bi-box",
                title: () => h(textLocal, { text: "menu.system.permission" }),
                router: {
                    name: "Permission",
                },
            },
        ],
    },
];
