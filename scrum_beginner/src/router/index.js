import { createRouter, createWebHistory } from "vue-router";
import loadingPage from "../views/loadingPage.vue";
import indexPage from "../views/indexPage.vue";
import welcomePage from "../views/welcomePage.vue";
import introducePage from "../views/introducePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: loadingPage,
    },
    {
      path: "/index",
      name: "index",
      component: indexPage,
    },
    {
      path: "/welcome",
      name: "welcome",
      component: welcomePage,
    },
    {
      path: "/introduce",
      name: "introduce",
      component: introducePage,
    },
  ],
});

export default router;
