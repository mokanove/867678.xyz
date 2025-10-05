<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"  >
    <el-menu-item index="0">
      <el-avatar :size="55" src="/logo.png" @error="errorHandler" @click="bak"></el-avatar>
    </el-menu-item>
    <el-menu-item index="1" @click="bak"> <el-icon><HomeFilled /></el-icon>Home</el-menu-item>
    <el-sub-menu index="2">
      <template #title><el-icon><More /></el-icon>More</template>
      <el-menu-item index="2-1" @click="Github"><el-icon><Link /></el-icon>Github</el-menu-item>
      <el-menu-item index="2-2" @click="donate"><el-icon><Money /></el-icon>Donate</el-menu-item>
      <el-sub-menu index="2-3">
        <template #title><el-icon><SwitchFilled /></el-icon>Theme</template>
        <el-menu-item index="2-3-1" @click="setLight"><el-icon><Sunny /></el-icon>Light</el-menu-item>
        <el-menu-item index="2-3-2" @click="setDark"><el-icon><Moon /></el-icon>Dark</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
  </el-menu>
  <router-view></router-view>
</template>

<script lang="ts" setup>
//Header
import { ref , watch} from 'vue'
import { HomeFilled , More , Money , Link , SwitchFilled , Moon , Sunny} from '@element-plus/icons-vue'
const errorHandler = () => true
const activeIndex = ref('1')
//Theme
import { useDark, usePreferredDark } from '@vueuse/core'
const isDark = useDark()
const preferredDark = usePreferredDark()
const followSystem = ref(true)
watch(preferredDark, (val) => {
  if (followSystem.value) {
    isDark.value = val
  }
})
const setDark = () => {
  followSystem.value = false
  isDark.value = true
}
const setLight = () => {
  followSystem.value = false
  isDark.value = false
}
//Link
import { useBak } from './assets/pro'
const { bak } = useBak()
import { donate } from './assets/donate'
const Github = () => {  window.open('https://github.com/mokanove', '_blank')}
</script>

<style scoped>
.el-menu--horizontal > .el-menu-item:nth-child(1) {  margin-right: auto;}
.el-menu-demo { max-width: 99vw;  overflow-x: auto;}
</style>
