<script lang="ts">
	/* eslint svelte/no-at-html-tags: "off" */
	import { _ } from 'svelte-i18n'
	import SubscriptionChart from '$lib/SubscriptionChart.svelte'

</script>

<svelte:head>
	<title>{$_("faq.title")}</title>
</svelte:head>

<section class="faq">
	<div class="faq__content">
		<h1>{$_("faq.title")}</h1>
		<div class="faq__content__toc" id="htop">
			<h2>{$_("faq.category1")}</h2>
			<ul class="no-bullet">
				<li>
					<a href="#offercontent">{$_("faq.questions.offercontent.title")}</a>
				</li>
				<li>
					<a href="#freetrial">{$_("faq.questions.freetrial.title")}</a>
				</li>
				<li>
					<a href="#initialpayment">{$_("faq.questions.initial-payment.title")}</a>
				</li>
				<li>
					<a href="#activationdelay">{$_("faq.questions.activation-delay.title")}</a>
				</li>
				<li>
					<a href="#offer">{$_("faq.questions.offer.title")}</a>
				</li>
				<li><a href="#data">{$_("faq.questions.data.title")}</a></li>
				<li>
					<a href="#advertisements"
					>{$_("faq.questions.advertisements.title")}</a
					>
				</li>
				<li>
					<a href="#ecofriendlyservice"
					>{$_("faq.questions.ecofriendlyservice.title")}</a
					>
				</li>
				<li>
					<a href="#opensource">{$_("faq.questions.opensource.title")}</a>
				</li>
				<li>
					<a href="#location">{$_("faq.questions.location.title")}</a>
				</li>
				<li>
					<a href="#security">{$_("faq.questions.security.title")}</a>
				</li>
				<li>
					<a href="#costprice">{$_("faq.questions.paidservice.title")}</a>
				</li>
				<li>
					<a href="#subscription">{$_("faq.questions.subscription.title")}</a>
				</li>
			</ul>
			<h2>{$_("faq.category2")}</h2>
			<ul class="no-bullet">
				<li>
					<a href="#account">{$_("faq.questions.account.title")}</a>
				</li>
				<li>
					<a href="#emailsyntax">{$_("faq.questions.emailsyntax.title")}</a>
				</li>
				<li>
					<a href="#configuration">{$_("faq.questions.configuration.title")}</a>
				</li>
				<li>
					<a href="#domainname">{$_("faq.questions.domainname.title")}</a>
				</li>
				<li>
					<a href="#webmail">{$_("faq.questions.webmail.title")}</a>
				</li>
				<li>
					<a href="#invalid">{$_("faq.questions.invalid.title")}</a>
				</li>
				<li>
					<a href="#tor">{$_("faq.questions.tor.title")}</a>
				</li>
			</ul>
			<h2>{$_("faq.category3")}</h2>
			<ul class="no-bullet">
				<li>
					<a href="#cookies">{$_("faq.questions.cookies.title")}</a>
				</li>
				<li>
					<a href="#team">{$_("faq.questions.team.title")}</a>
				</li>
			</ul>
		</div>
		<hr />
		<div class="faq__q-a">
			<div id="offercontent" class="faq__q-a__offercontent question">
				<h3>
					<a href="#htop">{$_("faq.questions.offercontent.title")}</a>
				</h3>
				<p>{$_("faq.questions.offercontent.p")}</p>
				<ul>
					<li>{$_("faq.questions.offercontent.list.address")}</li>
					<li>{$_("faq.questions.offercontent.list.mailbox")}</li>
					<li>{$_("faq.questions.offercontent.list.aliases")}</li>
					<li>
						{$_("faq.questions.offercontent.list.contact-calendar")}
					</li>
				</ul>
				<p>
					{$_("faq.questions.offercontent.nowebmail")}
					<a href="#configuration">
						{$_("faq.questions.offercontent.configurationquestion")}
					</a>
				</p>
			</div>
			<div id="freetrial" class="faq__q-a__freetrial question">
				<h3>
					<a href="#htop">{$_("faq.questions.freetrial.title")}</a>
				</h3>
				<p>{$_("faq.questions.freetrial.p")}</p>
			</div>
			<div id="initialpayment" class="faq__q-a__initialpayment question">
				<h3>
					<a href="#htop">{$_("faq.questions.initial-payment.title")}</a>
				</h3>
				<p>{$_("faq.questions.initial-payment.p")}</p>
			</div>
			<div id="activationdelay" class="faq__q-a__initialpayment question">
				<h3>
					<a href="#htop">{$_("faq.questions.activation-delay.title")}</a>
				</h3>
				<p>{$_("faq.questions.activation-delay.p-how")}</p>
				<p>{$_("faq.questions.activation-delay.p-reason")}</p>
				<p>{$_("faq.questions.activation-delay.p-actions")}</p>
				<p><a
					href={$_("faq.questions.activation-delay.href-paywall-history")}>{$_("faq.questions.activation-delay.href-paywall-history")}</a>
				</p>
			</div>
			<div id="offer" class="faq__q-a__offer question">
				<h3>
					<a href="#htop">{$_("faq.questions.offer.title")}</a>
				</h3>
				<p>{$_("faq.questions.offer.p")}</p>
			</div>
			<div id="data" class="faq__q-a__data question">
				<h3><a href="#htop">{$_("faq.questions.data.title")}</a></h3>
				<p>{$_("faq.questions.data.p")}</p>
				<p>{$_("faq.questions.data.personal")}</p>
				<p>{$_("faq.questions.data.access")}</p>
				<p>{$_("faq.questions.data.detail")}</p>
				<ul>
					<li>
						{$_("faq.questions.data.list.provider.collect")}
						<strong>{$_("faq.questions.data.list.provider.lastname")}</strong>,
						<strong>{$_("faq.questions.data.list.provider.firstname")}</strong>
						{$_("faq.questions.data.list.provider.and")}
						<strong>{$_("faq.questions.data.list.provider.invoice")}</strong> .
					</li>
					<li>
						{$_("faq.questions.data.list.also.collect")}
						<strong>{$_("faq.questions.data.list.also.bank")}</strong>
						{$_("faq.questions.data.list.also.noaccess")}
					</li>
					<li>
						{$_("faq.questions.data.list.last.store")}
						<strong>{$_("faq.questions.data.list.last.mail")}</strong>,
						{$_("faq.questions.data.list.last.iroco")}
						<strong>{$_("faq.questions.data.list.last.alias")}</strong>
						{$_("faq.questions.data.list.last.pass")}
						<strong>{$_("faq.questions.data.list.last.encrypted")}</strong>
						{$_("faq.questions.data.list.last.noaccess")}
					</li>
				</ul>
			</div>
			<div id="advertisements" class="faq__q-a__advertisements question">
				<h3>
					<a href="#htop">{$_("faq.questions.advertisements.title")}</a>
				</h3>
				<p>{$_("faq.questions.advertisements.p")}</p>
			</div>
			<div
				id="ecofriendlyservice"
				class="faq__q-a__ecofriendlyservice question"
			>
				<h3>
					<a href="#htop">{$_("faq.questions.ecofriendlyservice.title")}</a>
				</h3>
				<p>{$_("faq.questions.ecofriendlyservice.behind")}</p>
				<p>{$_("faq.questions.ecofriendlyservice.detail")}</p>
				<ul>
					<li>
						{$_("faq.questions.ecofriendlyservice.list.ecoresponsibility")}
					</li>
					<li>
						{$_(
							"faq.questions.ecofriendlyservice.list.ecoconception.frugalapps"
						)}
						<a href="https://blog.iroco.co/">
							{$_("faq.questions.ecofriendlyservice.list.ecoconception.blog")}
						</a>
						{$_("faq.questions.ecofriendlyservice.list.ecoconception.overview")}
					</li>
					<li>
						{$_("faq.questions.ecofriendlyservice.list.ecodesign")}
					</li>
				</ul>
				<p>
					{$_("faq.questions.ecofriendlyservice.impact.numeric")}
					<a href="https://fresquedunumerique.org/">
						{$_("faq.questions.ecofriendlyservice.impact.fresque")}
					</a>
					{$_("faq.questions.ecofriendlyservice.impact.preferences")}
					<a
						href="https://blog.iroco.co/publications-reference-numerique-responsable/"
					>
						{$_("faq.questions.ecofriendlyservice.impact.publications")}
					</a>
					{$_("faq.questions.ecofriendlyservice.impact.question")}
				</p>
				<p>{$_("faq.questions.ecofriendlyservice.print")}</p>
			</div>
			<div id="opensource" class="faq__q-a__opensource question">
				<h3>
					<a href="#htop">{$_("faq.questions.opensource.title")}</a>
				</h3>
				<p>{$_("faq.questions.opensource.p")}</p>
			</div>
			<div id="location" class="faq__q-a__location question">
				<h3>
					<a href="#htop">{$_("faq.questions.location.title")}</a>
				</h3>
				<p>{$_("faq.questions.location.p")}</p>
			</div>
			<div id="security" class="faq__q-a__security question">
				<h3>
					<a href="#htop">{$_("faq.questions.security.title")}</a>
				</h3>
				<p>{$_("faq.questions.security.p")}</p>
			</div>
			<div id="costprice" class="faq__q-a__paidservice question">
				<h3>
					<a href="#htop">{$_("faq.questions.paidservice.title")}</a>
				</h3>
				<p>{$_("faq.questions.paidservice.others")}</p>
				<p>{$_("faq.questions.paidservice.iroco")}</p>
			</div>
			<div id="subscription" class="faq__q-a__subscription question">
				<h3>
					<a href="#htop">{$_("faq.questions.subscription.title")}</a>
				</h3>
				<p>{$_("faq.questions.subscription.emailservice")}</p>
				<p>{$_("faq.questions.subscription.detail")}</p>
				<ul>
					<li>{$_("faq.questions.subscription.list.taxes")}</li>
					<li>{$_("faq.questions.subscription.list.fee")}</li>
					<li>{$_("faq.questions.subscription.list.deployment")}</li>
					<li>{$_("faq.questions.subscription.list.rest")}</li>
				</ul>
				<SubscriptionChart />
			</div>
			<div id="account" class="faq__q-a__account question">
				<h3>
					<a href="#htop">{$_("faq.questions.account.title")}</a>
				</h3>
				<p>{@html $_("faq.questions.account.p")}</p>
			</div>
			<div id="emailsyntax" class="faq__q-a__emailsyntax question">
				<h3>
					<a href="#htop">{$_("faq.questions.emailsyntax.title")}</a>
				</h3>
				<p>{$_("faq.questions.emailsyntax.introduction")}</p>
				<p>{$_("faq.questions.emailsyntax.local-part")}</p>
				<p>{$_("faq.questions.emailsyntax.local-part-exclude")}</p>
				<p>
					{$_("faq.questions.emailsyntax.local-part-spec")}
					<a href="https://datatracker.ietf.org/doc/html/rfc5322">RFC 5322</a>.
				</p>
			</div>
			<div id="configuration" class="faq__q-a__configuration question">
				<h3>
					<a href="#htop">{$_("faq.questions.configuration.title")}</a>
				</h3>
				<p>{$_("faq.questions.configuration.introduction")}</p>
				<ul>
					<li>{$_("faq.questions.configuration.imap")}</li>
					<li>{$_("faq.questions.configuration.smtp")}</li>
				</ul>
				<p>{$_("faq.questions.configuration.user")}</p>
				<p>
					{$_("faq.questions.configuration.imap-example")}
					<img
						class="faq__picture"
						alt="imap configuration example"
						src="/images/imap.png"
					/>
				</p>
				<p>
					{$_("faq.questions.configuration.smtp-example")}
					<img
						class="faq__picture"
						alt="smtp configuration example"
						src="/images/smtp.png"
					/>
				</p>
			</div>
			<div id="domainname" class="faq__q-a__domainname question">
				<h3>
					<a href="#htop">{$_("faq.questions.domainname.title")}</a>
				</h3>
				<p>{$_("faq.questions.domainname.p")}</p>
			</div>
			<div id="webmail" class="faq__q-a__webmail question">
				<h3>
					<a href="#htop">{$_("faq.questions.webmail.title")}</a>
				</h3>
				<p>{$_("faq.questions.webmail.p")}</p>
			</div>
			<div id="invalid" class="faq__q-a__invalid question">
				<h3>
					<a href="#htop">{$_("faq.questions.invalid.title")}</a>
				</h3>
				<p>{@html $_("faq.questions.invalid.p")}</p>
			</div>
			<div id="tor" class="faq__q-a__tor question">
				<h3>
					<a href="#htop">{$_("faq.questions.tor.title")}</a>
				</h3>
				<p>{@html $_("faq.questions.tor.p")}</p>
			</div>
			<div id="cookies" class="faq__q-a__cookies question">
				<h3><a href="#htop">{$_("faq.questions.cookies.title")}</a></h3>
				<p>
					{$_("faq.questions.cookies.weuse")}
					<a href="https://fr.matomo.org/matomo-on-premise/">Matomo</a>
					{$_("faq.questions.cookies.selfhosted")}
					<a
						href="https://www.cnil.fr/sites/default/files/atoms/files/matomo_analytics_-_exemption_-_guide_de_configuration.pdf"
					>
						{$_("faq.questions.cookies.recommendations")}
					</a>
					{$_("faq.questions.cookies.cnil")}
				</p>
				<iframe
					height="270px"
					title="matomo"
					src="https://matomo.iroco.co:8080/index.php?module=CoreAdminHome&action=optOut&language=fr&backgroundColor=211d28&fontColor=f2ebe3&fontSize=&fontFamily=Arial"
				></iframe>
			</div>
			<div id="team" class="faq__q-a__team question">
				<h3>
					<a href="#htop">{$_("faq.questions.team.title")}</a>
				</h3>
				<p>{@html $_("faq.questions.team.p")}</p>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
  @use "@iroco/ui/scss/constants.scss";
  @use "@iroco/ui/scss/containers.scss";
  @use "@iroco/ui/scss/button.scss";

  .faq {
    display: flex;
    justify-content: center;

    &__content {
      width: 70%;

      .question,
      &__toc {
        scroll-margin-top: 10em;
      }

      &__q-a {
        img {
          display: inherit;
          padding-top: 1em;
        }

        &__cookies {
          iframe {
            border: 1px, var(--color-beige);
            border-radius: 2%;
            height: 200px;
            width: 600px;
            margin-top: 20px;

            @include containers.screen-laptop() {
              width: 500px;
              height: 200px;
            }

            @include containers.screen-tablet() {
              width: 450px;
              height: 200px;
            }

            @include containers.screen-tablet-S() {
              width: 400px;
              height: 200px;
            }

            @include containers.screen-mobile-L() {
              width: 350px;
              height: 170px;
            }

            @include containers.screen-mobile-M() {
              width: 300px;
              height: 160px;
            }

            @include containers.screen-mobile-S() {
              width: 250px;
              height: 150px;
            }
          }
        }
      }
    }

    @include containers.screen-laptop() {
      .faq {
        &__content {
          width: 100%;
        }
      }
    }

    &__picture {
      width: 85vw;
    }

    @media only screen and (min-width: 992px) {
      &__picture {
        width: 60vw;
      }
    }
  }
</style>
