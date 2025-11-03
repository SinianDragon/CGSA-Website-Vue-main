<script setup lang="ts">
import { RouterView, RouterLink } from "vue-router";
import { useLanguage } from "@/utils/language";

const { currentLanguage } = useLanguage();

// 侧边栏的链接
const sidebarLinks = [
  { path: "/about/cgsa-intro", text: "组织介绍", textEn: "CGSA Intro" },
  { path: "/about/board-members", text: "主席团成员", textEn: "Board Members" },
  { path: "/about/departments", text: "部门介绍", textEn: "Departments" },
];
</script>

<template>
  <div class="about-us-container">
    <aside class="sidebar">
      <nav>
        <p>USC CGSA</p>
        <ul>
          <li v-for="link in sidebarLinks" :key="link.path">
            <router-link :to="link.path" class="nav-link">
              {{ currentLanguage === "en" ? link.textEn : link.text }}
            </router-link>
          </li>
        </ul>
      </nav>
    </aside>

    <main class="content">
      <RouterView />
    </main>
  </div>
</template>

<style scoped lang="scss">
// 引入你的全局样式变量
@use "@/styles/main.scss" as *;

.about-us-container {
  display: flex;
  padding: 2rem;
  gap: 2rem;
  background-color: #fff; // 给个白色背景
}

.sidebar {
  width: 240px;
  flex-shrink: 0;
  background: #f9f9f9;
  border: 1px solid #eee;
  padding: 1.5rem;
  border-radius: 8px;
  height: fit-content; // 高度自适应

  p {
    font-weight: bold;
    color: $usc-red; //
    font-size: 1.2rem;
    border-bottom: 1px solid #ddd;
    padding-bottom: 0.75rem;
    margin-top: 0;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .nav-link {
    display: block;
    padding: 0.6rem 0.8rem;
    text-decoration: none;
    color: #333;
    border-radius: 5px;
    margin-bottom: 0.25rem;

    &:hover {
      background-color: #f0f0f0;
    }

    // 这是 Vue Router 自动添加的 class, 用于高亮当前路由
    &.router-link-active {
      background-color: $usc-red; //
      color: white;
      font-weight: 500;
    }
  }
}

.content {
  flex: 1; // 占据所有剩余空间
  min-width: 0; // 防止 flex 溢出
}
</style>
