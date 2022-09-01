<div class="horizontal-or-vertical-displayed-content">
  <slot />
</div>

<style lang="scss">
  @import 'node_modules/@iroco/ui/lib/containers';

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
