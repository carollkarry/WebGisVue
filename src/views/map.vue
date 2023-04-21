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
        [113.922282,35.332887],
        [113.963101,35.318516],
        [113.960801,35.306263],
        [113.926809,35.301255]
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
        marker.content = '演唱会' + (i + 1) + '的信息';
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
