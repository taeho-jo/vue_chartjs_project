<template>
  <div class="home">
    <div>
      <img src="@/assets/images/vue_logo.png" alt="vue" />
      <img src="@/assets/images/chartjs.png" alt="vue" />
    </div>
    <button @click="goToMainPage">Let's Start~</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToMainPage() {
      this.$router.push('/main');
    },
    fetchData() {
      this.$store.dispatch('getData');
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style src="@/assets/styles/views/home.scss" scoped lang="scss"></style>
