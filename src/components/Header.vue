<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" to="/">
      <img
        src="https://img.icons8.com/fluent/48/000000/bitcoin-exchange.png"
        width="35"
        height="35"
        class="d-inline-block align-top"
        alt=""
      />
      Stock Trader
    </router-link>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <router-link tag="li" to="/portfolio" activeClass="nav-item active"
          ><a class="nav-link"
            >Portfolio<span class="sr-only">(current)</span></a
          ></router-link
        >
        <router-link tag="li" to="/stocks" activeClass="nav-item active"
          ><a class="nav-link"
            >Stocks<span class="sr-only">(current)</span></a
          ></router-link
        >
      </ul>
      <ul class="navbar-nav ml-auto">
        <li><a href="#" class="nav-link" @click="endDay">End Day</a></li>
        <li
          class="nav-item dropdown"
          @click="isDropdownOpen = !isDropdownOpen"
          
        >
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Save & Load
          </a>
          <div class="dropdown-menu" :class="{ show: isDropdownOpen }">
            <a href="#" class="dropdown-item" @click="saveData">Save Data</a>
            <a href="#" class="dropdown-item" @click="loadData">Load Data</a>
          </div>
        </li>
      </ul>
      <strong class="navbar-text navbar-right">Funds: {{ currency }}</strong>
    </div>
  </nav>
  <br />
  <br />
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import axios from "axios";
export default {
  data() {
    return {
      isDropdownOpen: false,
    };
  },
  computed: {
    ...mapGetters(["funds", "stockPortfolio", "stocks"]),
    funds() {
      return this.$store.getters.funds;
    },
    currency() {
      return "$" + this.funds;
    },
  },
  methods: {
    ...mapActions({
      randomizeStocks: "randomizeStocks",
      fetchData: "loadData",
    }),
    endDay() {
      this.randomizeStocks();
    },
    saveData() {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks,
      };
      axios.put(
        "https://stock-trader-80090-default-rtdb.firebaseio.com/data.json",
        data
      );
    },
    loadData() {
      this.fetchData();
    },
  },
};
</script>

<style>
</style>