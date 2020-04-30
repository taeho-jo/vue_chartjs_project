<template>
  <Layout>
    <div class="container"></div>
    <router-view></router-view>
  </Layout>
</template>

<script>
import Layout from '../components/Layout';
export default {
  components: {
    Layout,
  },
  methods: {
    fetchData() {
      this.$store.dispatch('getData')
    }
  },
  mounted() {
    this.fetchData()
  }
};
</script>

<style lang="scss" scoped></style>
