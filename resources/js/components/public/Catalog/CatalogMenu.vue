<template>
    <div class="header-menu-item">
        <a :href="catalogLink">Каталог</a>
    </div>
</template>

<script>

export default {
    name: "CatalogMenu",

    data() {
        return {
            catalogLink: '/catalog/'
        }
    },

    mounted() {
        this.getCategory();    
    },

    methods : {
        getCategory() {
            axios.get('/api/category?first=1').then(res => {
                this.catalogLink += res.data.data[0].slug
            })
        }
    }
}

</script>