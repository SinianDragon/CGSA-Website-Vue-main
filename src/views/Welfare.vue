<script setup lang="ts">
import { ref, onMounted, defineAsyncComponent, type Component } from "vue";
import { useLanguage } from "@/utils/language";
const { currentLanguage } = useLanguage();

interface Activity {
  title: string;
  titleEn: string;
  component?: Component;
  imageUrl?: string;
}

const Activities: Activity[] = [
  {
    title: "IERF学位认证全步骤指南",
    titleEn: "IERF Verification Guideline",
    component: defineAsyncComponent(() => import("@/views/welfares/IERF.vue")),
  },
];

// 当前选中的活动
const selectedActivity = ref<Activity | null>(null);

// 页面加载后自动显示最新活动的第一项
onMounted(() => {
  if (Activities.length > 0) {
    selectedActivity.value = Activities[0];
  }
});
</script>

<template>
  <div class="activity-page">
    <!-- 左侧目录 -->
    <aside class="sidebar">
      <h2>新生福利</h2>
      <details open>
        <summary>新生攻略</summary>
        <ul>
          <li v-for="(activity, i) in Activities" :key="i" @click="selectedActivity = activity"
            :class="{ active: selectedActivity?.title === activity.title }">
            {{ currentLanguage === "en" ? activity.titleEn : activity.title }}
          </li>
        </ul>
      </details>
    </aside>

    <!-- 右侧内容：动态加载组件 -->
    <main class="content">

      <div v-if="selectedActivity" class="card shadow-sm activity-detail">
        <component v-if="selectedActivity?.component" :is="selectedActivity.component" />
      </div>
      <div v-else class="placeholder">
        <p>
          {{
            currentLanguage === "en"
              ? "Select an activity to view details."
              : "请选择一个活动查看详情。"
          }}
        </p>
      </div>
    </main>
  </div>
</template>

<style scoped lang="scss">
@use "@/styles/main.scss" as *;

.content {
  flex: 1;
  min-height: 400px;

  .activity-detail {
    max-width: 800px;
    margin: auto;

    .card-img-top {
      max-height: 300px;
      object-fit: cover;
    }

    .btn {
      margin-top: 1rem;
    }
  }

  .placeholder {
    text-align: center;
    color: #666;
    padding: 3rem 1rem;
  }
}
</style>
