<script setup lang="ts">
import { useLanguage } from "@/utils/language";
const { currentLanguage } = useLanguage();

/**
 * 帮助函数：从 src/assets/ 动态获取图片
 * 路径: src/assets/images/members/
 */
const getDeptImageUrl = (name: string) => {
  if (!name) return '';
  try {
    // 假设部门合照放在 'src/assets/images/departments/'
    return new URL(`../assets/images/members/${name}`, import.meta.url).href;
  } catch (e) {
    // console.warn(`图片未在 assets/images/departments/ 中找到: ${name}`);
    return ''; // 图片不存在
  }
};


interface Department {
  name: string;
  nameEn: string;
  groupPhotoUrl: string; // 部门合照
  about: string;
  responsibilities: string[];
  requirements: string[];
  gains: string[];
  pastActivities: string;
}

const departments: Department[] = [
  {
    name: "活动部",
    nameEn: "Event Planning",
    groupPhotoUrl: "dept_event.jpg", // 示例文件名, 你需要把合照放进去
    about: "活动部是学生会内负责组织和策划活动的核心部门。作为校园生活的调剂大师，我们致力于策划和举办一系列丰富多彩的活动，包括交友社交、学术、商业以及娱乐项目等。我们通过这些活动促进部门内部、部门之间及全校师生的交流与联系，不仅增强学生之间的合作与互助，也为大家的课余生活增添了更多的色彩和乐趣。",
    responsibilities: [
      "我们曾成功举办CGSA春游、德州扑克锦标赛、线下内联、新生见面会、歌王争霸赛、线下桌游等多种活动。在即将到来的24Fall学期，我们将继续推出更多令人期待的活动。活动部是一个展现创意与才能的平台，无论是天马行空的点子还是奇思妙想，都可以在这里得到实践与实现，为大家的课余生活带来无限的欢声笑语。"
    ],
    requirements: [
      "丰富的创意与策划活动的创新思维",
      "对举办活动的热情与责任心",
      "良好的沟通与团队协作能力",
      "较强的执行力与实践能力"
    ],
    gains: [
      "在活动部，你将遇到许多志同道合的伙伴！我们是一个充满热情与凝聚力的大家庭，在新的学期里共同举办各种有趣的活动。在享受活动乐趣的同时，你还将锻炼到策划、沟通和应变能力。更重要的是，你将收获一份独特的归属感和满足感。我们相信，每一位活动部成员的热情与真诚会让你感受到家的温暖，而这里也将成为你展示想象力和创造力的最佳舞台。无论是加州阳光还是繁星夜空，都将见证我们一同创造的美好时光。快来加入我们吧，遇见更多有趣的灵魂！"
    ],
    pastActivities: "CGSA线下内联、新生见面会、情人节活动、春游、歌王争霸赛、德州扑克锦标赛，中秋庙会、春节庙会，线下桌游等。"
  },
  {
    name: "行政部",
    nameEn: "Administration",
    groupPhotoUrl: "dept_admin.jpg", // 示例文件名
    about: "行政部是CGSA的核心枢纽，致力于内部财务管理、运营、人力资源和物资管理以及各部门之间的信息共享。 我们积极策划和统筹CGSA的各大品牌活动，例如新生见面会、新生接机服务、CGSA招新等，为留学生提供支持与帮助。在行政部工作， 大家将有机会提升团队合作，信息整理与管理能力，培养责任感和大局观， 认识很多校内外的伙伴， 并接触丰富的校友资源。",
    responsibilities: [
      "秘书组： 负责部门会议的考勤，记录，监督管理、信息汇总与传递、场地申请等。",
      "信息与物资管理组： 管理CGSA官方小助手的日常运作、微信群管理、邮箱管理、制作内部的Newsletter、管理物资等。",
      "财务管理： 负责各部门的活动经费申请、入账、记账、预算统筹、内部报销等。"
    ],
    requirements: [
      "有责任心和耐心，做事细心有条理。可以积极参与学生会所举办的活动，善于发现细小的问题并乐于沟通。"
    ],
    gains: [
      "加入我们， 你将锻炼领导力、责任感和沟通能力， 同时可以结交许多新朋友，接触校内外的优质资源。"
    ],
    pastActivities: "新生见面会、接机服务、CGSA招新、CGSA内联、总结大会等。"
  },
  {
    name: "职发部",
    nameEn: "Career Development",
    groupPhotoUrl: "dept_career.jpg", // 示例文件名
    about: "我们致力于满足留学生在职业发展上的多元需求。针对不同的职业发展方向，我们精心举办各种活动，提供专业的求职指导和个性化的职业规划建议，全方位助力学生实现职业目标。",
    responsibilities: [
      "每学期，我们都会策划和组织丰富多彩的活动。每位部员都积极参与活动的策划和组织，深入发掘学生的求职需求，与教授和行业资深人士建立沟通桥梁，用心宣传并精心举办各类精彩活动。在这里，你不仅能帮助他人，更能在过程中提升自我，为未来职场发展积累宝贵经验。"
    ],
    requirements: [
      "具有活动组织经验，活动宣传经验，善于团队合作和与人沟通，敢于创新。"
    ],
    gains: [
      "在举办活动的过程中，你将有机会与大家一起探讨求职中的经验，结识行业大佬、招聘HR，获得内推机会，助力自己的职业发展。"
    ],
    pastActivities: '"职为你来"系列宣讲会： 我们的金牌活动，旨在消除中国留学生在美求职的信息差。我们邀请各行业嘉宾分享宝贵经验，并提供一对一交流机会，帮助学生深入了解职场实况。 "南加州职业发展与交流峰会"： 该峰会于去年正式启动首届活动，成果斐然。我们邀请了20多位各行业优秀人才，与超过100名学生共聚一堂，搭建了广阔的人脉网络平台，为同学们创造了探索多元职业机会的宝贵契机。'
  },
  {
    name: "宣发部",
    nameEn: "Publicity",
    groupPhotoUrl: "dept_publicity.jpg", // 示例文件名
    about: "宣发部是CGSA对外展示与宣传的核心部门，融合了技术与创意，致力于通过多种媒体平台传递CGSA的品牌形象与活动信息。我们的工作涵盖原创推文的编辑与设计、社交媒体运营、活动宣传、海报和视觉设计、摄影拍摄、视频剪辑，以及各类技术支持和产品的开发与维护。",
    responsibilities: [
      "视觉设计组：负责设计各类活动海报、3D实物展示，以及推文的视觉效果，确保所有宣传材料都具备吸引力和专业性。",
      "内容创作组：负责推文的排版、撰写及原创内容的创作，制作高质量的内容，提升CGSA在各大社交媒体平台的影响力。在你加入在宣发部之后，你将有机会掌握新媒体运营、视觉设计、内容创作、技术开发等多方面的技能，快速提升个人能力，并积累丰富的项目经验。你还将结识志同道合的伙伴，共同创造精彩内容，展示CGSA的魅力。",
      "社交媒体组：负责摄影拍摄、视频剪辑，以及CGSA社交媒体账号的运营，确保活动与品牌信息能够高效传达并广泛传播。",
      "技术支持组：负责CGSA官网、USC华人论坛、微信小程序等技术产品的开发、运营与维护，为宣发部的创意和运营提供技术保障"
    ],
    requirements: [
      "对新媒体运营、摄影剪辑、视觉设计或原创内容制作有兴趣。",
      "热爱创新，认真负责，具备良好的时间管理、沟通和团队合作能力。",
      "无论是零基础还是初学者，我们都欢迎积极学习和进步的态度。",
      "加分项：能够熟练使用，或有对PS、Canva、秀米、PR、剪映等软件有一定了解。"
    ],
    gains: [
      "掌握新媒体运营、摄影剪辑、视觉设计、原创内容创作等多方面知识。",
      "快速提升视觉设计和审美能力，丰富个人作品集。",
      "结识志同道合的新朋友，共同成长。"
    ],
    pastActivities: "" // 宣发部没有提供
  },
  {
    name: "外联部",
    nameEn: "Business Development",
    groupPhotoUrl: "dept_bd.jpg", // 示例文件名
    about: "你是否渴望结交更多志同道合的朋友？你是否想在校园里大展身手，为社团活动带来更多资源和支持？如果你曾梦想过自己能运筹帷幄，决胜千里，或是在各种场合中展现才能，那么CGSA外联部正是你的完美舞台。在这里，你可以实现自己的梦想，发挥自己的社交和策略能力，同时学习如何在社会中游刃有余的艺术。",
    responsibilities: [
      "外联部是学生和学联与外界社会、企业、组织沟通的的桥梁，在学联中有着至关重要的作用。主要负责对接校外资源，争取赞助支持，建立合作关系。我们不但要平衡学生和商家的利益，更要不断为研究生学生会寻找赞助和活动资金，确保CGSA的活动顺利进行，几乎每个官方活动都存在外联部的身影。"
    ],
    requirements: [
      "有责任心和团队合作精神。",
      "擅长人际交往，具有良好的沟通表达能力，能够妥善处理各种关系。",
      "敢于挑战，勇于尝试新事物，迈出舒适圈。",
      "能够忠于自我，勇于表达自己的想法。"
    ],
    gains: [
      "加入我们CGSA外联部大家庭，你讲充分接触社会资源，从零开始谈成一笔笔赞助，充分锻炼自己，让自己的能力获得质的飞跃。面对挑战，解决问题，在一次次实践中不断突破自我。与校内外的企业、机构建立联系，扩展你的人际圈。与一群有激情、有梦想的伙伴们共同努力，创造出色的校园活动。"
    ],
    pastActivities: "CGSA折扣卡、中秋活动、游艇舞会、新生见面会赞助、接机活动赞助等。"
  }
];

</script>

<template>
  <div class="departments-page">
    <div v-for="dept in departments" :key="dept.name" class="department-section card">
      <div class="card-body">
        <h2 class="card-title">
          {{ currentLanguage === "en" ? dept.nameEn : dept.name }}
        </h2>

        <img
            v-if="getDeptImageUrl(dept.groupPhotoUrl)"
            :src="getDeptImageUrl(dept.groupPhotoUrl)"
            :alt="dept.name"
            class="department-photo"
        />
        <div v-else class="photo-placeholder">
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
  max-height: 800px; /* 关键修改：设置一个合理的最大高度 */
  height: auto;
  object-fit: cover; /* 关键修改：用 cover 填满，裁切多余部分 */
  object-position: center; /* 确保从中间裁切 */
  border-radius: 8px;
  margin-bottom: 1.5rem;
}
.photo-placeholder {
  width: 100%;
  height: 350px;
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
