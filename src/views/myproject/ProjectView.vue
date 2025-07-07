<template>
  <div class="project-body">
    <div class="project-container">
      <div class="top-img-box">
        <picture>
          <source srcset="../../assets/img/project/3.webp" media="(max-width: 1024px)" />
          <img class="top-img" src="../../assets/img/project/bg_sky4.webp" alt="" />
        </picture>

        <div class="top-title-box">
          <div class="big-en-title">PROJECT</div>
        </div>
      </div>
      <div class="page-container">
        <div class="project-box">
          <div class="project-item" v-for="(item, index) in projectList" :key="index">
            <div class="img-box">
              <img :src="item.img" alt="" />
            </div>
            <div class="project-content">
              <div class="project-name">{{ item.name }}</div>
            </div>
          </div>
        </div>

        <div class="scroll-top-box" @click="scrollToTop">
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="scroll-top"
          >
            <path
              d="M32 52V12"
              stroke="#577084"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16 28L32 12L48 28"
              stroke="#577084"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import Footer from '@/components/footer/FooterComponent.vue'
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import '@/assets/scss/project/_project-view.scss'
gsap.registerPlugin(SplitText, ScrollTrigger,ScrollToPlugin)
// gsap.registerPlugin(ScrollToPlugin);
const window_width = window.innerWidth

const projectList = ref([
  {
    name: '新祐京晏',
    img: new URL('@/assets/img/project/bg_sky3.webp', import.meta.url).href,
  },
  {
    name: '新祐京晏',
    img: new URL('@/assets/img/project/bg_sky3.webp', import.meta.url).href,
  },
  {
    name: '新祐京晏',
    img: new URL('@/assets/img/project/bg_sky3.webp', import.meta.url).href,
  },
  {
    name: '新祐京晏',
    img: new URL('@/assets/img/project/bg_sky3.webp', import.meta.url).href,
  },
  {
    name: '新祐京晏',
    img: new URL('@/assets/img/project/bg_sky3.webp', import.meta.url).href,
  },
])

const scrollToTop = () => {
  gsap.to(window, {
    duration: 1.5,
    scrollTo: { y: 0 },
    ease: "power2.inOut"
  });
};

const titleAni = () => {
  const title = document.querySelectorAll(
    '.project-body .project-container .top-img-box .top-title-box .big-en-title',
  )
  const splittitle = new SplitText(title, { type: 'chars' })


    let tl = gsap.timeline({})

    tl.from('.project-body .project-container .top-img-box img', {
      duration: 1,
      scale: 1.6,
      ease: 'power1.Out',
    }).from(
      splittitle.chars,
      {
        y: gsap.utils.wrap([70, 70]),
        filter: 'blur(5px)',
        opacity: 0,
        duration: 1,
        ease: 'power1.Out',
        stagger: { each: 0.08 },
      },
      '<0.15',
    )

}

const contentAni = () => {
  const items = document.querySelectorAll('.project-box .project-item')

  if (window_width <= 1024) {
    items.forEach((item) => {
      gsap.fromTo(
        item,
        {
          autoAlpha: 0,
          y: 100,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        },
      )
    })
  } else {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.page-container',
        start: 'top center',
        toggleActions: 'play none none reverse',
      },
    })

    tl.fromTo(
      items,
      {
        autoAlpha: 0,
        y: 100,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        stagger: 0.08,
      },
    )
  }
}

onMounted(() => {
  titleAni()
  contentAni()
})
</script>
