import Vue from "vue";
import store from "./store/index"
import router from "./router"
import Index from "./components/admin/Index"
import MainSlider from "./components/public/index/MainSlider"
import ProductSlider from "./components/public/Product/ProductSlider"
import ProductCart from "./components/public/Product/ProductCart"
import AddressSlider from "./components/public/index/AddressSlider"
import ProductDetail from "./components/public/Product/ProductDetail"
import ShowCatalog from "./components/public/Catalog/ShowCatalog"
import CartMenuItem from "./components/public/Cart/CartMenuItem"

require ('./bootstrap')

const adminApp = new Vue({
    el: '#adminApp',

    components: {
        Index,
    },

    comments: {
        
    },
    router,
})

const app = new Vue({
    el: '#app',

    components: {
        MainSlider,
        ProductSlider,
        AddressSlider,
        ProductDetail,
        ShowCatalog,
        CartMenuItem,
    },
    store
})