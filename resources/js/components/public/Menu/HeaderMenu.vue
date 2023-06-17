<template>
    <div class="header-menu">
        <div @click.prevent="clickMobileMenu" class="header-mobile-menu"></div>
        <div v-bind:class="[headerMenuClass, active]">
            <div class="header-menu-item"><a href="/about">О нас</a></div>
            <div class="header-menu-item"><a href="/catalog">Каталог</a></div>
            <div class="header-menu-item"><a href="">Политика конфиденциальности</a></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderMenu',

    data() {
        return {
            mobileMenuIsActive: false,
            active: '',
            headerMenuClass: 'header-menu-items'
        }
    },

    methods: {
        clickMobileMenu() {
            this.mobileMenuIsActive = !this.mobileMenuIsActive
            if(this.mobileMenuIsActive == false) {
                this.active = ''
            } else {
                this.active = 'active'
            }
        }
    }
}
</script>