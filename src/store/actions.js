import { createApp } from 'vue'
import axios from 'axios'


export const loadData = ({ commit }) => {
    axios.get('https://stock-trader-80090-default-rtdb.firebaseio.com/data.json')
        .then(res => res.data)
        .then(data => {
            if (data) {
                const stocks = data.stocks;
                const funds = data.funds;
                const stockPortfolio = data.stockPortfolio;

                const portfolio = {
                    stockPortfolio,
                    funds
                }
                commit('SET_STOCKS', stocks)
                commit('SET_PORTFOLIO', portfolio)
            }
        })
        .catch(err => console.log(err))
}