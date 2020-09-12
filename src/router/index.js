import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
    mode: "history",
    base: "/",
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import("../pages/Home.vue")
        },
        {
            path: '/about',
            name: 'About',
            component: () => import("../pages/About.vue")
        },
        {
            path: '/blog',
            name: 'Blog',
            component: () => import("../pages/Blog.vue")
        },
        {
            path: '/contact',
            name: 'Contact',
            component: () => import("../pages/Contact.vue")
        },
        {
            path: '/project',
            name: 'Project',
            component: () => import("../pages/Project.vue")
        }
    ]
})