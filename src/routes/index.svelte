<script lang="ts">
  import { _ } from 'svelte-i18n';
  import Header from '../lib/Header.svelte';
  import Footer from '../lib/Footer.svelte';
  import ArticleImage from '../lib/ImageArticle.svelte';
  import { Button, Icon } from '@iroco/ui';
</script>

<svelte:head>
  <title>{$_('page.title')}</title>
</svelte:head>
<Header />
<main class="main">
  <ArticleImage
    imgSrc="/images/irocoTeamSpirit.png"
    alt="Iroco Team hiking in the mountains"
    articleTitle={$_('homepage.iroco.title')}
    articleContent={$_('homepage.iroco.p')}
    btnContent={$_('homepage.iroco.btn')}
  />
  <ArticleImage
    imgSrc="/images/pairprogramming.png"
    alt="A man and a woman pair programming"
    articleTitle={$_('homepage.respect.title')}
    articleContent={$_('homepage.respect.p')}
    btnContent={$_('homepage.respect.btn')}
    reversed
  />

  <ArticleImage
    imgSrc="/images/irocoTeamSpirit.png"
    alt="Iroco Team hiking in the mountains"
    articleTitle={$_('homepage.innovation.title')}
    articleContent={$_('homepage.innovation.p')}
    btnContent={$_('homepage.innovation.btn')}
  >
    <a href="/about">
      <Button kind="dark" size="small">
        <Icon name="chevron-right" />
        {$_('homepage.innovation.github')}
      </Button>
    </a>
  </ArticleImage>
  <ArticleImage
    imgSrc="/images/pairprogramming.png"
    alt="A man and a woman pair programming"
    articleTitle={$_('homepage.inclusive.title')}
    articleContent={$_('homepage.inclusive.p')}
    btnContent={$_('homepage.inclusive.btn')}
    reversed
  >
    <a href="/about">
      <Button kind="dark" size="small">
        <Icon name="chevron-right" />
        {$_('homepage.inclusive.contact')}
      </Button>
    </a>
  </ArticleImage>
</main>
<Footer />

<style lang="scss">
  @use 'node_modules/@iroco/ui/lib/colors';
  @import 'node_modules/@iroco/ui/scss/containers';

  main {
    margin-top: 8em;
    margin-bottom: 4em;
  }
</style>
