<script lang="ts">
  import { _ } from "svelte-i18n";
  let windowWidth;
</script>

<svelte:window bind:innerWidth={windowWidth} />
<svelte:head>
  <title>{$_("doc.title")}</title>
</svelte:head>

<section class="doc">
  <div class="doc__content">
    <h1>{$_("doc.title")}</h1>
  </div>
</section>

<style lang="scss">
  @use "node_modules/@iroco/ui/scss/colors";
  @use "node_modules/@iroco/ui/scss/constants";
  @import "node_modules/@iroco/ui/scss/containers";
  @import "node_modules/@iroco/ui/scss/button";

  .doc {
    display: flex;
    justify-content: center;

    &__content {
      width: 70%;
    }
  }
</style>
