<script lang="ts">
  import { _ } from 'svelte-i18n';
  import Mail from '../lib/Mail.svelte';
</script>

<div class="newsletter">
  <div class="newsletter__container">
    <div class="newsletter__container__screen">
      <img src="/images/screen.png" alt="Iroco mail application on a smartphone screen" />
    </div>
    <div class="newsletter__container__subscription">
      <div class="newsletter__container__subscription__header">
        <Mail size="90" strokeWidth="2" />
        <h3>{$_('newsletter.title')}</h3>
      </div>
      <iframe
        title="mailjet"
        class="mj-w-res-iframe"
        src="https://app.mailjet.com/widget/iframe/6a9K/NvZ"
        height="180px"
        width="90%"
      />
      <p>{$_('newsletter.disclaimer')}</p>
    </div>
  </div>
</div>

<style lang="scss">
  @use 'node_modules/@iroco/ui/lib/colors';
  @use 'node_modules/@iroco/ui/lib/constants';
  @use 'node_modules/@iroco/ui/lib/fonts';
  @import 'node_modules/@iroco/ui/scss/containers';

  .newsletter {
    background: colors.$nightBlue;
    padding: 50px 0;
    &__container {
      display: flex;
      align-items: center;
      justify-content: center;
      &__screen {
        margin-right: 50px;
        > img {
          width: 200px;
          display: block;
          margin: 0;
          padding: 0;
        }
      }
      &__subscription {
        width: 400px;
        margin-left: 50px;
        &__header {
          display: flex;
          align-items: center;
          justify-content: center;
          > h3 {
            font-size: 1.9em;
            line-height: 1.5em;
            margin-left: 50px;
            white-space: pre;
          }
        }
        iframe {
          border: none;
        }
        > p {
          color: rgba(white, 0.3);
          font-size: 1em;
        }
      }
    }
  }

  @include screen-tablet {
    .newsletter {
      &__container {
        &__screen {
          display: none;
        }
        &__subscription {
          margin-left: 0;
          &__header {
            > h3 {
              margin-left: 20px;
              font-size: 1.7em;
            }
          }
        }
      }
    }
  }
</style>
