<template>
        <h1>Mo Kanove</h1>
<p></p>
   <el-card shadow="hover">
    <template #header><div class="card-header"><span>SpeedTest</span></div></template>
    <el-select v-model="value" disabled placeholder="Select a server to speedtest"></el-select><p></p>
          <el-button type="success" plain disabled>10MiB</el-button><el-divider direction="vertical" />
          <el-button type="primary" plain disabled>100MiB</el-button><el-divider direction="vertical" />
          <el-button type="danger" plain disabled>300MiB</el-button>
    <template #footer><el-button type="primary" @click="speedtest">Take me to</el-button></template>
  </el-card>
  <br />
  <el-card shadow="hover">
    <template #header><div class="card-header"><span>TKKHS</span></div></template>
    <el-input v-model="input" disabled placeholder="Please input"/>
    <template #footer><el-button type="primary" @click="tkkhs">Take me to</el-button></template>
  </el-card>
  <br />
   <el-card shadow="never">
    <template #header><div class="card-header"><span>More Projects</span></div></template>
    <p>More interesting , bigger , and developmenting .</p>
    <template #footer><el-button type="primary"  @click="projects">View all</el-button></template>
    </el-card>
     <br />
    <el-card shadow="never">
    <template #header><div class="card-header"><span>Updates & Fixeds</span></div></template>
    <el-timeline>
      <el-timeline-item timestamp="2025/10/07 3.2.2 to 3.2.3" placement="top">
      <el-card>
        <p>Move the first few updated pages to the homepage.</p>
        <h3>View old page:</h3>
        <el-link href="https://867678.xyz/" target="_blank">3.2.2 to 3.2.3</el-link>
      </el-card>
      </el-timeline-item>
    </el-timeline>
    <template #footer><el-button type="primary"  @click="updates">All</el-button></template>
  </el-card>
    <br />
    <el-card shadow="never">
    <p>Copyright 2025 MoKanove All rights reserved<el-divider direction="vertical" />E-mail:<el-link href="mailto:me@867678.xyz" type="primary" target="_blank">me@867678.xyz</el-link><el-divider direction="vertical" /> Version : 3.2.4 10/14/2025</p>
    <p>Clone this page & build :<el-link href="https://github.com/mokanove/867678.xyz?tab=readme-ov-file#867678xyz" type="primary" target="_blank">https://github.com/mokanove/867678.xyz?tab=readme-ov-file#867678xyz</el-link></p>
  KRA:
  <el-link href="https://r2.867678.xyz/source/fac.kra" target="_blank">basic logo</el-link><el-divider direction="vertical" />
  <el-link href="https://r2.867678.xyz/source/fac5.kra" target="_blank">big logo</el-link>
    </el-card>
</template>
<script setup>
import { useRouter } from 'vue-router'
//link
const router = useRouter()
const updates = () => {
  router.push('/updates')
}
const projects = () => {
  router.push('/projects')
}
const speedtest = () => {
  router.push('/projects/speedtest')
}
const tkkhs = () => {
  router.push('/projects/tkkhs')
}
</script>
