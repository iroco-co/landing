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
  @use "@iroco/ui/scss/containers.scss";
  .newsletter {
    display: flex;
    justify-content: center;
  }
</style>
