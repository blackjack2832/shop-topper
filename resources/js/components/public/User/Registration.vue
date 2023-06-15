<template>
    <div class="user-container">
        <div class="user-inputs">
            <h1 class="user-inputs-title">Регистрация</h1>
            <div class="user-input-container">
                <label class="user-inputs-label" for="">email</label>
                <input v-model="email" type="text">
            </div>
            <div class="user-input-container">
                <label class="user-inputs-label" for="">Имя</label>
                <input v-model="name" type="text">
            </div>
            <div class="user-input-container">
                <label class="user-inputs-label" for="">Пароль</label>
                <input v-model="password" type="password">
            </div>
            <div class="user-input-container">
                <label class="user-inputs-label" for="">Повторите пароль</label>
                <input v-model="password_confirmation" type="password">
            </div>
            <a @click.prevent="store" href="" class="button black-button user-inputs-btn-enter">Зарегистрироваться</a>
        </div>
        <a class="user-input-registration-link" href="/enter">Вход</a>
    </div>
</template>

<script>
import Axios from 'axios';

export default {
    name: 'Registration',

    data() {
        return {
            email: '',
            name: '',
            password: '',
            password_confirmation: '',
        }
    },

    methods: {
        store() {
            axios.post('/api/registration', {
                email: this.email,
                name : this.name,
                password: this.password,
                password_confirmation: this.password_confirmation
            }).then(res => {
                console.log(res)
            })
        }
    }
}


</script>