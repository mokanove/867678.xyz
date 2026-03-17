<template>
  <el-timeline>
    <el-timeline-item timestamp="2026/03/17 (v3.4.5)" placement="top">
      <el-card class="log-card" shadow="never">
        <p>Minor fixes and speedtest API replacement.</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2026/03/02 (v3.4.4)" placement="top">
      <el-card class="log-card" shadow="never">
        <p>A new logo now released.</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2026/01/18 (v3.4.3)" placement="top">
      <el-card class="log-card" shadow="never">
        <p>Some style change.</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2026/01/17 (v3.4.2)" placement="top">
      <el-card class="log-card" shadow="never">
        <p>This webpage has undergone significant design changes and is based on the Material 3 design.</p>
      </el-card>
    </el-timeline-item>
    </el-timeline>
</template>
<style scoped>
:deep(.el-timeline) {
  padding-left: 10px;
  --el-timeline-node-size-normal: 12px;
}
:deep(.el-timeline-item__node) {
  background-color: var(--el-color-primary) !important;
  border: 4px solid var(--el-color-primary-light-9);
  box-sizing: content-box;
}
:deep(.el-timeline-item__tail) {
  border-left: 2px solid #f0f0f0 !important;
  left: 5px;
}
:deep(.el-timeline-item__timestamp) {
  font-family: monospace;
  font-weight: 800;
  color: #999;
  letter-spacing: -0.02em;
  margin-bottom: 8px !important;
  font-size: 0.85rem;
}
.log-card {
  border: 2px solid #f0f0f0 !important;
  border-radius: 24px !important;
  background: #fff !important;
  margin-bottom: 10px;
}
:deep(.el-card__body) {
  padding: 16px 20px !important;
}
.log-card p {
  font-size: 0.95rem;
  line-height: 1.4;
  color: #444;
  margin: 0;
  font-weight: 500;
}
.archive-entrance-card {
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e7eb 100%) !important;
  border: 2px dashed #dcdfe6 !important;
  border-radius: 32px !important;
  text-align: center;
  padding: 40px 20px !important;
  cursor: pointer;
  transition: all 0.3s ease;
}
.archive-entrance-card:hover {
  transform: translateY(-5px);
  border-style: solid !important;
  border-color: var(--el-color-primary) !important;
}
.archive-icon {
  font-size: 2.5rem;
  margin-bottom: 12px;
  display: block;
}
.archive-title {
  font-size: 1.4rem;
  font-weight: 800;
  color: #333;
  margin: 0;
}
.archive-desc {
  font-size: 0.9rem;
  color: #777;
  margin-top: 8px;
}
</style>