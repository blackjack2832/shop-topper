<template>
    <div class="container-large">
        <div class="catalog-section">
            <categories></categories>
            <div class="catalog-elements">
                <h1 class="catalog-section-title">{{ category }}</h1>
                <div class="catalog-elements-container">
                    <product-cart v-for="product in products" v-bind:key="product.id" :productProp="product"></product-cart>
                </div>
            </div>
            <!--<div class="catalog-elements">
            <h1 class="catalog-section-title">Ноутбуки</h1>
            <div class="catalog-elements-container">
                <div class="catalog-element" v-for="product in products">
                    <div class="add-to-favorite-icon" @click="addToFavorite"><img src="../../../../images/favorite.png" alt=""></div>
                    <a :href="'/product/detail/' + product.id">
                        <img class="catalog-element-image" :src="product.images[0].url" alt="">
                        <div class="catalog-element-title">{{ product.title }}</div>
                        <div class="catalog-element-description">{{ product.preview_description }}</div>
                    </a>
                    <a class="catalog-element-add-to-cart" href="">
                        <div class="add-to-cart-icon"><img class="" src="../../../../images/cart.png" alt=""></div>
                        <div class="catalog-element-price">120 000руб</div>
                    </a>
                </div>
            </div>
        </div>-->
        </div>
        <div v-if="hideButton == false" class="button-container">
            <a href="" @click.prevent="getMore(15)" class="button black-button">Загрузить ещё</a>
        </div>
    </div>
</template>

<script>
import Categories from "./Categories.vue"
import ProductCart from "../Product/ProductCart";
export default {
    name: 'ShowCatalog',
    components: {
        Categories,
        ProductCart
    },

    data() {
        return {
            limit: 15,
            offset: 0,
            products: [],
            hideButton: false,
            category: '',
        }
    },

    mounted() {
        this.getAllProductsByCategory()
    },

    methods: {

        addToFavorite() {
            alert("Дарова");
        },

        getAllProductsByCategory() {
            let currentUrl = window.location.href
            let category = currentUrl.split("/").reverse()[0]
            axios.get(`/api/product?category=${category}&limit=${this.limit}&offset=${this.offset}`).then(res => {
                if (res.data.products == 0) {
                    this.hideButton = true
                } else {
                    res.data.products.forEach(product => {
                        this.products.push(product)
                    });
                }
                
                this.category = res.data.category.title
            })
        },

        getMore(limit) {
            this.offset += this.limit
            this.limit += limit
            this.getAllProductsByCategory()
        }
    },
}
</script>
