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
const latency = ref('Not started');
const Latency = async () => {
  latency.value = 'Testing...';
  const samples: number[] = [], url = 'https://www.gstatic.com/generate_204';
  for (let i = 0; i < 10; i++) {
    const start = performance.now();
    try {
      await fetch(url, { mode: 'no-cors', cache: 'no-store' });
      samples.push(performance.now() - start);
    } catch { }
    await new Promise(r => setTimeout(r, 50));
  }
  if (samples.length) {
    samples.sort((a, b) => a - b);
    const mid = samples.slice(Math.floor(samples.length * 0.2), Math.ceil(samples.length * 0.8));
    const avg = mid.reduce((a, b) => a + b, 0) / mid.length;
    latency.value = `${avg.toFixed(1)} ms`;
  } else {
    latency.value = 'Error';
  }
};
//test
//down
const downloadSpeed = ref('Not started'), isDownloading = ref(false);
const Download = async () => {
  if (isDownloading.value) return;
  isDownloading.value = true;
  downloadSpeed.value = 'Connecting...';
  const ctrl = new AbortController(), DURATION = 5000, CON = 6;
  const startTime = performance.now();
  let totalBytes = 0;
  const timer = setInterval(() => {
    const sec = (performance.now() - startTime) / 1000;
    if (sec > 0.5) {
      downloadSpeed.value = `${((totalBytes * 8) / 1e6 / sec).toFixed(2)} Mbps`;
    }
  }, 150);
  const task = async () => {
    try {
      const res = await fetch(`https://speed.cloudflare.com/__down?bytes=${1e9}`, { signal: ctrl.signal });
      const reader = res.body?.getReader();
      if (!reader) return;
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        totalBytes += value.length;
      }
    } catch {}
  };
  setTimeout(() => ctrl.abort(), DURATION);
  try {
    await Promise.all(Array.from({ length: CON }, task));
  } finally {
    clearInterval(timer);
    isDownloading.value = false;
    const finalSec = (performance.now() - startTime) / 1000;
    downloadSpeed.value = totalBytes > 0 ? `${((totalBytes * 8) / 1e6 / finalSec).toFixed(2)} Mbps` : 'Failed';
  }
};
//up
const uploadSpeed = ref('Not started'), isUploading = ref(false);
const Upload = async () => {
  if (isUploading.value) return;
  isUploading.value = true;
  uploadSpeed.value = 'Connecting...';
  const ctrl = new AbortController();
  const DURATION = 3000, CHUNK = 10 * 1024 * 1024, CONCURRENCY = 4;
  const startTime = performance.now(), activeBytes = new Array(CONCURRENCY).fill(0);
  let totalBytes = 0;
  const data = new Uint8Array(CHUNK), seed = new Uint8Array(65536);
  crypto.getRandomValues(seed);
  for (let i = 0; i < CHUNK; i += seed.length) data.set(seed, i);
  const timer = setInterval(() => {
    const sec = (performance.now() - startTime) / 1000;
    if (sec <= 0.5) return;
    const cur = totalBytes + activeBytes.reduce((a: number, b: number) => a + b, 0);
    uploadSpeed.value = `${((cur * 8) / 1048576 / sec).toFixed(2)} Mbps`;
  }, 100);
  const task = (i: number) => new Promise<void>(res => {
    const run = () => {
      if (ctrl.signal.aborted) return res();
      const x = new XMLHttpRequest();
      x.open('POST', 'https://j.867678.xyz/upload');
      x.setRequestHeader('Content-Type', 'application/octet-stream');
      x.upload.onprogress = e => e.lengthComputable && (activeBytes[i] = e.loaded);
      x.onload = () => {
        totalBytes += CHUNK;
        activeBytes[i] = 0;
        if (!ctrl.signal.aborted) run(); else res();
      };
      x.onerror = () => {
        activeBytes[i] = 0;
        if (!ctrl.signal.aborted) setTimeout(run, 500); else res();
      };
      ctrl.signal.addEventListener('abort', () => { x.abort(); res(); }, { once: true });
      x.send(data);
    };
    run();
  });
  const timeoutId = setTimeout(() => ctrl.abort(), DURATION);
  try {
    await Promise.all(Array.from({ length: CONCURRENCY }, (_, i) => task(i)));
  } catch (e) {
  } finally {
    clearTimeout(timeoutId);
    clearInterval(timer);
    isUploading.value = false;
    const finalSec = (performance.now() - startTime) / 1000;
    uploadSpeed.value = totalBytes > 0 ? `${((totalBytes * 8) / 1048576 / finalSec).toFixed(2)} Mbps` : 'Stopped';
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
