<template>
  <div class="termWarning">
    <div class="termWarning-header">
      <span>全流程管控——办理异常</span>
    </div>
    <!-- 搜索条件 -->
    <div class="searchCriteriaWarp">
      <!-- 预警类型 -->
      <div class="searchCriteria clearfix">
          <div class="searchCriteria-lable fl minw60">预警类型:</div>
          <div class="searchCriteria-whole fl pl20">
            <el-button type="primary" size="mini">全部</el-button>
          </div>
          <div class="searchCriteria-option fl">
            <span class="pl20 fonts14 cursor" :class="warningType.ifcolor ? 'colorf' : '' " v-for="warningType in warningType" :key="warningType.type" @click="warningTypeClick(warningType)">{{warningType.type}}</span>
          </div>
      </div>
      <!-- 承办法院 -->
      <div class="searchCriteria clearfix">
          <div class="searchCriteria-lable fl minw60">承办法院:</div>
          <div class="searchCriteria-whole fl pl20">
            <el-button type="primary" size="mini">全部</el-button>
          </div>
          <div class="searchCriteria-option fl">
            <span class="pl20 fonts14 cursor" :class="courtData.ifcolor ? 'colorf' : '' " v-for="courtData in courtData" :key="courtData.data" @click="courtDataClick(courtData)">{{courtData.data}}</span>
          </div>
      </div>
      <!-- 承办人 -->
      <div class="searchCriteria clearfix">
          <div class="searchCriteria-lable fl minw60">承办人:</div>
          <div class="searchCriteria-whole fl pl20">
            <el-button type="primary" size="mini">全部</el-button>
          </div>
          <div class="searchCriteria-option fl pl20">
            <div class="clearfix">
              <div class="fl">
                <el-input placeholder="请输入承办人" v-model="input" class="input-with-select">
                  <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
              </div>
              <div class="fl clearfix">
                <div class="xzpersonnel ml20"  v-for="(xzpersonnelData,index) in xzpersonnelData" :key="xzpersonnelData.name">
                  <span class="">{{xzpersonnelData.name}}</span>
                  <span class="xDel" @click="xzpersonnelDataClick(xzpersonnelData,index)">x</span>
                </div>
              </div>
            </div>
            <div class="pt14 clearfix">
                <el-button size="small" :disabled="personnelData.flag" v-for="(personnelData,index) in personnelData" :key="personnelData.name" @click="personnelDataClick(personnelData,index)">{{personnelData.name}}</el-button>
                <!-- <span class="personnel" :class="personnelData.flag?'ml20':''" v-for="(personnelData) in personnelData" :key="personnelData.name" @click="personnelDataClick(personnelData)">{{personnelData.name}}</span> -->
                <div class="fr pt5">
                  <img class="down" src="./down.png" alt="" @click="outerVisible = true">
                </div>
            </div>
          </div>
      </div>
      <!-- 预警程度 -->
      <!-- <div class="searchCriteria clearfix">
          <div class="searchCriteria-lable fl minw60">预警程度:</div>
          <div class="searchCriteria-whole fl pl20">
            <el-button type="primary" size="mini">全部</el-button>
          </div>
          <div class="searchCriteria-option fl">
            <span class="pl20 fonts14 cursor" :class="earlydata.ifcolor ? 'colorf' : '' " v-for="earlydata in earlydata" :key="earlydata.data" @click="earlydataClick(earlydata)">{{earlydata.data}}</span>
          </div>
      </div> -->
    </div>
    <!-- 搜索条件结束 -->
    <!-- 操作开始 -->
    <div class="ma-warp">
      <div class="dataOperationWarp">
        <div class="dataOperation clearfix">
          <div class="fl allelection pl20 pr20">
              <el-checkbox v-model="checked" @change="allelectionChange">全选</el-checkbox>
          </div>
          <div  class="fl" >
            <el-tabs type="card" v-model="activeName">
              <el-tab-pane label="待管控" name="a"></el-tab-pane>
              <el-tab-pane label="已管控" name="b"></el-tab-pane>
              <el-tab-pane label="全部" name="c"></el-tab-pane>
            </el-tabs>
          </div>
          <div class="fr clearfix">
            <div class="fl lineh40 pr10 fonts12">符合筛选条件的有<span class="fonts20 colorr">27</span>件<span class="fonts20 colorr">45</span>项</div>
            <div class="fl pt5">
              <el-button type="primary" size="mini" icon="el-icon-edit" @click="controlClick">批量管控</el-button>
            </div>
          </div>
        </div>
      </div>
      <!-- 操作结束 -->
      <!-- 数据展示 -->
      <div class="dataShowWarp">
        <div class="dataShow">
          
          <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100% ">
            <el-table-column width="40">
              <template slot-scope="scope">
                <el-checkbox v-model="scope.row.data10" @change="tableCheckChange"></el-checkbox>
              </template>
            </el-table-column>
              <el-table-column label="" width="200px">
                <template slot-scope="scope">
                  <div>{{ scope.row.data1 }}</div>
                  <div>{{ scope.row.data2 }}</div>
                </template>
              </el-table-column>
                <el-table-column label="" width="">
                  <template slot-scope="scope">
                    <div>承办人：{{ scope.row.data3 }}</div>
                    <div>状态：{{ scope.row.data4 }}</div>
                  </template>
              </el-table-column>
              <el-table-column label="" width="">
                  <template slot-scope="scope">
                    <div>{{ scope.row.data5 }}</div>
                  </template>
              </el-table-column>
              <el-table-column label="" width="180">
                  <template slot-scope="scope">
                    <!-- <img class="yjImg fl" src="./u686.png" alt="" v-if="scope.row.data11==2">
                    <img class="yjImg fl" src="./u690.png" alt="" v-if="scope.row.data11==3">
                    <img class="yjImg fl" src="./u768.png" alt="" v-if="scope.row.data11==1"> -->
                    <div class="pl5">{{ scope.row.data6 }}</div>
                    <div class="pl5">{{ scope.row.data7 }}</div>
                    <!-- <div class="fl pl20">{{ scope.row.data7 }}</div> -->
                  </template>
              </el-table-column>

              <el-table-column label="" width="">
                  <template slot-scope="scope">
                    <div>{{ scope.row.data8 }}</div>
                  </template>
              </el-table-column>
              <el-table-column label="" width="">
                  <template slot-scope="scope">
                    <div>{{ scope.row.data9 }}</div>
                  </template>
              </el-table-column>
              <el-table-column label="" width="">
                  <template  slot-scope="scope">
                    <el-button @click="infoClick(scope)" type="primary"  size="mini">详情</el-button>
                  </template>
              </el-table-column>
          </el-table>
        </div>
      </div>

    </div>

      <!-- <div class="dataShowWarp">
        <div class="dataShow">
          <el-row :gutter="22" style="position:relative;">
            <el-col :span="6" class="clearfix">
              <el-checkbox class="fl" v-model="checked"></el-checkbox>
              <div class="fonts14 pl10">（2018）黔07执127号</div>
              <div class="pl24 pt5">毕节市中级人民法院</div>
            </el-col>
            <el-col :span="6">
              <div>承办人：袁承志</div>
              <div class="pt5">
                <span>状态：未结</span>
                <span class="pl20">当前节点：搜查</span>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="clearfix yjpac">
                <div class="fl w100">
                  <img class="yjImg fl" src="./u686.png" alt="">
                  <div class="fl lineh20 pl5">全案期限预警</div>
                  <div class="fl lineh20 pl25">剩余：3天</div>
                  <div class="fl lineh20 pl25">待管控</div>
                  <div class="fl lineh20 pl25">批量管控</div>
                </div>
              </div>
            </el-col>
            <el-col :span="12" >
              <div class="infopac">
                <el-button type="primary" class="fr" size="mini">详情</el-button>
              </div>
            </el-col>
          </el-row>
        </div>
        

      </div> -->
    <!-- 数据展示结束 -->




    <!-- 人员选择弹框 -->
    <el-dialog  title="" :visible.sync="outerVisible">
      <div class="clearfix">
        <div class="pl10 fl pt10" v-for="(personnelData,index) in personnelData" :key="personnelData.name" @click="personnelDataClick(personnelData,index)">
          <el-button size="small" :disabled="personnelData.flag" >{{personnelData.name}}</el-button>
        </div>
      </div>
    </el-dialog>


  </div>
</template>
<script src="./index.js"></script>
<style scoped="scoped" src="./index.less" lang="less">
</style>