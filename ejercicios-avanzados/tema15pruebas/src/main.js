import { createApp } from 'vue';

import estado from './store/index.js';

import App from './App.vue';







const app = createApp(App);
app.use(estado);

app.mount('#app');
