<template>
<div>
  hello
</div>
</template>

<script>
export default {
  name: "post"
}
</script>

<style scoped>

/*<template>*/

/*<el-tabs v-model="activeName" @tab-click="handleClick" >*/

/*<el-tab-pane label="国内航线" name="first">*/
/*<div class="out-wrap">*/
/*<div class="box-explain">*/
/*<el-crad class="box-card" shadow="always" style="text-align: justify;  font-size: 14px;" >*/
/*<h3>国航收费规则申明</h3>*/
/*(1).托运行李的尺寸限制：每件普通托运行李的长、宽、高三边之和不得小于 60 厘米或 24 英寸，且不得超过 203 厘米或 80 英寸，包括滑轮和把手，超出上述限制范围*/
/*的物品不得作为行李运输。<br/>*/
/*(2).托运行李的重量限制：每件普通托运行李重量不得小于 2 公斤或 4 磅，且不得超过 32 公斤或 70 磅。<br/>*/
/*(3).托运行李的件数限制：每位旅客托运行李数量没有最大数量限制（包括普通行李和特殊行李）。每位旅客如需托运客票填开的免费托运行李限额、会员权益之外的*/
/*第七件及以上额外付费行李（包括普通行李和特殊行李），须提前向国航营业部/航站申请，在航班载量许可的情况下方可允许托运。同时，国航不承诺以上行李与旅客同*/
/*机到达目的地，请各营业部/航站做好旅客沟通。<br/>*/
/*(4).免费托运行李限额以全球各分销系统（Global Distribution System）显示为准<br/>*/
/*<h3>国内运输计重制</h3>*/
/*每件普通托运行李逾重费率：以每公斤按逾重行李票填开当日所适用的直达航班经济舱普通票价的 1.5%计算，以人民币元为单位，尾数四舍五入<br/>*/
/*</el-crad>*/

/*</div>*/
/*<div class="out-box">*/
/*<el-card class="box-card" shadow="always" style="position: center">*/
/*<el-form :inline="true" :model="fromIn" >*/
/*<div style="width: 300px" >*/
/*<el-select  v-model="fromIn.cube" placeholder="舱位" type="number">*/
/*<el-option*/
/*v-for="item in c"*/
/*:key="item.value"*/
/*:label="item.label"*/
/*:value="item.value">*/
/*</el-option>*/
/*</el-select>*/

/*<el-select*/
/*v-model="fromIn.member"*/
/*collapse-tags*/
/*style="margin-left: 0px;margin-top: 10px"*/
/*placeholder="会员" type="number">*/
/*<el-option*/
/*v-for="item in m"*/
/*:key="item.value"*/
/*:label="item.label"*/
/*:value="item.value">*/
/*</el-option>*/
/*</el-select>*/

/*<el-select*/
/*v-model="fromIn.area"*/
/*collapse-tags*/
/*style="margin-left: 1px;margin-top: 10px"*/
/*placeholder="区域" type="number">*/
/*<el-option*/
/*v-for="item in a"*/
/*:key="item.value"*/
/*:label="item.label"*/
/*:value="item.value">*/
/*</el-option>*/
/*</el-select>*/

/*<el-radio v-model="fromIn.baby" style="margin-left: 50px;width: 100px;margin-top: 10px" label="1">有婴儿</el-radio>*/
/*<el-radio v-model="fromIn.baby" label="0">无婴儿</el-radio>*/
/*<el-input v-model="fromIn.heavy" style="margin-left: 0;width: 200px;margin-top: 10px" placeholder="请输入行李箱重量（KG)"  type="number"></el-input>*/
/*<el-input v-model="fromIn.price" style="margin-left: 0;width: 200px;margin-top: 10px" placeholder="请输入经济舱价格（RMB)" type="number"></el-input>*/
/*<el-button type="text" @click="dialogSpecialVisible = true">是否有特殊行李（点击查看详情）</el-button>*/
/*<el-dialog title="添加特殊行李信息"*/
/*v-model="dialogSpecialVisible"*/
/*width="80%"*/
/*:before-close="handleClose" style="margin-left: 0px;margin-top: 10px">*/


/*<el-buttion type="text" @click="dialogDetailVisible=true">详情</el-buttion>*/
/*<el-dialog title="特殊行李分类参考标准"*/
/*v-model="dialogDetailVisible"*/
/*width="80%"*/
/*:before-close="handleClose" style="margin-left: 0px;margin-top: 10px">*/
/*<h3>免费特殊行李类</h3>*/
/*(1)电动轮椅、电动代步工具、手动折叠轮椅、机械假肢及专用小型 气瓶、心脏起搏器或其它植入人体的装置、便携式氧气浓缩器 （POC）、持续正压呼吸机（CPAP）、其它内含锂电池的辅助设备<br/>*/
/*(2)折叠式婴儿车或摇篮或婴儿汽车安全座椅<br/>*/
/*(3)服务犬（经过专门训练为残疾人生活和工作提供协助的特种犬， 包括：导盲犬、助听犬、辅助犬）<br/>*/
/*<h3>类型二</h3>*/
/*皮划艇/独木舟、悬挂式滑翔运动用具、雪橇/水撬。 冲浪板、风帆冲浪用具、橡皮艇或船<br/>*/
/*<h3>类型三</h3>*/
/*撑杆、标枪、单独包装的划船用具或浆、骑马用具<br/>*/

/*<h3>类型四</h3>*/
/*小型电器或仪器、媒体设备<br/>*/
/*<h3>类型五</h3>*/
/*可作为行李运输的枪支<br/>*/
/*<h3>类型六</h3>*/
/*可作为行李运输的子弹<br/>*/
/*<h3>类型七</h3>*/
/*小动物（仅限家庭驯养的猫、狗）注：每个容器的总重量（包括其中的小动物及水与食物的重量）<br/>*/

/*</el-dialog>*/
/*<div v-for="(item, index) in specialForm.Special" >*/
/*<div>*/

/*<div>*/
/*<el-label>行李重量/KG</el-label>*/
/*<el-input type="number" v-model="item.heavies" :min="2" :max="45"  placeholder="2<=W<=45" autocomplete="off" style="width: 150px;margin-top: 5px;margin-left: 10px"></el-input>*/
/*<el-select*/
/*v-model="item.kinds"*/
/*collapse-tags*/
/*style="margin-left: 10px;margin-top: 10px;width: 250px"*/
/*placeholder="特殊行李种类" type="number" >*/
/*<el-option*/
/*v-for="item in kind"*/
/*:key="item.value"*/
/*:label="item.label"*/
/*:value="item.value">*/
/*</el-option>*/
/*</el-select>*/
/*</div>*/
/*</div>*/
/*</div>*/
/*<span slot="footer" class="dialog-footer" style="margin-top: 5px;">*/
/*<el-button type="success" @click="addInputSpecial" style="width: 5px;margin-left: 0;margin-top: 0">添加</el-button>*/
/*<el-button type="danger" @click="delInputSpecial" style="width: 5px;">删除</el-button>*/
/*<el-button @click="dynamicFormVisible=false" style="width: 10px;">取 消</el-button>*/
/*<el-button type="primary" @click="saveFormSpecial()" style="width: 10px;">确 定</el-button>*/

/*</span>*/
/*</el-dialog>*/
/*<el-form-item label="所需费用(RMB)" style="margin-top: 10px">*/
/*<el-input v-model="result"   type="number" ></el-input>*/
/*<el-button @click="onSubmit" style="margin-left: 0px;margin-top: 10px">获取</el-button>*/
/*</el-form-item>*/

/*</div>*/

/*</el-form>*/
/*</el-card>*/
/*</div>*/
/*</div>*/
/*</el-tab-pane>*/
/*<el-tab-pane label="国际航线" name="second">*/
/*<div class="out-wrap">*/
/*<div class="box-explain">*/
/*<el-crad class="box-card" shadow="always" style="text-align: justify;  font-size: 14px;" >*/

/*<h3>国航收费规则申明</h3>*/

/*(1).托运行李的尺寸限制：每件普通托运行李的长、宽、高三边之和不得小于 60 厘米或 24 英寸，且不得超过 203 厘米或 80 英寸，包括滑轮和把手，超出上述限制范围*/
/*的物品不得作为行李运输。<br/>*/
/*(2).托运行李的重量限制：每件普通托运行李重量不得小于 2 公斤或 4 磅，且不得超过 32 公斤或 70 磅。<br/>*/
/*(3).托运行李的件数限制：每位旅客托运行李数量没有最大数量限制（包括普通行李和特殊行李）。每位旅客如需托运客票填开的免费托运行李限额、会员权益之外的*/
/*第七件及以上额外付费行李（包括普通行李和特殊行李），须提前向国航营业部/航站申请，在航班载量许可的情况下方可允许托运。同时，国航不承诺以上行李与旅客同*/
/*机到达目的地，请各营业部/航站做好旅客沟通。<br/>*/
/*(4).免费托运行李限额以全球各分销系统（Global Distribution System）显示为准<br/>*/
/*<el-button type="text" style="margin-top: 10px" @click="dialogDetailVisible1=true"><h3>国际运输计件制</h3>(点击查看详情)</el-button>*/
/*<el-dialog title="国际运输计件制"*/
/*v-model="dialogDetailVisible1"*/
/*width="80%"*/
/*:before-close="handleClose" style="margin-left: 0px;margin-top: 10px;text-align: left">*/

/*<span style="text-align: left">*/
/*<h3>1、在行李托运处使用的货币将用于计算整个行程的费用</h3>*/
/*（1）人民币适用于在中国境内始发航站的行李托运；<br/>*/
/*（2）欧元适用于在欧元区始发航站的行李托运；<br/>*/
/*（3）加元适用于在加拿大始发航站的行李托运；<br>*/
/*（4）美元适用于所有非上述国家的行李托运，境外非美元销售单位在收取超限额行李费时，应按照当日汇率将美元转换成当地货币收取。<br/>*/
/*<h3>2、托运行李件数限制</h3>*/
/*每位旅客托运行李数量没有最大数量限制（包括普通行李和特殊行李）。每位*/
/*旅客如需托运客票填开的免费托运行李限额、会员权益之外的第七件及以上额外付费行李（包括普通行*/
/*李和特殊行李），须提前向国航营业部/航站申请，在航班载量许可的情况下方可允许托运。同时，国*/
/*航不承诺以上行李与旅客同机到达目的地，请各营业部/航站做好旅客沟通*/

/*</span>*/
/*</el-dialog>*/
/*<el-button type="text" style="margin-top: 10px" @click="dialogDetailVisible3=true"><h3>特殊行李声明</h3>(点击查看详情)</el-button>*/
/*<el-dialog title="特殊行李声明"*/
/*v-model="dialogDetailVisible3"*/
/*width="80%"*/
/*:before-close="handleClose" style="margin-left: 0px;margin-top: 10px;text-align: left">*/

/*<span style="text-align: left">*/
/*（1）特殊行李收运须符合《旅客行李运输服务手册》相关标准，否则必须作为货物运输。<br/>*/
/*（2）未在本标准里列明的特殊行李，可与普通托运行李合并计算，超出免费托运行李限额部分，按照普通托运行李超限额收费标准（见附件 2）收取费用。<br/>*/
/*（3）托运行李件数限制：每位旅客托运行李数量没有最大数量限制（包括普通行李和特殊行李）。每位旅客如需托运客票填开的免费托运行李限额、会员权益之外的*/
/*第七件及以上额外付费行李（包括普通行李和特殊行李），须提前向国航营业部/航站申请，在航班载量许可的情况下方可允许托运。同时，国航不承诺以上行李与旅*/
/*客同机到达目的地，请各营业部/航站做好旅客沟通。<br/>*/
/*（4）残疾、伤、病旅客在美国航线免费托运轮椅的数量没有限制，其他航线可免费托运的电动轮椅或电动代步工具或手动折叠轮椅合计不超过 2 部。除此之外，还可*/
/*运输 1 件辅助设备，包括但不限于机械假肢及专用小型气瓶、心脏起搏器或其它植入人体的装置、便携式氧气浓缩器（POC）、持续正压呼吸机（CPAP）、其它内含锂*/
/*电池的辅助设备等。<br/>*/
/*（5）婴儿旅客（无论何种舱位）可免费托运一件折叠式婴儿车或摇篮或婴儿汽车安全座椅<br/>*/

/*</span>*/
/*</el-dialog>*/


/*</el-crad>*/

/*</div>*/
/*<div class="out-box">*/
/*<el-card class="box-card" shadow="always" style="position: center">*/
/*<div style="width: 300px;margin-top: 30px">*/
/*<el-form ::rules="rules" inline="true" :model="fromOut" >*/
/*<div  >*/
/*<el-select  v-model="fromOut.cubeOut" placeholder="舱位" type="number" style="margin-left: 0px;">*/
/*<el-option*/
/*v-for="item in Cube"*/
/*:key="item.value"*/
/*:label="item.label"*/
/*:value="item.value">*/
/*</el-option>*/
/*</el-select>*/

/*<el-select*/
/*v-model="fromOut.memberOut"*/
/*collapse-tags*/
/*style="margin-left: 5px;margin-top: 10px"*/
/*placeholder="会员" type="number" >*/
/*<el-option*/
/*v-for="item in Member"*/
/*:key="item.value"*/
/*:label="item.label"*/
/*:value="item.value">*/
/*</el-option>*/
/*</el-select>*/
/*<el-select*/
/*v-model="fromOut.areaOut"*/
/*collapse-tags*/
/*style="margin-left: 5px;margin-top: 10px;width: 190px"*/
/*placeholder="区域" type="number">*/
/*<el-option*/
/*v-for="item in Area"*/
/*:key="item.value"*/
/*:label="item.label"*/
/*:value="item.value">*/
/*</el-option>*/
/*</el-select>*/
/*<el-button type="text" @click="dialogDetailVisible2=true">详情</el-button>*/
/*<el-dialog title="区域分类标准"*/
/*v-model="dialogDetailVisible2"*/
/*width="80%"*/
/*:before-close="handleClose" style="margin-left: 0px;margin-top: 10px;text-align: left">*/

/*<span style="text-align: left">*/
/*<h3>区域一</h3>*/
/*美洲（除美国/加拿大外）/加勒比海地区与欧洲/非洲/中东/亚洲/西南太平洋之间的航线<br/>*/
/*<h3>区域二</h3>*/
/*(1)欧洲/中东与非洲/亚洲/西南太平洋之间航线；日本与西南太平洋之间航线<br/>*/
/*(2)日本/西南太平洋与亚洲（不含日本及西南太平洋）/非洲之间航线<br/>*/
/*<h3>区域三</h3>*/
/*加拿大与美洲（除美国/加拿大外）/加勒比海地区/欧洲/非洲/中东/亚洲/西南太平洋之间航线<br/>*/

/*<h3>区域四</h3>*/
/*美国（含夏威夷）与美洲（除美国外）/加勒比海地区/欧洲/非洲/中东/亚洲/西南太平洋之间航线<br/>*/
/*<h3>区域五</h3>*/
/*(1)非洲与亚洲（除日本外)之间航线；欧洲与中东之间航线<br/>*/
/*(2)亚洲（除日本)内航线<br/>*/
/*(3)美洲（除美国/ 加拿大）及加勒比海地区内航线<br/>*/
/*(4)上述未列明的航线<br/>*/

/*</span>*/
/*</el-dialog>*/
/*<el-radio v-model="fromOut.babyOut" style="margin-left: 60px;width: 100px;margin-top: 10px" label="1">有婴儿</el-radio>*/
/*<el-radio v-model="fromOut.babyOut" label="0">无婴儿</el-radio>*/

/*<el-button type="text" @click="dialogVisible = true">点击输入行李信息</el-button>*/
/*<el-dialog title="添加普通行李信息"*/
/*v-model="dialogVisible"*/
/*width="80%"*/
/*:before-close="handleClose" style="margin-left: 0px;margin-top: 10px">*/

/*<div v-for="(item, index) in dynamicForm.Luggage" >*/
/*<div>*/

/*<div>*/
/*<el-label>行李重量/KG</el-label>*/
/*<el-input type="number" v-model="item.heavies" :min="2" :max="32" show-word-limit placeholder="2<=W<=32"  autocomplete="off" style="width: 150px;margin-top: 5px;margin-left: 10px"></el-input>*/
/*</div>*/
/*<el-label>行李尺寸/CM</el-label>*/
/*<el-input type="number"   v-model="item.size" :min="60" :max="203" placeholder="60<=S<=203" autocomplete="off" style="width: 150px;margin-top: 5px;margin-left:10px"></el-input>*/
/*</div>*/
/*</div>*/
/*<span slot="footer" class="dialog-footer" style="margin-top: 5px;">*/
/*<el-button type="success" @click="addInput" style="width: 5px;margin-left: 0;margin-top: 0">添加</el-button>*/
/*<el-button type="danger" @click="delInput" style="width: 5px;">删除</el-button>*/
/*<el-button @click="dynamicFormVisible=false" style="width: 10px;">取 消</el-button>*/
/*<el-button type="primary" @click="saveForm()" style="width: 10px;">确 定</el-button>*/
/*</span>*/
/*</el-dialog>*/
/*<el-button type="text" @click="dialogSpecialVisible = true">是否有特殊行李（点击查看详情）</el-button>*/
/*<el-dialog title="添加特殊行李信息"*/
/*v-model="dialogSpecialVisible"*/
/*width="80%"*/
/*:before-close="handleClose" style="margin-left: 0px;margin-top: 10px">*/


/*<el-buttion type="text" @click="dialogDetailVisible=true">详情</el-buttion>*/
/*<el-dialog title="特殊行李分类参考标准"*/
/*v-model="dialogDetailVisible"*/
/*width="80%"*/
/*:before-close="handleClose" style="margin-left: 0px;margin-top: 10px">*/
/*<h3>免费特殊行李类</h3>*/
/*(1)电动轮椅、电动代步工具、手动折叠轮椅、机械假肢及专用小型 气瓶、心脏起搏器或其它植入人体的装置、便携式氧气浓缩器 （POC）、持续正压呼吸机（CPAP）、其它内含锂电池的辅助设备<br/>*/
/*(2)折叠式婴儿车或摇篮或婴儿汽车安全座椅<br/>*/
/*(3)服务犬（经过专门训练为残疾人生活和工作提供协助的特种犬， 包括：导盲犬、助听犬、辅助犬）<br/>*/
/*<h3>类型二</h3>*/
/*皮划艇/独木舟、悬挂式滑翔运动用具、雪橇/水撬。 冲浪板、风帆冲浪用具、橡皮艇或船<br/>*/
/*<h3>类型三</h3>*/
/*撑杆、标枪、单独包装的划船用具或浆、骑马用具<br/>*/

/*<h3>类型四</h3>*/
/*小型电器或仪器、媒体设备<br/>*/
/*<h3>类型五</h3>*/
/*可作为行李运输的枪支<br/>*/
/*<h3>类型六</h3>*/
/*可作为行李运输的子弹<br/>*/
/*<h3>类型七</h3>*/
/*小动物（仅限家庭驯养的猫、狗）注：每个容器的总重量（包括其中的小动物及水与食物的重量）<br/>*/

/*</el-dialog>*/
/*<div v-for="(item, index) in specialForm.Special" >*/
/*<div>*/

/*<div>*/
/*<el-label>行李重量/KG</el-label>*/
/*<el-input type="number"   v-model="item.heavies" :min="2" :max="45" show-word-limit placeholder="2<=W<=45" autocomplete="off" style="width: 150px;margin-top: 5px;margin-left: 10px"></el-input>*/
/*<el-select*/
/*v-model="item.kinds"*/
/*collapse-tags*/
/*style="margin-left: 10px;margin-top: 10px;width: 250px"*/
/*placeholder="特殊行李种类" type="number" >*/
/*<el-option*/
/*v-for="item in kind"*/
/*:key="item.value"*/
/*:label="item.label"*/
/*:value="item.value">*/
/*</el-option>*/
/*</el-select>*/
/*</div>*/
/*</div>*/
/*</div>*/
/*<span slot="footer" class="dialog-footer" style="margin-top: 5px;">*/
/*<el-button type="success" @click="addInputSpecial" style="width: 5px;margin-left: 0;margin-top: 0">添加</el-button>*/
/*<el-button type="danger" @click="delInputSpecial" style="width: 5px;">删除</el-button>*/
/*<el-button @click="dynamicFormVisible=false" style="width: 10px;">取 消</el-button>*/
/*<el-button type="primary" @click="saveFormSpecial()" style="width: 10px;">确 定</el-button>*/

/*</span>*/
/*</el-dialog>*/

/*</div>*/
/*<el-form-item label="所需费用(RMB)" style="margin-top: 10px">*/
/*<el-input v-model="money"   type="number" ></el-input>*/
/*</el-form-item>*/
/*<el-button @click="submitOut">获取</el-button>*/
/*</el-form>*/

/*</div>*/
/*</el-card>*/
/*</div>*/
/*</div>*/


/*</el-tab-pane>*/

/*</el-tabs>*/
/*</template>*/

/*<script>*/

/*import {getRequest, postRequest} from "@/Utils/api";*/

/*export default {*/
/*name: 'Login',*/
/*data() {*/
/*return {*/
/*dialogDetailVisible3:false,*/
/*dialogDetailVisible:false,*/
/*dialogDetailVisible1:false,*/
/*dialogDetailVisible2:false,*/
/*dialogVisible: false,*/
/*dialogSpecialVisible:false,*/
/*activeName: 'second',*/
/*dynamicFormVisible: true,*/
/*dynamicForm: {*/
/*  Luggage: []*/
/*},*/
/*specialForm:{*/
/*  Special:[],*/

/*},*/
/*kinds:'',*/
/*fromOut:{*/
/*  areaOut:'',*/
/*  cubeOut:'',*/
/*  babyOut:'',*/
/*  memberOut:''*/
/*},*/
/*m: [{*/
/*  value: '1',*/
/*  label: '白金会员'*/
/*}, {*/
/*  value: '2',*/
/*  label: '金卡或银卡'*/
/*},  {*/
/*  value: '2',*/
/*  label: '星空联盟金卡'*/
/*}, {*/
/*  value: '3',*/
/*  label: '无会员'*/
/*}],*/
/*c: [{*/
/*  value: '1',*/
/*  label: '头等舱'*/
/*}, {*/
/*  value: '2',*/
/*  label: '公务舱'*/
/*}, {*/
/*  value: '3',*/
/*  label: '悦享经济舱'*/
/*}, {*/
/*  value: '3',*/
/*  label: '超级经济舱'*/
/*}, {*/
/*  value: '3',*/
/*  label: '经济舱'*/
/*}],*/
/*a:[*/
/*{*/
/*  value:'0',*/
/*  label:'境内'*/
/*}*/
/*],*/
/*Area:[*/
/*{*/
/*  value:'1',*/
/*  label:'区域一'*/
/*},*/
/*{*/
/*  value:'2',*/
/*  label:'区域二'*/
/*},*/
/*{*/
/*  value:'3',*/
/*  label:'区域三'*/
/*},*/
/*{*/
/*  value:'4',*/
/*  label:'区域四'*/
/*},*/
/*{*/
/*  value:'5',*/
/*  label:'区域五'*/
/*},*/
/*],*/
/*Cube:[*/
/*{*/
/*  value:'1',*/
/*  label:'头等舱/公务舱',*/
/*},*/
/*{*/
/*  value:'2',*/
/*  label:'悦享经济舱/超级经济舱'*/
/*},*/
/*{*/
/*  value:'3',*/
/*  label:'经济舱'*/
/*}*/
/*],*/
/*Member:[*/
/*{*/
/*  value:'1',*/
/*  label:'凤凰知音终身白金卡/白金卡/金卡/银卡'*/
/*},*/
/*{*/
/*  value: '2',*/
/*  label:'星空联盟金卡'*/
/*},*/
/*{*/
/*  value:'3',*/
/*  label:'无会员'*/
/*}*/
/*],*/
/*kind:[*/
/*{*/
/*  value:'1',*/
/*  label:'免费特殊行李类'*/
/*},*/
/*{*/
/*  value: '2',*/
/*  label: '类型二'*/
/*},*/
/*{*/
/*  value:'3',*/
/*  label:'类型三'*/
/*},*/
/*{*/
/*  value:'4',*/
/*  label:'类型四'*/
/*},*/
/*{*/
/*  value:'5',*/
/*  label:'类型五'*/
/*},*/
/*{*/
/*  value:'6',*/
/*  label:'类型六'*/
/*},*/
/*{*/
/*  value:'7',*/
/*  label:'类型七'*/
/*},*/
/*],*/

/*heavy1: '',*/
/*price1:'',*/
/*baby1: '1',*/
/*area1:[],*/
/*cube1:[],*/
/*member1:[],*/
/*heavies:'',*/


/*fromIn:{*/
/*area:'',*/
/*cube:'',*/
/*baby:'',*/
/*member:'',*/
/*heavy:[*/
/*{required:true,message:'请输入',trigger:'blur'},*/
/*{type:'number',message: '非法输入，请输入数值',trigger:'blur'}*/
/*],*/
/*price:''*/
/*},*/
/*special:{*/
/*  kinds:'',*/
/*  Special:[]*/
/*},*/

/*result:'',*/
/*money:'',*/
/*rules:{*/

/*}*/

/*}*/

/*},*/
/*methods:{*/

/*onSubmit(){*/
/*if(this.fromIn.area===""){*/
/*  this.$message.error("请选择区域")*/
/*}*/
/*else if(this.fromIn.baby===""){*/
/*  this.$message.error("请选择是否有婴儿")*/
/*}*/
/*else if(this.fromIn.cube===""){*/
/*  this.$message.error("请选择舱位")*/
/*}*/
/*else if(this.fromIn.member===""){*/
/*  this.$message.error("请选择会员")*/
/*}*/
/*else if(this.fromIn.heavy===''){*/
/*  this.$message.error("行李重量不能为空")*/
/*}*/
/*else if(this.fromIn.price===''){*/
/*  this.$message.error("请输入经济舱价格")*/
/*}*/
/*getRequest("/calculator/total",this.fromIn).then(resp=>{*/
/*if(resp){*/
/*  console.log(resp);*/
/*  this.result=resp;*/
/*}*/
/*})*/
/*},*/

/*handleClick(tab, event) {*/
/*  console.log(tab, event);*/
/*},*/

/*addInput() {*/
/*this.dynamicForm.Luggage.push({heavies:'',size:''})*/
/*},*/
/*delInput(index) {*/
/*  this.dynamicForm.Luggage.splice(index, 1)*/
/*},*/
/*saveForm() {*/
/*console.log(this.dynamicForm.Luggage)*/


/*postRequest("/calculator/test",this.dynamicForm.Luggage).then(resp=>{*/
/*if(resp){*/
/*  console.log(resp);*/
/*  this.dialogVisible=false*/
/*  // this.money=resp;*/
/*}*/
/*})*/
/*},*/
/*handleClose(done) {*/
/*this.$confirm('确认关闭？')*/
/*.then(_ => {*/
/*         done();*/
/*         })*/
/*.catch(_ => {});*/
/*},*/

/*submitOut(){*/
/*getRequest("/calculator/international",this.fromOut).then(resp=>{*/
/*if(resp){*/
/*  console.log(resp);*/
/*  this.money=resp;*/
/*}*/
/*})*/
/*},*/
/*addInputSpecial(){*/
/*this.specialForm.Special.push({heavies:'',kinds:''})*/
/*},*/
/*delInputSpecial(index){*/
/*  this.specialForm.Special.splice(index, 1)*/
/*},*/
/*saveFormSpecial(){*/
/*console.log(this.specialForm.Special)*/


/*postRequest("/calculator/special",this.specialForm.Special).then(resp=>{*/
/*if(resp){*/
/*  console.log(resp);*/
/*  this.dialogSpecialVisible=false*/
/*  // this.money=resp;*/
/*}*/
/*})*/
/*}*/

/*}*/
/*}*/



/*</script>*/

/*  <style>*/
/*  .el-card{*/
/*    position: relative;*/
/*    width: 80%;*/
/*    padding-bottom: 100px;*/
/*  }*/
/*.md{*/
/*  text-align:center;*/
/*  font-size: 20px;*/
/*}*/
/*.add-btn {*/
/*  position: absolute;*/
/*  right: 29px;*/
/*  top: 135px;*/
/*}*/
/*.box-card {*/
/*  width: 350px;*/
/*  border-radius:15px;*/
/*  background-clip:padding-box;*/
/*  !*margin:180px auto;  会让登录框位于页面底部，于是删掉*!*/

/*  height: 450px;*/
/*  position: absolute;*/
/*  top:50%;*/
/*  left:50%;*/
/*  transform: translate(-50%,-50%);*/
/*  padding: 15px 35px 15px 35px;*/
/*  background: #ffffff;*/
/*  border:1px solid #cbe7e7;*/
/*  box-shadow:0 0 25px #a7d2d7;*/
/*  opacity:0.8;*/
/*}*/
/*.out-wrap{*/

/*  width: 100vw;*/
/*  padding: 0;*/
/*  margin: 0;*/
/*  height: 100vh;*/
/*  font-size: 20px;*/
/*  background-position: left top;*/
/*  background-color: #243;*/
/*  color: #090909;*/
/*  position: relative;*/
/*  background-image: url(.././assets/bb.png);*/

/*  background-repeat: no-repeat;*/
/*  background-attachment: fixed;*/
/*  background-size: 100% 100%;*/

/*}*/
/*.out-box{*/
/*  position: absolute;*/
/*  width:800px;*/
/*  height:100px;*/
/*  top:40%;*/
/*  left:50%;*/
/*  transform: translate(-85%,-30%);*/

/*}*/
/*.box-explain{*/
/*  position: absolute;*/
/*  width:800px;*/
/*  height:100px;*/
/*  top:40%;*/
/*  left:50%;*/
/*  transform: translate(-25%,-30%);*/
/*}*/
/*</style>*/
</style>