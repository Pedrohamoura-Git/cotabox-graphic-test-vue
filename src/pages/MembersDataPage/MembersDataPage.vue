<template>
  <main>
    <!-- <h1>User name: {{ userName }}</h1> -->
    <TopNavbar>
      <template v-slot:content>
        <NewMemberForm />
      </template>
      <template v-slot:widgets>
        <ThemeSwitcher />
      </template>
    </TopNavbar>
    <MembersData />
  </main>
</template>

<script>
// components
import NewMemberForm from '../../components/NewMemberForm/NewMemberForm'
import MembersData from '../../components/MembersData/MembersData'
import TopNavbar from '../../components/TopNavbar/TopNavbar.vue'

// widgets
import ThemeSwitcher from '../../widgets/ThemeSwitcher/ThemeSwitcher.vue'

export default {
  components: { NewMemberForm, MembersData, TopNavbar, ThemeSwitcher },
}
</script>

<style lang="scss" src="./_membersDataPage.scss" scoped />
