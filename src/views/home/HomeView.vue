<template>

  <div class="home-box main-box">

    <div class="card1">
      <div class="bg-box">
        <img src="../../assets/img/home/bg_pinksky.webp" alt="" srcset="" />
      </div>
      <div class="hello">HELLO</div>
      <div class="jshan">I'm J Shan</div>
      <div class="small-title">Front-End Developer.</div>
    </div>

    <div class="card2">
      <div class="david-ogivy-box">
        <div class="title-box">
          <div class="en-title">ABOUT ME</div>
        </div>
        <div class="bottom-content-box">
          <div class="left-box">
            <div class="black-box">
              <div class="black-text black1">嗨，我是 Shan 👋</div>
              <div class="black-text black2">
                我是一名熱愛打造有趣的動態效果與好用介面的前端工程師，
              </div>
              <div class="black-text black3">使用Vue和GSAP創造出有靈魂的網頁</div>
              <div class="black-text black4">我相信，好的網頁不只要有高效能，</div>
              <div class="black-text black4">還要能展現精彩的動態效果與互動體驗。</div>
              <div class="blue-box">
                <div class="blue-text blue1">嗨，我是 Shan 👋</div>
                <div class="blue-text blue2">
                  我是一名熱愛打造有趣的動態效果與好用介面的前端工程師，
                </div>
                <div class="blue-text blue3">使用Vue和GSAP創造出有靈魂的網頁</div>
                <div class="blue-text blue4">我相信，好的網頁不只要有高效能，</div>
                <div class="blue-text blue4">還要能展現精彩的動態效果與互動體驗。</div>
              </div>
              <div class="black2-box">
                <div class="black2-text black2-1">嗨，我是 Shan 👋</div>
                <div class="black2-text black2-2">
                  我是一名熱愛打造有趣的動態效果與好用介面的前端工程師，
                </div>
                <div class="black2-text black2-3">使用Vue和GSAP創造出有靈魂的網頁</div>
                <div class="black2-text black2-4">我相信，好的網頁不只要有高效能，</div>
                <div class="black2-text black2-4">還要能展現精彩的動態效果與互動體驗。</div>
              </div>
            </div>
          </div>

          <div class="right-box">
            <div class="more-box">
              <div class="more">MORE</div>
              <img src="../../assets/img/home/more.svg" alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card3">
      <div class="title-box">
        <div class="en-title">PROJECT</div>
      </div>
      <div class="project-box">
        <div class="item" v-for="(project, index) in projects" :key="index">
          <div class="img-box">
            <img :src="project.imgSrc" :alt="project.name" />
          </div>
          <div class="name">{{ project.name }}</div>
        </div>
      </div>

      <div class="more-box">
        <div class="more">MORE</div>
        <img src="../../assets/img/home/more.svg" alt="" srcset="" />
      </div>
    </div>

    <div class="card4">
      <div class="marquee-container">
        <div class="marquee top">
          <span v-for="n in 10" :key="n">GET IN TOUCH：）&nbsp;</span>
        </div>
        <div class="marquee bottom">
          <span v-for="n in 10" :key="n">Click me✨&nbsp;</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Menu from '@/components/menu/Menu.vue'
import gsap from 'gsap'
import FadeIn from '@/components/transition/FadeIn.vue'


import '@/assets/scss/home/_home-view.scss'

import imgSky from '@/assets/img/home/bg_sky3.webp'

const projects = ref([
  {
    name: '測試測試測試 1',
    imgSrc: imgSky,
  },
  {
    name: '測試測試測試 2',
    imgSrc: imgSky,
  },
  {
    name: '測試測試測試 3',
    imgSrc: imgSky,
  },
  {
    name: '測試測試測試 4',
    imgSrc: imgSky,
  },
])
</script>

<style scoped></style>
