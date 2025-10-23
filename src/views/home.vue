<template>
        <h1>Welcome to my aera , I'm Mo Kanove</h1>
        <el-text class="mx-1" type="success" >NVIDIA </el-text>has been one of the <el-text class="mx-1" type="danger">single worst company </el-text>we've ever dealt with.<br />
        <el-text class="mx-1" type="danger">So NVIDIA , Fuck you!</el-text><el-text class="mx-1" type="info"> --Linus Torvalds</el-text>
<p></p>
   <el-button type="info" plain @click="Github"><el-icon><Link /></el-icon>Github</el-button>
   <el-button type="primary" plain @click="EMail"><el-icon><ChatLineSquare /></el-icon>E-Mail</el-button>
   <el-button type="success" plain @click="donate"><el-icon><Money /></el-icon>Donate</el-button>
<p></p>
<el-row :gutter="10">
    <el-col :xs="24" :sm="12" :md="12" :lg="12">
        <el-card shadow="hover" @click="link('speedtest')">
            <h2>Speedtest by MoKanove</h2>
            <p>Quickly test your internet speed using high-speed servers located around the world.</p>
            <img src="https://skillicons.dev/icons?i=nginx,linux,ubuntu,vite,workers"/>
        </el-card>
    </el-col>
    <el-col :xs="24" :sm="12" :md="12" :lg="12">
        <el-card shadow="hover" @click="link('tkkhs')">
            <h2>TKKHS</h2>
            <p>A good thing to vent your emotions, Ai function will be introduced in the future.</p>
            <img src="https://skillicons.dev/icons?i=vite,html,css"/>
        </el-card>
    </el-col>
</el-row>
  <br />
   <el-card shadow="hover" @click="link('#')">
    <h2>More Projects</h2>
    <p>More interesting , bigger , and developmenting .</p>
    </el-card>
     <br />
    <el-card shadow="hover" @click="updates">
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
  </el-card>
    <br />
    <el-card shadow="never">
    <p>Website Version : 3.2.7 10/23/2025<el-divider direction="vertical" />Build time : UTC+0800 2025-10-23<el-divider direction="vertical" />© 2025 MoKanove</p>
    </el-card>
</template>
<script setup>
import {  Link , ChatLineSquare , Money  } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import { donate } from '../assets/donate'
//link
const Github = () => {window.open('https://github.com/mokanove', '_blank')}
const EMail = () => {window.open('mailto:me@867678.xyz', '_blank')}
const router = useRouter()
const link = (projectName) => {
    router.push(`/projects/${projectName}`); 
}
const updates = () => {
    router.push(`/updates`); 
}
</script>