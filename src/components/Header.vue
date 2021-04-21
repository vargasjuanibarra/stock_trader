<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <router-link class="navbar-brand" to="/">Stock Trader</router-link>
      </div>
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <router-link tag="li" to="/portfolio" activeClass="active"><a>Portfolio</a></router-link>
          <router-link tag="li" to="/stocks" activeClass="active"><a>Stocks</a></router-link>
        </ul>
        <strong class="navbar-text navbar-right">Funds: {{ currency }}</strong>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#" @click="endDay">End Day</a></li>
          <li
            class="dropdown"
            @click="isDropdownOpen = !isDropdownOpen"
            :class="{ open: isDropdownOpen }"
          >
            <a
              href="#"
              class="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              >Save & Load <span class="caret"></span
            ></a>
            <ul class="dropdown-menu">
              <li><a href="#" @click="saveData">Save Data</a></li>
              <li><a href="#" @click="loadData">Load Data</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <!-- /.navbar-collapse -->
    </div>
    <!-- /.container-fluid -->
  </nav>
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
      randomizeStocks:'randomizeStocks',
      fetchData: 'loadData'
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
      axios.put('https://stock-trader-80090-default-rtdb.firebaseio.com/data.json', data)
    },
    loadData() {
      this.fetchData()
    }
  },
};
</script>

<style>
</style>