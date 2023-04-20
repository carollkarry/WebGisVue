import Vue, {createApp, VueElement} from 'vue'
import App from './App.vue'
import store from './store'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import router from "@/router";
import axios from "axios";
import locale from 'element-plus/lib/locale/lang/zh-cn'
import 'dayjs/locale/zh-cn'
import* as echarts from 'echarts'
import AMapLoader from "@amap/amap-jsapi-loader";


const app = createApp(App)
app.use(store)
app.use(AMapLoader)
app.use(router)
app.use(ElementPlus,{locale})
app.mount('#app')

app.config.globalProperties.$echarts=echarts;
VueElement.prototype.axios=axios;








