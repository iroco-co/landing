<script lang="ts">
  import { _ } from "svelte-i18n";
  import { Button, Color } from "@iroco/ui";
  import Icon from "svelte-awesome";
  import { chevronRight, chevronDown } from "svelte-awesome/icons";
  import Mail from "../../lib/Mail.svelte";
  import { PUBLIC_APP_SIGNUP_URL } from "$env/static/public";

  const irocoAppSignupUrl = PUBLIC_APP_SIGNUP_URL
  let more = $state(false);

  function toggleMore(): void {
    more = !more;
  }
</script>

<svelte:head>
  <title>{$_("signup.title")}</title>
</svelte:head>

<section class="signup">
  <div class="signup__offer">
    <h1>{$_("signup.offer.title")}</h1>
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
        <Button kind="dark" onclick={toggleMore}>
          {#if more}
            <Icon data={chevronDown} />
          {:else}
            <Icon data={chevronRight} />
          {/if}
          {$_("signup.offer.buttons.details")}
        </Button>
        <div class="signup__offer__card__buttons__more" class:displayed={more}>
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
            display: none;
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
</style>
