<template>
  <footer class="footer">
    <div class="footer-container">
      <router-link to="/contact" class="footer-link">
        GET IN TOUCH ：）
        <svg
          class="arrow-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </router-link>
    </div>

    <!-- 自訂游標圓圈 -->
    <div ref="cursorRef" class="custom-cursor"></div>
  </footer>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import '@/assets/scss/footer/_footer.scss'

</script>
