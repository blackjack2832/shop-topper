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
import Cart from "./components/public/Cart/Cart"
import MakeOrder from "./components/public/Order/MakeOrder"
import Login from "./components/public/User/Login"
import Registration from "./components/public/User/Registration"
import HeaderMenu from "./components/public/Menu/HeaderMenu"

require ('./bootstrap')

let adminPanel = $('#adminApp');
let site = $('#app');

if(adminPanel[0] !== undefined) {
    const adminApp = new Vue({
        el: '#adminApp',
    
        components: {
            Index,
        },
    
        comments: {
            
        },
        router,
    })
}

if(site[0] !== undefined) {
    const app = new Vue({
        el: '#app',
    
        components: {
            MainSlider,
            ProductSlider,
            AddressSlider,
            ProductDetail,
            ShowCatalog,
            CartMenuItem,
            Cart,
            MakeOrder,
            Login,
            Registration,
            HeaderMenu
        },
        store
    })
}
