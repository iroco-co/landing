<script lang="ts">
  import { _ } from 'svelte-i18n';
  import Header from '../lib/Header.svelte';
  import Footer from '../lib/Footer.svelte';
  import ArticleImage from '../lib/ArticleImage.svelte';
</script>

<Header />
<main class="about">
  <ArticleImage
    title={$_('about.beginning.title')}
    content={$_('about.beginning.p')}
    src="/images/irocoTeamSpirit.png"
    alt="Iroco Team Building"
  />
  <ArticleImage
    title={$_('about.mail.title')}
    content={$_('about.mail.p')}
    src="/images/screenshotDataviz.png"
    alt="Map explaining our data consumption from start to end"
  />
  <ArticleImage
    title={$_('about.app.title')}
    content={$_('about.app.p')}
    src="/images/screenshotApp.png"
    alt="Our app from mobile to laptop"
  />
</main>
<Footer />
>>>>>>> feat: add correct props to each ImageArticle

<style lang="scss">
  @use 'node_modules/@iroco/ui/lib/colors';
</style>
