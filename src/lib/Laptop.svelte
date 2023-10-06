<script lang="ts">
  export let title: string;
</script>

<div class="laptop illustration">
  <img src="/images/laptop.png" alt="Iroco webmail on laptop" />
  <h4>{title}</h4>
</div>

<style lang="scss">
  @import "node_modules/@iroco/ui/dist/scss/containers";

  .laptop {
    > img {
      width: 250px;
      transform: translateY(14%);

      @include screen-laptop() {
        transform: translateY(0%);
      }
    }
  }
</style>
