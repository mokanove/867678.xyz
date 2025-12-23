<template>
    <h1>404 Not Found</h1>
    <p></p>
  <div class="demo-collapse">
    <el-collapse v-model="activeNames">
      <el-collapse-item title="What's the happend?" name="1">
        <div>
          You may have entered the wrong path.
        </div>
      </el-collapse-item>
      <el-collapse-item title="What can I do?" name="2">
        <div>
          Click the logo in the upper left corner to return to the homepage.
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const activeNames = ref(['1'])
</script>
<style scoped>
.demo-collapse :deep(.el-collapse-item__content) {
  font-size: 20px !important; 
}
.demo-collapse :deep(.el-collapse-item__header) {
  font-size: 25px !important; 
  font-weight: bold;
}
</style>