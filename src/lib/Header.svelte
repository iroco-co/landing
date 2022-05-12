<script lang="ts">
  import { _ } from 'svelte-i18n';
  import Logo from './Logo.svelte';
  import { Button } from '@iroco/ui';
</script>

<header class="header">
  <div class="header__container">
    <nav class="header__container__menu-left">
      <a href="/">{$_('header.about')}</a>
      <a href="https://blog.iroco.co/">{$_('header.blog')}</a>
      <a href="mailto:hello@iroco.fr">{$_('header.contact')}</a>
    </nav>
    <div class="header__container__menu-center">
      <a
        class="header__container__menu-center__logo"
        href="/"
        title="Iroco mainpage"
        aria-description="Link to Iroco homepage"
      >
        <Logo size={48} margin={0} fontsize={2} titlemargin={1} flexdirection={'initial'} />
      </a>
    </div>
    <nav class="header__container__menu-right">
      <a href="/">{$_('header.signup')}</a>
      <a href="https://app.iroco.co/">
        <Button size="small" kind="success">{$_('header.signin')}</Button>
      </a>
    </nav>
  </div>
</header>

<style lang="scss">
  @use 'node_modules/@iroco/ui/lib/colors';
  :global(.iroco-ui-button) {
    text-transform: uppercase;
    letter-spacing: 0.2em;
    font-weight: 700;
    font-size: 1em;
  }
  :global(.iroco-ui-button:hover) {
    color: colors.$beige;
  }
  .header {
    background: colors.$darkBlue;
    height: 200px;
    width: 100%;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    &__container {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      &__menu-left,
      &__menu-right {
        text-transform: uppercase;
        letter-spacing: 0.2em;
        width: 25%;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
  }
</style>
