<script setup lang="ts">

const getImageUrl = (name: string) => {
  if (!name) return '';
  try {
    return new URL(`../assets/images/members/${name}`, import.meta.url).href;
  } catch (e) {
    console.warn(`图片未在 assets/images/members/ 中找到: ${name}`);
    return '';
  }
};

const groupPhotoName = "all.jpg";

</script>
<template>
  <div class="about">
    <h1>组织介绍</h1>

    <img
        v-if="getImageUrl(groupPhotoName)"
        :src="getImageUrl(groupPhotoName)"
        alt="CGSA Group Photo"
        class="group-photo"
    />
    <div v-else class="photo-placeholder">
      大合照
    </div>

    <p>
      我们是南加州大学中国研究生学生会，简称USC-CGSA。
      我们的宗旨是为南加大的中国研究生，博士生，MBA提供一个专注于就业，
      学术和社交相关的平台，并为广大留学生提供力所能及的留学问题，法律，手续方面的帮助。
    </p>
  </div>
</template>

<style scoped lang="scss">
@use "@/styles/main.scss" as *;

.about {
  padding: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

h1 {
  color: $usc-red;
  margin-top: 0;
  border-bottom: 2px solid #eee;
  padding-bottom: 0.5rem;
}

p {
  font-size: 1.1rem;
  line-height: 1.8;
}

.group-photo {
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
  height: 500px;
  border-radius: 8px;
  background: #f0f0f0;
  color: #aaa;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
}
</style>
