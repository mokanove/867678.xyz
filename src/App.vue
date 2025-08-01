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
    <h1>Thank You!</h1>
    <p>
      If you browser no anwser ,<a href="./speedtest" style="color: blue">click here</a>
    </p>
    <el-card style="width: 100%" shadow="hover">
    <template #header>File information</template>
    <p>Creat using : dd if=/dev/zero of=speedtest bs=1M count=286</p>
    <p>File size: 286MiB(300,000,000Bytes)</p>
    <p>MD5:4baf99888b333a7330f5c97c17e5a9df</p>
    <p>SHA1:7779624bf383486e52118a1a6157bd282795f29b</p>
    <p>SHA256:e8671610daa5dc152578d9bfe8e25346aa73fa600f908b235f55bf51d0eb5a05</p>
    <p>SHA512:4b5dafa675246d1393d620c717af4ef7a3b0041ae87e3553d7e00e5b99d3cb065a21a467299b403930c06afa4d8fb069bfd412eed7e9b81d0bd81dcd63d2a90c</p>
  </el-card>
  <el-divider />
  <el-card style="width: 100%" shadow="hover">
    <template #header>Server information</template>
    <p>Temporarily unavailable...</p>
  </el-card>
</div>
<div>

</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('0')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const FirP = () => {
  window.open('')
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
