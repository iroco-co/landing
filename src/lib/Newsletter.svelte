<script lang="ts">
  import { _ } from 'svelte-i18n';
</script>

<div class="newsletter">
  <div class="newsletter__container">
    <div class="newsletter__container__screen">
      <img src="/images/screen.png" alt="Iroco mail application on a smartphone screen" />
    </div>
    <div class="newsletter__container__subscription">
      <div class="newsletter__container__subscription__header">
        <svg
          class="newsletter__container__subscription__header__icon"
          viewBox="0 0 58.96 85.92"
          height="90"
        >
          <title>Mail</title>
          <rect
            x="1.95"
            y="28.91"
            width="55.06"
            height="55.06"
            fill="none"
            stroke="#00d692"
            stroke-linejoin="bevel"
            stroke-width={2}
          />
          <rect
            x="10.01"
            y="9.44"
            width="38.94"
            height="38.94"
            transform="translate(-11.81 29.31) rotate(-45)"
            fill="none"
            stroke="#fff"
            stroke-linejoin="bevel"
            stroke-width={2}
          />
        </svg>
        <h3>{$_('newsletter.title')}</h3>
      </div>
      <div class="newsletter__container__subscription__content">
        <iframe
          title="mailjet"
          class="mj-w-res-iframe"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          src="https://app.mailjet.com/widget/iframe/6a9K/NvZ"
          height="200px"
          width="100%"
        />
      </div>
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
        &__content {
          margin-top: 40px;
        }
        > p {
          @include fonts.Arial(1em, rgba(white, 0.3));
          margin-top: 20px;
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
          &__content {
            margin-top: 30px;
          }
        }
      }
    }
  }
</style>
