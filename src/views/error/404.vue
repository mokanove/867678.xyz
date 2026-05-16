<template>
  <div class="hero-container">
    <div class="content-box">
      <h1 class="title">404 <span class="accent">Not Found</span></h1>
      <div class="demo-collapse">
        <el-collapse v-model="activeNames">
          <el-collapse-item title="What happened?" name="1">
            <p>You may have entered a wrong path or the page has been moved.</p>
          </el-collapse-item>
          <el-collapse-item title="What can I do?" name="2">
            <p>Click the logo in the upper left corner or the button below to return.</p>
          </el-collapse-item>
        </el-collapse>
      </div>
      <div class="button-group">
        <el-button type="primary" class="md-btn" @click="$router.push('/')">
          Back to Homepage
        </el-button>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const activeNames = ref(['1'])
</script>
<style scoped>
.hero-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  padding: 20px;
}
.content-box {
  text-align: center;
}
.title {
  font: 800 clamp(3rem, 10vw, 6rem)/1.1 sans-serif;
  letter-spacing: -0.05em;
  margin-bottom: 40px;
}
.accent {
  color: var(--el-color-primary);
}
.demo-collapse {
  text-align: left;
  border: 2px solid #f0f0f0 !important;
  border-radius: 28px !important;
  padding: 15px 25px;
}
:deep(.el-collapse) {
  border: none !important;
}
:deep(.el-collapse-item__header) {
  font-size: 1.25rem !important;
  font-weight: 800 !important;
  border-bottom: none !important;
  height: 60px;
}
:deep(.el-collapse-item__wrap) {
  border-bottom: none !important;
}
:deep(.el-collapse-item__content) {
  font-size: 1rem !important;
  line-height: 1.6;
  padding-bottom: 20px;
}
.button-group {
  margin-top: 40px;
}
.md-btn {
  border-radius: 20px !important;
  padding: 15px 35px !important;
  height: auto !important;
  font-weight: 600;
  transition: transform 0.2s;
}
.md-btn:hover {
  transform: scale(1.05);
}
</style>