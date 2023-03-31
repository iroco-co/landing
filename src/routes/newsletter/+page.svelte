<script>
  import Newsletter from "$lib/Newsletter.svelte";
</script>

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
