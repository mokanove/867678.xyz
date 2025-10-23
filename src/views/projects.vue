<template>
    <el-breadcrumb :separator-icon="DArrowRight" >
    <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
    <el-breadcrumb-item>Projects</el-breadcrumb-item>
  </el-breadcrumb>
  <h1>Projects</h1>
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
  <p>The reason I made my own software was probably because I was annoyed by other similar software.</p>
  </el-card>
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
</script>