<script>
  import { _ } from "svelte-i18n";
  import KeilaForm from "$lib/KeilaForm.svelte";
</script>

<svelte:head>
  <title>{$_("newsletter.title")}</title>
</svelte:head>

<section class="newsletter">
  <KeilaForm />
</section>

<style lang="scss">
  @use "node_modules/@iroco/ui/dist/scss/colors";
  @import "node_modules/@iroco/ui/dist/scss/containers";
  .newsletter {
    display: flex;
    justify-content: center;
  }
</style>
