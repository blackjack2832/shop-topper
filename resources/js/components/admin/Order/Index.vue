<template>
     <div>
        <div class="d-flex">
            <router-link class="btn" :to="{name: 'admin.order.view'}">Показать</router-link>
        </div>
        <div class="ml-3"><router-view class="mt-3"></router-view></div>
    </div>
</template>

<script>
import router from "../../../router";
export default {
    name: 'Index',
}
</script>
<style scoped></style>