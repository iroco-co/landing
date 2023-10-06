<script>
  import "../i18n";
  import { _, isLoading } from "svelte-i18n";
  import Footer from "../lib/Footer.svelte";
  import { Navigation, NavigationItem } from "@iroco/ui";
  import "../app.scss";
</script>

{#if !$isLoading}
  <Navigation
    navigationItems={[
      new NavigationItem($_("header.about"), "/about"),
      new NavigationItem($_("header.blog"), "https://blog.iroco.co"),
      new NavigationItem($_("header.faq"), "/faq"),
      new NavigationItem($_("header.signup"), "/signup"),
      new NavigationItem($_("header.signin"), "https://app.iroco.co", true),
    ]}
    type="topbar"
  />
  <main class="main">
    <slot />
  </main>
  <Footer />
{/if}

<style lang="scss">
  @use "node_modules/@iroco/ui/dist/scss/colors";

  :global(.navigation) {
    position: fixed;
    top: 0;
    background-color: colors.$darkBlue;
    z-index: 1;
    :global(.nav__topbar__item a):not(.iroco-ui-button) {
      font-size: 1.5em;
      color: colors.$beige;
    }
  }

  :global(.navigation--mobile) {
    :global(.nav__topbar__item a) {
      color: colors.$beige;
      font-size: 1.5em;
    }
  }

  :global(.navigation--mobile) {
    border-bottom: none;
    background-color: colors.$darkBlue;
  }
</style>
