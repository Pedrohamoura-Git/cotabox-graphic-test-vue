<template>
    <main>
        <!-- <h1>User name: {{ userName }}</h1> -->
        <NewMemberForm />
        <MembersData />
    </main>
</template>

<script>
import NewMemberForm from '../../components/NewMemberForm/NewMemberForm'
import MembersData from '../../components/MembersData/MembersData'

export default {
    components: { NewMemberForm, MembersData },
    computed: {
        userName() {
            return this.$store.state.user.name
        },
    },
}
</script>

<style lang="scss" src="./_membersSharePage.scss" scoped />
