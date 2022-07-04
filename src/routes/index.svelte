<script lang="ts">
  import { _ } from 'svelte-i18n';
  import Header from '../lib/Header.svelte';
  import Footer from '../lib/Footer.svelte';
  import ArticleImage from '../lib/ImageArticle.svelte';
  import Contact from '../lib/Contact.svelte';
  import { Icon, IconIrocoLogo } from '@iroco/ui/';
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
    buttonList={[{ href: '/about', label: $_('homepage.iroco.btn') }]}
  />

  <ArticleImage
    imgSrc="/images/pairprogramming.png"
    alt="A man and a woman pair programming"
    articleTitle={$_('homepage.respect.title')}
    articleContent={$_('homepage.respect.p')}
    buttonList={[{ href: '/about#commitments', label: $_('homepage.respect.btn') }]}
    reversed
  />

  <ArticleImage
    imgSrc="/images/irocoTeamSpirit.png"
    alt="Iroco Team hiking in the mountains"
    articleTitle={$_('homepage.innovation.title')}
    articleContent={$_('homepage.innovation.p')}
    buttonList={[
      { href: 'https://blog.iroco.co', label: $_('homepage.innovation.btn') },
      { href: 'https://github.com/iroco-co', label: $_('homepage.innovation.github') }
    ]}
  />

  <ArticleImage
    imgSrc="/images/pairprogramming.png"
    alt="A man and a woman pair programming"
    articleTitle={$_('homepage.inclusive.title')}
    articleContent={$_('homepage.inclusive.p')}
    buttonList={[
      { href: '/signup#faq', label: $_('homepage.inclusive.btn') },
      { href: 'mailto:hello@iroco.fr', label: $_('homepage.inclusive.contact') }
    ]}
    reversed
  />

  <div class="page-content__subscribe">
    <div class="page-content__subscribe__logo">
      <IconIrocoLogo width="3em" height="3em" />
      <h1>Iroco</h1>
    </div>
    <div class="page-content__subscribe__btn">
      <a class="button success" href="/about">
        <Icon name="chevron-right" />
        {$_('footer.subscribe')}
      </a>
    </div>
  </div>
  <Contact />
</main>
<Footer />

<style lang="scss">
  @use 'node_modules/@iroco/ui/lib/colors';
  .page-content {
    &__subscribe {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 2em 4em;
      &__btn {
        margin: 2em 0;
      }
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
