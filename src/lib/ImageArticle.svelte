<script lang="ts">
  import { _ } from 'svelte-i18n';
  import { Button } from '@iroco/ui';
  import { Icon } from '@iroco/ui';

  export let imgSrc: string;
  export let alt: string;
  export let articleTitle: string;
  export let articleContent: string;
  export let btnContent: string;
  export let reversed = false;
</script>

<div class="imagearticle" class:reversed>
  <img class="imagearticle__image" src={imgSrc} {alt} />
  <article class="imagearticle__article">
    <h1>{articleTitle}</h1>
    <p>{articleContent}</p>
    <a class="imagearticle__article__btn" href="/about">
      <Button kind="dark">
        <Icon name="chevron-right" />
        {btnContent}
      </Button>
    </a>
    <slot />
  </article>
</div>

<style lang="scss">
  @use 'node_modules/@iroco/ui/lib/colors';
  @import 'node_modules/@iroco/ui/scss/containers';

  .imagearticle {
    margin: 0 auto;
    width: 80%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    &__image {
      width: 44%;
      display: block;
      margin: 0 auto;
      object-fit: cover;
    }
    &__article {
      padding: 2em;
      width: 44%;
      text-align: center;
      h1 {
        font-size: 2em;
        line-height: 1.3em;
      }
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

      &__article {
        width: 100%;
      }
    }
  }
</style>
