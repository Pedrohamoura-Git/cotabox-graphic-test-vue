<template>
  <table class="table">
    <thead class="table-head">
      <th class="table-head__txt"></th>
      <th class="table-head__txt table-head__txt--name">First Name</th>
      <th class="table-head__txt table-head__txt--last-name">Last Name</th>
      <th class="table-head__txt table-head__txt--participation">Participation</th>
    </thead>
    <tbody class="table-body">
      <tr
        class="table-row"
        data-test="members-list"
        v-for="(member, index) in membersList"
        :key="index"
      >
        <td class="table-data table-data--cont">{{ index + 1 }}</td>
        <td class="table-data table-data--name">{{ member.name }}</td>
        <td class="table-data table-data--last-name">
          {{ member.lastName }}
        </td>
        <td class="table-data table-data--participation">
          {{ member.participation + '%' }}
        </td>
        <!-- <td class="table-data table-data--remove" @click="handleRemoveMember(index)">X</td> -->
        <td class="table-data table-data--remove" @click="handleRemoveMember(index)">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z"
            />
          </svg>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  computed: {
    membersList() {
      return this.$store.state.membersList.membersList
    },
  },
  methods: {
    handleRemoveMember(index) {
      if (confirm('Você tem certeza?')) {
        this.REMOVE_MEMBER(index)
        this.REMOVE_SECTION(index)
      }
    },
    REMOVE_MEMBER(index) {
      this.$store.dispatch('membersList/REMOVE_MEMBER', index)
    },
    REMOVE_SECTION(index) {
      this.$store.dispatch('chartData/REMOVE_SECTION', index)
    },
  },
}
</script>
<style lang="scss" src="./_tableData.scss" scoped />
