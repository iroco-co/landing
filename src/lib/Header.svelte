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
  @use 'node_modules/@iroco/ui/lib/constants';
  :global(.nav__topbar__item-container) {
    align-items: center;
  }
  :global(.nav__topbar__item:last-child) {
    padding: 1em 2em;
    background: colors.$green;
    border: none;
    border-radius: constants.$border-radius;
    &:hover {
      box-shadow: inset 0 0 0 10em rgba(0, 0, 0, 0.2);
    }
  }
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
