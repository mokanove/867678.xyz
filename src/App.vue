<template>
   <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false" @select="handleSelect">
    <el-menu-item index="0" @click="FirP">
      <el-avatar :size="60" src="https://empty" @error="errorHandler">
      <img src="/favicon.ico" />
    </el-avatar>
    </el-menu-item>
    <el-sub-menu index="1">
      <template #title>Home</template>
      <el-menu-item index="1-1" @click="Github">Github</el-menu-item>
      <el-menu-item index="1-2" @click="donate">Donate</el-menu-item>
      <el-menu-item index="1-3" @click="FirP">Real Home</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title >Mode(Test)</template>
      <el-menu-item index="2-1" @click="setDark">Dark Mode</el-menu-item>
      <el-menu-item index="2-2" @click="setLight">Light Mode</el-menu-item>
    </el-sub-menu>
  </el-menu>
  <router-view></router-view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useDark } from '@vueuse/core'

const isDark = useDark()
//const toggleDark = useToggle(isDark) it only just be dark mode , no light mode.
const setDark = () => {
  isDark.value = true
}

const setLight = () => {
  isDark.value = false
}
const errorHandler = () => true
const router = useRouter()
const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const FirP = () => {
  router.push('/')
}
const donate = () => {
  ElMessageBox.alert('USDT Tron:TBrZFA4NstpHTzQ5XNh6ocvidSin9C1Yc1', 'Donate', {
    confirmButtonText: 'OK',
    callback: () => {
      ElMessage({
        type: 'success',
        message: `Have a good day!`,
      })
    },
  })
}
const Github = () => {
  window.open('https://github.com/mokanove', '_blank')
}
</script>

<style scoped>
.el-menu--horizontal > .el-menu-item:nth-child(1) {
  margin-right: auto;
}
</style>
