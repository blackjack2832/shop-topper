import Vue from "vue";
import router from "./router"
import Index from "./components/admin/Index"
require ('./bootstrap')

const adminApp = new Vue({
    el: '#adminApp',

    components: {
        Index
    },

    comments: {
        
    },
    router
})