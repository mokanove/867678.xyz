<template>
  <el-breadcrumb :separator-icon="DArrowRight" >
  <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
  <el-breadcrumb-item :to="{ path: '/projects' }">Projects</el-breadcrumb-item>
  <el-breadcrumb-item>SpeedTest</el-breadcrumb-item>
  </el-breadcrumb>
  <h1>SpeedTest  | Mo</h1>
  <p>It will become a web service, similar to speedtest.net</p>
  <el-card shadow="hover">
    <template #header><div class="card-header"><span>HTTPS Download File</span></div></template>
    <el-select v-model="value" placeholder="Chooice a server">
    <el-option-group v-for="group in servers" :key="group.label" :label="group.label">
    <el-option v-for="item in group.options"  :key="item.value" :label="item.label"  :value="item.value"/>
    </el-option-group>
    </el-select><p></p>
          <el-button type="success" @click="dd(10)" plain>10MiB</el-button><el-divider direction="vertical" />
          <el-button type="primary" @click="dd(100)" plain>100MiB</el-button><el-divider direction="vertical" />
          <el-button type="danger" @click="dd(300)" plain>300MiB</el-button><p></p>
   </el-card><p></p>
   <el-card shadow="hover">
    <p id="sip">Getting your IP...</p>
    <img src="https://skillicons.dev/icons?i=nginx,linux,ubuntu,vite,workers" height="25px"/><el-divider direction="vertical" />
    <el-link href="https://github.com/mokanove/867678.xyz/blob/main/src/views/projects/speedtest.vue" target="_blank" type="primary">View Source Code</el-link><el-divider direction="vertical" />
    <el-link href="https://github.com/mokanove/867678.xyz/tree/main/servers#these-are-some-servers-with-special-features" target="_blank" type="primary">More information about those servers</el-link>
  </el-card>
</template>
<script lang="ts" setup>
//icons
import { DArrowRight } from '@element-plus/icons-vue'
//speedtest
//get user ip
import { ref, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
const userGeo = ref({ city: null as string | null, country: null as string | null }) 
const value = ref('cloudflare')
const servers = [
  { label: 'High Speed CDN', options: [{ value: 'cloudflare', label: 'Cloudflare', city: 'GLOBAL' }] },
  {
    label: 'Normal server',
    options: [
      { value: 'lax', label: 'Los Angeles , California , United States : CloudCone 1Gbps', city: 'Los Angeles'},
      { value: 'osa', label: 'Osaka , Kansai , Japan : Evoxt 1Gbps', city: 'Osaka'},
    ],
  },
]
const urls = {
  cloudflare: 'https://r2.867678.xyz',
  lax: 'https://us-lax1.867678.xyz',
  osa: 'https://jp-osa1.867678.xyz',
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
  window.open(`${selectedUrl}/${size}.bin`)
}
</script>