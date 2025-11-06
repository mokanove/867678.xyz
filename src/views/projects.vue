<template>
<el-breadcrumb :separator-icon="DArrowRight" >
<el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
<el-breadcrumb-item>Projects</el-breadcrumb-item>
</el-breadcrumb>
  <h1>Projects</h1>
  <p>The reason I made my own software was probably because I was annoyed by other similar software.</p>
<el-card shadow="hover" @click="link('speedtest')">
    <h2>Speedtest by Mo</h2>
    <p>Quickly test your internet speed using high-speed servers located around the world.</p>
  </el-card>
  <br />
  <el-card shadow="hover" @click="link('tkkhs')">
    <h2>TKKHS</h2>
    <p>A good thing to vent your emotions, Ai function will be introduced in the future.</p>
  </el-card>
  <br />
 <el-card shadow="hover" @click="link('ghit')">
    <h2>Ghit</h2>
    <p>A convenient open source and easy-to-use version controller.</p>
  </el-card>
   <br />
   <el-card shadow="hover" @click="link('moixa')">
    <h2>moixa</h2>
    <p>High security and high speed network proxy tool.</p>
  </el-card>
   <br />
   <el-card shadow="hover" @click="link('FuestaOS')">
    <h2>FuestaOS</h2>
    <p>A general-purpose open source operating system with high performance, high security, and high usability.</p>
  </el-card>
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