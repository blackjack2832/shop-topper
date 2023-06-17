<template>
    <div class="container">
        <div class="breadcrumbs">
            <a href="" class="breadcrumbs__item breadcrumbs__link">Главная</a>
            <a href="" class="breadcrumbs__item active">Корзина</a>
        </div>
        <div class="cart">
            <div class="cart-title page-title">КОРЗИНА</div>
            <div class="cart-container" v-if="cart.totalQuantity != 0">
                <div v-for="product in cart.products" class="cart-item">
                    <div class="cart-item-block-left">
                        <img v-if="product.images[0] != undefined" class="cart-item-image" :src="product.images[0].url"
                            alt="">
                        <img v-else src="../../../../images/noimage.jpg" class="cart-item-image" alt="">
                        <div class="cart-item-title-container">
                            <a :href="'/product/detail/' + product.id">
                                <div class="cart-item-title">{{ product.title }}</div>
                            </a>
                            <div class="cart-item-quantity">
                                <span>Кол-во: </span>
                                <div class="product-detail-quantity" type="text">{{ product.quantity }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="cart-item-block-right">
                        <div>
                            <div class="cart-item-price">{{ product.totalPrice | format }} руб</div>
                            <a href="" @click.prevent="removeFromCart(product.id)" class="cart-item-remove-from-cart">Удалить</a>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="cart.totalQuantity != 0" class="total-price-block">
                <div class="total-price-key">Итого:</div>
                <div class="total-price-value">{{ cart.totalPrice | format }} руб</div>
            </div>
        </div>
        <div v-if="cart.totalQuantity != 0 && page != 'order'" class="make-order-button-container">
            <a class="button-make-order button black-button" href="/order">Оформить заказ</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Cart',

    data() {
        return {
            cart: [],
            page: ''
        }
    },

    mounted() {
        let currentUrl = window.location.href
        this.page = currentUrl.split("/").reverse()[0]
        this.getCartProducts()
    },

    methods: {
        getCartProducts() {
            axios.get('/cart/products').then(res => {
                this.cart = res.data
            })
        },

        removeFromCart(id) {
            axios.delete(`/cart/${id}`).then(res => {
                this.cart = res.data
                this.$store.dispatch('getCartItemsQuantity')
            })
        }
    },

    filters: {
        format: val => `${val}`.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 '),
    },
}
</script>