import { createApp } from "vue";

import router from "./router.js";
import Store from "./components/Store/index.js";

import BaseCard from "./components/UI/Objects/BaseCard.vue";
import BaseButton from './components/UI/Objects/BaseButton.vue';
import BaseBadge from './components/UI/Objects/BaseBadge.vue';
import BaseSpinner from './components/UI/Objects/BaseSpinner.vue';
import BaseDialog from './components/UI/Objects/BaseDialog.vue';

import App from "./App.vue";

const app = createApp(App);

app.use(router);
app.use(Store);

app.component("base-card", BaseCard);
app.component("base-button", BaseButton);
app.component("base-badge", BaseBadge);
app.component("base-spinner", BaseSpinner);
app.component("base-dialog", BaseDialog);

app.mount("#app");
