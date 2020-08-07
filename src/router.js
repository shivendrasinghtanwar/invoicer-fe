import Vue from 'vue';
import Router from 'vue-router';
import RegisterBiller from "./views/RegisterBiller";
import BillerList from "./views/BillerList";
import LoginBiller from "./views/LoginBiller";


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
    },
    {
      path:'/login-biller',
      name:'Login Biller',
      component:LoginBiller
    }
  ]
});
