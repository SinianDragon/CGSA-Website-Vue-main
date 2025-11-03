<script setup lang="ts">
import { computed } from "vue";
import { useLanguage } from "@/utils/language";
import { departments, getImageUrl } from "@/utils/departmentData";
import type { Department } from "@/utils/departmentData";

const { currentLanguage } = useLanguage();

// 接收来自路由的 'id' 参数 (e.g., 'event-planning')
const props = defineProps<{
  id: string;
}>();

// 根据 id 找到对应的部门数据
const dept = computed(() => {
  return departments.find(d => d.id === props.id);
});

</script>

<template>
  <div class="departments-page">
    <div v-if="dept" class="department-section card">
      <div class="card-body">
        <h2 class="card-title">
          {{ currentLanguage === "en" ? dept.nameEn : dept.name }}
        </h2>

        <img
            v-if="getImageUrl(dept.groupPhotoUrl)"
            :src="getImageUrl(dept.groupPhotoUrl)"
            :alt="dept.name"
            class="department-photo"
            :style="{ height: dept.photoHeight }"
        />
        <div v-else class="photo-placeholder" :style="{ height: dept.photoHeight }">
          {{ currentLanguage === "en" ? "Group Photo Coming Soon" : "部门合照" }}
        </div>

        <section>
          <h4>关于我们</h4>
          <p>{{ dept.about }}</p>
        </section>

        <section>
          <h4>部门职责</h4>
          <ul>
            <li v-for="(item, index) in dept.responsibilities" :key="index">
              {{ item }}
            </li>
          </ul>
        </section>

        <section>
          <h4>招新要求</h4>
          <ul>
            <li v-for="(item, index) in dept.requirements" :key="index">
              {{ item }}
            </li>
          </ul>
        </section>

        <section>
          <h4>个人收获</h4>
          <ul>
            <li v-for="(item, index) in dept.gains" :key="index">
              {{ item }}
            </li>
          </ul>
        </section>

        <section v-if="dept.pastActivities">
          <h4>往期活动</h4>
          <p>{{ dept.pastActivities }}</p>
        </section>

      </div>
    </div>
    <div v-else>
      <h2>Department Not Found</h2>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/styles/main.scss" as *;

.departments-page {
  font-size: 1rem;
  line-height: 1.7;
}
.department-section {
  margin-bottom: 2.5rem;
  border: none;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.card-body {
  padding: 2rem;
}

h2 {
  color: $usc-red;
  border-bottom: 2px solid #eee;
  padding-bottom: 0.5rem;
  margin-top: 0;
  font-weight: 600;
}

h4 {
  color: #333;
  font-weight: 700;
  margin-top: 1.5rem;
}

ul {
  padding-left: 1.2rem;
  li {
    margin-bottom: 0.25rem;
  }
}

.department-photo {
  width: 100%;
  /* 【关键修改】
    height 现在由 :style 动态设置
    max-height 和 height: auto 已被移除
  */
  object-fit: cover;
  object-position: center;
  border-radius: 8px;
  margin-bottom: 1.5rem;
}
.photo-placeholder {
  width: 100%;
  /* 【关键修改】
    height 现在也由 :style 动态设置
  */
  border-radius: 8px;
  background: #f0f0f0;
  color: #aaa;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
}
</style>
