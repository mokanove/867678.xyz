<template>
    <el-breadcrumb :separator-icon="DArrowRight" >
    <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: '/projects' }">Projects</el-breadcrumb-item>
    <el-breadcrumb-item>SpeedTest</el-breadcrumb-item>
  </el-breadcrumb>
    <h1>SpeedTest</h1>
    <el-text class="mx-1" type="danger">Your ISP may charge fees, so please be aware of data usage.</el-text>
    <p>You can use them to test your network speed with https or iperf3.However, I do not guarantee 100% availability, and the test data is for reference only.</p>
  <el-card shadow="hover">
    <el-select v-model="value" placeholder="Chooice a server">
    <el-option-group v-for="group in servers" :key="group.label" :label="group.label">
    <el-option v-for="item in group.options"  :key="item.value" :label="item.label"  :value="item.value"/>
    </el-option-group>
    </el-select><p></p>
          <el-button type="success" @click="dd(10)" plain>10MiB</el-button><el-divider direction="vertical" />
          <el-button type="primary" @click="dd(100)" plain>100MiB</el-button><el-divider direction="vertical" />
          <el-button type="danger" @click="dd(300)" plain>300MiB</el-button><p></p>
          <el-text id="sip">Getting your IP... If this field does not respond for an extended period of time, please refresh the page.</el-text><el-divider direction="vertical" /><el-link href="http://api.867678.xyz/ip" type="primary" target="_blank">Recheck my IP</el-link>
  </el-card><p></p>
  <el-card shadow="hover">
   <el-button type="info" @click="bak" :icon="Back">Back to homepage</el-button><el-divider direction="vertical" />
   <el-button type="primary" @click="sc" :icon="Document">View depoly code</el-button><el-divider direction="vertical" />
   <el-button type="primary" @click="sd" :icon="Document">View page code</el-button><el-divider direction="vertical" />
   <el-button type="success" @click="donate" :icon="Money">Donate</el-button><el-divider direction="vertical" />
   <el-button @click="iperf3" :icon="Document">Copy iperf3 command</el-button>
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
  cloudflare: 'https://s.867678.xyz',
  lax: 'https://1los-angeles.us.867678.xyz:81',
  osa: 'https://1osaka.jp.867678.xyz:81',
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
  color: #000000;
  font-size: 10px;
}
</style>