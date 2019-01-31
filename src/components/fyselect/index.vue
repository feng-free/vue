<template>
    <el-select class="select" v-model="value" placeholder="请选择" size="medium">
        <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
        </el-option>
    </el-select>
</template>
<script src="./index.js"></script>
<style scoped="scoped" src="./index.less" lang="less">
</style>