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
          <template slot="desc">它是一款数据可视化工具,显示了全上海所有二手房的分布信息,颜色越深的地方表示此处分布的房源越密集.此外,数据每天更新一次.</template>
        </Alert>
      </div>
    </div>
    <Spin size="large" fix v-if="spinShow"></Spin>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      this.chartSettings = {
        key: 'oBvDtR6nzWtVchkY4cLHtnah1VVZQKRK',
        bmap: {
          center: [121.47004, 31.23136],  //人民广场作为中心坐标
          zoom: 14,
          roam: true,
          pointSize: 1,
          blurSize: 1
        },
        type: 'bmap'
      }
      return {
        spinShow: false,
        chartData: {
          columns: ['lng', 'lat'],
          rows: []
        }
      }
    },
    mounted() {
      this.loadData();
    },
    methods: {
      loadData() {
        this.spinShow = true
        axios({
          url: "https://mzz.foryung.com/lianjia-search_mp/coordinate",
          method: "get"
        }).then((res) => {
//          console.log(res.data.data.data)
          this.spinShow = false
          this.chartData.rows = res.data.data.data
          console.log(this.chartData.rows)
        }).catch((err) => {
          this.spinShow = false
          this.$Message.error('加载失败!');
          console.error(err)
        })
      }
    }
  }
</script>

<style>
  #main {
    width: 100%;
    height: 100%;
  }

  .alertBox {
    margin-top: 5%;
  }
</style>
