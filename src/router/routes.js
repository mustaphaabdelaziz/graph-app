import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import ShowGraph from "../views/ShowGraph.vue";
import ShowStatistics from "../views/ShowStatistics.vue";

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
        component: ShowStatistics,
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
    path: "/about",
    name: "about",
    component: About,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
