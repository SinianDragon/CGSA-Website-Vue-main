<script setup lang="ts">
import { RouterView } from "vue-router";
import logo from "./assets/logo/cgsa_logo.png";
import logo2 from "./assets/logo/cgsa_logo2.png";
import { useLanguage } from "@/utils/language";

const { currentLanguage, setLanguage } = useLanguage();

// Navigation item interfaces
interface DropdownItem {
  text: string;
  textEn: string;
  href: string;
}

interface NavItem {
  text: string;
  textEn: string;
  href: string;
  isActive?: boolean;
  dropdown?: DropdownItem[];
}

// Navigation data
const navItems: NavItem[] = [
  {
    text: "主页",
    textEn: "Home",
    href: "/",
  },
  {
    text: "关于我们",
    textEn: "About Us",
    href: "#",
    dropdown: [
      { text: "组织介绍", textEn: "CGSA Intro", href: "/about/cgsa-intro" },
      {
        text: "主席团成员",
        textEn: "Board Members",
        href: "/about/board-members",
      },
      {
        text: "部门介绍",
        textEn: "Departments",
        href: "/about/departments",
      },
    ],
  },
  {
    text: "CGSA 校园",
    textEn: "CGSA Campus",
    href: "#",
    dropdown: [
      { text: "新生攻略", textEn: "Welfare", href: "/welfare" },
      { text: "折扣卡福利", textEn: "Discount Card", href: "/discounts" },
      { text: "CGSA 职业", textEn: "Career", href: "/career" },
      { text: "CGSA 活动", textEn: "Activity", href: "/activity" },
    ],
  },
  {
    text: "CGSA 校友",
    textEn: "CGSA Alumni",
    href: "/alumni",
  },
  {
    text: "联系我们",
    textEn: "Contact Us",
    href: "/contact",
  },
];

type FooterSection = {
  title: string;
  titleEn: string;
  links: { text: string; textEn: string; href?: string }[];
};

const footerSections: FooterSection[] = [
  {
    title: "关于我们",
    titleEn: "About Us",
    links: [
      { text: "组织介绍", textEn: "CGSA Intro", href: "/about/cgsa-intro" },
      { text: "联系我们", textEn: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "常用链接",
    titleEn: "Links",
    links: [
      {
        text: "USC官网",
        textEn: "usc.edu",
        href: "https://www.usc.edu/",
      },
      {
        text: "USC OIS官网",
        textEn: "USC OIS",
        href: "https://ois.usc.edu/",
      },
      {
        text: "洛杉矶华人资讯网",
        textEn: "ChineseInLA.com",
        href: "https://www.chineseinla.com/",
      },
    ],
  },
  {
    title: "开发人员",
    titleEn: "Developers",
    links: [
      { text: "卢云昆", textEn: "Yunkun Lu" },
      { text: "你的名字", textEn: "Your Name" },
    ],
  },
];
</script>

<template>
  <div id="app">
    <div class="header-content">
      <div class="d-flex justify-content-end align-items-center">
        <span class="language-icon material-symbols-outlined mx-2">translate</span>
        <!--Dropdown to toggle language-->
        <select v-model="currentLanguage" @change="
          (event) => setLanguage((event.target as HTMLSelectElement).value)
        " class="form-select lang-select" style="width: 100px">
          <option value="zh">中文</option>
          <option value="en">English</option>
        </select>
      </div>

      <!-- Stylized Banner/Header -->
      <div class="logo-section d-flex align-items-center">
        <img :src="logo" alt="CGSA Logo" class="logo" />
        <div class="org-name">
          <div><span class="usc">USC</span> Chinese Graduate</div>
          <div>Student Association</div>
        </div>
      </div>

      <!-- Navigation Bar -->
      <nav class="d-flex navbar navbar-expand-md navbar-light">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li v-for="(item, index) in navItems" :key="index" class="nav-item" :class="{ dropdown: item.dropdown }">
                <!-- Regular nav link -->
                <router-link v-if="!item.dropdown" class="nav-link" :to="item.href">
                  {{ currentLanguage === "en" ? item.textEn : item.text }}
                </router-link>

                <!-- Dropdown nav link -->
                <template v-else>
                  <router-link class="nav-link dropdown-toggle" :to="item.href" :id="`navbarDropdown${index}`"
                    role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {{ currentLanguage === "en" ? item.textEn : item.text }}
                  </router-link>
                  <ul class="dropdown-menu" :aria-labelledby="`navbarDropdown${index}`">
                    <li v-for="(dropdownItem, dropdownIndex) in item.dropdown" :key="dropdownIndex">
                      <router-link class="dropdown-item" :to="dropdownItem.href">
                        {{
                          currentLanguage === "en"
                            ? dropdownItem.textEn
                            : dropdownItem.text
                        }}
                      </router-link>
                    </li>
                  </ul>
                </template>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

    <!-- Main Content -->
    <main class="main-content">
      <RouterView />
    </main>

    <!-- Footer -->
    <footer class="app-footer">
      <section class="container-fluid">
        <div class="row">
          <div class="col-md-2">
            <a href="/" class="mx-auto">
              <img :src="logo2" width="100" height="100" alt="logo" />
            </a>
          </div>
          <div class="col-md-10">
            <div class="row">
              <div v-for="footerSection in footerSections" :key="footerSection.title" class="col-md-4 col-sm-6">
                <div class="widget">
                  <h3>
                    {{
                      currentLanguage === "en"
                        ? footerSection.titleEn
                        : footerSection.title
                    }}
                  </h3>
                  <ul>
                    <li v-for="(link, linkIndex) in footerSection.links" :key="linkIndex">
                      <a v-if="link.href" :href="link.href" target="_blank" rel="noopener noreferrer">
                        {{ currentLanguage === "en" ? link.textEn : link.text }}
                      </a>
                      <span v-else>
                        {{ currentLanguage === "en" ? link.textEn : link.text }}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="footer-content">
        <p>
          &copy; 2025 USC Chinese Graduate Student Association. All rights
          reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<style scoped lang="scss">
@use "@/styles/main.scss" as *;
@use "sass:color";

.header-content {
  background: $usc-red;
  padding: 1rem 1rem 0 1rem;
  border-bottom: 2px solid #e0e0e0;

  .language-icon {
    font-size: 1.5rem;
    color: white;
  }

  .navbar {
    .nav-link {
      color: white;
      font-weight: 500;
      border-radius: 0.25rem;

      &:hover,
      &:focus {
        color: white;
        background-color: color.adjust($usc-red, $lightness: -10%);
      }
    }
  }

  .org-name {
    max-width: 40vw;
    font-size: 1.75rem;
    color: white;

    .usc {
      color: $usc-gold;
    }
  }

  .logo {
    height: 130px;
    width: 130px;
    margin-right: 1rem;
    border-radius: 50%;
  }
}

.app-footer {
  background: #151b24;
  color: white;
  padding: 1rem 0;
  margin-top: auto;
}

.footer-content {
  margin: 0 auto;
  padding: 0 2rem;
}

.widget {
  ul {
    list-style: none;
    padding: 0;
    text-align: left;

    a {
      color: white;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
        color: $usc-red;
      }
    }
  }
}
</style>
