// https://vitejs.dev/config/#build-polyfillmodulepreload
import 'vite/modulepreload-polyfill'
// still waiting for solution https://github.com/vitejs/vite/issues/4786

import { createApp } from 'vue'

// Styles
import './css/main.css';

// If you are build a SPA with a single <div id="app"></div> entry you would:
// import App from './App.vue'
// createApp(App).mount('#app')

// The example here is to have multiple Vue apps sprinkled throughout your page
// So we would instantiate any known components by their own
import App from './App.vue'
const app = createApp(App);
app.mount('#app');
