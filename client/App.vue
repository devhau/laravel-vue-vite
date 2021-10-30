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
        "$route.meta.layout": {
            handler: function (_layout) {
                this.layout = _layout;
            },
            deep: true,
            immediate: true,
        },
        "$route.meta.can": {
            handler: function (_permisison) {
                this.canPermission(_permisison);
            },
            deep: true,
            immediate: true,
        },
        "$store.state.loggin": {
            handler: function (_loggin, _logginOld) {
                this.checkPermission();
            },
            deep: true,
            immediate: true,
        },
    },
    methods: {
        forceUpdate() {
            this.keyApp = `app-${new Date().getTime()}`;
        },
        canPermission(_permisison) {
            if (_permisison && !this.$can(_permisison)) {
                this.$router.push({
                    name: "Login",
                });
            }
        },
        checkPermission() {
            this.$nextTick(() => {
                if (!this.canPermission(this.$route.meta.can)) {
                    if (
                        !this.$route.meta.can &&
                        this.$route.meta.auth === true &&
                        !this.$isAuth()
                    ) {
                        this.$router.push({
                            name: "Login",
                        });
                    }
                }
                this.forceUpdate();
                this.$forceUpdate();
            });
        },
    },
    beforeMount() {
        this.$store.dispatch(AUTH_REQUEST, this);
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
