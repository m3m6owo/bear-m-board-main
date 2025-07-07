<template>
  <div class="contact-body" ref="contactRef">
    <div class="title-box">
      <div class="title1">Let’s create</div>
      <div class="title2">something great.</div>
    </div>

    <div class="info-box">
      <div class="left-box">
        <div class="greeting">
          Hello
          <div>👋</div>
        </div>
        <div class="email">
          <div>EMAIL:</div>
          m3m6owo@gmail.com
        </div>
      </div>
    </div>

    <img class="me-img" src="../../assets/img/contact/me.webp" alt="me" srcset="" />
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

import '@/assets/scss/contact/_contact-view.scss'

gsap.registerPlugin(SplitText, ScrollTrigger)

const titleAni = () => {
  const item = document.querySelectorAll('.contact-body .title-box .title1')
  const item2 = document.querySelectorAll('.contact-body .title-box .title2')

  const splittitle = new SplitText(item, { type: 'chars' })
  const splittitle2 = new SplitText(item2, { type: 'chars' })

  let tl = gsap.timeline({delay:0.2})

  tl.from(splittitle.chars, {
    y: gsap.utils.wrap([50, 50]),
    rotation: gsap.utils.wrap([-20, 10]),
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    stagger: { each: 0.08 },
  })
  .from(splittitle2.chars, {
    y: gsap.utils.wrap([50, 50]),
    rotation: gsap.utils.wrap([-20, 10]),
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    stagger: { each: 0.08 },
  },'<')
    .from(
      '.greeting',
      {
        opacity: 0,
        filter: 'blur(6px)',
        y: 70,
        duration: 1,
      },
      '<0.95',
    )
    .from(
      '.email',
      {
        opacity: 0,
        filter: 'blur(6px)',
        y: 70,
        duration: 1,
        stagger: { each: 0.08 },
      },
      '<0.3',
    )
    .from(
      '.me-img',
      {
        opacity: 0,
        filter: 'blur(6px)',

        duration: 1,

      },
      '<0.3',
    )


}

onMounted(() => {
  const isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0
  titleAni()
  if (isMobile) return // 手機版直接不註冊事件

  const clickHandler = (e: MouseEvent) => {
    const emojis = ['✨', '❄️', '🌷', '🌼']
    const emoji = document.createElement('div')
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)]
    emoji.style.position = 'fixed'
    emoji.style.left = `${e.clientX}px`
    emoji.style.top = `${e.clientY}px`
    emoji.style.fontSize = '2rem'
    emoji.style.pointerEvents = 'none'
    emoji.style.zIndex = '9999'
    emoji.style.opacity = '1'
    emoji.style.transition = 'transform 1s ease, opacity 1s ease'

    document.body.appendChild(emoji)

    requestAnimationFrame(() => {
      emoji.style.transform = 'translateY(-80px) scale(1.5)'
      emoji.style.opacity = '0'
    })

    setTimeout(() => {
      emoji.remove()
    }, 1000)
  }

  window.addEventListener('click', clickHandler)
})
</script>
