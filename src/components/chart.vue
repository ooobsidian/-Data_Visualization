<template>
  <div id="main">
    <ve-heatmap :data="chartData" :settings="chartSettings"></ve-heatmap>
    <div class="alertBox">
      <div>
        <Alert show-icon type="warning">
          这是什么
          <Icon type="help-circled" slot="icon"></Icon>
          <template slot="desc">这是一个百度地图,将上海房源的信息展示在上面.</template>
        </Alert>
      </div>
     <div style="margin-top: 20px">
       <Alert show-icon type="success">
         它有什么用
         <Icon type="checkmark-round" slot="icon"></Icon type="home">
         <template slot="desc">它是一款数据可视化工具,显示了全上海所有二手房的分布信息,颜色越深的地方表示此处分布的房源越密集.此外,数据是每天更新一次.</template>
       </Alert>
     </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      this.chartSettings = {
        key: 'oBvDtR6nzWtVchkY4cLHtnah1VVZQKRK',
        bmap: {
          center: [120.14322240845, 30.236064370321],
          zoom: 14,
          roam: true
        },
        type: 'bmap'
      }
      return {
        chartData: {
          columns: ['lat', 'lng'],
          rows: [
            {'lat': 120.14322240845, 'lng': 30.236064370321},
            {'lat': 120.14301682797, 'lng': 30.236035316745},
            {'lat': 120.14138577045, 'lng': 30.236113748704},
            {'lat': 120.1400398833, 'lng': 30.235973050702},
            {'lat': 120.13893453465, 'lng': 30.23517220446},
            {'lat': 120.1382899739, 'lng': 30.234062922977},
            {'lat': 120.13265960629, 'lng': 30.231641351722},
            {'lat': 120.13170681763, 'lng': 30.229925745619},
            {'lat': 120.13119614803, 'lng': 30.228996846637},
            {'lat': 120.13023980134, 'lng': 30.228226570416}
          ]
        }
      }
    }
  }
</script>

<style>
  #main {
    width: 100%;
    height: 100%;
  }
  .alertBox{
    margin-top: 5%;
  }
</style>
