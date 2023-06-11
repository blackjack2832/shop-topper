<template>
    <div class="catalog-section-filters">
        <div class="sections-filter">
            <a v-for="category in categories" :href="'/catalog/' + category.slug" class="sections-filter-item">{{ category.title }}</a>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Categories',

    data() {
        return {
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
    }
}
</script>
