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
        <div ref="dropzone" class="p-5 bg-gray">Добавьте изображения</div>

        <button @click.prevent="store" type="submit" class="btn btn-primary">Добавить</button>
    </div>
</template>

<script>
import router from "../../../router"
import DropZone from "dropzone"

export default {
    name: 'Add',

    data() {
        return {
            title: '',
            slug: '',
            price: '',
            is_active: true,
            preview_description: '',
            detail_description: '',
            hit: false,
            category_id: '',
            allCategories: [],
            dropzone: null,
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
        this.dropzone = new DropZone(this.$refs.dropzone, {
           url: '/',
           autoProcessQueue: false,
           addRemoveLinks: true,

        })
    },

    computed: {
        covertedHit: function() {
            if (this.hit == true)
                return 1
            else
                return 0
        },

        convertedIsActive: function () { 
            if (this.is_active == true)
                return 1
            else
                return 0
        }
    },

    methods: {
        getCategories() {
            axios.get('/api/category').then(res => {
                this.allCategories = res.data.data;
            })
        },

        store() {
            for (let key in this.errors) {
                this.errors[key] = ''
            }

            const data = new FormData()
            const files = this.dropzone.getAcceptedFiles()
            files.forEach(file => {
                data.append('images[]', file)
            })
            data.append('title', this.title)
            data.append('slug', this.slug)
            data.append('price', this.price)
            data.append('is_active', this.convertedIsActive)
            data.append('preview_description', this.preview_description)
            data.append('detail_description', this.detail_description)
            data.append('hit', this.covertedHit)
            data.append('category_id', this.category_id)
            axios.post('/api/product', data).then(res => {
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

.no-resize {
    resize: none;
}
</style>