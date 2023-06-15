@extends('layouts.index')

@section('index')
<div class="container">
    <div class="order">
        <make-order></make-order>
        <div class="order-goods">
            <div class="order-goods">
                <cart></cart>
            </div>
        </div>
    </div>
</div>
@endsection