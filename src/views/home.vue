<template>
        <h1>Hello! I'm Mo Kanove</h1>
       <el-text class="mx-1">The reason I made my own software was probably because I was annoyed by other similar software.</el-text>
<p><br></p>
    <h2>Projects</h2>
    <el-row :gutter="20" class="project-section">
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
            <el-button type="primary" @click="moixa">Developmenting...</el-button>
          </template>
        </el-card>
      </el-col>
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
            <el-button type="primary"  @click="tkkhs">TEST NOW!</el-button>
            <el-button type="success" @click="tkkhsc">View source code</el-button>
          </template>
        </el-card>
      </el-col>
    </el-row>
<el-divider />
    <h2>Servers</h2>
    <el-text class="mx-1" type="danger">Your ISP may charge fees, so please be aware of data usage.</el-text>
    <p>You can use them to test your network speed with https or iperf3.</p>
    <el-row :gutter="20" class="project-section">
      <el-col :span="8" :xs="24" :sm="12">
        <el-card class="project-card"  shadow="hover">
          <template #header>
            <div class="card-header">
              <span>Osaka , Kansi , Japan(OSA)</span>
            </div>
          </template>
          <p>Domain:jp-osa.867678.xyz</p>
          <p>IPv4:166.88.100.243</p>
          <p>IPv6:[2400:8d60:8::c0b:1ea8]</p>
          <img src="https://raw.githubusercontent.com/mokanove/867678.xyz/refs/heads/servers/OSA.png"/>
          <template #footer>
            <el-button type="primary" @click="tenj">10MB</el-button>
            <el-button type="success" @click="onej">100MB</el-button>
            <el-button type="danger" @click="threej">300MB</el-button>
            <el-button type="info" @click="osam">MORE INFORMATION</el-button>
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
          <p>Domain:us-lax.867678.xyz</p>
           <p>IPv4:74.48.125.113</p>
          <p>IPv6:[2607:f130:0:0153::f239:9af0]</p>
          <img src="https://raw.githubusercontent.com/mokanove/867678.xyz/refs/heads/servers/LAX.png" />
          <template #footer>
            <el-button type="primary" @click="tenu">10MB</el-button>
            <el-button type="success" @click="oneu">100MB</el-button>
            <el-button type="danger" @click="threeu">300MB</el-button>
            <el-button type="info" @click="laxm">MORE INFORMATION</el-button>
          </template>
        </el-card>
      </el-col>
      <el-col>
        <p><br></p>
        <el-card shadow="never">
          <template #header>
            <div class="card-header">
              <span>Global , CloudflareCDN</span>
            </div>
          </template>
          <p>Bucket using Cloudflare R2(EU) and Cloudflare CDN.</p>
          <template #footer>
            <el-button type="primary" @click="ten">10MB</el-button>
            <el-button type="success" @click="one">100MB</el-button>
            <el-button type="danger" @click="three">300MB</el-button>
          </template>
        </el-card>
      </el-col>
    </el-row>
<p><br></p>
    <h2>Updates and Fixeds</h2>
    <el-timeline style="max-width: 100%">
      <el-timeline-item timestamp="2025/09/05" placement="top">
      <el-card>
        <p>Changed the layout so that clicking the download button now pops up a prompt.</p>
        <p>Fixed an issue where the More Info button was not working.</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2025/09/03" placement="top">
      <el-card>
        <p>Renovated the homepage, changed the font style, now it is more user-friendly.</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2025/08/31" placement="top">
      <el-card>
        <p>Renovation home and tkkhs.</p>
      </el-card>
    </el-timeline-item>
  </el-timeline>
    <el-card style="width: 100%" shadow="never">
    <template #header>About</template>
    <p>To clone this site , using : git clone https://github.com/mokanove/867678.xyz.git</p>
    <p>Also note that I uploaded a stripped-down version that doesn't include the module directory (otherwise Github will report that the repository is too large). You need to use npm install to install the missing parts.</p>
    <p>Copyright 2025 MoKanove All rights reserved.</p>
    </el-card>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { ElMessage, ElMessageBox } from 'element-plus'
const router = useRouter()
function Message(message, type = 'info', plain = false) {
 ElMessage({
    message: 'Downloading...',
    type: 'primary',
    plain: true,
  })
}
const moixa = () => {
  window.open('https://github.com/mokanove/moixa', '_blank')
}
const tkkhs = () => {
  router.push('/tkkhs')
}
const tkkhsc = () => {
  window.open('https://github.com/mokanove/867678.xyz/blob/main/src/views/tkkhs.vue', '_blank')
}
//servers
//osa
const tenj = () => {
  window.location.href = 'https://jp-osa.867678.xyz:81/10.bin';
  Message()
}
const onej = () => {
  window.location.href = 'https://jp-osa.867678.xyz:81/100.bin';
  Message()
}
const threej = () => {
  window.location.href = 'https://jp-osa.867678.xyz:81/300.bin';
 Message()
}
const osam = () => {
  window.open('https://github.com/mokanove/867678.xyz/tree/servers?tab=readme-ov-file#osaka--japan-', '_blank')
}
//lax
const tenu = () => {
  window.location.href = 'https://us-lax.867678.xyz:81/10.bin';
 Message()
}
const oneu = () => {
  window.location.href = 'https://us-lax.867678.xyz:81/100.bin';
 Message()
}
const threeu = () => {
  window.location.href = 'https://us-lax.867678.xyz:81/300.bin';
 Message()
}
const laxm = () => {
  window.open('https://github.com/mokanove/867678.xyz/tree/servers?tab=readme-ov-file#los-angeles--california--usa-', '_blank')
}
//cf
const ten = () => {
  window.location.href = 'https://s.867678.xyz/10.bin';
 Message()
}
const one = () => {
  window.location.href = 'https://s.867678.xyz/100.bin';
 Message()
}
const three = () => {
  window.location.href = 'https://s.867678.xyz/300.bin';
 Message()
}
const cfm = () => {
  window.open('https://github.com/mokanove/867678.xyz/tree/servers?tab=readme-ov-file#cloudflare-free-services', '_blank')
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
  transform: translateY(-15px);
}
.card-header {
   font-size: 18px;
   font-weight: bolder;
}
</style>
