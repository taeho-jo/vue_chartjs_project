<template>
  <div class="chart-container">
    <bar-chart class="line" is="column-chart" :data="reChartData" :colors="['#b00', '#666']"></bar-chart>
    <button @click="check">dfasdfasdfasdf</button>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      data: []
    };
  },
  methods: {
    check() {
      console.log(this.reData);
      console.log(this.reChartData);
    },
  },
  computed: {
    reData() {
      const arr = [...this.data];
      const newArr = arr.slice(0, 15);
      return newArr;
    },
    reChartData() {
      let obj = {};
      this.reData.forEach(el => {
        obj = {
          ...obj,
          [el.FirstName]: el.Height,
        };
      });
      return obj
    },
  },
  mounted() {
    axios
      .get(
        'https://api.sportsdata.io/v3/nba/scores/json/Players?key=df78610a9b784d68b0dad23a610f8648',
      )
      .then(res => {
        this.data = res.data;
      })
      .catch(e => {
        console.log(e);
      });
  },
};
</script>

<style scoped lang="scss">
.chart-container {
  width: 100%;
  max-width: 900px;
}
</style>
