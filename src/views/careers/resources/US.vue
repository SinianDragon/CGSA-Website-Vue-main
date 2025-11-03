<script setup lang="ts">
import { useLanguage } from "@/utils/language";
import linkedin_logo from "@/assets/logo/linkedin_logo.png";
import indeed_logo from "@/assets/logo/indeed_logo.png";
import glassdoor_logo from "@/assets/logo/glassdoor_logo.png";
import careerbuilder_logo from "@/assets/logo/careerbuilder_logo.jpg";
import monster_logo from "@/assets/logo/monster_logo.jpg";

const { currentLanguage } = useLanguage();
</script>

<template>
  <div class="us-career-section">

    <div class="resource-grid">
      <!-- LinkedIn -->
      <div class="resource-card">
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img :src="linkedin_logo" alt="LinkedIn" class="resource-image" />
        </a>
        <h3>LinkedIn</h3>
        <p>
          业界最厉害的职业经理人社交网站，来自全球500强的职业经理人都在此展示自己的履历和市场成绩。
          如果你想进入自己的DREAMING FIRM，上这个网站可以了解目标公司的员工，
          熟悉他们的工作内容，与他们交谈，甚至都可以获得非常珍贵的内部推荐机会。
          在自己的简历上展示LinkedIn帐号，已经成为一种专业的象征，玩SNS，
          除了消磨时光，更别忘了为自己积累人脉，赶紧动手吧！
        </p>
      </div>

      <!-- Indeed -->
      <div class="resource-card">
        <a
          href="https://www.indeed.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img :src="indeed_logo" alt="Indeed" class="resource-image" />
        </a>
        <h3>Indeed</h3>
        <p>
          Indeed是一个招聘信息垂直搜索引擎。自从2004年成立以来，
          Indeed招聘网为求职者提供了数以百万计的免费职缺信息，
          信息来源于数千万家招聘网站，公司企业，以及求职机构。
          求职者无需单独访问各个招聘资源，只需要登陆，
          并在职位关键词搜索框中填入您想搜索的工作的关键字、
          在工作地点搜索框中填入您想找工作的省市区县的名字，
          便可以浏览所有符合职位的招聘信息和申请方式。
        </p>
      </div>

      <!-- Glassdoor -->
      <div class="resource-card">
        <a
          href="https://www.glassdoor.com/index.htm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img :src="glassdoor_logo" alt="Glassdoor" class="resource-image" />
        </a>
        <h3>Glassdoor</h3>
        <p>
          Glassdoor现在是继Indeed.com之后美国第二大最受欢迎的招聘网站。
          该网站上面有各个大公司、各种职位的常见面试问题，可为求职者提供面试准备。
          同时Glassdoor也是一个查找公司薪水、升迁路径、内部消息和员工结构等重要信息的好去处。
        </p>
      </div>

      <!-- CareerBuilder -->
      <div class="resource-card">
        <a
          href="https://www.careerbuilder.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            :src="careerbuilder_logo"
            alt="CareerBuilder"
            class="resource-image"
          />
        </a>
        <h3>CareerBuilder</h3>
        <p>
          CareerBuilder是北美最大的招聘网站运营商，招聘职位超过160万个。
          CareerBuilder已建立了一个全球网络平台，拥有2000家以上的合作伙伴，
          在55个国家、跨越5大洲，使客户能获得最大和最多样化的人才。
        </p>
      </div>

      <!-- Monster -->
      <div class="resource-card">
        <a
          href="https://www.monster.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img :src="monster_logo" alt="Monster" class="resource-image" />
        </a>
        <h3>Monster</h3>
        <p>
          Monster作为全球最早、规模最大的招聘网站，提供由招聘代理、
          线上招聘、猎头服务和招聘黄页广告构成的全方位的全球招聘解决方案。
          除了搜索工作以外，改简历、面试或者其他和求职有关的信息都可以在这个网站找到。
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.us-career-section {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem;
  line-height: 1.8;
  font-size: 1.05rem;

  h1 {
    text-align: center;
    color: #900;
    margin-bottom: 2rem;
  }
}

/* 网格布局：宽屏两列，小屏自动一列 */
.resource-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

/* 单个卡片 */
.resource-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  }

  h3 {
    color: #b00;
    margin-top: 1rem;
  }

  p {
    margin-top: 0.75rem;
    text-align: justify;
  }
}

/* 图片样式 */
.resource-image {
  width: 100%;
  height: 160px;
  object-fit: contain;
  display: block;
  border-radius: 8px;
  background: #fafafa;
  margin: 0 auto;
  transition: transform 0.2s ease;
}

.resource-card:hover .resource-image {
  transform: scale(1.03);
}

/* 链接 */
a {
  text-decoration: none;
}
</style>
