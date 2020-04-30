<template>
  <div class="chart-container">
    <bar-chart
      class="line"
      is="column-chart"
      :data="chartData"
    ></bar-chart
    ><bar-chart
      class="line"
      :data="chartData"
    ></bar-chart>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // aaaa: [
      //   { name: 'Workout', data: { '2017-01-01': 3, '2017-01-02': 4 } },
      //   { name: 'Call parents', data: { '2017-01-01': 5, '2017-01-02': 3 } },
      // ],
    };
  },
  methods: {
    check() {
      console.log(this.$store.state.data);
      console.log(this.$store.state.reData);
    },
  },
  computed: {
    data() {
      return this.$store.state.reData;
    },
    chartData() {
      let obj = {};
      this.data.forEach(el => {
        obj = {
          ...obj,
          [el.FirstName]: el.Height,
        };
      });
      return obj;
    },
  },
};
</script>

<style scoped lang="scss">
.chart-container {
  width: 100%;
  max-width: 900px;
}
</style>
