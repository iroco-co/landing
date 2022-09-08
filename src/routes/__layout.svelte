<script>
  import '../app.scss';
  import '../i18n';
  import { isLoading } from 'svelte-i18n';
  import Header from '../lib/Header.svelte';
  import Footer from '../lib/Footer.svelte';
</script>

{#if !$isLoading}
  <Header />
  <main class="main">
    <slot />
  </main>
  <Footer />
{/if}
