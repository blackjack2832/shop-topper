import Vue from "vue";
import router from "./router"
import Index from "./components/admin/Index"
import MainSlider from "./components/public/index/MainSlider"
import ProductSlider from "./components/public/Product/ProductSlider"
import ProductCart from "./components/public/Product/ProductCart"
import AddressSlider from "./components/public/index/AddressSlider"
require ('./bootstrap')

const adminApp = new Vue({
    el: '#adminApp',

    components: {
        Index,
    },

    comments: {
        
    },
    router
})

const app = new Vue({
    el: '#app',

    components: {
        MainSlider,
        ProductSlider,
        AddressSlider,
    }
})