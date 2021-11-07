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
      @click.prevent=";[handleNewMember(), handleNewSection()]"
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
    //***************************** NEW MEMBERS ***************************** */

    handleNewMember() {
      if (this.availableParticipation && this.participation <= this.availableParticipation) {
        this.addNewMember()
        this.UPDATE_AVAILABLE_PARTICIPATION()
      }
    },
    addNewMember() {
      let member = {}
      member.name = this.name
      member.lastName = this.lastName
      member.participation = Number(this.participation)
      this.ADD_NEW_MEMBER(member)
    },
    ADD_NEW_MEMBER(member) {
      this.$store.dispatch('membersList/ADD_NEW_MEMBER', member)
    },
    UPDATE_AVAILABLE_PARTICIPATION() {
      this.$store.dispatch('membersList/UPDATE_AVAILABLE_PARTICIPATION')
    },
    //***************************** NEW SECTIONS ***************************** */
    handleNewSection() {
      let obj = {}
      obj.label = `${this.name} ${this.lastName}`
      obj.value = Number(this.participation)
      obj.color = this.randomColor()
      this.ADD_NEW_SECTION(obj)
      this.resetForm()
    },
    randomColor() {
      return '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6)
    },
    ADD_NEW_SECTION(section) {
      this.$store.dispatch('chartData/ADD_NEW_SECTION', section)
    },
    resetForm() {
      document.querySelector('.new-member-form').reset()
      this.name = ''
      this.lastName = ''
      this.participation = ''
    },
  },
}
</script>

<style lang="scss" src="./_newMemberForm.scss" scoped />
