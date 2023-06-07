<template>
    <div class="content-wrapper">
        <div class="preloader flex-column justify-content-center align-items-center">
            <p>SHOP-TOPPER</p>
        </div>
        <nav class="main-header navbar navbar-expand navbar-white navbar-light">
            <!-- Left navbar links -->
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
                </li>
            </ul>

            <!-- Right navbar links -->
            <ul class="navbar-nav ml-auto">
                <a href="/" class="btn btn-success">На сайт</a>
            </ul>
        </nav>
        <main-side-bar></main-side-bar>
        <router-view class="mt-3"></router-view>
    </div>
</template>

<script>
import MainSideBar from "./Parts/MainSideBar.vue"
export default {
    name: 'Index',
    
    components: {
        MainSideBar
    },

    methods: {
        logOut() {
            axios.post('/logout')
        }
    }
}
</script>
<style scoped>
.main-header{
    margin-left: 0px !important;
}
@media (min-width: 992px){
    .sidebar-mini.sidebar-collapse .main-header{
        margin-left: 0px !important;
    }
}
</style>