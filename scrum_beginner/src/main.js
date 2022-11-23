import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/font/fonts.css";
import "./assets/style/base.css";
import "./assets/style/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
