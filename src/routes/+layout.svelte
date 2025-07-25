<script lang="ts">
  import "../i18n";
  import { _ } from "svelte-i18n";
  import Footer from "../lib/Footer.svelte";
  import { Navigation, NavigationItem } from "@iroco/ui";
  import { page } from "$app/state";
  import { PUBLIC_MATOMO_HOSTNAME } from "$env/static/public";
  import "../app.scss";
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

<svelte:head>
  <script
    src="https://{PUBLIC_MATOMO_HOSTNAME}/matomo.js"
    async
    defer
  ></script>
</svelte:head>

<Navigation
  navigationItems={[
    new NavigationItem($_("header.about"), "/about"),
    new NavigationItem($_("header.blog"), "https://blog.iroco.co"),
    new NavigationItem($_("header.faq"), "/faq"),
    new NavigationItem($_("header.signup"), "/signup"),
    new NavigationItem($_("header.signin"), `https://app.${page.url.host}`),
  ]}
  type="topbar"
/>
<main class="main">
  {@render children?.()}
</main>
<Footer />
