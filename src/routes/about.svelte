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
</main>
<Footer />

<style lang="scss">
  @use 'node_modules/@iroco/ui/lib/colors';
</style>
