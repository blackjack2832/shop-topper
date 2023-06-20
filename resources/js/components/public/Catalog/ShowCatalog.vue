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
            limit: 10,
            offset: 0,
            products: [],
            hideButton: false,
            category: '',
        }
    },

    mounted() {
        this.getAllProductsByCategory()

        if(this.products.length <= this.limit)
            this.hideButton = true
    },

    methods: {

        addToFavorite() {
            alert("Дарова");
        },

        getAllProductsByCategory() {
            let currentUrl = window.location.href
            let category = currentUrl.split("/").reverse()[0]
            axios.get(`/api/product?category=${category}&limit=${this.limit}&offset=${this.offset}`).then(res => {
                if (res.data == 0) {
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
