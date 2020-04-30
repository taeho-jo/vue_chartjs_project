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
};
</script>

<style lang="scss" scoped></style>
