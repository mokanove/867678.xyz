<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"  >
    <el-menu-item index="0">
      <el-avatar :size="55" src="/logo.png" @error="errorHandler" @click="bak"></el-avatar>
    </el-menu-item>
    <el-menu-item index="1" @click="bak">Home</el-menu-item>
    <el-sub-menu index="2">
      <template #title>Other</template>
      <el-menu-item index="2-1" @click="Github">Github</el-menu-item>
      <el-menu-item index="2-2" @click="donate">Donate</el-menu-item>
      <el-sub-menu index="2-3">
        <template #title>Theme</template>
        <el-menu-item index="2-3-1" @click="setDark">Dark</el-menu-item>
        <el-menu-item index="2-3-2" @click="setLight">Light</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
  </el-menu>
  <router-view></router-view>
</template>

<script lang="ts" setup>
import { ref , watch} from 'vue'
import { useDark, usePreferredDark } from '@vueuse/core'
const errorHandler = () => true
const activeIndex = ref('1')
//Theme
const isDark = useDark()
const preferredDark = usePreferredDark()
const followSystem = ref(true)

watch(preferredDark, (val) => {
  if (followSystem.value) {
    isDark.value = val
  }
})
const setDark = () => {
  isDark.value = true
  followSystem.value = false
}
const setLight = () => {
  isDark.value = false
  followSystem.value = false
}
//Link
import { useBak } from './assets/pro'
const { bak } = useBak()
import { donate } from './assets/donate'
const Github = () => {
  window.open('https://github.com/mokanove', '_blank')
}
</script>

<style scoped>
.el-menu--horizontal > .el-menu-item:nth-child(1) {
  margin-right: auto;
}
.el-menu-demo {
  max-width: 99vw;
  overflow-x: auto;
}
</style>
