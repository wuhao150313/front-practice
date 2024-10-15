import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Layout from '../views/layout.vue';

const routes = [
    {
        path: "/",
        name: "Login",
        component: Login,
    },
    {
        path: "/layout",
        name: "Layout",
        component: Layout,
        redirect: "/home",
        children: [
            {
                path: "/home",
                name: "Home",
                component: () => import("../views/Home.vue"),
            },
            {
                path: "/books",
                name: "BookList",
                component: () => import("../views/BookList.vue"),
            },
            {
                path: "/book/:id",
                name: "BookDetail",
                component: () => import("../views/BookDetails.vue"),
            },
            {
                path: "/cart",
                name: "Cart",
                component: () => import("../views/Cart.vue"),
            },
            {
                path: "/user",
                name: "User",
                component: () => import("../views/User.vue"),
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 };
    },
});

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token');
    if ((to.path.includes('/cart') || to.path.includes('/user')) && !token) {
        alert('请先登录');
        next('/');
    } else {
        next();
    }
});

export default router;
