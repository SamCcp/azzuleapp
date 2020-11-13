import { RouteConfig } from 'vue-router';

interface AzzuleRoutes extends RouteConfig
{
  icon? : string,
  children? : AzzuleRoutes[],
}

const routes: AzzuleRoutes[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path : "/primuslabs",
    component : () => import("layouts/primuslayout.vue"),
    children : [
      {
        path : "/primuslabs",
        name : "Home",
        icon : "home",
        component : () => import("pages/primus/home.vue")
      },
      {
        path : "/primuslabs/sampler",
        name : "Sampler",
        icon : "list",
        component : () => import("pages/primus/sampler.vue")
      },
      {
        path : "/primuslabs/scheduler",
        name : "Scheduler",
        icon : "schedule",
        component : () => import("pages/primus/scheduler.vue")
      },
      {
        path : "/primuslabs/settings", 
        icon : "settings",
        name : "Settings",
        component: () => import("pages/settings.vue")
      }
    ]
  },
  {
    path : "/login",
    component : () => import("pages/Auth/Login.vue")
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes;
