<template>
    <a class="header-icon icon-basket header-item-basket" href="../cart.html">
        <span>{{ cartItemsQuantity }}</span>
    </a>
</template>

<script>

export default {
    name: 'CartMenuItem',

    data() {
        return {
        }
    },

    mounted() {
        this.$store.dispatch('getCartItemsQuantity')
    },

    computed: {
        cartItemsQuantity() {
            return this.$store.getters.cartItemsQuantity
        }
    }
}
</script>
