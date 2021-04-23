<template>
  <div class="container">
    <Header />
    <div class="row">
          <router-view></router-view>
      </div>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  components: {
    Header,
  },
  created() {
    this.$store.dispatch("initStocks");
  },
};
</script>
<style>
body {
  padding: 30px;
}

</style>
