<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-info">
        <p class="copyright">© {{ currentYear }} MyWebsite. All rights reserved.</p>
        <p class="powered">Powered by Vue 3 + Vite</p>
      </div>
      <div class="footer-links">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">Facebook</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">Twitter</a>
        <a href="mailto:hello@example.com">Contact</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<style scoped lang="scss">
.footer {
  background-color: #1a1a1a;
  color: #f0f0f0;
  padding: 2rem 1rem;

  .footer-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }

  .footer-info {
    text-align: center;

    .copyright {
      font-size: 0.9rem;
    }

    .powered {
      font-size: 0.75rem;
      color: #aaa;
      margin-top: 0.25rem;
    }
  }

  .footer-links {
    display: flex;
    justify-content: center;
    gap: 1.5rem;

    a {
      color: #f0f0f0;
      font-size: 0.9rem;
      text-decoration: none;
      transition: color 0.3s;

      &:hover {
        color: #62b6cb;
      }
    }
  }
}
</style>
