<script lang="ts">
  interface Props {
    title: string;
  }

  let { title }: Props = $props();
</script>

<div class="laptop illustration">
  <img src="/images/laptop.png" alt="Iroco webmail on laptop" />
  <h4>{title}</h4>
</div>

<style lang="scss">
  @use "@iroco/ui/scss/containers.scss";

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
