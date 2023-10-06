<div class="newsletter">
  <div class="newsletter__container">
    <div class="newsletter__container__subscription">
      <div class="newsletter__container__subscription__iframe">
        <iframe
          title="Mailchimp"
          data-w-type="embedded"
          src="https://xq520.mjt.lu/wgt/xq520/m4m/form?c=75474af6"
          width="100%"
        />
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  @use "node_modules/@iroco/ui/dist/scss/colors";
  @use "node_modules/@iroco/ui/dist/scss/constants";
  @use "node_modules/@iroco/ui/dist/scss/fonts";
  @import "node_modules/@iroco/ui/dist/scss/containers";

  .newsletter {
    max-width: 1024px;
    background: colors.$nightBlue;
    padding: 3em;
    align-self: center;

    &__container {
      display: flex;
      align-items: center;

      &__subscription {
        padding: 2em 2em;

        &__iframe {
          max-width: 500px;
          text-align: center;

          iframe {
            border: none;
            width: 500px;
            height: 709px;
          }
        }
      }
    }
  }

  @include screen-tablet {
    .newsletter {
      &__container {
        display: flex;
        align-items: center;

        &__subscription {
          padding: 2em 2em;

          &__iframe {
            max-width: 500px;
            text-align: center;

            iframe {
              border: none;
              width: 300px;
              height: 870px;
            }
          }
        }
      }
    }
  }
</style>
