<script lang="ts">
  import { _ } from 'svelte-i18n';
  import Logo from '../lib/Logo.svelte';
</script>

<svelte:head>
  <title>{$_('page.title')}</title>
</svelte:head>

<main class="homepage">
  <nav class="homepage__header">
    <Logo />
  </nav>
</main>
<h1>{$_('home.title')}</h1>
