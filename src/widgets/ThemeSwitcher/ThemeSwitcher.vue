<template>
  <!-- <input type="checkbox" id="switch" name="theme" />
  <label for="switch" @click="switchTheme()">Toggle</label> -->
  <input @change="toggleTheme" id="checkbox" type="checkbox" class="switch-checkbox" />
  <label for="checkbox" class="switch-label">
    <div class="icons">
      <span class="icons__moon">🌙</span>
      <span class="icons__sun">☀️</span>
      <span
        class="icons__switch-toggle"
        :class="{ 'icons__switch-toggle-checked': userTheme === 'dark-theme' }"
      ></span>
    </div>
  </label>
</template>
<script>
export default {
  mounted() {
    const initUserTheme = this.getMediaPreference()
    this.setTheme(initUserTheme)
  },
  data() {
    return {
      userTheme: 'light-theme',
    }
  },
  methods: {
    setTheme(theme) {
      localStorage.setItem('user-theme', theme)
      this.userTheme = theme
      document.documentElement.className = theme
    },
    toggleTheme() {
      const activeTheme = localStorage.getItem('user-theme')
      if (activeTheme === 'light-theme') {
        this.setTheme('dark-theme')
      } else {
        this.setTheme('light-theme')
      }
    },
    getMediaPreference() {
      const hasDarkPreference = window.matchMedia('(prefers-color-scheme: dark)').matches
      if (hasDarkPreference) {
        return 'dark-theme'
      } else {
        return 'light-theme'
      }
    },
  },
}
</script>
<style lang="scss" src="./_themeSwitcher.scss" scoped />
