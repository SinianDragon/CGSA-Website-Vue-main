<script setup lang="ts">
import { useLanguage } from "@/utils/language";
const { currentLanguage } = useLanguage();

/**
 * 帮助函数：从 src/assets/ 动态获取图片
 * 路径: src/assets/images/presidents/
 */
const getImageUrl = (name: string) => {
  if (!name) return '';
  try {
    // 路径指向你说的 `src/assets/images/presidents/`
    return new URL(`../assets/images/presidents/${name}`, import.meta.url).href;
  } catch (e) {
    // console.warn(`图片未在 assets/images/presidents/ 中找到: ${name}`);
    return ''; // 返回空字符串，v-else 会显示占位符
  }
};

// 包含主席团 + 所有部门部长/副部长 (共14人)
const allMembers = [
  // --- 主席团 (PDF Page 1) ---
  {
    name: "赵翎彤",
    nameEn: "Zhao Lingtong",
    title: "主席",
    titleEn: "President",
    major: "MFA. in Film and TV Production",
    interests: "喝酒蹦迪吃",
    wechat: "a616528a",
    email: "Izhao309@usc.edu",
    photoUrl: "zhao_lingtong.jpg",
  },
  {
    name: "张玖骁",
    nameEn: "Zhang Jiuxiao",
    title: "副主席",
    titleEn: "Vice President",
    major: "M.S. in Global Supply Chain Management",
    interests: "足球, 睡觉",
    wechat: "ZJX-18-",
    email: "jiuxiaoz@usc.edu",
    photoUrl: "zhang_jiuxiao.jpg",
  },
  {
    name: "方唯可",
    nameEn: "Fang Weike",
    title: "副主席",
    titleEn: "Vice President",
    major: "PhD in Computer Science",
    interests: "音乐, 篮球, 桌游",
    wechat: "f841803159",
    email: "weikefan@usc.edu",
    photoUrl: "fang_weike.jpg",
  },
  // --- 行政部 (PDF Page 2) ---
  {
    name: "陈盈",
    nameEn: "Chen Ying",
    title: "行政部 部长",
    titleEn: "Head of Administration",
    major: "M.S. in Analytics",
    interests: "散步、吃飯、滑雪",
    wechat: "tifccccc",
    email: "ychen454@usc.edu",
    photoUrl: "chen_ying.jpg",
  },
  {
    name: "肖戴泽东",
    nameEn: "Xiaodai Zedong",
    title: "行政部 部长",
    titleEn: "Head of Administration",
    major: "M.S. in Analytics",
    interests: "抽烟、喝酒、打牌",
    wechat: "messuee",
    email: "daizedon@usc.edu",
    photoUrl: "xiaodai_zedong.jpg",
  },
  // --- 职发部 (PDF Page 3) ---
  {
    name: "钱嘉琪",
    nameEn: "Qian Jiaqi",
    title: "职发部 部长",
    titleEn: "Head of Career Development",
    major: "M.A in Foodservice Management and Dietetics",
    interests: "滑雪, 旅游, 唱歌",
    wechat: "Kelsey_Qiio",
    email: "Jiaqiq@usc.edu",
    photoUrl: "qian_jiaqi.jpg",
  },
  {
    name: "汪点希",
    nameEn: "Wang Dianxi",
    title: "职发部 副部长",
    titleEn: "Deputy Head of Career Development",
    major: "M.S in Communication Management",
    interests: "健身, 电影, 炫饭",
    wechat: "w-doris-x",
    email: "dianxiwa@usc.edu",
    photoUrl: "wang_dianxi.jpg",
  },
  // --- 宣发部 (PDF Page 4) ---
  {
    name: "刘奕卿",
    nameEn: "Liu Yiqing",
    title: "宣发部 部长",
    titleEn: "Head of Publicity",
    major: "M.S. in Analytics",
    interests: "旅游、拍照、唱歌",
    wechat: "Evieee67",
    email: "yliu5256@usc.edu",
    photoUrl: "liu_yiqing.jpg",
  },
  {
    name: "杨皓麒",
    nameEn: "Yang Haoqi",
    title: "宣发部 副部长",
    titleEn: "Deputy Head of Publicity",
    major: "M.S. in Global Supply Chain Management",
    interests: "摄影、天文、滑雪",
    wechat: "yhq1996",
    email: "haoqiyan@usc.edu",
    photoUrl: "yang_haoqi.jpg",
  },
  // --- 活动部 (PDF Page 5) ---
  {
    name: "谢涵融",
    nameEn: "Xie Hanrong",
    title: "活动部 部长",
    titleEn: "Head of Event Planning",
    major: "M.S. in Communication Management",
    interests: "摄影, 阅读, 剧本杀",
    wechat: "xhr_16",
    email: "hanrongx@usc.edu",
    photoUrl: "xie_hanrong.jpg",
  },
  {
    name: "王皓韵",
    nameEn: "Wang Haoyun",
    title: "活动部 副部长",
    titleEn: "Deputy Head of Event Planning",
    major: "M.S. in Communication Management",
    interests: "听歌, 摄影, 旅游",
    wechat: "Samantha-1121",
    email: "haoyunwa@usc.edu",
    photoUrl: "wang_haoyun.jpg",
  },
  {
    name: "张雪冰",
    nameEn: "Zhang Xuebing",
    title: "活动部 副部长",
    titleEn: "Deputy Head of Event Planning",
    major: "M.S. in Chemical Engineering",
    interests: "旅游, 美食, 电影, 摄影",
    wechat: "13033769527",
    email: "xuebingz@usc.edu",
    photoUrl: "zhang_xuebing.jpg",
  },
  // --- 商务部 (PDF Page 6) ---
  {
    name: "刘好",
    nameEn: "Liu Hao",
    title: "商务部 部长",
    titleEn: "Head of Business Development",
    major: "D.M.A in Piano Performance",
    interests: "歌剧、滑雪、旅行",
    wechat: "liuhao_19",
    email: "hliu3495@usc.edu",
    photoUrl: "liu_hao.jpg",
  },
  {
    name: "张依莼",
    nameEn: "Zhang Yichun",
    title: "商务部 副部长",
    titleEn: "Deputy Head of Business Development",
    major: "MS in Applied Communication Research",
    interests: "健身、旅游、咖啡",
    wechat: "2302215757",
    email: "yichunz1@usc.edu",
    photoUrl: "zhang_yichun.jpg",
  },
];
</script>

<template>
  <div class="board-members-page">
    <h2>
      {{ currentLanguage === "en" ? "Board Members" : "主席团成员" }}
    </h2>

    <div class="members-grid">
      <div v-for="member in allMembers" :key="member.name" class="member-card">
        <img
            v-if="getImageUrl(member.photoUrl)"
            :src="getImageUrl(member.photoUrl)"
            :alt="member.name"
            class="member-photo"
        />
        <div v-else class="photo-placeholder">
          {{ member.name.substring(0, 1) }}
        </div>

        <div class="member-info">
          <h3>{{ currentLanguage === "en" ? member.nameEn : member.name }}</h3>
          <p class="title">{{ currentLanguage === "en" ? member.titleEn : member.title }}</p>
          <p><strong>专业:</strong> {{ member.major }}</p>
          <p><strong>兴趣:</strong> {{ member.interests }}</p>
          <p><strong>微信:</strong> {{ member.wechat }}</p>
          <p><strong>邮箱:</strong> {{ member.email }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
// 样式调整：头像尺寸加倍
.board-members-page h2 {
  color: #333;
  border-bottom: 2px solid #eee;
  padding-bottom: 0.5rem;
  margin-top: 0;
  font-weight: 600;
}

.members-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.member-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;

  .member-photo {
    width: 400px; /* 从150px调整到300px */
    height: 400px; /* 从150px调整到300px */
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
    border: 3px solid #f0f0f0;
  }

  .photo-placeholder {
    width: 400px; /* 从150px调整到300px */
    height: 400px; /* 从150px调整到300px */
    border-radius: 50%;
    background: #ccc;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 3rem;
    margin: 0 auto 1rem auto;
  }

  .member-info {
    text-align: left;
    width: 100%;

    h3 {
      font-size: 1.25rem;
      margin: 0;
      text-align: center;
    }
    .title {
      text-align: center;
      font-size: 1rem;
      color: #666;
      margin-bottom: 1rem;
    }

    p {
      margin: 0.4rem 0;
      font-size: 0.9rem;
      word-break: break-word;

      strong {
        color: #555;
      }
    }
  }
}

@media (max-width: 992px) {
  .members-grid {
    grid-template-columns: 1fr;
  }
}
</style>
