import Vue from 'vue';
import Router from 'vue-router';
import RegisterBiller from "./views/RegisterBiller";
import LoginBiller from "./views/LoginBiller";
import Dashboard from "./views/Dashboard";
import AddInvoice from "./views/AddInvoice";
import ListInvoice from "./views/ListInvoice";
import CreateInvoiceFrom from "./views/CreateInvoiceFrom";


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/login'
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
      path:'/login',
      name:'Login Biller',
      component:LoginBiller
    },
    {
      path:'/dashboard',
      name:'Dashboard',
      component:Dashboard,
      children:[
        {
          path:'',
          component:AddInvoice
        },
        {
          path:'add-invoice',
          component:AddInvoice
        },
        {
          path:'list-invoices',
          component:ListInvoice
        },
        {
          path:'invoice-form',
          component:CreateInvoiceFrom
        }
      ]
    },
  ]
});
