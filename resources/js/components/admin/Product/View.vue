<template>
    <div>
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
            products: []
        }
    },

    mounted() {
        this.getAllProducts()
    },

    methods: {
        getAllProducts() {
            axios.get('/api/product').then(res => {
                console.log(res)
                this.products = res.data.data;
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
        }
    }
}
</script>
<style scoped></style>