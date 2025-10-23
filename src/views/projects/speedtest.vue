<template>
    <el-breadcrumb :separator-icon="DArrowRight" >
    <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: '/projects' }">Projects</el-breadcrumb-item>
    <el-breadcrumb-item>SpeedTest</el-breadcrumb-item>
  </el-breadcrumb>
    <h1>SpeedTest  | Mo Kanove</h1>
  <el-card shadow="hover">
    <template #header><div class="card-header"><span>Your internet</span></div></template>
    <p id="sip">Getting your IP... <br />Get ip using ipinfo.io</p>
    <p>This location detects your IP address for automatic server selection. We will not record it. The API comes from ipinfo.io</p>
  </el-card><br />
  <el-card shadow="hover">
    <template #header><div class="card-header"><span>HTTPS Download File</span></div></template>
    <el-select v-model="value" placeholder="Chooice a server">
    <el-option-group v-for="group in servers" :key="group.label" :label="group.label">
    <el-option v-for="item in group.options"  :key="item.value" :label="item.label"  :value="item.value"/>
    </el-option-group>
    </el-select><p></p>
          <el-button type="success" @click="dd(10)" plain>10MiB</el-button><el-divider direction="vertical" />
          <el-button type="primary" @click="dd(100)" plain>100MiB</el-button><el-divider direction="vertical" />
          <el-button type="danger" @click="dd(300)" plain>300MiB</el-button>
   </el-card><p></p>
   <el-card shadow="hover">
    <template #header><div class="card-header"><span>iPerf3 (Only TCP)</span></div></template>
    <el-select v-model="value" placeholder="Chooice a server">
    <el-option-group v-for="group in liperf3" :key="group.label" :label="group.label">
    <el-option v-for="item in group.options"  :key="item.value" :label="item.label"  :value="item.value"/>
    </el-option-group>
    </el-select><p></p>
    <el-input v-model="input" placeholder="Please select the server and the test domain name will appear here." /><p></p>
    <el-text>You need to install iperf3 on your device first, the address is </el-text><el-link href="https://iperf.fr/iperf-download.php#windows" target="_blank" type="primary">here</el-link><el-divider direction="vertical" />
    <el-text>Need more servers?</el-text><el-link href="https://iperf.fr/iperf-servers.php" target="_blank" type="primary">Here are some public iperf3 servers</el-link><p></p>
  </el-card><p></p>
   <el-card shadow="hover">
    <img src="https://skillicons.dev/icons?i=nginx,linux,ubuntu,vite,workers" height="25px"/><el-divider direction="vertical" />
    <el-link href="https://github.com/mokanove/867678.xyz/blob/main/src/views/projects/speedtest.vue" targer="_blank" type="primary">View Source Code</el-link><br />
    <el-text>The test data does not provide any form of guarantee and is for reference only.</el-text><el-divider direction="vertical" />
    <el-text>The server has limited traffic. If you cannot use it, it is probably because you have exceeded the traffic limit, but it is difficult to exceed the traffic limit.</el-text><el-divider direction="vertical" />
    <el-text>Them 100% Support IPV6</el-text><br />
    <el-text type="danger">Your ISP may charge fees, so please be aware of data usage.</el-text>
  </el-card>
</template>
<script lang="ts" setup>
//icons
import { DArrowRight } from '@element-plus/icons-vue'
//speedtest
//get user ip
import { ref, onMounted } from 'vue'
async function fetchIpAddresses() {
  const ipElement = document.getElementById('sip')
  if (!ipElement) {
    return
  }
 const getIp = async (url: string, type: string) => {
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`Network error for ${type}`)
      }
      const data = await response.json()
      return { type, ip: data.ip }
    } catch (error) {
      return { type, ip: `Get ${type} failed` }
    }
  }
  const results = await Promise.allSettled([
    getIp('https://ipinfo.io/json', 'IPv4'),
    getIp('https://v6.ipinfo.io/json', 'IPv6')
  ])
  let output = ''
  results.forEach(result => {
    if (result.status === 'fulfilled') {
      output += `${result.value.type} is: ${result.value.ip}\n`
    } else {
      output += `${result.reason.type} is: ${result.reason.ip}\n`
    }
  })
  ipElement.innerHTML = output.replace(/\n/g, '<br>')
}
onMounted(() => {
  fetchIpAddresses()
})
//select
import { ElMessage } from 'element-plus'
const value = ref('')
//label servers
const servers = [
  {
    label: 'High Speed CDN',
    options: [
      {
        value: 'cloudflare',
        label: 'Cloudflare',
      },
    ],
  },
  {
    label: 'Normal server',
    options: [
      {
        value: 'lax',
        label: 'Los Angeles , California , United States : CloudCone 1Gbps',
      },
      {
        value: 'osa',
        label: 'Osaka , Kansai , Japan : Evoxt 1Gbps',
      },
    ],
  },
]
const urls = {
  cloudflare: 'https://r2.867678.xyz',
  lax: 'https://us-lax1.867678.xyz',
  osa: 'https://jp-osa1.867678.xyz',
}
const dd = (size: number) => {
  const selectedUrl = urls[value.value as keyof typeof urls]
  if (!selectedUrl) {
    ElMessage({
      type: 'error',
      message: 'Please select a server first.',
    })
    return
  }
  const url = `${selectedUrl}/${size}.bin`
  window.open(url)
}
//iperf3
//label iperf3
const liperf3 = [
  {
    label: 'Normal server',
    options: [
      {
        value: 'lax',
        label: 'Los Angeles , California , United States : CloudCone 1Gbps',
      },
      {
        value: 'osa',
        label: 'Osaka , Kansai , Japan : Evoxt 1Gbps',
      },
    ],
  },
]
const input = ref('')
</script>