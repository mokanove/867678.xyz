<template>
        <h1>Hello! I'm Mo Kanove</h1>
        <p>The reason I made my own software was probably because I was annoyed by other similar software.</p>
    <el-card style="width: 100%" shadow="never">
    <p style="color:red">A large number of projects have been renamed, so please be careful when using them.</p>
    <p style="color:red">The server page has been cancelled. Now it is just a redirect of this page. If you need to test the speed, please click the button of below the server card.</p>
    <p>Removed: tkkhs, backmain</p>
    <p>Archived: ezgo, mosiuter</p>
    <p>Changed: mosiuter changed to moixa, ezgo now end of life (EOL)</p>
  </el-card>
<el-divider />
    <h2>Projects</h2>
    <el-row :gutter="20" class="project-section">
      <el-col :span="8" :xs="24" :sm="12">
        <el-card class="project-card" shadow="hover">
          <template #header>
            <div class="card-header">
              <span>tkkhs</span>
            </div>
          </template>
      <center>
            <h1>TKKHS project.</h1>
      </center>
            <p>Say what you want, it won't record it.</p>
<el-input
    v-model="input"
    style="width: 100%"
    disabled
    placeholder="Please input"
  />
          <template #footer>
            <el-button @click="tkkhs">TEST NOW!</el-button>
          </template>
        </el-card>
      </el-col>
      <el-col :span="8" :xs="24" :sm="12">
        <el-card class="project-card" shadow="hover">
          <template #header>
            <div class="card-header">
              <span>moixa</span>
            </div>
          </template>
          <h2>A convenient and easy-to-use proxy tool.</h2>
          <p>It's multi-platform and easy to use. Its configuration files use the conveniently readable toml format. It also features perhaps the smartest DNS settings you've ever seen, saying goodbye to fakeIP bugs, DNS leaks, and other bugs caused by realIP.</p>
          <template #footer>
            <el-button @click="moixa">Developmenting...</el-button>
          </template>
        </el-card>
      </el-col>
    </el-row>
    <el-divider />
    <h2>Servers</h2>
    <p>You can use them to test your network speed with https or iperf3.</p>
    <el-row :gutter="20" class="project-section">
      <el-col :span="8" :xs="24" :sm="12">
        <el-card class="project-card" shadow="hover">
          <template #header>
            <div class="card-header">
              <span>Osaka , Japan(OSA)</span>
            </div>
          </template>
          <p>Domain auto select IP version:jp-osa.867678.xyz</p>
          <p>Speedtest (by speedtest ookla):</p>
          <p>IPv4:</p>
          <p>166.88.100.243</p>
          <p>IPv6:</p>
          <p>[2400:8d60:8::c0b:1ea8]</p>
          <img src="https://raw.githubusercontent.com/mokanove/867678.xyz/refs/heads/servers/OSA.png" width="90%"/>
          <template #footer>
            <el-button type="primary" plain @click="tenj">10MB</el-button>
            <el-button type="success" plain @click="onej">100MB</el-button>
            <el-button type="danger" plain @click="threej">300MB</el-button>
            <el-button @click="osam">MORE INFORMATION</el-button>
          </template>
        </el-card>
      </el-col>
      <el-col :span="8" :xs="24" :sm="12">
        <el-card class="project-card" shadow="hover">
          <template #header>
            <div class="card-header">
              <span>Los Angeles , California , US(LAX)</span>
            </div>
          </template>
          <p>Domain auto select IP version:us-lax.867678.xyz</p>
          <p>Speedtest (by speedtest ookla):</p>
           <p>IPv4:</p>
          <p>74.48.125.113</p>
          <p>IPv6:</p>
          <p>[2607:f130:0:0153::ae12:43b5]</p>
          <p>[2607:f130:0:0153::d7fa:9ca5]</p>
          <p>[2607:f130:0:0153::f239:9af0]</p>
          <img src="https://raw.githubusercontent.com/mokanove/867678.xyz/refs/heads/servers/LAX.png" width="90%"/>
          <template #footer>
            <el-button type="primary" plain @click="tenu">10MB</el-button>
            <el-button type="success" plain @click="oneu">100MB</el-button>
            <el-button type="danger" plain @click="threeu">300MB</el-button>
            <el-button @click="laxm">MORE INFORMATION</el-button>
          </template>
        </el-card>
      </el-col>
      <el-col>
        <el-card class="project-card" shadow="never">
          <template #header>
            <div class="card-header">
              <span>Global , CloudflareCDN</span>
            </div>
          </template>
          <p>Domain:https://867678.xyz/speed</p>
          <p>Bucket using Cloudflare R2(EU) and Cloudflare CDN.</p>
          <template #footer>
            <el-button type="primary" plain @click="ten">10MB</el-button>
            <el-button type="success" plain @click="one">100MB</el-button>
            <el-button type="danger" plain @click="three">300MB</el-button>
            <el-button @click="cfm">MORE INFORMATION</el-button>
          </template>
        </el-card>
      </el-col>
    </el-row>
<br>
    <el-card style="width: 100%" shadow="never">
    <template #header>About</template>
    <p>Copyright 2025 MoKanove All rights reserved.</p>
    </el-card>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const cfsp = () => {
  window.open('https://github.com/mokanove/servers', '_blank')
}
const tenj = () => {
  window.location.href = 'https://jp-osa.867678.xyz:81/10.bin';
   ElMessage({
    message: 'Downloading...',
    type: 'primary',
    plain: true,
  })
}
const onej = () => {
  window.location.href = 'https://jp-osa.867678.xyz:81/100.bin';
  ElMessage({
    message: 'Downloading...',
    type: 'primary',
    plain: true,
  })
}
const threej = () => {
  window.location.href = 'https://jp-osa.867678.xyz:81/300.bin';
  ElMessage({
    message: 'Downloading...',
    type: 'primary',
    plain: true,
  })
}
const osam = () => {
  window.open('https://github.com/mokanove/servers/tree/main?tab=readme-ov-file#osaka--japan-', '_blank')
}
const tenu = () => {
  window.location.href = 'https://us-lax.867678.xyz:81/10.bin';
   ElMessage({
    message: 'Downloading...',
    type: 'primary',
    plain: true,
  })
}
const oneu = () => {
  window.location.href = 'https://us-lax.867678.xyz:81/100.bin';
  ElMessage({
    message: 'Downloading...',
    type: 'primary',
    plain: true,
  })
}
const threeu = () => {
  window.location.href = 'https://us-lax.867678.xyz:81/300.bin';
  ElMessage({
    message: 'Downloading...',
    type: 'primary',
    plain: true,
  })
}
const laxm = () => {
  window.open('https://github.com/mokanove/servers/tree/main?tab=readme-ov-file#los-angeles--california--usa-', '_blank')
}
const ten = () => {
  window.location.href = 'https://s.867678.xyz/10.bin';
   ElMessage({
    message: 'Downloading...',
    type: 'primary',
    plain: true,
  })
}
const one = () => {
  window.location.href = 'https://s.867678.xyz/100.bin';
  ElMessage({
    message: 'Downloading...',
    type: 'primary',
    plain: true,
  })
}
const three = () => {
  window.location.href = 'https://s.867678.xyz/300.bin';
  ElMessage({
    message: 'Downloading...',
    type: 'primary',
    plain: true,
  })
}
const cfm = () => {
  window.open('https://github.com/mokanove/867678.xyz/tree/servers?tab=readme-ov-file#cloudflare-free-services', '_blank')
}
const tkkhs = () => {
  router.push('/tkkhs')
}
const moixa = () => {
  window.open('https://github.com/mokanove/moixa', '_blank')
}
</script>

<style>
.container {
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto;
}
.welcome-section {
  margin-bottom: 40px;
}
.welcome-card {
  text-align: center;
}
.project-section {
  margin-bottom: 40px;
}
.project-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s;
}
.project-card:hover {
  transform: translateY(-5px);
}
.project-img {
  max-width: 100%;
  height: auto;
  margin-top: 10px;
}
.card-header {
  font-weight: bold;
}
</style>
