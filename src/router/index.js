import Vue from "vue";
import VueRouter from "vue-router";
import Students from "../views/Students.vue";
import Professors from "../views/Professors.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Students",
    component: Students
  },
  {
    path: "/professors",
    name: "Professors",
    component: Professors
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
