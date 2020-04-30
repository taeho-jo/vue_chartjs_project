<template>
  <div class="chart-container">
    <h1>NBA Player height</h1>
    <bar-chart class="line" :data="heightData"></bar-chart>
    <h1>NBA Player weight</h1>
    <bar-chart class="line" :data="weightData"></bar-chart>
    <h1>NBA Player height & weight</h1>
    <bar-chart class="line" :data="multiData"></bar-chart>
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
