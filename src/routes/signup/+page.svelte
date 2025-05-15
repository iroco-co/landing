<script lang="ts">
	import { _ } from 'svelte-i18n'
	import { Color } from '@iroco/ui'
	import Icon from 'svelte-awesome'
	import { chevronRight } from 'svelte-awesome/icons'
	import Mail from '../../lib/Mail.svelte'
	import { PUBLIC_APP_SIGNUP_URL } from '$env/static/public'
	import { base } from '$app/paths'
	import SubscriptionChart from '$lib/SubscriptionChart.svelte'

	const irocoAppSignupUrl = PUBLIC_APP_SIGNUP_URL

</script>

<svelte:head>
	<title>{$_("signup.title")}</title>
</svelte:head>

<section class="signup">
	<div class="signup__offer">
		<h1>{$_("signup.offer.title")}</h1>
		<div class="preamble">
			<p>
				Bonjour,

				Est ce que vous avez 15 minutes devant vous ?
			</p>
			<p>Oui c’est un peu long pour une inscription mail mais fidèles à nos
				valeurs, nous préférons prendre du temps avec vous au démarrage pour que vous puissiez venir chez nous en toute
				conscience. Alors préparez vous une tasse de café, de thé ou de tisane ou de ce que vous voulez (l’équipe
				diverge sur ce point) et allons-y ! Avant de vous asseoir, assurez vous que vous avez l’IBAN du compte avec
				lequel vous souhaitez payer avec vous ainsi que votre téléphone. Maintenant on peut commencer :)

			</p>

			<img
				class="about__image"
				src="/images/Iroco-illustration-a-propos.svg"
				alt="Paper plane leaving behind a heart-shaped trail"
			/>

			<p>
				Nous avons parlé d’un IBAN. Effectivement notre solution mail n’est pas gratuite. Elle coûte 3,60€ par mois avec
				un premier paiement à l’inscription. Ce choix est aligné avec notre modèle : nous préférons proposer
				l'abonnement
				à nos services à un coût modeste plutôt que de nous rémunérer en vendant les données personnelles et la vie
				privée
				de nos utilisateurs au plus offrant.

				Globalement, ce montant permet majoritairement de couvrir les frais d'hébergement et à financer l'équipe mais aussi
				de payer nos taxes et le prestataire de paiement.
			</p>

			<img
				class="about__image"
				src="/images/Iroco-illustration-a-propos.svg"
				alt="Paper plane leaving behind a heart-shaped trail"
			/>

			<p>
				Pour ce prix, nous vous proposons un service de mail sans engagement, respectueux de votre vie privée et de
				l’environnement qui inclut :
			</p>
			
			<ul>
				<li>
					Une adresse mail de votre choix sur le nom de domaine iroco.co ou iroco.io (le choix du nom de domaine n’a pas
					d’impact, c’est juste une question de préférence - dans notre équipe, certains ont choisi le premier juste
					parce que ça faisait très rococo ;))
				</li>
				<li>
					Une boîte mail associée à cette adresse disposant de 5Go d'espace de stockage (ce qui correspond, en ordre de
					grandeur, à 100 000 mails simples (qui font environ 50Ko chacun) ou à 5 000 mails avec une pièce jointe de 1Mo chacun).
				</li>
				<li>
					50 alias, c'est-à-dire des adresses mails secondaires composées sur la base de votre adresse principale. Les
					messages envoyés à ces alias arriveront dans votre boîte de réception principale. 
				</li>
				<li>
					ainsi que la possibilité de gérer vos contacts et calendrier
				</li>
			</ul>

			<img
				class="about__image"
				src="/images/Iroco-illustration-a-propos.svg"
				alt="Paper plane leaving behind a heart-shaped trail"
			/>

			<p>
				Notre offre n'inclut pour le moment pas (encore) de webmail. Qu’est ce que cela veut dire ? Cela signifie que
				vous ne pourrez pas visualiser vos mails via le site Iroco . Pour cela, il faut utiliser des clients de
				messagerie c’est à dire des applications de messagerie neutres comme celles déjà installées dans vos téléphones
				et tablettes ou comme des logiciels disponibles (Thunderbird par exemple, mais il en existe beaucoup d'autres).
				Ne vous inquiétez pas, nous avons des guides pas à pas pour vous aider sur cette étape !
			</p>
			<p>Il vous reste des questions ? N’hésitez pas à consulter notre <a href={`${base}/faq`}>FAQ</a>, nos <a
				href={`${base}/terms`}>CGV</a> ou à
				nous envoyer un email (<a href="mailto:hello@iroco.fr">hello@iroco.fr</a>)  !
				Vous êtes convaincu.e.s ? Parfait - vous pouvez passer à l’étape d’inscription via le bouton ci-dessous
			</p>


			<img
				class="about__image"
				src="/images/clients-messagerie.svg"
				alt="Electronic devices and email clients logos"
			/>

		</div>



		<div class="signup__offer__card">
			<div class="signup__offer__card__svglistgroup">
				<div class="signup__offer__card__svglistgroup__icon">
					<Mail size={165} strokeWidth={1} />
				</div>
				<div class="signup__offer__card__svglistgroup__list">
					<div class="signup__offer__card__svglistgroup__list__header">
						<p>
							{$_("signup.offer.list.pricetaxincluded")}
						</p>
						<p>
							{$_("signup.offer.list.priceprecisions")}
						</p>
					</div>
					<ul class="signup__offer__card__svglistgroup__list__elements">
						<li>{$_("signup.offer.list.email")}</li>
						<li>{$_("signup.offer.list.storage")}</li>
						<li>{$_("signup.offer.list.alias")}</li>
						<li>{$_("signup.offer.list.contact-calendar")}</li>
						<li>{$_("signup.offer.list.hosting")}</li>
						<li>{$_("signup.offer.list.ads")}</li>
						<li>{$_("signup.offer.list.privacy")}</li>
					</ul>
				</div>
			</div>

			<div class="signup__offer__card__buttons">
				<a
					href={irocoAppSignupUrl}
					class="iroco-ui-button iroco-ui-button--regular iroco-ui-button--success"
				>
					<Icon data={chevronRight} color={Color.nightBlue} />
					{$_("signup.offer.buttons.subscribe")}
				</a>
				<details>
					<summary class="iroco-ui-button iroco-ui-button--regular iroco-ui-button--dark">
						{$_("signup.offer.buttons.details")}
					</summary>
					<div class="signup__offer__card__buttons__more">
						<h2>{$_("faq.questions.offercontent.title")}</h2>
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
							<a href="faq#configuration">
								{$_("faq.questions.offercontent.configurationquestion")}
							</a>
						</p>
						<p>{$_("faq.questions.offercontent.soon")}</p>
					</div>
				</details>

			</div>
		</div>
	</div>
</section>

<style lang="scss">
  @use "@iroco/ui/scss/constants.scss";
  @use "@iroco/ui/scss/containers.scss";
  @use "@iroco/ui/scss/button.scss";

  .signup {
    text-align: center;

    &__offer {
      &__card {
        background: var(--color-night-blue);
        border-radius: constants.$border-radius;
        width: 80%;
        margin: 0 auto;

        @include containers.screen-tablet {
          width: 100%;
        }

        &__svglistgroup {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 6em;
          padding: 2em;

          @include containers.screen-tablet {
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

              @include containers.screen-tablet {
                text-align: center;
              }
            }
          }
        }

        &__buttons {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          > a {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .displayed {
            display: block;
          }

          &__more {
            h3 {
              text-align: center;
            }

            text-align: left;
            padding: 2em;
          }
        }
      }
    }
  }

  .preamble {

    p, ul, li {
      min-width: var(--p-min-width, 22ch);
      max-width: var(--p-max-width, 75ch);

      text-align: left;
      margin-left: auto;
      margin-right: auto;
    }

  }


  .about__image {
    margin-left: auto;
    margin-right: auto;
    display: block;
    min-width: var(--p-min-width, 22ch);
    max-width: var(--p-max-width, 50ch);
    padding: 2em 1em;

  }

</style>
