import { createApp } from 'vue';

import App from './App.vue';

import ContactoAmigo from "./components/ContactoAmigo.vue";

const app = createApp(App);
app.component('contacto-amigo', ContactoAmigo);
app.mount('#app');
