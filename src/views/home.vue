<template>
   <div class="hero-container">
    <div class="content-box">
      <h1 class="title">Welcome, I'm <span class="accent">Mo Kanove</span></h1>
      <div class="button-group">
        <el-button type="info" class="su-btn" plain @click="Github"><el-icon><Link /></el-icon>Github</el-button>
        <el-button type="primary" class="su-btn" plain @click="EMail"><el-icon><ChatLineSquare /></el-icon>E-Mail</el-button>
        <el-button type="success" class="su-btn"plain @click="donate"><el-icon><Money /></el-icon>Donate</el-button>
      </div>
    </div>
  </div>
<el-row :gutter="10">
    <el-col :xs="24" :sm="12" :md="12" :lg="12">
    <el-card su-btn @click="link('moitools')" class="clickable-card">
    <h2>Moitools</h2>
    <p>It can perform download and upload speed tests, DNS and WebRTC leak detection.</p>
    </el-card>
    </el-col>
    <el-col :xs="24" :sm="12" :md="12" :lg="12">
    <el-card su-btn @click="link('tkkhs')" class="clickable-card">
    <h2>TKKHS</h2>
    <p>A tool for venting emotions.</p>
    </el-card>
    </el-col>
    <el-col :xs="24" :sm="12" :md="12" :lg="12">
    <el-card su-btn @click="link('')" class="clickable-card">
    <h2>Projects</h2>
    <p>More bigger, more interesting, more fun and more promising projects to be developed.</p>
    </el-card>
    </el-col>
    <el-col :xs="24" :sm="12" :md="12" :lg="12">
    <el-card su-btn @click="updates" class="clickable-card">
    <h2>Updates & Fixeds</h2>
    <p>This is the website's update and fix log.</p>
  </el-card>
  </el-col>
</el-row><p></p>
  <el-row :gutter="10">
  <el-col :span="24">
    <el-card>
      <template #header><span style="font-weight: 800;font-size: 20px;">My Skills</span></template>
        <img src="https://skillicons.dev/icons?i=html,css,javascript,cpp,golang,php,docker,nginx,mysql,github,cloudflare,workers,git,unity,vim,gmail,npm,linux,ubuntu,debian,arch,windows&perline=23"/>
    </el-card>
  </el-col>
</el-row>
<el-card class="footer-card">
  <el-text>© 2026 MoKanove</el-text>
  <el-divider direction="vertical" />
  <el-text>Version: {{ websiteVersion }}</el-text>
  <el-divider direction="vertical" />
  <el-text>Built time: 2026-04-02</el-text>
  <el-divider direction="vertical" />
  <el-link href="https://github.com/mokanove/867678.xyz" target="_blank">Source Code</el-link>
  <el-divider direction="vertical" />
  <el-text>Full IPv6 is Ready</el-text>
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
const Github = () => {
  window.open('https://github.com/mokanove', '_blank')
}
const EMail = () => {
  ElMessageBox.alert('me@867678.xyz ', 'E-Mali', {
    confirmButtonText: 'OK',
  })
}
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