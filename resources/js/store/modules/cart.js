const state = {
    addToCartLink: '/addToCart/',
    cartItemsQuantity: 0,
}

const getters = {
    addToCartLink: state => {
        return state.addToCartLink
    },

    cartItemsQuantity: state => {
        return state.cartItemsQuantity
    }
}

const actions = { 
    addToCart({state, commit, mutations}, data) {
        axios.post(state.addToCartLink + data.id, {
            'quantity' : data.quantity
        }).then(res => {
           commit('setCartItemsQuantity', res.data)
        })
    },

    getCartItemsQuantity({state, commit}) {
        axios.get('/getCartItemsQuantity').then(res => {
            commit('setCartItemsQuantity', res.data)
        })
    }
}

const mutations = {
    setCartItemsQuantity(state, quantity) {
        state.cartItemsQuantity = quantity
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
}