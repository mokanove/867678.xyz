<template>
        <h1>Welcome to my website , I'm Mo Kanove</h1>
        <p>A slowly developer , coder </p>
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
    <template #header><span style="font-size: 20px;">My skills</span></template>
    <p align="center"><img src="https://skillicons.dev/icons?i=html,css,javascript,cpp,golang,php,docker,nginx,mysql,github,cloudflare,workers,git,unity,vim,gmail,npm,linux,ubuntu,debian,arch,windows&perline=23"/></p>
  </el-card><br />
  <el-card shadow="hover">
    <template #header><span style="font-size: 20px;">Tips</span></template>
    <p>Did you know that the domain name of the website you are visiting is an experiment?Don't panic, he can actually solve many of your network problems.</p>
    <p>First of all, don't assume that accessing 867678.xyz or www.867678.xyz directly is all the functionality of this website.</p>
    <p>In fact, if you use dig or nslookup to resolve (random).867678.xyz, you'll find that this is still a good way to bypass the ISP's DNS cache and get the real speed of accessing my website.</p>
    <p>You'll find that even if you configure a very fast DNS, it will still be slow after you bypass it.</p>
  </el-card><br />
    <el-card shadow="never">
    <el-text>© 2026 MoKanove<el-divider direction="vertical" />Website Version : {{ websiteVersion }}<el-divider direction="vertical" />Built time : 2026-01-03</el-text>
    <el-divider direction="vertical" /><el-link href="https://github.com/mokanove/867678.xyz" target="_black">Open Source Files of this site</el-link>
    <el-divider direction="vertical" /><el-text>Full support IPV6</el-text>
    </el-card>
</template>
<script setup>
import {  Link , ChatLineSquare , Money  } from '@element-plus/icons-vue'
import { ElMessageBox } from 'element-plus'
const donate = () => {
  ElMessageBox.alert('USDT Tron:TBrZFA4NstpHTzQ5XNh6ocvidSin9C1Yc1 ', 'Donate', {
    confirmButtonText: 'I got it',
  })
}
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
const websiteVersion = __APP_VERSION__;
</script>