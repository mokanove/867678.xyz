<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"  >
    <el-menu-item index="0">
      <el-avatar :size="55" src="/logo.png" @error="errorHandler" @click="FirP"></el-avatar>
    </el-menu-item>
    <el-menu-item index="1" @click="FirP">Home</el-menu-item>
    <el-sub-menu index="2">
      <template #title>Other</template>
      <el-menu-item index="2-1" @click="Github">Github</el-menu-item>
      <el-menu-item index="2-2" @click="Donate">Donate</el-menu-item>
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
import { useRouter } from 'vue-router'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useDark, usePreferredDark } from '@vueuse/core'
const errorHandler = () => true
const router = useRouter()
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
const FirP = () => {
  router.push('/')
}
const Donate = () => {
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
.el-menu-demo {
  max-width: 100vw;
  overflow-x: auto;
}
</style>
