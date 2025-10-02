<template>
    <el-breadcrumb :separator-icon="DArrowRight" >
    <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
    <el-breadcrumb-item>Projects</el-breadcrumb-item>
  </el-breadcrumb>
  <h1>Projects</h1>
  <el-card shadow="hover">
    <template #header><div class="card-header"><span>SpeedTest</span></div></template>
    <p>A peer to peer SpeedTest tool , Support iperf3 & https.</p>
    <template #footer><el-button type="primary" @click="speedtest">Go to test</el-button></template>
  </el-card>
  <br />
  <el-card shadow="hover">
    <template #header><div class="card-header"><span>TKKHS</span></div></template>
    <p>A monologue listener.</p>
    <template #footer><el-button type="primary" @click="tkkhs">Go to test</el-button></template>
  </el-card>
  <br />
  <el-card shadow="hover">
    <template #header><div class="card-header"><span>FuestaOS</span></div></template>
    <p>A general-purpose open source operating system with high performance, high security, and high usability.</p>
    <template #footer><el-button @click="fos">Developmenting...</el-button></template>
  </el-card>
  <br />
 <el-card shadow="hover">
    <template #header><div class="card-header"><span>Ghit</span></div></template>
    <p>A convenient open source and easy-to-use version controller.</p>
    <template #footer><el-button @click="ghit">Developmenting...</el-button></template>
  </el-card>
   <br />
   <el-card shadow="hover">
    <template #header><div class="card-header"><span>moixa</span></div></template>
    <p>High security and high speed network proxy tool.</p>
    <template #footer><el-button @click="moixa">Developmenting...</el-button></template>
  </el-card>
   <br />
  <el-card shadow="hover">
   <el-button type="info" @click="bak" :icon="Back">Back to homepage</el-button><el-divider direction="vertical" />
   <el-button type="success" @click="donate" :icon="Money">Donate</el-button>
  </el-card>
 <p>The reason I made my own software was probably because I was annoyed by other similar software.</p>
</template>
<script setup>
import { Back , Money , DArrowRight , Document} from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import { useBak } from '../assets/pro'
const { bak } = useBak()
import { donate } from '../assets/donate'
//link
const router = useRouter()
const fos = () => {
  window.open('https://github.com/mokanove/FuestaOS', '_blank')
}
const moixa = () => {
  window.open('https://github.com/mokanove/moixa', '_blank')
}
const ghit = () => {
  window.open('https://github.com/mokanove/ghit', '_blank')
}
const speedtest = () => {
  router.push('/projects/speedtest')
}
const tkkhs = () => {
  router.push('/projects/tkkhs')
}
</script>