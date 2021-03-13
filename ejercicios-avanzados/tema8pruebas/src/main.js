import { createApp } from 'vue'
import App from './App.vue'

import ContactoPersona from './components/ContactoPersona.vue'
import ComponenteLeccion91 from './components/ComponenteLeccion91.vue'
import ComponenteLeccion93 from './components/ComponenteLeccion93.vue'
import ComponenteLeccion94 from './components/ComponenteLeccion94.vue'
import ComponenteLeccion97 from './components/ComponenteLeccion97.vue'

const app = createApp(App);
app.component("contacto-persona", ContactoPersona);
app.component("componente-leccion91", ComponenteLeccion91);
app.component("componente-leccion93", ComponenteLeccion93);
app.component("componente-leccion94", ComponenteLeccion94);
app.component("componente-leccion97", ComponenteLeccion97);

app.mount('#app');
