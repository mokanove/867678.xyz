<template>
  <el-page-header @back="bak">
    <template #content>
      <span class="text-large font-600 mr-3"> tkkhs </span>
    </template>
  </el-page-header>
    <h1>tkkhs project.</h1>
    <p>Say what you want, it won't record it.</p>
<p><br></p>
  <el-input
    v-model="textarea"
    style="width: 100%"
    autosize
    type="textarea"
    placeholder="Please input"
  />
<p><br></p>
   <el-card style="width: 100%" shadow="never">
    <template #header>About</template>
   <el-button type="info" @click="bak" :icon="Back">Back to homepage</el-button>
   <el-button type="primary" @click="sc" :icon="Document">View source code</el-button>
    <el-button type="success" @click="donate" :icon="Money">Donate</el-button><br><br>
   <el-text class="mx-1" size="large">He won't record it, you can say whatever you want.</el-text><br>
   <el-text class="mx-1" size="large">At the same time, it is also an open source work, GPLv3 agreement.</el-text><br>
   <el-text class="mx-1" size="large">We will adopt Ai technology in the near future, but it will definitely prioritize privacy.</el-text><br>
    </el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Document , Back , Money } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import { ElMessage, ElMessageBox } from 'element-plus'
const router = useRouter()
const textarea = ref('')
const bak = () => {
  router.push('/')
}
const sc = () => {
 window.open('https://github.com/mokanove/867678.xyz/blob/main/src/views/tkkhs.vue', '_blank')
}
const donate = () => {
  ElMessageBox.alert('USDT Tron:TBrZFA4NstpHTzQ5XNh6ocvidSin9C1Yc1', 'Donate', {
    confirmButtonText: 'OK',
    callback: () => {
      ElMessage({
        type: 'success',
        message: `Have a good day!`,
      })
    },
  })
}
</script>
