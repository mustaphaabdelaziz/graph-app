import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CreateGraph from "../views/CreateGraph.vue";
import ShowGraph from "../views/ShowGraph.vue";
import ShowStatistics from "../views/ShowStatistics.vue";
import EditGraph from "../views/EditGraph.vue";

Vue.use(VueRouter);

const routes = [
  {
    name: "home",
    path: "/",
    redirect: '/graphs'
  },
  {
    name: "graph",
    path: "/graphs",
    component: Home,
    children: [
      {
        name: 'show',
        path: ':id',
        component: ShowGraph,
        props: true,

      },
      {
        name: 'edit',
        path: ':id/edit',
        component: EditGraph,
        props: true
      },
      {
        name: 'statistics',
        path: ':id/statistics',
        component: ShowStatistics,
        props: true
      }
    ]
  },
  {
    path: "/new",
    name: "new",
    component: CreateGraph,
  },
];

const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    // console.log("to:", to);
    // console.log("from:", from);
    // console.log("savedPosition:", savedPosition);
    if (savedPosition) {
      return savedPosition; // returning to the position where we start of
    }
    return { x: 0, y: 0 };// go to the top of the page 
  }
});

export default router;
