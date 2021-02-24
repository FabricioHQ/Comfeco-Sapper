<style lang="scss">
  @import "./signup_form.scss";
</style>

<div class="signup__form">
  <div class="signup__form--logo">
    <img src="./logo.svg" alt="Logo de Comfeco." />
  </div>
  <div class="signup__form--text">
    <h2>Regístrate</h2>
    <h3>En esta <span>gran</span> comunidad</h3>
  </div>
  <form action="">
    <div class="form__input">
      {#if username.focus && username.value.length > 0}
        <Validation alert="{alert}" />
      {/if}
      <input
        type="text"
        id="username"
        required
        bind:value="{username.value}"
        on:focus="{onUsername}"
        on:blur="{onUsername}"
      />
      <label for="username">
        <Profile size="{18}" color="{username.color()}" />
      </label>
    </div>
    <div class="form__input">
      {#if email.focus && email.value.length > 0}
        <Validation alert="{alert}" />
      {/if}
      <input
        type="email"
        id="email"
        required
        bind:value="{email.value}"
        on:focus="{onEmail}"
        on:blur="{onEmail}"
      />
      <label for="email">
        <Message size="{18}" color="{email.color()}" />
      </label>
    </div>
    <div class="form__input">
      {#if password.focus && password.value.length > 0}
        <Validation alert="{alert}" />
      {/if}
      <input
        type="password"
        id="password"
        required
        bind:value="{password.value}"
        on:focus="{onPassword}"
        on:blur="{onPassword}"
      />
      <label for="password">
        <Password size="{18}" color="{password.color()}" />
      </label>
    </div>
    <div class="form__input">
      {#if repassword.focus && repassword.value.length > 0}
        <Validation alert="{alert}" />
      {/if}
      <input
        type="password"
        id="re-password"
        required
        bind:value="{repassword.value}"
        on:focus="{onRepassword}"
        on:blur="{onRepassword}"
      />
      <label for="re-password">
        <Password size="{18}" color="{repassword.color()}" />
      </label>
    </div>
    <button type="submit">Sign Up</button>
  </form>
  <div class="terms__conditions">
    <p>
      Al registrarse acepta nuestros <a
        href="help/terms-conditions"
        target="_blank">términos y condiciones</a
      >
      y la
      <a href="help/privacy" target="_blank"
        >Política de privacidad y protección de datos</a
      > de Comfeco
    </p>
  </div>
</div>

<script lang="ts">
  import {
    validateEmail,
    validateANumPassword,
    validateMayusPassword,
    validateNumPassword,
    validatePasswords,
    validateNumUsername,
  } from "./signup_validate";

  import Profile from "../Icons/Profile.svelte";
  import Message from "../Icons/Message.svelte";
  import Password from "../Icons/Password.svelte";
  import Validation from "./Validation.svelte";

  let email = {
    value: "",
    focus: false,
    valid: false,
    color: function () {
      return this.focus || this.valid ? "#521e87" : "#c4c4c4";
    },
  };
  let username = {
    value: "",
    focus: false,
    valid: false,
    color: function () {
      return this.focus || this.valid ? "#521e87" : "#c4c4c4";
    },
  };
  let password = {
    value: "",
    focus: false,
    valid: false,
    color: function () {
      return this.focus || this.valid ? "#521e87" : "#c4c4c4";
    },
  };
  let repassword = {
    value: "",
    focus: false,
    valid: false,
    color: function () {
      return this.focus || this.valid ? "#521e87" : "#c4c4c4";
    },
  };

  let alert: object[] = [{}];

  $: if (
    username.value.length > 0 &&
    username.value.length < 20 &&
    username.focus
  ) {
    username.valid = true;
  }

  $: if (username.value.length > 0 && username.focus) {
    alert = [{}];
    const validate = validateNumUsername(username.value);
    alert[0] = validate;
    username.valid = validate.valid;
  }

  $: if (email.value.length > 0 && email.focus) {
    alert = [{}];
    const validate = validateEmail(email.value);
    alert[0] = validate;
    email.valid = validate.valid;
  }

  $: if (password.value.length > 0 && password.focus) {
    alert = [{}];

    const validateNums = validateNumPassword(password.value);
    const validateMayus = validateMayusPassword(password.value);
    const validateNum = validateANumPassword(password.value);

    alert[0] = validateNums;
    alert[1] = validateMayus;
    alert[2] = validateNum;

    if ((validateNums.valid, validateMayus.valid, validateNum.valid)) {
      password.valid = true;
    } else {
      password.valid = false;
    }
  }

  $: if (repassword.value.length > 0 && repassword.focus) {
    alert = [{}];
    const validate = validatePasswords(password.value, repassword.value);
    alert[0] = validate;
    repassword.valid = validate.valid;
  }

  const onEmail = () => {
    email.focus = !email.focus;
  };
  const onUsername = () => {
    username.focus = !username.focus;
  };
  const onPassword = () => {
    password.focus = !password.focus;
  };
  const onRepassword = () => {
    repassword.focus = !repassword.focus;
  };
</script>
