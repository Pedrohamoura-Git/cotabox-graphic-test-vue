<template>
  <table class="table">
    <thead class="table-head">
      <th class="table-head__txt"></th>
      <th class="table-head__txt table-head__txt--name">First Name</th>
      <th class="table-head__txt table-head__txt--last-name">Last Name</th>
      <th class="table-head__txt table-head__txt--participation">Participation</th>
    </thead>
    <tbody class="table-body">
      <tr class="table-row" v-for="(member, index) in membersList" :key="index">
        <td class="table-data table-data--cont">{{ index + 1 }}</td>
        <td class="table-data table-data--name">{{ member.name }}</td>
        <td class="table-data table-data--last-name">
          {{ member.lastName }}
        </td>
        <td class="table-data table-data--participation">
          {{ member.participation + '%' }}
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
}
</script>
<style lang="scss" src="./_membersTable.scss" scoped />
