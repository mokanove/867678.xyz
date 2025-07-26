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
      If you browser no anwser ,<a href="https://s.867678.xyz/speedtest" style="color: blue">click here</a>
    </p>
  <el-card style="max-width: 98%">
    <template #header>
      <div class="card-header">
        <span>File information</span>
        <br>
        <p></p>
      </div>
    </template>
    <p>Creat using : dd if=/dev/zero of=speedtest bs=1M count=300</p>
    <p>File size: 300MB</p>
    <p>MD5:0d97a9cd8bbd7ce75a2a76bb06258915</p>
    <p>SHA256:17a88af83717f68b8bd97873ffcf022c8aed703416fe9b08e0fa9e3287692bf0</p>
    <p>SHA512:6a7b4118945e8ef03063cbe92e1acfe0144520a8eb0bf32735ffc40dc73faf23f2a16c51a48bc91853a74d0999a1497c7ce1e7ac61b07bd67b6c426249285e0c</p>
    <p></p>
  </el-card>
  <el-divider />
  <el-card style="max-width: 98%">
    <template #header>
      <div class="card-header">
        <span>Server information</span>
        <br>
        <p>Info from ipinfo.io and I recommend you to use ipinfo, their data is very reliable.</p>
      </div>
    </template>
    <p>I admit that I'm stuck here, so I'll write this down first and solve it later</p>
    <p></p>
  </el-card>
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
