<script lang="ts">
  import { _ } from 'svelte-i18n';
  import { Icon } from '@iroco/ui/';
  import Mail from '../lib/Mail.svelte';
</script>

<section class="signup">
  <div class="signup__offer">
    <h2>{$_('signup.offer.title')}</h2>
    <div class="signup__offer__card">
      <div class="signup__offer__card__svglistgroup">
        <div class="signup__offer__card__svglistgroup__icon">
          <Mail size="165" strokeWidth="1" />
        </div>
        <div class="signup__offer__card__svglistgroup__list">
          <div class="signup__offer__card__svglistgroup__list__header">
            <p>
              {$_('signup.offer.list.pricetaxincluded')}
            </p>
            <p>
              {$_('signup.offer.list.priceprecisions')}
            </p>
          </div>
          <ul class="signup__offer__card__svglistgroup__list__elements">
            <li>{$_('signup.offer.list.email')}</li>
            <li>{$_('signup.offer.list.storage')}</li>
            <li>{$_('signup.offer.list.alias')}</li>
            <li>{$_('signup.offer.list.contact-calendar')}</li>
          </ul>
        </div>
      </div>

      <div class="signup__offer__card__buttons">
        <a
          class="iroco-ui-button iroco-ui-button--regular iroco-ui-button--success"
          href="https://app.iroco.co/signup/"
        >
          <Icon name="chevron-right" color="colors.$nightBlue" />
          {$_('signup.offer.buttons.subscribe')}
        </a>
        <a class="iroco-ui-button iroco-ui-button--regular iroco-ui-button--dark" href="#faq">
          <Icon name="chevron-right" color="colors.$beige" />
          {$_('signup.offer.buttons.details')}
        </a>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  @use 'node_modules/@iroco/ui/lib/colors';
  @use 'node_modules/@iroco/ui/lib/constants';
  @import 'node_modules/@iroco/ui/lib/containers';
  @import 'node_modules/@iroco/ui/lib/button';

  .signup {
    text-align: center;

    &__offer,
    &__green,
    &__privacy,
    &__respect,
    &__mail,
    &__roadmap,
    &__faq {
      margin: 6em auto;
    }

    &__offer {
      &__card {
        background: colors.$nightBlue;
        border-radius: constants.$border-radius;
        width: 80%;
        margin: 0 auto;
        &__svglistgroup {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 6em;
          padding: 2em;

          @include screen-tablet {
            display: block;
          }

          &__icon {
            padding: 2em;
          }
          &__list {
            text-align: left;
            display: flex;
            flex-direction: column;
            &__header {
              p {
                font-weight: bolder;
              }
              p:nth-child(2) {
                font-size: small;
                font-weight: normal;
              }

              @include screen-tablet {
                text-align: center;
              }
            }
            &__elements {
              color: colors.$green;
              transform: translateX(1em);

              @include screen-tablet {
                text-align: center;
                transform: translateX(0);
              }
            }
          }
        }
        &__buttons {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          & > a {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }
    &__mail {
      @include screen-tablet {
        h2 {
          width: 90%;
          margin: auto;
        }
      }
    }
    &__roadmap {
      &__paragraph {
        margin: 3em auto;
        width: 70%;
        text-align: center;

        @include screen-laptop {
          width: 90%;
        }
      }
    }
  }
</style>
