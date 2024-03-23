<script>
  import "../i18n";
  import { _ } from "svelte-i18n";
  import Footer from "../lib/Footer.svelte";
  import { Navigation, NavigationItem } from "@iroco/ui";
  import { page } from "$app/stores";
  import "../app.scss";
</script>

<Navigation
  navigationItems={[
    new NavigationItem($_("header.about"), "/about"),
    new NavigationItem($_("header.blog"), "https://blog.iroco.co"),
    new NavigationItem($_("header.faq"), "/faq"),
    new NavigationItem($_("header.signup"), "/signup"),
    new NavigationItem(
      $_("header.signin"),
      `https://app.${$page.url.host}`,
      true
    ),
  ]}
  type="topbar"
/>
<main class="main">
  <slot />
</main>
<Footer />

<style lang="scss">
  @use "node_modules/@iroco/ui/dist/scss/colors";
</style>
