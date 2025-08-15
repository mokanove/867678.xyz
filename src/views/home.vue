<template>
    <center>
        <h1>Hello! Welcome to Mo Kanove website</h1>
    </center>
    <el-divider />
    <h2>Servers</h2>
    <p>You can use them to test your network speed.</p>
    <p>They are equipped with a bandwidth of at least 1Gbps.</p>
    <p>You can use HTTP or iperf3 to test the speed (see the server card for details).</p>
    <el-row :gutter="20" class="project-section">
      <el-col :span="8" :xs="24" :sm="12">
        <el-card class="project-card" shadow="hover">
          <template #header>
            <div class="card-header">
              <span>Osaka , Japan(OSA)</span>
            </div>
          </template>
          <p>Domain auto select IP version:jp-osa.867678.xyz</p>
          <p>Speedtest (by speedtest ookla):</p>
          <img src="https://raw.githubusercontent.com/mokanove/servers/refs/heads/main/OSA.png" width="90%"/>
          <p>IPv4:</p>
          <p>166.88.100.243</p>
          <p>IPv6:</p>
          <p>2400:8d60:8:0000:0000:0000:0c0b:1ea8</p>
          <template #footer>
            <el-button @click="osa">DOWNLOAD TEST NOW!</el-button>
            <el-button @click="osam">MORE INFORMATION</el-button>
          </template>
        </el-card>
      </el-col>
      <el-col :span="8" :xs="24" :sm="12">
        <el-card class="project-card" shadow="hover">
          <template #header>
            <div class="card-header">
              <span>Los Angeles , California , US(LAX)</span>
            </div>
          </template>
          <p>Domain auto select IP version:us-lax.867678.xyz</p>
          <p>Speedtest (by speedtest ookla):</p>
          <img src="https://raw.githubusercontent.com/mokanove/servers/refs/heads/main/LAX.png" width="90%"/>
          <p>IPv4:</p>
          <p>74.48.125.113</p>
          <p>IPv6:</p>
          <p>2607:f130:0000:0153:0000:0000:ae12:43b5</p>
          <p>2607:f130:0000:0153:0000:0000:d7fa:9ca5</p>
          <p>2607:f130:0000:0153:0000:0000:f239:9af0</p>
          <template #footer>
            <el-button @click="lax">DOWNLOAD TEST NOW!</el-button>
            <el-button @click="laxm">MORE INFORMATION</el-button>
          </template>
        </el-card>
      </el-col>
      <el-col>
        <el-card class="project-card" shadow="hover">
          <template #header>
            <div class="card-header">
              <span>Global , CloudflareCDN</span>
            </div>
          </template>
          <p>Domain:https://s.867678.xyz/speedtest</p>
          <p>Bucket using Cloudflare R2(EU) and Cloudflare CDN.</p>
          <img src="https://imagedelivery.net/wSMYJvS3Xw-n339CbDyDIA/456430b7-1c8f-42b0-71c0-586ad9172700/public" width="60%" height="300px" />
          <template #footer>
            <el-button @click="cf">DOWNLOAD TEST NOW!</el-button>
            <el-button @click="cfm">MORE INFORMATION</el-button>
          </template>
        </el-card>
      </el-col>
    </el-row>
    <el-divider />
    <el-card style="width: 100%" shadow="hover">
    <template #header>Copyright</template>
    <p>All projects are open source, and you can view the source code on GitHub.</p>
    <p>License usullay use GPLv3.</p>
    <p>2025 MoKanove All rights reserved.</p>
    </el-card>
</template>
<script setup>
const cfsp = () => {
  window.open('https://github.com/mokanove/servers', '_blank')
}
const osa = () => {
  window.open('https://jp-osa.867678.xyz:81/', '_blank')
}
const osam = () => {
  window.open('https://github.com/mokanove/servers/tree/main?tab=readme-ov-file#osaka--japan-', '_blank')
}
const lax = () => {
  window.open('https://us-lax.867678.xyz:81/', '_blank')
}
const laxm = () => {
  window.open('https://github.com/mokanove/servers/tree/main?tab=readme-ov-file#los-angeles--california--usa-', '_blank')
}
const cf = () => {
  window.open('https://s.867678.xyz/speedtest', '_blank')
  router.push('/speedtest')
}
const cfm = () => {
  window.open('https://github.com/mokanove/servers/tree/main?tab=readme-ov-file#cloudflare-free-services', '_blank')
}
</script>

<style>
.container {
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto;
}
.welcome-section {
  margin-bottom: 40px;
}
.welcome-card {
  text-align: center;
}
.project-section {
  margin-bottom: 40px;
}
.project-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s;
}
.project-card:hover {
  transform: translateY(-5px);
}
.project-img {
  max-width: 100%;
  height: auto;
  margin-top: 10px;
}
.card-header {
  font-weight: bold;
}
</style>