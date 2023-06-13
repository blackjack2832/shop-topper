<template>
    <div class="product-detail-slider">
        <div v-if="productImages[0] !== undefined" class="product-detail-subslider" data-slider="js-detail-subslider">
            <div class="detail-subslider-item" v-for="product in productImages">
                <img :src="product.url" alt="">
            </div>
        </div>
        <div v-else class="product-detail-subslider" data-slider="js-detail-subslider">
            <div class="detail-subslider-item">
                <img src="../../../../images/noimage.jpg" alt="">
            </div>
        </div>
        <div v-if="productImages[0] !== undefined" class="product-detail-main-slider" data-slider="js-detail-main-slider">
            <div class="detail-main-slider-item" v-for="product in productImages">
                <img :src="product.url" alt="">
            </div>
        </div>
        <div v-else class="product-detail-main-slider" data-slider="js-detail-main-slider">
            <div class="detail-main-slider-item">
                <img src="../../../../images/noimage.jpg" alt="">
            </div>
        </div>
    </div>
</template>

<script>

import "slick-slider"
export default {
    name: 'ProductDetailSider',

    props: ['productImages'],

    data() {
        return {

        }
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
