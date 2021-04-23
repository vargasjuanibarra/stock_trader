<template>
      <div class="pad col-sm-6 col-md-4">
        <div class="card">
          <h5 class="card-header">
            {{ stock.name }}
            <small
              >(price: {{ stock.price }} | Quantity:
              {{ stock.quantity }})</small
            >
          </h5>
          <div class="card-body d-flex">
              <input
                type="number"
                class="form-control"
                placeholder="Quantity"
                v-model="quantity"
                :class="{ danger: insufficientQuantity }"
              />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <button
                class="btn btn-success"
                @click="sellStock"
                :disabled="
                  insufficientQuantity ||
                  quantity <= 0 ||
                  Number.isInteger(quantity)
                "
              >
                {{ insufficientQuantity ? "Insufficient Stocks" : "sell" }}
              </button>
          </div>
        </div>
      </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0,
    };
  },
  computed: {
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
    },
  },
  methods: {
    ...mapActions({
      placeSellOrder: "sellStock",
    }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };
      this.placeSellOrder(order);
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
  background-color: #66b3ff6c;
  color: #2121fd;
}
.btn {
  background-color: #2222fd;
}
</style>