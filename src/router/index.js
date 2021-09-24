import Vue from 'vue'
import VueRouter from 'vue-router'

// 2.创建路由懒加载
const Home = () =>
    import ('views/home/Home.vue')
const Category = () =>
    import ('views/category/Category.vue')
const Cart = () =>
    import ('views/cart/Cart.vue')
const Profile = () =>
    import ('views/profile/Profile.vue')
    // 1.安装插件
Vue.use(VueRouter)


// 2.1创建路由对象(VueRouter)
const routers = [
    // 配置路由直接的映射关系
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        meta: {
            title: '首页'
        }
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/cart',
        component: Cart
    }
]
const router = new VueRouter({
    routes: routers,
    mode: 'history',
    linkActiveClass: 'active'
})
export default router