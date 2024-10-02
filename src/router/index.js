import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Projects from "../pages/Projects.vue";
import Contacts from "../pages/Contacts.vue";
import NotFound from "../pages/NotFound.vue";
import Dettaglio from "../pages/Dettaglio.vue";
import TypeProjects from "../pages/TypeProjects.vue";
import TecProjects from "../pages/TecProjects.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/progetti",
      name: "projects",
      component: Projects,
    },
    {
      path: "/contatti",
      name: "contacts",
      component: Contacts,
    },
    {
      path: "/dettaglio/:slug",
      name: "dettaglio",
      component: Dettaglio,
    },
    {
      path: "/typeprojects/:slug",
      name: "typeproject",
      component: TypeProjects,
    },
    {
      path: "/tecprojects/:slug",
      name: "tecprojects",
      component: TecProjects,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
    },
  ],
});

export default router;
