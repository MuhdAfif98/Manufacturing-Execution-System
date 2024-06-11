import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";

// styles

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";

// mouting point for the whole app

import App from "@/App.vue";

// layouts

import Admin from "@/layouts/Admin.vue";

// views for Admin layout

import Dashboard from "@/views/admin/Dashboard.vue";
import ProductionTracking from "@/views/admin/ProductionTracking.vue";
import Tables from "@/views/admin/Tables.vue";

// routes

const routes = [
  {
    path: "/",
    component: Admin,
    children: [
      {
        path: "/dashboard",
        component: Dashboard,
      },
      {
        path: "/productions",
        component: ProductionTracking,
      },
      {
        path: "/tables",
        component: Tables,
      },
    ],
  },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
