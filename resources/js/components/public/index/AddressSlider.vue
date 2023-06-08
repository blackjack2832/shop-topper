<template>
    <div class="slider-store-addresses">
        <div class="slider-store-addresses-item">
            <div class="slider-store-img-container">
                <img src="" alt="">
            </div>
            <div class="slider-store-information-blocks">
                <div class="slider-store-title">Наш магазин на пр. Ленина</div>
                <div class="slider-store-information">
                    <div class="slider-store-address slider-store-information-block">
                        Наш адрес: <span class="pd-left-10">пр. Ленина, 27а</span>
                    </div>
                    <div class="slider-store-phone slider-store-information-block">
                        Телефон: <span class="pd-left-10">+7(999)-999-99-99</span>
                    </div>
                    <div class="slider-store-opening-hours slider-store-information-block">
                        Часы работы: <span class="pd-left-10">Ежедневно с 10:00 до 21:00</span>
                    </div>
                    <a class="button-catalog button" href="">В каталог</a>
                    <div class="slick-next-custom slider-store-information-block">
                        <img src="" alt="">
                        <span class="pd-left-10">Башня</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="slider-store-addresses-item">
            <div class="slider-store-img-container">
                <img src="" alt="">
            </div>
            <div class="slider-store-information-blocks">
                <div class="slider-store-title">Наш магазин на Башне ЧТЗ</div>
                <div class="slider-store-information">
                    <div class="slider-store-address slider-store-information-block">
                        Наш адрес: <span class="pd-left-10">ул. Салютная, 27</span>
                    </div>
                    <div class="slider-store-phone slider-store-information-block">
                        Телефон: <span class="pd-left-10">+7(999)-999-99-99</span>
                    </div>
                    <div class="slider-store-opening-hours slider-store-information-block">
                        Часы работы: <span class="pd-left-10">Ежедневно с 10:00 до 21:00</span>
                    </div>
                    <a class="button-catalog button" href="">В каталог</a>
                    <div class="slick-prev-custom slider-store-information-block">
                        <span class="pd-right-10">пр. Ленина</span><img src="" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import "slick-slider"
export default {
    name: 'MainSlider',

    data() {
        return {
            images: []
        }
    },

    mounted() {
        this.getAllImages();
    },

    updated() {
        
    },

    methods: {
        getAllImages() {
            axios.get('/api/images/address-slider').then(res => {
                this.images = res.data.data
            }).catch(error => {
                console.log(error)
            })
        }
    }
}
</script>
