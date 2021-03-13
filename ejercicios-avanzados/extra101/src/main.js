import { createApp } from 'vue';
import App from './App.vue';

import hijo from './components/hijo.vue';
import padre from './components/padre.vue';
import abuelo from './components/abuelo.vue';

const app = createApp(App);
app.component('c-hijo',hijo);
app.component('c-padre',padre);
app.component('c-abuelo',abuelo);

app.mount('#app');