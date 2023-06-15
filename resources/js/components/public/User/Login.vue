<template>
    <div class="user-container">
        <div class="user-inputs">
            <h1 class="user-inputs-title">Вход</h1>
            <div class="user-input-container">
                <label class="user-inputs-label" for="">email</label>
                <input v-model="email" type="text">
            </div>
            <div class="user-input-container">
                <label class="user-inputs-label" for="">Пароль</label>
                <input v-model="password" type="password">
            </div>
            <a href="" class="button black-button user-inputs-btn-enter">Войти</a>
        </div>
        <a class="user-input-registration-link" href="/registration">Регистрация</a>
    </div>
</template>

<script>
export default {
    name: 'Login',

    data() {
        return {
            email: '',
            password: '',
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