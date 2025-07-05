<template>  <Menu />
  <router-view v-slot="{ Component, route }">
    <FadeIn><component :is="Component" :key="route.path"></component></FadeIn>
  </router-view>
</template>

<script setup lang="ts">

import { RouterView } from 'vue-router'
import Menu from '@/components/menu/Menu.vue'
import FadeIn from './components/transition/FadeIn.vue'

</script>

<style scoped></style>
