<template>
  <div class="chart-container">
    <h1>NBA Player height</h1>
    <bar-chart
      class="line"
      is="column-chart"
      label="height"
      xtitle="Player FirstName"
      ytitle="Height"
      :colors="['#b00']"
      :data="heightData"
    ></bar-chart>
    <h1>NBA Player weight</h1>
    <bar-chart
      class="line"
      is="column-chart"
      xtitle="Player FirstName"
      ytitle="Weight"
      label="weight"
      :colors="['#666']"
      :data="weightData"
    ></bar-chart>
    <h1>NBA Player height & weight</h1>
    <bar-chart
      class="line"
      is="column-chart"
      xtitle="Player FirstName"
      ytitle="height & weight"
      :colors="['#b00', '#666']"
      :data="multiData"
    ></bar-chart>
  </div>
</template>

<script>
export default {
  computed: {
    data() {
      return this.$store.state.reData;
    },
    heightData() {
      let obj = {};
      this.data.forEach(el => {
        obj = {
          ...obj,
          [el.FirstName]: el.Height,
        };
      });
      return obj;
    },
    weightData() {
      let obj = {};
      this.data.forEach(el => {
        obj = {
          ...obj,
          [el.FirstName]: el.Weight,
        };
      });
      return obj;
    },
    multiData() {
      const findOne = this.data.find(el => el === 'Height');
      const findTwo = this.data.find(el => el === 'Weight');
      const reData = [
        {
          name: findOne,
          data: {
            ...this.heightData,
          },
        },
        {
          name: findTwo,
          data: {
            ...this.weightData,
          },
        },
      ];
      return reData;
    },
  },
};
</script>

<style scoped lang="scss">
.chart-container {
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin-bottom: 50px;
    margin-top: 50px;
  }
}
</style>
