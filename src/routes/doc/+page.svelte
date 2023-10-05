<script lang="ts">
  import { _ } from "svelte-i18n";
  let windowWidth;
</script>

<svelte:window bind:innerWidth={windowWidth} />
<svelte:head>
  <title>{$_("doc.title")}</title>
</svelte:head>

<section class="doc">
  <div class="doc__content">
    <h1>{$_("doc.title")}</h1>
    <h2>{$_("doc.control.title")}</h2>
    {@html $_("doc.control.content")}

    <h2>{$_("doc.topology.title")}</h2>
    {@html $_("doc.topology.content")}

    <h2>{$_("doc.infrastructure.title")}</h2>
    {@html $_("doc.infrastructure.content")}

    <h2>{$_("doc.hardware.title")}</h2>
    {@html $_("doc.hardware.content")}

    <h2>{$_("doc.software.title")}</h2>
    {@html $_("doc.software.content")}

    <h2>{$_("doc.deploy.title")}</h2>
    {@html $_("doc.deploy.content")}

    <h2>{$_("doc.backup.title")}</h2>
    {@html $_("doc.backup.content")}

    <h2>{$_("doc.monitoring.title")}</h2>
    {@html $_("doc.monitoring.content")}
  </div>
</section>

<style lang="scss">
  @use "node_modules/@iroco/ui/scss/colors";
  @use "node_modules/@iroco/ui/scss/constants";
  @import "node_modules/@iroco/ui/scss/containers";
  @import "node_modules/@iroco/ui/scss/button";

  .doc {
    display: flex;
    justify-content: center;

    &__content {
      width: 70%;
    }
  }
</style>
