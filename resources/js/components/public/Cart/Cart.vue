<template>
    <div class="container">
        <div class="breadcrumbs">
            <a href="" class="breadcrumbs__item breadcrumbs__link">Главная</a>
            <a href="" class="breadcrumbs__item active">Корзина</a>
        </div>
        <div class="cart">
            <div class="cart-title page-title">КОРЗИНА</div>
            <div class="cart-container">
                <div v-for="product in cart.products" class="cart-item">
                    <div class="cart-item-block-left">
                        <img v-if="product.images[0] != undefined" class="cart-item-image" :src="product.images[0].url" alt="">
                        <img v-else src="../../../../images/noimage.jpg" class="cart-item-image" alt="">
                        <a href="./product-detail.html">
                            <div class="cart-item-title">{{ product.title }}</div>
                        </a>
                    </div>
                    <div class="cart-item-block-right">
                        <div class="cart-item-quantity">
                            <span class="edit-product-quantity">+</span>
                            <div class="product-detail-quantity" type="text">{{ product.quantity }}</div>
                            <span class="edit-product-quantity">-</span>
                        </div>
                        <div>
                            <div class="cart-item-price">{{ product.totalPrice | format }} руб</div>
                            <a href="" class="cart-item-remove-from-cart">Удалить</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="total-price-block">
                <div class="total-price-key">Итого:</div>
                <div class="total-price-value">{{ cart.totalPrice | format }} руб</div>
            </div>
        </div>
        <div class="make-order-button-container">
            <a class="button-make-order button black-button" href="./order.html">Оформить заказ</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Cart',

    data() {
        return {
            cart: []
        }
    },

    mounted() {
        this.getCartProducts()
    },

    methods: {
        getCartProducts() {
            axios.get('/cart/products').then(res => {
                this.cart = res.data
            })
        }
    },

    filters: {
        format: val => `${val}`.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 '),
    }
}
</script>