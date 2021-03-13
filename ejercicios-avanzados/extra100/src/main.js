import { createApp } from 'vue'
import App from './App.vue'

import Persona from './components/Persona.vue';
import ListaPersonas from './components/ListaPersonas.vue';
import ComponenteCompuesto from './components/ComponenteCompuesto.vue';

import Persona2 from './components/Persona2.vue';
import ListaPersonas2 from './components/ListaPersonas2.vue';
import ComponenteCompuesto2 from './components/ComponenteCompuesto2.vue';

const app = createApp(App);

app.component('persona',Persona);
app.component('lista-personas',ListaPersonas);
app.component('componente-compuesto',ComponenteCompuesto);

app.component('persona2',Persona2);
app.component('lista-personas2',ListaPersonas2);
app.component('componente-compuesto2',ComponenteCompuesto2);

app.mount('#app')
