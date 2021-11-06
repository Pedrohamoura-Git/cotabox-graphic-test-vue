<template>
  <section class="members-data">
    <div class="members-data__about">
      <h1 class="card-title">Data</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, earum.</p>
    </div>
    <MembersTable />
    <DataChart chartType="donut" width="300" :series="participationsList" />
  </section>
</template>
<script>
import MembersTable from '../MembersTable/MembersTable'
import DataChart from '../../widgets/DataChart/DataChart'

export default {
  components: { MembersTable, DataChart },
  computed: {
    membersList() {
      return this.$store.state.membersList.membersList
    },
    participationsList() {
      const participationsList = this.membersList.map((member) => member.participation)
      console.log('PL', participationsList)
      return participationsList
    },
  },
}
</script>
<style lang="scss" src="./_membersData.scss" scoped />
