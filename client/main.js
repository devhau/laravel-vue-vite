import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import { createStore } from 'vuex';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@devhau/vue-ui/dist/vue-ui.esm.css';
import '@/scss/_index.scss';

import VueUi from '@devhau/vue-ui';

import { LANGUAGE_DEFAULT } from '@/common/constant';

import App from '@/App.vue'
import router from '@/router';
import messages from '@/locale';
import stores from '@/store';
const i18n = createI18n({
    locale: 'vi', // set locale
    fallbackLocale: LANGUAGE_DEFAULT, // set fallback locale
    messages
});
const store = createStore(stores)


const app = createApp(App);
app.use(VueUi);
app.use(router);
app.use(store);
app.use(i18n);
app.mount('#app');
