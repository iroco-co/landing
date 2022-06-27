<script lang="ts">
  import { _ } from 'svelte-i18n';
  import Header from '../lib/Header.svelte';
  import Footer from '../lib/Footer.svelte';
  import ArticleImage from '../lib/ImageArticle.svelte';
  import Contact from '../lib/Contact.svelte';
  import { Button, Icon, IconIrocoLogo } from '@iroco/ui/';
</script>

<svelte:head>
  <title>{$_('page.title')}</title>
</svelte:head>
<Header />
<main class="page-content">
  <ArticleImage
    imgSrc="/images/irocoTeamSpirit.png"
    alt="Iroco Team hiking in the mountains"
    articleTitle={$_('homepage.iroco.title')}
    articleContent={$_('homepage.iroco.p')}
  >
    <a href="/about">
      <Button kind="dark" size="small">
        <Icon name="chevron-right" />
          {$_('homepage.iroco.btn')}
        </Button>
    </a>
  </ArticleImage>

  <ArticleImage
    imgSrc="/images/pairprogramming.png"
    alt="A man and a woman pair programming"
    articleTitle={$_('homepage.respect.title')}
    articleContent={$_('homepage.respect.p')}
    reversed
  >
    <a href="/about">
      <Button kind="dark" size="small">
        <Icon name="chevron-right" />
          {$_('homepage.respect.btn')}
        </Button>
    </a>
  </ArticleImage>

  <ArticleImage
    imgSrc="/images/irocoTeamSpirit.png"
    alt="Iroco Team hiking in the mountains"
    articleTitle={$_('homepage.innovation.title')}
    articleContent={$_('homepage.innovation.p')}
  >
    <a href="/about">
      <Button kind="dark" size="small">
        <Icon name="chevron-right" />
          {$_('homepage.innovation.btn')}
        </Button>
    </a>
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
    reversed
  >
    <a href="/about">
      <Button kind="dark" size="small">
        <Icon name="chevron-right" />
         {$_('homepage.inclusive.btn')}
        </Button>
    </a>
    <a href="/about">
      <Button kind="dark" size="small">
        <Icon name="chevron-right" />
        {$_('homepage.inclusive.contact')}
      </Button>
    </a>
  </ArticleImage>

  <div class="page-content__subscribe">
    <div class="page-content__subscribe__logo">
      <IconIrocoLogo width="3em" height="3em" />
      <h1>Iroco</h1>
    </div>
    <div class="page-content__subscribe__btn">
      <a href="/about">
        <Button kind="success">
          <Icon name="chevron-right" />
          {$_('footer.subscribe')}
        </Button>
      </a>
    </div>
  </div>
  <Contact />
</main>
<Footer />

<style lang="scss">
  @use 'node_modules/@iroco/ui/lib/colors';
  .page-content {
    &__subscribe{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 2em 4em;
      &__logo {
        display: flex;
        align-items: center;
        h1 {
          padding-left: 0.8em;
        }
      }
    }
  }
</style>
