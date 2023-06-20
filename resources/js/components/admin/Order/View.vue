<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Покупатель</th>
                    <th scope="col">Цена заказа</th>
                    <th scope="col">Оплачен</th>
                    <th scope="col">Заказ забрали</th>
                    <th scope="col">Адрес</th>
                    <th scope="col">Редакитрование</th>
                    <th scope="col">Удаление</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="order in orders">
                    <th scope="row">{{ order.id }}</th>
                    <td>{{ order.buyer.email }}</td>
                    <td>{{ order.total_price | format }} руб.</td>
                    <td>{{ order.payed ? "Да" : "Нет" }}</td>
                    <td>{{ order.picked_up ? "Да" : "Нет" }}</td>
                    <td>{{ order.address.address}}</td>
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
            orders: []
        }
    },

    mounted() {
        this.getAllOrders()
    },

    methods: {
        getAllOrders() {
            axios.get('/api/order').then(res => {
                this.orders = res.data.data
            })
        }
    },

    filters: {
        format: val => `${val}`.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 '),
    },
}
</script>
<style scoped></style>