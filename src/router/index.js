import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Todo from "../views/todo/Todo.vue"

const routes = [
  {
    path: "/home",
    name: "Home",
    meta: {
      layout: "default",
    },
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    meta: {
      layout: "auth"
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/",
    name: "Todo",
    meta: {
      layout: "default",
    },
    component: Todo,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
