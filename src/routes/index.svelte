<script lang="ts">
  import { _ } from 'svelte-i18n';
  import Header from '../lib/Header.svelte';
  import Footer from '../lib/Footer.svelte';
  import ImageArticle from '../lib/ImageArticle.svelte';
  import Newsletter from '../lib/Newsletter.svelte';
  import IrocologoSignupbutton from '../lib/IrocologoSignupbutton.svelte';
</script>

<svelte:head>
  <title>{$_('page.title')}</title>
</svelte:head>
<Header />
<main class="page-content">
  <ImageArticle
    imgSrc="/images/irocoTeamSpirit.png"
    alt="Iroco Team hiking in the mountains"
    articleTitle={$_('homepage.iroco.title')}
    articleContent={$_('homepage.iroco.p')}
    buttonList={[{ href: '/about', label: $_('homepage.iroco.btn') }]}
  />

  <ImageArticle
    imgSrc="/images/pairprogramming.png"
    alt="A man and a woman pair programming"
    articleTitle={$_('homepage.respect.title')}
    articleContent={$_('homepage.respect.p')}
    buttonList={[{ href: '/about#commitments', label: $_('homepage.respect.btn') }]}
    reversed
  />

  <ImageArticle
    imgSrc="/images/irocoTeamSpirit.png"
    alt="Iroco Team hiking in the mountains"
    articleTitle={$_('homepage.innovation.title')}
    articleContent={$_('homepage.innovation.p')}
    buttonList={[
      { href: 'https://blog.iroco.co', label: $_('homepage.innovation.btn') },
      { href: 'https://github.com/iroco-co', label: $_('homepage.innovation.github') }
    ]}
  />

  <ImageArticle
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

  <IrocologoSignupbutton />

  <Newsletter />
</main>
<Footer />

<style lang="scss">
  @use 'node_modules/@iroco/ui/lib/colors';
  @import 'node_modules/@iroco/ui/lib/button';
  .page-content {
    display: flex;
    flex-direction: column;
    align-content: center;
  }
</style>
