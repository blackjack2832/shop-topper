<template>
    <div class="w-50">
        <div class="form-group">
            <label>Введите название категории</label>
            <div class="text-danger">{{ errors.title[0] }}</div>
            <input v-model="title" type="text" class="form-control" placeholder="Название">
        </div>
        <button @click.prevent="store" type="submit" class="btn btn-primary">Добавить</button>
    </div>
</template>

<script>
import router from '../../../router'
export default {
    name: 'Add',

    data() {
        return{
            title: '',
            errors: {
                title: '',
            }
        }
    },

    methods: {
        store() {
            for (let key in this.errors) {
                this.errors[key] = ''
            }
            axios.post('/api/category', {
                title: this.title,
            }).then(res => {
                router.push({name: 'admin.category.view'})
            }).catch(error => {
                for (let key in error.response.data.errors) {
                    this.errors[key] = error.response.data.errors[key]
                }
            })
        }
    }
}
</script>
<style scoped>
.test{
    border: 1px solid red;
}
</style>