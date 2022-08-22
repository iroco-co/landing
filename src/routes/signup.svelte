<script lang="ts">
  import { _ } from 'svelte-i18n';
  import Header from '../lib/Header.svelte';
  import Footer from '../lib/Footer.svelte';
  import Contact from '../lib/Contact.svelte';
  import { Icon } from '@iroco/ui/';
  import Energy from '../lib/Energy.svelte';
  import GreenHost from '../lib/GreenHost.svelte';
  import Plant from '../lib/Plant.svelte';
  import Privacy from '../lib/Privacy.svelte';
  import Server from '../lib/Server.svelte';
  import Security from '../lib/Security.svelte';
  import Ux from '../lib/Ux.svelte';
  import Zen from '../lib/Zen.svelte';
  import Disconnect from '../lib/Disconnect.svelte';
  import Mail from '../lib/Mail.svelte';
  import EventList from '../lib/EventList.svelte';
</script>

<Header />
<main class="signup">
  <div class="signup__offer">
    <h2>{$_('signup.offer.title')}</h2>
    <div class="signup__offer__card">
      <div class="signup__offer__card__svglistgroup">
        <div class="signup__offer__card__svglistgroup__icon">
          <Mail />
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
      <div class="signup__privacy__bullets__privacy">
        <Privacy size="220" />
        <h4>{$_('signup.privacy.bullets.privacy')}</h4>
      </div>
      <div class="signup__privacy__bullets__security">
        <Security size="151" />
        <h4>{$_('signup.privacy.bullets.security')}</h4>
      </div>
      <div class="signup__privacy__bullets__server">
        <Server size="150" />
        <h4>{$_('signup.privacy.bullets.server')}</h4>
      </div>
    </div>
  </div>
  <div class="signup__respect">
    <h2>
      {$_('signup.privacy.respect.title')}
      <span>
        {$_('signup.privacy.respect.yellow')}
      </span>
    </h2>
    <div class="signup__respect__bullets">
      <div class="signup__respect__bullets__ux">
        <Ux />
        <h4>{$_('signup.privacy.respect.bullets.ux')}</h4>
      </div>
      <div class="signup__respect__bullets__mental-load">
        <Zen />
        <h4>{$_('signup.privacy.respect.bullets.mental-load')}</h4>
      </div>
      <div class="signup__respect__bullets__disconnect">
        <Disconnect />
        <h4>{$_('signup.privacy.respect.bullets.disconnect')}</h4>
      </div>
    </div>
  </div>
  <div class="signup__mail">
    <h2>{$_('signup.mail.title')}</h2>
    <h2>{$_('signup.mail.caption')}</h2>
    <div class="signup__mail__bullets">
      <div class="signup__mail__bullets__subscription">
        <Mail />
        <h4>{$_('signup.mail.bullets.subscription')}</h4>
      </div>
      <div class="signup__mail__bullets__client">
        <img src="/images/laptop.png" alt="Iroco webmail on laptop" width="250" />
        <h4>{$_('signup.mail.bullets.client')}</h4>
      </div>
      <div class="signup__mail__bullets__account">
        <Plant size="220" />
        <h4>{$_('signup.mail.bullets.account')}</h4>
      </div>
    </div>
  </div>
  <div class="signup__roadmap">
    <h2>{$_('signup.roadmap.title')}</h2>
    <p class="signup__roadmap__paragraph">{$_('signup.roadmap.p')}</p>
    <EventList
      eventList={[
        {
          title: $_('signup.roadmap.ul.servers.title'),
          year: $_('signup.roadmap.ul.servers.date'),
          details: $_('signup.roadmap.ul.servers.details')
        },
        {
          title: $_('signup.roadmap.ul.client.title'),
          year: $_('signup.roadmap.ul.client.date'),
          details: $_('signup.roadmap.ul.client.details')
        },
        {
          title: $_('signup.roadmap.ul.company.title'),
          year: $_('signup.roadmap.ul.company.date'),
          details: $_('signup.roadmap.ul.company.details')
        },
        {
          title: $_('signup.roadmap.ul.webmail.title'),
          year: $_('signup.roadmap.ul.webmail.date'),
          details: $_('signup.roadmap.ul.webmail.details')
        },
        {
          title: $_('signup.roadmap.ul.file.title'),
          year: $_('signup.roadmap.ul.file.date'),
          details: $_('signup.roadmap.ul.file.details')
        }
      ]}
    />
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
        text-transform: uppercase;
        white-space: pre-wrap;
        @include screen-laptop {
          flex-direction: column;
        }

        &__green,
        &__host {
          @include screen-laptop {
            margin-bottom: 2em;
          }
        }
      }
    }
    &__privacy {
      margin: 2em auto;
      padding-top: 4em;
      text-align: center;
      background: colors.$nightBlue;

      @include screen-laptop {
        padding: 3em;
      }
      > h2:nth-child(2) {
        color: colors.$red;

        @include screen-laptop {
          line-height: 1.6em;
        }
      }

      &__bullets {
        display: flex;
        justify-content: space-around;
        align-content: center;
        padding: 6em 0 2em;
        text-transform: uppercase;
        white-space: pre-wrap;

        @include screen-laptop {
          flex-direction: column;
          padding: 4em 0 1em;
        }

        &__privacy,
        &__security,
        &__server {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-content: center;
          @include screen-laptop {
            margin-bottom: 2em;
          }
        }

        &__security h4 {
          transform: translateY(2.5em);
          @include screen-laptop {
            transform: translateY(0);
          }
        }

        &__server h4 {
          transform: translateY(3.5em);
          @include screen-laptop {
            transform: translateY(0);
          }
        }
      }
    }
    &__respect {
      margin: 6em auto;
      text-align: center;
      span {
        color: colors.$yellow;
      }

      &__bullets {
        display: flex;
        justify-content: space-around;
        align-content: center;
        padding: 2em;
        text-transform: uppercase;
        white-space: pre-wrap;
        @include screen-laptop {
          flex-direction: column;
        }

        &__mental-load,
        &__ux,
        &__disconnect {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-content: center;
          @include screen-laptop {
            margin-bottom: 2em;
          }
        }

        &__mental-load h4 {
          transform: translateY(3.5em);
          @include screen-laptop {
            transform: translateY(0);
          }
        }

        &__disconnect h4 {
          transform: translateY(0.5em);
          @include screen-laptop {
            transform: translateY(0);
          }
        }
      }
    }
    &__mail {
      margin: 6em auto;
      padding-top: 4em;
      padding-bottom: 3em;
      text-align: center;
      background: colors.$nightBlue;

      > h2:nth-child(2) {
        color: colors.$green;
      }

      &__bullets {
        display: flex;
        justify-content: space-around;
        align-content: center;
        padding: 2em;
        text-transform: uppercase;
        white-space: pre-wrap;
        @include screen-laptop {
          flex-direction: column;
        }

        &__subscription,
        &__client,
        &__account {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-content: center;
          @include screen-laptop {
            margin-bottom: 2em;
          }
        }

        &__subscription h4 {
          transform: translateY(2em);
          @include screen-laptop {
            transform: translateY(0);
          }
        }

        &__client h4 {
          transform: translateY(2.9em);
          @include screen-laptop {
            transform: translateY(0);
          }
        }
      }
    }
    &__roadmap {
      &__paragraph {
        margin: 3em auto;
        width: 80%;
      }
    }
  }
</style>
