<template>
    <div>
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                {{ this.selectedCategory }}
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" @click.prevent="selectCategory(category.title, category.slug)"
                    v-for="category in categories" href="#">{{ category.title }}</a>
                <a class="dropdown-item" @click.prevent="selectCategory('Отменить', '')" href="#">Отменить</a>
            </div>
        </div>
        <br>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Название</th>
                    <th scope="col">Символьный код</th>
                    <th scope="col">Цена</th>
                    <th scope="col">Активность</th>
                    <th scope="col">Хит продаж</th>
                    <th scope="col">Категория товара</th>
                    <th scope="col">Редакитрование</th>
                    <th scope="col">Удаление</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in products">
                    <th scope="row">{{ product.id }}</th>
                    <td>{{ product.title }}</td>
                    <td>{{ product.slug }}</td>
                    <td>{{ product.price }}</td>
                    <td>{{ product.is_active ? "Да" : "Нет" }}</td>
                    <td>{{ product.hit ? "Да" : "Нет" }}</td>
                    <td>{{ product.category.name }}</td>
                    <td><button @click.prevent="showUpdatePage(product.id)" class="btn btn-primary">Изменить</button></td>
                    <td><button @click.prevent="deleteProduct(product.id)" class="btn btn-danger">Удалить</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import router from "../../../router";
export default {
    name: 'View',

    data() {
        return {
            products: [],
            categories: [],
            selectedCategory: 'отсортировать по категории',
        }
    },

    mounted() {
        this.getAllProducts()
        this.getAllCategories()
    },

    methods: {
        getAllProducts() {
            axios.get('/api/product').then(res => {
                this.products = res.data.products;
            }).catch(error => {
                console.log(error)
            })
        },

        showUpdatePage(id) {
            router.push({ name: 'admin.product.edit', params: { id } })
        },

        deleteProduct(id) {
            axios.delete(`/api/product/${id}`)
                .then(res => {
                    this.getAllProducts()
                })
                .catch(error => {
                    console.log(error.response.data.errors);
                })
        },

        getAllCategories() {
            axios.get('/api/category').then(res => {
                this.categories = res.data.data
            })
        },

        selectCategory(title, slug) {
            if (title == 'Отменить') {
                this.getAllProducts()
                this.selectedCategory = 'отсортировать по категории'
            }
            else {
                this.getAllProductsByCategory(slug)
                this.selectedCategory = title
            }
        },

        getAllProductsByCategory(slug) {
            axios.get(`/api/product?category=${slug}`).then(res => {
                this.products = res.data.products
            })
        },
    }
}
</script>
<style scoped></style>