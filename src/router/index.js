import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import { redirectIfLogged, redirectIfNotLogged } from './validators/authenticationValidator'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/ambiente",
      name: "environment",
      component: () => import("../views/EnvironmentView.vue"),
      children: [
        {
          path: "",
          component: () => import("../views/EnvironmentHomeView.vue"),
        },
        {
          path: ":environment",
          name: "environment-create",
          component: () => import("../views/EnvironmentFormView.vue"),
        },
      ],
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("../views/AdminView.vue"),
      children: [
        {
          path: "",
          redirect: "/admin/mural",
        },
        {
          path: "mural",
          name: "admin-mural",
          component: () => import("../views/AdminMuralView.vue"),
        },
        {
          path: "financeiro",
          name: "admin-financial",
          component: () => import("../views/AdminFinancialView.vue"),
        },
        {
          path: "agenda",
          name: "admin-schedule",
          component: () => import("../views/AdminScheduleView.vue"),
        },
        {
          path: "documentos",
          name: "admin-document",
          component: () => import("../views/AdminDocumentView.vue"),
        },
        {
          path: "habitacao",
          name: "admin-housing",
          component: () => import("../views/AdminHousingView.vue"),
        },
        {
          path: "chat",
          name: "admin-chat",
          component: () => import("../views/AdminChatView.vue"),
        },
      ],
    },
  ],
});

router.beforeEach(redirectIfNotLogged)
router.beforeEach(redirectIfLogged)

export default router;
