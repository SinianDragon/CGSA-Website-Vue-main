<script setup lang="ts">
import { useLanguage } from "@/utils/language";
const { currentLanguage } = useLanguage();

</script>

<template>
  <div>{{ currentLanguage === "en" ? "Discount card usages" : "折扣卡福利" }}</div>
</template>

<style scoped lang="scss">
@use "@/styles/main.scss" as *;
</style>
