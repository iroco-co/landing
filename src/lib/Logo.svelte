<script lang="ts">
  export let size = 48;
  export let margin = 0;
  export let fontsize = 2;
  export let titlemargin = 0.5;
  export let flexdirection: 'initial' | 'column';
</script>

<div class="logo" style="flex-direction: {flexdirection};">
  <img
    class="logo__image"
    style="width: {size}px;margin-bottom: {margin}em"
    src="/iroco.svg"
    alt="Iroco logo"
  />
  <h2 class="logo__title" style="font-size: {fontsize}em;margin-left: {titlemargin}em">iroco</h2>
</div>

<style lang="scss">
  .logo {
    display: flex;
  }
</style>
