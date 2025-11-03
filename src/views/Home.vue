<script setup lang="ts">
import { useLanguage } from "@/utils/language";
const { currentLanguage } = useLanguage();
type CarouselImage = {
  src: string;
  alt: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
};
const carouselImages: CarouselImage[] = [
  {
    src: "https://usccgsa-web.s3.us-east-1.amazonaws.com/slider/all_members.JPG",
    alt: "All members",
    title: "我们是谁",
    titleEn: "Who we are",
    description:
      "我们是南加州大学中国研究生学生会，简称USC-CGSA。我们的宗旨是为南加大的中国研究生，博士生，MBA 提供一个专注于就业，学术和社交相关的平台，并为广大留学生提供力所能及的帮助。",
    descriptionEn:
      "We are the Chinese Graduate Student Association at the University of Southern California (USC-CGSA). Our mission is to provide a dedicated platform for USC Chinese graduate students, PhD candidates, and MBA students, focusing on career development, academic advancement, and social networking. We are also committed to offering meaningful support and assistance to the broader international student community.",
  },
  {
    src: "https://usccgsa-web.s3.us-east-1.amazonaws.com/slider/zhongqiu.JPG",
    alt: "Zhongqiu Festival",
    title: "中秋节",
    titleEn: "Mid-Autumn Festival",
    description: "我踏马吃吃吃吃吃吃",
    descriptionEn: "I HUNGER FOR MOONCAKES",
  },
  {
    src: "https://usccgsa-web.s3.us-east-1.amazonaws.com/slider/xingzheng_beach.jpg",
    alt: "Xingzheng Beach",
    title: "行政沙滩",
    titleEn: "Xingzheng Beach",
    description: "我踏马游游游游游游",
    descriptionEn: "I SWIM",
  },
];
const departmentInfos = [
  {
    name: "行政部",
    nameEn: "Human Resources Department",
    description:
      "行政部是CGSA的核心枢纽，致力于内部财务管理、运营、人力资源和物资管理以及各部门之间的信息共享。 我们积极策划和统筹CGSA的各大品牌活动，例如新生见面会、新生接机服务、CGSA招新等，为留学生提供支持与帮助。在行政部工作， 大家将有机会提升团队合作，信息整理与管理能力，培养责任感和大局观， 认识很多校内外的伙伴， 并接触丰富的校友资源。",
    descriptionEn:
      "The Administration Department is the core hub of CGSA, dedicated to internal financial management, operations, human resources and material management, and information sharing among various departments. We actively plan and coordinate CGSA's major brand activities, such as freshmen meeting, freshmen airport pick-up service, CGSA recruitment, etc., to provide support and assistance to international students. Working in the Administration Department, you will have the opportunity to improve teamwork, information sorting and management skills, develop a sense of responsibility and an overall perspective, get to know many partners inside and outside the school, and have access to rich alumni resources.",
  },
  {
    name: "活动部",
    nameEn: "Event Planning Department",
    description:
      "活动部是学生会内负责组织和策划活动的核心部门。作为校园生活的调剂大师，我们致力于策划和举办一系列丰富多彩的活动，包括交友社交、学术、商业以及娱乐项目等。我们通过这些活动促进部门内部、部门之间及全校师生的交流与联系，不仅增强学生之间的合作与互助，也为大家的课余生活增添了更多的色彩和乐趣。",
    descriptionEn:
      "The Activities Department is the core team within the Student Union responsible for organizing diverse events. We plan social, academic, and entertainment activities to promote internal, interdepartmental, and campus-wide engagement, enhancing students' campus life and providing extracurricular enjoyment.",
  },
  {
    name: "职业发展部",
    nameEn: "Career Development Department",
    description:
      "我们致力于满足留学生在职业发展上的多元需求。针对不同的职业发展方向，我们精心举办各种活动，提供专业的求职指导和个性化的职业规划建议，全方位助力学生实现职业目标。",
    descriptionEn:
      "The Ministry of Staff Development focuses on assisting international students in career growth by organizing various job-related events, providing professional guidance, and offering career planning advice to help students achieve their goals.",
  },
  {
    name: "外联部",
    nameEn: "Business Development Department",
    description:
      "你是否渴望结交更多志同道合的朋友？你是否想在校园里大展身手，为社团活动带来更多资源和支持？如果你曾梦想过自己能运筹帷幄，决胜千里，或是在各种场合中展现才能，那么CGSA外联部正是你的完美舞台。在这里，你可以实现自己的梦想，发挥自己的社交和策略能力，同时学习如何在社会中游刃有余的艺术。",
    descriptionEn:
      "Do you yearn to meet more like-minded friends? Do you want to make a big splash on campus and bring more resources and support to community activities? If you have ever dreamed of being able to strategize and win decisively, or showcase your talents in various occasions, then the CGSA External Relations Department is your perfect stage. Here, you can realize your dreams, leverage your social and strategic abilities, and learn the art of navigating society with ease.",
  },
];

type BoardMemberInfo = {
  name: string;
  nameEn: string;
  title: string;
  titleEn: string;
  college: string;
  major: string;
  photoUrl?: string;
}

const boardMembers: BoardMemberInfo[] = [
  {
    name: "张三",
    nameEn: "Zhang San",
    title: "会长",
    titleEn: "President",
    college: "Viterbi",
    major: "Computer Science",
  },
  {
    name: "李四",
    nameEn: "Li Si",
    title: "副会长",
    titleEn: "Vice President",
    college: "Marshall",
    major: "Business Administration",
  },
  {
    name: "王五",
    nameEn: "Wang Wu",
    title: "秘书长",
    titleEn: "Secretary General",
    college: "Dornsife",
    major: "Biology",
  },
]
</script>
<template>
  <div class="container-fluid">
    <div class="row">
      <div id="carouselIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button v-for="(img, idx) in carouselImages.length" :key="idx" type="button"
            data-bs-target="#carouselIndicators" :data-bs-slide-to="idx" :class="{ active: idx === 0 }"
            :aria-current="idx === 0 ? 'true' : undefined" :aria-label="`Slide ${idx + 1}`"></button>
        </div>
        <div class="carousel-inner">
          <div v-for="(image, index) in carouselImages" :key="index" class="carousel-item" data-bs-interval="5000"
            :class="{ active: index === 0 }">
            <img :src="image.src" class="d-block w-100" :alt="image.alt" />
            <div class="carousel-caption d-none d-md-block">
              <h5>
                {{ currentLanguage === "en" ? image.titleEn : image.title }}
              </h5>
              <p>
                {{
                  currentLanguage === "en"
                    ? image.descriptionEn
                    : image.description
                }}
              </p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div class="container-fluid my-2">
        <h2 class="d-flex justify-content-center my-2">
          {{
            currentLanguage === "en" ? "Department Descriptions" : "部门介绍"
          }}
        </h2>
        <div class="row mx-1">
          <div v-for="departmentInfo in departmentInfos" :key="departmentInfo.name" class="col-md-4 col-sm-6 my-2">
            <h4 class="department">
              {{
                currentLanguage === "en"
                  ? departmentInfo.nameEn
                  : departmentInfo.name
              }}
            </h4>
            <div>
              {{
                currentLanguage === "en"
                  ? departmentInfo.descriptionEn
                  : departmentInfo.description
              }}
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid my-2">
        <h2 class="d-flex justify-content-center my-2">
          {{
            currentLanguage === "en" ? "Board Members" : "主席团成员"
          }}
        </h2>
        <div class="row mx-1">
          <div v-for="boardMember in boardMembers" :key="boardMember.name" class="col-md-4 col-sm-6">
            <div class="mx-1 my-2 align-items-center">
              <div class="col-md-2 col-sm-3">
                <img v-if="boardMember.photoUrl" :src="boardMember.photoUrl" class="img-fluid rounded-circle"
                  alt="Board Member Photo" />
                <div v-else
                  class="bg-secondary text-white d-flex align-items-center justify-content-center rounded-circle"
                  style="width: 100px; height: 100px;">
                  No Photo
                </div>
              </div>
              <div class="col-md-10 col-sm-9">
                <h4>{{ currentLanguage === "en" ? boardMember.nameEn : boardMember.name }}</h4>
                <p>{{ currentLanguage === "en" ? boardMember.titleEn : boardMember.title }}</p>
                <p>{{ boardMember.college }} - {{ boardMember.major }}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/styles/main.scss" as *;

.carousel {
  img {
    aspect-ratio: 16 / 9;
    width: 100%;
    object-fit: cover;
  }

  .carousel-caption {
    background-color: rgba(0, 0, 0, 0.5);
    padding: 1rem;
    border-radius: 0.5rem;
  }
}
</style>
