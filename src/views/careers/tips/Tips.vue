<script setup lang="ts">
import { onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import tips_img1 from "@/assets/images/careers/tips_img1.png";
import tips_img2 from "@/assets/images/careers/tips_img2.png";
import tips_img3 from "@/assets/images/careers/tips_img3.png";
import tips_img4 from "@/assets/images/careers/tips_img4.png";

import glassdoor_logo from "@/assets/logo/glassdoor_logo.png";
</script>

<template>
  <div class="tips-container">
    <h1>LinkedIn 与求职小技巧</h1>

      <h3>1. 完善LinkedIn简历小妙招</h3>
      <ul>
        <li>
          <h4>短链接</h4>
        </li>
        <p>
          默认状态下，每个人的profile的公共链接都非常的长。但是通过一定的设置，
          你可以得到一个缩短又好看的版本。具体方法是，进入profile的编辑模式，
          然后找到公共链接，点击右侧的edit。
        </p>
        <img :src="tips_img1" alt="Tips Image 1" class="tips-image" />
        <li>
          <h4>不同区域的显示顺序</h4>
        </li>

        <p>
          profile中有很多不同种类的区域，比如工作经历、教育史、奖章证书等等。
          不同的人和不同的情况下，应该使用不同的顺序。如果你是个大学生，
          你可能没有什么实习经历，这个时候就应该把project段放在学校的上面。
          如果你在找工作并且有强烈的兴趣方向，就应该把summary放在最顶上，
          并且写上诸如
          “I'm a software engineer interested in Machine Learning in small to medium companies in the Bay Area”
          的精确描述。
        </p>
        <img :src="tips_img2" alt="Tips Image 2" class="tips-image" />
        <li>
          <h4>照片</h4>
        </li>

        <p>最好是找个专业的摄影师照一张。如果没有专业的正照的话，可以找一张比较正式的照片。</p>
        <img :src="tips_img3" alt="Tips Image 3" class="tips-image" />
        <li>
          <h4>多媒体信息展示</h4>
        </li>
        <p>
          有些区域支持多媒体信息的展示。比如你可以把你在SlideShare的幻灯片链接放上去，
          或者是论文之类的。这样大家可以点击这些内容，对你的影响更深刻。
        </p>
      </ul>

      <h3>2. 做完实习，或者跟别人合作项目结束，通过LinkedIn要recommendation</h3>
      <ul>
        <p>
          你的“推荐人”可以给你的LinkedIn账号留下评价和推荐，这样别人或者招聘的公司可以公开看到。
          好的推荐，自然会对你很有帮助，雇主们很愿意联系被别人在LinkedIn上顶着个人信息（姓名、工作、教育经历）
          公开来表扬的人的，而且被表扬的次数越多，说明你这人越靠谱。
        </p>
      </ul>
      
      <h3>3. 通过LinkedIn建立自己的网络</h3>
      <ul>
        <p>
          尤其是你认识的人。无论是你本科甚至高中同学，还是在美国期间认识的人，想办法建立广泛的网络，保持联系。
          记住：无论你觉得跟人network是很pleasant还是很无聊的事情，通过认识的人帮忙投简历refer你，
          是找工作的最佳途径。还有，建立network这种事情一定要提前做、平常就做好，
          不要到了需要找人帮忙的时候，才想起来。
        </p>
      </ul>
      <h3>4. Career Fair</h3>
      <ul>
        <img :src="tips_img4" alt="Tips Image 4" class="tips-image" />
        <li>
        <p>
          在我们学校，一般一年至少组织两次大型的就业招聘会（career/job fair），春秋各一次，学校非常重视，
          因为学校的声誉最终还是要靠就业率来检验的。一个学校的career fair有哪些公司来，可在学校官网
          （<a href="https://careers.usc.edu/employers/career-fairs/" target="_blank">
            https://careers.usc.edu/employers/career-fairs/</a>）里面查询。
          </p>
      </li></ul>

      <h3>5. 找我们学校的career center来给你修改简历、mock interview</h3>
      <ul><li>
        <p>
          他们可以从具体的语言组织和语法、简历的风格、外观设计等各个方面来帮助你，
          career center的人可以做的很好，他们本来就是学校出钱从工业界招来的有HR背景的人，
          熟悉工业界招聘风格。
        </p>
      </li></ul>

      <h3>6. 通过myvisajobs.com来查找当地办理h1b的公司</h3>
      <ul><li>
      <p>
        每个国际学生就业求职，都会有同样的心酸经历：总是有些公司，一听你需要办理h1b工作签证，
        就直接就踢你出局不予考虑。最好的办法，就是搞清楚哪些公司愿意招收国际学生，愿意给办h1b。
      </p>
      </li></ul>
      
      <h3>7. 通过glassdoor查工资</h3>
      <ul>
        <img :src="glassdoor_logo" alt="Glassdoor Logo" class="resource-image" />
        <li>
      <p>
        在拿到offer以前，你也需要了解一下目标公司的工资、待遇、面试和公司评价等情况，
        glassdoor.com就是这样的站点。
      </p>
      </li></ul>
  </div>
</template>

<style scoped>
.tips-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  line-height: 1.8;
  font-size: 1.05rem;
}

h1, h3, h4 {
  color: #900;
  margin-top: 1.5rem;
}

a {
  color: #007bff;
  text-decoration: underline;
}

ul, ol {
  margin-left: 1.5rem;
}

.anchor {
  display: block;
  scroll-margin-top: 100px;
}

html {
  scroll-behavior: smooth;
}
</style>
