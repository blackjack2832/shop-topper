<template>
    <div class="slider-store-addresses" data-slider="js-slider-store-addresses">
        <div v-for="address in addresses" class="slider-store-addresses-item">
            <div class="slider-store-img-container">
                <img :src="address.url" alt="">
            </div>
            <div class="slider-store-information-blocks">
                <div class="slider-store-title">{{ address.message }}</div>
                <div class="slider-store-information">
                    <div class="slider-store-address slider-store-information-block">
                        Наш адрес: <span class="pd-left-10">{{ address.address }}</span>
                    </div>
                    <div class="slider-store-phone slider-store-information-block">
                        Телефон: <span class="pd-left-10">{{ address.phone_number }}</span>
                    </div>
                    <div class="slider-store-opening-hours slider-store-information-block">
                        Часы работы: <span class="pd-left-10">{{ address.opening_hours }}</span>
                    </div>
                    <a class="button-catalog button" href="/catalog">В каталог</a>
                    <div v-if="address.next_address !== null" class="slick-next-custom slider-store-information-block">
                        <img src="../../../../images/svg/icon-logn-right.svg" alt="">
                        <span class="pd-left-10">{{ address.next_address }}</span>
                    </div>
                    <div v-if="address.back_address !== null" class="slick-prev-custom slider-store-information-block">
                        <span class="pd-right-10">{{ address.back_address }}</span>
                        <img src="../../../../images/svg/icon-logn-left.svg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import "slick-slider"
export default {
    name: 'AddressSlider',

    data() {
        return {
            addresses: []
        }
    },

    mounted() {
        this.getAllImages();
    },

    updated() {
        let addressSlider = $('[data-slider="js-slider-store-addresses"]');

        if (addressSlider !== null) {
            $(addressSlider).slick({
                slidesToShow: 1,
            })

            $('.slick-prev-custom').on('click', function (e) {
                addressSlider.slick('slickPrev')
            });

            $('.slick-next-custom').on('click', function (e) {
                addressSlider.slick('slickNext')
            });
        }
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
