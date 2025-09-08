<template>
  <el-page-header @back="bak">
    <template #content>
      <span class="text-large font-600 mr-3"> tkkhs </span>
    </template>
  </el-page-header>
    <h1>TKKHS PROJECT</h1>
    <p>Say what you want, it won't record it.</p>
      <textarea id="textInput" placeholder="Say At Here..." rows="5" wrap="soft"></textarea>
   <el-card style="width: 100%" shadow="never">
   <el-button type="info" @click="bak" :icon="Back">Back to homepage</el-button>
   <el-button type="primary" @click="sc" :icon="Document">View source code</el-button>
    <el-button type="success" @click="donate" :icon="Money">Donate</el-button>
    </el-card>
</template>

<script lang="ts" setup>
import { Document , Back , Money } from '@element-plus/icons-vue'
import { useBak } from '../../assets/pro'
import '../../assets/tkkhs.css';
const { bak } = useBak()
import { donate } from '../../assets/donate'
const sc = () => {
 window.open('https://github.com/mokanove/867678.xyz/blob/main/src/views/tkkhs.vue', '_blank')
}
</script>