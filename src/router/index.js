import Router from 'vue-router'
import Vue from 'vue'
// import Base from "../view/Base.vue"

Vue.use(Router)
const baseRouters = [{
    path: "/",
    redirect: "/base"
},
{
    path:"/base",
    name:'base',
         component: () =>
    import ('../view/Base.vue')  // 路由懒加载写法
},{
    path:"/main/:tab",
    name:"main",
    component:()=>import('../view/main/Main.vue')
}

]


const createRouter = () => new Router({
    routes: baseRouters
})

const router = createRouter()

export default router