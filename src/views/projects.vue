<template>
<el-breadcrumb :separator-icon="DArrowRight" >
<el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
<el-breadcrumb-item>Projects</el-breadcrumb-item>
</el-breadcrumb>
  <h1>Projects</h1>
<el-row :gutter="10">
    <el-col :xs="24" :sm="12" :md="12" :lg="12">
    <el-card @click="link('moitools')">
    <h2>Moitools</h2>
    <p>It can perform download and upload speed tests, DNS and WebRTC leak detection.</p>
  </el-card>
  </el-col>
  <el-col :xs="24" :sm="12" :md="12" :lg="12">
  <el-card @click="link('tkkhs')">
    <h2>TKKHS</h2>
    <p>A tool for venting emotions.</p>
  </el-card>
  </el-col>
  <el-col :xs="24" :sm="12" :md="12" :lg="12">
   <el-card @click="link('laoues')">
    <h2>laoues</h2>
    <p>High security and high speed network proxy tool.</p>
  </el-card>
  </el-col>
  <el-col :xs="24" :sm="12" :md="12" :lg="12">
 <el-card @click="link('ghit')">
    <h2>Ghit</h2>
    <p>A convenient open source and easy-to-use version controller.</p>
  </el-card>
  </el-col>
  <el-col>
   <el-card @click="link('FuestaOS')">
    <h2>FuestaOS</h2>
    <p>A general-purpose open source operating system with high performance, high security, and high usability.</p>
  </el-card>
</el-col>
</el-row>
</template>
<script setup>
import { Back , Money , DArrowRight , Document} from '@element-plus/icons-vue'
import { useBak } from '../assets/pro'
const { bak } = useBak()
//link
import { useRouter } from 'vue-router'
const router = useRouter()
const link = (projectName) => {
    router.push(`/projects/${projectName}`); 
}
</script>