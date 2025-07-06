<template>
  <div
    ref="cursor"
    :class="['custom-cursor', { active: isActive }]"
    :style="{ left: x + 'px', top: y + 'px' }"
  ></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const cursor = ref<HTMLElement | null>(null)
const x = ref(-100)
const y = ref(-100)
const isActive = ref(false)

const onMouseMove = (e: MouseEvent) => {
  x.value = e.clientX
  y.value = e.clientY
}

const onMouseOver = (e: MouseEvent) => {
  // 判斷目標元素是否有 .cursor-hover class 或 svg (可以依需要擴充)
  const target = e.target as HTMLElement
  if (
    target.classList.contains('cursor-hover') ||
    target.tagName.toLowerCase() === 'svg'
  ) {
    isActive.value = true
  }
}

const onMouseOut = (e: MouseEvent) => {
  const target = e.target as HTMLElement
  if (
    target.classList.contains('cursor-hover') ||
    target.tagName.toLowerCase() === 'svg'
  ) {
    isActive.value = false
  }
}

onMounted(() => {
  window.addEventListener('mousemove', onMouseMove)
  window.addEventListener('mouseover', onMouseOver)
  window.addEventListener('mouseout', onMouseOut)
})

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('mouseover', onMouseOver)
  window.removeEventListener('mouseout', onMouseOut)
})
</script>

<style scoped>
.custom-cursor {
  pointer-events: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 24px;
  height: 24px;
  border: 2px solid #ffe2e2;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease;
  opacity: 1;
  mix-blend-mode: difference;
  z-index: 9999;
  background-color: transparent;
  will-change: transform, width, height, border-color, opacity;
  cursor: none;
}

.custom-cursor.active {
  width: 40px;
  height: 40px;
  border-color: #d2c1b6;
  opacity: 1;
}
</style>
