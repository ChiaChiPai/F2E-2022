import { createRouter, createWebHistory } from "vue-router";
import LoadingPage from "../views/LoadingPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: LoadingPage,
    },
  ],
});

export default router;
