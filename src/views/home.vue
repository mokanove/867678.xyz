<template>
   <div class="hero-container">
    <div class="content-box">
      <h1 class="title">Welcome, I'm <span class="accent">Mo Kanove</span></h1>
      <div class="button-group">
        <el-button type="info" class="md-btn" plain @click="Github"><el-icon><Link /></el-icon>Github</el-button>
        <el-button type="primary" class="md-btn" plain @click="EMail"><el-icon><ChatLineSquare /></el-icon>E-Mail</el-button>
        <el-button type="success" class="md-btn"plain @click="donate"><el-icon><Money /></el-icon>Donate</el-button>
      </div>
    </div>
  </div>
<el-row :gutter="10">
    <el-col :xs="24" :sm="12" :md="12" :lg="12">
    <el-card shadow="hover" @click="link('moitools')" class="clickable-card">
    <h2>Moitools</h2>
    <p>It can perform download and upload speed tests, DNS and WebRTC leak detection, etc. on the web page.</p>
    </el-card>
    </el-col>
    <el-col :xs="24" :sm="12" :md="12" :lg="12">
    <el-card shadow="hover" @click="link('tkkhs')" class="clickable-card">
    <h2>TKKHS</h2>
    <p>A tool for venting emotions.</p>
    </el-card>
    </el-col>
    <el-col :xs="24" :sm="12" :md="12" :lg="12">
    <el-card shadow="hover" @click="link('')" class="clickable-card">
    <h2>Projects</h2>
    <p>More bigger, more interesting, more fun and more promising projects to be developed.</p>
    </el-card>
    </el-col>
    <el-col :xs="24" :sm="12" :md="12" :lg="12">
    <el-card shadow="hover" @click="updates" class="clickable-card">
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
<el-card shadow="never" class="footer-card">
  <el-text>© 2026 MoKanove</el-text>
  <el-divider direction="vertical" />
  <el-text>Version: {{ websiteVersion }}</el-text>
  <el-divider direction="vertical" />
  <el-text>Built time: 2026-01-17</el-text>
  <br /> <el-link href="https://github.com/mokanove/867678.xyz" target="_blank">Source Code</el-link>
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
<style scoped>
.hero-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 35vh;
  padding: 15px;
}
.content-box {
  max-width: 900px;
  text-align: center;
}
.title {
  font-size: clamp(2.2rem, 6vw, 4rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.04em;
  margin-bottom: 12px;
}
.accent {
  color: var(--el-color-primary);
}
.button-group {
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-top: 24px;
}
.md-btn {
border-radius: 20px !important;
padding: 12px 24px !important;
height: auto !important;
}
.md-btn:hover {
  transform: scale(1.08);
}
.el-row {
  margin: -20px -6px 0 -6px !important;
  gap: 12px 0;
  padding-bottom: 15px !important;
}
.el-col {
  padding: 0 6px !important;
  margin-bottom: 0px;
}
.el-card {
  border: 2px solid #f0f0f0 !important;
  border-radius: 28px !important;
  transition: all 0.25s ease;
  box-shadow: none !important;
  cursor: default;
}
:deep(.el-card__header) {
  border: none !important;
  padding: 25px 25px 0 25px !important;
}
:deep(.el-card__body) {
  padding: 12px 25px 25px 25px !important;
}
.el-card h2 {
  font-size: 1.5rem;
  font-weight: 800;
  margin: 0 0 6px 0;
  letter-spacing: -0.03em;
  line-height: 1.1;
  display: flex;
  align-items: center;
}
.el-card p {
  font-size: 0.95rem;
  line-height: 1.35;
  color: #444;
  margin: 0;
}
.clickable-card {
  cursor: pointer !important;
}
.clickable-card h2::after {
  content: '→';
  margin-left: 8px;
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.2s ease;
  color: var(--el-color-primary);
}
.clickable-card:hover {
  border-color: var(--el-color-primary) !important;
  background: var(--el-color-primary-light-9) !important;
  transform: translateY(-4px);
}
.clickable-card:hover h2::after {
  opacity: 1;
  transform: translateX(0);
}
.footer-card {
  border: none !important;
  background: transparent !important;
  text-align: center;
  padding: 20px 0 40px 0 !important;
}
.footer-card :deep(.el-card__body) {
  padding: 0 !important;
}
.footer-card .el-text, 
.footer-card .el-link {
  letter-spacing: 0;
}
.footer-card .el-link:hover {
  color: var(--el-color-primary) !important;
}
.footer-card .el-divider--vertical {
  border-color: #ddd !important;
  margin: 0 12px;
}
</style>