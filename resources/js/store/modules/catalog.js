const state = {
    products: []
}

const getters = {
    products: state => {
        return state.products
    }
}

const actions = {
    getAllProductsByCategory({commit}, category) {
        axios.get(`/api/product?category=${category}`).then(res => {
            commit('setProducts', res.data.data)
        })
    },
}
const mutations = {
    setProducts(state, products) {
        state.products = products
    }
}

export default {
    state,
    mutations,
    getters,
    actions
}