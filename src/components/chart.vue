<template>
  <div id="main" style="width: 1000px;height: 1000px;">
    <IEcharts :option="heatmap"></IEcharts>
  </div>
</template>

<script>
  import 'echarts/map/js/china.js'
  import IEcharts from 'vue-echarts-v3/src/full.js';
  import 'echarts/lib/component/title'
  import 'echarts/lib/component/legend'
  import 'echarts/lib/chart/heatmap'
  import 'echarts/lib/component/toolbox'
  import 'echarts/lib/component/tooltip'

  export default {
    name: "chart",
    components: {
      IEcharts
    },
    data() {
      return {
        chartMapData: {
          title: {
            text: '布局城市展示',
            x: 'left',
            textStyle: {
              fontSize: 33,
              color: '#fff',
              fontWeight: 'bold',
              fontFamily: 'testFamily'
            }
          },
          tooltip: {
            trigger: 'item'
          },
          toolbox: {
            show: true,
            showTitle: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
              mark: {show: true},
              dataView: {show: true, readOnly: false},
              restore: {show: true},
              saveAsImage: {show: true}
            }
          },
          visualMap: {
            show: false,
            inRange: {
              color: ['#d94e5d', '#eac736', '#50a3ba'].reverse()
            },
            textStyle: {
              color: '#fff'
            }
          },
          geo: {
            map: 'china',
            label: {
              emphasis: {
                show: true
              }
            },
            roam: true,
            itemStyle: {
              normal: {
                areaColor: '#323c48',
                borderColor: '#111'
              },
              emphasis: {
                areaColor: '#2a333d'
              }
            }
          },
          series: [{
            name: '中国',
            type: 'heatmap',
            coordinateSystem: 'geo',
            data: [
              {name: '北京', value: [116.4136103013, 39.9110666857, 12312]},
              {name: '天津', value: [117.2059037622, 39.0908458050, 2654]},
              {name: '南京', value: [118.8029140176, 32.0647517242, 14782]},
              {name: '广州', value: [113.2708136740, 23.1351666766, 9620]},
              {name: '深圳', value: [114.0661345267, 22.5485544122, 145874]},
              {name: '上海', value: [121.4803295328, 31.2363429624, 7812]},
              {name: '杭州', value: [120.1617445782, 30.2799186759, 567841]},
              {name: '苏州', value: [120.5896123397, 31.3045865027, 4578]},
              {name: '西安', value: [108.9462765501, 34.3474989219, 24586]},
              {name: '乌鲁木齐', value: [87.6233162377, 43.8327112073, 8796]},
              {name: '拉萨', value: [91.1209613886, 29.6500915169, 781]},
              {name: '呼和浩特', value: [111.7584796016, 40.8475472021, 921]},
              {name: '兰州', value: [103.8406667911, 36.0673285116, 6541]},
              {name: '郑州', value: [113.6313915479, 34.7533581487, 8547]},
              {name: '昆明', value: [102.8396611228, 24.8859360126, 4852]}
            ],
            itemStyle: {
              normal: {
                borderColor: '#271b39',
                borderWidth: 1,
                areaColor: '#675c74'
              },
              emphasis: {
                areaColor: '#d8d5e6'
              }
            }
          }]
        }
      }
    }
  }
</script>

<style scoped>

</style>
