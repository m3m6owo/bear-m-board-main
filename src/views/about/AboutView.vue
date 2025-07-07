<template>
  <div class="about-body">
    <div class="big-title">ABOUT ME</div>
    <div class="top-box">
      <div class="left-box">
        <div class="item">*</div>
        <div class="img-box">
          <img src="../../assets/img/contact/me.webp" alt="" srcset="" />
        </div>
      </div>

      <div class="right-box">
        <div class="name">江語珊</div>
        <div class="intro">
          你好，我是一名前端工程師，熱情開朗，擅長與團隊成員溝通協作，共同解決問題並創造優質的產品。工作和生活中都愛嘗試新事物，不斷學習成長。
        </div>

        <div class="skills-box">
          <div class="skills">技能💫</div>
          <ul>
            <li>Vue / Angular</li>
            <li>JavaScript / TypeScript</li>
            <li>HTML / CSS / SCSS / RWD</li>
            <li>GSAP動態效果</li>
          </ul>
        </div>

        <svg
          class="arrow"
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32 12V52"
            stroke="#577084"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16 36L32 52L48 36"
            stroke="#577084"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>

    <div class="bottom-box">
      <div class="title">My Story</div>
      <div class="personal-statement">
        在過去的開發過程中，我能獨立完成整體專案，從 UI/UX 設計、網站架構規劃，到前端開發與動態效果、互動功能製作，都能全程參與並順利執行，也經常與後端工程師密切配合進行資料串接。
        我擅長與同事溝通協作，重視團隊合作，也樂於提出建議，協助優化整體使用者體驗與開發流程。除了前端技術外，我也具備獨立完成專案、動畫效果設計及功能開發的能力，能根據需求打造符合需求的網站。
<br>未來希望能持續精進前端技術，參與更多具挑戰性與影響力的專案，打造更出色的使用者體驗。
      </div>
    </div>

    <div class="email-box">
      <div class="title">
        GET IN TOUCH：）
      </div>
      <div class="email">
        m3m6owo@gmail.com
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

import '@/assets/scss/about/_about-view.scss'
</script>

<style scoped lang="scss"></style>
