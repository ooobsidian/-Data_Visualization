import Vue from 'vue'
import Router from 'vue-router'
import Chart from 'components/chart.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'root',
      redirect:{name:'chart'}
    },
    {
      path:'chart',
      name:'chart',
      component:Chart
    }
  ]
})
