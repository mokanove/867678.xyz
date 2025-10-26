<template>
        <h1>Welcome to my website , I'm Mo Kanove</h1>
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
            <img src="https://skillicons.dev/icons?i=nginx,linux,ubuntu,vite,workers" height="30px"/>
        </el-card>
    </el-col>
    <el-col :xs="24" :sm="12" :md="12" :lg="12">
        <el-card shadow="hover" @click="link('tkkhs')">
            <h2>TKKHS</h2>
            <p>A good thing to vent your emotions, Ai function will be introduced in the future.</p>
            <img src="https://skillicons.dev/icons?i=vite,html,css" height="30px"/>
        </el-card>
    </el-col>
</el-row>
  <br />
<el-row :gutter="10">
    <el-col :xs="24" :sm="12" :md="12" :lg="12">
    <el-card shadow="hover" @click="link('#')">
    <h2>More Projects</h2>
    <p>More bigger, more interesting, more fun and more promising projects to be developed.</p>
    </el-card>
    </el-col>
    <el-col :xs="24" :sm="12" :md="12" :lg="12">
    <el-card shadow="hover" @click="updates">
    <h2>Updates & Fixeds</h2>
    <p>Click this card to view all of our website and web project changelogs.</p>
  </el-card>
  </el-col>
</el-row><p></p>
  <el-card shadow="hover">
    <template #header><div class="card-header"><span>My skills</span></div></template>
    <img src="https://skillicons.dev/icons?i=html,css,javascript,cpp,golang,php,docker,nginx,mysql,github,cloudflare,workers,git,unity,vim,gmail,npm,linux,ubuntu,debian,arch,windows"/>
  </el-card><br />
    <el-card shadow="never">
    <img src="https://skillicons.dev/icons?i=html,css,javascript,vite,typescript,workers" height="25px"/><el-divider direction="vertical" /><el-link href="https://github.com/mokanove/867678.xyz" target="_black">Open Source Files of this site</el-link>
    <p>Website Version : 3.2.9<el-divider direction="vertical" />Built time : 2025-10-26<el-divider direction="vertical" />© 2025 MoKanove</p>
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