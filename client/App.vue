<script>
import { defineComponent, h, nextTick } from "vue";
import { AUTH_REQUEST } from "@/common/action";
import menu from "@/common/menu";
export default defineComponent({
    name: "HomePage",
    data() {
        return {
            layout: "Sidebar",
            keyApp: "",
            menu,
        };
    },
    watch: {
        $route: {
            handler: function (_route) {
                this.layout = _route.meta.layout;
                this.checkPermission();
            },
            deep: true,
            immediate: true,
        },
        "$store.state.loggin": {
            handler: function (_loggin, _logginOld) {
                this.$store.dispatch(AUTH_REQUEST, this);
            },
            deep: true,
            immediate: true,
        },
    },
    methods: {
        forceUpdate() {
            this.keyApp = `app-${new Date().getTime()}`;
        },
        canPermission(_permission) {
            if (_permission && !this.$can(_permission) && !this.$isAuth()) {
                return false;
            }
            return true;
        },
        checkPermission() {
            if (
                (this.$route?.meta?.can &&
                    !this.canPermission(this.$route.meta.can)) ||
                (this.$route?.meta?.auth && !this.$isAuth())
            ) {
                this.$router.push({
                    name: "Login",
                });
            }
            this.$nextTick(() => {
                this.forceUpdate();
                this.$forceUpdate();
            });
        },
    },
});
</script>

<template>
    <vh-application
        :key="keyApp"
        :menu="menu"
        :miniSidebar="false"
        :layout="layout"
    >
        <router-view></router-view>
    </vh-application>
</template>
