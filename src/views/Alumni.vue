
<template>
  <div class="alumni-page">
    <!-- Sidebar -->
    <aside class="sidebar">
      <h2>Alumni</h2>
      <ul>
        <li
          v-for="year in years"
          :key="year"
          :class="{ active: selectedYear === year }"
          @click="selectedYear = year"
        >
          {{ year }}
        </li>
      </ul>
    </aside>

    <!-- Main content -->
    <main class="content">
      <h2>{{ selectedYear }} Alumni</h2>
      <div class="gallery">
        <div v-for="(alum, index) in filteredAlumni" :key="index" class="alum-card">
          <img :src="alum.image" :alt="alum.name" />
          <p>{{ alum.name }}</p>
        </div>
      </div>
    </main>
  </div>

  <!-- Footer -->
  <footer class="footer">
    <a href="/">Home</a>
    <a href="/activity">Activity</a>
    <a href="/career">Career</a>
    <a href="/contact">Contact</a>
  </footer>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const years = ["2024–2025",
  "2023–2024",
  "2022–2023",
  "2021–2022",
  "2020–2021",];
const selectedYear = ref("2024–2025");

const alumni = ref([
  { name: "X", image: "/alumni/2024/X.jpg", year: "2024–2025" },
  { name: "XX", image: "/alumni/2024/XX.jpg", year: "2020–2021" },
  { name: "XXX", image: "/alumni/2023/XXX.jpg", year: "2023–2024" },
  { name: "XXXX", image: "/alumni/2022/XXXX.jpg", year: "2022–2023" },
]);

const filteredAlumni = computed(() =>
  alumni.value.filter((a) => a.year === selectedYear.value)
);
</script>

<style scoped>
.alumni-page {
  display: flex;
  min-height: 80vh;
  padding: 20px;
  gap: 20px;
}

/* Sidebar */
.sidebar {
  width: 200px;
  background-color: #f9f9f9;
  border-right: 1px solid #ddd;
  padding: 20px;
}
.sidebar h2 {
  margin-bottom: 10px;
  color: #990000; /* USC red */
}
.sidebar ul {
  list-style: none;
  padding: 0;
}
.sidebar li {
  padding: 8px;
  cursor: pointer;
  transition: 0.2s;
}
.sidebar li:hover,
.sidebar li.active {
  background-color: #990000;
  color: white;
  border-radius: 5px;
}

/* Content area */
.content {
  flex: 1;
}
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 15px;
}
.alum-card {
  text-align: center;
}
.alum-card img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
}
.footer {
  margin-top: 30px;
  padding: 15px;
  text-align: center;
  border-top: 1px solid #ddd;
}
.footer a {
  margin: 0 15px;
  color: #990000;
  text-decoration: none;
}
.footer a:hover {
  text-decoration: underline;
}
</style>

