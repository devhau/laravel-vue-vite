import { h } from 'vue';
import textLocal from '@/components/common/textLocal.vue';
import profile from "@/components/profile/index.vue";
import switchLocal from "@/components/common/switchLocal.vue";
import currentLocal from "@/components/common/currentLocal.vue";
import nameUserCurrent from "@/components/common/nameUserCurrent.vue";
export default [
    {
        className: "",
        icon: "",
        title: () => h(currentLocal, {}),
        link: "",
        sub: () => h(switchLocal, {}),
    },
    {
        className: "vh-profile",
        icon: "bi bi-person-square",
        title: () => h(nameUserCurrent, {}),
        link: "",
        sub: () => h(profile, {}),
    },
];
