<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useLanguage } from "@/utils/language";
const { currentLanguage } = useLanguage();

// 活动对象接口
interface Activity {
  title: string;
  titleEn: string;
  date: string;
  description: string;
  descriptionEn: string;
  imageUrl?: string;
  url?: string;
}

// 活动数据
const latestActivities: Activity[] = [
  {
    title: "2025中秋节活动",
    titleEn: "2025 MidAutumn",
    date: "2025-10-10",
    description:
      "吃月饼吃月饼吃月饼吃月饼吃月饼吃月饼吃月饼吃月饼吃月饼吃月饼吃月饼吃月饼吃月饼吃月饼吃月饼吃月饼吃月饼吃月饼吃月饼吃月饼吃月饼吃月饼吃月饼",
    descriptionEn:
      "MOOOOOoOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOnCAKE",
    imageUrl: "./src/assets/images/activities/activity_0.JPG",
    url: "https://ys.mihoyo.com/",
  },
];

const pastActivities: Activity[] = [
  {
    title: "2024中秋节活动",
    titleEn: "2024 MidAutumn",
    date: "2024-10-10",
    description: "看月亮看月亮看月亮看月亮看月亮看月亮看月亮看月亮看月亮看月亮看月亮看月亮看月亮看月亮看月亮看月亮看月亮看月亮看月亮看月亮看月亮看月亮看月亮看月亮看月亮看月亮看月亮看月亮看月亮看月亮看月亮看月亮看月亮看月亮看月亮",
    descriptionEn: "MOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOON",
    imageUrl: "./src/assets/images/activities/activity_1.JPG",
    url: "https://playvalorant.com/en-us/",
  },
];

// 当前选中的活动
const selectedActivity = ref<Activity | null>(null);

// 页面加载后自动显示最新活动的第一项
onMounted(() => {
  if (latestActivities.length > 0) {
    selectedActivity.value = latestActivities[0];
  }
});
</script>

<template>
  <div class="activity-page">
    <!-- 左侧目录 -->
    <aside class="sidebar">
      <h2>CGSA 活动</h2>

      <details open>
        <summary>最新活动</summary>
        <ul>
          <li
            v-for="(activity, i) in latestActivities"
            :key="i"
            @click="selectedActivity = activity"
            :class="{ active: selectedActivity?.title === activity.title }"
          >
            {{ currentLanguage === "en" ? activity.titleEn : activity.title }}
          </li>
        </ul>
      </details>

      <details>
        <summary>往期活动</summary>
        <ul>
          <li
            v-for="(activity, i) in pastActivities"
            :key="i"
            @click="selectedActivity = activity"
            :class="{ active: selectedActivity?.title === activity.title }"
          >
            {{ currentLanguage === "en" ? activity.titleEn : activity.title }}
          </li>
        </ul>
      </details>
    </aside>

    <!-- 右侧活动详情 -->
    <main class="content">
      <div v-if="selectedActivity" class="card shadow-sm activity-detail">
        <img
          v-if="selectedActivity.imageUrl"
          :src="selectedActivity.imageUrl"
          class="card-img-top"
          alt="活动图片"
        />
        <div class="card-body">
          <h3 class="card-title">
            {{
              currentLanguage === "en"
                ? selectedActivity.titleEn
                : selectedActivity.title
            }}
          </h3>
          <p class="text-muted mb-2">
            📅
            {{
              new Date(selectedActivity.date).toLocaleDateString(
                currentLanguage === "en" ? "en-US" : "zh-CN",
                { year: "numeric", month: "short", day: "numeric" }
              )
            }}
          </p>
          <p class="card-text">
            {{
              currentLanguage === "en"
                ? selectedActivity.descriptionEn
                : selectedActivity.description
            }}
          </p>

          <a
            v-if="selectedActivity.url"
            :href="selectedActivity.url"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-outline-primary"
          >
            {{ currentLanguage === "en" ? "View Details" : "查看详情" }}
          </a>
        </div>
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

.activity-page {
  display: flex;
  padding: 1rem;
  gap: 1.5rem;
}

.sidebar {
  width: 250px;
  background: #fafafa;
  padding: 1.2rem;
  border-right: 1px solid #ddd;

  h2 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    color: $usc-red;
  }

  details {
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding-left: 1rem;
    margin: 0;

    li {
      cursor: pointer;
      padding: 0.3rem 0;
      color: #333;

      &:hover {
        color: $usc-red;
        text-decoration: underline;
      }

      &.active {
        font-weight: bold;
        color: $usc-red;
      }
    }
  }
}

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
