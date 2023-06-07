@extends('layouts.app')

@section('content')
<div class="slider-main-page" data-slider="js-slider-main-page">
    <div class="slider-main-page-item">
        <img src="@img/1.jpg" alt="">
    </div>
    <div class="slider-main-page-item">
        <img src="@img/2.jpg" alt="">
    </div>  
    <div class="slider-main-page-item">
        <img src="@img/3.jpg" alt="">
    </div>
    <div class="slider-main-page-item">
        <img src="@img/4.jpg" alt="">
    </div>  
</div>
<div class="container">
    <div class="slider-recommended-products">
        <div class="slider-recommended-products-title">Рекомендуемые товары</div>
        <div class="slider-recommended-products-container" data-slider="js-slider-recommended-products">
            <div class="catalog-element">
                <a href="./product-detail.html">
                    <img class="catalog-element-image" src="@img/mac/MacBook1.jpg" alt="">
                    <div class="catalog-element-title">MacBook 15 pro</div>
                    <div class="catalog-element-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi a quas aperiam facere reprehenderit porro optio quis ipsam at consectetur, quaerat laudantium tempore eos aliquam iure libero ex vitae. Consequuntur.</div>
                    <div class="add-to-favorite-icon"><img src="@img/" alt=""></div>
                </a>
                <a class="catalog-element-add-to-cart" href="">
                    <div class="add-to-cart-icon"><img class="" src="@img/cart.png" alt=""></div>
                    <div class="catalog-element-price">120 000руб</div>
                </a>
            </div>
            <div class="catalog-element">
                <a href="./product-detail.html">
                    <img class="catalog-element-image" src="@img/mac/MacBook1.jpg" alt="">
                    <div class="catalog-element-title">MacBook 15 pro</div>
                    <div class="catalog-element-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi a quas aperiam facere reprehenderit porro optio quis ipsam at consectetur, quaerat laudantium tempore eos aliquam iure libero ex vitae. Consequuntur.</div>
                    <div class="add-to-favorite-icon"><img src="@img/" alt=""></div>
                </a>
                <a class="catalog-element-add-to-cart" href="">
                    <div class="add-to-cart-icon"><img class="" src="@img/cart.png" alt=""></div>
                    <div class="catalog-element-price">120 000руб</div>
                </a>
            </div>
            <div class="catalog-element">
                <a href="./product-detail.html">
                    <img class="catalog-element-image" src="@img/mac/MacBook1.jpg" alt="">
                    <div class="catalog-element-title">MacBook 15 pro</div>
                    <div class="catalog-element-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi a quas aperiam facere reprehenderit porro optio quis ipsam at consectetur, quaerat laudantium tempore eos aliquam iure libero ex vitae. Consequuntur.</div>
                    <div class="add-to-favorite-icon"><img src="@img/" alt=""></div>
                </a>
                <a class="catalog-element-add-to-cart" href="">
                    <div class="add-to-cart-icon"><img class="" src="@img/cart.png" alt=""></div>
                    <div class="catalog-element-price">120 000руб</div>
                </a>
            </div>
            <div class="catalog-element">
                <a href="./product-detail.html">
                    <img class="catalog-element-image" src="@img/mac/MacBook1.jpg" alt="">
                    <div class="catalog-element-title">MacBook 15 pro</div>
                    <div class="catalog-element-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi a quas aperiam facere reprehenderit porro optio quis ipsam at consectetur, quaerat laudantium tempore eos aliquam iure libero ex vitae. Consequuntur.</div>
                    <div class="add-to-favorite-icon"><img src="@img/" alt=""></div>
                </a>
                <a class="catalog-element-add-to-cart" href="">
                    <div class="add-to-cart-icon"><img class="" src="@img/cart.png" alt=""></div>
                    <div class="catalog-element-price">120 000руб</div>
                </a>
            </div>
            <div class="catalog-element">
                <a href="./product-detail.html">
                    <img class="catalog-element-image" src="@img/mac/MacBook1.jpg" alt="">
                    <div class="catalog-element-title">MacBook 15 pro</div>
                    <div class="catalog-element-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi a quas aperiam facere reprehenderit porro optio quis ipsam at consectetur, quaerat laudantium tempore eos aliquam iure libero ex vitae. Consequuntur.</div>
                    <div class="add-to-favorite-icon"><img src="@img/" alt=""></div>
                </a>
                <a class="catalog-element-add-to-cart" href="">
                    <div class="add-to-cart-icon"><img class="" src="@img/cart.png" alt=""></div>
                    <div class="catalog-element-price">120 000руб</div>
                </a>
            </div>
        </div>
        <div class="button-catalog-container">
            <a class="button-catalog button" href="">В каталог</a>
        </div>
    </div>
    <div class="slider-store-addresses" data-slider="js-slider-store-addresses">
        <div class="slider-store-addresses-item">
            <div class="slider-store-img-container">
                <img src="@img/address_1.jpg" alt="">
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
                        <img src="@img/svg/icon-logn-right.svg" alt=""> 
                        <span class="pd-left-10">Башня</span> 
                    </div>
                </div>
            </div>
        </div>
        <div class="slider-store-addresses-item">
            <div class="slider-store-img-container">
                <img src="@img/address_2.jpg" alt="">
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
                        <span class="pd-right-10">пр. Ленина</span><img src="@img/svg/icon-logn-left.svg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection