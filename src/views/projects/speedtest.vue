<template>
    <el-breadcrumb :separator-icon="DArrowRight" >
    <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: '/projects' }">Projects</el-breadcrumb-item>
    <el-breadcrumb-item>SpeedTest</el-breadcrumb-item>
  </el-breadcrumb>
    <h1>SpeedTest</h1>
    <el-text class="mx-1" type="danger">Your ISP may charge fees, so please be aware of data usage.</el-text>
    <p>You can use them to test your network speed with https or iperf3.However, I do not guarantee 100% availability, and the test data is for reference only.</p>
  <el-select v-model="value" placeholder="Server">
    <el-option-group v-for="group in options" :key="group.label" :label="group.label">
    <el-option v-for="item in group.options"  :key="item.value" :label="item.label"  :value="item.value"/>
    </el-option-group>
  </el-select>
  <p></p>
   <el-card shadow="hover">
          <p>Domain:</p>
          <p>IPv4:</p>
          <p>IPv6:</p>
          <p>here is developmenting and can't be running.</p>
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
import { Document , Back , Money , DArrowRight } from '@element-plus/icons-vue'
import { useBak } from '../../assets/pro'
const { bak } = useBak()
import { donate } from '../../assets/donate'
const sc = () => {
 window.open('https://github.com/mokanove/867678.xyz/tree/servers/depoly', '_blank')
}
const sd = () => {
 window.open('https://github.com/mokanove/867678.xyz/tree/main/src/views/projects/speedtest.vue', '_blank')
}
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
import { ref } from 'vue'

const value = ref('')
const options = [
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
        label: 'CloudCone 1.0Gbps : Los Angeles , California , United States',
      },
      {
        value: 'bom',
        label: 'Vultr 5.0Gbps : Mumbai, Maharashtra, India',
      },
      {
        value: 'osa',
        label: 'Evoxt 1.0Gbps : Osaka , Kansai , Japan(The data is run out and will be reset on the 23rd of this month.)',
      },
    ],
  },
]
</script>