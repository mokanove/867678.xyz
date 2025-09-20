<template>
    <el-breadcrumb :separator-icon="DArrowRight" >
    <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: '/projects' }">Projects</el-breadcrumb-item>
    <el-breadcrumb-item>SpeedTest</el-breadcrumb-item>
  </el-breadcrumb>
    <h1>SpeedTest</h1>
    <el-text class="mx-1" type="danger">Your ISP may charge fees, so please be aware of data usage.</el-text>
    <p>You can use them to test your network speed with https or iperf3.However, I do not guarantee 100% availability, and the test data is for reference only.</p>
  <el-select v-model="value" placeholder="Chooice a server">
    <el-option-group v-for="group in servers" :key="group.label" :label="group.label">
    <el-option v-for="item in group.options"  :key="item.value" :label="item.label"  :value="item.value"/>
    </el-option-group>
  </el-select><p></p>
  <el-card shadow="hover">
          <el-button type="success" @click="dd(10)" plain>10MiB</el-button><el-divider direction="vertical" />
          <el-button type="primary" @click="dd(100)" plain>100MiB</el-button><el-divider direction="vertical" />
          <el-button type="danger" @click="dd(300)" plain>300MiB</el-button><el-divider direction="vertical" />
          <el-link href="http://api.867678.xyz/ip" type="primary" target="_blank">Recheck my IP</el-link>
          <p id="sip">Getting your IP... If this field does not respond for an extended period of time, please refresh the page.</p>
  </el-card>
<p></p>
  <el-card shadow="hover">
   <el-button type="info" @click="bak" :icon="Back">Back to homepage</el-button><el-divider direction="vertical" />
   <el-button type="primary" @click="sc" :icon="Document">View depoly code</el-button><el-divider direction="vertical" />
   <el-button type="primary" @click="sd" :icon="Document">View page code</el-button><el-divider direction="vertical" />
   <el-button type="success" @click="donate" :icon="Money">Donate</el-button><el-divider direction="vertical" />
   <el-button @click="iperf3" :icon="Document">iperf3 command</el-button>
  </el-card>
</template>

<script lang="ts" setup>
//normal
import { Document , Back , Money , DArrowRight } from '@element-plus/icons-vue'
import { useBak } from '../../assets/pro'
const { bak } = useBak()
import { donate } from '../../assets/donate'
const sc = () => {
 window.open('https://github.com/mokanove/867678.xyz/tree/servers/depoly#there-are-server-config-code--only-for-ubuntu-and-debian', '_blank')
}
const sd = () => {
 window.open('https://github.com/mokanove/867678.xyz/tree/main/src/views/projects/speedtest.vue', '_blank')
}
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
import { ref , onMounted} from 'vue'
async function fetchIpAddress() {
  const ipElement = document.getElementById('sip')
  if (ipElement) {
    try {
      const response = await fetch('https://api.867678.xyz/ip-json') 
      if (!response.ok) {
        throw new Error('Network error')
      }
      const data = await response.json()
      ipElement.textContent = `Your IP is: ${data.ip}`
    } catch (error) {
      ipElement.textContent = 'Get IP addr failed', error
    }
  }
}
onMounted(() => {
  fetchIpAddress()
})
//select
const value = ref('')
const servers = [
  {
    label: 'High Speed',
    options: [
      {
        value: 'cloudflare',
        label: 'Cloudflare R2 CDN (Not support iperf3)',
      },
    ],
  },
  {
    label: 'Normal server',
    options: [
      {
        value: 'lax',
        label: 'CloudCone 1Gbps : Los Angeles , California , US',
      },
      {
        value: 'tyo',
        label: 'Vultr 10Gbps : Tokyo , Kanto , Japan',
      },
      {
        value: 'osa',
        label: 'Evoxt 1Gbps : Osaka , Kansai , Japan(The server data cap has been reached. It will reset on the 23rd of this month.)',
      },
    ],
  },
]
const urls = {
  cloudflare: 'https://s.867678.xyz',
  lax: 'https://us-lax.867678.xyz:81',
  tyo: 'https://jp-tyo.867678.xyz:81',
  osa: 'https://jp-osa.867678.xyz:81',
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