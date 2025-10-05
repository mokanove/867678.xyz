<template>
  <el-breadcrumb :separator-icon="DArrowRight" >
    <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: '/projects' }">Projects</el-breadcrumb-item>
    <el-breadcrumb-item>TKKHS</el-breadcrumb-item>
  </el-breadcrumb>
    <h1>TKKHS</h1>
    <textarea id="textInput" placeholder="Say At Here..." rows="5" wrap="soft"></textarea>
    <p></p>
   <el-card shadow="hover">
   <el-button type="info" @click="bak" :icon="Back">Back to homepage</el-button><el-divider direction="vertical" />
   <el-button type="primary" @click="sc" :icon="Document">View source code</el-button><el-divider direction="vertical" />
    <el-button type="success" @click="donate" :icon="Money">Donate</el-button>
    </el-card><p></p>
    <el-card shadow="hover">
    <p>Say what you want, it won't record it.</p>
    </el-card>
</template>

<script lang="ts" setup>
import { Document , Back , Money , DArrowRight } from '@element-plus/icons-vue'
import { useBak } from '../../assets/pro'
const { bak } = useBak()
import { donate } from '../../assets/donate'
const sc = () => {
 window.open('https://github.com/mokanove/867678.xyz/blob/main/src/views/projects/tkkhs.vue', '_blank')
}
</script>

<style lang="css">
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