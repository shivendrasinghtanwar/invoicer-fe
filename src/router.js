import Vue from 'vue';
import Router from 'vue-router';
import RegisterBiller from "./views/RegisterBiller";


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
/*        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/add-operator',
            name: 'AddOperator',
            component: AddOperator
        },
        {
            path: '/add-moderator',
            name: 'AddModerator',
            component: AddModerator
        },*/
        // {
        //     path: '/reset/password',
        //     name: 'reset-password-email',
        //     component: ResetPassword
        // },
        // {
        //     path: '/admin/set/password',
        //     name: 'reset-password',
        //     component: ResetChangePassword
        // },
        /*{
            path: '/users',
            component: Users
        }*/
    ]
});
