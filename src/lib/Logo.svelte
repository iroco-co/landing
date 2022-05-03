<script lang="ts">
  export let size = 48;
  export let margin = 0;
</script>

<div class="logo">
  <img
    class="logo__image"
    style="width: {size}px;margin-bottom: {margin}em"
    src="/iroco.svg"
    alt="Iroco logo"
  />
  <h2 class="logo__title">iroco</h2>
</div>

<style lang="scss">
  .logo {
    display: flex;
    &__title {
      margin-left: 1em;
      font-size: 2rem;
    }
  }
</style>
