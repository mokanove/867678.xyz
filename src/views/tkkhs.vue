<template>
    <h1>TKKHS project.</h1>
    <p>Say what you want, it won't record it.</p>
     <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item :to="{ path: '/' }">Homepage</el-breadcrumb-item>
    <el-breadcrumb-item>tkkhs</el-breadcrumb-item>
  </el-breadcrumb>
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
   <el-button type="info" @click="bak" :icon="ArrowLeft">Back to homepage</el-button><br><br>
   <el-text class="mx-1" size="large">He won't record it, you can say whatever you want.</el-text><br>
   <el-text class="mx-1" size="large">At the same time, it is also an open source work, GPLv3 agreement.</el-text><br>
    </el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ArrowRight } from '@element-plus/icons-vue'
import {  ArrowLeft } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const textarea = ref('')
const bak = () => {
  router.push('/')
}
</script>
