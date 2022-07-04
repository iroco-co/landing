<script lang="ts">
  import { _ } from 'svelte-i18n';
  import { Navigation } from '@iroco/ui';
  const navigationItems = [
    {
      hrefOrCallback: '/about',
      name: $_('header.about')
    },
    {
      hrefOrCallback: 'https://blog.iroco.co',
      name: $_('header.blog')
    },
    {
      hrefOrCallback: 'mailto:hello@iroco.fr',
      name: $_('header.contact')
    },
    {
      hrefOrCallback: '/signup',
      name: $_('header.signup')
    },
    {
      hrefOrCallback: 'https://app.iroco.co',
      name: $_('header.signin')
    }
  ];
</script>

<header class="header">
  <Navigation title="Iroco" {navigationItems} type="topbar" />
</header>

<style lang="scss">
  @use 'node_modules/@iroco/ui/lib/colors';

  :global(.navigation) {
    position: fixed;
    background-color: colors.$darkBlue;
    top: 0;
    right: 0;
    z-index: 1;
  }
  :global(.navigation--mobile) {
    background-color: colors.$darkBlue;
  }
</style>
