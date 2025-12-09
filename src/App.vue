<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false" >
    <el-menu-item index="0">
      <el-avatar :size="55" src="/logo.png" @error="errorHandler" @click="bak"></el-avatar>
    </el-menu-item>
    <el-sub-menu index="1">
      <template #title><el-icon><Menu /></el-icon>Theme</template>
      <el-menu-item index="1-1" @click="setTheme('system')"><el-icon><SwitchFilled /></el-icon>Follow System(Default)</el-menu-item>
      <el-menu-item index="1-2" @click="setTheme('light')"><el-icon><Sunny /></el-icon>Light</el-menu-item>
      <el-menu-item index="1-3" @click="setTheme('dark')"><el-icon><Moon /></el-icon>Dark</el-menu-item>
    </el-sub-menu>
  </el-menu>
  <router-view></router-view>
</template>

<script lang="ts" setup>
//Header
import {ref,watch} from 'vue'
import {Menu,SwitchFilled ,Moon,Sunny} from '@element-plus/icons-vue'
const errorHandler = () => true
const activeIndex = ref('1')
//Link
import { useBak } from './assets/pro'
const { bak } = useBak()
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
type ThemeMode = 'system' | 'dark' | 'light';
const mapThemeState = (mode: ThemeMode) => {
  switch (mode) {
    case 'system':
      return { follow: true, dark: undefined };
    case 'dark':
      return { follow: false, dark: true };
    case 'light':
      return { follow: false, dark: false };
  }
};
const setTheme = (mode: ThemeMode) => {
  const state = mapThemeState(mode);
  followSystem.value = state.follow; 
  if (mode === 'system') {
    isDark.value = preferredDark.value; 
  } else if (state.dark !== undefined) {
    isDark.value = state.dark;
  }
};
</script>

<style scoped>
.el-menu--horizontal > .el-menu-item:nth-child(1) {  margin-right: auto;}
.el-menu-demo { max-width: 99vw;  overflow-x: auto;}
</style>
