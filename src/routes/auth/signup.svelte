<style lang="scss">
  .signup {
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 4fr 3fr;
    .box--center {
      display: grid;
      place-items: center;
    }
  }
</style>

<svelte:head>
  <title>Signup | Comfeco</title>
</svelte:head>

<main class="signup">
  <SignupBanner />
  <div class="box--center">
    <SignupForm />
  </div>
</main>

<script lang="ts">
  import SignupBanner from "../../components/Auth/SignupBanner.svelte";
  import SignupForm from "../../components/Auth/SignupForm.svelte";
  import Message from "../../components/Icons/Message.svelte";
  import Password from "../../components/Icons/Password.svelte";
  import Profile from "../../components/Icons/Profile.svelte";
</script>
