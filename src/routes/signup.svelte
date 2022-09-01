<script lang="ts">
  import { _ } from 'svelte-i18n';
  import Header from '../lib/Header.svelte';
  import Footer from '../lib/Footer.svelte';
  import Contact from '../lib/Contact.svelte';
  import { Icon, Button } from '@iroco/ui/';
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
  import Chart from '../lib/Chart.svelte';
  import Laptop from '../lib/Laptop.svelte';
  import HorizontalOrVerticalDisplayedContent from '../lib/HorizontalOrVerticalDisplayedContent.svelte';

  export let opened: boolean;
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
    <h2>{$_('signup.privacy.caption')}</h2>
    <HorizontalOrVerticalDisplayedContent>
      <Privacy size="220" title={$_('signup.privacy.bullets.privacy')} />
      <Security size="220" title={$_('signup.privacy.bullets.security')} />
      <Server size="220" title={$_('signup.privacy.bullets.server')} />
    </HorizontalOrVerticalDisplayedContent>
  </div>
  <div class="signup__respect">
    <h2>
      {$_('signup.privacy.respect.title')}
      <span>
        {$_('signup.privacy.respect.yellow')}
      </span>
    </h2>
    <HorizontalOrVerticalDisplayedContent>
      <Ux title={$_('signup.privacy.respect.bullets.ux')} />
      <Zen title={$_('signup.privacy.respect.bullets.mental-load')} />
      <Disconnect title={$_('signup.privacy.respect.bullets.disconnect')} />
    </HorizontalOrVerticalDisplayedContent>
  </div>
  <div class="signup__mail dark-section">
    <h2>{$_('signup.mail.title')}</h2>
    <h2>{$_('signup.mail.caption')}</h2>
    <HorizontalOrVerticalDisplayedContent>
      <Mail size="165" strokeWidth="1" title={$_('signup.mail.bullets.subscription')} />
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
  <div class="signup__faq" id="faq">
    <h2>{$_('signup.faq.title')}</h2>
    <p class="paragraph-section">{$_('signup.faq.p')}</p>
    <div class="signup__faq__container">
      <div class="signup__faq__container__q-a" class:opened={opened ? 'opened' : ''}>
        <div id="offercontent" class="signup__faq__q-a__offercontent">
          <h4>{$_('signup.faq.questions.offercontent.title')}</h4>
          <p>{$_('signup.faq.questions.offercontent.p')}</p>
          <ul>
            <li>{$_('signup.faq.questions.offercontent.list.address')}</li>
            <li>{$_('signup.faq.questions.offercontent.list.mailbox')}</li>
            <li>{$_('signup.faq.questions.offercontent.list.aliases')}</li>
            <li>{$_('signup.faq.questions.offercontent.list.contact-calendar')}</li>
          </ul>
          <p>
            {$_('signup.faq.questions.offercontent.nowebmail')}
            <a href="#configuration">
              {$_('signup.faq.questions.offercontent.configurationquestion')}
            </a>
            {$_('signup.faq.questions.offercontent.nowebmailtofollow')}
          </p>
          <p>{$_('signup.faq.questions.offercontent.soon')}</p>
        </div>
        <div id="ecofriendlyservice" class="signup__faq__q-a__ecofriendlyservice">
          <h4>{$_('signup.faq.questions.ecofriendlyservice.title')}</h4>
          <p>{$_('signup.faq.questions.ecofriendlyservice.behind')}</p>
          <p>{$_('signup.faq.questions.ecofriendlyservice.detail')}</p>
          <ul>
            <li>{$_('signup.faq.questions.ecofriendlyservice.list.ecoresponsibility')}</li>
            <li>
              {$_('signup.faq.questions.ecofriendlyservice.list.ecoconception.frugalapps')}
              <a href="https://blog.iroco.co/">
                {$_('signup.faq.questions.ecofriendlyservice.list.ecoconception.blog')}
              </a>
              {$_('signup.faq.questions.ecofriendlyservice.list.ecoconception.overview')}
            </li>
            <li>{$_('signup.faq.questions.ecofriendlyservice.list.ecodesign')}</li>
          </ul>
          <p>
            {$_('signup.faq.questions.ecofriendlyservice.impact.numeric')}
            <a href="https://fresquedunumerique.org/">
              {$_('signup.faq.questions.ecofriendlyservice.impact.fresque')}
            </a>
            {$_('signup.faq.questions.ecofriendlyservice.impact.preferences')}
            <a href="https://blog.iroco.co/publications-reference-numerique-responsable/">
              {$_('signup.faq.questions.ecofriendlyservice.impact.publications')}
            </a>
            {$_('signup.faq.questions.ecofriendlyservice.impact.question')}
          </p>
          <p>{$_('signup.faq.questions.ecofriendlyservice.print')}</p>
        </div>
        <div id="data" class="signup__faq__q-a__data">
          <h4>{$_('signup.faq.questions.data.title')}</h4>
          <p>{$_('signup.faq.questions.data.p')}</p>
          <p>{$_('signup.faq.questions.data.personal')}</p>
          <p>{$_('signup.faq.questions.data.access')}</p>
          <p>{$_('signup.faq.questions.data.detail')}</p>
          <ul>
            <li>
              {$_('signup.faq.questions.data.list.provider.collect')}
              <strong>{$_('signup.faq.questions.data.list.provider.lastname')}</strong>,
              <strong>{$_('signup.faq.questions.data.list.provider.firstname')}</strong>
              {$_('signup.faq.questions.data.list.provider.and')}
              <strong>{$_('signup.faq.questions.data.list.provider.invoice')}</strong> .
            </li>
            <li>
              {$_('signup.faq.questions.data.list.also.collect')}
              <strong>{$_('signup.faq.questions.data.list.also.bank')}</strong>
              {$_('signup.faq.questions.data.list.also.noaccess')}
            </li>
            <li>
              {$_('signup.faq.questions.data.list.last.store')}
              <strong>{$_('signup.faq.questions.data.list.last.mail')}</strong>,
              {$_('signup.faq.questions.data.list.last.iroco')}
              <strong>{$_('signup.faq.questions.data.list.last.alias')}</strong>
              {$_('signup.faq.questions.data.list.last.pass')}
              <strong>{$_('signup.faq.questions.data.list.last.encrypted')}</strong>
              {$_('signup.faq.questions.data.list.last.noaccess')}
            </li>
          </ul>
        </div>
        <div id="costprice" class="signup__faq__q-a__paidservice">
          <h4>{$_('signup.faq.questions.paidservice.title')}</h4>
          <p>{$_('signup.faq.questions.paidservice.others')}</p>
          <p>{$_('signup.faq.questions.paidservice.iroco')}</p>
        </div>
        <div id="subscription" class="signup__faq__q-a__subscription">
          <h4>{$_('signup.faq.questions.subscription.title')}</h4>
          <p>{$_('signup.faq.questions.subscription.emailservice')}</p>
          <p>{$_('signup.faq.questions.subscription.detail')}</p>
          <ul>
            <li>{$_('signup.faq.questions.subscription.list.taxes')}</li>
            <li>{$_('signup.faq.questions.subscription.list.fee')}</li>
            <li>{$_('signup.faq.questions.subscription.list.deployment')}</li>
            <li>{$_('signup.faq.questions.subscription.list.rest')}</li>
          </ul>
          <Chart size="400" />
        </div>
        <div id="nonbindingoffer" class="signup__faq__q-a__offer">
          <h4>{$_('signup.faq.questions.offer.title')}</h4>
          <p>{$_('signup.faq.questions.offer.p')}</p>
        </div>
        <div id="withdrawal" class="signup__faq__q-a__withdrawal">
          <h4>{$_('signup.faq.questions.withdrawal.title')}</h4>
          <p>{$_('signup.faq.questions.withdrawal.p')}</p>
        </div>
        <div id="configuration" class="signup__faq__q-a__configuration">
          <h4>{$_('signup.faq.questions.configuration.title')}</h4>
          <p>{$_('signup.faq.questions.configuration.introduction')}</p>
          <ul>
            <li>{$_('signup.faq.questions.configuration.imap')}</li>
            <li>{$_('signup.faq.questions.configuration.smtp')}</li>
          </ul>
          <p>{$_('signup.faq.questions.configuration.user')}</p>
          <p>
            {$_('signup.faq.questions.configuration.imap-example')}
            <img alt="imap configuration example" src="/images/imap.png" width="95%" />
          </p>
          <p>
            {$_('signup.faq.questions.configuration.smtp-example')}
            <img alt="smtp configuration example" src="/images/smtp.png" width="95%" />
          </p>
        </div>
        <div id="emailsyntax" class="signup__faq__q-a__emailsyntax">
          <h4>{$_('signup.faq.questions.emailsyntax.title')}</h4>
          <p>{$_('signup.faq.questions.emailsyntax.introduction')}</p>
          <p>{$_('signup.faq.questions.emailsyntax.local-part')}</p>
          <p>{$_('signup.faq.questions.emailsyntax.local-part-exclude')}</p>
          <p>
            {$_('signup.faq.questions.emailsyntax.local-part-spec')}
            <a href="https://datatracker.ietf.org/doc/html/rfc5322">RFC 5322</a>.
          </p>
        </div>
        <div id="cookies" class="signup__faq__q-a__cookies">
          <h4>{$_('signup.faq.questions.cookies.title')}</h4>
          <p>
            {$_('signup.faq.questions.cookies.weuse')}
            <a href="https://fr.matomo.org/matomo-on-premise/">Matomo</a>
            {$_('signup.faq.questions.cookies.selfhosted')}
            <a
              href="https://www.cnil.fr/sites/default/files/atoms/files/matomo_analytics_-_exemption_-_guide_de_configuration.pdf"
            >
              {$_('signup.faq.questions.cookies.recommendations')}
            </a>
            {$_('signup.faq.questions.cookies.cnil')}
          </p>
          <iframe
            title="matomo"
            src="https://matomo.iroco.co/index.php?module=CoreAdminHome&action=optOut&language=fr&backgroundColor=211d28&fontColor=f2ebe3&fontSize=&fontFamily=Arial"
          />
        </div>
      </div>
      <div class="signup__faq__container__btn">
        <Button kind="dark" on:click={() => (opened = !opened)}>
          <Icon name="chevron-right" />
          {opened ? $_('signup.faq.close') : $_('signup.faq.button')}
        </Button>
      </div>
    </div>
  </div>
  <Contact href="/contact" />
</main>
<Footer />

<style lang="scss">
  @use 'node_modules/@iroco/ui/lib/colors';
  @use 'node_modules/@iroco/ui/lib/constants';
  @import 'node_modules/@iroco/ui/lib/containers';
  @import 'node_modules/@iroco/ui/lib/button';

  .signup {
    text-align: center;

    h2 {
      line-height: 1.6em;
    }

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
    &__privacy {
      > h2:nth-child(2) {
        color: colors.$red;
      }
    }
    &__respect {
      span {
        color: colors.$yellow;
      }
    }
    &__mail {
      > h2:nth-child(2) {
        color: colors.$green;
      }
    }
    &__faq {
      background: colors.$nightBlue;
      padding: 4em;

      &__container {
        &__q-a {
          position: relative;
          width: 100%;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
          grid-gap: 4em;
          max-height: 200px;
          transition: max-height 1s;
          overflow: hidden;
          text-align: left;
          p {
            font-size: 14px;
            white-space: pre-wrap;
            color: colors.$darkBeige;
          }
          ul {
            padding-left: 2em;
            color: colors.$darkBeige;
          }
          a {
            font-weight: bold;
            color: colors.$green;
          }
        }
        &__q-a::after {
          content: '';
          width: 100%;
          position: absolute;
          bottom: 0;
          height: 100%;
          background: linear-gradient(to top, rgba(24, 21, 30, 1) 5%, rgba(24, 21, 30, 0) 80%);
        }
      }
    }
  }

  .opened {
    max-height: fit-content;
    padding-bottom: 4em;
    &::after {
      display: none;
    }
  }

  .dark-section {
    padding: 4em 0 3em;
    background: colors.$nightBlue;

    @include screen-tablet {
      margin: 6em 2em;
    }
  }

  .paragraph-section {
    margin: 3em auto;
    width: 70%;
    @include screen-laptop {
      width: 90%;
    }
  }
</style>
