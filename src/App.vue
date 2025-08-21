<template>
   <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false" @select="handleSelect">
    <el-menu-item index="0" @click="FirP">
      <img style="width: 100px;height: 50px;" src="/favicon.ico"/>
    </el-menu-item>
    <el-sub-menu index="1">
      <template #title @click="FirP">Home</template>
      <el-menu-item index="1-1" @click="Github">Github</el-menu-item>
      <el-menu-item index="1-2" @click="donate">Donate</el-menu-item>
      <el-menu-item index="1-3" @click="FirP">Real Home</el-menu-item>
    </el-sub-menu>
  </el-menu>
  <router-view></router-view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const FirP = () => {
  router.push('/')
}
const donate = () => {
  router.push('/')
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
