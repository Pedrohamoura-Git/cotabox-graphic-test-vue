<template>
  <form class="new-member-form" data-test="new-member-form" action="#">
    <input
      class="first-name-input"
      :class="{ disabled: !availableParticipation }"
      data-test="first-name-input"
      type="text"
      placeholder="First Name"
      required
      v-model="name"
    />
    <input
      class="last-name-input"
      :class="{ disabled: !availableParticipation }"
      data-test="last-name-input"
      type="text"
      placeholder="Last Name"
      required
      v-model="lastName"
    />
    <input
      class="participation-input"
      :class="{ disabled: !availableParticipation }"
      data-test="participation-input"
      type="text"
      placeholder="Participation"
      required
      v-model="participation"
    />
    <input
      class="btn btn--send"
      :class="{ disabled: !availableParticipation }"
      data-test="submit-btn"
      type="submit"
      value="Send"
      @click.prevent="handleSubmition()"
    />
  </form>
  <transition
    enter-active-class="slide-in-right"
    leave-active-class="slide-out-right"
    mode="out-in"
    appear
  >
    <aside class="error-msg" v-if="inputError">
      Something wrong. Check the inputs and try again.
    </aside>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      lastName: '',
      participation: null,
      inputError: false,
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

    handleSubmition() {
      if (this.participation != null && this.participation <= this.availableParticipation) {
        this.addNewMember()
        this.UPDATE_AVAILABLE_PARTICIPATION()
        this.addNewSection()
      } else {
        this.handleInputError()
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
    addNewSection() {
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
    handleInputError() {
      this.inputError = true
      setTimeout(() => {
        this.inputError = false
      }, 3500)
    },
  },
}
</script>

<style lang="scss" src="./_newMemberForm.scss" scoped />
