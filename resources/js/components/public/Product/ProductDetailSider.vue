<template>
    <div class="product-detail-slider">
        <div class="product-detail-subslider" data-slider="js-detail-subslider">
            <div class="detail-subslider-item" v-for="product in productProp">
                <img :src="product.url" alt="">
            </div>
        </div>
        <div class="product-detail-main-slider" data-slider="js-detail-main-slider">
            <div class="detail-main-slider-item" v-for="product in productProp">
                <img :src="product.url" alt="">
            </div>
        </div>
    </div>
</template>

<script>

import "slick-slider"
export default {
    name: 'ProductDetailSider',

    props: ['productProp'],

    data() {
        return {
            product: {},
        }
    },

    mounted() {

    },

    updated() {
        let detailSubslider = $('[data-slider="js-detail-subslider"]');

        if (detailSubslider !== null) {
            $(detailSubslider).slick({
                vertical: true,
                verticalSwiping: true,
                slidesToShow: 8,
                asNavFor: '.product-detail-main-slider'
            })

            $(detailSubslider).find('.slick-slide').on('click', function (e) {
                let slideId = $(this).attr('data-slick-index')
                detailSubslider.slick('slickGoTo', slideId);
            })
        }

        $('[data-slider="js-detail-main-slider"]').slick({
            slidesToShow: 1,
            asNavFor: '.product-detail-subslider'
        })
    }
}
</script>
