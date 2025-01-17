<script lang="ts">
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

<div class="horizontal-or-vertical-displayed-content">
  {@render children?.()}
</div>

<style lang="scss">
  @use "@iroco/ui/scss/containers.scss";

  .horizontal-or-vertical-displayed-content {
    padding: 2em;
    display: flex;
    justify-content: space-around;
    align-content: center;
    @include screen-laptop {
      flex-direction: column;
    }
  }
</style>
