<template>
  <div class="wrapper">
    <MembersSharePage />
  </div>
</template>

<script>
import MembersSharePage from './pages/MembersSharePage/MembersSharePage.vue'

//Utils
// import { isLocalStorageEmpty, setInLocalStorage, getInLocalStorage } from './utils/localStorage/index'
// import { isLocalStorageEmpty, getInLocalStorage } from './utils/localStorage/index'

export default {
  name: 'App',
  components: {
    MembersSharePage,
  },
  // mounted() {
  //   if (isLocalStorageEmpty('membersList') == false) {
  //     const membersList = getInLocalStorage('membersList')
  //     console.log('app - mounted - membersList', membersList)
  //     this.SET_NEW_MEMBER(membersList)
  //   }
  // },
  // methods: {
  //   SET_NEW_MEMBER(member) {
  //     this.$store.dispatch('membersList/SET_NEW_MEMBER', member)
  //   },
  // },
}
</script>

<style lang="scss" src="./assets/scss/index.scss" />
