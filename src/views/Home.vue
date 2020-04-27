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
  name: 'home',
  methods: {
    goToMainPage() {
      this.$router.push('/main');
    },
  },
};
</script>

<style src="@/assets/styles/views/home.scss" scoped lang="scss"></style>
