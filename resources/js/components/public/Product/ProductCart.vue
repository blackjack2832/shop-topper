<template>
    <div class="catalog-element">
        <a href="">
            <img class="catalog-element-image" :src="productProp.images[0].url" alt="">
            <div class="catalog-element-title">{{ productProp.title }}</div>
            <div class="catalog-element-description">{{ productProp.preview_description }}</div>
            <div class="add-to-favorite-icon"><img src="" alt=""></div>
        </a>
        <a class="catalog-element-add-to-cart" href="">
            <div class="add-to-cart-icon"><img class="" src="../../../../images/cart.png" alt=""></div>
            <div class="catalog-element-price">{{ productProp.price | format }} руб</div>
        </a>
    </div>
</template>

<script>

import "slick-slider"
export default {
    name: 'ProductCart',

    props: ['productProp'],

    data() {
        return {
            product: {},
        }
    },

    computed: {

    },

    filters: {
        format: val => `${val}`.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 '),
    },
}
</script>
