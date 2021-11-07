<template>
  <section class="members-data">
    <div class="members-data__about">
      <h1 class="card-title">Data</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, earum.</p>
    </div>
    <TableData />
    <vc-donut
      background="white"
      foreground="lightgrey"
      :size="200"
      unit="px"
      :thickness="40"
      has-legend
      legend-placement="right"
      :sections="sections"
      :total="100"
      :start-angle="0"
      :auto-adjust-text-size="true"
    >
      <h1 style="color: black">Total: <br />{{ 100 - availableParticipation }}%</h1>
    </vc-donut>
    <!-- <ChartData chartType="donut" width="300" :series="participationsList" /> -->
  </section>
</template>
<script>
import TableData from '../TableData/TableData'

// import VcDonut from '../../widgets/VcDonut/VcDonut.vue'
import { isLocalStorageEmpty, getInLocalStorage } from '../../utils/localStorage/index'
// import ChartData from '../../widgets/ChartData/ChartData.vue'

export default {
  components: {
    TableData,
    // ChartData,
  },
  mounted() {
    this.handleItemsInLocalStorage()
  },
  computed: {
    membersList() {
      return this.$store.state.membersList.membersList
    },
    availableParticipation() {
      return this.$store.state.membersList.availableParticipation
    },
    sections() {
      return this.$store.state.chartData.sections
    },
    participationsList() {
      const participationsList = this.membersList.map((member) => member.participation)
      console.log('PL', participationsList)
      return participationsList
    },
  },
  methods: {
    handleItemsInLocalStorage() {
      this.checkMembersList()
      this.checkSections()
    },
    checkMembersList() {
      if (isLocalStorageEmpty('membersList') == false && this.membersList.length == 0) {
        const membersList = getInLocalStorage('membersList')
        console.log('MembersData - checkMembersList - membersList', membersList)
        this.ADD_ALL_MEMBERS(membersList)
        this.UPDATE_AVAILABLE_PARTICIPATION()
      }
    },
    ADD_ALL_MEMBERS(membersList) {
      this.$store.dispatch('membersList/ADD_ALL_MEMBERS', membersList)
    },
    UPDATE_AVAILABLE_PARTICIPATION() {
      this.$store.dispatch('membersList/UPDATE_AVAILABLE_PARTICIPATION')
    },
    checkSections() {
      if (isLocalStorageEmpty('sections') == false && this.sections.length == 0) {
        const sections = getInLocalStorage('sections')
        console.log('MembersData - checkSections - sections', sections)
        this.ADD_ALL_SECTIONS(sections)
      }
    },
    ADD_ALL_SECTIONS(member) {
      this.$store.dispatch('chartData/ADD_ALL_SECTIONS', member)
    },
  },
}
</script>
<style lang="scss" src="./_membersData.scss" scoped />
