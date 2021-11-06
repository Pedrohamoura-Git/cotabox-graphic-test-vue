<template>
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
    <slot />
  </vc-donut>
</template>
<script>
export default {
  props: { sections: { type: Array, required: true } },
  data() {
    return {
      // sections: [
      //   { label: 'Red section', value: 25, color: 'red' },
      //   { label: 'Green section', value: 25, color: 'green' },
      //   { label: 'Blue section', value: 25, color: 'blue' },
      // ],
    }
  },
}
</script>
