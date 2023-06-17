<template>
    <div class="container">
        <div v-for="address in addresses" :key="address.id" class="about-item">
            <div :class="['about-item-image', address.id % 2 == 0 ? 'flex-order-2' : 'flex-order-1']">
                <img :src="address.url" alt="">
            </div>
            <div :class="['about-item-info', address.id % 2 == 0 ? 'flex-order-1' : 'flex-order-2']">
                <h2 class="about-item-title">Наш магазин на пр. Ленина</h2>
                <div class="slider-store-address slider-store-information-block">
                    Наш адрес: <span class="pd-left-10">пр. Ленина, 27а</span>
                </div>
                <div class="slider-store-phone slider-store-information-block">
                    Телефон: <span class="pd-left-10">+7(999)-999-99-99</span>
                </div>
                <div class="slider-store-opening-hours slider-store-information-block">
                    Часы работы: <span class="pd-left-10">Ежедневно с 10:00 до 21:00</span>
                </div>
            </div>
        </div>
        <!--<div class="about-item">
            <div class="about-item-image flex-order-2">
                <img src="@img/address_2.jpg" alt="">
            </div>
            <div class="about-item-info flex-order-1">
                <h2 class="about-item-title">Наш магазин на пр. Ленина</h2>
                <div class="slider-store-address slider-store-information-block">
                    Наш адрес: <span class="pd-left-10">пр. Ленина, 27а</span>
                </div>
                <div class="slider-store-phone slider-store-information-block">
                    Телефон: <span class="pd-left-10">+7(999)-999-99-99</span>
                </div>
                <div class="slider-store-opening-hours slider-store-information-block">
                    Часы работы: <span class="pd-left-10">Ежедневно с 10:00 до 21:00</span>
                </div>
            </div>
        </div>-->
    </div>
</template>

<script>
export default {
    name: 'About',

    data() {
        return {
            addresses: []
        }
    },

    mounted() {
        this.getAllImages()
    },

    methods: {
        getAllImages() {
            axios.get('/api/images/address-slider').then(res => {
                this.addresses = res.data.data
            }).catch(error => {
                console.log(error)
            })
        }
    }
}
</script>
