import { createApp } from 'vue';

import App from './App.vue';

import Tarjeta from './components/UI/Tarjeta.vue';
import Dialogo from './components/UI/Dialogo.vue';


const app = createApp(App);

app.component('tarjeta', Tarjeta);
app.component('dialogo-app', Dialogo);

app.mount('#app');
