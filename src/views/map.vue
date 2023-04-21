<template>
  <div style="height: 7%;width: 100%;">
    <el-select
        v-model="content" style="margin-top: 5px;margin-left: 15px"
        @blur="selectBlur" >
      <el-option
          v-for="item in options"
          :label="item.name"
          :value="item.name"/>
    </el-select>
    <el-input
        @input="change($event)"
        style="width: 72%;margin-left: 15px" id="mapInput" type="text" placeholder="请输入搜索关键字" />
    <el-button type="primary" style="margin-left: 15px" >搜索</el-button>
  </div>

  <div id="container" style="height: 93%;width: 100%;"></div>
</template>

<script>

import "ol/ol.css";
import AMapLoader from '@amap/amap-jsapi-loader';
export default {
  name: "map",
  data () {
    return {
      options: [
        {name: '按艺人'},
        {name: '按地点'},
        {name: '按时间'}
      ],
      content: null,
      lnglats: [
        [114.333150,30.548618],
        [112.982881,28.178199],
        [121.485082,30.938893],
        [113.324572,23.111951],
        [114.171886,30.501382],
        [116.343940,39.941973],
      ],
      info:[
          '2023任贤齐[齐迹·在路上]巡回演唱会武汉站',
          '2023张韶涵「寓言」世界巡回演唱会-长沙站',
          '黄绮珊“绮望三十”巡回演唱会 上海九棵树站',
          '李荣浩“麻雀”巡回演唱会 广州站',
          '2023张杰未·LIVE —「曜·北斗」巡回演唱会武汉站',
          'Nightwish 夜愿乐队2020北京站演唱会（延期时间待定）',
      ],

    };
  },
  mounted() {
    this.carGPSIP()
  },
  methods: {
    selectBlur(e) {
      this.inputContent = e.target.value
    },
// {resizeEnable: true}
    carGPSIP() {
      var map = new AMap.Map("container");//初始化地图
      //信息窗口实例
      var infoWindow = new AMap.InfoWindow({offset: new AMap.Pixel(0, -30)});
      //遍历生成多个标记点
      for (var i = 0, marker; i < this.lnglats.length; i++) {
        var marker = new AMap.Marker({
          position: this.lnglats[i],//不同标记点的经纬度
          map: map
        });
        // marker.content = '演唱会' + (i + 1) + '的信息';
        marker.content = this.info[i];
        marker.on('click', markerClick);
        marker.emit('click', {target: marker});//默认初始化不出现信息窗体,打开初始化就出现信息窗体
      }
      function markerClick(e) {
        infoWindow.setContent(e.target.content);
        infoWindow.open(map, e.target.getPosition());
      }
      map.setFitView();
    }
  },
  // setup() {
  //   AMapLoader.load({
  //     "key": "0fba021d7503da0fe875a5aec8fc24a8",      // 申请好的Web端开发者Key，首次调用 load 时必填
  //     "version": "1.4.15",                                // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
  //     "plugins": [],                                      // 需要使用的的插件列表，如比例尺'AMap.Scale'等
  //     "AMapUI": {                                         // 是否加载 AMapUI，缺省不加载
  //       "version": '1.1',                               // AMapUI 缺省 1.1
  //       "plugins": [],                                   // 需要加载的 AMapUI ui插件
  //     },
  //     "Loca": {                                            // 是否加载 Loca， 缺省不加载
  //       "version": '1.3.2'                              // Loca 版本，缺省 1.3.2
  //     },
  //   }).then((AMap) => {
  //     let map = new AMap.Map('container', {
  //       zoom: 11,                                        //级别
  //       center: [116.397428, 39.90923],                 //中心点坐标
  //       viewMode: '3D'                                   //使用3D视图
  //     });
  //   }).catch(e => {
  //     console.log(e);
  //   })
  // },
};
</script>
<style>
.map {
  width: 100%;
  height: 800px;
}
#container {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}
</style>
