import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

import Book from "@/views/book/search.vue";
import demo1 from "@/views/demo/demo-1.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Book",
    name: "Book",
    component: Book,
  },
  {
    path: "/demo1",
    name: "demo1",
    component: demo1,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
