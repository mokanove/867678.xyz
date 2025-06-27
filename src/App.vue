<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item index="0" @click="FirP">
      <img style="width: 100px; height: 50px" src="/favicon.ico" alt="mokanove logo" />
    </el-menu-item>
    <el-menu-item index="0" @click="FirP">Home</el-menu-item>
    <el-sub-menu index="1">
      <template #title>Donate</template>
      <el-menu-item index="1-2" @click="USDT">USDT TRC20</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>Social Medias</template>
      <el-menu-item index="2-2" @click="Github">Github</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="3">
      <template #title>Projects</template>
      <el-menu-item index="3-1" @click="xes">XES</el-menu-item>
      <el-menu-item index="3-2" @click="tkkhs">tkkhs(test now)</el-menu-item>
      <el-sub-menu index="3-3">
        <template #title>Code of</template>
        <el-menu-item index="3-3-1" @click="cfs">this site</el-menu-item>
        <el-menu-item index="3-3-2" @click="cfsp">speedtest site</el-menu-item>
        <el-menu-item index="3-3-3" @click="tkkhsp">tkkhs</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="3-4">
        <template #title>Golang Projects</template>
        <el-menu-item index="3-4-1" @click="MoSIUTER">MoSIUTER</el-menu-item>
        <el-menu-item index="3-4-2" @click="ezgo">ezgo</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
  </el-menu>
  <router-view></router-view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'

const router = useRouter()
const activeIndex = ref('0')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const Github = () => {
  window.open('https://github.com/mokanove', '_blank')
}
const tkkhsp = () => {
  window.open('https://github.com/mokanove/tkkhs', '_blank')
}
const tkkhs = () => {
  router.push('/tkkhs')
}
const FirP = () => {
  router.push('/')
}
const xes = () => {
  window.open(
    'https://github.com/mokanove/xes?tab=readme-ov-file#the-xes-operating-system',
    '_blank',
  )
}
const cfs = () => {
  window.open('https://github.com/mokanove/867678.xyz', '_blank')
}
const cfsp = () => {
  window.open('https://github.com/mokanove/servers', '_blank')
}
const MoSIUTER = () => {
  window.open('https://github.com/mokanove/mosiuter', '_blank')
}
const ezgo = () => {
  window.open('https://github.com/mokanove/ezgo', '_blank')
}
const USDT = () => {
  ElNotification({
    title: 'Thank you for choosing to donate',
    message:
      'Only support the TRC20 network, the address is:TBrZFA4NstpHTzQ5XNh6ocvidSin9C1Yc1',
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
</script>

<style scoped>
.el-menu--horizontal > .el-menu-item:nth-child(1) {
  margin-right: auto;
}
</style>
