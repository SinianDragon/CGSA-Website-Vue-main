import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import CGSAIntro from "../views/CGSAIntro.vue";
import Contact from "../views/Contact.vue";
import BoardMembers from "../views/BoardMembers.vue";
import Departments from "../views/Departments.vue";
import Welfare from "../views/Welfare.vue";
import Career from "../views/Career.vue";
import Activity from "../views/Activity.vue";
import Alumni from "../views/Alumni.vue";
import Discounts from "@/views/Discounts.vue";
import AboutLayout from "../views/about/AboutLayout.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
      {
          path: "/about",
          name: "about",
          component: AboutLayout, // 1. 指向我们的父布局
          redirect: "/about/cgsa-intro", // 默认重定向到“组织介绍”
          children: [
              // 2. 把原来的页面作为 "children" 放在这里
              {
                  path: "cgsa-intro", // 注意：子路径前面没有斜杠 "/"
                  name: "cgsa-intro",
                  component: CGSAIntro,
              },
              {
                  path: "board-members",
                  name: "board-members",
                  component: BoardMembers,
              },
              {
                  path: "departments",
                  name: "departments",
                  component: Departments,
              },
          ],
      },
    {
      path: "/welfare",
      name: "welfare",
      component: Welfare,
    },
    {
      path: "/discounts",
      name: "discounts",
      component: Discounts,
    },
    {
      path: "/career",
      name: "career",
      component: Career,
    },
    {
      path: "/activity",
      name: "activity",
      component: Activity,
    },
    {
      path: "/alumni",
      name: "alumni",
      component: Alumni,
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
  ],
});

export default router;
