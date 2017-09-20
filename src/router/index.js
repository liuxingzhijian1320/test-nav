import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/Home'
import left from '@/components/Left'
import right from '@/components/Right'
import other from '@/components/Other'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      redirect: { //重定项 一面一打开显示那个页面
        name: 'left',
      },
      children: [
        {
          path: '/home/left',
          name: 'left',
          component: left
        }, {
          path: '/home/right',
          name: 'right',
          component: right
        }
      ]
    },
    {
      path: '/other',
      name: 'other',
      component: other
    }, {
      path: '*',
      redirect: {  //对url输入错误的路径，自定返回的home这个路由
        name: 'home',
      },
    },
  ]
})
