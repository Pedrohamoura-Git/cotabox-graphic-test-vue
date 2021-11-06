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
      <h1>Total: <br />{{ 100 - availableParticipation }}%</h1>
    </vc-donut>
  </section>
</template>
<script>
import TableData from '../TableData/TableData'

import VcDonut from '../../widgets/VcDonut/VcDonut.vue'
// import membersList from '../../store/modules/membersList/membersList'

export default {
  components: {
    TableData,
    VcDonut,
  },
  data() {
    return {
      // sections: [],
      // sections: [
      //     { label: 'Red section', value: 25, color: 'red' },
      //     { label: 'Green section', value: 25, color: 'green' },
      //     { label: 'Blue section', value: 25, color: 'blue' }
      //   ]
    }
  },
  computed: {
    // membersList() {
    //   return this.$store.state.membersList.membersList
    // },
    availableParticipation() {
      return this.$store.state.membersList.availableParticipation
    },
    sections() {
      return this.$store.state.chartData.sections
    },
    // participationsList() {
    //   const membersParticipations = this.membersList.map((member) => member.participation)
    //   return membersParticipations
    // },
    // },
    // participationsList() {
    //   const membersParticipations = this.membersList.map((member) => member.participation)
    //   return membersParticipations
    // },
  },
  // watch: {
  //   membersList: {
  //     handler(newVal, oldVal) {

  //       // do something with the object
  //     },
  //     deep: true,
  //   },
  // },
}
</script>
<style lang="scss" src="./_membersData.scss" scoped />
