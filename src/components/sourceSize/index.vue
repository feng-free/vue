<template>
    <div class="divbody">
        <div class="row">
            <div class="fyinput">
                <div class="inputgroups">
                    <span>法院名称:</span>
                    <el-input class="input"
                        placeholder="请输入内容"
                        v-model="input10"
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
            <div class="fytable">
                <div class="tablegroups">
                    <div class="table">
                        <el-table
                            :data="tableData"
                            border
                            style="width: 100%">
                            <el-table-column
                            prop="id"
                            label="序号"
                            width="180">
                            </el-table-column>
                            <el-table-column
                            prop="ah"
                            label="案号"
                            width="180">
                            </el-table-column>
                            <el-table-column
                            prop="ajbs"
                            label="案件标识">
                            </el-table-column>
                             <el-table-column
                            prop="path"
                            label="路径">
                            </el-table-column>
                             <el-table-column
                            prop="size"
                            label="大小">
                            </el-table-column>
                        </el-table>
                        <el-pagination class="pagination"
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="currentPage4"
                            :page-sizes="[10, 20, 50, 100]"
                            :page-size="10"
                            layout="total, sizes, prev, pager, next, jumper"
                            :total=size>
                        </el-pagination>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./index.js"></script>
<style scoped="scoped" src="./index.less" lang="less">
</style>
