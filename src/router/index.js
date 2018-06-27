import Vue from 'vue'
import Router from 'vue-router'
import Chart from 'components/chart'
import Heatmap from 'components/heatmap'
Vue.use(Router);

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: {name: 'heatmap'}
    },
    {
      path: '/chart/heatmap',
      component: Chart,
    }
  ]
})
