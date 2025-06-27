<template>
  <div id="hola">
    <center>
      <h1>Hello! Welcome to Mo Kanove's website</h1>
      <p>Uh... ago called sarmioe</p>
    </center>
    <el-divider />
    <h1>Free highspeed speedtest servers.</h1>
    <p @click="cfsp">Support Iperf3 NOW! Cleck here to how to using iperf3 speedtest you upload and download speed.</p>
    <el-row :gutter="20" class="project-section">
      <el-col :span="8" :xs="24" :sm="12">
        <el-card class="project-card" shadow="hover">
          <template #header>
            <div class="card-header">
              <span>Osaka , Japan</span>
            </div>
          </template>
          <p>
Domain of the IPV4:jp.867678.xyz<br>
Domain of the IPV4 with CloudflareCDN:jp2.867678.xyz<br>
IPv4:<br>
166.88.100.243<br>
IPv6:<br>
2400:8d60:8:0000:0000:0000:0c0b:1ea8<br></p>
          <template #footer>
            <el-button @click="osa">Download a 300MB speedtest file</el-button>
          </template>
        </el-card>
      </el-col>

      <el-col :span="8" :xs="24" :sm="12">
        <el-card class="project-card" shadow="hover">
          <template #header>
            <div class="card-header">
              <span>Los Angeles , California , US</span>
            </div>
          </template>
          <p>
Domain of the IPV4:us.867678.xyz<br>
Domain of the IPV4 with CloudflareCDN:us2.867678.xyz<br>
IPv4:<br>
74.48.125.113<br>
IPv6(All the three IPs):<br>
2607:f130:0000:0153:0000:0000:ae12:43b5<br>
2607:f130:0000:0153:0000:0000:d7fa:9ca5<br>
2607:f130:0000:0153:0000:0000:f239:9af0<br>
</p>
          <template #footer>
            <el-button @click="lacus">Download a 300MB speedtest file</el-button>
          </template>
        </el-card>
      </el-col>
      <el-col :span="8" :xs="24" :sm="12">
        <el-card class="project-card" shadow="hover">
          <template #header>
            <div class="card-header">
              <span>Global , CloudflareCDN</span>
            </div>
          </template>
          <p>Domain:s.867678.xyz/speedtest</p>
          <template #footer>
            <el-button @click="cf">Download a 300MB speedtest file</el-button>
          </template>
        </el-card>
      </el-col>
    </el-row>
    <el-divider />
    <h1>Github Projects</h1>
    <p>Maybe can't be running.</p>
    <el-row :gutter="20" class="project-section">
      <el-col :span="8" :xs="24" :sm="12">
        <el-card class="project-card" shadow="hover">
          <template #header>
            <div class="card-header">
              <span>XES Operating System</span>
            </div>
          </template>
          <p>
            It's an operating system in development.<br>
            <img
              src="../assets/xes logo.png"
              alt="XES Logo"
              class="project-img"
            />
          </p>
          <template #footer>
            <el-button @click="xes">Link to Github</el-button>
          </template>
        </el-card>
      </el-col>

      <el-col :span="8" :xs="24" :sm="12">
        <el-card class="project-card" shadow="hover">
          <template #header>
            <div class="card-header">
              <span>MoSIUTER</span>
            </div>
          </template>
          <p>
            A modern encryption protocol.<br>
            This protocol uses multi-mode obfuscation + encryption to transmit your data, ensuring that even if others get your data, they don't know your true intentions, and disguise it like a normal Internet request.<br>
            Both the transmission protocol and encryption features are specified by an IV, and this IV changes every few minutes to ensure that the data packet cannot be judged by the DPI rules.<br>
            First, your data will be optimized, then encrypted with snowflake or obfs4 to remove features, and then encrypted with TLS, so that the data packet looks like normal Internet encrypted data.
          </p>
          <template #footer>
            <el-button @click="MoSIUTER">Link to Github</el-button>
          </template>
        </el-card>
      </el-col>

      <el-col :span="8" :xs="24" :sm="12">
        <el-card class="project-card" shadow="hover">
          <template #header>
            <div class="card-header">
              <span>ezgo</span>
            </div>
          </template>
          <p>
            This tool makes Go and Git easy to use. Just do it like this: ezgo -f to directly format the Go language code.<br><br>
            Compared with Git and Go, which require remembering complex commands and a lot of interactions, ezgoit makes them simpler.<br>
            ezgoit comes from: Easy+Go+Git. When it is actually running, it is simplified to ezgo for easy operation.<br>
            Open source tool, conditionally open source based on GPLv3 license.
          </p>
          <template #footer>
            <el-button @click="ezgo">Link to Github</el-button>
          </template>
        </el-card>
      </el-col>
      <el-col :span="8" :xs="24" :sm="12">
        <el-card class="project-card" shadow="hover">
          <template #header>
            <div class="card-header">
              <span>tkkhs</span>
            </div>
          </template>
          <p>
            This page will not record anything. If you have something you want to say but are afraid others will know, feel free to say it.<br>
            If you too afraid , Please download the index.html file and run in your computer.<br>
            Only you know that , Right?<br>
          </p>
          <template #footer>
            <el-button @click="tkkhsp">Link to Github</el-button>
            <el-button @click="tkkhs">Test at this page</el-button>
          </template>
        </el-card>
      </el-col>
    </el-row>
  <el-divider />
    <p>Copyright 2025 mokanove.</p>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const xes = () => {
  window.open(
    'https://github.com/mokanove/xes?tab=readme-ov-file#the-xes-operating-system',
    '_blank',
  )
}
const MoSIUTER = () => {
  window.open('https://github.com/mokanove/mosiuter', '_blank')
}
const ezgo = () => {
  window.open('https://github.com/mokanove/ezgo', '_blank')
}
const tkkhs = () => {
  router.push('/tkkhs')
}
const tkkhsp = () => {
  window.open('https://github.com/mokanove/tkkhs', '_blank')
}
const cfsp = () => {
  window.open('https://github.com/mokanove/servers', '_blank')
}
const osa = () => {
  window.open('https://jp.867678.xyz:82/', '_blank')
}
const lacus = () => {
  window.open('https://us.867678.xyz:82/', '_blank')
}
const cf = () => {
  window.open('https://s.867678.xyz/speedtest', '_blank')
  router.push('/spt')
}
</script>
<style>
.container {
  padding: 20px;
  max-width: 1200px;
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
