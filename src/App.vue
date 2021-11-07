<template>
  <div class="wrapper">
    <MembersDataPage />
    <!-- <div class="container-center">
      <div class="card">
        <input @change="toggleTheme" id="checkbox" type="checkbox" class="switch-checkbox" />
        <label for="checkbox" class="switch-label">
          <span class="moon">🌙</span>
          <span class="sun">☀️</span>
          <div
            class="switch-toggle"
            :class="{ 'switch-toggle-checked': userTheme === 'dark-theme' }"
          ></div>
        </label>
      </div>
    </div> -->
  </div>
</template>

<script>
import MembersDataPage from './pages/MembersDataPage/MembersDataPage'

export default {
  name: 'App',
  components: {
    MembersDataPage,
  },
}
</script>

<style lang="scss" src="./assets/scss/index.scss" />
