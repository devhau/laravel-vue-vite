<script>
import { defineComponent, h } from "vue";
import { AUTH_REQUEST } from '@/common/action';
import Profile from '@/components/profile/index.vue';
export default defineComponent({
  name: "HomePage",
  data() {
    return {
      layout: 'Sidebar',
      menu: {
        app: {
          logo: {
            app: "HauAdmin",
            mini: "HAU",
          },
          version: {
            app: "Version 1.0.2",
            mini: "1.0.2",
          },
        },
        sidebar: [
          {
            className: "",
            icon: () => "bi bi-box",
            title: () => this.$t('menu.dashboard'),
            router: {
              name: "Home",
            },
          },
          {
            icon: "bi bi-box",
            title: "Bảo mật",
            sub: [
              {
                className: "",
                icon: "bi bi-box",
                title: "Tài khoản",
                router: {
                  name: "User",
                },
              },
              {
                className: "",
                icon: "bi bi-box",
                title: "Vai trò",
                router: {
                  name: "Role",
                },
              },
              {
                className: "",
                icon: "bi bi-box",
                title: "Quyền",
                router: {
                  name: "Permission",
                },
              },
            ]
          },

        ],
        header: {
          left: [
            {
              className: "",
              icon: "bi bi-box",
              title: "Home",
              link: "https://www.hau.xyz",
              sub: [],
            },
            {
              className: "",
              icon: "bi bi-box",
              title: "Report",
              link: "",
              sub: [
                {
                  className: "",
                  icon: "bi bi-box",
                  title: "Report 1",
                  link: "",
                },
                {
                  className: "",
                  icon: "bi bi-box",
                  title: "Report 2",
                  link: "",
                },
              ],
            },
            {
              className: "",
              icon: "bi bi-box",
              title: "Order",
              link: "",
              sub: [],
            },
            {
              className: "",
              icon: "bi bi-box",
              title: "Github",
              link: "https://github.com/devhau/vue-ui-demo",
              sub: [],
            },
          ],
          right: [
            {
              className: "",
              icon: "bi bi-box",
              title: "Inbox",
              link: "",
              sub: [],
            },
            {
              className: "vh-profile",
              icon: "bi bi-box",
              title: () => this.$store.state.user?.name,
              link: "",
              sub: () => h(Profile, {}),
            },
          ],
        },
        footer: [
          {
            className: "",
            icon: "bi bi-box",
            title: "Information",
            link: "",
            sub: [],
          },
          {
            className: "",
            icon: "bi bi-box",
            title: "Information",
            link: "",
            sub: [],
          },
        ],
      },
    };
  },
  watch: {
    '$route.meta.layout': {
      handler: function (_layout) {
        this.layout = _layout;
      },
      deep: true,
      immediate: true
    }
  },
  created: () => {
  },
  beforeMount() {
    if (this.$store.getters.isAuthenticated) {
      this.$store.dispatch(AUTH_REQUEST);
    }
  },
  mounted() {

  }
});
</script>

<template>
  <vh-application
    :menu="menu"
    :miniSidebar="false"
    :layout="layout"
  >
    <router-view></router-view>
    {{this.$store.state.auth.loggin}}
  </vh-application>
</template>
