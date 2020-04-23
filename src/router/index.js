import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Main from '../views/Main.vue';
import Bars from '../components/Bars';
import Lines from '../components/Lines';
import { barChartPath, lineChartPath } from '../config/routeConfig';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/main',
    name: 'Main',
    component: Main,
    children: [
      {
        path: 'Bars',
        name: 'Bars',
        component: Bars,
        children: barChartPath,
      },
      {
        path: 'Lines',
        name: 'Lines',
        component: Lines,
        children: lineChartPath,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
