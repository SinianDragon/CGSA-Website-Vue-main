<script setup lang="ts">
import { onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import CareerPagePicture from '@/assets/images/careers/CareerPagePicture.jpg';
</script>

<template>
  <div class="tips-container">
    <h1>USC CGSA 职业发展部</h1>
    <ul>
      <p>
        专注USC CGSA公众号，你将收获：
      </p>
      <p>
        每两周推送的求职tips，如：如何与人network、dressing code、如何修改resume、最新的招聘信息等。
      </p>
      <p>
        赶快扫码关注我们吧！
      </p>
    </ul>
    <img :src="CareerPagePicture" alt="USC CGSA 职业发展部" class="tip-image" />
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

.tip-image {
  display: block;
  margin: 1rem auto;
  max-width: 80%;
  height: auto;
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
