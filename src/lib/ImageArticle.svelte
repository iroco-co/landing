<script lang="ts">
  import type { ButtonModel } from "./definition";
  import { Icon } from "svelte-awesome";
  import chevronRight from "svelte-awesome/icons/chevronRight";
  export let imgSrc: string;
  export let alt: string;
  export let articleTitle: string;
  export let articleContent: string;
  export let buttonList: ButtonModel[] = [];
  export let reversed = false;
</script>

<div class="imagearticle" class:reversed>
  <img class="imagearticle__image" src={imgSrc} {alt} />
  <article class="imagearticle__article">
    <h1>{articleTitle}</h1>
    <p>{articleContent}</p>
    <div class="imagearticle__article__buttonGroup">
      {#each buttonList as buttonModel}
        <a
          class="iroco-ui-button iroco-ui-button--small iroco-ui-button--dark"
          href={buttonModel.href}
          role="button"
        >
          <Icon data={chevronRight} />
          {buttonModel.label}
        </a>
      {/each}
    </div>
  </article>
</div>

<style lang="scss">
  @use "node_modules/@iroco/ui/dist/scss/colors";
  @import "node_modules/@iroco/ui/dist/scss/containers";
  @import "node_modules/@iroco/ui/dist/scss/button";
  .imagearticle {
    display: flex;
    justify-content: space-around;
    align-items: center;
    &__image {
      width: 40%;
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
        display: flex;
        gap: 1em;
        flex-wrap: wrap;
      }
    }
    &.reversed {
      flex-direction: row-reverse;
    }
  }

  @include screen-tablet {
    .imagearticle {
      display: block;
      width: 80%;
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
