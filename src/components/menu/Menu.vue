<template>
  <div
    class="menu-icon-container"
    ref="containerRef"
    @click.stop="showClick(true)"
    v-on:mousemove="!isMobile ? handleMouseMove : null"
    v-on:mouseleave="!isMobile ? handleMouseLeave : null"
  >
    <div class="menu-right">
      <img src="../../assets/img/menu/menu_2.svg" alt="" />
    </div>
  </div>

  <div class="menu-main" ref="menuRef" v-show="is_Show">
    <div class="left-img-box">
      <div class="images">
        <div
          class="img-box"
          v-for="(src, idx) in imgList"
          :key="idx"
          :ref="(el) => setImgRef(el, idx)"
        >
          <img :src="src" />
        </div>
      </div>
    </div>

    <div class="right-menu-box">
      <div class="link-box">
        <div
          class="item"
          v-for="(item, idx) in menuData"
          :key="item.id"
          @mouseenter="!isMobile ? onMouseEnter(idx) : null"
          @mouseleave="!isMobile ? onMouseLeave() : null"
          :class="{ 'fade-out': hoveredIndex !== null && hoveredIndex !== idx }"
          @mouseenter.native="!isMobile ? showImg(idx) : null"
        >
          <div class="links">
            <router-link
              v-for="link in item.list"
              :key="link.id"
              :to="{ name: link.link }"
            >
              <div class="zh">{{ item.zhName }}</div>
            </router-link>
          </div>
        </div>
      </div>
      <router-link to="/" class="back-index-button">
        <svg
          class="arrow-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
        返回首頁
      </router-link>
    </div>

    <div class="menu-icon-close" @click.stop="showClick(false)">
      <img src="../../assets/img/menu/close.svg" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, nextTick, watch } from 'vue'
import gsap from 'gsap'
import CustomEase from 'gsap/CustomEase'
import { menuData } from './menuData'
import { useRoute } from 'vue-router'
import '@/assets/scss/menu/_menu.scss'

const route = useRoute()
const isMobile = ref(false)

// 控制開關
const is_Show = ref(false)
const menuRef = ref<HTMLElement | null>(null)

/* 用於磁吸效果 */
const containerRef = ref<HTMLDivElement | null>(null)
/* 用於節流動畫，避免多次重複執行動畫 */
let animating = false
/* 紀錄最新的滑鼠事件，配合 requestAnimationFrame 控制更新頻率 */
let lastEvent: MouseEvent | null = null

// 追蹤 hover 狀態
const hoveredIndex = ref<number | null>(null)
const onMouseEnter = (idx: number) => {
  if (isMobile.value) return
  hoveredIndex.value = idx
}
const onMouseLeave = () => {
  if (isMobile.value) return
  hoveredIndex.value = null
}

/* 根據滑鼠事件計算並更新 containerRef 元素的 transform */
const updateTransform = (e: MouseEvent) => {
  if (!containerRef.value) return
  const rect = containerRef.value.getBoundingClientRect()
  const offsetX = e.clientX - rect.left - rect.width / 2
  const offsetY = e.clientY - rect.top - rect.height / 2

  const rotateX = (offsetY / rect.height) * 15
  const rotateY = (offsetX / rect.width) * 15
  const scale = 1.05

  containerRef.value.style.transform = `
    translate(${offsetX * 0.6}px, ${offsetY * 0.6}px)
    rotateX(${-rotateX}deg)
    rotateY(${rotateY}deg)
    scale(${scale})
  `
}

const resetTransform = () => {
  if (!containerRef.value) return
  containerRef.value.style.transform = 'translate(0, 0) rotateX(0deg) rotateY(0deg) scale(1)'
}

/* 處理滑鼠移動事件 */
const handleMouseMove = (e: MouseEvent) => {
  if (isMobile.value) return // 手機不執行
  lastEvent = e

  if (!animating) {
    animating = true
    window.requestAnimationFrame(() => {
      if (lastEvent) {
        updateTransform(lastEvent)
      }
      animating = false
    })
  }
}

/* 滑鼠離開容器時呼叫，重置 transform */
const handleMouseLeave = () => {
  if (isMobile.value) return // 手機不執行
  resetTransform()
}

/* CustomEase */
gsap.registerPlugin(CustomEase)
CustomEase.create('myEase', '0.24,0.43,0.15,0.97')

const currentIndex = ref<number | null>(null)

const imgList = [
  new URL('@/assets/img/menu/1.webp', import.meta.url).href,
  new URL('@/assets/img/menu/2.webp', import.meta.url).href,
  new URL('@/assets/img/menu/3.webp', import.meta.url).href,
]

function getDom(el: any): HTMLElement | null {
  if (!el) return null
  if ('$el' in el) {
    return el.$el as HTMLElement
  } else if (el instanceof HTMLElement) {
    return el
  }
  return null
}

const imgRefs = ref<HTMLElement[]>([])
const setImgRef = (el: any, idx: number) => {
  const dom = getDom(el)
  if (dom) {
    imgRefs.value[idx] = dom
  }
}

let zCounter = 1

const showImg = (idx: number) => {
  if (isMobile.value) return
  if (currentIndex.value === idx) return
  currentIndex.value = idx

  const el = imgRefs.value[idx]
  if (!el) return

  gsap.set(el, { clipPath: 'inset(100% 0% 0% 0%)', scale: 1.7 })
  gsap.set(el, { zIndex: ++zCounter })
  gsap.fromTo(
    el,
    { clipPath: 'inset(100% 0% 0% 0%)', scale: 1.7 },
    {
      clipPath: 'inset(0% 0% 0% 0%)',
      duration: 1,
      scale: 1,
      ease: 'myEase',
      overwrite: true,
    }
  )
}

const showed = new Set<number>()
const showClick = (val: boolean) => {
  if (val) {
    is_Show.value = true
    nextTick(() => {
      if (!menuRef.value) return
      const tl = gsap.timeline({})
      const linkBoxes = gsap.utils.toArray<HTMLElement>('.link-box .item .links')

      tl.fromTo(
        menuRef.value,
        { clipPath: 'inset(100% 0% 0% 0%)', opacity: 0 },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1,
          ease: 'expo.inOut',
          opacity: 1,
        }
      ).fromTo(
        '.left-img-box .img-box img:first-child',
        { clipPath: 'inset(100% 0% 0% 0%)', scale: 1.4 },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1,
          ease: 'myEase',
          scale: 1,
        },
        '<0.2'
      ).from('.menu-main .right-menu-box .link-box .item .links',{
        y:70,
        stagger:0.2,ease: 'myEase',
        duration: 1,
      },'<0.3')

      imgRefs.value.forEach((el) => {
        gsap.set(el, { clipPath: 'inset(100% 0% 0% 0%)', zIndex: 0 })
      })

      zCounter = 1
      showed.clear()
      currentIndex.value = null

      showImg(0)
    })
    if (isMobile.value) {
      const mobileTL  = gsap.timeline({})
      mobileTL.fromTo(
        '.left-img-box .img-box:first-child',
        { clipPath: 'inset(100% 0% 0% 0%)', },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1,
          ease: 'myEase',

        },

      )
    }
  } else {
    if (!menuRef.value) return

    if (isMobile.value) {
      // 手機版直接淡出
      console.log(1)
      gsap.to(menuRef.value, {
        opacity: 0,
        duration: 1,
        onComplete: () => {
          gsap.set(menuRef.value, { opacity: 1, clipPath: 'inset(100% 0% 0% 0%)' })
          is_Show.value = false
        },
      })
    } else {
      const closeTl = gsap.timeline({})
      closeTl
      .to('.menu-main .left-img-box .images .img-box', {
        clipPath: 'inset(0% 0% 100% 0%)',
        duration: 1,
        ease: 'myEase',
      })
      .to(
        menuRef.value,
        {
          clipPath: 'inset(0% 0% 100% 0%)',
          duration: 0.8,
          ease: 'myEase',
          onComplete: () => {
            is_Show.value = false
            gsap.set(menuRef.value, { clipPath: 'inset(0% 100% 0% 0%)' })
          },
        },
        '<0.1'
      )
    }

  }
}

onMounted(() => {
  if (is_Show.value && menuRef.value) {
    gsap.set(menuRef.value, {
      clipPath: 'inset(100% 0% 0% 0%)',
    })
  }
  nextTick(() => {
    imgRefs.value.forEach((el) =>
      gsap.set(el, { clipPath: 'inset(100% 0% 0% 0%)', zIndex: 0 })
    )
    showImg(0)
    isMobile.value = 'ontouchstart' in window || navigator.maxTouchPoints > 0
  })
})

watch(
  () => route.fullPath,
  () => {
    if (is_Show.value) {
      showClick(false)
    }
  }
)
</script>

<style lang="scss">
/* 你既有樣式都保留，新增淡化效果 */

.link-box {
  .item {
    transition: all 0.4s ease;
    &.fade-out {
      opacity: 0.4;
      pointer-events: none;
    }
  }
}
</style>
