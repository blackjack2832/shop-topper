$(function(){
    $('[data-slider="js-slider-main-page"]').slick({
        slidesToShow: 1,
        dots: true,
        autoplay: true,
        speed: 500
    })

    $('[data-slider="js-slider-recommended-products"]').slick({
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                },
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    })

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

    let detailSubslider = $('[data-slider="js-detail-subslider"]');

    if (detailSubslider !== null) {
        $(detailSubslider).slick({
            vertical: true,
            verticalSwiping: true,
            slidesToShow: 8,
            asNavFor: '.product-detail-main-slider'
        })

        $(detailSubslider).find('.slick-slide').on('click', function(e){
            let slideId = $(this).attr('data-slick-index')
            detailSubslider.slick('slickGoTo', slideId);
        })
    }

    $('[data-slider="js-detail-main-slider"]').slick({
        slidesToShow: 1,
        asNavFor: '.product-detail-subslider'
    })

    let phoneMask = new Inputmask("+9 (999) 999-99-99")
    phoneMask.mask($(".input-phone"));

    $(".order-input-container").on('click', function(e) {

    });
});

