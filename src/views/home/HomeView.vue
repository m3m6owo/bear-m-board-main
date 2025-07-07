<template>
  <div class="home-box main-box">
    <div class="card1" @mousemove="handleMouseMove">
      <!-- <div class="bg-box">
        <img src="../../assets/img/home/bg_pinksky.webp" alt="" srcset="" />
      </div> -->
      <div class="gradient-overlay"></div>

      <div class="gradient-bg">
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div class="gradients-container">
          <div class="g1"></div>
          <div class="g2"></div>
          <div class="g3"></div>
          <div class="g4"></div>
          <div class="g5"></div>
          <div class="interactive"></div>
        </div>
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
              <div class="black-text black2">我是熱愛打造有趣的動態效果與介面的前端工程師，</div>
              <div class="black-text black3">使用Vue和GSAP創造出有靈魂的網頁</div>
              <div class="black-text black4">我相信，好的網頁不只要有高效能，</div>
              <div class="black-text black5">還要能展現精彩的動態效果與互動體驗。</div>
              <div class="blue-box">
                <div class="blue-text blue1">嗨，我是 Shan 👋</div>
                <div class="blue-text blue2">我是熱愛打造有趣的動態效果與介面的前端工程師，</div>
                <div class="blue-text blue3">使用Vue和GSAP創造出有靈魂的網頁</div>
                <div class="blue-text blue4">我相信，好的網頁不只要有高效能，</div>
                <div class="blue-text blue5">還要能展現精彩的動態效果與互動體驗。</div>
              </div>
              <div class="black2-box">
                <div class="black2-text black2-1">嗨，我是 Shan 👋</div>
                <div class="black2-text black2-2">
                  我是熱愛打造有趣的動態效果與介面的前端工程師，
                </div>
                <div class="black2-text black2-3">使用Vue和GSAP創造出有靈魂的網頁</div>
                <div class="black2-text black2-4">我相信，好的網頁不只要有高效能，</div>
                <div class="black2-text black2-5">還要能展現精彩的動態效果與互動體驗。</div>
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
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import imgSky from '@/assets/img/home/bg_sky3.webp'

gsap.registerPlugin(SplitText, ScrollTrigger)

const window_width = window.innerWidth

const handleMouseMove = (e: MouseEvent) => {
  const card = e.currentTarget as HTMLElement
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  card.style.setProperty('--x', `${x}px`)
  card.style.setProperty('--y', `${y}px`)
}

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

const c1Ani = () => {
  const hello = document.querySelector('.hello')
  const jshan = document.querySelector('.jshan')
  const isMobile = window.innerWidth <= 1024
  if (!hello || !jshan) return

  // 拆字
  const splitHello = new SplitText(hello, { type: 'chars' })
  const splitJshan = new SplitText(jshan, { type: 'chars' })

  if (window_width <= 1024) {
    const tl = gsap.timeline({ delay: 0.1 })
    tl.to('.gradient-overlay,.gradient-bg', {
      clipPath: 'inset(0%)',
      duration: 1,
      ease: 'expo.in',
    }).from(
      splitHello.chars,
      {
        x: gsap.utils.wrap([-70, 70]),
        filter: 'blur(5px)',
        opacity: 0,
        duration: 1,
        ease: 'power1.Out',
        stagger: { each: 0.05, from: 'center' },
      },
      '<0.75',
    )
    .from(
      splitJshan.chars,
      {
        x: gsap.utils.wrap([-70, 70]),
        filter: 'blur(5px)',
        opacity: 0,
        duration: 1,
        ease: 'power1.Out',
        stagger: { each: 0.05, from: 'center' },
      },
      '<',
    )
  } else {
    const tl = gsap.timeline({ delay: 0.1 })
    tl.to('.gradient-overlay,.gradient-bg', {
      clipPath: 'inset(0%)',
      duration: 1,
      ease: 'expo.in',
    })
      .to(
        splitHello.chars,
        {
          x: '-30vw',
          scale: 1,
          y: '-7vw',
          stagger: 0.05,
          color: 'white',
          duration: 1,
        },
        '<0.75',
      )
      .to(
        '.hello',
        {
          scale: 1,
          duration: 1,
        },
        '<',
      )
      .to(
        splitJshan.chars,
        {
          x: '23vw',
          scale: 1,
          y: '7vw',

          stagger: {
            each: '0.05',
            from: 'end',
          },
          color: 'white',
          duration: 1,
        },
        '<',
      )
      .to(
        '.jshan',
        {
          scale: 1,
          duration: 1,
        },
        '<',
      )
  }
}

const c2Ani = () => {
  if (window_width > 1024) {
    const smallENtitles = document.querySelectorAll('.black-text') // 多個
    const title1 = Array.from(smallENtitles).map(
      (heading) =>
        new SplitText(heading, {
          type: 'chars,words,lines',
          linesClass: 'clip-text',
        }),
    )

    const smallENtitles2 = document.querySelectorAll('.black2-text') // 多個
    const title2 = Array.from(smallENtitles2).map(
      (heading) =>
        new SplitText(heading, {
          type: 'chars,words,lines',
          linesClass: 'clip-text',
        }),
    )

    const smallENtitles3 = document.querySelectorAll('.blue-text') // 多個
    const title3 = Array.from(smallENtitles3).map(
      (heading) =>
        new SplitText(heading, {
          type: 'chars,words,lines',
          linesClass: 'clip-text',
        }),
    )
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.card2',
        start: 'top top',
        end: '+=200%',
        scrub: 2,
        pin: '.card2',
        pinSpacing: true,
      },
    })
    tl.to('.black1 .clip-text div div', {
      clipPath: 'inset(0% 0% 0% 0%)',
      stagger: {
        each: 0.05,
        from: 'start',
      },
    })
      .to(
        '.black2 .clip-text div div',
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          stagger: {
            each: 0.05,
            from: 'start',
          },
        },
        '<',
      )
      .to(
        '.black3 .clip-text div div',
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          stagger: {
            each: 0.05,
            from: 'start',
          },
        },
        '<',
      )
      .to(
        '.black4 .clip-text div div',
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          stagger: {
            each: 0.05,
            from: 'start',
          },
        },
        '<',
      )
      .to(
        '.black5 .clip-text div div',
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          stagger: {
            each: 0.05,
            from: 'start',
          },
        },
        '<',
      )
      .to('.blue1 .clip-text div div', {
        clipPath: 'inset(0% 0% 0% 0%)',
        stagger: {
          each: 0.05,
          from: 'start',
        },
      })
      .to(
        '.blue2 .clip-text div div',
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          stagger: {
            each: 0.05,
            from: 'start',
          },
        },
        '<',
      )
      .to(
        '.blue3 .clip-text div div',
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          stagger: {
            each: 0.05,
            from: 'start',
          },
        },
        '<',
      )
      .to(
        '.blue4 .clip-text div div',
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          stagger: {
            each: 0.05,
            from: 'start',
          },
        },
        '<',
      )
      .to(
        '.blue5 .clip-text div div',
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          stagger: {
            each: 0.05,
            from: 'start',
          },
        },
        '<',
      )
      .to(
        '.david-ogivy-box .title-box,.david-ogivy-box .bottom-content-box .smaill-title',
        {
          opacity: 1,
          duration: 1,
        },
        '<0.3',
      )
      .to(
        '.david-ogivy-box .bottom-content-box .center-box,.david-ogivy-box .bottom-content-box .right-box',
        {
          opacity: 1,
          duration: 1,
        },
        '<0.65',
      )
  }
}

const c2TitleAni = () => {
  if (window_width <= 1024) {
    const title = document.querySelector('.home-box .card2 .david-ogivy-box .title-box .en-title')
    if (!title) return

    const split = new SplitText(title, {
      type: 'chars',
    })

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.card2',
        start: 'top center',
      },
    })
    tl.fromTo(
      split.chars,
      {
        autoAlpha: 0,
        y: 100,
        filter: 'blur(10px)',
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        filter: 'blur(0px)',
        ease: 'power2',
        stagger: {
          each: 0.07,
          from: 'random',
        },
      },
    )
      .from(
        '.card2 .david-ogivy-box .bottom-content-box .left-box .black-box div',
        {
          y: 100,
          autoAlpha: 0,
          duration: 1,
          filter: 'blur(10px)',
          stagger: {
            each: 0.15,
          },
        },
        '<0.7',
      )
      .from(
        '.card2 .david-ogivy-box .bottom-content-box .right-box .more-box',
        {
          y: 100,
          autoAlpha: 0,
          duration: 1,
        },
        '<0.7',
      )
  } else {
    const title = document.querySelector('.home-box .card2 .david-ogivy-box .title-box .en-title')
    if (!title) return

    const split = new SplitText(title, {
      type: 'chars',
    })

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.card2',
        start: 'top center',
      },
    })
    tl.fromTo(
      split.chars,
      {
        autoAlpha: 0,
        y: 200,
        filter: 'blur(10px)',
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        filter: 'blur(0px)',
        ease: 'power2',
        stagger: {
          each: 0.07,
          from: 'random',
        },
      },
    )
  }
}

const c3Ani = () => {
  if (window_width <= 1024) {
    const title = document.querySelector('.home-box .card3 .title-box .en-title')
    if (!title) return

    const split = new SplitText(title, {
      type: 'chars',
    })

    const items = document.querySelectorAll('.home-box .card3 .project-box .item')

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

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.card3',
        start: 'top center',
      },
    })
    tl.fromTo(
      split.chars,
      {
        autoAlpha: 0,
        y: 200,
        filter: 'blur(10px)',
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        filter: 'blur(0px)',
        ease: 'power2',
        stagger: {
          each: 0.07,
          from: 'random',
        },
      },
    )
  } else {
    const title = document.querySelector('.home-box .card3 .title-box .en-title')
    if (!title) return

    const split = new SplitText(title, {
      type: 'chars',
    })

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.card3',
        start: 'top center',
      },
    })
    tl.fromTo(
      split.chars,
      {
        autoAlpha: 0,
        y: 200,
        filter: 'blur(10px)',
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        filter: 'blur(0px)',
        ease: 'power2',
        stagger: {
          each: 0.07,
          from: 'random',
        },
      },
    )
      .from(
        '.home-box .card3 .project-box div',
        {
          y: '70',
          opacity: 0,
          stagger: 0.07,
          duration: 1,
        },
        '<0.3',
      )
      .from(
        '.home-box .card3 .more-box',
        {
          x: '-70',
          opacity: 0,

          duration: 1,
        },
        '<0.8',
      )
  }
}

const c4Ani = () => {
  if (window_width <= 1024) {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.card4',
        start: '-40% center',
      },
    })

    tl.fromTo(
      '.home-box .card4 .marquee-container',
      {
        width: '20%',
      },
      {
        width: '77%',
        duration: 1.5,
      },
    )
  } else {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.card4',
        start: 'top center',
        end: '+=300', // 延長觸發區間，讓動畫更慢
        scrub: 2,
      },
    })

    tl.fromTo(
      '.home-box .card4 .marquee-container',
      {
        width: '20%',
      },
      {
        width: '70%',
        duration: 1.5,
      },
    )
  }
}

onMounted(() => {
  c1Ani()

  c2TitleAni()
  c2Ani()
  c3Ani()
  c4Ani()
})
</script>

<style scoped></style>
