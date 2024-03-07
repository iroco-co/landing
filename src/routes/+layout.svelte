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

</style>
