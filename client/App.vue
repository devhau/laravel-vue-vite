<script>
import { defineComponent, h } from "vue";
import { formatDate } from "@devhau/utils";
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
            title: () => `Dashboard(${formatDate(new Date())})`,
            router: {
              name: "Home",
            },
          },
          {
            className: "",
            icon: "bi bi-box",
            title: "Gantt",
            router: {
              name: "Gantt",
            },
          },
          {
            className: "vh-user",
            icon: "bi bi-box",
            title: "Accordion",
            router: {
              name: "Accordion",
            },
          },
          {
            className: "",
            icon: "bi bi-box",
            title: "Alert",
            router: {
              name: "Alert",
            },
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
              title: "Profile",
              link: "",
              sub: () => {
                return h("h1", {}, "Hello");
              },
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
  </vh-application>
</template>
