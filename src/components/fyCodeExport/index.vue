<template>
    <div class="divbody">
        <div class="row">
            <div class="fyselect">
                <span>法标:</span>
                <el-input class="input"
                    placeholder="请输入法标"
                    v-model="text"
                    clearable>
                </el-input>
            </div>
            <div class="fycheckbox">
                <div class="groupcheckbox">
                    <el-checkbox class="checkbox" v-model="data" label="数据" border></el-checkbox>
                    <el-checkbox class="checkbox" v-model="annex" label="附件" border></el-checkbox>
                </div>
                <div class="groupcheckbox">
                    <el-checkbox class="checkbox" v-model="onload" label="下载" border></el-checkbox>
                    <el-checkbox class="checkbox" v-model="trans" label="转码" border></el-checkbox>
                </div>
            </div>
            <div class="fyradio">
                <div class="groupradio">
                    <el-radio class="radio" v-model="non_auto" label="1" border>服务器下载</el-radio>
                    <el-radio class="radio" v-model="non_auto" label="2" border>浏览器下载</el-radio>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="fydate">
                <span>日期:</span>
                <el-date-picker class="date" 
                    v-model="date"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                </el-date-picker>
            </div>
            <div class="fybutton">
                <el-button type="primary">提交</el-button>
            </div>
        </div>
        <div class="row">
            <div class="fyprogressbar">
                <span>进度:</span>
                <el-progress class="progressbar"
                    :text-inside="true" 
                    :stroke-width="30" 
                    :percentage="100" 
                    status="success">
                </el-progress>
            </div>
        </div>
        <div class="row">
            <div class="fyinput">
                <span>日志:</span>
                <el-input class="input"
                    type="textarea"
                    :rows="20"
                    readonly="true"
                    v-model="log">
                </el-input>
            </div>
        </div>
    </div>
</template>
<script src="./index.js"></script>
<style scoped="scoped" src="./index.less" lang="less">
</style>

