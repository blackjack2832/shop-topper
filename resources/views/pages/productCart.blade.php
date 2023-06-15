@extends('layouts.index')

@section('title', 'Товар')
@section('index')
<div class="container">
    <product-detail></product-detail>
</div>
<div class="detail-product__slider-recommended-products">
    <div class="detail-product__slider-recommended-products-title">Вам может понравиться</div>
    <product-slider></product-slider>
</div
@endsection