<template>
    <el-page-header @back="bak">
    <template #content>
      <span class="text-large font-600 mr-3"> tkkhs </span>
    </template>
  </el-page-header>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import type { RouteMeta } from 'vue-router';
import { useBak } from './pro'
const { bak } = useBak()

interface BreadcrumbItem {
  path: string;
  meta: RouteMeta;
}

const route = useRoute();
const breadcrumbs = ref<BreadcrumbItem[]>([]);

const generateBreadcrumbs = () => {
  breadcrumbs.value = route.matched
    .filter((item) => item.meta && item.meta.title)
    .map((item) => ({
      path: item.path,
      meta: item.meta,
    }));
};

watch(
  () => route.path,
  generateBreadcrumbs,
  { immediate: true }
);
</script>