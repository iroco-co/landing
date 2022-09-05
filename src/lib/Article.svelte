<script lang="ts">
  export let title: string;
  export let content: string;
</script>

<div class="article">
  <article class="article__top">
    <h1>{@html title}</h1>
    <p>{content}</p>
  </article>
  <slot />
</div>

<style lang="scss">
  @use 'node_modules/@iroco/ui/lib/colors';
  @import 'node_modules/@iroco/ui/scss/containers';

  .article,
  .article__top {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .article {
    text-align: center;
    margin-bottom: 3em;
    &__top {
      padding: 2em;
      h1 {
        line-height: 1.6em;

        @include screen-tablet {
          font-size: 2.5em;
        }
        @include screen-tablet-S {
          font-size: 2.3em;
        }
      }
      p {
        width: 50%;

        @include screen-laptop {
          width: 70%;
        }

        @include screen-tablet {
          width: 85%;
        }

        @include screen-tablet-S {
          width: 100%;
        }
      }
    }
  }
</style>
