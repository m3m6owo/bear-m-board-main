<template>
  <div class="project-body">
    <div class="project-container">
      <!-- 頂部圖片與標題 -->
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
        <!-- 篩選按鈕 -->
        <div class="filter-buttons">
          <button :class="{ active: activeCategory === 'all' }" @click="activeCategory = 'all'">
            全部
          </button>
          <button
            :class="{ active: activeCategory === 'officialWebsite' }"
            @click="activeCategory = 'officialWebsite'"
          >
            官網
          </button>
          <button
            :class="{ active: activeCategory === 'onePage' }"
            @click="activeCategory = 'onePage'"
          >
            一頁式
          </button>
        </div>

        <!-- 專案清單 -->
        <div class="project-box">
          <a
            v-for="(item, index) in filteredProjects"
            :key="index"
            :href="item.link || '#'"
            class="project-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="img-box">
              <img :src="item.img" alt="" />
            </div>
            <div class="project-content">
              <div class="project-name">{{ item.name }}</div>
            </div>
          </a>
        </div>

        <!-- 回頂部按鈕 -->
        <div class="scroll-top-box" @click="scrollToTop">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" class="scroll-top">
            <path d="M32 52V12" stroke="#577084" stroke-width="1" stroke-linecap="round" />
            <path d="M16 28L32 12L48 28" stroke="#577084" stroke-width="1" stroke-linecap="round" />
          </svg>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import Footer from '@/components/footer/FooterComponent.vue'
import { ref, onMounted, computed } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import '@/assets/scss/project/_project-view.scss'

gsap.registerPlugin(SplitText, ScrollTrigger, ScrollToPlugin)

const window_width = window.innerWidth

// 🔸 加入分類欄位 category
const projectList = ref([
  {
    name: '橄欖樹廣告',
    img: new URL('@/assets/img/project/official/olive_tree.webp', import.meta.url).href,
    category: 'officialWebsite',
    link: 'https://o-t.com.tw/',
  },
  {
    name: '亞儂媒體',
    img: new URL('@/assets/img/project/official/yep_media.webp', import.meta.url).href,
    category: 'officialWebsite',
    link: 'https://yepmedia.com.tw/',
  },
  {
    name: '元曜建設',
    img: new URL('@/assets/img/project/official/yuanyao.webp', import.meta.url).href,
    category: 'officialWebsite',
    link:'https://www.yuan-yao.tw/'
  },
  {
    name: '立彩建設',
    img: new URL('@/assets/img/project/official/li.webp', import.meta.url).href,
    category: 'officialWebsite',
    link:'https://www.li-tsai.com.tw/'
  },
  {
    name: '賽尚圖文',
    img: new URL('@/assets/img/project/official/sai.webp', import.meta.url).href,
    category: 'officialWebsite',
    link:'https://www.tsais-idea.com.tw/'
  },
  {
    name: '龍騰微笑獎',
    img: new URL('@/assets/img/project/official/long.webp', import.meta.url).href,
    category: 'officialWebsite',
    link:'https://longterm.acerfoundation.org.tw/#/'
  },
  {
    name: '鑽很大online',
    img: new URL('@/assets/img/project/official/diamondonline.webp', import.meta.url).href,
    category: 'officialWebsite',
    link:'https://www.diamondonline.com.tw/'
  },
  {
    name: '鑽很大Bingo',
    img: new URL('@/assets/img/project/official/bingo.webp', import.meta.url).href,
    category: 'officialWebsite',
    link:''
  },
  {
    name: 'BingoBingo',
    img: new URL('@/assets/img/project/official/33_bingo.webp', import.meta.url).href,
    category: 'officialWebsite',
    link:''
  },

  {
    name: '舜元出雲',
    img: new URL('@/assets/img/project/onepage/1.webp', import.meta.url).href,
    category: 'onePage',
    link:'https://ws.srl.tw/cs/202307041708218/'
  },
  {
    name: '樺輝沐畇',
    img: new URL('@/assets/img/project/onepage/2.webp', import.meta.url).href,
    category: 'onePage',
    link:'https://ws.srl.tw/cs/2023120412524016/'
  },
  {
    name: '世座友樂町',
    img: new URL('@/assets/img/project/onepage/3.webp', import.meta.url).href,
    category: 'onePage',
    link:'https://ws.srl.tw/cs/2024101809194890/'
  },
  {
    name: '恆合鈺璽',
    img: new URL('@/assets/img/project/onepage/4.webp', import.meta.url).href,
    category: 'onePage',
    link:'https://eliteresidence.srl.tw/'
  },
  {
    name: '豐邑 Green iN',
    img: new URL('@/assets/img/project/onepage/5.webp', import.meta.url).href,
    category: 'onePage',
    link:'https://ws.srl.tw/cs/2023092616092280/?test=%E6%B8%AC%E8%A9%A6'
  },
  {
    name: '宜誠八德案',
    img: new URL('@/assets/img/project/onepage/6.webp', import.meta.url).href,
    category: 'onePage',
    link:'https://ws.srl.tw/cs/2024110222161782/'
  },

  {
    name: '豐邑ONE+',
    img: new URL('@/assets/img/project/onepage/8.webp', import.meta.url).href,
    category: 'onePage',
    link:'https://ws.srl.tw/cs/2023120710094332/'
  },
  {
    name: '全坤衡峰',
    img: new URL('@/assets/img/project/onepage/9.webp', import.meta.url).href,
    category: 'onePage',
    link:'https://ws.srl.tw/cs/2024032209320558/'
  },
  {
    name: '森鉅M',
    img: new URL('@/assets/img/project/onepage/10.webp', import.meta.url).href,
    category: 'onePage',
    link:'https://ws.srl.tw/cs/2024070109203744/'
  },
  {
    name: '大新田幸福之森',
    img: new URL('@/assets/img/project/onepage/11.webp', import.meta.url).href,
    category: 'onePage',
    link:'https://ws.srl.tw/cs/2025030610504398/'
  },
  {
    name: '北城•羅斯福',
    img: new URL('@/assets/img/project/onepage/12.webp', import.meta.url).href,
    category: 'onePage',
    link:'https://ws.srl.tw/cs/2023112710552648/?test=%E6%B8%AC%E8%A9%A6'
  },
  {
    name: '鴻堡俬玥藏',
    img: new URL('@/assets/img/project/onepage/13.webp', import.meta.url).href,
    category: 'onePage',
    link:'https://ws.srl.tw/cs/2024051711015229/'
  },
  {
    name: '悅城2',
    img: new URL('@/assets/img/project/onepage/14.webp', import.meta.url).href,
    category: 'onePage',
    link:'https://ws.srl.tw/cs/2024011509271466/'
  },
  {
    name: 'Quayside JBCC百星匯',
    img: new URL('@/assets/img/project/onepage/15.webp', import.meta.url).href,
    category: 'onePage',
    link:'https://ws.srl.tw/cs/2024011717012494/'
  },
  {
    name: '柏宣天擎',
    img: new URL('@/assets/img/project/onepage/boo.webp', import.meta.url).href,
    category: 'onePage',
    link:'https://ws.srl.tw/cs/2024080116283895/'
  },
  {
    name: '昂峰京澄',
    img: new URL('@/assets/img/project/onepage/jin.webp', import.meta.url).href,
    category: 'onePage',
    link:'https://ws.srl.tw/test/2024101110280585/'
  },
  {
    name: '森宇緻富',
    img: new URL('@/assets/img/project/onepage/yu.webp', import.meta.url).href,
    category: 'onePage',
    link:'https://ws.srl.tw/cs/2023083111350799/'
  },
])

// 🔸 篩選狀態
const activeCategory = ref<'all' | 'officialWebsite' | 'onePage'>('all')

// 🔸 計算篩選後的專案列表
const filteredProjects = computed(() => {
  if (activeCategory.value === 'all') return projectList.value
  return projectList.value.filter((item) => item.category === activeCategory.value)
})

const scrollToTop = () => {
  gsap.to(window, {
    duration: 1.5,
    scrollTo: { y: 0 },
    ease: 'power2.inOut',
  })
}

const titleAni = () => {
  const title = document.querySelectorAll('.big-en-title')
  const splittitle = new SplitText(title, { type: 'chars' })

  let tl = gsap.timeline({})
  tl.from('.top-img-box img', {
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
        { autoAlpha: 0, y: 100 },
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

    tl.fromTo(items, { autoAlpha: 0, y: 60 }, { autoAlpha: 1, y: 0, duration: 1, stagger: 0.08 })
  }
}

onMounted(() => {
  titleAni()
  contentAni()
})
</script>
