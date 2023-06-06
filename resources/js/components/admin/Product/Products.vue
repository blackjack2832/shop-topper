<template>
    <div>
        <div class="d-flex">
            <router-link class="btn btn" :to="{name: 'admin.product.add'}">Добавить</router-link>
            <router-link class="btn btn" :to="{name: 'admin.product.view'}">Показать</router-link>
        </div>
        <div class="ml-3"><router-view class="mt-3"></router-view></div>
        
    </div>
</template>

<script>
export default {
    name: 'Products'
}
</script>
<style scoped>
.test{
    border: 1px solid red;
}
</style>