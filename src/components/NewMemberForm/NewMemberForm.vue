<template>
  <form class="new-member-form" action="#">
    <input
      class="first-name-input"
      :class="{ disabled: !availableParticipation }"
      type="text"
      placeholder="First Name"
      required
      v-model="name"
    />
    <input
      class="last-name-input"
      :class="{ disabled: !availableParticipation }"
      type="text"
      placeholder="Last Name"
      required
      v-model="lastName"
    />
    <input
      class="participation-input"
      :class="{ disabled: !availableParticipation }"
      type="text"
      placeholder="Participation"
      required
      v-model="participation"
    />
    <input
      class="btn btn--send"
      :class="{ disabled: !availableParticipation }"
      type="submit"
      value="Send"
      @click.prevent="handleNewMember()"
    />
  </form>
  <aside class="error-msg" v-if="!availableParticipation">Participation available: {{ availableParticipation }}%</aside>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      lastName: '',
      participation: null,
    }
  },
  mounted() {
    this.UPDATE_AVAILABLE_PARTICIPATION()
  },
  computed: {
    membersList() {
      return this.$store.state.membersList.membersList
    },
    availableParticipation() {
      return this.$store.state.membersList.availableParticipation
    },
  },
  methods: {
    handleNewMember() {
      if (this.availableParticipation && this.participation <= this.availableParticipation) {
        this.addNewMember()
        this.UPDATE_AVAILABLE_PARTICIPATION()
        this.resetForm()
      }
    },
    addNewMember() {
      let member = {}
      member.name = this.name
      member.lastName = this.lastName
      member.participation = Number(this.participation)
      this.SET_NEW_MEMBER(member)
    },
    resetForm() {
      document.querySelector('.new-member-form').reset()
      this.name = ''
      this.lastName = ''
      this.participation = ''
    },
    SET_NEW_MEMBER(member) {
      this.$store.dispatch('membersList/SET_NEW_MEMBER', member)
    },
    UPDATE_AVAILABLE_PARTICIPATION() {
      this.$store.dispatch('membersList/UPDATE_AVAILABLE_PARTICIPATION')
    },
  },
}
</script>

<style lang="scss" src="./_newMemberForm.scss" scoped />
