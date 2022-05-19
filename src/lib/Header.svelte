<script lang="ts">
  import { _ } from 'svelte-i18n';
  import { Navigation } from '@iroco/ui';
  const navigationItems = [
    {
      destination: '/about',
      name: $_('header.about')
    },
    {
      destination: 'https://blog.iroco.co',
      name: $_('header.blog')
    },
    {
      destination: 'mailto: hello@iroco.fr',
      name: $_('header.contact')
    },
    {
      destination: '/signup',
      name: $_('header.signup')
    },
    {
      destination: 'https://app.iroco.co',
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
  }
</style>
