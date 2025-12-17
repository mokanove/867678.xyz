<template>
        <h1>Welcome to my website , I'm Mo Kanove</h1>
        <p>Maybe is a developer , coder </p>
<p></p>
   <el-button type="info" plain @click="Github"><el-icon><Link /></el-icon>Github</el-button>
   <el-button type="primary" plain @click="EMail"><el-icon><ChatLineSquare /></el-icon>E-Mail</el-button>
   <el-button type="success" plain @click="donate"><el-icon><Money /></el-icon>Donate</el-button>
<p></p>
<el-row :gutter="10">
    <el-col :xs="24" :sm="12" :md="12" :lg="12">
    <el-card shadow="hover" @click="link('speedtest')">
    <h2>Speedtest by Mo</h2>
    <p>Quickly test your internet speed.</p>
    </el-card>
    </el-col>
    <el-col :xs="24" :sm="12" :md="12" :lg="12">
    <el-card shadow="hover" @click="link('tkkhs')">
    <h2>TKKHS</h2>
    <p>A thing to vent your emotions, Ai function will be introduced in the future.</p>
    </el-card>
    </el-col>
    <el-col :xs="24" :sm="12" :md="12" :lg="12">
    <el-card shadow="hover" @click="link('')">
    <h2>Projects</h2>
    <p>More bigger, more interesting, more fun and more promising projects to be developed.</p>
    </el-card>
    </el-col>
    <el-col :xs="24" :sm="12" :md="12" :lg="12">
    <el-card shadow="hover" @click="updates">
    <h2>Updates & Fixeds</h2>
    <p>This is the website's update and fix log.</p>
  </el-card>
  </el-col>
</el-row><p></p>
  <el-card shadow="hover">
    <template #header><span style="font-size: 20px;">skills</span></template>
    <p align="center"><img src="https://skillicons.dev/icons?i=html,css,javascript,cpp,golang,php,docker,nginx,mysql,github,cloudflare,workers,git,unity,vim,gmail,npm,linux,ubuntu,debian,arch,windows&perline=23"/></p>
  </el-card><br />
    <el-card shadow="never">
    <el-text>© 2025 MoKanove<el-divider direction="vertical" />Website Version : 3.3.5<el-divider direction="vertical" />Built time : 2025-12-17</el-text>
    <el-divider direction="vertical" /><el-link href="https://github.com/mokanove/867678.xyz" target="_black">Open Source Files of this site</el-link>
    <el-divider direction="vertical" /><el-text>100% Support IPV6</el-text>
    </el-card>
</template>
<script setup>
import {  Link , ChatLineSquare , Money  } from '@element-plus/icons-vue'
import { donate } from '../assets/donate'
//link
const Github = () => {window.open('https://github.com/mokanove', '_blank')}
const EMail = () => {window.open('mailto:me@867678.xyz', '_blank')}
import { useRouter } from 'vue-router'
const router = useRouter()
const link = (projectName) => {
    router.push(`/projects/${projectName}`); 
}
const updates = () => {
    router.push(`/updates`); 
}
</script>