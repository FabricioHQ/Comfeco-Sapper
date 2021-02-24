<style lang="scss">
  .signup__banner {
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
    p {
      display: inline-block;
      position: absolute;
      bottom: 16px;
      left: 24px;
      font-family: var(--font-family);
      font-size: 12px;
      font-weight: 500;
      color: var(--color-gray);
      span {
        color: var(--color-secondary-3);
      }
    }
    .social__media {
      position: absolute;
      bottom: 16px;
      right: 24px;
      width: calc(3rem + 4rem);
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
  }
</style>

<div class="signup__banner">
  <img
    src="./images/banner_form.jpg"
    alt="Banner del formulario web de Comfeco."
  />
  <p>Copyright ©2021 Developed by <span>TeamSvelte1</span></p>
  <div class="social__media">
    <a
      href="{facebook.link}"
      target="_blank"
      on:mouseenter="{onFacebook}"
      on:mouseleave="{onFacebook}"
    >
      <Facebook size="{facebook.size()}" color="{facebook.color()}" />
    </a>
    <a
      href="{youtube.link}"
      target="_blank"
      on:mouseenter="{onYoutube}"
      on:mouseleave="{onYoutube}"
    >
      <Youtube size="{youtube.size()}" color="{youtube.color()}" />
    </a>
    <a
      href="{discord.link}"
      target="_blank"
      on:mouseenter="{onDiscord}"
      on:mouseleave="{onDiscord}"
    >
      <Discord size="{discord.size()}" color="{discord.color()}" />
    </a>
  </div>
</div>

<script>
  import Discord from "../Icons/Discord.svelte";
  import Facebook from "../Icons/Facebook.svelte";
  import Youtube from "../Icons/Youtube.svelte";

  let facebook = {
    link: "https://www.facebook.com/groups/2637132626546045",
    hover: false,
    color: function () {
      return this.hover ? "#FFCB38" : "#c4c4c4";
    },
    size: function () {
      return this.hover ? 18 : 16;
    },
  };

  let youtube = {
    link: "https://www.youtube.com/channel/UC0oi8uH1vxDcyt7b_3iByew",
    hover: false,
    color: function () {
      return this.hover ? "#FFCB38" : "#c4c4c4";
    },
    size: function () {
      return this.hover ? 18 : 16;
    },
  };

  let discord = {
    link: "https://discord.com/invite/5Bb5yvzNPr",
    hover: false,
    color: function () {
      return this.hover ? "#FFCB38" : "#c4c4c4";
    },
    size: function () {
      return this.hover ? 20 : 18;
    },
  };

  const onFacebook = () => {
    facebook.hover = !facebook.hover;
  };
  const onYoutube = () => {
    youtube.hover = !youtube.hover;
  };
  const onDiscord = () => {
    discord.hover = !discord.hover;
  };
</script>
