<script setup lang="ts">
import { useLanguage } from "@/utils/language";
import { Mail, Instagram } from "lucide-vue-next"; // lightweight icons
import qrImage from "@/assets/qr.jpg";
import redNote from "@/assets/rednote.png";

const { currentLanguage } = useLanguage();

type ContactInfo = {
  name: string;
  nameEn: string;
  title: string;
  titleEn: string;
  email: string;
  wechat: string;
};

const contacts: ContactInfo[] = [
  {
    name: "刘好",
    nameEn: "Hao Liu",
    title: "商务部部长",
    titleEn: "Business Department Head",
    email: "hliu3495@usc.edu",
    wechat: "liuhao_19",
  },
  {
    name: "张依莼",
    nameEn: "Yichun Zhang",
    title: "商务部副部长",
    titleEn: "Business Department Deputy Head",
    email: "yichunz1@usc.edu",
    wechat: "2302215757",
  },
];

const socialLinks = [
  {
    label: "微信公众号",
    labelEn: "WeChat",
    value: "USC-CGSA",
    qrCode: qrImage,
  },
  {
    label: "小红书",
    labelEn: "RedNote",
    value: "南加州大学CGSA",
    image: redNote,
  },
  {
    label: "Email",
    labelEn: "Email",
    icon: Mail,
    value: "cgsa@usc.edu",
    link: "mailto:cgsa@usc.edu",
  },
  {
    label: "Instagram",
    labelEn: "Instagram",
    icon: Instagram,
    value: "@usccgsa",
    link: "https://www.instagram.com/usccgsa/",
  },
];
</script>

<template>
  <div class="page-container">
    <!-- Business Contacts -->
    <section class="contacts-section">
      <h2>
        {{ currentLanguage === "en" ? "Business Consultation" : "商务咨询" }}
      </h2>
      <div class="contacts-container">
        <div
          v-for="contact in contacts"
          :key="contact.email"
          class="contact-card"
        >
          <div class="contact-header">
            <h3>
              {{ currentLanguage === "en" ? contact.nameEn : contact.name }}
            </h3>
            <p class="contact-title">
              {{ currentLanguage === "en" ? contact.titleEn : contact.title }}
            </p>
          </div>
          <div class="contact-details">
            <p>
              <strong>Email: </strong>
              <a :href="`mailto:${contact.email}`">{{ contact.email }}</a>
            </p>
            <p><strong>WeChat: </strong> {{ contact.wechat }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Social Media -->
    <section class="social-section">
      <h2>{{ currentLanguage === "en" ? "Social Media" : "社交媒体" }}</h2>
      <div class="social-container">
        <div v-for="s in socialLinks" :key="s.label" class="social-card">
          <component v-if="s.icon" :is="s.icon" class="social-icon" />
          <img v-if="s.qrCode" :src="s.qrCode" alt="QR Code" width="80" />
          <img
            class="image-icon"
            v-if="s.image"
            :src="s.image"
            alt="QR Code"
            width="30"
          />
          <div class="social-info">
            <h4>{{ currentLanguage === "en" ? s.labelEn : s.label }}</h4>
            <p v-if="!s.link">{{ s.value }}</p>
            <a v-else :href="s.link" target="_blank" rel="noopener">{{
              s.value
            }}</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
@use "@/styles/main.scss" as *;
.page-container {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 2rem;
}

/* ---------- CONTACTS ---------- */
.contacts-section h2,
.social-section h2 {
  color: $usc-red;
}

.contacts-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.contact-card {
  background: white;
  border-radius: 1rem;
  padding: 1rem;

  h3 {
    font-size: 1.3rem;
    margin: 0;
    color: #333;
  }

  .contact-title {
    margin: 0.3rem 0 1rem;
    color: #666;
    font-size: 0.95rem;
  }

  .contact-details {
    font-size: 0.95rem;

    a {
      color: $usc-red;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}

/* ---------- SOCIAL MEDIA ---------- */
.social-container {
  display: flex;
  flex-wrap: wrap;
}

.social-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  min-width: 200px;

  .social-icon {
    color: $usc-red;
  }

  .image-icon {
    margin-right: 0;
  }

  .social-info {
    h4 {
      margin: 0;
      color: #333;
    }

    a,
    p {
      margin: 0;
      color: $usc-red;
    }
  }
}
</style>
