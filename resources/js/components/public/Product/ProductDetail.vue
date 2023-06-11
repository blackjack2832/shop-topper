<template>
    <div class="product-detail">
        <product-detail-sider :productProp="product.images"></product-detail-sider>
        <div class="product-detail-information">
            <form action="" class="product-detail-characteristics">
                <div class="product-detail-title-container">
                    <h1 class="product-detail-title">{{ product.title }}</h1>

                </div>
                <div class="product-detail-price">{{ product.price | format }} руб</div>
                <div class="product-detail-characteristics-container">
                    <div class="product-detail-characteristic-block">
                        <div class="product-detail-characteristic-title">Кол-во:</div>
                        <div class="product-detail-characteristic-select">
                            <span class="edit-product-quantity" @click="productQuantityPlus" @mousedown="removeSelection">+</span>
                            <div class="product-detail-quantity" type="text">{{ productQuantity }}</div>
                            <span class="edit-product-quantity" @click="productQuantityMinus" @mousedown="removeSelection">-</span>
                        </div>
                    </div>
                </div>
                <div class="product-detail-actions-block">
                    <a @click.prevent="$store.dispatch('addToCart', {id: product.id, quantity: productQuantity})" class="button-add-to-cart button black-button" href="">Добавить в корзину</a>
                    <a class="recomended-product-add-to-favorite" href="">
                        <img src="../../../../images/favorite.png" alt="">
                    </a>
                </div>
            </form>
            <div class="product-detail-additional-information">
                <div class="product-detail-information-tabs">
                    <div class="product-detail-information-tab active">Описание</div>
                </div>
                <div class="product-detail-information-blocks">
                    <div class="product-detail-information-block">{{ product.detail_description }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import ProductDetailSider from "./ProductDetailSider.vue"
export default {
    name: 'ProductDetail',

    components: {
        ProductDetailSider
    },

    data() {
        return {
            product: {},
            productQuantity: 1,
        }
    },

    mounted() {
        this.getProduct()
    },

    methods: {
        getProduct() {
            let currentUrl = window.location.href
            let productId = currentUrl.split("/").reverse()[0]
            axios.get(`/api/product/detail/${productId}`).then(res => {
                this.product = res.data.data
            })
        },

        productQuantityPlus(event) {
            if(this.productQuantity < 10){
                this.productQuantity++
            } 
        },

        productQuantityMinus(event) {
            if(this.productQuantity > 1){
                this.productQuantity--
            } 
        },

        removeSelection(event) {
            event.stopPropagation();
            event.preventDefault(); 
        }
    },

    filters: {
        format: val => `${val}`.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 '),
    },
}
</script>
