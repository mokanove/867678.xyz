<template>
<h1>Speed test website by MoKanove.</h1>
  <h2>HTTP(S)</h2>
  <p>Please select the file size manually and the download will start automatically.</p>
    <el-card style="width: 100%" shadow="hover">
    <template #header>Choose file</template>
    <el-button type="primary" plain @click="ten">10MB</el-button>
    <el-button type="success" plain @click="one">100MB</el-button>
    <el-button type="danger" plain @click="three">300MB</el-button>
    <p>The format ends with .bin to prevent accidental operation, although the structure of these files is binary 0.</p>
  </el-card>
   <el-divider />
  <el-card style="width: 100%" shadow="hover">
    <template #header>About</template>
    <p>Server from cloudflare.</p>
    <p @click="dn">Click on this line of text to view the code of this page, which is open source.</p>
    <p>Copyright 2025 MoKanove All rights reserved.</p>
    </el-card>
</template>
<script lang="ts" setup>
import { ElMessage } from 'element-plus'

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
const dn = () => {
   window.open('https://github.com/mokanove/867678.xyz ','_blank')
}
</script>
