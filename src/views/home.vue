<template>
        <h1>Website | Mo Kanove</h1>
<p></p>
   <el-card shadow="hover">
    <template #header><div class="card-header"><span>Projects</span></div></template>
     <el-card>
    <template #header><div class="card-header"><span>Random name.</span></div></template>
    <p>A casual explanation.</p>
   </el-card>
    <template #footer><el-button type="primary"  @click="projects">View all project</el-button></template>
    </el-card>
     <br />
    <el-card shadow="hover">
    <template #header><div class="card-header"><span>Updates & Fixeds</span></div></template>
    <el-timeline>
       <el-timeline-item timestamp="2025/09/06" placement="top">
       <el-card>
        <p>Fixed & Updates.</p>
      </el-card>
      </el-timeline-item>
    </el-timeline>
    <template #footer><el-button type="primary"  @click="updates">Update & Fixeds</el-button></template>
  </el-card>
    <br />
    <el-card shadow="hover">
    <template #header><div class="card-header"><span>About</span></div></template>
    <p>Copyright 2025 MoKanove All rights reserved<el-divider direction="vertical" />E-mail:<el-link href="mailto:me@867678.xyz" type="primary" target="_blank">me@867678.xyz</el-link><el-divider direction="vertical" /> Version : 3.2.0</p>
    <p>Clone this page & build :<el-link href="https://github.com/mokanove/867678.xyz?tab=readme-ov-file#867678xyz" type="primary" target="_blank">https://github.com/mokanove/867678.xyz?tab=readme-ov-file#867678xyz</el-link></p>
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
