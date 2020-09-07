import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: true
  },
  {
    path: "/subject-units/:theSubjectSlug",
    name: "TheSubjectUnits",
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "The Subject Units"*/ "../views/TheSubjectUnits"
      )
  },
  {
    path: "/unit-lessons/:theSubjectSlug/:theUnitSlug",
    name: "TheUnitLessons",
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "The Unit Lessons"*/ "../views/TheUnitLessons"
      )
  },
  {
    path: "/lesson-details/:theSubjectSlug/:theUnitSlug/:theLessonSlug",
    name: "TheLessonDetails",
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "The Lesson Details"*/ "../views/TheLessonDetails"
      )
  }
];

const router = new VueRouter({
  // mode: "history",
  routes
});

export default router;
