<script>
  import Newsletter from "$lib/Newsletter.svelte";
  import { _ } from "svelte-i18n";
</script>

<svelte:head>
  <title>{$_("newsletter.title")}</title>
</svelte:head>

<section class="newsletter">
  <Newsletter />
</section>

<style lang="scss">
  @use "node_modules/@iroco/ui/scss/colors";
  @import "node_modules/@iroco/ui/scss/containers";
  .newsletter {
    display: flex;
    justify-content: center;
  }
</style>
