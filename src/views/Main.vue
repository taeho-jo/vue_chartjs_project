<template>
  <Layout>
    <router-view></router-view>
  </Layout>
</template>

<script>
import Layout from '../components/Layout';
export default {
  name: 'main',
  components: {
    Layout,
  },
};
</script>

<style lang="scss" scoped>
    .container {
        background: red;
    }
</style>
