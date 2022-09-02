<script lang="ts">
  import { _ } from 'svelte-i18n';
  import Header from '../lib/Header.svelte';
  import Footer from '../lib/Footer.svelte';
  import Chart from '../lib/Chart.svelte';
</script>

<Header />
<main class="faq">
  <h1>{$_('signup.faq.title')}</h1>

  <div class="faq__q-a">
    <div id="offercontent" class="faq__q-a__offercontent">
      <h3>{$_('signup.faq.questions.offercontent.title')}</h3>
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
    <div id="ecofriendlyservice" class="faq__q-a__ecofriendlyservice">
      <h3>{$_('signup.faq.questions.ecofriendlyservice.title')}</h3>
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
    <div id="data" class="faq__q-a__data">
      <h3>{$_('signup.faq.questions.data.title')}</h3>
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
    <div id="costprice" class="faq__q-a__paidservice">
      <h3>{$_('signup.faq.questions.paidservice.title')}</h3>
      <p>{$_('signup.faq.questions.paidservice.others')}</p>
      <p>{$_('signup.faq.questions.paidservice.iroco')}</p>
    </div>
    <div id="subscription" class="faq__q-a__subscription">
      <h3>{$_('signup.faq.questions.subscription.title')}</h3>
      <p>{$_('signup.faq.questions.subscription.emailservice')}</p>
      <p>{$_('signup.faq.questions.subscription.detail')}</p>
      <ul>
        <li>{$_('signup.faq.questions.subscription.list.taxes')}</li>
        <li>{$_('signup.faq.questions.subscription.list.fee')}</li>
        <li>{$_('signup.faq.questions.subscription.list.deployment')}</li>
        <li>{$_('signup.faq.questions.subscription.list.rest')}</li>
      </ul>
      <Chart size="500" />
    </div>
    <div id="nonbindingoffer" class="faq__q-a__offer">
      <h3>{$_('signup.faq.questions.offer.title')}</h3>
      <p>{$_('signup.faq.questions.offer.p')}</p>
    </div>
    <div id="withdrawal" class="faq__q-a__withdrawal">
      <h3>{$_('signup.faq.questions.withdrawal.title')}</h3>
      <p>{$_('signup.faq.questions.withdrawal.p')}</p>
    </div>
    <div id="configuration" class="faq__q-a__configuration">
      <h3>{$_('signup.faq.questions.configuration.title')}</h3>
      <p>{$_('signup.faq.questions.configuration.introduction')}</p>
      <ul>
        <li>{$_('signup.faq.questions.configuration.imap')}</li>
        <li>{$_('signup.faq.questions.configuration.smtp')}</li>
      </ul>
      <p>{$_('signup.faq.questions.configuration.user')}</p>
      <p>
        {$_('signup.faq.questions.configuration.imap-example')}
        <img alt="imap configuration example" src="/images/imap.png" />
      </p>
      <p>
        {$_('signup.faq.questions.configuration.smtp-example')}
        <img alt="smtp configuration example" src="/images/smtp.png" />
      </p>
    </div>
    <div id="emailsyntax" class="faq__q-a__emailsyntax">
      <h3>{$_('signup.faq.questions.emailsyntax.title')}</h3>
      <p>{$_('signup.faq.questions.emailsyntax.introduction')}</p>
      <p>{$_('signup.faq.questions.emailsyntax.local-part')}</p>
      <p>{$_('signup.faq.questions.emailsyntax.local-part-exclude')}</p>
      <p>
        {$_('signup.faq.questions.emailsyntax.local-part-spec')}
        <a href="https://datatracker.ietf.org/doc/html/rfc5322">RFC 5322</a>.
      </p>
    </div>
    <div id="cookies" class="faq__q-a__cookies">
      <h3>{$_('signup.faq.questions.cookies.title')}</h3>
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
</main>
<Footer />

<style lang="scss">
  @use 'node_modules/@iroco/ui/lib/colors';
  @use 'node_modules/@iroco/ui/lib/constants';
  @import 'node_modules/@iroco/ui/lib/containers';
  @import 'node_modules/@iroco/ui/lib/button';

  .faq {
    background: colors.$nightBlue;
    padding: 4em;

    h1 {
      text-align: center;
    }

    h3 {
      line-height: 1.6em;
    }

    &__paragraph {
      margin: 3em auto;
      width: 70%;
      text-align: center;

      @include screen-laptop {
        width: 90%;
      }
    }

    &__q-a {
      position: relative;
      width: 100%;
      > div {
        margin: 0.5em 2em;
      }
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

      img {
        margin: 1em;
        width: 70%;
        object-fit: cover;

        @include screen-laptop-L {
          width: 85%;
        }
        @include screen-tablet {
          width: 100%;
        }
      }
    }
  }
</style>
