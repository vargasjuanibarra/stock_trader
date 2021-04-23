<template>
    <stock v-for="stock in stocks" :key="stock" :stock="stock"></stock>
</template>

<script>
import Stock from "./Stock.vue";
export default {
  components: { Stock },
  computed: {
    stocks() {
      return this.$store.getters.stocks
    }
  }
};
</script>

<style>
</style>