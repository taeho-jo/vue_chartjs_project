<template>
  <div class="chart-container">
    <bar-chart class="line" is="column-chart" :data="chartData" :colors="['#b00', '#666']"></bar-chart>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chartData: {
        '2020-04-29': 3,
        '2020-04-30': 5,
        '2020-05-01': 2,
        '2020-05-02': 6,
        '2020-05-03': -5,
      },
        color: ['blue', 'green', 'yellow', 'orange']
    }
  }
};
</script>

<style scoped lang="scss">
  .chart-container {
    width: 100%;
    max-width: 900px;
  }
</style>
