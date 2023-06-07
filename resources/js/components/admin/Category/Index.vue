<template>
    <div class="ml-3">
        <div class="d-flex">
            <router-link class="btn" :to="{name: 'admin.category.add'}">Добавить</router-link>
            <router-link class="btn" :to="{name: 'admin.category.view'}">Показать</router-link>
        </div>
        <div class="ml-3 w-50"><router-view class="mt-3"></router-view></div>
        
    </div>
</template>

<script>
import router from "../../../router";
export default {
    name: 'Index',

    mounted() {
        router.push({name: 'admin.category.view'}).catch(error => {
            
        })
    }
}
</script>
<style scoped>
.test{
    border: 1px solid red;
}
</style>