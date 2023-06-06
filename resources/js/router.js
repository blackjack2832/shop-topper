import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/admin/products', 
            component: () => import('./components/admin/Product/Products'),
            name: 'admin.product.index',
            children: [
                {
                    path: '/admin/products/add',
                    component: () => import('./components/admin/Product/Add'),
                    name: 'admin.product.add'
                },
                {
                    path: '/admin/products/view',
                    component: () => import('./components/admin/Product/View'),
                    name: 'admin.product.view'
                },
            ]
        },
        {
            path: '/admin/product'
        }
    ]    
})
