<template>
      <div class="pad col-sm-6 col-md-4">
        <div class="card ">
          <h5 class="card-header">
            {{ stock.name }} <small>(price: {{ stock.price }})</small>
          </h5>
          <div class="card-body d-flex">
            <input
              type="number"
              class="form-control"
              placeholder="Quantity"
              v-model="quantity"
              :class="{ danger: insufficientFunds }"
            />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button
              class="btn btn-success"
              @click="buyStock"
              :disabled="
                insufficientFunds ||
                quantity <= 0 ||
                !Number.isInteger(+quantity)
              "
            >
              {{ insufficientFunds ? "Insufficient Funds" : "Buy" }}
            </button>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0,
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufficientFunds() {
      return this.quantity * this.stock.price > this.funds;
    },
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };
      this.$store.dispatch("buyStock", order);
      this.quantity = 0;
    },
  },
};
</script>

<style scoped>
.danger {
  border: 1px solid red;
}
.pad {
  padding: 20px;
}
.card .card-header{
  background-color: #82f7824f;
  color: #006600;
}
.btn {
  background-color: #48b948;
}
</style>