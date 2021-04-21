// 配置路由相关信息
import Vue from 'vue'
import VueRouter from 'vue-router'
// 使用懒加载，不需要立即导入
/* import Home from '../components/Home.vue'
import About from '../components/About.vue'
import NotFound from '../components/NotFound.vue'
import User from '../components/User.vue' */

// 组件懒加载 路由被访问到时才加载相应的组件
const Home = () => import('../components/Home')
const HomeNews = () => import('../components/HomeNews')
const HomeMessages = () => import('../components/HomeMessages')

const About = () => import('../components/About')
const User = () => import('../components/User')
const Profile = () => import('../components/Profile.vue')
const NotFound = () => import('../components/NotFound')

// 1.通过Vue.use(插件),安装插件
Vue.use(VueRouter)
// 实际上内部执行了下面这行代码
// VueRouter.install

// 2.创建VueRouter对象
const routes = [
  // 默认路径比较特殊建议放最前面，代码规范
  {
    path: '/',  //配置根路径
    redirect: '/home' //重定向，将根路径重定向到/home的路径
  },
  {
    path: '/home',
    meta: {
      title: '首页'
    },
    component: Home,
    // 添加meta属性 元数据 里面存放标题信息
    children: [
      // 默认路径
      /* {
        path: '/',
        // redirect:'/home/news'
        redirect: 'news'
      }, */
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'messages',
        component: HomeMessages
      }
    ]
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: '关于'
    },
  },
  {
    path: '/user/:userID',  //userID自定义名字，:动态绑定
    component: User,
    meta: {
      title: '用户'
    },
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '*',
    component: NotFound
  }
]

const router = new VueRouter({
  // 配置路由和组件之间的映射关系
  // 注意属性只能是routes
  routes,
  mode: 'history',
  linkActiveClass: 'active' //将linkActiveClass类名修改为active
})

// 前置钩子hook 跳转前进行回调
router.beforeEach((to, from, next) => {
  //to and from are Route Object,next() must be called to resolve the hook}
  // 从from跳转到to
  // 显示当前页面标题
  document.title = to.matched[0].meta.title
  // console.log(to);
  // 必须使用next方法，否则不知道下一步要干什么就不执行了
  next()
})

// 3.将router对象传入到Vue实例
export default router