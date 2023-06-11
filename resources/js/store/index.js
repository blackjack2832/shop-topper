import Vue from "vue"
import Vuex from "vuex"
import catalog from "./modules/catalog"
import cart from "./modules/cart"

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        catalog,
        cart
    }
})