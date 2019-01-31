<template>
    <div class="divbody">
        <div class="row">
            <div class="fyinput">
                <span>列名:</span>
                <el-input class="input"
                    placeholder="请输入内容"
                    v-model="input10"
                    clearable>
                </el-input>
            </div>
            <div class="fyradio">
                 <el-radio-group v-model="radio" size="mediums" class="radiogroups">
                    <el-radio class="radio" label="1" border>服务器下载</el-radio>
                    <el-radio class="radio" label="2" border>浏览器下载</el-radio>
                </el-radio-group>
            </div>
            <div class="fybutton">
                <el-button type="primary">提交</el-button>
            </div>
        </div>
        <div class="row">
            <div class="fyupload">
                <el-upload
                    class="upload"
                    drag
                    action=""
                    multiple>
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                </el-upload>
            </div>
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
