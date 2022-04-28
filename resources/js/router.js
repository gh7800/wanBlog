
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
