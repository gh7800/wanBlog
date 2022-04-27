/*
import Home from "./components/Home"
// import VueRouter from 'vue-router'
import Login from './components/auth/Login'
import AuthUserInfo from './components/auth/Info'

window.Vue = require('vue')
// import Vue from ''
// Vue.use(VueRouter)

const router = VueRouter.createRouter({
    mode: 'history',
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/authuserinfo',
            name: 'AuthUserInfo',
            component: AuthUserInfo,
        },
        {
            path: '/',
            component: Home
        },
    ],
})

export default router;
*/

import Home from "./components/Home"
import App from "./components/App";
import Info from "./components/auth/Info";
import Login from "./components/auth/Login";

export default [
    {
        path: '/',
        name:'App',
        component: App
    },
    {
        path: '/home',
        name:'Home',
        component: Home
    },
    {
        path: '/AuthUserInfo',
        name:'AuthUserInfo',
        component: Info
    },
    {
        path: '/login',
        name:'Login',
        component: Login
    },

]
