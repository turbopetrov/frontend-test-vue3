/* eslint-disable linebreak-style */
<template lang="pug">
.auth
  .auth__wrapper.blur
    form.auth__form(tag="form", @submit.prevent="login")
      h2.auth__title.heading_lg.
        Авторизация
      .validation-wrap
        app-input.auth__login(
          isRequire,
          placeholder="Ваша электронная почта",
          v-model:value="loginForm.email"
        )
        p.auth__error-message
      .validation-wrap
        app-input.auth__pass(
          inputType="password"
          isRequire,
          placeholder="Ваш пароль",
          v-model:value="loginForm.pass"
        )
        p.auth__error-message
      app-button(
        buttonType="submit",
        buttonValue="Войти",
        isDisabled= false
      )
      span.paragraph_sm.
        {{message}}
</template>

<script lang='ts'>
import input from './UI/app-input.vue'
import button from './UI/app-button.vue'
import { ILoginForm } from '../types/auth'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    'app-input': input,
    'app-button': button
  },

  data () {
    return {
      loginForm: {
        email: '',
        password: ''
      } as ILoginForm,
      message: ''
    }
  },

  computed: {},
  methods: {
    login () {
      console.log(this.loginForm)
    }
  }
})
</script>

<style lang="scss" scoped>
.validation-wrap {
  position: relative;
  display: block;
}
.auth {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  &__wrapper {
    box-sizing: border-box;
    width: 550px;
    height: 660px;
    padding: 65px 80px 75px 80px;
  }
  &__form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
  &__pass {
    position: relative;
    display: block;
  }
  &__login {
    display: block;
  }
  &__forgetPass {
    position: absolute;
    top: 460px;
    left: 55%;
    color: $orange;
    text-decoration: none;
    border-bottom: 1px solid $orange;
    cursor: pointer;
  }
  &__error-message {
    position: absolute;
    top: 40px;
    left: 0;
    display: block;
  }
  .success {
    color: greenyellow;
  }
  .error {
    color: rgb(240, 59, 59);
  }
}
</style>
