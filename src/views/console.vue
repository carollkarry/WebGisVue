<template>
  <div id="main" style="height: 100%;width: 100%;"></div>
</template>

<script>
import * as echarts from "echarts";
import {getRequest} from "@/Utils/api";
export default {
  name: 'console',
  data() {
    return {
      CityCount:[],
      pieid:[],
      piedata:[]
    }
  },
  mounted: function () {

    this.$nextTick(function () {
      this.getPie()
    })
  },
  methods: {
    getPie() {
      // 绘制图表
      let myChart = echarts.init(document.getElementById('main'))
      getRequest("/citycount/getConcertNumByCity").then(resp => {
        if (resp) {
          let obj=new Object();

          this.CityCount=resp;
          for(let i=0;i<10;i++){
            obj={name:this.CityCount[i].name,value:parseInt(this.CityCount[i].count)};
            this.piedata[i]=obj;
            this.pieid[i]=this.CityCount[i].name;
          }

          // 指定图表的配置项和数据
          let option = {
            //标题
            title: {
              text: '各市演唱会统计饼状图',
              x: 'center',              //标题位置

            },
            // stillShowZeroSum: true,
            //鼠标划过时饼状图上显示的数据
            tooltip: {
              trigger: 'item',
              formatter: '{a}<br/>{b}:{c} ({d}%)'
            },
            //图例
            legend: {//图例  标注各种颜色代表的模块
              // orient: 'vertical',//图例的显示方式  默认横向显示
              bottom: 10,//控制图例出现的距离  默认左上角
              left: 'center',//控制图例的位置
              // itemWidth: 16,//图例颜色块的宽度和高度
              // itemHeight: 12,
              textStyle: {//图例中文字的样式
                color: '#000',
                fontSize: 16
              },
              // data:this.pieid //图例上显示的饼图各模块上的名字
              //data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
              data: this.pieid,
            },
            // //饼图中各模块的颜色
            color: ['#32dadd', '#b6a2de', '#5ab1ef','#53bbf5'],
            // 饼图数据
            series: {
              name: '演出',
              type: 'pie',             //echarts图的类型   pie代表饼图
              radius: '70%',           //饼图中饼状部分的大小所占整个父元素的百分比
              center: ['50%', '50%'],  //整个饼图在整个父元素中的位置
              // data: [
              //   {value: 335, name: '直接访问'},
              //   {value: 310, name: '邮件营销'},
              //   {value: 234, name: '联盟广告'},
              //   {value: 135, name: '视频广告'},
              //   {value: 1548, name: '搜索引擎'}],
              data:this.piedata,
              // data:''               //饼图数据
              // data: [                  //每个模块的名字和值
              //   {name: this.City, value: 10},
              //   {name: '北京', value: 30},
              //   {name: '成都', value: 50}
              // ],
              itemStyle: {
                normal: {
                  label: {
                    show: true,//饼图上是否出现标注文字 标注各模块代表什么  默认是true
                    // position: 'inner',//控制饼图上标注文字相对于饼图的位置  默认位置在饼图外
                  },
                  labelLine: {
                    show: true//官网demo里外部标注上的小细线的显示隐藏    默认显示
                  }
                }
              },
            }
          }
          // 使用刚指定的配置项和数据显示图表。
          myChart.setOption(option)

            //console.log(this.pieid)
          // console.log(this.CityCount);
        }
      })



    }
  }

}
</script>

<style >

</style>
