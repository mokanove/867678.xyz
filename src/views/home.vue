<template>
        <h1>Website | Mo Kanove</h1>
<p></p>
    <el-card shadow="hover">
    <template #header><div class="card-header"><span>Updates & Fixeds</span></div></template>
    <el-timeline>
       <el-timeline-item timestamp="2025/09/06" placement="top">
       <el-card>
        <p>Fixed & Updates.</p>
      </el-card>
      </el-timeline-item>
    </el-timeline>
    <template #footer><el-button type="primary"  @click="updates">All the Update & Fixeds</el-button></template>
    </el-card>
    <br />
    <el-card shadow="hover">
    <template #header><div class="card-header"><span>Projects</span></div></template>
     <el-card>
    <template #header><div class="card-header"><span>Random name.</span></div></template>
    <p>A casual explanation.</p>
    <template #footer><el-button>Developmenting...</el-button></template>
   </el-card>
    <template #footer><el-button type="primary"  @click="projects">All my projects</el-button></template>
    </el-card>
    <br />
    <el-card shadow="hover">
    <template #header><div class="card-header"><span>About</span></div></template>
    <p>Copyright 2025 MoKanove All rights reserved<el-divider direction="vertical" />E-mail:me@867678.xyz<el-divider direction="vertical" /> Version : 3.1.4</p>
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
</script>

