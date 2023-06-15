@extends('layouts.index')

@section('title', 'shop-topper')
@section('index')
<main-slider></main-slider>
<div class="container">
    <div class="slider-recommended-products">
        <div class="slider-recommended-products-title">Рекомендуемые товары</div>
        <product-slider></product-slider>
        <div class="button-catalog-container">
            <a class="button-catalog button" href="">В каталог</a>
        </div>
    </div>
    <address-slider></address-slider>
</div>
@endsection