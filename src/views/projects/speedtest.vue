<template>
  <el-breadcrumb :separator-icon="DArrowRight" >
  <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
  <el-breadcrumb-item :to="{ path: '/projects' }">Projects</el-breadcrumb-item>
  <el-breadcrumb-item>SpeedTest</el-breadcrumb-item>
  </el-breadcrumb>
  <h1>SpeedTest  | Mo</h1>
  <el-row :gutter="10">
  <el-col :xs="24" :sm="12" :md="12" :lg="12">
  <el-card shadow="hover">
    <h2>Client</h2>
    <h3 id="sip">{{ Clientinfo }}</h3>
  </el-card>
  </el-col>
  <el-col :xs="24" :sm="12" :md="12" :lg="12">
  <el-card shadow="hover">
    <h2>Server</h2>
    <h3>Download:{{ downloadSpeed }} Upload:{{ uploadSpeed }} Latency:{{ latency }}</h3>
  </el-card>
 </el-col>
</el-row><p></p>
  <el-card shadow="hover">
       <div class="test"><el-button type="primary" @click="Go" :disabled="isTesting" plain class="speed-btn">Start test</el-button></div>
        <p></p>
       <img src="https://skillicons.dev/icons?i=nginx,linux,ubuntu,vite,workers" height="30px"/><el-divider direction="vertical" />
       <el-link type="primary" href="https://github.com/mokanove/867678.xyz/blob/main/src/views/projects/speedtest.vue" target="_blank">Source Code</el-link><el-divider direction="vertical" />
       <el-text>Please note the data consumption during speed testing.</el-text><el-divider direction="vertical" />
       <el-text>Test data is for reference only and no guarantee is provided.</el-text>
   </el-card>
</template>
<style scoped>
.test {
  display: flex;
  justify-content: center; 
  align-items: center; 
  width: 99%;
  padding: 10px 0; 
}
.speed-btn {
  padding: 25px 50px;
  font-size: 1.5rem;
  font-weight: 800;
  width: 100%;
}
</style>
<script lang="ts" setup>
//icons
import { DArrowRight } from '@element-plus/icons-vue'
//get user ip
import { ref, onMounted } from 'vue'
const Clientinfo = ref('Getting your IP...')
const preferred = ref('')
const fetchIps = async () => {
  const fetchJson = (url: string) => 
    fetch(url).then(r => r.json()).catch(() => ({ ip: 'Failed' }));
  const [v4Res, v6Res, dualRes] = await Promise.all([
    fetchJson('https://ipinfo.io/json'),
    fetchJson('https://v6.ipinfo.io/json'),
    fetchJson('https://api64.ipify.org?format=json')
  ]);
  if (dualRes.ip !== 'Failed') {
    preferred.value = dualRes.ip.includes(':') ? 'IPv6' : 'IPv4';
  } else {
    preferred.value = 'Unknown';
  }
  const lines = [
    `IPv4: ${v4Res.ip}`,
    `IPv6: ${v6Res.ip}`,
    `Preferred: ${preferred.value}`
  ];
  Clientinfo.value = lines.join('\n');
};
onMounted(fetchIps)
//Latency
const latency = ref('Not started')
const Latency = async () => {
  latency.value = 'Testing...';
  const samples: number[] = [];
  const url = 'https://www.gstatic.com/generate_204';
  for (let i = 0; i < 5; i++) {
    const start = performance.now();
    try {
      await fetch(url, { mode: 'no-cors', cache: 'no-store' });
      samples.push(performance.now() - start);
    } catch (e) {
      console.error('Latency test failed', e);
    }
  }
  if (samples.length > 0) {
    samples.sort((a, b) => a - b);
    const validSamples = samples.length > 2 ? samples.slice(1, -1) : samples;
    const avg = validSamples.reduce((a, b) => a + b, 0) / validSamples.length;
    latency.value = `${Math.round(avg)} ms`;
  } else {
    latency.value = 'Error';
  }
};
//test
//down
const downloadSpeed = ref('Not started')
const isDownloading = ref(false)
const Download = async () => {
  if (isDownloading.value) return;
  isDownloading.value = true;
  downloadSpeed.value = 'Connecting...';
  const controller = new AbortController();
  const TEST_DURATION_MS = 5000; 
  const timeoutId = setTimeout(() => controller.abort(), TEST_DURATION_MS);
  const fs = 1024 * 1024 * 1024; 
  const CON = 8;
  const startTime = performance.now();
  let totalBytes = 0;
  const downloadTask = async () => {
    try {
      const response = await fetch(
        `https://speed.cloudflare.com/__down?bytes=${fs}`, 
        { signal: controller.signal }
      );
      if (!response.body) return;
      const reader = response.body.getReader();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        totalBytes += value.length;
        const now = performance.now();
        const duration = (now - startTime) / 1000;
        if (duration > 0.5) {
          const mbps = (totalBytes * 8) / (1024 * 1024) / duration;
          downloadSpeed.value = `${mbps.toFixed(2)} Mbps`;
        }
      }
    } catch (e) {
      if (e instanceof Error && e.name !== 'AbortError') {
        console.error('Test error:', e);
      }
    }
  };
  await Promise.all(Array(CON).fill(null).map(downloadTask));
  clearTimeout(timeoutId);
  isDownloading.value = false;
  if (totalBytes === 0) downloadSpeed.value = 'Failed';
};
//up
const uploadSpeed = ref('Not started')
const isUploading = ref(false)
const Upload = async () => {
  if (isUploading.value) return;
  isUploading.value = true;
  uploadSpeed.value = 'Preparing...';
  const controller = new AbortController();
  const TEST_DURATION_MS = 10000;
  setTimeout(() => controller.abort(), TEST_DURATION_MS);
  const CHUNK_SIZE = 5 * 1024;
  const CONCURRENCY = 4;
  const startTime = performance.now();
  let totalUploadedBytes = 0;
  const randomData = new Uint8Array(CHUNK_SIZE);
  crypto.getRandomValues(randomData);
  const uiInterval = setInterval(() => {
    const duration = (performance.now() - startTime) / 1000;
    if (duration > 0.1 && totalUploadedBytes > 0) {
      const mbps = (totalUploadedBytes * 8) / (1024 * 1024) / duration;
      uploadSpeed.value = `${mbps.toFixed(2)} Mbps`;
    }
  }, 200);
  const uploadTask = async () => {
    try {
      while (!controller.signal.aborted) {
        await fetch('https://httpbin.org/post', {
          method: 'POST',
          body: randomData,
          signal: controller.signal,
          mode: 'cors',
        });
        totalUploadedBytes += CHUNK_SIZE;
      }
    } catch (e) {
      if (e instanceof Error && e.name !== 'AbortError') console.error(e);
    }
  };
  try {
    await Promise.all(Array(CONCURRENCY).fill(null).map(uploadTask));
  } catch (e) {
  } finally {
    clearInterval(uiInterval);
    isUploading.value = false;
    if (totalUploadedBytes === 0) uploadSpeed.value = 'Failed or Blocked';
  }
};
//all
const isTesting = ref(false);
const Go = async () => {
  if (isTesting.value) return;
  isTesting.value = true;
  try {
    await Latency(); 
    await Download(); 
    await Upload();
  } catch (e) {
    console.error("Something when't wrong:", e);
  } finally {
    isTesting.value = false;
  }
};
</script>
