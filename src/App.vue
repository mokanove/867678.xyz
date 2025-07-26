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
    <el-menu-item index="1" @click="hp">867678.xyz</el-menu-item>
  </el-menu>
  <div>
    <h1>Welcome to Mo Kanove's speedtest website</h1>
    <p>
      If you browser no anwser ,<a href="./speedtest" style="color: blue">click here</a>
    </p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const activeIndex = ref('0')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const FirP = () => {
  router.push('/')
}
const hp = () => {
  window.open('https://867678.xyz', '_blank')
}
</script>

<style scoped>
.el-menu--horizontal > .el-menu-item:nth-child(1) {
  margin-right: auto;
}
</style>
