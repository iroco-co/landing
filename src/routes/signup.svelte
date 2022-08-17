<script lang="ts">
  import { _ } from 'svelte-i18n';
  import Header from '../lib/Header.svelte';
  import Footer from '../lib/Footer.svelte';
  import Contact from '../lib/Contact.svelte';
  import { Icon } from '@iroco/ui/';
  import Energy from '../lib/Energy.svelte';
  import GreenHost from '../lib/GreenHost.svelte';
  import Plant from '../lib/Plant.svelte';
  import Privacy from "../lib/Privacy.svelte";
</script>

<Header />
<main class="signup">
  <div class="signup__offer">
    <h2>{$_('signup.offer.title')}</h2>
    <div class="signup__offer__card">
      <div class="signup__offer__card__svglistgroup">
        <svg class="signup__offer__card__svglistgroup__icon" viewBox="0 0 58.96 85.92" height="165">
          <title>Mail</title>
          <rect
            x="1.95"
            y="28.91"
            width="55.06"
            height="55.06"
            fill="none"
            stroke="#00d692"
            stroke-linejoin="bevel"
            stroke-width={1}
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
            stroke-width={1}
          />
        </svg>

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
          class={`iroco-ui-button iroco-ui-button--regular iroco-ui-button--success`}
          href="https://app.iroco.co/signup/"
        >
          <Icon name="chevron-right" color="colors.$nightBlue" />
          {$_('signup.offer.buttons.subscribe')}
        </a>
        <a class={`iroco-ui-button iroco-ui-button--regular iroco-ui-button--dark`} href="#faq">
          <Icon name="chevron-right" color="colors.$beige" />
          {$_('signup.offer.buttons.details')}
        </a>
      </div>
    </div>
  </div>
  <div class="signup__green">
    <h2>{$_('signup.green.title')}</h2>
    <p>{$_('signup.green.p')}</p>
    <div class="signup__green__bullets">
      <div class="signup__green__bullets__green">
        <Energy size="220" />
        <h4>{$_('signup.green.bullets.energy')}</h4>
      </div>
      <div class="signup__green__bullets__host">
        <GreenHost size="220" />
        <h4>{$_('signup.green.bullets.host')}</h4>
      </div>
      <div class="signup__green__bullets__gesture">
        <Plant size="220" />
        <h4>{$_('signup.green.bullets.gesture')}</h4>
      </div>
    </div>
  </div>
  <div class="signup__privacy">
    <h2>{$_('signup.privacy.title')}</h2>
    <h2>{$_('signup.privacy.caption')}</h2>
    <div class="signup__privacy__bullets">
      <div class="signup__privacy__bullets__green">
        <Privacy size="220" />
        <h4>{$_('signup.privacy.bullets.privacy')}</h4>
      </div>
      <div class="signup__privacy__bullets__host">
        <GreenHost size="220" />
        <h4>{$_('signup.privacy.bullets.security')}</h4>
      </div>
      <div class="signup__privacy__bullets__gesture">
        <Plant size="220" />
        <h4>{$_('signup.privacy.bullets.server')}</h4>
      </div>
    </div>
  </div>
  <Contact />
</main>
<Footer />

<style lang="scss">
  @use 'node_modules/@iroco/ui/lib/colors';
  @use 'node_modules/@iroco/ui/lib/constants';
  @import 'node_modules/@iroco/ui/lib/containers';
  @import 'node_modules/@iroco/ui/lib/button';

  .signup {
    h2 {
      text-align: center;
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
          padding: 2em;

          @include screen-tablet {
            display: block;
            text-align: center;
          }
          &__icon {
            transform: translate(-10em, 0.8em);

            @include screen-laptop-L {
              max-width: 80%;
              transform: translate(-5em, 0.8em);
            }

            @include screen-laptop {
              transform: translate(-5em, 0.8em);
            }

            @include screen-tablet {
              transform: translate(0);
            }
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
    &__green {
      margin: 6em auto;
      text-align: center;
      & > h2 {
        @include screen-laptop {
          line-height: 1.6em;
        }
      }
      & > p {
        margin: 3em auto;
        width: 70%;

        @include screen-laptop {
          width: 90%;
        }
      }
      &__bullets {
        display: flex;
        justify-content: space-around;
        align-content: center;
        padding: 2em;
        @include screen-laptop {
          flex-direction: column;
        }

        &__green,
        &__host {
          @include screen-laptop {
            margin-bottom: 2em;
          }
        }

        &__host {
          white-space: pre-wrap;
        }

        h4 {
          text-transform: uppercase;
        }
      }
    }
  }
</style>
