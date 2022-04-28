
require('./bootstrap');
window.Vue = require('vue');
window.VueRouter = require('vue-router');
import routes from "./router"
import axios from "axios"
import ElementPlus from 'element-plus'

import RootComponent from "./components/App"

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
})

const app = Vue.createApp(RootComponent)
app.config.globalProperties.$http = axios

app.use(router)
    .use(ElementPlus);
app.mount('#app')

