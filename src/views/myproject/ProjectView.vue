<template>
  <div class="project-body">
    <div class="project-container">
      <div class="top-img-box">
        <img class="top-img" src="../../assets/img/project/bg_sky4.webp" alt="" />

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

        <div class="scroll-top-box">
          <img src="../assets/images/moblie_top.svg" alt="" class="scroll-top" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import '@/assets/scss/project/_project.scss'
import {ref } from 'vue'

const projectList =  ref([
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

</script>
