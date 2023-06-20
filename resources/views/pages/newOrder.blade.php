@extends('layouts.index')

@section('title', 'Заказ успешно сформирован')
@section('index')
<div class="container">
    <div class="order-result-container">
        <h1 class="order-result-title">Заказ №{{ $order }} сформирован!</h1>
        <div class="order-result-message">Как только ваш заказ будет готов, мы отправим вам письмо на указанный email.</div>
    </div>
</div>
@endsection