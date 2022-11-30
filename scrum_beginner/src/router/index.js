import { createRouter, createWebHashHistory } from "vue-router";
import loadingPage from "../views/loadingPage.vue";
import indexPage from "../views/indexPage.vue";
import welcomePage from "../views/welcomePage.vue";
import introducePage from "../views/introducePage.vue";
import productBacklog from "../views/productBacklog.vue";
import teamPage from "../views/teamPage.vue";
import sprintPoint from "../views/sprintPoint.vue";
import focusPoint from "../views/focusPoint.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
    {
      path: "/product-backlog",
      name: "productBacklog",
      component: productBacklog,
    },
    {
      path: "/team",
      name: "team",
      component: teamPage,
    },
    {
      path: "/sprint-point",
      name: "sprintPoint",
      component: sprintPoint,
    },
    {
      path: "/focus-point",
      name: "focusPoint",
      component: focusPoint,
    },
  ],
});

export default router;
