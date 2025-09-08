<template>
    <el-page-header @back="bak">
    <template #content>
      <span class="text-large font-600 mr-3"> updates & fixeds </span>
    </template>
  </el-page-header>
<h2>Updates and Fixeds</h2>
    <el-timeline style="max-width: 100%">
     <el-timeline-item timestamp="2025/09/08" placement="top">
      <el-card>
        <p>Split page jump logic & css code into a single file.</p>
        <p>Reshaped the donation function.</p>
        <p>Moved updates and fixes pages to /updates ; Moved projects files to /projects</p>
        <p>Add this website license.</p>
      </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2025/09/07" placement="top">
      <el-card>
        <p>Optimize the operation logic of the menu at the top of the page.</p>
        <el-link href="https://s.867678.xyz/n/fac.kra" target="_blank">Changed a high-definition avatar, download? I chose the simplest trigger method,</el-link>
        <el-link href="https://s.867678.xyz/n/fac5.kra" target="_blank">please guess it yourself.</el-link>
        <p>Optimize the input box of tkkhs project.</p>
        <p>Now, the black and white themes will automatically switch with the operating system!</p>
      </el-card>
      </el-timeline-item>
       <el-timeline-item timestamp="2025/09/06" placement="top">
      <el-card>
        <p>tkkhs has been revised again and added a dark mode, as well as a return function to the old version of the web page.</p>
        <p>The cloud-side changes are automatic compilation by Cloudflare Pages instead of the previous local manual compilation, which allows new features to be synchronized faster.</p>
        <p>The warehouse structure has been re-optimized and now uses the latest vite and element-plus.</p>
        <p>Now, server speed test images will no longer be hosted by Github (which would increase loading time) but will be hosted by Cloudflare instead.</p>
      </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2025/09/05" placement="top">
      <el-card>
        <p>Changed the layout so that clicking the download button now pops up a prompt.</p>
        <p>Fixed an issue where the More Info button was not working.</p>
      </el-card>
       </el-timeline-item>
       <el-timeline-item timestamp="2025/09/03" placement="top">
      <el-card>
        <p>Renovated the homepage, changed the font style, now it is more user-friendly.</p>
      </el-card>
       </el-timeline-item>
       <el-timeline-item timestamp="2025/08/31" placement="top">
      <el-card>
        <p>Renovation home and tkkhs.</p>
      </el-card>
    </el-timeline-item>
  </el-timeline>
  <el-card style="width: 100%" shadow="never">
   <el-button type="info" @click="bak" :icon="Back">Back to homepage</el-button>
   <el-button type="primary" @click="sc" :icon="Document">View source code</el-button>
    <el-button type="success" @click="donate" :icon="Money">Donate</el-button>
    </el-card>
</template>
<script lang="ts" setup>
import { Document , Back , Money } from '@element-plus/icons-vue'
import { useBak } from '../assets/pro'
const { bak } = useBak()
import { donate } from '../assets/donate'
const sc = () => {
 window.open('https://github.com/mokanove/867678.xyz/blob/main/src/views/updates.vue', '_blank')
}
</script>