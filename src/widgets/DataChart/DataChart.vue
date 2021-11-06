<template>
  <aside>
    <apexchart :width="width" :type="chartType" :options="options" :series="series" />
  </aside>
</template>

<script>
export default {
  props: {
    chartType: { type: String, required: true },
    width: { type: (String, Number), required: true, default: 250 },
    series: { type: Array, required: true },
  },
  data() {
    return {
      options: {},
      // series: [44, 55, 41, 17, 15],
    }
  },
}
</script>
