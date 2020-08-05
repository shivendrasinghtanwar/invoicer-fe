import Vue from 'vue';
import Router from 'vue-router';
import RegisterBiller from "./views/RegisterBiller";
import BillerList from "./views/BillerList";


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/register'
    },
    {
      path: '/register',
      name: 'Register Biller',
      component: RegisterBiller
    },
    {
      path:'/biller-list',
      name:'Biller List',
      component:BillerList
    }
  ]
});
