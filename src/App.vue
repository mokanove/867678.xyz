<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"  >
    <el-menu-item index="0">
      <el-avatar :size="55" src="/logo.png" @error="errorHandler" @click="bak"></el-avatar>
    </el-menu-item>
    <el-sub-menu index="1">
      <template #title><el-icon><Menu /></el-icon>Menu</template>
      <el-menu-item index="1-1" @click="AutoTheme"><el-icon><SwitchFilled /></el-icon>Follow System(Default)</el-menu-item>
      <el-menu-item index="1-2" @click="setLight"><el-icon><Sunny /></el-icon>Light</el-menu-item>
      <el-menu-item index="1-3" @click="setDark"><el-icon><Moon /></el-icon>Dark</el-menu-item>
    </el-sub-menu>
  </el-menu>
  <router-view></router-view>
</template>

<script lang="ts" setup>
//Header
import { ref , watch} from 'vue'
import { Menu  , SwitchFilled , Moon , Sunny} from '@element-plus/icons-vue'
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
const AutoTheme = () => {
  followSystem.value = true
  isDark.value = preferredDark.value
}
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
</script>

<style scoped>
.el-menu--horizontal > .el-menu-item:nth-child(1) {  margin-right: auto;}
.el-menu-demo { max-width: 99vw;  overflow-x: auto;}
</style>
