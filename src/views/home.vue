<template>
        <h1>Hello! I'm Mo Kanove</h1>
       <el-text class="mx-1">The reason I made my own software was probably because I was annoyed by other similar software.</el-text>
<p></p>
    <el-card style="width: 100%" shadow="hover">
    <template #header>Updates & Fixeds</template>
    <el-timeline style="max-width: 100%">
       <el-timeline-item timestamp="2025/09/06" placement="top">
      <el-card>
        <p>tkkhs has been revised again and added a dark mode, as well as a return function to the old version of the web page.</p>
        <p>The cloud-side changes are automatic compilation by Cloudflare Pages instead of the previous local manual compilation, which allows new features to be synchronized faster.</p>
        <p>The warehouse structure has been re-optimized and now uses the latest vite and element-plus.</p>
        <p>Now, server speed test images will no longer be hosted by Github (which would increase loading time) but will be hosted by Cloudflare instead.</p>
      </el-card>
      </el-timeline-item>
    </el-timeline>
    <el-button type="primary"  @click="updates">More</el-button>
    </el-card>
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
            <el-button @click="moixa">Developmenting...</el-button>
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
            <h2>tkkhs project.</h2>
            <p>Say what you want, it won't record it.</p>
            <el-input v-model="input" style="width: 100%" disabled placeholder="Please input"  />
          <template #footer>
            <el-button type="primary"  @click="tkkhs">TEST NOW!</el-button>
          </template>
        </el-card>
      </el-col>
      <el-col :span="8" :xs="24" :sm="12">
        <el-card class="project-card" shadow="hover">
          <template #header>
            <div class="card-header">
              <span>FuestaOS</span>
            </div>
          </template>
          <h2>An operating system</h2>
          <template #footer>
            <el-button @click="fos">Developmenting...</el-button>
          </template>
        </el-card>
      </el-col>
      <el-col :span="8" :xs="24" :sm="12">
        <el-card class="project-card" shadow="hover">
          <template #header>
            <div class="card-header">
              <span>ghit</span>
            </div>
          </template>
          <h2>A version controller, similar to Git, but better.</h2>
          <template #footer>
            <el-button @click="ghit">Developmenting...</el-button>
          </template>
        </el-card>
      </el-col>
    </el-row>
<p></p>
    <h2>SpeedTest</h2>
    <el-text class="mx-1" type="danger">Your ISP may charge fees, so please be aware of data usage.</el-text>
    <p>You can use them to test your network speed with https or iperf3.However, I do not guarantee 100% availability, and the test data is for reference only.</p>
    <el-row :gutter="20" class="project-section">
      <el-col :span="8" :xs="24" :sm="12">
        <el-card class="project-card"  shadow="hover">
          <template #header>
            <div class="card-header">
              <span>Mumbai, Maharashtra, India (BOM) </span>
            </div>
          </template>
          <p>Domain:in-bom.867678.xyz:81</p>
          <p>IPv4:65.20.89.131</p>
          <p>IPv6:[2401:c080:2400:1705:5400:05ff:fea0:41dd]</p>
          <img src="https://raw.githubusercontent.com/mokanove/867678.xyz/refs/heads/servers/BOM.png"/>
          <template #footer>
            <el-button type="primary" @click="tenj">10MB</el-button>
            <el-button type="success" @click="onej">100MB</el-button>
            <el-button type="danger" @click="threej">300MB</el-button>
            <el-button type="info" @click="osam">More</el-button>
            <el-button @click="iperf3">iperf3</el-button>
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
          <p>Domain:us-lax.867678.xyz:81</p>
           <p>IPv4:74.48.125.113</p>
          <p>IPv6:[2607:f130:0:0153::f239:9af0]</p>
          <img src="https://raw.githubusercontent.com/mokanove/867678.xyz/refs/heads/servers/LAX.png"  />
          <template #footer>
            <el-button type="primary" @click="tenu">10MB</el-button>
            <el-button type="success" @click="oneu">100MB</el-button>
            <el-button type="danger" @click="threeu">300MB</el-button>
            <el-button type="info" @click="laxm">More</el-button>
            <el-button @click="iperf3">iperf3</el-button>
          </template>
        </el-card>
      </el-col>
      <el-col>
<p></p>
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
<p></p>
    <el-card style="width: 100%" shadow="hover">
    <template #header>About</template>
    <p>To clone this site , using : git clone https://github.com/mokanove/867678.xyz.git</p>
    <p>Also note that I uploaded a stripped-down version that doesn't include the module directory (otherwise Github will report that the repository is too large). You need to use npm install to install the missing parts.</p>
    <p >If you like my project , don't forget donate , it will be let me do much good.</p>
    <p>Copyright 2025 MoKanove All rights reserved. e-mail:me@867678.xyz</p>
    </el-card>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useClipboard } from '@vueuse/core'
import '../assets/home.css';
const router = useRouter()
function Message() {
 ElMessage({
    message: 'Downloading...',
    type: 'primary',
    plain: true,
  })
}
const { copy, isSupported } = useClipboard()

const iperf3 = async () => {
  ElMessageBox.alert('iperf3 -c [IP/Domain] -R', 'iperf3', {
    confirmButtonText: 'OK',
    async callback() {
      if (!isSupported) {
        console.error('Not support to copy')
        return
      }
      await copy('iperf3 -c [IP/Domain] -R')
      ElMessage({
        type: 'success',
        message: `Copied to clipboard.`,
      })
    },
  })
}
//link
const moixa = () => {
  window.open('https://github.com/mokanove/moixa', '_blank')
}
const tkkhs = () => {
  router.push('/tkkhs')
}
const updates = () => {
  router.push('/updates')
}
const fos = () => {
  window.open('https://github.com/mokanove/FuestaOS', '_blank')
}
const ghit = () => {
  window.open('https://github.com/mokanove/ghit', '_blank')
}
//servers
//osa
const tenj = () => {
  window.location.href = 'https://in-bom.867678.xyz:81/10.bin';
  Message()
}
const onej = () => {
  window.location.href = 'https://in-bom.867678.xyz:81/100.bin';
  Message()
}
const threej = () => {
  window.location.href = 'https://in-bom.867678.xyz:81/300.bin';
  Message()
}
const osam = () => {
  window.open('https://github.com/mokanove/867678.xyz/blob/servers/README.md#mumbai-maharashtra-india-bom', '_blank')
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
  window.open('https://github.com/mokanove/867678.xyz/blob/servers/README.md#los-angeles--california--usa-lax-', '_blank')
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

