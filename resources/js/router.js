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
                {
                    path: '/admin/product/edit/:id',
                    component: () => import('./components/admin/Product/Edit'),
                    name: 'admin.product.edit',
                }
            ]
        },
        {
            path: '/admin/category',
            component: () => import('./components/admin/Category/Index'),
            name: 'admin.category.index',
            children: [
                {
                    path: '/admin/category/add',
                    component: () => import('./components/admin/Category/Add'),
                    name: 'admin.category.add'
                },
                {
                    path: '/admin/category/view',
                    component: () => import('./components/admin/Category/View'),
                    name: 'admin.category.view'
                },
                {
                    path: '/admin/category/edit/:id',
                    component: () => import('./components/admin/Category/Edit'),
                    name: 'admin.category.edit',
                }
            ]
        },
        {
            path: '/admin/order',
            component: () => import('./components/admin/Order/Index'),
            name: 'admin.order.index',
            children: [
                {
                    path: '/admin/order/view',
                    component: () => import('./components/admin/Order/View'),
                    name: 'admin.order.view'
                },
            ]
        }
    ]
})
