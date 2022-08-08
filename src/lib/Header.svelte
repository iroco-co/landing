<script lang="ts">
  import { _ } from 'svelte-i18n';
  import { Navigation, NavigationItem } from '@iroco/ui';

  const navigationItems = [
    new NavigationItem($_('header.about'), '/about'),
    new NavigationItem($_('header.blog'), 'https://blog.iroco.co'),
    new NavigationItem($_('header.contact'), 'mailto:hello@iroco.fr'),
    new NavigationItem($_('header.signup'), '/signup'),
    new NavigationItem(
      $_('header.signin'),
      () => {
        window.location.assign('https://app.iroco.co');
      },
      true
    )
  ];
</script>

<header class="header">
  <Navigation {navigationItems} type="topbar" />
</header>

<style lang="scss">
  @use 'node_modules/@iroco/ui/lib/colors';
  @use 'node_modules/@iroco/ui/lib/constants';

  :global(.nav__topbar__item-container) {
    align-items: center;
    transform: translateY(0.18em);
  }

  .header > :global(.navigation) {
    border-bottom: none;
    position: fixed;
    background-color: colors.$darkBlue;
    top: 0;
    right: 0;
    z-index: 1;
  }
  .header > :global(.navigation--mobile) {
    border-bottom: none;
    background-color: colors.$darkBlue;
  }
</style>
