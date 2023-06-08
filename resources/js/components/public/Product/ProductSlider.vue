<template>
    <div class="slider-recommended-products-container" data-slider="js-slider-recommended-products">
        <product-cart v-for="product in products" v-bind:key="product.id" :productProp="product"></product-cart>
    </div>
</template>

<script>

import "slick-slider"
import ProductCart from "./ProductCart"
export default {
    name: 'ProductSlider',

    components: {
        ProductCart
    },

    data() {
        return {
            products: []
        }
    },

    methods: {
        getProduct() {
            axios.get('/api/product?hit=1').then(res => {
                this.products = res.data.data
            }).then(error => {
                console.log(error);
            })
        } 
    },

    mounted() {
        this.getProduct();
    },

    updated(){
        $('[data-slider="js-slider-recommended-products"]').slick({
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                },
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    })
    },
}
</script>
