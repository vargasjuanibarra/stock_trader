import { createStore } from 'vuex'
import stocks from './modules/stocks'
import portfolio from './modules/portfolio'
import * as actions from './actions'
export default createStore({
  actions: actions,
  modules: {
    stocks,
    portfolio
  }
})
