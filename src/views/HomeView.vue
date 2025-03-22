<template>
  <div id="hola">
    <center>
      <h1>Hello! Welcome to Privacidad Mo Kanove's website</h1>
      <p>Uh... ago called sarmioe</p>
    </center>
    <el-card style="max-width: 98%" shandow="hover">
      <el-button type="info" @click="Github">Github</el-button>
      <el-divider direction="vertical" />
      <el-button @click="xes">XES</el-button>
      <el-button @click="MoSIUTER">MoSIUTER</el-button>
      <el-button @click="ezgo">ezgo</el-button>
      <el-button @click="tkkhs">tkkhs</el-button>
      <el-divider direction="vertical" />
      <el-button type="danger" @click="cfsp">Speedtest</el-button>
      <el-button @click="tyo">Tokyo , Japan</el-button>
      <el-button @click="lacus">Los Angeles , California , US</el-button>
      <el-button @click="cf">Global , Cloudflare CDN</el-button>
      <el-divider direction="vertical" />
      <el-button type="warning" @click="Donate">Donate</el-button>
      <el-button @click="USDT">USDT</el-button>
      <el-button @click="PP">PayPal</el-button>
    </el-card>
    <el-divider />
    <p>So just this , no more.</p>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'

const router = useRouter()
const xes = () => {
  window.open(
    'https://github.com/sarmioe/xes?tab=readme-ov-file#the-xes-operating-system',
    '_blank',
  )
}
const MoSIUTER = () => {
  window.open('https://github.com/sarmioe/mosiuter', '_blank')
}
const ezgo = () => {
  window.open('https://github.com/sarmioe/ezgo', '_blank')
}
const tkkhs = () => {
  router.push('/tkkhs')
}
const cfsp = () => {
  window.open('https://github.com/sarmioe/servers', '_blank')
}
const Github = () => {
  window.open('https://github.com/sarmioe', '_blank')
}
const tyo = () => {
  window.open('https://jp.867678.xyz:82/', '_blank')
}
const lacus = () => {
  window.open('https://us.867678.xyz:82/', '_blank')
}
const cf = () => {
  window.open('https://s.867678.xyz/speedtest', '_blank')
  router.push('/spt')
}
const Donate = () => {
  ElNotification({
    title: 'Uh...',
    message: "I didn't add any functionality to this button.",
    type: 'info',
  })
}
const USDT = () => {
  ElNotification({
    title: 'Thank you for choosing to donate',
    message:
      'We currently only support the TRC20 network, the address is:TBrZFA4NstpHTzQ5XNh6ocvidSin9C1Yc1',
    type: 'success',
  })
  setTimeout(() => {
    ElNotification({
      title: 'WARNING',
      message:
        '1USDT will be deducted as a handling fee, please be aware. And donations cannot be refunded',
      type: 'warning',
    })
  }, 10)
}
const PP = () => {
  window.open('https://www.paypal.com/paypalme/mpjysk?country.x=C2&locale.x=zh_XC', '_blank')
}
</script>
