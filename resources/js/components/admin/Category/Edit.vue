<template>
    <div>
        <div class="form-group">
            <label>Введите название товара</label>
            <div class="text-danger">{{ errors.title[0] }}</div>
            <input v-model="title" type="text" class="form-control" placeholder="Название">
            <div class="text-danger">{{ errors.slug[0] }}</div>
            <div class="text-danger">{{ slugError }}</div>
            <input v-model="slug" type="text" class="form-control mt-3" placeholder="символьный код">
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
        return {
            title: '',
            slug: '',
            errors: {
                title: '',
                slug: '',
            },
            slugError: ''

        }
    },

    methods: {
        updateCategory() {
            for (let key in this.errors) {
                this.errors[key] = ''
            }
            axios.patch(`/api/category/${this.$route.params.id}`, {
                title: this.title,
                slug: this.slug,
            }).then(res => {
                router.push({ name: 'admin.category.view' })
            }).catch(error => {
                for (let key in error.response.data.errors) {
                    this.errors[key] = error.response.data.errors[key]
                }
                if (error.response.data.message !== 'The given data was invalid.') {
                    this.slugError = error.response.data.message
                }
            })
        },

        getCategory() {
            axios.get(`/api/category/${this.$route.params.id}`).then(res => {
                this.title = res.data.data.title;
                this.slug = res.data.data.slug;
            })
        },

        back() {
            router.push({ name: 'admin.category.view' })
        }
    },

    mounted() {
        this.getCategory()
    }
}
</script>
<style scoped>
.test {
    border: 1px solid red;
}
</style>