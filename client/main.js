import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import { createStore } from 'vuex';
import { createRouter, createWebHashHistory } from "vue-router";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'flag-icon-css/css/flag-icons.css';
import '@devhau/vue-ui/dist/vue-ui.esm.css';
import '@/style/_index.scss';
import VueUi from '@devhau/vue-ui';
import { KEY_LOLCAL_LANG } from "@/common/constant";

import { LANGUAGE_DEFAULT } from '@/common/constant';

import App from '@/App.vue'
import routes from '@/routes';
import messages from '@/locale';
import stores from '@/store';
import directives from '@/directives';
let locale = 'vi';
if (localStorage.getItem(KEY_LOLCAL_LANG)) {
    locale = localStorage.getItem(KEY_LOLCAL_LANG);
} else if (document && document.querySelector) {
    let el = document.querySelector('meta[name=lang]');
    if (el && el.getAttribute('content')) {
        locale = el.getAttribute('content');
    }
}
const i18n = createI18n({
    locale: locale, // set locale
    fallbackLocale: LANGUAGE_DEFAULT, // set fallback locale
    messages
});
const store = createStore(stores);

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
});
const app = createApp(App);


router.beforeEach((to, from, next) => {
    //check permisison for router
    if (to?.meta?.can && !app.config.globalProperties.$can(to.meta.can)) {
        return next({ name: 'Login' });
    }
    //check page is login and go to home
    if (app.config.globalProperties.$isAuth() && (to.path === '/login')) {
        return next('/');
    }
    return next();
});

app.config.globalProperties.$can = (canPermission, flgLoading = true) => store.getters['canPermission'](canPermission, flgLoading);
app.config.globalProperties.$isAuth = (flgLoading = true) => store.getters['isAuthenticated'](flgLoading);
app.use(VueUi);
app.use(router);
app.use(store);
app.use(i18n);
app.use(directives);
app.mount('#app');
