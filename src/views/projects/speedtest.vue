<template>
    <el-breadcrumb :separator-icon="DArrowRight" >
    <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: '/projects' }">Projects</el-breadcrumb-item>
    <el-breadcrumb-item>SpeedTest</el-breadcrumb-item>
  </el-breadcrumb>
    <h1>SpeedTest</h1>
  <el-card shadow="hover">
    <el-select v-model="value" placeholder="Chooice a server">
    <el-option-group v-for="group in servers" :key="group.label" :label="group.label">
    <el-option v-for="item in group.options"  :key="item.value" :label="item.label"  :value="item.value"/>
    </el-option-group>
    </el-select><p></p>
          <el-text class="mx-1" size="large">FIle size</el-text><el-divider direction="vertical" />
          <el-button type="success" @click="dd(10)" plain>10MiB</el-button><el-divider direction="vertical" />
          <el-button type="primary" @click="dd(100)" plain>100MiB</el-button><el-divider direction="vertical" />
          <el-button type="danger" @click="dd(300)" plain>300MiB</el-button><p></p>
          <el-text id="sip">Getting your IP...</el-text><el-divider direction="vertical" /><el-text>Get ip using ipinfo.io</el-text>
  </el-card><p></p>
  <el-card shadow="hover">
   <el-button type="info" @click="bak" :icon="Back">Back to homepage</el-button><el-divider direction="vertical" />
   <el-button type="success" @click="donate" :icon="Money">Donate</el-button><el-divider direction="vertical" />
   <el-button @click="iperf3" :icon="Document">Copy iperf3 command</el-button>
  </el-card>
    <p>You can use them to test your network speed with https or iperf3.However, I do not guarantee 100% availability, and the test data is for reference only.</p>
     <el-text class="mx-1" type="danger">Your ISP may charge fees, so please be aware of data usage.</el-text>
</template>
<script lang="ts" setup>
//normal
import { Document , Back , Money , DArrowRight } from '@element-plus/icons-vue'
import { useBak } from '../../assets/pro'
const { bak } = useBak()
import { donate } from '../../assets/donate'
//copy
import { ElMessage } from 'element-plus'
import { useClipboard } from '@vueuse/core'
const { copy, isSupported } = useClipboard()
const iperf3 = async () => {
      if (!isSupported) {
        ElMessage({
        type: 'error',
        message: `Copied failed.(Maybe your browser not support)`,
        })
        return
      }
      await copy('iperf3 -c [IP/Domain] -R')
      ElMessage({
        type: 'success',
        message: `Copied to clipboard.`,
      })
}
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
const value = ref('')
const servers = [
  {
    label: 'High Speed',
    options: [
      {
        value: 'cloudflare',
        label: 'Cloudflare R2',
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
  lax: 'https://1us-lax.867678.xyz:81',
  osa: 'https://1jp-osa.867678.xyz:81',
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
</script>
<style scoped>
#sip{
  color: #000;
  font-size: 18px;
}
</style>