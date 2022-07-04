<script lang="ts">
  export let title: string;
  export let content: string;
  export let src: string;
  export let alt: string;
</script>

<div class="articleimage">
  <article class="articleimage__article">
    <h1>{title}</h1>
    <p>{content}</p>
  </article>
  <img class="articleimage__image" {src} {alt} />
</div>

<style lang="scss">
  @use 'node_modules/@iroco/ui/lib/colors';
  .articleimage {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &__article {
      text-align: center;
      padding: 2em;
      h1 {
        margin-bottom: 2em;
      }
    }
  }
</style>
