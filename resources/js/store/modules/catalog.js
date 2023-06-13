const state = {
    products: []
}

const getters = {
    products: state => {
        return state.products
    }
}

const actions = {
    getAllProductsByCategory({commit}, data) {
        axios.get(`/api/product?category=${data.category}&limit=${data.limit}&offset=${data.offset}`).then(res => {
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