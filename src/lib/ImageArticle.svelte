<script lang="ts">
  import { Icon } from '@iroco/ui/';
  import type { ButtonModel } from './definition';
  export let imgSrc: string;
  export let alt: string;
  export let articleTitle: string;
  export let articleContent: string;
  export let buttonList: ButtonModel[] = [];
  export let reversed: boolean;
</script>

<div class="imagearticle" class:reversed>
  <img class="imagearticle__image" src={imgSrc} {alt} />
  <article class="imagearticle__article">
    <h1>{articleTitle}</h1>
    <p>{articleContent}</p>
    <div class="imagearticle__article__buttonGroup">
      {#each buttonList as buttonModel}
        <a class="button" href={buttonModel.href} role="button">
          <Icon name="chevron-right" />
          {buttonModel.label}
        </a>
      {/each}
    </div>
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
      object-fit: cover;
      margin: 0 auto;
    }
    &__article {
      width: 50%;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      padding: 2em;
      &__buttonGroup {
        width: 60%;
        display: flex;
        justify-content: space-around;
        align-items: center;
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

      &__image {
        width: 100%;
      }
      &__article {
        width: 100%;
      }
    }
  }
</style>
