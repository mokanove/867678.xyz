<template>
    <center>
    <h1>TKKHS project.</h1>
    </center>
    <p>Say what you want, it won't record it.</p>
  <el-input
    v-model="textarea"
    style="width: 100%"
    autosize
    type="textarea"
    placeholder="Please input"
  />
   <br>
   <el-card style="width: 100%">
    <template #header><h3>About</h3></template>
   <el-text class="mx-1" size="large">He won't record it, you can say whatever you want.</el-text><br>
   <el-text class="mx-1" size="large">At the same time, it is also an open source work, GPLv3 agreement.</el-text><br>
   <el-text class="mx-1" size="large">I made it because I have no one to talk to. If I tell others, they will tell others, and they will scold me in return.</el-text><br>
   <h4>Worry?</h4><br>
    <el-text class="mx-1" size="large" @click="sc">If you are still worried? Take a look at the source code. Technology will not lie.</el-text><br>
    <el-text class="mx-1" size="large" @click="sc">How to read it? As usual, just click on these paragraphs.</el-text><br>
    <h4>Back?</h4><br>
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
