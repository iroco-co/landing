<script lang="ts">
  /* eslint svelte/no-at-html-tags: "off" */
  import { _ } from "svelte-i18n";
  let windowWidth: number | undefined = $state();
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

    <h2>{$_("doc.security.title")}</h2>
    <div class="doc__content__security__text">
      {@html $_("doc.security.content")}
    </div>
    <div class="doc__content__security__image">
      <a
        href="https://www.abuseipdb.com/user/136267"
        title="AbuseIPDB is an IP address blacklist for webmasters and sysadmins to report IP addresses engaging in abusive behavior on their networks"
      >
        <img
          src="https://www.abuseipdb.com/contributor/136267.svg"
          alt="AbuseIPDB Contributor Badge"
        />
      </a>
    </div>

    <h2>{$_("doc.audits.title")}</h2>
    {@html $_("doc.audits.content")}

    <h2>{$_("doc.deploy.title")}</h2>
    {@html $_("doc.deploy.content")}

    <h2>{$_("doc.backup.title")}</h2>
    {@html $_("doc.backup.content")}

    <h2>{$_("doc.monitoring.title")}</h2>
    {@html $_("doc.monitoring.content")}
  </div>
</section>

<style lang="scss">
  @use "@iroco/ui/scss/constants.scss";
  @use "@iroco/ui/scss/containers.scss";
  @use "@iroco/ui/scss/button.scss";

  .doc {
    display: flex;
    justify-content: center;

    &__content {
      width: 70%;
      &__security {
        &__image {
          a > img {
            width: 286px;
            background: var(--color-green);
            padding: 5px;
            margin-top: 10px;
          }
        }
      }
    }
  }
</style>
