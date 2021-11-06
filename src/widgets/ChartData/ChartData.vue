<template>
  <aside>
    <apexchart :width="width" :type="chartType" :options="options" :series="series" />
    <!-- <apexchart width="350" chartType="donut" :series="participationsList" :options="options" /> -->
  </aside>
</template>

<script>
export default {
  props: {
    chartType: { type: String, required: true },
    width: { type: [String, Number], required: true, default: 250 },
    series: { type: Array, required: true },
    membersNames: { type: Array, required: true },
  },
  data() {
    return {
      options: {
        labels: this.membersNames,
        plotOptions: {
          pie: {
            donut: {
              size: '50px',
              labels: {
                show: true,
              },
            },
          },
        },
        legend: {
          show: true, // Changed
          showForSingleSeries: false,
          showForNullSeries: true,
          showForZeroSeries: true,
          position: 'right', // Changed
          horizontalAlign: 'flex-start', // Changed
          floating: false,
          fontSize: '12px',
          fontFamily: 'Helvetica, Arial',
          fontWeight: 400,
          formatter: undefined,
          inverseOrder: false,
          width: 0,
          height: 0,
          tooltipHoverFormatter: undefined,
          customLegendItems: [],
          offsetX: 0,
          offsetY: 0,
          labels: {
            colors: undefined,
            useSeriesColors: true,
          },
          markers: {
            width: 12,
            height: 12,
            strokeWidth: 0,
            strokeColor: '#fff',
            fillColors: undefined,
            radius: 2, // Changed
          },
          itemMargin: {
            horizontal: 5,
            vertical: 0,
          },
          onItemClick: {
            toggleDataSeries: true,
          },
          onItemHover: {
            highlightDataSeries: true,
          },
        },
      },
    }
  },
  mounted() {
    console.log('chartData - mounted - membersNames', this.membersNames)
    this.$nextTick(function () {
      const el = (document.querySelector('.apexcharts-legend').style.alignItems = 'flex-start')
      console.log('el', el)
    })
  },
  updated() {
    console.log('chartData - updated - membersNames', this.membersNames)
    this.$nextTick(function () {
      const el = (document.querySelector('.apexcharts-legend').style.alignItems = 'flex-start')
      console.log('el', el)
    })
  },
  // computed: {
  //   membersList() {
  //     return this.$store.state.membersList.membersList
  //   },
  //   availableParticipation() {
  //     return this.$store.state.membersList.availableParticipation
  //   },
  //   participationsList() {
  //     const participationsList = this.membersList.map((member) => member.participation || 0)
  //     console.log('MembersData - participationsList - participationsList', participationsList)
  //     return participationsList
  //     // return this.membersList.map((member) => member.participation)
  //   },
  //   membersNames() {
  //     const names = this.membersList.map((member) => `${member.name} ${member.lastName}`)
  //     console.log('MembersData - names - names', names)
  //     return names
  //     // return this.membersList.map((member) => `${member.name} ${member.lastName}`)
  //   },
  // },
}
</script>
