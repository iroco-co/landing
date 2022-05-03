<script lang="ts">
  import { _ } from 'svelte-i18n';
  import Header from './header.svelte';
</script>

<svelte:head>
  <title>{$_('page.title')}</title>
</svelte:head>
<Header />
<main class="homepage">
  <h1>{$_('home.title')}</h1>
</main>
