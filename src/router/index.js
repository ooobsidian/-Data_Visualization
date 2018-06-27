import Vue from 'vue'
import Router from 'vue-router'
import Chart from 'components/chart'
import Heatmap from 'components/heatmap'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: {name: 'heatmap'}
    },
    {
      path: '/chart',
      component: Chart,
      children:[{
        path:'',
        redirect:{name:'heatmap'}
      },{
        path:'heatmap',
        name:'heatmap',
        component:Heatmap
      }]
    }
  ]
})
