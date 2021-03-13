import { createApp } from 'vue';

import App from './App.vue';

import BaseBadge from './components/BaseBadge.vue';
import slotbase from './components/ComponenteSlot.vue';

const app = createApp(App);


app.component('base-badge', BaseBadge);
app.component('slot-base', slotbase);

app.mount('#app');
