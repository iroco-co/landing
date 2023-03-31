<script lang="ts">
  import { _ } from "svelte-i18n";
  import Mail from "../lib/Mail.svelte";
</script>

<div class="newsletter">
  <div class="newsletter__container">
    <div class="newsletter__container__screen">
      <img
        src="/images/screen.png"
        alt="Iroco mail application on a smartphone screen"
      />
    </div>
    <div class="newsletter__container__subscription">
      <Mail size="90" strokeWidth="2" title={$_("newsletter.title")} />
      <div class="newsletter__container__subscription__iframe">
        <iframe
          data-w-type="embedded"
          src="http://xq520.mjt.lu/wgt/xq520/m4m/form?c=75474af6"
          width="100%"
        />
        <script type="text/javascript" src="/js/pas-nc-embedded-v1.js"></script>
        <p>{$_("newsletter.disclaimer")}</p>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  @use "node_modules/@iroco/ui/scss/colors";
  @use "node_modules/@iroco/ui/scss/constants";
  @use "node_modules/@iroco/ui/scss/fonts";
  @import "node_modules/@iroco/ui/scss/containers";

  .newsletter {
    max-width: 1024px;
    background: colors.$nightBlue;
    padding: 3em;
    align-self: center;
    &__container {
      display: flex;
      align-items: center;
      justify-content: space-around;
      &__screen {
        > img {
          width: 200px;
        }
        padding: 2em;
      }
      &__subscription {
        padding: 2em 2em;
        &__iframe {
          max-width: 500px;
          text-align: center;
          iframe {
            border: none;
            height: 180px;
            width: 100%;
          }
          > p {
            color: rgba(white, 0.3);
            font-size: 1em;
          }
        }
      }
    }
  }

  @include screen-tablet {
    .newsletter {
      padding: 1em;
      &__container {
        &__screen {
          display: none;
        }
      }
    }
  }
</style>
