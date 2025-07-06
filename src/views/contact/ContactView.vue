<template>
  <div class="contact-body" ref="contactRef">
    <div class="title-box">
      <div>Let’s create</div>
      <div>something great.</div>
    </div>

    <div class="info-box">
      <div class="left-box">
        <div class="greeting">Hello
          <div>👋</div>
         </div>
        <div class="email">
          <div>EMAIL:</div>
          m3m6owo@gmail.com
        </div>
      </div>
    </div>

    <img class="me-img" src="../../assets/img/contact/me.webp" alt="me" srcset="">
  </div>
</template>
<script setup lang="ts">
import '@/assets/scss/contact/_contact-view.scss'

import { onMounted, ref } from 'vue';


onMounted(() => {
  window.addEventListener('click', (e) => {
    const emojis = ['✨', '❄️', '🌷', '🌼'];
    const emoji = document.createElement('div');
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.position = 'fixed';
    emoji.style.left = `${e.clientX}px`;
    emoji.style.top = `${e.clientY}px`;
    emoji.style.fontSize = '2rem';
    emoji.style.pointerEvents = 'none';
    emoji.style.zIndex = '9999';
    emoji.style.opacity = '1';
    emoji.style.transition = 'transform 1s ease, opacity 1s ease';

    document.body.appendChild(emoji);

    // 觸發動畫
    requestAnimationFrame(() => {
      emoji.style.transform = 'translateY(-80px) scale(1.5)';
      emoji.style.opacity = '0';
    });

    setTimeout(() => {
      emoji.remove();
    }, 1000);
  });
});


</script>
