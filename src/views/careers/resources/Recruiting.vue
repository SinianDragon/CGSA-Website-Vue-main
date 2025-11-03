<script setup lang="ts">
import { onMounted, watch } from "vue";
import { useRoute } from "vue-router";
</script>

<template>
  <div class="tips-container">
    <h1>招聘季</h1>
    <section id="usrecruiting">
      <h3>美国招聘季</h3>
      <ul>
        <li>
          <p>
            秋季招聘季通常从每年的8月开始，一直持续到11月末或者12月初。大部分大型科技公司和金融机构会在这个时间段内进行校园招聘。
          </p>
          <p>很多冬季毕业的学生可以在秋季Career Fair上拿到offer，这时候招聘机会最多。</p>
        </li>
        <li>
          <p>春招：2-4月</p>
          <p>这时候一般是公司在春季Career Fair上筛选出暑期实习生。</p>
        </li>
        <li>
          <p>补招：8-11月</p>
          <p>这时属于企业年底补招，相对于前两个招聘季规模较小。</p>
        </li>
      </ul>
    </section>
    <section id="chinarecruiting">
      <h3>国内招聘季</h3>
      <ul>
        <li>
          <p>秋招：9-12月</p>
        </li>
        <li>
          <p>春招：3-5月</p>
          <p>一般来说春招相比秋招规模小、岗位少，所以建议要找工作的大家抓紧在这个秋天找到工作！</p>
        </li>
        <li>
          <p>外企补录：12-1月</p>
        </li>
        <li>
          <p>暑期实习生招聘：6-9月</p>
        </li>
      </ul>
    </section>
    <h3>注：对于留学生来说，从毕业后的两年内都是应届生身份，均可参加校招。</h3>
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
