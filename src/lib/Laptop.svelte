<script lang="ts">
  export let title: string;
</script>

<div class="laptop">
  <img src="/images/laptop.png" alt="Iroco webmail on laptop" />
  <h4>{title}</h4>
</div>

<style lang="scss">
  @import 'node_modules/@iroco/ui/lib/containers';

  .laptop {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @include screen-laptop() {
      height: 100%;
      margin-top: 4em;
    }

    @include screen-tablet() {
      margin-top: 3em;
    }

    @include screen-tablet-S() {
      margin-top: 2em;
    }

    > img {
      width: 250px;
      transform: translateY(13%);

      @include screen-laptop() {
        transform: translateY(0%);
        align-self: center;
      }
    }
    > h4 {
      text-transform: uppercase;
      letter-spacing: 0.2em;
      margin-top: 50px;
      text-align: center;
      line-height: 2.2em;
      white-space: pre-wrap;

      @include screen-tablet-S() {
        font-size: 0.9em;
        margin-top: 40px;
      }

      @include screen-mobile-L() {
        margin-top: 30px;
      }
    }
  }
</style>
