<template>
    <div class="slider-main-page" data-slider="js-slider-main-page">
        <div v-for="image in images.images" class="slider-main-page-item">
            <img :src="image.url" alt="">
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

    updated(){
        setTimeout(() => {
            $('[data-slider="js-slider-main-page"]').slick({
            slidesToShow: 1,
            dots: true,
            autoplay: true,
            speed: 500,
            infinity:false
        })
        }, 1000);
    },

    methods: {
        getAllImages() {
            axios.get('/api/images/main-slider').then(res => {
                this.images = res.data.data
            }).catch(error => {
                console.log(error)
            })
        }
    }
}
</script>
