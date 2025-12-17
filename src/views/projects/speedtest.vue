<template>
  <el-breadcrumb :separator-icon="DArrowRight" >
  <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
  <el-breadcrumb-item :to="{ path: '/projects' }">Projects</el-breadcrumb-item>
  <el-breadcrumb-item>SpeedTest</el-breadcrumb-item>
  </el-breadcrumb>
  <h1>SpeedTest  | Mo</h1>
  <el-row :gutter="10">
  <el-col :xs="24" :sm="12" :md="12" :lg="12">
  <el-card shadow="hover">
    <h2>Download Speed</h2>
    <h3 :style="{ color: isDownloading ? '#409EFF' : '#303133' }">{{ downloadSpeed }}</h3>
  </el-card>
  </el-col>
  <el-col :xs="24" :sm="12" :md="12" :lg="12">
  <el-card shadow="hover">
    <h2>Upload Speed</h2>
    <h3 :style="{ color: isUploading ? '#67C23A' : '#303133' }">{{ uploadSpeed }}</h3>
  </el-card>
 </el-col>
</el-row><p></p>
  <el-row :gutter="10">
  <el-col :xs="24" :sm="12" :md="12" :lg="12">
  <el-card shadow="hover">
    <h2>Client info</h2>
    <h3 id="sip">{{ ipDisplay }}</h3>
  </el-card>
  </el-col>
  <el-col :xs="24" :sm="12" :md="12" :lg="12">
  <el-card shadow="hover">
    <h2>Latency</h2>
    <h3>{{ latency }}</h3>
  </el-card>
 </el-col>
</el-row><p></p>
  <el-card shadow="hover">
       <el-text>Download:</el-text>
      <el-divider direction="vertical" />
       <el-button @click="dd(1048576)" :disabled="isDownloading" plain>1MiB</el-button>
        <el-divider direction="vertical" />
        <el-button type="info" @click="dd(10485760)" :disabled="isDownloading" plain>10MiB</el-button>
        <el-divider direction="vertical" />
        <el-button type="primary" @click="dd(52428800)" :disabled="isDownloading" plain>50MiB</el-button>
        <el-divider direction="vertical" />
        <el-button type="success" @click="dd(104857600)" :disabled="isDownloading" plain>100MiB</el-button>
        <el-divider direction="vertical" />
        <el-button type="warning" @click="dd(209715200)" :disabled="isDownloading" plain>200MiB</el-button>
        <el-divider direction="vertical" />
        <el-button type="danger" @click="dd(419430400)" :disabled="isDownloading" plain>400MiB</el-button>
        <el-divider direction="vertical" />
        <el-text>Upload:</el-text>
        <el-divider direction="vertical" />
        <el-button @click="ud(1048576)" :disabled="isDownloading" plain>1MiB</el-button>
        <el-divider direction="vertical" />
        <el-button type="info" @click="ud(10485760)" :disabled="isDownloading" plain>10MiB</el-button>
        <el-divider direction="vertical" />
        <el-button @click="Latency">Test Latency</el-button>
        <p></p>
       <el-button @click="sc()">Source Code</el-button><el-divider direction="vertical" />
       <img src="https://skillicons.dev/icons?i=nginx,linux,ubuntu,vite,workers" height="30px"/><el-divider direction="vertical" />
       <el-text>Please note the data consumption during speed testing.</el-text>
   </el-card>
</template>
<script lang="ts" setup>
//icons
import { DArrowRight } from '@element-plus/icons-vue'
//link
const sc = () =>{
  window.open("https://github.com/mokanove/867678.xyz/blob/main/src/views/projects/speedtest.vue" , "_blank")
}
//get user ip
import { ref, onMounted } from 'vue'
const ipDisplay = ref('Getting your IP...')
const preferred = ref('')
const fetchIps = async () => {
  const get = async (url: string, type: string) => {
    const res = await fetch(url).then(r => r.json()).catch(() => ({ ip: 'Failed' }))
    if (!preferred.value && res.ip !== 'Failed') preferred.value = type
    return `${type}: ${res.ip}${res.city ? ` (${res.city})` : ''}`
  }
  const results = await Promise.all([
    get('https://ipinfo.io/json', 'IPv4'),
    get('https://v6.ipinfo.io/json', 'IPv6')
  ])
  ipDisplay.value = `${results.join('\n')}\nPreferred: ${preferred.value || 'Unknown'}`
}
onMounted(fetchIps)
//load
//down
const downloadSpeed = ref('Not started')
const isDownloading = ref(false)
const dd = async (size: number) => {
  if (isDownloading.value) return
  isDownloading.value = true
  downloadSpeed.value = 'Connecting...'
  const startTime = performance.now()
  let receivedBytes = 0
  let lastUpdateTime = startTime
  try {
    const response = await fetch(`https://speed.cloudflare.com/__down?during=download&bytes=${size}`)
    if (!response.body) throw new Error()
    const reader = response.body.getReader()
    while (true) {
      const { done, value } = await reader.read()
      if (done) break
      receivedBytes += value.length
      const now = performance.now()
      if (now - lastUpdateTime > 100) {
        const duration = (now - startTime) / 1000
        const mbps = (receivedBytes * 8) / (1024 * 1024) / duration
        downloadSpeed.value = `${mbps.toFixed(2)} Mbps`
        lastUpdateTime = now
      }
    }
    const finalDuration = (performance.now() - startTime) / 1000
    downloadSpeed.value = `${((receivedBytes * 8) / (1024 * 1024) / finalDuration).toFixed(2)} Mbps`
  } catch (error) {
    downloadSpeed.value = 'Test Failed'
  } finally {
    isDownloading.value = false
  }
}
//up
const uploadSpeed = ref('Not started')
const isUploading = ref(false)
const ud = (size: number) => {
  if (isUploading.value) return
  isUploading.value = true
  uploadSpeed.value = 'Preparing data...'
  const data = new Uint8Array(size)
  const startTime = performance.now()
  const xhr = new XMLHttpRequest()
  xhr.upload.onprogress = (event) => {
    if (event.lengthComputable) {
      const now = performance.now()
      const duration = (now - startTime) / 1000 
      if (duration > 0) {
        const mbps = (event.loaded * 8) / (1024 * 1024) / duration
        uploadSpeed.value = `${mbps.toFixed(2)} Mbps`
      }
    }
  }
  xhr.onload = () => {
    isUploading.value = false
    const finalDuration = (performance.now() - startTime) / 1000
    uploadSpeed.value = `${((size * 8) / (1024 * 1024) / finalDuration).toFixed(2)} Mbps`
  }
  xhr.onerror = () => {
    uploadSpeed.value = 'Test Failed'
    isUploading.value = false
  }
  xhr.open('POST', 'https://httpbin.org/post')
  xhr.send(data)
}
//Latency
const latency = ref('Not started')
const Latency = async () => {
  const start = performance.now()
  try {
    await fetch('http://www.gstatic.com/generate_204', { mode: 'no-cors', cache: 'no-store' })
    const end = performance.now()
    latency.value = `${Math.round(end - start)} ms`
  } catch (e) {
    latency.value = 'Error'
  }
}
</script>