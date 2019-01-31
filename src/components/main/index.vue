<template>
  <div>
    <el-container>
      <el-header>外网-内网同步数据</el-header>
      <el-container>
        <el-aside width="300px" >
          <el-row class="tac">
            <el-col :span="24">
              <el-menu default-active="1"
              class="el-menu-vertical-demo"
              background-color="#545c64">
                <div v-for="item in items" :key="item.id" v-on:click="forward(item.id)">
                  <el-menu-item>
                    <i class="el-icon-menu" index={item.id}></i>
                    <span slot="title" class="titleMenu">{{item.title}}</span>
                  </el-menu-item>
                </div>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-main>
        <router-view>
        </router-view> 
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script src="./index.js"></script>
<style scoped="scoped" src="./index.less" lang="less">
</style>

