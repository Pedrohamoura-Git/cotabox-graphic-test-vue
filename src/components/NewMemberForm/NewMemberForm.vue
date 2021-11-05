<template>
    <form class="new-member-form" action="#">
        <input
            class="first-name-input"
            type="text"
            placeholder="First Name"
            required
            v-model="name"
        />
        <input
            class="last-name-input"
            type="text"
            placeholder="Last Name"
            required
            v-model="lastName"
        />
        <input
            class="participation-input"
            type="text"
            placeholder="Participation"
            required
            v-model="participation"
        />
        <input
            class="btn btn--send"
            type="submit"
            value="Send"
            @click.prevent="handleNewMember()"
        />
    </form>
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
    computed: {
        membersList() {
            return this.$store.state.membersList.membersList
        },
    },
    methods: {
        handleNewMember() {
            const availableShare = this.getAvailableShare()
            console.log(
                'NewMemberInput - handleNewMember - availableShare',
                availableShare
            )
            if (availableShare && this.participation <= availableShare) {
                this.addNewMember()
            }
        },
        getAvailableShare() {
            const membersShares = this.membersList.reduce(
                (acc, { participation }) => {
                    return acc + participation
                },
                0
            )
            const availableShare = 100 - membersShares
            return availableShare
        },
        addNewMember() {
            let member = {}
            member.name = this.name
            member.lastName = this.lastName
            member.participation = Number(this.participation)
            this.SET_NEW_MEMBER(member)
        },
        SET_NEW_MEMBER(member) {
            this.$store.dispatch('membersList/SET_NEW_MEMBER', member)
        },
    },
}
</script>

<style lang="scss" src="./_newMemberForm.scss" scoped />
