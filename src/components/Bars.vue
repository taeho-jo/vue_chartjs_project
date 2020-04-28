<template>
  <div class="aaa">
    <h1>dsfasdfa</h1>
    <div class="bbb">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Bars',
  // computed: {
  //   ...mapState({
  //     'curParams',
  //   }),
  //   title: this.curParams
  // }
};
</script>

<style lang="scss" scoped>
.aaa {
  background: #d1674b;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 20px;
  .bbb {
    background: aqua;
    width: 100%;
    max-width: 1400px;
  }
}
</style>
