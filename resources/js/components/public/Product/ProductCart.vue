<template>
    <div class="catalog-element">
        <a :href="productDetailLink">
            <div class="add-to-favorite-icon" @click="addToFavorite"><img src="../../../../images/favorite.png" alt=""></div>
            <img class="catalog-element-image" :src="productProp.images[0].url" alt="">
            <div class="catalog-element-title">{{ productProp.title }}</div>
            <div class="catalog-element-description">{{ productProp.preview_description }}</div>
            <div class="add-to-favorite-icon"><img src="" alt=""></div>
        </a>
        <a @click.prevent="$store.dispatch('addToCart', {id: productProp.id, quantity: 1})" class="catalog-element-add-to-cart" :href="addToCartLink + productProp.id">
            <div class="add-to-cart-icon"><img class="" src="../../../../images/cart.png" alt=""></div>
            <div class="catalog-element-price">{{ productProp.price | format }} руб</div>
        </a>
    </div>
</template>

<script>

export default {
    name: 'ProductCart',

    props: ['productProp'],

    data() {
        return {
            product: {},
            productDetailLink : ''
        }
    },

    mounted() {
        this.productDetailLink = `/product/detail/${this.productProp.id}`
    },

    computed: {
        addToCartLink() {
            return this.$store.getters.addToCartLink
        }
    },

    methods: {
        addToFavorite() {
            alert("Дарова");
        },
    },

    filters: {
        format: val => `${val}`.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 '),
    },
}
</script>
