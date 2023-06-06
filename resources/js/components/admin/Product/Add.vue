<template>
    <div class="w-50">
        <div class="form-group">
            <label>Введите название товара</label>
            <div class="text-danger">{{ errors.title[0] }}</div>
            <input v-model="title" type="text" class="form-control" placeholder="Название">
        </div>
        <div class="form-group">
            <label>Введите символьный код товара(slug)</label>
            <div class="text-danger">{{ errors.slug[0] }}</div>
            <input v-model="slug" type="text" class="form-control" placeholder="Символьный код">
        </div>
        <div class="form-group">
            <label>Введите цену товара</label>
            <div class="text-danger">{{ errors.price[0] }}</div>
            <input v-model="price" type="text" class="form-control" placeholder="цена">
        </div>
        <div class="form-group">
            <label>Краткое описание товара</label>
            <div class="text-danger">{{ errors.preview_description[0] }}</div>
            <textarea v-model="preview_description" class="no-resize h-25 form-control" id="exampleFormControlTextarea1"
                rows="3"></textarea>
        </div>
        <div class="form-group">
            <label>Детальное описание товара</label>
            <div class="text-danger">{{ errors.detail_description[0] }}</div>
            <textarea v-model="detail_description" class="no-resize form-control" id="exampleFormControlTextarea1"
                rows="3"></textarea>
        </div>
        <div class="form-group">
            <label>Выберите категорию товара</label>
            <div class="text-danger">{{ errors.category_id[0] }}</div>
            <select v-model="category_id" class="form-control form-control-sm">
                <option v-for="item in allCategories" :value="item.id">{{ item.title }}</option>
                <option value="4">Тест</option>
            </select>
        </div>
        <div class="form-group form-check ml-1">
            <input v-model="is_active" type="checkbox" class="form-check-input">
            <label class="form-check-label">Товар активен</label>
        </div>
        <div class="form-group form-check ml-1">
            <input v-model="hit" type="checkbox" class="form-check-input">
            <label class="form-check-label">Товар является хитом продаж</label>
        </div>
        <button @click.prevent="store" type="submit" class="btn btn-primary">Добавить</button>
    </div>
</template>

<script>
import router from "../../../router";
export default {
    name: 'Add',

    data() {
        return {
            title: null,
            slug: null,
            price: null,
            is_active: true,
            preview_description: null,
            detail_description: null,
            hit: false,
            category_id: null,
            allCategories: [],
            errors: {
                title: '',
                slug: '',
                price: '',
                preview_description: '',
                detail_description: '',
                category_id: ''
            }
        }
    },

    mounted() {
        this.getCategories();
    },

    methods: {
        getCategories() {
            axios.get('/api/categories').then(res => {
                this.allCategories = res.data;
            })
        },

        store() {
            for (let key in this.errors) {
                this.errors[key] = ''
            }
            axios.post('/api/product', {
                title: this.title,
                slug: this.slug,
                price: this.price,
                is_active: this.is_active,
                preview_description: this.preview_description,
                detail_description: this.detail_description,
                hit: this.hit,
                category_id: this.category_id
            }).then(res => {
                router.push({name: 'admin.product.view'})
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
.test {
    color: red;
}

.no-resize {
    resize: none;
}
</style>