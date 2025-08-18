<template>
   <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false" @select="handleSelect">
    <el-menu-item index="0">
      <img style="width: 100px;height: 50px;" src="/favicon.ico"/>
    </el-menu-item>
    <el-sub-menu index="1">
      <template #title>Home</template>
      <el-menu-item index="1-1" @click="th">This site</el-menu-item>
      <el-menu-item index="1-2" @click="pa">867678.xyz</el-menu-item>
    </el-sub-menu>
  </el-menu>
  <h1>Speed test website by MoKanove.</h1>
  <h2>HTTP(S)</h2>
  <p>Please select the file size manually and the download will start automatically.</p>
    <el-card style="width: 100%" shadow="hover">
    <template #header>Choose file</template>
    <el-button type="primary" plain @click="ten">10MB</el-button>
    <el-button type="success" plain @click="one">100MB</el-button>
    <el-button type="danger" plain @click="three">300MB</el-button>
    <p>The format ends with .bin to prevent accidental operation, although the structure of these files is binary 0.</p>
    <p>Because I am relatively poor, the server's hard drive is not very large. 300MB is considered a large file. Please use it sparingly. Thank you.</p>
  </el-card>
  <el-divider />
   <h2>iperf3</h2>
  <p>I recommend you use iperf3 to test the speed. It is easy to use.</p>
    <el-card style="width: 100%" shadow="hover">
    <p :plain="true" @click="iperf">iperf3 -c [IP/Domain] -R (Click to copy.)</p>
    <p>Meaning: iperf3 -client [speed test address] -Reverse (without -R, test upload)</p>
  </el-card>
   <el-divider />
  <el-card style="width: 100%" shadow="hover">
    <template #header>About</template>
    <p>Currently, all MoKanove servers support IPV4/V6 dual-stack networks and are equipped with at least 1Gbps bandwidth and Ubuntu Server system.</p>
    <p @click="dn">Click on this line of text to view the code of this page, which is open source.</p>
    <p>Copyright 2025 MoKanove All rights reserved.</p>
    </el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const th = () => {
  window.location.href = '/';
}
const pa = () => {
  window.location.href = 'https://867678.xyz';
}
const ten = () => {
  window.location.href = '10.bin';
   ElMessage({
    message: 'Downloading...',
    type: 'primary',
    plain: true,
  })
}
const one = () => {
  window.location.href = '100.bin';
  ElMessage({
    message: 'Downloading...',
    type: 'primary',
    plain: true,
  })
}
const three = () => {
  window.location.href = '300.bin';
  ElMessage({
    message: 'Downloading...',
    type: 'primary',
    plain: true,
  })
}
const iperf = () => {
 ElMessage({
    message: 'Copy successful.',
    type: 'primary',
    plain: true,
  })
}
const dn = () => {
   window.open('https://github.com/mokanove/867678.xyz/tree/dn', '_blank')
}
</script>

<style scoped>
.el-menu--horizontal > .el-menu-item:nth-child(1) {
  margin-right: auto;
}
</style>
