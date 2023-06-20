<template>
    <form action="" class="order-form">
        <div class="order-form-container">
            <h1 class="order-title">Оформление заказа</h1>
            <div class="order-input-container">
                <input v-model="first_name" type="text">
                <label for="">Ваше имя</label>
                <div class="order-danger">{{ errors.first_name[0] }}</div>
            </div>
            <div class="order-input-container">
                <input v-model="last_name" type="text">
                <label for="">Ваша фамилия</label>
                <div class="order-danger">{{ errors.last_name[0] }}</div>
            </div>
            <div class="order-input-container dropdown">
                <input v-model="selectedShop.address" class="dropdown-toggle" type="text" id="dropdownMenuButton" readonly
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <label for="">Выберите магазин</label>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a v-for="shop in shops" @click.prevent="selectShop(shop)" class="dropdown-item" href="#">{{ shop.address }}</a>
                </div>
            </div>
            <div class="order-input-container">
                <input v-model="phone_number" class="input-phone" type="text">
                <label for="">Номер телефона</label>
                <div class="order-danger">{{ errors.phone_number[0] }}</div>
            </div>
            <div class="order-input-container">
                <input v-model="email" type="text">
                <label for="">Ваш e-mail адрес</label>
                <div class="order-danger">{{ errors.email[0] }}</div>
            </div>
            <div class="order-input-container">
                <textarea v-model="comment" type="text"></textarea>
                <label for="">Комментарий к заказу</label>
            </div>
            <div class="make-order-button-container">
                <a @click.prevent="store" class="button-make-order button black-button" href="">Оформить заказ</a>
            </div>
        </div>
    </form>
</template>

<script>
import "inputmask";

export default {
    name: 'MakeOrder',

    data() {
        return {
            selectedShop: {},
            shops: [],
            email: '',
            first_name: '',
            last_name: '',
            comment: '',
            phone_number: '',
            errors: {
                email: '',
                first_name: '',
                last_name: '',
                comment: '',
                phone_number: '',
            }
        }
    },

    mounted() {
        let phoneMask = new Inputmask("+9 (999) 999-99-99")
        phoneMask.mask($(".input-phone"));
        this.getShops()
    },

    methods: {
        store() {
            for (let key in this.errors) {
                this.errors[key] = ''
            }

            axios.post('/order', {
                email: this.email,
                first_name: this.first_name,
                last_name: this.last_name,
                comment: this.comment,
                phone_number: this.phone_number,
                address_id: this.selectedShop.id
            }).then(res => {
                console.log(res)
                let orderId = res.data.id
                if (orderId != 0) {
                    window.location.href = `/order/${orderId}`
                }
            }).catch(err => {
                console.log(err)
                for (let key in err.response.data.errors) {
                    this.errors[key] = err.response.data.errors[key]
                }
            })
        },

        getShops() {
            axios.get('/api/images/address-slider').then(res => {
                this.shops = res.data.data
            }).catch(error => {
                console.log(error)
            })
        },

        selectShop(shop) {
            this.selectedShop = shop
        }
    }
}
</script>