<template>
    <div class="divbody">
        <div class="row">
            <div class="fyinput">
                <div class="inputgroups">
                    <span>人员姓名</span>
                    <el-input class="input"
                        placeholder="请输入内容"
                        v-model="name"
                        clearable>
                    </el-input>
                </div>
            </div>
            <div class="fybutton">
                <div class="buttongroups"> 
                    <el-button type="primary">提交</el-button>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="fylog">
                <span>日志:</span>
                <el-input class="log"
                    type="textarea"
                    :rows="27"
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


