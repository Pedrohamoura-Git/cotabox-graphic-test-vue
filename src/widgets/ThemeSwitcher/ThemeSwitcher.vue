<template>
  <input @change="toggleTheme()" id="checkbox" type="checkbox" class="switch-checkbox" />
  <label for="checkbox" class="switch-label">
    <div class="icons">
      <span class="icons__moon">🌙</span>
      <span class="icons__sun">☀️</span>
      <span
        class="icons__switch-toggle"
        :class="{ 'icons__switch-toggle-checked': activeTheme === 'dark-theme' }"
      ></span>
    </div>
  </label>
</template>
<script>
import { getInLocalStorage } from '@/utils/localStorage'

export default {
  data() {
    return {
      userTheme: 'light-theme',
    }
  },
  mounted() {
    this.handleLocalTheme()
  },
  computed: {
    activeTheme() {
      return this.$store.state.themeSwitcher.activeTheme
    },
  },
  watch: {
    activeTheme: {
      handler() {
        document.documentElement.className = this.activeTheme
      },
      deep: true,
    },
  },
  methods: {
    handleLocalTheme() {
      const localTheme = getInLocalStorage('activeTheme')
      if (localTheme != null) this.SET_THEME(localTheme)
    },
    toggleTheme() {
      if (this.activeTheme == 'light-theme') {
        this.SET_THEME('dark-theme')
      } else {
        this.SET_THEME('light-theme')
      }
    },
    SET_THEME(theme) {
      this.$store.dispatch('themeSwitcher/SET_THEME', theme)
    },
  },
}
</script>
<style lang="scss" src="./_themeSwitcher.scss" scoped />
