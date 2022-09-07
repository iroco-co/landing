<script lang="ts">
  import { _ } from 'svelte-i18n';
  import Header from '../lib/Header.svelte';
  import Footer from '../lib/Footer.svelte';
  import { Icon } from '@iroco/ui/';
  import Energy from '../lib/Energy.svelte';
  import GreenHost from '../lib/GreenHost.svelte';
  import Plant from '../lib/Plant.svelte';
  import Privacy from '../lib/Privacy.svelte';
  import Server from '../lib/Server.svelte';
  import Security from '../lib/Security.svelte';
  import Ux from '../lib/UserExperience.svelte';
  import Zen from '../lib/Zen.svelte';
  import Disconnect from '../lib/Disconnect.svelte';
  import Mail from '../lib/Mail.svelte';
  import EventList from '../lib/EventList.svelte';
  import Laptop from '../lib/Laptop.svelte';
  import HorizontalOrVerticalDisplayedContent from '../lib/HorizontalOrVerticalDisplayedContent.svelte';
</script>

<Header />
<main class="signup">
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
  <div class="signup__green">
    <h2>{$_('signup.green.title')}</h2>
    <p class="paragraph-section">{$_('signup.green.p')}</p>
    <HorizontalOrVerticalDisplayedContent>
      <Energy size="220" title={$_('signup.green.bullets.energy')} />
      <GreenHost size="220" title={$_('signup.green.bullets.host')} />
      <Plant size="220" title={$_('signup.green.bullets.gesture')} />
    </HorizontalOrVerticalDisplayedContent>
  </div>
  <div class="signup__privacy dark-section">
    <h2>{$_('signup.privacy.title')}</h2>
    <h2 class="font-color-red">{$_('signup.privacy.caption')}</h2>
    <HorizontalOrVerticalDisplayedContent>
      <Privacy size="220" title={$_('signup.privacy.bullets.privacy')} />
      <Security size="220" title={$_('signup.privacy.bullets.security')} />
      <Server size="220" title={$_('signup.privacy.bullets.server')} />
    </HorizontalOrVerticalDisplayedContent>
  </div>
  <div class="signup__respect">
    <h2>
      {$_('signup.privacy.respect.title')}
      <span class="font-color-yellow">{$_('signup.privacy.respect.yellow')}</span>
    </h2>
    <HorizontalOrVerticalDisplayedContent>
      <Ux title={$_('signup.privacy.respect.bullets.ux')} />
      <Zen title={$_('signup.privacy.respect.bullets.mental-load')} />
      <Disconnect title={$_('signup.privacy.respect.bullets.disconnect')} />
    </HorizontalOrVerticalDisplayedContent>
  </div>
  <div class="signup__mail dark-section">
    <h2>{$_('signup.mail.title')}</h2>
    <h2 class="font-color-green">{$_('signup.mail.caption')}</h2>
    <HorizontalOrVerticalDisplayedContent>
      <Mail size="165" strokeWidth="1" orientation="vertical" title={$_('signup.mail.bullets.subscription')} />
      <Laptop title={$_('signup.mail.bullets.client')} />
      <Plant size="220" title={$_('signup.mail.bullets.account')} />
    </HorizontalOrVerticalDisplayedContent>
  </div>
  <div class="signup__roadmap">
    <h2>{$_('signup.roadmap.title')}</h2>
    <p class="paragraph-section">{$_('signup.roadmap.p')}</p>
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
</main>
<Footer />

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
