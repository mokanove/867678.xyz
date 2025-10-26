<template>
<el-breadcrumb :separator-icon="DArrowRight" >
<el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
<el-breadcrumb-item :to="{ path: '/projects' }">Projects</el-breadcrumb-item>
<el-breadcrumb-item>Moixa</el-breadcrumb-item>
</el-breadcrumb>
<h1>Moixa | MoKanove</h1>
</template>
<script lang="ts" setup>
import  {DArrowRight} from '@element-plus/icons-vue'
</script>