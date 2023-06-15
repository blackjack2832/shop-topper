<template>
    <form action="" class="order-form">
        <div class="order-form-container">
            <h1 class="order-title">Оформление заказа</h1>
            <div class="order-input-container">
                <input type="text">
                <label for="">Ваше имя</label>
            </div>
            <div class="order-input-container">
                <input type="text">
                <label for="">Ваша фамилия</label>
            </div>
            <div class="order-input-container">
                <input class="input-phone" type="text">
                <label for="">Номер телефона</label>
            </div>
            <div class="order-input-container">
                <input type="text">
                <label for="">Ваш e-mail адрес</label>
            </div>
          <!--<div class="order-input-container radio">
                <label for="order_pay_online">
                    <input id="order_pay_online" name="order_pay" type="radio" value="online">
                    <span>Оплата онлайн</span>
                </label>
                <label for="order_pay_offline">
                    <input id="order_pay_offline" name="order_pay" type="radio" value="online">
                    <span>Оплата на месте</span>
                </label>
            </div>-->
            <div class="order-input-container">
                <textarea type="text"></textarea>
                <label for="">Комментарий к заказу</label>
            </div>
            <div class="order-input-container">
                <input class="order-input-promo-code" type="text">
                <label for="">введите промокод</label>
            </div>
            <div class="make-order-button-container">
                <a class="button-make-order button black-button" href="./order.html">Оформить заказ</a>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    name: 'MakeOrder',
}
</script>