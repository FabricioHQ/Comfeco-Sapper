<style>
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;500;600&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap");

  :global(*, *::after, *::before) {
    box-sizing: border-box;
  }
  :global(body) {
    --background: #edf2f6;
    --color-primary: #8a178c;
    --color-primary-2: #521e87;
    --color-secondary: #ffb703;
    --color-secondary-3: #ffcb38;
    --color-brack: #222831;
    --color-white: #ffffff;
    --color-gray: #c4c4c4;
    --color-gray-2: #dbe0e4;
    --border-radius: 4px;
    --box-border: 1px solid;
    --font-family: "Roboto Slab";
  }
  .layout {
    width: 100%;
    min-height: 100vh;
    background-color: var(--background);
    transition: 0.5s;
  }
</style>

<main class="layout">
  <slot />
</main>
