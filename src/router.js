import Vue from 'vue';
import Router from 'vue-router';
import RegisterBiller from "./views/RegisterBiller";
import BillerList from "./views/BillerList";
import LoginBiller from "./views/LoginBiller";
import Dashboard from "./views/Dashboard";


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
/*    {
      path:'/biller-list',
      name:'Biller List',
      component:BillerList
    },*/
    {
      path:'/login-biller',
      name:'Login Biller',
      component:LoginBiller
    },
    {
      path:'/dashboard',
      name:'Dashboard',
      component:Dashboard,
      children:[
        {
          path:'*',
          component:BillerList
        }
      ]
    },
  ]
});
