<template>
  <router-view v-slot="{ Component, route }">
    <Menu />
    <FadeIn>
      <component :is="Component" :key="route.path"></component>
    </FadeIn>
    <Footer v-if="route.name !== 'contact'" />

  </router-view>
</template>

<script setup lang="ts">

import { RouterView } from 'vue-router'
import Menu from '@/components/menu/Menu.vue'
import Footer from '@/components/footer/FooterComponent.vue'
import FadeIn from './components/transition/FadeIn.vue'
import '@/assets/scss/_main.scss'
</script>

<style scoped></style>
