<template>
  <el-page-header @back="bak">
    <template #content>
      <span class="text-large font-600 mr-3"> tkkhs </span>
    </template>
  </el-page-header>
    <h1>TKKHS PROJECT</h1>
    <p>Say what you want, it won't record it.</p>
      <textarea id="textInput" placeholder="Say At Here..." rows="5" wrap="soft"></textarea>
   <el-card style="width: 100%" shadow="never">
   <el-button type="info" @click="bak" :icon="Back">Back to homepage</el-button>
   <el-button type="primary" @click="sc" :icon="Document">View source code</el-button>
    <el-button type="success" @click="donate" :icon="Money">Donate</el-button>
    </el-card>
</template>

<script lang="ts" setup>
import { Document , Back , Money } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import { ElMessage, ElMessageBox } from 'element-plus'
const router = useRouter()
const bak = () => {
  router.push('/')
}
const sc = () => {
 window.open('https://github.com/mokanove/867678.xyz/blob/main/src/views/tkkhs.vue', '_blank')
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
</script>
<style>
.input-container {
      background-color: #ffffff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      width: 100%;
    }

    textarea {
      width: 99%;
      height: 500px;
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 10px;
      font-size: 16px;
      line-height: 1.5;
      resize: none;
      outline: none;
      transition: all 0.3s ease;
    }

    textarea:focus {
      border-color: #00aeff;
    }

    .placeholder {
      color: #888;
    }
    </style>