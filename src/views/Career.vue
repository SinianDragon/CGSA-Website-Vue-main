<script setup lang="ts">
import { ref, onMounted, defineAsyncComponent } from "vue";
import { useLanguage } from "@/utils/language";
const { currentLanguage } = useLanguage();

function scrollToAnchor(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

interface Activity {
  title: string;
  titleEn: string;
  component?: any;
  imageUrl?: string;
  anchors?: { id: string; title: string; titleEn?: string }[];
}

const CGSACareerList: Activity[] = [
  // === CGSA职业 ===
  {
    title: "USC CGSA职业发展部",
    titleEn: "USC CGSA Career Development Department",
    component: defineAsyncComponent(() =>
      import("@/views/careers/CGSADept.vue")
    ),
  },
];

const CareerResourceList: Activity[] = [
  // === 求职资源 ===
  {
    title: "学校资源",
    titleEn: "University Resources",
    component: defineAsyncComponent(() =>
      import("@/views/careers/resources/University.vue")
    ),
  },
  {
    title: "美国资源",
    titleEn: "U.S. Career Resources",
    component: defineAsyncComponent(() =>
      import("@/views/careers/resources/US.vue")
    ),
  },
  {
    title: "招聘季",
    titleEn: "Recruiting Season",
    component: defineAsyncComponent(() =>
      import("@/views/careers/resources/Recruiting.vue")
    ),
  },
];

const VisaInfoList: Activity[] = [
  // === 签证资讯 ===
  {
    title: "CPT/OPT",
    titleEn: "CPT/OPT",
    component: defineAsyncComponent(() =>
      import("@/views/careers/visa/CPTOPT.vue")
    ),
    anchors: [
    { id: "top", title: "CPT/OPT 介绍", titleEn: "CPT/OPT Overview" },
    { id: "cpt_intro", title: "CPT课外实习训练", titleEn: "CPT Introduction" },
    { id: "cpt_people", title: "CPT适用人群", titleEn: "CPT Eligibility" },
    { id: "cpt_apply", title: "申请CPT", titleEn: "Applying for CPT" },
    { id: "opt_intro", title: "OPT选择性实践训练", titleEn: "OPT Introduction" },
    { id: "opt_people", title: "OPT适用人群", titleEn: "OPT Eligibility" },
    { id: "opt_apply", title: "申请OPT", titleEn: "Applying for OPT" },
    { id: "opt_notice", title: "OPT注意事项", titleEn: "OPT Notes" },
    ],
  },
  {
    title: "H1B",
    titleEn: "H1B",
    component: defineAsyncComponent(() =>
      import("@/views/careers/visa/H1B.vue")
    ),
    anchors: [
    { id: "h1b-intro", title: "H-1B介绍", titleEn: "Introduction to H-1B" },
    { id: "h1b-definition", title: "H-1B定义，申请要求", titleEn: "Definition and Eligibility Requirements" },
    { id: "h1b-quota", title: "H-1B配额管理", titleEn: "Quota Management" },
    { id: "h1b-process", title: "H-1B申请流程", titleEn: "Application Procedure" },
    { id: "h1b-electronic", title: "H-1B电子化流程以及注意事项", titleEn: "Digital Application Workflow and Notes" },
    ],
  },
];

const TipsList: Activity[] = [
  // === 求职锦囊 ===
  {
    title: "求职锦囊",
    titleEn: "Career Tips",
    component: defineAsyncComponent(() =>
      import("@/views/careers/tips/Tips.vue")
    ),
  },
];

const sections = [
  { title: "CGSA职业", titleEn: "CGSA Career", list: CGSACareerList },
  { title: "求职资源", titleEn: "Career Resources", list: CareerResourceList },
  { title: "签证资讯", titleEn: "Visa Info", list: VisaInfoList },
  { title: "求职锦囊", titleEn: "Career Tips", list: TipsList },
];

// 当前选中的活动
const selectedActivity = ref<Activity | null>(null);

// 页面加载后自动显示最新活动的第一项
onMounted(() => {
  if (CGSACareerList.length > 0) {
    selectedActivity.value = CGSACareerList[0];
  }
});
</script>

<template>
  <div class="activity-page">
    <!-- 左侧目录 -->
    <aside class="sidebar">
      <h2>CGSA职业</h2>
      <details v-for="(section, idx) in sections" :key="idx" open>
        <summary>{{ currentLanguage === "en" ? section.titleEn : section.title }}</summary>
        <ul>
          <li
            v-for="activity in section.list"
            :key="activity.title"
            @click="selectedActivity = activity"
            :class="{ active: selectedActivity?.title === activity.title }"
          >
            {{ currentLanguage === "en" ? activity.titleEn : activity.title }}
            <!-- anchors --> 
            <ul v-if="selectedActivity?.title === activity.title && activity.anchors">
              <li
                v-for="anchor in activity.anchors"
                :key="anchor.id"
                class="anchor-link"
                @click.stop="scrollToAnchor(anchor.id)"
              >
                - {{ currentLanguage === "en" ? anchor.titleEn : anchor.title }}
              </li>
            </ul>
          </li>
        </ul>
      </details>
    </aside>

    <!-- 右侧内容：动态加载组件 -->
    <main class="content">
      
      <div v-if="selectedActivity" class="card shadow-sm activity-detail">
      <component
        v-if="selectedActivity?.component"
        :is="selectedActivity.component"
      />
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
