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
          你好，我是一名前端工程師，熱情開朗，喜歡VUE也喜歡GSAP，擅長與團隊成員溝通協作，共同解決問題並創造優質的產品。工作和生活中都愛嘗試新事物，不斷學習成長。
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
        在過去的開發經驗中，能夠獨立完成整體專案，使用<span>VUE3</span>作為主要框架，並運用<span>GSAP</span>做出動態效果，
        從UI/UX設計、網站架構規劃，到前端開發，都能全程參與並順利執行，
        也經常與後端工程師密切配合進行資料串接。我擅長與同事溝通協作，重視團隊合作，也樂於提出建議，協助優化整體使用者體驗與開發流程。除了前端技術外，我也具備獨立完成專案、動畫效果設計及功能開發的能力，能根據需求打造符合需求的網站。
        <br />未來希望能持續精進前端技術，參與更多具挑戰性與影響力的專案，打造更出色的作品。
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
gsap.registerPlugin(SplitText, ScrollTrigger)
import '@/assets/scss/about/_about-view.scss'
const window_width = window.innerWidth
const titleAni = () => {
  const title = document.querySelectorAll(
    '.big-title',
  )
  const splittitle = new SplitText(title, { type: 'chars' })
    let tl = gsap.timeline({})

    tl.from(
      splittitle.chars,
      {
        y: gsap.utils.wrap([70, 70]),
        filter: 'blur(5px)',
        opacity: 0,
        duration: 1,
        ease: 'power1.Out',
        stagger: { each: 0.08 },
      }
    ).from(
      '.about-body .top-box .right-box .name,.about-body .top-box .right-box .intro',
      {
        y: 70,
        opacity: 0,
        duration: 1,
        stagger: { each: 0.2 },
      },
      '<0.3',
    )
    .from(
      '.skills,ul',
      {
        y: 70,
        opacity: 0,
        duration: 1,
        stagger: { each: 0.2 },
      },
      '<0.35',
    )

}

const imgAni = () => {
  const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.about-body .top-box .left-box',
        start: '-10% center',
      },
    })

    tl.from('.about-body .top-box .left-box .img-box',{
      y:70,
      duration: 1,
      opacity:0
    })
    .from('.about-body .top-box .left-box .item',{
      y:100,
      duration: 1,
      opacity:0
    },'<0.3')
}

const contentAni = () => {
  const smalltitle = document.querySelectorAll(
    '.about-body .bottom-box .title',
  )
  const splitsmalltitle = new SplitText(smalltitle, { type: 'chars' })
  const emailtitle = document.querySelectorAll(
    '.about-body .email-box .title',
  )
  const splitemailtitle = new SplitText(emailtitle, { type: 'chars' })
  const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.about-body .bottom-box',
        start: '-10% center',
      },
    })

    tl.from(
      splitsmalltitle.chars,
      {
        y: gsap.utils.wrap([70, 70]),
        filter: 'blur(5px)',
        opacity: 0,
        duration: 1,
        ease: 'power1.Out',
        stagger: { each: 0.08 },
      }
    ).from('.personal-statement',{
      y:70,  opacity: 0,
        duration: 1,
    },'<0.3')
    .from(
      splitemailtitle.chars,
      {
        y: gsap.utils.wrap([-70, 70]),
        scale:2,
        filter: 'blur(5px)',
        opacity: 0,
        duration: 1,
        ease: 'power1.Out',
        stagger: { each: 0.08,from:'center' },
      },'<0.5'
    ).from('.about-body .email-box .email',{
      y:70,
      opacity: 0,
        duration: 1,
    },'<0.8')
}

const emailAni = () => {
  const emailtitle = document.querySelectorAll(
    '.about-body .email-box .title',
  )
  const splitemailtitle = new SplitText(emailtitle, { type: 'chars' })
  if(window_width<=1024){
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.about-body .bottom-box',
        start: '20% center',

      },
    })
    tl.from(
      splitemailtitle.chars,
      {
        y: gsap.utils.wrap([-70, 70]),
        scale:2,
        filter: 'blur(5px)',
        opacity: 0,
        duration: 1,
        ease: 'power1.Out',
        stagger: { each: 0.08,from:'center' },
      }
    ).from('.about-body .email-box .email',{
      y:70,  opacity: 0,
        duration: 1,
    },'<0.3')
  }else{

  }



}

onMounted(() => {
  titleAni()
  imgAni()
  contentAni()
 emailAni()
})
</script>

<style scoped lang="scss"></style>
