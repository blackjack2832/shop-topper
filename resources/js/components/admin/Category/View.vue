<template>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Название</th>
                <th scope="col">Редакитрование</th>
                <th scope="col">Удаление</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="category in categories">
                <th scope="row">{{ category.id }}</th>
                <td>{{ category.title }}</td>
                <td><button @click.prevent="showUpdatePage(category.id)" class="btn btn-primary">Редактировать</button></td>
                <td><button @click.prevent="deleteCategory(category.id)" class="btn btn-danger">Уадлить</button></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import router from "../../../router";
export default {
    name: 'View',

    data() {
        return{
            categories: []
        }
    },

    mounted() {
        this.getAllCategories()
    },

    methods: {
        getAllCategories(){
            axios.get('/api/category').then(res => {
                this.categories = res.data.data;
            })
        },

        showUpdatePage(id) {
            router.push({name: 'admin.category.edit', params: {id}})
        },

        deleteCategory(id) {
            axios.delete(`/api/category/${id}`)
            .then(res => {
                this.getAllCategories()
            })
            .catch(error => {
                console.log(error.response.data.errors);
            })
        }
    }
}
</script>
<style scoped></style>