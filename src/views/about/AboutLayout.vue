<script setup lang="ts">
import { RouterView, RouterLink } from "vue-router";
import { useLanguage } from "@/utils/language";
// 导入我们创建的部门数据
import { departments } from "@/utils/departmentData";

const { currentLanguage } = useLanguage();

// 固定的链接
const staticLinks = [
  { path: "/about/cgsa-intro", text: "组织介绍", textEn: "CGSA Intro" },
  { path: "/about/board-members", text: "主席团成员", textEn: "Board Members" },
];
</script>

<template>
  <div class="about-us-container">
    <aside class="sidebar">
      <nav>
        <p>USC CGSA</p>
        <ul>
          <li v-for="link in staticLinks" :key="link.path">
            <router-link :to="link.path" class="nav-link">
              {{ currentLanguage === "en" ? link.textEn : link.text }}
            </router-link>
          </li>

          <details open class="nav-details">
            <summary class="nav-link">
              {{ currentLanguage === "en" ? "Departments" : "部门介绍" }}
            </summary>

            <ul class="submenu">
              <li v-for="dept in departments" :key="dept.id">
                <router-link
                    :to="'/about/department/' + dept.id"
                    class="nav-link sub-link"
                >
                  {{ currentLanguage === "en" ? dept.nameEn : dept.name }}
                </router-link>
              </li>
            </ul>
          </details>
        </ul>
      </nav>
    </aside>

    <main class="content">
      <RouterView />
    </main>
  </div>
</template>

<style scoped lang="scss">
@use "@/styles/main.scss" as *;

.about-us-container {
  display: flex;
  padding: 2rem;
  gap: 2rem;
  background-color: #fff;
}

.sidebar {
  width: 240px;
  flex-shrink: 0;
  background: #f9f9f9;
  border: 1px solid #eee;
  padding: 1.5rem;
  border-radius: 8px;
  height: fit-content;

  p {
    font-weight: bold;
    color: $usc-red;
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
}

/* 导航链接的通用样式 */
.nav-link {
  display: block;
  padding: 0.6rem 0.8rem;
  text-decoration: none;
  color: #333;
  border-radius: 5px;
  margin-bottom: 0.25rem;
  font-weight: 500;

  &:hover {
    background-color: #f0f0f0;
  }

  /* 顶级链接高亮 */
  &.router-link-active {
    background-color: $usc-red;
    color: white;
  }
}

/* 针对 <details> 子菜单的样式 */
.nav-details {

  /* 【关键修复】
    把样式应用到 <summary> 标签，而不是里面的链接
  */
  summary.nav-link {
    list-style: none; /* 移除 <summary> 默认的箭头 */
    cursor: pointer;
    &::-webkit-details-marker { display: none; }

    margin-bottom: 0; /* 覆盖 .nav-link 的边距 */
    position: relative;

    /* 手动添加一个箭头 */
    &::after {
      content: '▼';
      font-size: 0.6em;
      position: absolute;
      right: 1rem;
      top: 50%;
      transform: translateY(-50%);
      transition: transform 0.2s;
    }
  }

  /* 当 <details> 关闭时，旋转箭头 */
  &:not([open]) > summary.nav-link::after {
    transform: translateY(-50%) rotate(-90deg);
  }

  /* 子菜单的 ul (保持不变) */
  .submenu {
    padding-left: 1rem; /* 缩进 */
    margin-top: 0.25rem;
    border-left: 2px solid #eee;

    .sub-link {
      font-size: 0.9em;
      padding-top: 0.4rem;
      padding-bottom: 0.4rem;
      font-weight: 400;

      /* 子链接高亮时 (不是父链接) */
      &.router-link-active {
        font-weight: 700;
        color: $usc-red;
        background: #fdf0f0;
      }
    }
  }
}

/* 【关键修复】
  当子链接高亮时，我们也让父按钮 ("部门介绍") 保持高亮
  我们现在选择 summary 标签
*/
.submenu .router-link-active:closest(.nav-details) > summary.nav-link {
  background-color: $usc-red;
  color: white;
}


.content {
  flex: 1;
  min-width: 0;
}
</style>
