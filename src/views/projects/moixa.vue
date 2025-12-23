<template>
<el-breadcrumb :separator-icon="DArrowRight" >
<el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
<el-breadcrumb-item :to="{ path: '/projects' }">Projects</el-breadcrumb-item>
<el-breadcrumb-item>Moixa</el-breadcrumb-item>
</el-breadcrumb>
<h1>Moixa | MoKanove</h1>
<p>High security and high speed network proxy tool.</p>
<el-row class="tac">
    <el-col :span="3">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><icon-menu /></el-icon>
            <span>Quick Start</span>
          </template>
          <el-menu-item-group title="Download Client">
            <el-menu-item index="1-1">GItHub Releases</el-menu-item>
            <el-menu-item index="1-2">My disk</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Config file">
            <el-sub-menu index="1-4">
            <template #title>Examples</template>
            <el-menu-item index="1-4-1">Globle</el-menu-item>
            <el-menu-item index="1-4-2">inbounds</el-menu-item>
            <el-menu-item index="1-4-3">outbounds</el-menu-item>
            <el-menu-item index="1-4-4">DNS</el-menu-item>
            <el-menu-item index="1-4-5">Rules</el-menu-item>
          </el-sub-menu>
          </el-menu-item-group>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon><Document /></el-icon>
          <span>Question</span>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon><setting /></el-icon>
          <span>WebUI</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>
<script lang="ts" setup>
import  {DArrowRight} from '@element-plus/icons-vue'
import {
  Document,
  Menu as IconMenu,
  Setting,
} from '@element-plus/icons-vue'
</script>