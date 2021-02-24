<style lang="scss">
  .validation {
    width: 100%;
    min-height: calc(100% + 16px);
    position: absolute;
    bottom: calc(100% + 16px);
    background-color: var(--color-primary-2);
    transition: 0.3s;
    border-radius: var(--border-radius);
    padding: 1.25rem;
    p {
      font-family: var(--font-family);
      font-weight: 400;
      font-size: 14px;
      color: var(--color-white);
      margin-bottom: 0.75rem;
      &:last-child {
        margin-bottom: 0;
      }
      &.valid {
        color: #54ff03;
      }
    }
  }
</style>

<div class="validation" transition:fly="{{ y: 16, duration: 500 }}">
  {#each alert as { message, valid }}
    <p class:valid>
      * {message}
    </p>
  {/each}
</div>

<script lang="ts">
  import { validateEmail } from "./signup_validate";

  import { fly } from "svelte/transition";
  export let alert;
</script>
