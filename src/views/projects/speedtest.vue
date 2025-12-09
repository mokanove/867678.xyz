<template>
  <el-breadcrumb :separator-icon="DArrowRight" >
  <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
  <el-breadcrumb-item :to="{ path: '/projects' }">Projects</el-breadcrumb-item>
  <el-breadcrumb-item>SpeedTest</el-breadcrumb-item>
  </el-breadcrumb>
  <h1>SpeedTest  | Mo</h1>
   <el-card shadow="hover">
    <img src="https://skillicons.dev/icons?i=nginx,linux,ubuntu,vite,workers" height="30px"/><el-divider direction="vertical" />
    <el-button @click="sc()">Source Code</el-button>
  </el-card>  <p></p>
  <el-row :gutter="10">
  <el-col :xs="24" :sm="12" :md="12" :lg="12">
  <el-card shadow="hover">
    <h1>Download Speed</h1>
    <h2>0Mbps</h2>
  </el-card>
  </el-col>
  <el-col :xs="24" :sm="12" :md="12" :lg="12">
  <el-card shadow="hover">
    <h1>Upload Speed</h1>
    <h2>0Mbps</h2>
  </el-card>
 </el-col>
</el-row><p></p>
  <el-row :gutter="10">
  <el-col :xs="24" :sm="12" :md="12" :lg="12">
  <el-card shadow="hover">
    <h2>Client info</h2>
    <h3 id="sip">Getting your IP...</h3>
  </el-card>
  </el-col>
  <el-col :xs="24" :sm="12" :md="12" :lg="12">
  <el-card shadow="hover">
    <h2>Server info</h2>
    <h3>Searching server...</h3>
  </el-card>
 </el-col>
</el-row><p></p>
  <el-card shadow="hover">
    <el-text>Manual:</el-text>
    <el-select v-model="value" placeholder="Chooice a server">
    <el-option-group v-for="group in servers" :key="group.label" :label="group.label">
    <el-option v-for="item in group.options"  :key="item.value" :label="item.label"  :value="item.value"/>
    </el-option-group>
    </el-select><p></p>
      <el-button @click="dd(10240)" plain>1MiB</el-button><el-divider direction="vertical" />
      <el-button type="info" @click="dd(10240000)" plain>10MiB</el-button><el-divider direction="vertical" />
      <el-button type="primary" @click="dd(51200000)" plain>50MiB</el-button><el-divider direction="vertical" />
      <el-button type="success" @click="dd(102400000)" plain>100MiB</el-button><el-divider direction="vertical" />
      <el-button type="warning" @click="dd(204800000)" plain>200MiB</el-button><el-divider direction="vertical" />
      <el-button type="danger" @click="dd(300000000)" plain>300MiB</el-button>
   </el-card>
</template>
<script lang="ts" setup>
//icons
import { DArrowRight } from '@element-plus/icons-vue'
//link
const sc = () =>{
  window.open("https://github.com/mokanove/867678.xyz/blob/main/src/views/projects/speedtest.vue" , "_blank")
}
//speedtest
//get user ip
import { ref, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
const userGeo = ref({ city: null as string | null, country: null as string | null }) 
const value = ref('cloudflare')
const servers = [
  { 
    label: 'High Speed CDN', 
    options: [
      { value: 'cloudflare', label: 'Cloudflare', city: 'GLOBAL' },
    ]
  },
  {
    label: 'Normal server',
    options: [
      { value: 'lax', label: 'Los Angeles , California , United States : CloudCone 1Gbps', city: 'Los Angeles'},
      { value: 'osa', label: 'Osaka , Kansai , Japan : Evoxt 1Gbps', city: 'Osaka'},
    ],
  },
]
const urls = {
  cloudflare: 'https://speed.cloudflare.com/__down?during=download&bytes=',
  lax: 'https://us-lax1.867678.xyz/',
  osa: 'https://jp-osa1.867678.xyz/',
}
async function fetchIpAddresses() {
  const ipElement = document.getElementById('sip')
  if (!ipElement) return
  const GetIP = async (url: string, type: string) => {
    try {
      const response = await fetch(url)
      if (!response.ok) throw new Error(`Network error : ${type}`)
      const data = await response.json()
      return { type, data: { ip: data.ip, city: data.city, country: data.country } }
    } catch (error) {
      return { type, data: { ip: `Get ${type} failed`, city: null, country: null } }
    }
  }
  const results = await Promise.allSettled([
    GetIP('https://ipinfo.io/json', 'IPv4'),
    GetIP('https://v6.ipinfo.io/json', 'IPv6')
  ])
  let ipInfo = ''
  let cityInfo = ''
  results.forEach(result => {
    if (result.status === 'fulfilled') {
      const { type, data } = result.value
      const { ip, city, country } = data
      if (!cityInfo && city) {
        userGeo.value.city = city
        userGeo.value.country = country
      }
      ipInfo += `${type} is: ${ip}${city ? ` (${city})` : ''}\n`
    } else {
       ipInfo += `Get ${result.reason?.message?.includes('IPv6') ? 'IPv6' : 'IPv4'} failed\n`
    }
  })
  ipElement.innerHTML = (cityInfo + ipInfo).replace(/\n/g, '<br>')
}
const autoSelectServer = () => {
  const { city: userCity, country: userCountry } = userGeo.value
  let selectedValue = 'cloudflare', matchFound = false
  if (userCountry === 'CN' || userCountry === 'RU') {
    selectedValue = 'osa'
    matchFound = true
  }
  if (!matchFound && userCity) {
    const normCity = userCity.toLowerCase()
    for (const opt of servers.find(g => g.label === 'Normal server')?.options || []) {
      if (opt.city?.toLowerCase() === normCity) {
        selectedValue = opt.value
        matchFound = true
        break
      }
    }
  }
  value.value = selectedValue
  if (!matchFound && selectedValue === 'cloudflare') {
     ElMessage({ type: 'info', message: 'The rule was not hit, and the default option was recursively applied.' })
  }
}
onMounted(async () => {
  await fetchIpAddresses()
  autoSelectServer()
})
//dd
const dd = (size: number) => {
  const selectedUrl = urls[value.value as keyof typeof urls]
  if (!selectedUrl) {
    ElMessage({ type: 'error', message: 'Please select a server first.' })
    return
  }
  window.open(`${selectedUrl}${size}`)
}
</script>