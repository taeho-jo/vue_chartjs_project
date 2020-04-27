<template>
  <div class="bar-chart-container">
    <h1 class="bar-chart-box">BAR CHART</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Bars',
};
</script>

<style lang="scss" scoped>
.bar-chart-container {
  background: lavender;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
