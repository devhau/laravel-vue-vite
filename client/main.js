import { createApp } from 'vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@devhau/vue-ui/dist/vue-ui.esm.css';

import VueUi from '@devhau/vue-ui';
import App from './App.vue'
import router from './router';

const app = createApp(App);
app.use(VueUi);
app.use(router);
app.mount('#app');
