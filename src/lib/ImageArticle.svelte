<script lang="ts">
  export let imgSrc: string;
  export let alt: string;
  export let articleTitle: string;
  export let articleContent: string;
  export let reversed = false;

</script>

<div class="imagearticle" class:reversed>
  <img class="imagearticle__image" src={imgSrc} {alt} />
  <article class="imagearticle__article">
    <h1>{articleTitle}</h1>
    <p>{articleContent}</p>
    <slot/>
  </article>
</div>

<style lang="scss">
  @use 'node_modules/@iroco/ui/lib/colors';
  @import 'node_modules/@iroco/ui/scss/containers';

  .imagearticle {
    display: flex;
    justify-content: space-around;
    align-items: center;
    &__image {
      width: 50%;
      display: block;
      margin: 0 auto;
      object-fit: cover;
    }
    &__article {
      width: 50%;
      padding: 2em;
      text-align: center;
    }
    &.reversed {
      flex-direction: row-reverse;
    }
  }

  @include screen-tablet {
    .imagearticle {
      display: block;
      width: 100%;
      text-align: center;

      &__image {
        width: 100%;
      }
      &__article {
        width: 100%;
      }
    }
  }
</style>
