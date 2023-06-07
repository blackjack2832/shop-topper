<template>
    <div>
        <div class="form-group">
            <label>Введите название товара</label>
            <div class="text-danger">{{ errors.title[0] }}</div>
            <input v-model="title" type="text" class="form-control" placeholder="Название">
        </div>
        <div class="custom-flex">
            <button @click.prevent="updateCategory" type="submit" class="btn btn-success">Редактировать</button>
            <button @click.prevent="back" type="submit" class="btn btn-danger cusrom-button">Отменить</button>
        </div>
    </div>
</template>

<script>
import router from '../../../router'
export default {
    name: 'Edit',

    data() {
        return{
            title: '',
            errors: {
                title: '',
            }
        }
    },

    methods: {
        updateCategory() {
            axios.patch(`/api/category/${this.$route.params.id}`, {
                title: this.title,
            }).then(res => {
                router.push({name: 'admin.category.view'})
            })
        },

        getCategory() {
            axios.get(`/api/category/${this.$route.params.id}`).then(res => {
                this.title = res.data.data.title;
            })
        },

        back(){
            router.push({name: 'admin.category.view'})
        }
    },

    mounted() {
        this.getCategory()
    }
}
</script>
<style scoped>
.test{
    border: 1px solid red;
}
</style>