<template>
    <center>
    <h1>TKKHS project.</h1>
    </center>
    <p>Say what you want, it won't record it.</p>
    <div style="margin: 20px 0" />
  <el-input
    v-model="textarea"
    style="width: 100%"
    autosize
    type="textarea"
    placeholder="Please input"
  />
   <el-divider />
   <el-card style="width: 100%" shadow="hover">
    <template #header>About</template>
   <el-text class="mx-1" size="large">He won't record it, you can say whatever you want.</el-text><br>
   <el-text class="mx-1" size="large">At the same time, it is also an open source work, GPLv3 agreement.</el-text><br>
   <el-text class="mx-1" size="large">I made it because I have no one to talk to. If I tell others, they will tell others, and they will scold me in return.</el-text><br>
    </el-card>
    <el-divider />
   <el-card style="width: 100%" shadow="hover">
    <template #header>Worry?</template>
    <el-text class="mx-1" size="large" @click="sc">If you are still worried? Take a look at the source code. Technology will not lie.</el-text><br>
    <el-text class="mx-1" size="large" @click="sc">How to read it? As usual, just click on these paragraphs.</el-text>
    </el-card>
    <el-divider />
    <el-card style="width: 100%" shadow="hover">
    <template #header>Back?</template>
    <el-text class="mx-1" size="large" @click="bak">As usual, just click on these paragraphs.</el-text>
    </el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const textarea = ref('')
const sc = () => {
  window.open('https://github.com/mokanove/867678.xyz/blob/main/src/views/tkkhs.vue', '_blank')
}
const bak = () => {
  router.push('/')
}
</script>
